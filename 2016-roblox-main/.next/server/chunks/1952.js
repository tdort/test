"use strict";
exports.id = 1952;
exports.ids = [1952];
exports.modules = {

/***/ 1952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    modalBg: {
        background: 'rgba(0,0,0,0.8)',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        left: 0,
        zIndex: 9999
    },
    modalWrapper: {
        width: '400px',
        height: '250px',
        backgroundColor: '#e1e1e1',
        margin: '0 auto',
        border: '1px solid #a3a3a3',
        marginTop: 'calc(50vh - 125px)'
    },
    title: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '24px',
        marginTop: '10px'
    },
    innerSection: {
        padding: '4px 8px',
        background: 'white',
        width: '100%',
        height: '205px',
        border: '4px solid #e1e1e1'
    },
    footerText: {
        textAlign: 'center',
        marginBottom: '0',
        marginTop: '14px',
        fontSize: '12px',
        fontWeight: 600,
        color: 'grey'
    },
    closeButtonWrapper: {
        float: 'right'
    },
    closeButton: {
        position: 'relative',
        top: '-30px',
        right: '10px',
        height: '20px',
        width: '20px',
        background: '#666',
        borderRadius: '100%',
        textAlign: 'center',
        color: '#FFFFFF',
        paddingTop: '2px',
        paddingLeft: '1px',
        fontWeight: 700,
        fontFamily: 'sans-serif',
        cursor: 'pointer'
    }
});
const OldModal = (props)=>{
    const showClose = props.onClose || false;
    const s = useStyles();
    const outerStyles = {};
    const innerStyles = {};
    if (props.height) {
        outerStyles.height = props.height + 50;
        innerStyles.height = props.height;
        outerStyles.marginTop = `calc(50vh - ${Math.trunc(innerStyles.height / 2)}px)`;
    }
    if (props.width) {
        outerStyles.width = props.width + 2;
        innerStyles.width = props.width;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.modalBg,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.modalWrapper,
            style: outerStyles,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: s.title,
                    children: props.title
                }),
                showClose && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.closeButtonWrapper,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.closeButton,
                        onClick: (e)=>{
                            e.preventDefault();
                            props.onClose();
                        },
                        children: "X"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.innerSection,
                    style: innerStyles,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: props.children
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OldModal);


/***/ })

};
;