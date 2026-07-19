"use strict";
exports.id = 8975;
exports.ids = [8975];
exports.modules = {

/***/ 7495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9002);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userAdvertisement__WEBPACK_IMPORTED_MODULE_1__]);
_userAdvertisement__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    forumColumn: {},
    forumContainer: {
        minWidth: '900px'
    }
});
const ForumContainer = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'container ' + s.forumContainer,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            type: 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-white pt-2 pb-2",
                                children: props.children
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        type: 2
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ ForumHeaderSubCategory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8452);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2300);



const ForumHeader = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-6",
                children: props.children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-end fw-bold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: "/Forum/Default.aspx",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "normal",
                                    children: "Home"
                                })
                            })
                        }),
                        (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('forumSearchEnabled', false) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-1 ps-1",
                            children: "|"
                        }) : null,
                        (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('forumSearchEnabled', false) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: "/Forum/Search.aspx",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "normal",
                                    children: "Search"
                                })
                            })
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pe-1 ps-1",
                            children: "|"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: "/Forum/MyForums.aspx",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "normal",
                                    children: "MyForums"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumHeader);
const ForumHeaderSubCategory = ({ cat , sub  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ForumHeader, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "fw-bold",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/Forum/Default.aspx",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "ROBLOX Forum"
                    })
                }),
                ' \xbb ',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: '/Forum/ForumGroup.aspx?ForumID=' + cat.id,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: cat.name
                    })
                }),
                ' \xbb ',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: '/Forum/ShowForum.aspx?ForumID=' + sub.id,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: sub.name
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 1971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a6": () => (/* binding */ getPostsInSubcategory),
/* harmony export */   "YV": () => (/* binding */ getRepliesToThread),
/* harmony export */   "DV": () => (/* binding */ getThreadInfoById),
/* harmony export */   "u_": () => (/* binding */ getPostById),
/* harmony export */   "zJ": () => (/* binding */ markAsRead),
/* harmony export */   "gK": () => (/* binding */ createThread),
/* harmony export */   "KF": () => (/* binding */ replyToPost),
/* harmony export */   "tH": () => (/* binding */ getSubCategoryInfo),
/* harmony export */   "fR": () => (/* binding */ deletePost),
/* harmony export */   "iA": () => (/* binding */ getPostsByUser),
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "OT": () => (/* binding */ getCategoryBySubCategoryId),
/* harmony export */   "u0": () => (/* binding */ getSubcategoryById)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// this is a proprietary forum implementation.
// if anyone wants to submit a pr for other implementations, they are free to.


const getPostsInSubcategory = ({ subCategoryId , limit , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/sub-category/' + subCategoryId + '/posts?limit=' + limit + '&cursor=' + cursor)).then((d)=>d.data
    );
};
const getRepliesToThread = ({ threadId , limit , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/threads/' + threadId + '/replies?limit=' + limit + '&cursor=' + cursor)).then((d)=>d.data
    );
};
const getThreadInfoById = ({ threadId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/threads/' + threadId + '/info')).then((d)=>d.data
    );
};
const getPostById = ({ postId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/posts/' + postId + '/info')).then((d)=>d.data
    );
};
const markAsRead = ({ postId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/posts/' + postId + '/mark-as-read')).then((d)=>d.data
    );
};
const createThread = ({ subCategoryId , post , subject  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/sub-category/' + subCategoryId + '/thread'), {
        post,
        subject
    }).then((d)=>d.data
    );
};
const replyToPost = ({ postId , post  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/posts/' + postId + '/reply'), {
        post
    }).then((d)=>d.data
    );
};
const getSubCategoryInfo = ({ subCategoryId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/sub-category/' + subCategoryId + '/info')).then((d)=>d.data
    );
};
const deletePost = ({ postId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/posts/' + postId)).then((d)=>d.data
    );
};
const getPostsByUser = ({ userId , offset , limit  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('forums', '/v1/users/' + userId + '/posts?limit=' + limit + '&cursor=' + offset)).then((d)=>d.data
    );
};
const ForumsCategories = [
    {
        id: 1,
        name: 'ROBLOX',
        subCategories: [
            {
                id: 46,
                name: 'All Things ROBLOX',
                description: 'The area for discussions purely about ROBLOX – the features, the games, and company news.'
            },
            {
                id: 14,
                name: 'Help (Technical Support and Account Issues)',
                description: 'Seeking account or technical help? Post your questions here.'
            },
            {
                id: 21,
                name: 'Suggestions & Ideas',
                description: 'Do you have a suggestion and ideas for ROBLOX? Share your feedback here.'
            },
            {
                id: 54,
                name: 'BLOXFaires & ROBLOX events',
                description: 'Check here to see the crazy things ROBLOX is doing. Contest information can be found here. ROBLOX is going to be at various Maker Faires and conferences around the globe. Discuss those events here!'
            }, 
        ]
    },
    {
        id: 8,
        name: 'Club Houses',
        subCategories: [
            {
                id: 13,
                name: 'ROBLOX Talk',
                description: 'A popular hangout where ROBLOXians talk about various topics.'
            },
            {
                id: 18,
                name: 'Off Topic',
                description: 'When no other forum makes sense for your post, Off Topic will help it make even less sense.'
            },
            {
                id: 32,
                name: 'Clans & Guilds',
                description: 'Talk about what’s going on in your Clans, Groups, Companies, and Guilds, and about the Groups feature in general.'
            },
            {
                id: 35,
                name: `Let's Make a Deal`,
                description: 'A fast paced community dedicated to mastering the Limited Trades and Sales market, and divining the subtleties of the ROBLOX Currency Exchange.'
            }, 
        ]
    }, 
];
const getCategories = ()=>{
    return ForumsCategories;
};
const getCategoryBySubCategoryId = (subCategoryId)=>{
    for (const item of getCategories()){
        for (const subcat of item.subCategories){
            if (subcat.id === subCategoryId) return item;
        }
    }
    throw new Error('Invalid subCategoryId');
};
const getSubcategoryById = (subCategoryId)=>{
    for (const item of getCategories()){
        for (const subcat of item.subCategories){
            if (subcat.id === subCategoryId) return subcat;
        }
    }
    throw new Error('Invalid subCategoryId');
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;