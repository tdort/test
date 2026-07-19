"use strict";
exports.id = 6664;
exports.ids = [6664];
exports.modules = {

/***/ 6664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_users__WEBPACK_IMPORTED_MODULE_3__]);
_services_users__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        width: '66px',
        height: '19px',
        marginTop: '-40px',
        zIndex: 2
    }
});
const iconsMap = {
    1: `/img/overlay_bcOnly.png`,
    2: `/img/overlay_tbcOnly.png`,
    3: `/img/overlay_obcOnly.png`,
    4: `/img/overlay_bcOnly.png`
};
const Icon = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: s.overlay,
        src: iconsMap[props.type]
    }));
};
let statusCache = {};
let pendingCache = {};
const BcOverlay = (props)=>{
    const { id  } = props;
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (false) {}
        if (statusCache[id] !== undefined) {
            setType(statusCache[id]);
            return;
        }
        if (pendingCache[id]) {
            pendingCache[id].push((status)=>{
                setType(status);
            });
            return;
        }
        setType(0);
        pendingCache[id] = [];
        (0,_services_users__WEBPACK_IMPORTED_MODULE_3__/* .getMembershipType */ .$$)({
            userId: id
        }).then((d)=>{
            setType(d);
            pendingCache[id].forEach((v)=>v(d)
            );
            delete pendingCache[id];
        });
    }, [
        id
    ]);
    if (type === 0) {
        return null;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
        type: type
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BcOverlay);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;