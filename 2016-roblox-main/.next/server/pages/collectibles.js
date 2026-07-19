"use strict";
(() => {
var exports = {};
exports.id = 9738;
exports.ids = [9738,2197];
exports.modules = {

/***/ 9385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    main: {
        minHeight: '95vh'
    }
});
const MainWrapper = ({ children  })=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.main,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainWrapper);


/***/ }),

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Theme2016 = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "theme-2016-enabled"
            }),
            props.children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme2016);


/***/ }),

/***/ 9021:
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
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme2016__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8660);
/* harmony import */ var _components_mainWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9385);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3766);
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_users__WEBPACK_IMPORTED_MODULE_6__, _services_inventory__WEBPACK_IMPORTED_MODULE_7__]);
([_services_users__WEBPACK_IMPORTED_MODULE_6__, _services_inventory__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    page: {
        maxWidth: "970px!important",
        paddingTop: 0
    },
    card: {
        background: "#1e232c",
        border: "1px solid #2d3440",
        borderRadius: 6,
        padding: 18,
        color: "#e9edf3",
        boxShadow: "0 10px 26px rgba(0, 0, 0, 0.25)",
        width: "100%"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 700,
        margin: "0 0 12px 0",
        color: "#ffffff"
    },
    topGrid: {
        display: "grid",
        gridTemplateColumns: "290px 1fr",
        gap: 16,
        "@media(max-width: 991px)": {
            display: "block"
        }
    },
    leftCard: {
        background: "#252c37",
        border: "1px solid #343d4a",
        borderRadius: 4,
        padding: 16,
        marginBottom: 14
    },
    userName: {
        fontSize: 42,
        fontWeight: 600,
        lineHeight: "1em",
        marginBottom: 10,
        color: "#ffffff",
        textTransform: "lowercase",
        textAlign: "left"
    },
    avatar: {
        width: "100%",
        maxWidth: 220,
        display: "block",
        margin: "0 auto"
    },
    rapLabel: {
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: 1,
        textAlign: "left",
        color: "#aeb7c5",
        marginBottom: 4
    },
    totalRap: {
        fontWeight: 700,
        marginTop: 4,
        marginBottom: 0,
        fontSize: 38,
        textAlign: "left",
        color: "#ffffff",
        "@media(max-width: 767px)": {
            fontSize: 24
        }
    },
    collectiblesCard: {
        background: "#252c37",
        border: "1px solid #343d4a",
        borderRadius: 4,
        minHeight: 250,
        padding: 16
    },
    infoLeadWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
        "@media(max-width: 640px)": {
            display: "block"
        }
    },
    infoLead: {
        margin: 0,
        color: "#aeb7c5",
        fontSize: 15
    },
    countText: {
        margin: 0,
        color: "#aeb7c5",
        fontSize: 14
    },
    empty: {
        textAlign: "center",
        marginTop: 8,
        color: "#aeb7c5",
        padding: "28px 10px",
        border: "1px dashed #3b4555",
        borderRadius: 4
    },
    grid: {
        marginTop: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
        "@media(max-width: 1400px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
        },
        "@media(max-width: 640px)": {
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
        }
    },
    itemCard: {
        background: "#2b3340",
        border: "1px solid #3b4555",
        borderRadius: 4,
        overflow: "hidden",
        height: "100%",
        position: "relative"
    },
    thumbWrap: {
        position: "relative",
        background: "#1b1f27",
        borderBottom: "1px solid #3b4555"
    },
    limitedTag: {
        position: "absolute",
        left: 8,
        bottom: 8,
        background: "#1fb15d",
        color: "#ffffff",
        fontSize: 11,
        fontWeight: 700,
        lineHeight: "16px",
        padding: "0 7px",
        textTransform: "uppercase",
        borderRadius: 2
    },
    itemImage: {
        width: "100%",
        display: "block"
    },
    itemBody: {
        padding: 10
    },
    line: {
        margin: "0 0 2px 0",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: 13,
        color: "#e9edf3"
    },
    price: {
        margin: 0,
        color: "#1fb15d",
        fontWeight: 700,
        fontSize: 18
    },
    error: {
        color: "#dc3545",
        marginBottom: 0
    }
});
const CollectiblesPage = ({ userId , username , totalRap , inventory , errorMessage  })=>{
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_theme2016__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: username ? `${username}'s Collectibles - Zekoro` : "Collectibles - Zekoro"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mainWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `container ${s.page}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.card,
                                children: errorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: s.error,
                                    children: errorMessage
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: s.sectionTitle,
                                            children: "Collectibles"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: s.topGrid,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: s.leftCard,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: s.userName,
                                                                    children: username
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: s.avatar,
                                                                    src: `/thumbs/avatar.ashx?userId=${userId}`,
                                                                    alt: `${username} avatar`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: s.leftCard,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: s.rapLabel,
                                                                    children: "Total RAP"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: s.totalRap,
                                                                    children: Number(totalRap || 0).toLocaleString()
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: s.collectiblesCard,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: s.infoLeadWrap,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: s.infoLead,
                                                                    children: "Collectibles"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: s.countText,
                                                                    children: inventory.length === 0 ? "Showing 0 collectible items." : `Showing ${inventory.length.toLocaleString()} collectible item${inventory.length === 1 ? "" : "s"}.`
                                                                })
                                                            ]
                                                        }),
                                                        inventory.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: s.empty,
                                                            children: "Player does not have any collectible items."
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: s.grid,
                                                            children: inventory.map((item, index)=>{
                                                                const assetId = item.assetId || item.asset_id;
                                                                const serial = item.serialNumber || item.serial;
                                                                const serialCount = item.serialCount || item.serial_count;
                                                                const uaid = item.userAssetId || item.user_asset_id;
                                                                const rap = item.recentAveragePrice || item.recent_average_price || 0;
                                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: s.itemCard,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: `/catalog/${assetId}/--`,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: s.thumbWrap,
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            className: s.itemImage,
                                                                                            src: `/thumbs/asset.ashx?assetId=${assetId}`,
                                                                                            alt: item.name || `Asset ${assetId}`
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: s.limitedTag,
                                                                                            children: "Limited"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: s.itemBody,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: s.line,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                            children: item.name || `Asset ${assetId}`
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                        className: s.price,
                                                                                        children: [
                                                                                            "R$",
                                                                                            Number(rap).toLocaleString()
                                                                                        ]
                                                                                    }),
                                                                                    serial != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                        className: s.line,
                                                                                        children: [
                                                                                            "Serial: #",
                                                                                            serial,
                                                                                            " of ",
                                                                                            serialCount || "-"
                                                                                        ]
                                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                        className: s.line,
                                                                                        children: [
                                                                                            "UAID: ",
                                                                                            uaid || "-"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }, `${assetId}-${uaid || serial || index}`));
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    }));
};
async function getServerSideProps(context) {
    var ref;
    const rawUserId = context === null || context === void 0 ? void 0 : (ref = context.query) === null || ref === void 0 ? void 0 : ref.userId;
    const userId = Number(rawUserId);
    if (!Number.isSafeInteger(userId) || userId < 1) {
        return {
            props: {
                userId: null,
                username: "",
                totalRap: 0,
                inventory: [],
                errorMessage: "User ID is invalid or does not exist."
            }
        };
    }
    try {
        const userInfo = await (0,_services_users__WEBPACK_IMPORTED_MODULE_6__/* .getUserInfo */ .bG)({
            userId
        });
        const username = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) || `User ${userId}`;
        let cursor = "";
        let runs = 0;
        let all = [];
        while(runs < 50){
            runs++;
            const page = await (0,_services_inventory__WEBPACK_IMPORTED_MODULE_7__/* .getCollectibleInventory */ .ov)({
                userId,
                cursor,
                limit: 100
            });
            const data = (page === null || page === void 0 ? void 0 : page.data) || [];
            all = all.concat(data);
            if (!(page === null || page === void 0 ? void 0 : page.nextPageCursor)) break;
            cursor = page.nextPageCursor;
        }
        all.sort((a, b)=>{
            const aRap = (a === null || a === void 0 ? void 0 : a.recentAveragePrice) || 0;
            const bRap = (b === null || b === void 0 ? void 0 : b.recentAveragePrice) || 0;
            return bRap - aRap;
        });
        const totalRap = all.reduce((sum, item)=>{
            return sum + ((item === null || item === void 0 ? void 0 : item.recentAveragePrice) || 0);
        }, 0);
        return {
            props: {
                userId,
                username,
                totalRap,
                inventory: all,
                errorMessage: null
            }
        };
    } catch (e) {
        return {
            props: {
                userId,
                username: "",
                totalRap: 0,
                inventory: [],
                errorMessage: "You don't have permissions to view the specified user's inventory"
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiblesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

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

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8756,3766,8246], () => (__webpack_exec__(9021)));
module.exports = __webpack_exports__;

})();