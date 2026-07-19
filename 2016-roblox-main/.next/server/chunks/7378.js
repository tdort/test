"use strict";
exports.id = 7378;
exports.ids = [7378];
exports.modules = {

/***/ 7378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);



const useBuyButtonStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    btn: {
        textAlign: 'center',
        padding: '1px 13px 3px 13px',
        fontSize: '20px',
        color: 'white',
        border: '1px solid #357ebd',
        margin: '0 auto',
        display: 'block',
        fontWeight: 'normal',
        '&:disabled': {
            opacity: '0.5'
        }
    },
    wrapper: {
        width: '100%',
        border: '1px solid #a7a7a7',
        background: '#e1e1e1'
    },
    defaultBg: {
        background: 'linear-gradient(0deg, rgba(0,113,0,1) 0%, rgba(64,193,64,1) 100%)',
        '&:hover': {
            background: 'linear-gradient(0deg, rgba(71,232,71,1) 0%, rgba(71,232,71,1) 100%)'
        }
    }
});
const ActionButton = (props)=>{
    const s = useBuyButtonStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: props.divClassName,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            disabled: props.disabled,
            className: s.btn + ' ' + (props.className || s.defaultBg),
            onClick: props.onClick,
            title: props.disabled ? props.tooltipText : '',
            children: props.label || 'Buy Now'
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);


/***/ })

};
;