"use strict";
exports.id = 7328;
exports.ids = [7328];
exports.modules = {

/***/ 7328:
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



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    box: {
        width: '40px',
        float: 'right',
        border: '1px solid #777777',
        background: 'linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%)',
        '&:hover': {
            background: 'linear-gradient(0deg, rgba(203,216,255,1) 0%, rgba(255,255,255,1) 100%)'
        },
        cursor: 'pointer',
        userSelect: 'none'
    },
    boxOpen: {
        background: 'rgb(224,224,224)'
    },
    gear: {
        backgroundImage: `url("/img/Unofficial/settings-gear.png")`,
        height: '12px',
        width: '12px',
        display: 'block',
        backgroundSize: '12px 12px',
        backgroundPosition: '0 0'
    },
    gearWrapper: {
        paddingLeft: '5px',
        paddingTop: '5px',
        paddingBottom: '2px',
        display: 'inline-block'
    },
    caretWrapper: {
        display: 'inline-block',
        color: '#666',
        fontSize: '12px',
        paddingLeft: '5px',
        position: 'relative',
        top: '-3px',
        right: '1px'
    },
    caret: {},
    boxDropdown: {
        background: 'rgb(224,224,224)',
        position: 'absolute',
        width: '100px',
        top: '24px',
        right: '-13px',
        border: '1px solid #777777',
        zIndex: 99
    },
    boxDropdownEntry: {
        fontSize: '12px',
        padding: '3px 6px',
        '&:hover': {
            background: '#d8d8d8'
        },
        color: 'black',
        fontFamily: 'Arial,Helvetica,sans-serif'
    },
    container: {
        position: 'relative'
    }
});
/**
 * Basic gear dropdown
 * @param {{options: {url?: string; onClick?: (e: any) => void; name: string}[]; boxDropdownRightAmount?: number}} props
 * @returns 
 */ const GearDropdown = (props)=>{
    // const { boxDropdownRightAmount } = props;
    const boxDropdownRightAmount = 0;
    const s = useStyles();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: s.box + ' ' + (open ? s.boxOpen : ''),
                onClick: ()=>{
                    setOpen(!open);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.gearWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.gear
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.caretWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.caret,
                            children: "▼"
                        })
                    })
                ]
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.boxDropdown,
                style: typeof boxDropdownRightAmount !== 'undefined' && {
                    right: boxDropdownRightAmount + 'px'
                } || undefined,
                children: props.options.map((v, i)=>{
                    if (v.name === 'separator') {
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "divider-top"
                        }, 'separator ' + i));
                    }
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: v.url || '#',
                        onClick: v.onClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `mb-0 ${s.boxDropdownEntry}`,
                            children: v.name
                        })
                    }, v.name));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GearDropdown);


/***/ })

};
;