"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,2197];
exports.modules = {

/***/ 9831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2069);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2918);
/* harmony import */ var _userActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2969);
/* harmony import */ var _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2520);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_3__, _playerImage__WEBPACK_IMPORTED_MODULE_4__, _userActivity__WEBPACK_IMPORTED_MODULE_5__, _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_6__]);
([_services_games__WEBPACK_IMPORTED_MODULE_3__, _playerImage__WEBPACK_IMPORTED_MODULE_4__, _userActivity__WEBPACK_IMPORTED_MODULE_5__, _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    friendEntry: {
        paddingLeft: '10px',
        paddingRight: '10px',
        maxWidth: '100px',
        overflow: 'hidden'
    },
    thumbnailWrapper: {
        maxWidth: '85px',
        borderRadius: '100%',
        border: '1px solid #c3c3c3',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgb(150 150 150 / 74%)',
        margin: '0 auto',
        display: 'block',
        width: '100%'
    },
    username: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textAlign: 'center',
        marginBottom: 0,
        width: '100%',
        marginTop: '4px',
        fontSize: '15px',
        fontWeight: 500,
        color: '#4a4a4a'
    },
    activityWrapper: {
        float: 'right',
        marginTop: '-26px',
        zIndex: 2,
        position: 'relative'
    }
});
const FriendEntry = (props)=>{
    const store = _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const onlineStatus = store.friendStatus && store.friendStatus[props.id];
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.friendEntry,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            href: `/users/${props.id}/profile`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.thumbnailWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            id: props.id,
                            name: props.name,
                            useHeadshot: true,
                            width: 85,
                            height: 85
                        })
                    }),
                    onlineStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.activityWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userActivity__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ...onlineStatus
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: s.username,
                        children: [
                            props.name,
                            " ",
                            props.isVerified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/verified.svg",
                                alt: "Verified",
                                style: {
                                    width: '18px',
                                    height: '18px',
                                    marginLeft: '3px'
                                }
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FriendEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2611);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__]);
_lib_request__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const css = `
a.list-header {
  display: inline-block;
}
img.header-thumb, img.avatar-card-image {
  height: 85px;
  width: auto;
  display: inline-block;
}
ul.vlist.feeds {
  padding: 0;
  list-style: none;
}
div.list-body {
  display: inline-block;
  margin-left: 10px;
  max-width: calc(100% - 100px);
}
html,body {
  font-family: "Source Sans Pro", serif;
}
p {
  padding: 0;
  margin: 0;
}
p.feedtext {
  padding: 10px 0;
}
span.xsmall {
  color: #777;
  font-size: 12px;
}
a {
  color: #00a2ff;
  text-decoration: none;
}
a:visited {
  color: #00a2ff;
}
li.list-item {
  padding-bottom: 20px;
  border-bottom: 1px solid #c3c3c3;
  padding-top: 10px;
}
`;
const MyFeed = (props)=>{
    const { 0: height1 , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('auto');
    // TODO: would a flag be better? I guess automatically guessing is more convenient...
    const shouldProxyRequest = (0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getBaseUrl */ .SV)().startsWith(window.location.protocol + '//' + window.location.hostname) === false;
    const feedFrameUrl = shouldProxyRequest ? (0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getUrlWithProxy */ .p9)((0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getBaseUrl */ .SV)() + '/Feeds/GetUserFeed') : (0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getBaseUrl */ .SV)() + '/Feeds/GetUserFeed';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            id: "homepage-iframe-feed",
            height: "100%",
            scrolling: "no",
            style: {
                width: '100%',
                height: height1,
                overflow: 'hidden'
            },
            src: feedFrameUrl,
            onLoad: ()=>{
                _lib_logger__WEBPACK_IMPORTED_MODULE_2__/* .logger.info */ .k.info('feed', 'feed iframe loaded');
                // @ts-ignore
                const current = document.getElementById('homepage-iframe-feed');
                // @ts-ignore
                const doc = current.contentWindow.document;
                const body = doc.body;
                const font = doc.createElement('link');
                font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&amp;display=swap');
                font.setAttribute('rel', 'stylesheet');
                doc.body.appendChild(font);
                const styles = doc.createElement('style');
                styles.innerText = css;
                // doc.appendElement(styles)
                doc.body.appendChild(styles);
                const height = body.scrollHeight + 10;
                setHeight(height + 'px');
            }
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFeed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9989:
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
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7918);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2069);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8586);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5435);
/* harmony import */ var _stores_gamesPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4914);
/* harmony import */ var _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1107);
/* harmony import */ var _gamesPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8959);
/* harmony import */ var _gamesPage_components_gameRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6890);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9767);
/* harmony import */ var _userProfile_styles_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3633);
/* harmony import */ var _components_friendEntry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9831);
/* harmony import */ var _components_myFeed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5440);
/* harmony import */ var _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_friends__WEBPACK_IMPORTED_MODULE_4__, _services_games__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_8__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_9__, _gamesPage__WEBPACK_IMPORTED_MODULE_10__, _gamesPage_components_gameRow__WEBPACK_IMPORTED_MODULE_11__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_12__, _components_friendEntry__WEBPACK_IMPORTED_MODULE_14__, _components_myFeed__WEBPACK_IMPORTED_MODULE_15__, _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_16__]);
([_services_friends__WEBPACK_IMPORTED_MODULE_4__, _services_games__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_8__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_9__, _gamesPage__WEBPACK_IMPORTED_MODULE_10__, _gamesPage_components_gameRow__WEBPACK_IMPORTED_MODULE_11__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_12__, _components_friendEntry__WEBPACK_IMPORTED_MODULE_14__, _components_myFeed__WEBPACK_IMPORTED_MODULE_15__, _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    container: {
        maxWidth: '1200px!Important'
    },
    headshotWrapper: {
        borderRadius: '100%',
        overflow: 'hidden',
        background: 'white',
        border: '1px solid #c3c3c3',
        boxShadow: '0 -5px 20px rgba(25,25,25,0.15)'
    },
    helloMessage: {
        fontWeight: 600,
        fontSize: '40px',
        // marginTop: '40px',
        '@media(min-width: 980px)': {
            marginTop: '60px',
            marginLeft: '20px'
        }
    },
    subHeader: {
        fontWeight: 300,
        fontSize: '24px',
        color: '#4a4a4a'
    },
    card: {
        boxShadow: '0 -5px 20px rgba(25,25,25,0.15)'
    },
    friendRow: {
        flexFlow: 'row',
        marginRight: '-7px',
        overflow: 'auto'
    },
    mainBody: {
        background: '#e3e3e3'
    }
});
const MyDashboard = (props)=>{
    const s = useStyles();
    const cardStyles = (0,_userProfile_styles_card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const { friends , setFriends , friendStatus  } = _stores_dashboardStore__WEBPACK_IMPORTED_MODULE_16__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: gameSorts , 1: setGameSorts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: icons1 , 1: setIcons  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.userId) return;
        (0,_services_friends__WEBPACK_IMPORTED_MODULE_4__/* .getFriends */ .$J)({
            userId: auth.userId
        }).then((d)=>{
            if (d.length > 0) {
                setFriends(d);
            }
        });
    }, [
        auth.userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_games__WEBPACK_IMPORTED_MODULE_5__/* .getGameSorts */ .Xy)({
            gameSortsContext: 'HomeSorts'
        }).then((sorts)=>{
            let proms = [];
            let gamesList = [];
            let idsForIcons = [];
            for (const item of sorts.sorts){
                gamesList.push(item);
                proms.push((0,_services_games__WEBPACK_IMPORTED_MODULE_5__/* .getGameList */ .ZN)({
                    sortToken: item.token,
                    limit: 100,
                    keyword: ''
                }).then((games)=>{
                    item.games = games.games;
                    games.games.forEach((v)=>idsForIcons.push(v.universeId)
                    );
                }));
            }
            Promise.all(proms).then(()=>{
                setGameSorts(gamesList);
                (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_6__/* .multiGetUniverseIcons */ .$U)({
                    universeIds: idsForIcons,
                    size: '150x150'
                }).then((icons)=>{
                    let obj = {};
                    for (const key of icons){
                        obj[key.targetId] = key.imageUrl;
                    }
                    ;
                    setIcons(obj);
                });
            });
        });
    }, []);
    if (!auth.userId) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'container ' + s.container,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-none d-lg-flex col-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        context: "dashboard-left"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: 'col-12 col-lg-8 ' + s.mainBody,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: s.headshotWrapper,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            id: auth.userId,
                                            name: auth.username
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-9",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: s.helloMessage,
                                        children: [
                                            "Hello, ",
                                            auth.username,
                                            "!"
                                        ]
                                    })
                                })
                            ]
                        }),
                        friends && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mt-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: s.subHeader,
                                        children: [
                                            "Friends (",
                                            friends.length,
                                            ")"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: 'card pt-3 pb-3 ps-3 pe-2 ' + s.card,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: 'row ' + s.friendRow,
                                            children: friends.map((v)=>{
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_friendEntry__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    ...v,
                                                    isVerified: v.isVerified || false
                                                }, v.id));
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        gameSorts && gameSorts.map((v)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gamesPage_components_gameRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                title: v.displayName,
                                games: v.games,
                                icons: icons1
                            }, v.token));
                        }),
                        (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('userFeedEnabled', true) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mt-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-md-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: cardStyles.card,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: s.subHeader,
                                                children: "MY FEED"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myFeed__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                })
                            })
                        }) : null
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-none d-lg-flex col-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        context: "dashboard-right"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_presence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5544);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_presence__WEBPACK_IMPORTED_MODULE_2__]);
_services_presence__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DashboardStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: friends , 1: setFriends  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: friendStatus , 1: setFriendStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: friendsVerified , 1: setFriendsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!friends || friendStatus) {
            return;
        }
        (0,_services_presence__WEBPACK_IMPORTED_MODULE_2__/* .multiGetPresence */ .M)({
            userIds: friends.map((v)=>v.id
            )
        }).then((d)=>{
            let obj = {};
            for (const user of d){
                obj[user.userId] = user;
            }
            setFriendStatus(obj);
            let sortedFriends = friends.sort((a, b)=>{
                const onlineA = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(obj[a.id].lastOnline);
                const onlineB = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(obj[b.id].lastOnline);
                return onlineA.isAfter(onlineB) ? -1 : onlineA.isSame(onlineB) ? 0 : 1;
            });
            setFriends([
                ...sortedFriends
            ]);
        }).catch((e)=>{
            console.error('[error] friends err', e);
        });
    }, [
        friends,
        friendStatus
    ]);
    return {
        friends,
        setFriends,
        friendStatus,
        setFriendStatus
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthenticatedHomePage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_myDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9989);
/* harmony import */ var _components_myDashboard_stores_dashboardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2520);
/* harmony import */ var _components_theme2016__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_myDashboard__WEBPACK_IMPORTED_MODULE_2__, _components_myDashboard_stores_dashboardStore__WEBPACK_IMPORTED_MODULE_3__]);
([_components_myDashboard__WEBPACK_IMPORTED_MODULE_2__, _components_myDashboard_stores_dashboardStore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function AuthenticatedHomePage() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_theme2016__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myDashboard_stores_dashboardStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_myDashboard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    }));
};
const getStaticProps = ()=>{
    return {
        props: {
            title: 'Home - ROBLOX'
        }
    };
};

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,9002,2634,5967,5435,5304,2918,2069,9767,4998,9434,701,8959,4639], () => (__webpack_exec__(2993)));
module.exports = __webpack_exports__;

})();