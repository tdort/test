"use strict";
exports.id = 2918;
exports.ids = [2918];
exports.modules = {

/***/ 2918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(465);
/* harmony import */ var _services_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9125);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        display: 'block'
    }
});
const PlayerImage = (props)=>{
    const s = useStyles();
    const size = props.size || 420;
    const { 0: retryCount , 1: setRetryCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const thumbs = _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.url ? props.url : props.useHeadshot ? thumbs.getUserHeadshot(props.id, '420x420') : thumbs.getUserThumbnail(props.id, '420x420'));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.url) {
            setImage(props.url);
            return;
        }
        setRetryCount(0);
        setImage(props.useHeadshot ? thumbs.getUserHeadshot(props.id, '420x420') : thumbs.getUserThumbnail(props.id, '420x420'));
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.url) {
            return;
        }
        setImage(props.useHeadshot ? thumbs.getUserHeadshot(props.id, '420x420') : thumbs.getUserThumbnail(props.id, '420x420'));
    }, [
        thumbs.thumbnails
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: s.image,
        src: image,
        alt: props.name,
        onError: (e)=>{
            if (retryCount >= 3) return;
            (0,_services_metrics__WEBPACK_IMPORTED_MODULE_5__/* .reportImageFail */ .a)({
                errorEvent: e,
                type: 'playerHeadshot',
                src: image
            });
            setRetryCount(retryCount + 1);
            setImage('/img/placeholder.png');
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;