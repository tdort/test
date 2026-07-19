"use strict";
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 1107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__]);
_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    image: {
        display: 'block',
        margin: '0 auto',
        width: '100%',
        maxWidth: '160px',
        height: 'auto'
    }
});
const AdSkyscraper = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: 2
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdSkyscraper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logger)
/* harmony export */ });
const logLevels = {
    development: 0,
    production: 10
};
const logLevel = logLevels["production"];
const groups = {
    redirects: 1,
    feed: 1
};
const logger = {
    group: groups,
    /**
   * Info level
   * @param {keyof typeof groups} group 
   * @param {*} msg 
   * @param  {...any} args 
   * @returns 
   */ info: (group, msg, ...args)=>{
        if (typeof groups[group] === 'undefined') throw new Error('Undefined log group: ' + group);
        if (logLevel < groups[group]) return;
        return console.log('[logger.info]', groups[group], msg, ...args);
    },
    /**
   * Warning level, console.warn equivalent
   * @param {keyof typeof groups} group 
   * @param {*} msg 
   * @param  {...any} args 
   * @returns 
   */ warn: (group, msg, ...args)=>{
        if (typeof groups[group] === 'undefined') throw new Error('Undefined log group: ' + group);
        if (logLevel < groups[group]) return;
        console.warn('[logger.warn]', group, msg, ...args);
    },
    /**
   * Error level. Group is logged but group level is ignored; will always be logged regardless of level
   * @param {keyof typeof groups} group 
   * @param {*} msg 
   * @param  {...any} args 
   * @returns 
   */ err: (group, msg, ...args)=>{
        // always log errors
        console.error('[logger.err]', group, msg, ...args);
    }
};



/***/ })

};
;