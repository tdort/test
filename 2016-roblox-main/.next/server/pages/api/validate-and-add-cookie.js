"use strict";
(() => {
var exports = {};
exports.id = 4293;
exports.ids = [4293];
exports.modules = {

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ 6695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/config.js
var config = __webpack_require__(3986);
;// CONCATENATED MODULE: ./lib/getFlag.js

const getFlag = (flag, defaultValue)=>{
    const v = config/* default.publicRuntimeConfig.backend.flags */.Z.publicRuntimeConfig.backend.flags[flag];
    if (typeof v === 'undefined') return defaultValue;
    return v;
};
/* harmony default export */ const lib_getFlag = (getFlag);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(3663);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./pages/api/validate-and-add-cookie.js




let csrfKey;
const genKeyIfRequired = ()=>{
    if (!csrfKey) {
        const configKey = config_default()().serverRuntimeConfig.backend.csrfKey;
        if (configKey === undefined || typeof configKey !== 'string' || configKey.trim().length === 0) {
            console.warn('[warning] No serverRuntimeConfig.backend.csrfKey is set, so a random one will be generated for this instance. If you are running multiple instances of 2016-roblox, this may lead to problems. Set the csrfKey to a randomly generated value to remove this warning.');
            csrfKey = (__webpack_require__(3663).randomBytes)(64).toString('base64');
        } else {
            csrfKey = configKey;
        }
    }
};
const generateCsrf = ()=>{
    genKeyIfRequired();
    const csrf = external_crypto_default().randomBytes(32).toString('hex');
    return {
        signed: external_jsonwebtoken_default().sign({
            csrf,
            iat: Date.now()
        }, csrfKey),
        csrf: csrf
    };
};
const csrfValid = (req)=>{
    genKeyIfRequired(); // should never be hit, but added just in case
    try {
        const csrfValue = req.headers['x-csrf-token'];
        const csrfCookie = req.cookies['.LoginCSRF'];
        if (typeof csrfValue === 'string') {
            if (typeof csrfCookie === 'string') {
                const decoded = external_jsonwebtoken_default().verify(csrfCookie, csrfKey);
                if (decoded.iat > Date.now() - 300 * 1000 && decoded.csrf === csrfValue) {
                    return true;
                }
            }
        }
    } catch (e) {}
    return false;
};
function handler(req, res) {
    if (!lib_getFlag('requireLoginThroughCookie', true)) {
        res.status(500).json({
            success: false
        });
        return;
    }
    if (!csrfValid(req)) {
        const newCsrf = generateCsrf();
        res.setHeader('Set-Cookie', `.LoginCSRF=${newCsrf.signed}; Max-Age=${300}; Path=/; HttpOnly`);
        res.setHeader('x-csrf-token', newCsrf.csrf);
        return res.status(403).json({
            success: false,
            message: 'Invalid CSRF token'
        });
    }
    const cookie = req.body.cookie;
    if (typeof cookie !== 'string' || cookie.trim().length === 0) {
        res.status(400).json({
            success: false,
            message: 'Invalid cookie'
        });
        return;
    }
    const setCookieRequest = `.ZEKOSECURITY=${cookie}; Max-Age=${86400 * 365}; Path=/; HttpOnly; SameSite=Lax`;
    const clearOldCookie = `.ROBLOSECURITY=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`;
    res.setHeader('Set-Cookie', [
        setCookieRequest,
        clearOldCookie
    ]);
    res.status(200).json({
        success: true
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6695));
module.exports = __webpack_exports__;

})();