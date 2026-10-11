# Setup (one time, ~10 minutes)

Needs Node.js on any computer. Your domain must already be on Cloudflare with the orange cloud (proxied) on.

1. In a terminal: `cd workers/maintenance`, then `npx wrangler login` (opens a browser, click Allow).
2. Create the switch storage: `npx wrangler kv namespace create MAINT_KV`
   It prints an `id = "..."`. Copy that id. This is your **KvNamespaceId**.
3. Open `wrangler.toml`:
   - uncomment the `[[kv_namespaces]]` block and paste the id,
   - uncomment `routes = [...]` and change `zaplix.xyz` to your real domain.
4. Set your staff key (what you type in the white box to get past the page): `npx wrangler secret put BYPASS_KEY`
5. Deploy: `npx wrangler deploy`
6. Get your **AccountId**: Cloudflare dashboard -> any domain -> right column "Account ID" (or `npx wrangler whoami`).
7. Make the **ApiToken**: Cloudflare dashboard -> My Profile -> API Tokens -> Create Token -> Create Custom Token.
   Permission: Account | Workers KV Storage | Edit. Account Resources: your account. Create, copy the token.
8. Add to the backend `appsettings.json` (same level as `GameServerDomain`):
       "Cloudflare": { "ApiToken": "...", "AccountId": "...", "KvNamespaceId": "..." }
   Restart the website backend.
9. Rebuild the admin panel (`cd admin && npm run build`). Then: Admin -> Maintenance -> Turn on.

Test: turn it on, open the site in a private window -> maintenance page. Type your BYPASS_KEY + Enter -> you get in.
