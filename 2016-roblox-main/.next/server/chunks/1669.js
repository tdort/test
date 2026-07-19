"use strict";
exports.id = 1669;
exports.ids = [1669];
exports.modules = {

/***/ 1669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(465);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1747);
/* harmony import */ var _services_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9125);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_2__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_2__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    image: {
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        paddingTop: '20px'
    }
});
const ItemImage = (props)=>{
    const s = useStyles();
    const store = _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: retryCount , 1: setRetryCount  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(store.getPlaceholder());
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setImage(store.getAssetThumbnail(props.id, '420x420'));
    }, [
        props,
        store.thumbnails
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: s.image + ' ' + (props.className || ''),
        src: image,
        alt: props.name,
        onError: (e)=>{
            if (retryCount >= 3) return;
            (0,_services_metrics__WEBPACK_IMPORTED_MODULE_5__/* .reportImageFail */ .a)({
                errorEvent: e,
                type: 'assetThumbnail',
                src: image
            });
            setRetryCount(retryCount + 1);
            setImage(store.getPlaceholder());
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ reportImageFail)
/* harmony export */ });
const reportImageFail = ({ src , errorEvent , type  })=>{
    console.error('[error] image load fail for', src, '\n\nevent data:', errorEvent, '\n', 'type', type);
};


/***/ })

};
;