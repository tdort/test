"use strict";
exports.id = 4998;
exports.ids = [4998];
exports.modules = {

/***/ 4008:
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



const useSelectorStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    selectorWrapper: {},
    selectorClosed: {
        padding: '10px 15px',
        textAlign: 'left',
        width: '100%',
        color: '#666',
        background: 'white',
        borderRadius: '4px',
        border: '1px solid #c3c3c3',
        fontSize: '16px',
        userSelect: 'none',
        cursor: 'pointer',
        '&:hover': {
            background: '#01a2fd',
            color: '#ffffff'
        }
    },
    selectorOpen: {
        background: '#01a2fd',
        color: '#ffffff'
    },
    selectorCaret: {
        float: 'right'
    },
    selectorMenuOpen: {
        position: 'absolute',
        width: '100%',
        background: 'white',
        zIndex: 3
    },
    selectOption: {
        padding: '10px 15px',
        marginBottom: 0,
        cursor: 'pointer',
        userSelect: 'none',
        fontSize: '16px',
        '&:hover': {
            boxShadow: '4px 0 0 0 #00a2ff inset'
        }
    }
});
/**
 * 
 * @param {{options: {name: string; value: any}[]; onChange: (v: any) => void; value?: any}} props
 * @returns 
 */ const Selector = (props)=>{
    const s = useSelectorStyles();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        if (props.value) {
            return props.options.find((v)=>v.value === props.value
            );
        }
        return props.options[0];
    });
    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.selectorWrapper,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: selectorRef,
                className: s.selectorClosed + ' ' + (open ? s.selectorOpen : ''),
                onClick: ()=>{
                    setOpen(!open);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: selected.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: s.selectorCaret,
                        children: "V"
                    })
                ]
            }),
            open && selectorRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.selectorMenuOpen,
                style: {
                    width: selectorRef.current.clientWidth + 'px'
                },
                children: props.options.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.selectOption,
                        onClick: ()=>{
                            setSelected(v);
                            setOpen(false);
                            props.onChange(v);
                        },
                        children: v.name
                    }, v.value));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);


/***/ }),

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Theme2016 = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "theme-2016-enabled"
            }),
            props.children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme2016);


/***/ }),

/***/ 3633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);

const useCardStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_0__.createUseStyles)({
    card: {
        borderRadius: 0,
        boxShadow: '0 1px 4px 0 rgb(25 25 25 / 30%)',
        background: 'white'
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCardStyles);


/***/ })

};
;