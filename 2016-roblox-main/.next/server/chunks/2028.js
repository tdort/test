"use strict";
exports.id = 2028;
exports.ids = [2028];
exports.modules = {

/***/ 2028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useRobuxStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    text: {
        color: '#060',
        fontWeight: 'bold',
        fontSize: '12px'
    },
    image: {
        background: `url("/img/img-robux.png")`,
        width: '18px',
        height: '12px',
        float: 'left',
        marginLeft: '0',
        marginTop: '4px',
        marginRight: '2px'
    },
    prefix: {
        float: 'left',
        marginRight: '4px'
    }
});
const Robux = (props)=>{
    const s = useRobuxStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            props.prefix ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.text + ' ' + s.prefix,
                children: props.prefix
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.text,
                children: props.children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Robux);


/***/ })

};
;