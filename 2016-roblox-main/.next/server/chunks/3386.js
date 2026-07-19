"use strict";
exports.id = 3386;
exports.ids = [3386];
exports.modules = {

/***/ 3584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

const useForumStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)({
    header: {},
    headerRow: {
        background: '#29508d',
        '& th': {
            fontSize: '1.25rem',
            color: '#fff',
            fontWeight: 500,
            paddingLeft: '0.25rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem'
        }
    },
    bodyRow: {
        background: '#f9f9f9',
        '&:hover': {
            background: '#e9e9e9'
        }
    },
    lastPostHeader: {
        minWidth: '110px'
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForumStyles);


/***/ }),

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const Link = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: props.href,
        children: props.children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 2300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9159);

const getFlag = (flag, defaultValue)=>{
    const v = _config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].publicRuntimeConfig.backend.flags */ .Z.publicRuntimeConfig.backend.flags[flag];
    if (typeof v === 'undefined') return defaultValue;
    return v;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlag);


/***/ })

};
;