"use strict";
exports.id = 4081;
exports.ids = [4081];
exports.modules = {

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    buttonWrapper: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '300px'
    },
    buttonPaginate: {
        color: '#1a1a1a',
        background: '#fff',
        border: '1px solid #dbdbdb',
        padding: '0px 12px',
        fontSize: '24px',
        fontWeight: 600,
        borderRadius: '4px',
        marginBottom: 0,
        height: '34px',
        cursor: 'pointer'
    },
    textCurrentPage: {
        margin: '8px 16px 0 16px',
        fontWeight: '300'
    },
    buttonPaginateDisabled: {
        color: '#c3c3c3',
        cursor: 'default'
    }
});
const Paging = (props)=>{
    const { totalItems , limit , page , nextPageAvailable , previousPageAvailable , loadPreviousPage , loadNextPage  } = props;
    const s = useStyles();
    const totalDisplay = totalItems ? 'of ' + Math.ceil(totalItems / limit) : nextPageAvailable() ? 'of many' : null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: s.buttonWrapper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.buttonPaginate + ' ' + (!previousPageAvailable() ? s.buttonPaginateDisabled : ''),
                        onClick: ()=>{
                            if (previousPageAvailable()) loadPreviousPage();
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: '<'
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: s.textCurrentPage,
                        children: [
                            "Page ",
                            page,
                            " ",
                            totalDisplay
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.buttonPaginate + ' ' + (!nextPageAvailable() ? s.buttonPaginateDisabled : ''),
                        onClick: ()=>{
                            if (nextPageAvailable()) loadNextPage();
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: '>'
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paging);


/***/ })

};
;