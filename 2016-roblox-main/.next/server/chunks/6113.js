"use strict";
exports.id = 6113;
exports.ids = [6113];
exports.modules = {

/***/ 6113:
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




const useTabEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    entry: {
        textAlign: 'center',
        marginBottom: 0,
        fontSize: '18px',
        paddingBottom: '8px',
        paddingTop: '8px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0 -4px 0 0 #00a2ff inset'
        }
    },
    entryActive: {
        boxShadow: '0 -4px 0 0 #00a2ff inset'
    }
});
const TabEntry = (props)=>{
    const s = useTabEntryStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: s.entry + ' ' + (props.tab === props.children ? s.entryActive : ''),
        onClick: ()=>{
            props.setTab(props.children);
        },
        children: props.children
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    row: {
        paddingLeft: '10px',
        paddingRight: '10px'
    }
});
const Tabs2016 = (props)=>{
    const s = useStyles();
    const cardStyles = (0,_userProfile_styles_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.options[0]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row mt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: cardStyles.card,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: 'row ' + s.row,
                    children: props.options.map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col ps-0 pe-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabEntry, {
                                tab: tab,
                                setTab: ()=>{
                                    props.onChange(v);
                                    setTab(v);
                                },
                                children: v
                            })
                        }, v));
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs2016);


/***/ })

};
;