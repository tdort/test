"use strict";
exports.id = 5547;
exports.ids = [5547];
exports.modules = {

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useReportStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    text: {
        marginBottom: 0,
        fontSize: '10px',
        marginTop: '15px',
        '&:hover > a': {
            color: '#F00'
        },
        '&:hover > span': {
            backgroundImage: `url("/img/abuse.png")`
        }
    },
    link: {
        color: '#F99',
        paddingLeft: '2px'
    },
    image: {
        height: '13px',
        width: '14px',
        display: 'block',
        float: 'left'
    }
});
/**
 * ReportAbuse button
 * @param {{assetId?: number; id?: number; url?: string; type?: string;}} props 
 * @returns 
 */ const ReportAbuse = (props)=>{
    const url = props.url || window.location.href;
    const s = useReportStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: s.text,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: s.link,
                href: `/abusereport/${props.type || 'asset'}?id=${props.assetId || props.id}&RedirectUrl=${encodeURIComponent(url)}`,
                children: "Report Abuse"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportAbuse);


/***/ })

};
;