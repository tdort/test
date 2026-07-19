"use strict";
exports.id = 8756;
exports.ids = [8756];
exports.modules = {

/***/ 9159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const config = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ 465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mn": () => (/* binding */ getFullUrl),
/* harmony export */   "SV": () => (/* binding */ getBaseUrl),
/* harmony export */   "p9": () => (/* binding */ getUrlWithProxy)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9159);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let _csrf = '';
const getFullUrl = (apiSite, fullUrl)=>{
    return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].publicRuntimeConfig.backend.apiFormat.replace */ .Z.publicRuntimeConfig.backend.apiFormat.replace(/\{0\}/g, apiSite).replace(/\{1\}/g, fullUrl);
};
const getBaseUrl = ()=>{
    return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].publicRuntimeConfig.backend.baseUrl */ .Z.publicRuntimeConfig.backend.baseUrl;
};
// No proxy regardless cause there's nothing for it anyway
const getUrlWithProxy = (url)=>{
    if (_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].publicRuntimeConfig.backend.proxyEnabled */ .Z.publicRuntimeConfig.backend.proxyEnabled) return '' + url;
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
            const authHeaderValue = _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].serverRuntimeConfig.backend.authorization */ .Z.serverRuntimeConfig.backend.authorization;
            if (typeof authHeaderValue === 'string') headers[_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].serverRuntimeConfig.backend.authorizationHeader */ .Z.serverRuntimeConfig.backend.authorizationHeader || 'authorization'] = authHeaderValue;
            // Custom user agent
            headers['user-agent'] = 'Roblox2016/1.0';
        }
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;