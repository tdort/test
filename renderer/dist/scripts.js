"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Config_1 = require("./helpers/Config");
const env = Config_1.default.baseUrl.indexOf('localhost') !== -1 ? 'development' : 'production';
console.log('Env =', env);
const scripts = {
    // Thumbs
    playerThumbnail: fs.readFileSync(path.join(__dirname, '../scripts/player/thumbnail.lua')).toString(),
    playerHeadshot: fs.readFileSync(path.join(__dirname, '../scripts/player/headshot.lua')).toString(),
    imageTexture: fs.readFileSync(path.join(__dirname, '../scripts/asset/image.lua')).toString(),
    assetThumbnail: fs.readFileSync(path.join(__dirname, '../scripts/asset/asset.lua')).toString(),
    meshThumbnail: fs.readFileSync(path.join(__dirname, '../scripts/asset/mesh.lua')).toString(),
    gameThumbnail: fs.readFileSync(path.join(__dirname, '../scripts/asset/game.lua')).toString(),
    headThumbnail: fs.readFileSync(path.join(__dirname, '../scripts/asset/head.lua')).toString(),
};
for (const s in scripts) {
    scripts[s] = scripts[s]
        // set base url
        .replace(/local url = "base_url"/g, `local url = "${Config_1.default.baseUrl}"`)
        // set access key
        .replace(/_AUTHORIZATION_STRING_/g, Config_1.default.authorization.replace('"', '\\"'))
        .replace(/isDebugServer = false/g, env === 'development' ? 'isDebugServer = true' : 'isDebugServer = false')
        // set upload url
        // .replace(/UPLOAD_URL_HERE/g, (dockerEnabled ? 'http://host.docker.internal' : 'http://127.0.0.1:') + conf.port + '/api/upload-thumbnail-v1')
        .replace(/UPLOAD_URL_HERE/g, 'http://127.0.0.1:' + Config_1.default.port + '/api/upload-thumbnail-v1')
        .replace(/AccessKey/g, Config_1.default.authorization.replace('"', '\\"'))
        .replace(/local baseURL = "http:\/\/localhost";/g, `local baseURL = "${Config_1.default.baseUrl}";`)
        // replace all other http://localhost occurrences cause sometimes it fucks up
        .replace(/http:\/\/localhost/g, Config_1.default.baseUrl);
}
exports.default = () => {
    return scripts;
};
//# sourceMappingURL=scripts.js.map