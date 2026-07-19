"use strict";
(() => {
var exports = {};
exports.id = 8882;
exports.ids = [8882,2197];
exports.modules = {

/***/ 8243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_forums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9002);
/* harmony import */ var _forumHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3854);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2918);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8379);
/* harmony import */ var _forumContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7495);
/* harmony import */ var _bcOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6664);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_forums__WEBPACK_IMPORTED_MODULE_2__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_3__, _playerImage__WEBPACK_IMPORTED_MODULE_7__, _forumContainer__WEBPACK_IMPORTED_MODULE_9__, _bcOverlay__WEBPACK_IMPORTED_MODULE_10__, _services_users__WEBPACK_IMPORTED_MODULE_11__]);
([_services_forums__WEBPACK_IMPORTED_MODULE_2__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_3__, _playerImage__WEBPACK_IMPORTED_MODULE_7__, _forumContainer__WEBPACK_IMPORTED_MODULE_9__, _bcOverlay__WEBPACK_IMPORTED_MODULE_10__, _services_users__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_5__.createUseStyles)({
    forumHeader: {
        background: '#29508d'
    },
    avatarHead: {
        width: '150px'
    },
    postRow: {
        background: '#f9f9f9',
        borderBottom: '1px solid #c3c3c3'
    },
    userStat: {
        marginBottom: 0,
        fontSize: '0.9rem'
    },
    postText: {
        whiteSpace: 'break-spaces',
        wordWrap: 'anywhere'
    }
});
const limit = 15;
const ForumThread = (props)=>{
    const s = useStyles();
    const { id  } = props;
    const { 0: threadInfo , 1: setThreadInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: sub , 1: setSub  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: cat , 1: setCat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: pageNumber , 1: setPageNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_forums__WEBPACK_IMPORTED_MODULE_2__/* .getThreadInfoById */ .DV)({
            threadId: id
        }).then((d)=>{
            setThreadInfo(d);
            setCat((0,_services_forums__WEBPACK_IMPORTED_MODULE_2__/* .getCategoryBySubCategoryId */ .OT)(d.subCategoryId));
            setSub((0,_services_forums__WEBPACK_IMPORTED_MODULE_2__/* .getSubcategoryById */ .u0)(d.subCategoryId));
        });
    }, [
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPageNumber(props.page);
    }, [
        props.page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPosts(props.posts);
        if (props.posts.data.length) {
            (0,_services_forums__WEBPACK_IMPORTED_MODULE_2__/* .markAsRead */ .zJ)({
                postId: props.posts.data[props.posts.data.length - 1].post.postId
            });
        }
    }, [
        pageNumber,
        props
    ]);
    const nextPageAvailable = posts && posts.data && posts.data.length >= limit;
    if (!threadInfo || !cat || !sub) return null;
    // for tick
    const Username = ({ userId , username  })=>{
        const { 0: isVerified , 1: setIsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            (0,_services_users__WEBPACK_IMPORTED_MODULE_11__/* .getUserInfo */ .bG)({
                userId
            }).then((userInfo)=>{
                setIsVerified(userInfo.isVerified || false);
            }).catch((error)=>{
                console.error('failed to get user info:', error);
            });
        }, [
            userId
        ]);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                username,
                isVerified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/verified.svg",
                    alt: "Verified",
                    style: {
                        width: '16px',
                        height: '16px',
                        marginLeft: '3px'
                    }
                })
            ]
        }));
    };
    const PreviousAndNextThread = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: s.forumHeader,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "text-end pe-2 pt-1 pb-1 text-white mb-0",
                children: [
                    threadInfo.previousThreadId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        href: `/Forum/ShowPost.aspx?PostID=${threadInfo.previousThreadId}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-white",
                            children: "Previous Thread"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "opacity-50",
                        children: "Previous Thread"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "fw-bolder ps-1 pe-1 text-black",
                        children: "::"
                    }),
                    threadInfo.nextThreadId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        href: `/Forum/ShowPost.aspx?PostID=${threadInfo.nextThreadId}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-white",
                            children: "Next Thread"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "opacity-50",
                        children: "Next Thread"
                    })
                ]
            })
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_forumContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forumHeader__WEBPACK_IMPORTED_MODULE_4__/* .ForumHeaderSubCategory */ .i, {
                cat: cat,
                sub: sub
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: threadInfo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviousAndNextThread, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: s.avatarHead
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            posts && posts.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: "No posts available"
                                })
                            }) : null,
                            posts ? posts.data.map((v)=>{
                                const post = v.post;
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: s.postRow,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            className: "align-top",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    href: `/users/${post.userId}/profile`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                                            userId: post.userId,
                                                            username: post.username
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    id: post.userId
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bcOverlay__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    id: post.userId
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: s.userStat,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fw-bold",
                                                            children: "Joined: "
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(v.createdAt).format('DD MMM YYYY')
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: s.userStat + ' mb-4',
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fw-bold",
                                                            children: "Total Posts: "
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: v.postCount
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "align-top",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "ps-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mb-0",
                                                        children: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(post.createdAt).format('MM-DD-YYYY hh:mm A')
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: 'mt-1 ' + s.postText,
                                                        children: post.post
                                                    }),
                                                    v.canDelete ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-danger cursor-pointer",
                                                        onClick: ()=>{
                                                            let res = prompt('Type "yes" to confirm deletion');
                                                            if (res === 'yes') {
                                                                (0,_services_forums__WEBPACK_IMPORTED_MODULE_2__/* .deletePost */ .fR)({
                                                                    postId: post.postId
                                                                }).then(()=>{
                                                                    post.post = '[ Content Deleted ]';
                                                                    if (post.title) {
                                                                        post.title = '[ Content Deleted ]';
                                                                    }
                                                                    if (post.threadId === null) {
                                                                        threadInfo.title = '[ Content Deleted ]';
                                                                    }
                                                                    setPosts({
                                                                        ...posts
                                                                    });
                                                                    setThreadInfo({
                                                                        ...threadInfo
                                                                    });
                                                                });
                                                            }
                                                        },
                                                        children: "Delete"
                                                    }) : null
                                                ]
                                            })
                                        })
                                    ]
                                }));
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviousAndNextThread, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "fw-bold",
                            children: [
                                "Page ",
                                pageNumber
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0 text-end",
                            children: [
                                pageNumber > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    href: `/Forum/ShowPost.aspx?PostID=${id}&Page=${pageNumber - 1}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "pe-2",
                                        children: pageNumber - 1
                                    })
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: pageNumber
                                }),
                                nextPageAvailable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    href: `/Forum/ShowPost.aspx?PostID=${id}&Page=${pageNumber + 1}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "ps-2",
                                        children: pageNumber + 1
                                    })
                                }) : null
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center mb-0 mt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: `/Forum/AddPost.aspx?PostID=${id}&mode=flat`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Add a Reply"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumThread);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4125);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4__);





dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 2442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var _components_forumThread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8243);
/* harmony import */ var _services_forums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_forumThread__WEBPACK_IMPORTED_MODULE_2__, _services_forums__WEBPACK_IMPORTED_MODULE_3__]);
([_components_forumThread__WEBPACK_IMPORTED_MODULE_2__, _services_forums__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const limit = 15;
const ShowPostPage = (props)=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const id = router.query.PostID;
    let page = parseInt(router.query.Page, 10);
    if (page < 1 || isNaN(page) || !Number.isInteger(page)) {
        page = 1;
    }
    if (!id) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_forumThread__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        id: id,
        page: page,
        posts: props.posts
    }));
};
ShowPostPage.getInitialProps = async (ctx)=>{
    let id = parseInt(ctx.query.PostID, 10);
    let pageNumber = parseInt(ctx.query.Page, 10);
    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
        pageNumber = 1;
    }
    if (!Number.isInteger(id) || id < 1) {
        id = 1;
    }
    const replies = await (0,_services_forums__WEBPACK_IMPORTED_MODULE_3__/* .getRepliesToThread */ .YV)({
        threadId: id,
        limit: limit,
        cursor: (pageNumber * limit - limit).toString()
    });
    return {
        posts: replies
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowPostPage);

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


/***/ }),

/***/ 7686:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 5334:
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ 4125:
/***/ ((module) => {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,9002,2634,2918,6664,8975], () => (__webpack_exec__(2442)));
module.exports = __webpack_exports__;

})();