"use strict";
exports.id = 9002;
exports.ids = [9002];
exports.modules = {

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ adTypes)
/* harmony export */ });
const adTypes = {
    1: {
        name: 'Banner',
        width: 728,
        height: 90
    },
    2: {
        name: 'SkyScraper',
        width: 160,
        height: 620
    },
    3: {
        name: 'Box',
        width: 300,
        height: 270
    }
};



/***/ }),

/***/ 9002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(465);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8765);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_4__]);
_lib_request__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    adWrapper: {},
    adImage: {
        width: '100%',
        height: 'auto',
        margin: '0 auto',
        display: 'block',
        '@media(max-width: 800px)': {
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    }
});
/**
 * User advertisement iframe
 * @param {{type: number}} props 
 */ const UserAdvertisement = (props)=>{
    const info = _constants__WEBPACK_IMPORTED_MODULE_5__/* .adTypes */ .K[props.type];
    const { 0: imageUrl1 , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: link1 , 1: setLink  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: imageLoaded , 1: setImageLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const s = useStyles();
    // I HATE IFRAMES I HATE IFRAMES I HATE IFRAMES I HATE IFRAMES
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_lib_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('GET', `${(0,_lib_request__WEBPACK_IMPORTED_MODULE_4__/* .getBaseUrl */ .SV)()}/user-sponsorship/${props.type}`).then((adData)=>{
            const doc = new DOMParser().parseFromString(adData.data, 'text/html');
            const imageElements = doc.getElementsByTagName('img');
            const aTags = doc.getElementsByTagName('a');
            if (!imageElements.length || !aTags.length) {
                console.error('[error] could not get an element from iframe:', imageElements, aTags);
                return;
            }
            const imageUrl = imageElements[0].getAttribute('src');
            const link = aTags[0].getAttribute('href');
            const adTitle = aTags[0].getAttribute('title');
            if (!imageUrl || !link || !adTitle) {
                console.error('[error] could not get an attribute from iframe: ', imageUrl, link, adTitle);
                return;
            }
            setImageUrl(imageUrl);
            setTitle(adTitle);
            setLink(link);
        }).catch((e)=>{
            console.error('[error] could not load user ad:', e);
        });
    }, []);
    // TODO: calculate correct height of ad when current screen width is smaller than ad width. The height is way too big on mobile.
    if (!info) throw new Error(`unexpected adType: ${props.type}`);
    if (!imageUrl1) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: '100%',
                height: info.height
            }
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.adWrapper,
        style: imageLoaded ? undefined : {
            height: info.height,
            width: '100%'
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            href: link1 || '#',
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                title: title,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    onLoad: ()=>{
                        setImageLoaded(true);
                    },
                    src: imageUrl1,
                    className: s.adImage,
                    style: {
                        maxWidth: info.width,
                        maxHeight: info.height
                    }
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAdvertisement);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;