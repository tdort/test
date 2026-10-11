# Maintenance worker

Cloudflare Worker that shows the "offline for maintenance" page when
- `MAINTENANCE = "on"` (or KV key `maintenance` = `on`), or
- your origin is down (5xx / Cloudflare 52x).

Staff get through by typing the bypass key into the white box on the page and pressing Enter (12h cookie).
The VPS IP and RCC/game endpoints (`ALLOW_IPS`, `ALLOW_PATHS`) always pass through.

Deploy:
    cd workers/maintenance
    npx wrangler login
    npx wrangler secret put BYPASS_KEY      # your staff key
    # uncomment `routes` in wrangler.toml, then:
    npx wrangler deploy

Turn on:   set MAINTENANCE = "on" and redeploy, or with KV: npx wrangler kv key put --binding=MAINT_KV maintenance on
Turn off:  the same with "off".
