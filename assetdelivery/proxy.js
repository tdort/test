const express = require('express');
const http = require('http');
const https = require('https');
const { URL } = require('url');
const axios = require('axios');

const app = express();
const PORT = 1114;

// hardcoded cookie (exactly as provided)
const ROBLOX_COOKIE = '.ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEaAhADIhwKBGR1aWQSFDE2MjEzOTM0NjczNjQwMjk1ODI1KAM.RyI1Usb96MVV2Xxktw5oxRzKTlxRUp_GNiqJ6mQmVELkmL720vvXEOkno-zdibEvZ4XWjjya6bPbrZ0rQy8K2relrOi--0YL7g5dc8M6R-8LpaJxUE7nEeTgtRz3weFaWMmqmFPoMWJc6zLO6MW-GPg_wwd-rZj3J3BDA6IIRhi2tDc0lmkqAd6P3ojdOLQbgZv2s6-cWRsqLWOpf1POJiYzA9zn23-54XPGQktzRmbZUj893_1u-L_jyySKhFKFES8CWEeBSJn4whSTfbjOtpjU1GbQGfInrJogV1lcmS_j_HVbpt4_XoGp6ksOefKJnh5Y5vFNDbOOBuUXDUolTdp3SVyDAOROvzauZmbkQcY5OB1pCiyTneFpdOW_v4hFKNsXF95aoH5FlNLJAWVB2mrHtI6xGWbv_d2u29FUSiTkGYLA7SCss22S9tQf05vpHWt2jqTf0xHmLnNllMOxNVpAmN0EV7crOWIweUMWxPUVDBnfJGFq6XzFMexijgbbR6AtEUEmub8PlNyEjiUOYCd_s1At4SWqy-6zpB_8uBu-ow31-gaIqrIiaTGt6eW8kYbSh7mleMJCNdfEu5ZJwmAmoHBwsfKSnH78p1w3s3cWS-bqx8bYw1c5gd-1Zyy-3Qd3fJItVnCJemRGCMpcKuSAtqNx0Ds8RAofm-aLuj5-_LZwY7Rh3065HOTqBsWsbt8ZqlLqLEMmlWFiZy1ZhdeEX__ALxfYpsrSNNGhAnDxfsWR_xQh7Ms6Q6lCe_bYsiSsXmr_jbt2DQVZHZmFL2DbY0o';

// No body parser needed for simple asset proxying unless we do POST, 
// but even then we can pipe the raw stream. Keeping it simple.
// app.use(express.raw({ type: '*/*', limit: '100mb' }));

// logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// core proxy handler
function handleProxy(req, res, targetUrl, depth = 0, onFailure = null) {
  if (depth > 5) return res.status(508).send('too many redirects');

  let parsed;
  try {
    parsed = new URL(targetUrl);
  } catch {
    return res.status(400).send('invalid url');
  }

  console.log(`[depth ${depth}] → proxying to:`, parsed.href);

  const isHttps = parsed.protocol === 'https:';
  const client = isHttps ? https : http;

  // Strip problematic headers that might cause the proxy to hang or fail
  const headers = {
    'user-agent': 'Roblox/WinInet',
    'accept': '*/*',
    'connection': 'keep-alive',
    'cookie': ROBLOX_COOKIE
  };

  const options = {
    hostname: parsed.hostname,
    port: parsed.port || (isHttps ? 443 : 80),
    method: req.method,
    path: parsed.pathname + parsed.search,
    headers
  };

  const proxyReq = client.request(options, proxyRes => {
    console.log(`[depth ${depth}] ← status:`, proxyRes.statusCode);

    // If a failure callback is provided and it's a failure status
    if (onFailure && proxyRes.statusCode >= 400) {
      if (onFailure(proxyRes.statusCode)) return;
    }

    // Follow redirects
    if ([301, 302, 307, 308].includes(proxyRes.statusCode) && proxyRes.headers.location) {
      let nextUrl = proxyRes.headers.location;
      if (!nextUrl.startsWith('http')) {
        nextUrl = new URL(nextUrl, targetUrl).href;
      }
      return handleProxy(req, res, nextUrl, depth + 1, onFailure);
    }

    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', err => {
    console.error('proxy error:', err.message);
    if (!res.headersSent) res.status(502).send('bad gateway');
  });

  if (req.body && req.body.length && depth === 0) {
    proxyReq.write(req.body);
  }

  proxyReq.end();
}

// /asset/ or /v1/asset/
app.all(['/asset', '/v1/asset'], async (req, res) => {
  const assetId = req.query.id || req.query.assetId || req.params.id;
  if (!assetId) return res.status(400).send('missing ?id=');

  // Custom fetcher with V2 fallback
  const tryV2 = async () => {
    const v2Url = `https://assetdelivery.roblox.com/v2/asset?id=${assetId}`;
    try {
      const response = await axios.get(v2Url, {
        headers: { 'Cookie': ROBLOX_COOKIE, 'User-Agent': 'Roblox/WinInet' },
        timeout: 10000
      });
      if (response.data && response.data.locations) {
        const source = response.data.locations.find(loc => loc.assetFormat === 'source' || loc.assetFormat === '');
        if (source && source.location) {
          console.log(`[V2 Fallback] Found location for ${assetId}`);
          return handleProxy(req, res, source.location);
        }
      }
      res.status(404).send('Asset not found on V1 or V2');
    } catch (err) {
      console.error(`[V2 Fallback] Failed for ${assetId}:`, err.message);
      if (!res.headersSent) res.status(502).send('Error fetching from V2');
    }
  };

  // We wrap the original handleProxy logic slightly to allow fallback
  // but for simplicity, we'll just try to check if V1 is likely to work
  // Actually, handleProxy sends response directly. 
  // Let's just use the v1 URL and if it fails (not 200/3xx), we try v2.

  const v1Url = `https://assetdelivery.roblox.com/v1/asset/?id=${assetId}`;

  // We'll use a modified handleProxy that can callback on failure
  handleProxy(req, res, v1Url, 0, (status) => {
    if (status === 404 || status === 403 || status === 405) {
      console.log(`[V1 Failed] Status ${status} for ${assetId}, trying V2...`);
      tryV2();
      return true; // handled
    }
    return false;
  });
});

// Add /v1/assetId/:id support specifically
app.get('/v1/assetId/:id', (req, res) => {
  const assetId = req.params.id;
  const targetUrl = `https://assetdelivery.roblox.com/v1/assetId/${assetId}`;
  handleProxy(req, res, targetUrl);
});

// /proxy?url=
app.all('/proxy', (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('missing ?url=');

  const fullUrl = targetUrl.startsWith('http')
    ? targetUrl
    : 'https://' + targetUrl;

  handleProxy(req, res, fullUrl);
});

// legacy /v1/* passthrough
app.all(/^\/v1\/.*/, (req, res) => {
  const targetUrl = 'https://queef.bond' + req.originalUrl;
  handleProxy(req, res, targetUrl);
});

app.listen(PORT, () => {
  console.log(`proxy running on http://localhost:${PORT}`);
});
