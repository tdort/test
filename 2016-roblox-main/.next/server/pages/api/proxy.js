"use strict";
(() => {
var exports = {};
exports.id = 5774;
exports.ids = [5774];
exports.modules = {

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7072:
/***/ ((module) => {

module.exports = import("parse-domain");;

/***/ }),

/***/ 3986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const config = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ 7734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SV": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* unused harmony exports getFullUrl, getUrlWithProxy */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3986);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let _csrf = '';
const getFullUrl = (apiSite, fullUrl)=>{
    return config.publicRuntimeConfig.backend.apiFormat.replace(/\{0\}/g, apiSite).replace(/\{1\}/g, fullUrl);
};
const getBaseUrl = ()=>{
    return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].publicRuntimeConfig.backend.baseUrl */ .Z.publicRuntimeConfig.backend.baseUrl;
};
// No proxy regardless cause there's nothing for it anyway
const getUrlWithProxy = (url)=>{
    if (config.publicRuntimeConfig.backend.proxyEnabled) return '' + url;
    return url;
};
const shouldRedirect = (path)=>{
    const noRedir = [
        /*     '/catalog',
    '/users',
    '/games', */ '/My/GroupAdmin.aspx'
    ];
    return !noRedir.some((noRedirectPath)=>path.startsWith(noRedirectPath)
    );
};
const request = async (method, url, data)=>{
    const isBrowser = "undefined" !== 'undefined';
    try {
        let headers = {
            'x-csrf-token': _csrf
        };
        if (!isBrowser) {
            // Auth header, if required
            const authHeaderValue = config.serverRuntimeConfig.backend.authorization;
            if (typeof authHeaderValue === 'string') headers[config.serverRuntimeConfig.backend.authorizationHeader || 'authorization'] = authHeaderValue;
            // Custom user agent
            headers['user-agent'] = 'Roblox2016/1.0';
        }
        const result = await axios.request({
            method,
            url: getUrlWithProxy(url),
            data: data,
            headers: headers,
            maxRedirects: 0
        });
        return result;
    } catch (e) {
        if (e.response) {
            let resp = e.response;
            // Handle CSRF
            if (resp.status === 403 && resp.headers['x-csrf-token']) {
                _csrf = resp.headers['x-csrf-token'];
                return await request(method, url, data);
            }
        /*    // Unauthorized
      if (resp.status === 401 && isBrowser) {
        const currentPath = window.location.pathname;
        if (currentPath !== '/logout' && shouldRedirect(currentPath)) {
          Router.push('/logout');
        }
        throw new Error('Unauthorized');
      } */ }
        if (isBrowser) {
            if (e.response) {
                if (e.response.data && e.response.data.errors && e.response.data.errors.length) {
                    let err = e.response.data.errors[0];
                    e.message = e.message + ': ' + (err.code + ': ' + err.message);
                }
            }
            throw e;
        } else {
            throw new Error(e.message);
        }
    }
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (request)));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "UrlUtilities": () => (/* binding */ UrlUtilities)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parse_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7072);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7734);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, parse_domain__WEBPACK_IMPORTED_MODULE_2__, _lib_request__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, parse_domain__WEBPACK_IMPORTED_MODULE_2__, _lib_request__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const UrlUtilities = (()=>{
    const getDomainFromUrl = (url)=>{
        const baseDomainParsed = (0,parse_domain__WEBPACK_IMPORTED_MODULE_2__.parseDomain)((0,parse_domain__WEBPACK_IMPORTED_MODULE_2__.fromUrl)(url));
        if (baseDomainParsed.type === parse_domain__WEBPACK_IMPORTED_MODULE_2__.ParseResultType.Listed) {
            return baseDomainParsed.domain + '.' + baseDomainParsed.topLevelDomains.join('.');
        } else if (baseDomainParsed.type === parse_domain__WEBPACK_IMPORTED_MODULE_2__.ParseResultType.Ip) {
            return baseDomainParsed.hostname;
        } else if (baseDomainParsed.type === parse_domain__WEBPACK_IMPORTED_MODULE_2__.ParseResultType.Reserved) {
            if (baseDomainParsed.hostname === 'localhost') {
                return 'localhost';
            }
            throw new Error('The only allowed reserved domain type is localhost, got ' + baseDomainParsed.hostname);
        } else {
            throw new Error('Unsupported domain type: ' + baseDomainParsed.type);
        }
    };
    const baseWithDomainAndTld = getDomainFromUrl((0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getBaseUrl */ .SV)()).toLowerCase();
    return {
        isSafe: (rawUrl)=>{
            const parsedWithDomainAndTld = getDomainFromUrl(rawUrl).toLowerCase();
            return parsedWithDomainAndTld === baseWithDomainAndTld;
        }
    };
})();
const actualHandler = async (req, res)=>{
    const fullUrl = req.query.url;
    // Right now we just validate the URL. 
    // A safer approach might be to just send the parts of the URL (query params, path, api site) to this handler, then construct the correct URL here.
    const isUrlSafe = UrlUtilities.isSafe(fullUrl); // typeof fullUrl === 'string' && fullUrl.toLowerCase().startsWith(getBaseUrl())
    if (next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.backend.proxyEnabled !== true || !isUrlSafe) {
        return res.status(500).json({
            success: false
        });
    }
    try {
        let requestHeaders = {
            cookie: req.headers['cookie'] || '',
            'x-csrf-token': req.headers['x-csrf-token'] || '',
            'user-agent': req.headers['user-agent']
        };
        const authHeaderValue = next_config__WEBPACK_IMPORTED_MODULE_1___default()().serverRuntimeConfig.backend.authorization;
        if (typeof authHeaderValue === 'string') requestHeaders[next_config__WEBPACK_IMPORTED_MODULE_1___default()().serverRuntimeConfig.backend.authorizationHeader || 'authorization'] = authHeaderValue;
        // TODO: whitelisted headers might be safer...
        for(const key in req.headers){
            if (key === 'host' || key === 'connection' || key === 'accept-encoding' || key === 'host') {
                continue;
            }
            requestHeaders[key] = req.headers[key];
        }
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
            method: req.method,
            url: fullUrl,
            data: req.body,
            maxRedirects: 0,
            headers: requestHeaders,
            validateStatus: ()=>true
        });
        for (const item of Object.getOwnPropertyNames(result.headers)){
            let value = result.headers[item];
            if (item === 'set-cookie') {
                // TODO: "localhost" needs to be configurable
                if (typeof value === 'string') {
                    value = value.replace(/roblox\.com/g, 'localhost');
                } else {
                    value.forEach((v, i, arr)=>{
                        arr[i] = v.replace(/roblox\.com/g, 'localhost');
                    });
                }
            }
            res.setHeader(item, value);
        }
        res.status(result.status);
        res.send(result.data);
        res.end();
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false
        });
        res.end();
    }
};
function handler(req, res) {
    return new Promise((resolve, reject)=>{
        let chunks = [];
        req.on('data', function(chunk) {
            chunks.push(chunk);
        });
        req.on('end', function() {
            req.body = Buffer.concat(chunks);
            actualHandler(req, res).then(()=>resolve()
            ).catch((e)=>reject(e)
            );
        });
    });
};
const config = {
    api: {
        bodyParser: false
    }
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1021));
module.exports = __webpack_exports__;

})();