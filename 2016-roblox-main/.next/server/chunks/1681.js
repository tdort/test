"use strict";
exports.id = 1681;
exports.ids = [1681];
exports.modules = {

/***/ 1681:
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
/* harmony import */ var _lib_numberUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6911);




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    vTab: {
        display: 'inline-block',
        cursor: 'pointer',
        borderTop: '1px solid #9e9e9e',
        borderLeft: '1px solid #9e9e9e',
        borderRight: '1px solid #9e9e9e',
        marginRight: '4px'
    },
    vTabLabel: {
        fontSize: '16px',
        padding: '10px 5px 8px 5px',
        marginBottom: 0,
        fontWeight: 600
    },
    vTagSelected: {},
    buttonCol: {
        borderBottom: '2px solid #c3c3c3'
    },
    btnBottomSeperator: {
        width: '100%',
        height: '5px',
        background: 'white',
        marginBottom: '-5px'
    },
    vTabUnselected: {
        background: '#d6d6d6',
        paddingTop: '7px',
        '&:hover': {
            background: '#e8e8e8'
        }
    },
    count: {
        background: '#e0f1fc',
        border: '1px solid #84a5c9',
        paddingLeft: '4px',
        paddingRight: '4px'
    }
});
/**
 * Vertical tabs in old style
 * @param {{options: {name: string; element: JSX.Element; count?: number}[]; onChange?: (arg: {name: string; element: JSX.Element; count?: number;}) => void; default?: string}} props 
 */ const OldVerticalTabs = (props)=>{
    const s = useStyles();
    const { options  } = props;
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.default ? options.find((v)=>v.name === props.default
    ) : options[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelected(props.default ? options.find((v)=>v.name === props.default
        ) : options[0]);
    }, [
        props.default,
        options
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${s.buttonCol} col-12`,
                children: options.map((v)=>{
                    const isSelected = v.name === selected.name;
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: s.vTab,
                        onClick: ()=>{
                            setSelected(v);
                            if (props.onChange) {
                                props.onChange(v);
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `${!isSelected ? s.vTabUnselected : ''} ${s.vTabLabel}`,
                                children: [
                                    v.name,
                                    " ",
                                    typeof v.count === 'number' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.count,
                                        children: (0,_lib_numberUtils__WEBPACK_IMPORTED_MODULE_3__/* .abbreviateNumber */ .d)(v.count)
                                    }) : null
                                ]
                            }),
                            isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.btnBottomSeperator
                            })
                        ]
                    }, v.name));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: selected.element
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OldVerticalTabs);


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ abbreviateNumber)
/* harmony export */ });
const abbreviateNumber = (value)=>{
    if (value < 1000) {
        return value.toLocaleString();
    }
    if (value < 1000000) {
        if (value > 99999) {
            return value.toString().slice(0, 3) + 'K+';
        }
        if (value > 9999) {
            return value.toString().slice(0, 2) + 'K+';
        }
    }
    var suffixes = [
        "",
        "k",
        "m",
        "b",
        "t"
    ];
    var suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        // @ts-ignore
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum].toUpperCase() + '+';
};


/***/ })

};
;