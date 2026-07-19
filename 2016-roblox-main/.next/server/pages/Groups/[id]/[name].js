"use strict";
(() => {
var exports = {};
exports.id = 4551;
exports.ids = [4551,2197];
exports.modules = {

/***/ 6607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_myGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1716);
/* harmony import */ var _components_myGroups_stores_groupPageStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6035);
/* harmony import */ var _components_myGroups_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3370);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9917);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_myGroups__WEBPACK_IMPORTED_MODULE_3__, _components_myGroups_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_5__, _services_groups__WEBPACK_IMPORTED_MODULE_6__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_7__]);
([_components_myGroups__WEBPACK_IMPORTED_MODULE_3__, _components_myGroups_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_5__, _services_groups__WEBPACK_IMPORTED_MODULE_6__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const GroupEmbedPage = ({ groupId , groupName , description , ogImage  })=>{
    const ogTitle = groupName || "Zekoro Group";
    const ogDescription = description || "Join the Zekoro community.";
    const ogUrl = groupId ? `https://zekoro.org/groups/${groupId}/${encodeURIComponent(groupName || "group").replace(/%20/g, "-")}` : "https://zekoro.org";
    const embedImage = ogImage || "https://zekoro.org/img/group.png";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            ogTitle,
                            " - Zekoro"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: ogTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: ogUrl
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: ogDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: embedImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:secure_url",
                        content: embedImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:type",
                        content: "image/png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:width",
                        content: "420"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:height",
                        content: "420"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: "Zekoro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: ogTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: ogDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: embedImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#1188ff"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myGroups_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myGroups_stores_groupPageStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myGroups__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: groupId
                    })
                })
            })
        ]
    }));
};
async function getServerSideProps(context) {
    const { id  } = context.query;
    const groupId = Number(id);
    const imageVersion = Date.now();
    context.res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    context.res.setHeader('Pragma', 'no-cache');
    context.res.setHeader('Expires', '0');
    try {
        var ref;
        const info = await (0,_services_groups__WEBPACK_IMPORTED_MODULE_6__/* .getInfo */ .C5)({
            groupId
        });
        const iconData = await (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_7__/* .multiGetGroupIcons */ .tn)({
            groupIds: [
                groupId
            ]
        });
        const ogImage = (iconData === null || iconData === void 0 ? void 0 : (ref = iconData[0]) === null || ref === void 0 ? void 0 : ref.imageUrl) ? `${iconData[0].imageUrl}${iconData[0].imageUrl.includes("?") ? "&" : "?"}cacheBust=${imageVersion}` : "https://zekoro.org/img/group.png";
        return {
            props: {
                groupId,
                groupName: (info === null || info === void 0 ? void 0 : info.name) || "Zekoro Group",
                description: (info === null || info === void 0 ? void 0 : info.description) || "Join the Zekoro community.",
                ogImage
            }
        };
    } catch (error) {
        console.error("Error fetching group info for embeds", error);
        return {
            props: {
                groupId,
                groupName: "Zekoro Group",
                description: "Join the Zekoro community.",
                ogImage: "https://zekoro.org/img/group.png"
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupEmbedPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7686:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1191:
/***/ ((module) => {

module.exports = require("react-jss");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("unstated-next");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,9002,7378,2634,9979,5967,5435,5304,1669,2918,1681,3488,5893,2069,3781,2316,6664,9917,2028,1716], () => (__webpack_exec__(6607)));
module.exports = __webpack_exports__;

})();