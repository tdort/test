"use strict";
exports.id = 1068;
exports.ids = [1068];
exports.modules = {

/***/ 1068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ verticalSelector)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-jss"
var external_react_jss_ = __webpack_require__(1191);
// EXTERNAL MODULE: ./components/link/index.js
var components_link = __webpack_require__(8452);
;// CONCATENATED MODULE: ./components/verticalSelector/components/selectorOption.js



const useStyles = (0,external_react_jss_.createUseStyles)({
    wrapper: {
        width: '100%',
        color: '#000',
        display: 'block',
        padding: '5px 10px',
        '&:hover': {
            background: '#efefef',
            color: '#000'
        }
    },
    wrapperSelected: {
        borderLeft: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#efefef'
    },
    wrapperDisabled: {
        opacity: 0.25
    },
    text: {
        fontSize: '16px'
    },
    textSelected: {
        fontWeight: '600'
    }
});
const SelectorOption = (props)=>{
    const s = useStyles();
    const el = /*#__PURE__*/ jsx_runtime_.jsx("a", {
        onClick: props.onClick,
        className: s.wrapper + (props.selected ? ' ' + s.wrapperSelected : '') + (props.disabled ? ' ' + s.wrapperDisabled : ''),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: s.text + (props.selected ? ' ' + s.textSelected : ''),
            children: props.name
        })
    });
    if (props.url) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(components_link/* default */.Z, {
            href: props.url,
            children: el
        }));
    }
    return el;
};
/* harmony default export */ const selectorOption = (SelectorOption);

;// CONCATENATED MODULE: ./components/verticalSelector/index.js




const verticalSelector_useStyles = (0,external_react_jss_.createUseStyles)({
    row: {
        borderRight: '1px solid #ccc'
    }
});
/**
 * Vertical selector, as seen on "Develop" page
 * @param {{selected: string; options: {name: string; url: string; disabled?: boolean; onClick: () => void}[]}} props 
 * @returns 
 */ const VerticalSelector = (props)=>{
    const s = verticalSelector_useStyles();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: 'row mt-4 pe-0 ' + s.row,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12 pe-0 me-0",
            children: props.options.map((v)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(selectorOption, {
                    onClick: v.onClick,
                    name: v.name,
                    url: v.url,
                    selected: props.selected === v.name,
                    disabled: v.disabled
                }, v.name + v.url));
            })
        })
    }));
};
/* harmony default export */ const verticalSelector = (VerticalSelector);


/***/ })

};
;