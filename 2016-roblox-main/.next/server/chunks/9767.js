"use strict";
exports.id = 9767;
exports.ids = [9767];
exports.modules = {

/***/ 9767:
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
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        display: 'block'
    }
});
/**
 * Player headshot
 * @param {{id: number; name: string; size?: string;}} props 
 * @returns 
 */ const PlayerHeadshot = (props)=>{
    const s = useStyles();
    const size = props.size || 420;
    const { 0: image1 , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: retryCount , 1: setRetryCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRetryCount(0);
        (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_4__/* .multiGetUserHeadshots */ .Rv)({
            userIds: [
                props.id
            ],
            size: size + 'x' + size
        }).then((image)=>{
            let u = image.find((v)=>v.targetId == props.id
            );
            if (u && u.imageUrl) {
                setImage(u.imageUrl);
            }
        });
    }, [
        props.id
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: s.image,
        src: image1,
        alt: props.name,
        onError: (e)=>{
            if (retryCount >= 3) return;
            (0,_services_metrics__WEBPACK_IMPORTED_MODULE_5__/* .reportImageFail */ .a)({
                errorEvent: e,
                type: 'playerHeadshot',
                src: image1
            });
            setRetryCount(retryCount + 1);
            setImage('/img/empty.png');
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerHeadshot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;