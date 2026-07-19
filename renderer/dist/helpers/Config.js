"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const conf = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, '../../config.json')).toString());
exports.default = conf;
(0, assert_1.strictEqual)(typeof conf.authorization, 'string');
(0, assert_1.strictEqual)(typeof conf.baseUrl, 'string');
(0, assert_1.strictEqual)(typeof conf.rccPort, 'number');
(0, assert_1.strictEqual)(typeof conf.port, 'number');
(0, assert_1.strictEqual)(typeof conf.websiteBotAuth, 'string');
(0, assert_1.strictEqual)(typeof conf.thumbnailWebsocketPort, 'number');
(0, assert_1.strictEqual)(typeof conf.webhook, 'string');
if (typeof conf.rcc !== 'undefined') {
    (0, assert_1.strictEqual)(typeof conf.rcc === 'string' && conf.rcc.length > 0, true);
}
//# sourceMappingURL=Config.js.map