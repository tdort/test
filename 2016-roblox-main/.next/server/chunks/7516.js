"use strict";
exports.id = 7516;
exports.ids = [7516];
exports.modules = {

/***/ 7516:
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
/* harmony import */ var _userProfile_styles_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3633);




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        marginTop: '-20px',
        cursor: 'pointer',
        userSelect: 'none',
        '&:hover': {}
    },
    dropdown: {
        width: '125px',
        background: 'white',
        position: 'absolute',
        right: '-20px',
        borderRadius: '2px'
    },
    dropdownEntry: {
        width: '100%',
        '&:hover': {
            background: '#e3e3e3'
        }
    },
    dropdownText: {
        marginBottom: 0,
        fontSize: '16px',
        padding: '8px 10px',
        color: 'rgb(33, 37, 41)'
    },
    dropdownDots: {
        letterSpacing: '3px',
        fontWeight: 100
    }
});
/**
 * Dropdown
 * @param {{options: {url?: string; name: string; onClick?: (e: any) => void}[]}} props 
 * @returns 
 */ const Dropdown2016 = (props)=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const cardStyles = (0,_userProfile_styles_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.wrapper,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: 'mb-0 ' + s.dropdownDots,
                onClick: ()=>{
                    setIsOpen(!isOpen);
                },
                children: "..."
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.dropdown + ' ' + cardStyles.card,
                children: props.options.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: v.url || '#',
                        onClick: v.onClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.dropdownEntry,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: s.dropdownText,
                                children: v.name
                            })
                        }, v.name)
                    }));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown2016);


/***/ })

};
;