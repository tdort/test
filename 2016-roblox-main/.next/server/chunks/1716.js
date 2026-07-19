"use strict";
exports.id = 1716;
exports.ids = [1716];
exports.modules = {

/***/ 1107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__]);
_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    image: {
        display: 'block',
        margin: '0 auto',
        width: '100%',
        maxWidth: '160px',
        height: 'auto'
    }
});
const AdSkyscraper = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: 2
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdSkyscraper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    buttonWrapper: {},
    button: {
        border: '1px solid #666',
        background: 'linear-gradient(0deg, rgba(197,197,197,1) 0%, rgba(255,255,255,1) 100%)',
        display: 'block',
        textAlign: 'center',
        color: '#000',
        '&:hover': {
            color: '#000',
            background: 'rgba(197,197,197,1)'
        }
    }
});
const Button = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.buttonWrapper,
        children: props.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props,
            className: s.button + ' ' + (props.className || ''),
            children: props.children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            ...props,
            className: s.button + ' ' + (props.className || ''),
            children: props.children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 730:
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
/* harmony import */ var _lib_numberUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6911);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3488);
/* harmony import */ var _oldCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_3__]);
_services_economy__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    inline: {
        display: 'inline-block'
    }
});
const Currency = (props)=>{
    const s = useStyles();
    const { 0: robux , 1: setRobux  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .getRobuxGroup */ .YG)({
            groupId: props.groupId
        }).then((d)=>{
            setRobux(d.robux);
        });
    }, [
        props
    ]);
    if (robux === null) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: s.inline,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-1 mb-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0 fw-600 font-size-16",
                    children: [
                        "Funds: ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            inline: true,
                            children: (0,_lib_numberUtils__WEBPACK_IMPORTED_MODULE_6__/* .abbreviateNumber */ .d)(robux)
                        }),
                        " "
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Currency);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9917);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6035);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1309);
/* harmony import */ var _oldCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_groups__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__]);
([_services_groups__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    button: {
        width: '100%',
        marginTop: '6px'
    }
});
const GroupControls = (props)=>{
    const store = _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    if (!store.permissions || !store.info || !store.rank || store.rank.rank === 0) return null;
    const isAdmin = store.permissions['changeRank'] || store.permissions['manageClan'] || store.permissions['manageRelationships'] || store.permissions['removeMembers'] || store.permissions['spendGroupFunds'] || store.permissions['viewGroupPayouts'];
    const canViewAuditLog = store.permissions['viewAuditLogs'];
    const canAdvertise = store.permissions['advertiseGroup'];
    const isPrimary = store.primary && store.primary.group.id === store.groupId;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pe-2 ps-2 pb-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "fw-700 font-size-18 mb-2 lighten-2",
                    children: "Controls"
                }),
                isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    href: `/My/GroupAdmin.aspx?gid=${store.groupId}`,
                    className: s.button,
                    children: "Group Admin"
                }),
                canAdvertise && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    href: `/My/CreateUserAd.aspx?targetId=${store.groupId}&targetType=group`,
                    className: s.button,
                    children: "Advertise Group"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    href: "#",
                    className: s.button,
                    onClick: ()=>{
                        if (isPrimary) {
                            (0,_services_groups__WEBPACK_IMPORTED_MODULE_2__/* .removePrimaryGroup */ .AE)().then(()=>{
                                window.location.reload();
                            });
                        } else {
                            (0,_services_groups__WEBPACK_IMPORTED_MODULE_2__/* .setGroupAsPrimary */ .Uv)({
                                groupId: store.groupId
                            }).then(()=>{
                                window.location.reload();
                            });
                        }
                    },
                    children: [
                        isPrimary ? 'Remove' : 'Set',
                        " Primary"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: s.button,
                    onClick: (e)=>{
                        // 
                        (0,_services_groups__WEBPACK_IMPORTED_MODULE_2__/* .leaveGroup */ .Ln)({
                            groupId: store.groupId,
                            userId: auth.userId
                        }).then(()=>{
                            window.location.reload();
                        });
                    },
                    children: "Leave Group"
                }),
                canViewAuditLog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    href: '/Groups/Audit.aspx?groupid=' + store.groupId,
                    className: s.button,
                    children: "Audit Log"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupControls);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9917);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8586);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5435);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7378);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2316);
/* harmony import */ var _oldVerticalTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1681);
/* harmony import */ var _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6035);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1309);
/* harmony import */ var _groupWall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6825);
/* harmony import */ var _membersRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3867);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1973);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_4__, _services_groups__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _creatorLink__WEBPACK_IMPORTED_MODULE_9__, _groupWall__WEBPACK_IMPORTED_MODULE_13__, _membersRow__WEBPACK_IMPORTED_MODULE_14__, _store__WEBPACK_IMPORTED_MODULE_15__]);
([_services_games__WEBPACK_IMPORTED_MODULE_4__, _services_groups__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _creatorLink__WEBPACK_IMPORTED_MODULE_9__, _groupWall__WEBPACK_IMPORTED_MODULE_13__, _membersRow__WEBPACK_IMPORTED_MODULE_14__, _store__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    icon: {
        width: '100%',
        borderRadius: '16px'
    },
    iconWrapper: {
        width: '100%',
        margin: '0 auto',
        display: 'block'
    },
    statEntry: {
        color: '#888',
        fontSize: '13px'
    },
    input: {
        width: '100%'
    },
    shoutBg: {
        background: '#ffeeb2',
        padding: '4px',
        borderRadius: '2px',
        border: '1px solid #f1e0a5'
    },
    rankText: {
        color: '#000'
    },
    description: {
        minHeight: '100px',
        whiteSpace: 'break-spaces'
    },
    groupShoutButton: {
        marginTop: '0'
    }
});
const GroupPage = (props)=>{
    const store = _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: icon , 1: setIcon  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const shoutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!store.groupId) return;
        (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_6__/* .multiGetGroupIcons */ .tn)({
            groupIds: [
                store.groupId
            ]
        }).then((d)=>{
            setIcon(d[0].imageUrl);
        });
        (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGroupGames */ .af)({
            groupId: store.groupId,
            cursor: null
        }).then(store.setGames);
    }, [
        store.groupId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!store.groupId) return;
        if (store.rank) {
            (0,_services_groups__WEBPACK_IMPORTED_MODULE_5__/* .getPermissionsForRoleset */ .pz)({
                groupId: store.groupId,
                rolesetId: store.rank.id
            }).then((d)=>{
                let obj = {};
                for(const key in d.permissions){
                    for(const nested in d.permissions[key]){
                        obj[nested] = d.permissions[key][nested];
                    }
                }
                console.log('[info] authenticated user permissions:', obj);
                // @ts-ignore
                store.setPermissions(obj);
            });
        }
    }, [
        store.rank
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!auth.userId) return;
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_5__/* .getPrimaryGroup */ .TC)({
            userId: auth.userId
        }).then(store.setPrimary).catch((e)=>{
        // endpoint fails with "Network error" if response body is null (which is returned when user has no primary group). I'm just gonna ignore it for now.
        });
    }, [
        auth.userId
    ]);
    const s = useStyles();
    if (!store.info || !store.games) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mt-4 me-2 ms-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.iconWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: s.icon,
                            src: icon
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: 'mb-0 mt-2 ' + s.statEntry,
                        children: [
                            "Owned By: ",
                            store.info.owner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                id: store.info.owner.userId,
                                name: store.info.owner.username,
                                type: "User"
                            }) : 'Nobody!'
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: 'mb-0 ' + s.statEntry,
                        children: [
                            "Members: ",
                            store.info.memberCount.toLocaleString()
                        ]
                    }),
                    store.rank && store.rank.rank !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: 'mb-0 mt-3 ' + s.statEntry,
                        children: [
                            "My Rank: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.rankText,
                                children: store.rank.name
                            })
                        ]
                    }),
                    store.rank && store.rank.rank === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            label: "Join",
                            onClick: ()=>{
                                (0,_services_groups__WEBPACK_IMPORTED_MODULE_5__/* .joinGroup */ .be)({
                                    groupId: store.groupId
                                }).then(()=>{
                                    window.location.reload();
                                });
                            }
                        })
                    }),
                    store.rank && store.rank.rank !== 0 && !store.info.owner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            label: "Claim",
                            onClick: ()=>{
                                (0,_services_groups__WEBPACK_IMPORTED_MODULE_5__/* .claimGroupOwnership */ .qo)({
                                    groupId: store.groupId
                                }).then(()=>{
                                    window.location.reload();
                                });
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-9 ps-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: store.info.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.description,
                        children: store.info.description
                    }),
                    store.permissions['viewStatus'] && store.info.shout && store.info.shout.body && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-10 mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: s.shoutBg,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-0",
                                        children: store.info.shout.body
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-2 ms-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "fst-italic me-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    id: store.info.shout.poster.userId,
                                                    name: store.info.shout.poster.username,
                                                    type: "User"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-size-12 lighten-3",
                                                children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(store.info.shout.created).format('M/D/YYYY h:mm:ss A')
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    store.permissions['postToStatus'] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-10 mt-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-8 pe-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: shoutRef,
                                            type: "text",
                                            placeholder: "Enter your shout",
                                            className: s.input,
                                            maxLength: 255
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-4 ps-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: s.groupShoutButton,
                                            onClick: (e1)=>{
                                                (0,_services_groups__WEBPACK_IMPORTED_MODULE_5__/* .setStatus */ .Tf)({
                                                    groupId: store.groupId,
                                                    message: shoutRef.current.value
                                                }).then(()=>{
                                                    window.location.reload();
                                                }).catch((e)=>{
                                                    alert(e.message);
                                                });
                                            },
                                            children: "Group Shout"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldVerticalTabs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    options: [
                        store.games.data.length && {
                            name: 'Games',
                            element: null
                        },
                        {
                            name: 'Members',
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_membersRow__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                groupId: store.groupId
                            })
                        },
                        {
                            name: 'Store',
                            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                groupId: store.groupId
                            })
                        }
                    ].filter((v)=>!!v
                    )
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "divider-top mt-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mt-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_groupWall__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    groupId: store.groupId,
                    canView: store.permissions['viewWall'],
                    canPost: store.permissions['postToWall'],
                    canDelete: store.permissions['deleteFromWall']
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9917);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _bcOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6664);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2316);
/* harmony import */ var _genericPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3781);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2918);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1309);
/* harmony import */ var _oldCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_groups__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _bcOverlay__WEBPACK_IMPORTED_MODULE_6__, _creatorLink__WEBPACK_IMPORTED_MODULE_7__, _genericPagination__WEBPACK_IMPORTED_MODULE_8__, _playerImage__WEBPACK_IMPORTED_MODULE_9__]);
([_services_groups__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _bcOverlay__WEBPACK_IMPORTED_MODULE_6__, _creatorLink__WEBPACK_IMPORTED_MODULE_7__, _genericPagination__WEBPACK_IMPORTED_MODULE_8__, _playerImage__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    textarea: {
        width: '100%'
    },
    wallpost: {
        minHeight: '100px'
    }
});
const GroupWall = (props)=>{
    const { canPost , canView , canDelete , groupId  } = props;
    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: loadWallFeedback , 1: setLoadWallFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: hasNoPosts , 1: setHasNoPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const textAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const postLock = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        isLocked: false
    });
    const wallLock = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        isLocked: false
    });
    const page = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(1);
    const getPosts = (cursor)=>{
        if (wallLock.current.isLocked) return;
        wallLock.current.isLocked = true;
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .getWall */ .TD)({
            groupId,
            cursor,
            limit: 10,
            sort: 'Desc'
        }).then((d)=>{
            if (d.data.length === 0 && cursor === null) {
                setHasNoPosts(true);
            }
            setPosts(d);
        }).catch((e)=>{
            setLoadWallFeedback('Wall is temporarily unavailable. Try again later.');
        }).finally(()=>{
            wallLock.current.isLocked = false;
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getPosts(null);
    }, []);
    const s = useStyles();
    // conditionals
    const canPaginate = posts && (posts.nextPageCursor || posts.previousPageCursor);
    if (!canView) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pe-2 ps-2 pt-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "mb-0 fw-600 font-size-16",
                                children: "Wall"
                            }),
                            feedback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-danger mt-2 mb-2",
                                children: feedback
                            }) : null,
                            canPost && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row mt-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            ref: textAreaRef,
                                            rows: 3,
                                            className: s.textarea,
                                            maxLength: 1000
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            onClick: ()=>{
                                                if (postLock.current.isLocked) return;
                                                postLock.current.isLocked = true;
                                                (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .postToWall */ .Qo)({
                                                    groupId,
                                                    content: textAreaRef.current.value
                                                }).then(()=>{
                                                    window.location.reload();
                                                }).catch((e)=>{
                                                    var ref, ref1, ref2;
                                                    setFeedback(((ref2 = (ref = e.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.errors[0]) === null || ref2 === void 0 ? void 0 : ref2.message) || e.message);
                                                }).finally(()=>{
                                                    postLock.current.isLocked = false;
                                                });
                                            },
                                            children: "Post"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 mt-1",
                children: [
                    loadWallFeedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 mb-4 text-center text-danger",
                        children: loadWallFeedback
                    }),
                    hasNoPosts ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 mb-4 text-center",
                        children: "Nobody has posted anything"
                    }) : null,
                    posts && posts.data && posts.data.map((v)=>{
                        if (v.poster === null) return null;
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row pe-2 ps-2 pt-1 pb-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-3 pe-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                name: v.poster.user.username,
                                                id: v.poster.user.userId
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bcOverlay__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                id: v.poster.user.userId
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: s.wallpost,
                                                children: v.body
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "lighten-3",
                                                        children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(v.created).format('M/D/YYYY h:mm:ss A')
                                                    }),
                                                    " by ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        type: "User",
                                                        id: v.poster.user.userId,
                                                        name: v.poster.user.username
                                                    })
                                                ]
                                            }),
                                            (canDelete || v.poster.user.userId === auth.userId) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .deletePost */ .fR)({
                                                        postId: v.id,
                                                        groupId
                                                    }).then(()=>{
                                                        window.location.reload();
                                                    });
                                                },
                                                children: "Delete"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, v.id));
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4",
                        children: canPaginate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_genericPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            page: page.current,
                            onClick: (mode)=>{
                                return (e)=>{
                                    if (postLock.current.isLocked) return;
                                    if (mode === 1) {
                                        if (!posts.nextPageCursor) return;
                                        getPosts(posts.nextPageCursor);
                                        page.current = page.current + 1;
                                    } else if (mode === -1) {
                                        if (!posts.previousPageCursor) return;
                                        getPosts(posts.previousPageCursor);
                                        page.current = page.current + 1;
                                    }
                                };
                            }
                        }) : null
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupWall);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3867:
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
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2300);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9917);
/* harmony import */ var _bcOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6664);
/* harmony import */ var _genericPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3781);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2918);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8452);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_groups__WEBPACK_IMPORTED_MODULE_4__, _bcOverlay__WEBPACK_IMPORTED_MODULE_5__, _genericPagination__WEBPACK_IMPORTED_MODULE_6__, _playerImage__WEBPACK_IMPORTED_MODULE_7__, _services_users__WEBPACK_IMPORTED_MODULE_9__]);
([_services_groups__WEBPACK_IMPORTED_MODULE_4__, _bcOverlay__WEBPACK_IMPORTED_MODULE_5__, _genericPagination__WEBPACK_IMPORTED_MODULE_6__, _playerImage__WEBPACK_IMPORTED_MODULE_7__, _services_users__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    select: {
        float: 'right'
    },
    membersRow: {
        minHeight: '174px'
    }
});
const MembersRow = (props)=>{
    const { groupId  } = props;
    const { 0: roles , 1: setRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: members , 1: setMembers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const asyncRoleId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        id: 0
    });
    const limit = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('groupsPageMemberCountLimit', 10);
    const loadMembers = (id, cursor)=>{
        asyncRoleId.current.id = id;
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .getRolesetMembers */ .Tm)({
            groupId,
            roleSetId: id,
            cursor: cursor,
            limit,
            sortOrder: 'desc'
        }).then((d)=>{
            if (asyncRoleId.current.id !== id) return;
            setMembers(d);
            if (cursor === null) {
                setPage(1);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .getRoles */ .F3)({
            groupId
        }).then((r)=>{
            r = r.sort((a, b)=>{
                return a.rank > b.rank ? 1 : -1;
            });
            setRoles(r);
            const memberRole = r[1];
            asyncRoleId.current.id = memberRole.id;
            (0,_services_groups__WEBPACK_IMPORTED_MODULE_4__/* .getRolesetMembers */ .Tm)({
                groupId,
                roleSetId: r[1].id,
                limit,
                cursor: null,
                sortOrder: 'desc'
            }).then(setMembers);
        });
    }, [
        groupId
    ]);
    const s = useStyles();
    // conditionals
    const canPaginate = members && (members.nextPageCursor || members.previousPageCursor);
    // for tick
    const Username = ({ userId , username  })=>{
        const { 0: isVerified , 1: setIsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            (0,_services_users__WEBPACK_IMPORTED_MODULE_9__/* .getUserInfo */ .bG)({
                userId
            }).then((userInfo)=>{
                setIsVerified(userInfo.isVerified || false);
            }).catch((error)=>{
                console.error('failed to get user info:', error);
            });
        }, [
            userId
        ]);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "mb-0 text-left font-size-14 text-truncate",
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
    if (!roles) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 pe-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    className: s.select,
                    onChange: (e)=>{
                        const id = parseInt(e.currentTarget.value, 10);
                        loadMembers(id, null);
                    },
                    children: roles.slice(1).map((v)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                            value: v.id,
                            children: [
                                v.name,
                                " (",
                                v.memberCount,
                                ")"
                            ]
                        }, v.id));
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'row ' + s.membersRow,
                        children: members && members.data && members.data.map((v)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    href: `/users/${v.userId}/profile`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                id: v.userId,
                                                name: v.username
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                                userId: v.userId,
                                                username: v.username
                                            })
                                        ]
                                    })
                                })
                            }, v.userId));
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-lg-6 mx-auto mt-4",
                            children: canPaginate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_genericPagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                page: page,
                                onClick: (mode)=>{
                                    return (e)=>{
                                        e.preventDefault();
                                        if (mode === 1) {
                                            if (!members.nextPageCursor) return;
                                            loadMembers(asyncRoleId.current.id, members.nextPageCursor);
                                            setPage(page + 1);
                                        } else if (mode === -1) {
                                            if (!members.previousPageCursor) return;
                                            loadMembers(asyncRoleId.current.id, members.previousPageCursor);
                                            setPage(page - 1);
                                        }
                                    };
                                }
                            }) : null
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MembersRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OldCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    card: {
        background: '#e6e6e6',
        padding: '4px',
        border: '1px solid #b2b2b2'
    }
});
function OldCard(props) {
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.card,
        children: props.children
    }));
};


/***/ }),

/***/ 4039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1309);
/* harmony import */ var _oldCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7772);





const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    inline: {
        display: 'inline-block',
        textAlign: 'center'
    },
    inlineWrapper: {
        textAlign: 'center'
    },
    searchGroupsInput: {
        minWidth: '300px'
    }
});
const SearchGroups = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            method: "GET",
            action: "/SearchGroups.aspx",
            autoComplete: "off",
            className: "mb-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: s.inlineWrapper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: s.searchGroupsInput,
                            type: "text",
                            placeholder: " Search All Groups",
                            name: "keyword",
                            autoComplete: "off"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline + ' ms-2',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            children: "Search"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchGroups);


/***/ }),

/***/ 5743:
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
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
/* harmony import */ var _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3370);
/* harmony import */ var _oldCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7772);
/* harmony import */ var _sidebarGroupEntry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4254);
/* harmony import */ var _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6035);
/* harmony import */ var _groupPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_6__, _sidebarGroupEntry__WEBPACK_IMPORTED_MODULE_8__, _groupPage__WEBPACK_IMPORTED_MODULE_10__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_6__, _sidebarGroupEntry__WEBPACK_IMPORTED_MODULE_8__, _groupPage__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    container: {
        minHeight: '300px',
        height: '85vh',
        overflowY: 'auto',
        overflowX: 'hidden'
    }
});
const SideBar = (props)=>{
    const groupPageStore = _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const store = _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const s = useStyles();
    // Below is all just for group sorting.
    // Preferred order:
    // GroupID of the current page,
    // Primary Group,
    // Owned Groups,
    // Ranks, DESC (Highest rank first)
    let primaryGroup;
    let groupMatchingPage;
    const groups = [];
    if (store.groups) {
        for (const item of store.groups){
            if (groupPageStore.primary) {
                if (groupPageStore.primary.group.id === item.group.id) {
                    primaryGroup = item;
                    continue;
                }
            }
            if (item.group.id === groupPageStore.groupId) {
                groupMatchingPage = item;
                continue;
            }
            groups.push(item);
        }
        groups.sort((a, b)=>{
            return a.role.rank > b.role.rank ? 1 : -1;
        });
        if (primaryGroup) {
            groups.unshift(primaryGroup);
        }
        if (groupMatchingPage) {
            groups.unshift(groupMatchingPage);
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.container,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "Create",
                            className: buttonStyles.buyButton + ' pt-2 pb-2 font-size-25',
                            onClick: ()=>{
                                window.location.href = '/My/CreateGroup.aspx';
                            }
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: groups.map((v)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebarGroupEntry__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                ...v
                            }, v.group.id));
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3370);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_2__]);
_stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    icon: {
        width: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    },
    link: {
        color: '#000'
    }
});
const SidebarGroupEntry = (props)=>{
    const store = _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mb-3 me-1 ms-1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-3 pe-0",
                children: store.icons && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: s.icon,
                    src: store.icons[props.group.id]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-9 ps-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-0 mt-3 fw-600",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: `/My/Groups.aspx?gid=${props.group.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: s.link,
                            children: props.group.name
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarGroupEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1973:
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
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1669);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8452);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2028);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _itemImage__WEBPACK_IMPORTED_MODULE_3__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _itemImage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const GroupStore = (props)=>{
    const { groupId  } = props;
    const { 0: items1 , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: cursor , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (groupId) {
            (0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .searchCatalog */ ._w)({
                category: 'All',
                creatorType: 'Group',
                creatorId: groupId,
                sort: 'Updated',
                cursor: cursor,
                limit: 50
            }).then((items)=>{
                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .getItemDetails */ .rV)(items.data.filter((v)=>v.itemType === 'Asset'
                ).map((v)=>v.id
                )).then((details)=>{
                    items.data = details.data.data;
                    setItems(items);
                });
            });
        }
    }, [
        groupId,
        cursor
    ]);
    const canGoForwards = items1 && items1.nextPageCursor;
    const canGoBackwards = items1 && items1.previousPageCursor;
    // todo: i have no clue what this page actually looked like
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12",
            children: [
                !items1 ? null : !cursor && items1.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-0 mt-4",
                    children: "This group does not have any items for sale."
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: items1.data.map((v)=>{
                        const url = `/catalog/${v.id}/${(0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .itemNameToEncodedName */ .FS)(v.name)}`;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-6 col-lg-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    href: url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            id: v.id
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-0 text-truncate",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        href: url,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: v.name
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-100",
                                    children: v.isForSale && v.price !== null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        children: v.price
                                    }) : null
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-100",
                                    children: v.isForSale && v.priceTickets !== null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        children: v.priceTickets
                                    }) : null
                                })
                            ]
                        }));
                    })
                }),
                canGoForwards || canGoForwards ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mt-4 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: canGoBackwards ? 'cursor-pointer' : '',
                            onClick: ()=>{
                                if (canGoBackwards) setCursor(items1.previousPageCursor);
                            },
                            children: "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: " "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: canGoForwards ? 'cursor-pointer' : '',
                            onClick: ()=>{
                                if (canGoForwards) setCursor(items1.nextPageCursor);
                            },
                            children: "Next"
                        })
                    ]
                }) : null
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1716:
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
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9917);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
/* harmony import */ var _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1107);
/* harmony import */ var _components_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730);
/* harmony import */ var _components_groupControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7992);
/* harmony import */ var _components_groupPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1871);
/* harmony import */ var _components_oldCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7772);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4039);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5743);
/* harmony import */ var _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6035);
/* harmony import */ var _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3370);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_groups__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_5__, _components_currency__WEBPACK_IMPORTED_MODULE_6__, _components_groupControls__WEBPACK_IMPORTED_MODULE_7__, _components_groupPage__WEBPACK_IMPORTED_MODULE_8__, _components_sidebar__WEBPACK_IMPORTED_MODULE_11__, _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_13__]);
([_services_groups__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_5__, _components_currency__WEBPACK_IMPORTED_MODULE_6__, _components_groupControls__WEBPACK_IMPORTED_MODULE_7__, _components_groupPage__WEBPACK_IMPORTED_MODULE_8__, _components_sidebar__WEBPACK_IMPORTED_MODULE_11__, _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    groupsContainer: {
        background: '#fff',
        padding: '10px 12px',
        minWidth: '970px'
    }
});
const MyGroups = (props)=>{
    console.log('props', props);
    const s = useStyles();
    const store = _stores_myGroupsStore__WEBPACK_IMPORTED_MODULE_13__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const groupPageStore = _stores_groupPageStore__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.isAuthenticated) return;
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_3__/* .getUserGroups */ .no)({
            userId: auth.userId
        }).then(store.setGroups);
    }, [
        auth.userId,
        auth.isAuthenticated
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (!store.groups) return;
        if (props.id) {
            groupPageStore.setGroupId(parseInt(props.id, 10));
            (0,_services_groups__WEBPACK_IMPORTED_MODULE_3__/* .getInfo */ .C5)({
                groupId: props.id
            }).then(groupPageStore.setInfo);
            // check if exists
            let inCache = store.groups && store.groups.find((v)=>v.group.id == props.id
            );
            if (inCache) {
                groupPageStore.setRank(inCache.role);
            } else {
                (0,_services_groups__WEBPACK_IMPORTED_MODULE_3__/* .getRoles */ .F3)({
                    groupId: props.id
                }).then((d)=>{
                    let guest = d.find((v)=>v.rank === 0
                    );
                    groupPageStore.setRank(guest);
                });
            }
        } else if (store.groups) {
            var ref, ref1, ref2;
            groupPageStore.setGroupId((ref = store.groups[0]) === null || ref === void 0 ? void 0 : ref.group.id);
            groupPageStore.setInfo((ref1 = store.groups[0]) === null || ref1 === void 0 ? void 0 : ref1.group);
            groupPageStore.setRank((ref2 = store.groups[0]) === null || ref2 === void 0 ? void 0 : ref2.role);
        }
    }, [
        store.groups,
        props.id
    ]);
    const groupCol = auth.isAuthenticated ? 'col-7 ps-0' : 'col-8 mx-auto';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'container ' + s.groupsContainer,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                auth.isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: groupCol,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: groupPageStore.groupId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_groupPage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-2 ps-0",
                    children: [
                        groupPageStore.info && groupPageStore.info.owner && groupPageStore.info.owner.userId === auth.userId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            groupId: groupPageStore.groupId
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_groupControls__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                context: "GroupDetailsPage"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyGroups);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


const GroupPageStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: groupId , 1: setGroupId  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: info , 1: setInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: rank , 1: setRank  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: games , 1: setGames  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: primary , 1: setPrimary  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    /**
   * @type {[Record<string, boolean>, import("react").Dispatch<Record<string, boolean>>]}
   */ const { 0: permissions , 1: setPermissions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    return {
        groupId,
        setGroupId: (id)=>{
            setInfo(null);
            setRank(null);
            setPermissions({});
            setGroupId(id);
        },
        info,
        setInfo,
        rank,
        setRank,
        permissions,
        setPermissions,
        games,
        setGames,
        primary,
        setPrimary
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupPageStore);


/***/ }),

/***/ 3370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__]);
_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MyGroupsStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: groups1 , 1: setGroups  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: icons , 1: setIcons  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return {
        groups: groups1,
        setGroups: (groups)=>{
            if (groups.length === 0) {
                setGroups(groups);
                return;
            }
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__/* .multiGetGroupIcons */ .tn)({
                groupIds: groups.map((v)=>v.group.id
                )
            }).then((d)=>{
                let obj = {};
                for (const item of d){
                    obj[item.targetId] = item.imageUrl;
                }
                setIcons(obj);
            });
            setGroups(groups);
        },
        icons,
        setIcons
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyGroupsStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;