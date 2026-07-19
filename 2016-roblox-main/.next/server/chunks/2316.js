"use strict";
exports.id = 2316;
exports.ids = [2316];
exports.modules = {

/***/ 2316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5304);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8452);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _services_users__WEBPACK_IMPORTED_MODULE_4__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _services_users__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const verifiedCache = new Map();
/**
 * Creator link
 * @param {{type: string | number; id: number; name: string;}} props 
 * @returns 
 */ const CreatorLink = (props)=>{
    const { 0: isVerified , 1: setIsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const url = props.type === 'User' || props.type === 1 ? '/users/' + props.id + "/profile" : '/My/Groups.aspx?gid=' + props.id;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.type === 'User' || props.type === 1) {
            const Key = `user-${props.id}`;
            if (verifiedCache.has(Key)) {
                setIsVerified(verifiedCache.get(Key));
                return;
            }
            (0,_services_users__WEBPACK_IMPORTED_MODULE_4__/* .getUserInfo */ .bG)({
                userId: props.id
            }).then((userInfo)=>{
                const verified = userInfo.isVerified || false;
                setIsVerified(verified);
                verifiedCache.set(Key, verified);
            }).catch((error)=>{
                console.error('failed to get user info:', error);
            });
        }
    }, [
        props.id,
        props.type
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: url,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            children: [
                props.name,
                isVerified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/verified.svg",
                    alt: "Verified",
                    style: {
                        width: '17px',
                        height: '17px',
                        marginLeft: '3px'
                    }
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;