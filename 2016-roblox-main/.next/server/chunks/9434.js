"use strict";
exports.id = 9434;
exports.ids = [9434];
exports.modules = {

/***/ 2565:
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
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userAdvertisement__WEBPACK_IMPORTED_MODULE_3__]);
_userAdvertisement__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        display: 'block',
        margin: '0 auto',
        width: '100%',
        maxWidth: '728px',
        height: 'auto'
    }
});
const AdBanner = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                type: 1
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3839:
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
 */ const CreatorLinkGame = (props)=>{
    const { 0: isVerified , 1: setIsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const url = '/users/' + props.id + "/profile";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorLinkGame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smallGameCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9013);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9002);
/* harmony import */ var _lib_useDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_smallGameCard__WEBPACK_IMPORTED_MODULE_3__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__]);
([_smallGameCard__WEBPACK_IMPORTED_MODULE_3__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    title: {
        fontWeight: 300,
        marginBottom: '10px',
        marginTop: '10px',
        color: 'rgb(33, 37, 41)',
        marginLeft: '10px'
    },
    gameRow: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'hidden',
        marginLeft: '-4px',
        '&>div': {
            flex: '0 0 auto'
        }
    },
    gameCard: {
        width: '170px',
        paddingLeft: '5px',
        paddingRight: '5px'
    },
    pagerButton: {
        border: '1px solid #c3c3c3',
        width: '40px',
        height: 'calc(100% - 34px)',
        background: 'rgba(255,255,255,1)',
        position: 'relative',
        cursor: 'pointer',
        color: '#666',
        boxShadow: '0 0 3px 0 #ccc',
        '&:hover': {
            color: 'black'
        }
    },
    goBack: {
        float: 'left',
        marginLeft: '10px'
    },
    goForward: {
        float: 'right',
        marginLeft: '10px'
    },
    pagerCaret: {
        textAlign: 'center',
        marginTop: '240%',
        userSelect: 'none',
        fontSize: '40px'
    },
    caretLeft: {
        display: 'block',
        transform: 'rotate(90deg)',
        marginRight: '10px'
    },
    caretRight: {
        display: 'block',
        transform: 'rotate(-90deg)',
        marginLeft: '10px'
    }
});
/**
 * A game row
 * @param {{title: string; games: any[]; icons: any; ads?: boolean;}} props
 */ const GameRow = (props)=>{
    const s = useStyles();
    const { 0: offset , 1: setOffset  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: limit , 1: setLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: offsetComp , 1: setOffsetComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const gameRowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: rowHeight , 1: setRowHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [dimensions] = (0,_lib_useDimensions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!rowRef.current) {
            return;
        }
        // width = 170px
        // sub 80 for pagination buttons
        let windowWidth = rowRef.current.clientWidth;
        // breakpoints: 992, 1300 for side nav
        let offsetNotRounded = (windowWidth - 80) / 170;
        let newLimit = Math.floor(offsetNotRounded);
        setLimit(newLimit);
        if (offsetNotRounded !== newLimit) {
            setOffsetComp(1);
        } else {
            setOffsetComp(0);
        }
    }, [
        dimensions,
        props.games,
        props.icons
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!gameRowRef.current) return;
        const newHeight = Math.max(236, gameRowRef.current.clientHeight);
        if (newHeight === rowHeight) return;
        setRowHeight(newHeight);
    });
    if (!props.games) return null;
    const remainingGames = props.games.length - (offset - offsetComp);
    const showForward = remainingGames >= limit;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: s.title,
                    children: props.title.toUpperCase()
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: props.ads ? 'col-12 col-lg-9' : 'col-12',
                ref: rowRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.goBack + ' ' + s.pagerButton + ' ' + (offset === 0 ? 'opacity-25' : ''),
                        onClick: ()=>{
                            if (offset === 0) return;
                            setOffset(offset - limit);
                        },
                        style: {
                            height: rowHeight
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.pagerCaret,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.caretRight,
                                children: "^"
                            })
                        })
                    }),
                    showForward ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.goForward + ' ' + s.pagerButton,
                        onClick: ()=>{
                            let newOffset = offset + limit;
                            setOffset(newOffset);
                        },
                        style: {
                            height: rowHeight
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.pagerCaret,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.caretLeft,
                                children: "^"
                            })
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'row ' + s.gameRow,
                        ref: gameRowRef,
                        children: props.games.slice(offset, offset + 100).map((v, i)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_smallGameCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: s.gameCard,
                                placeId: v.placeId,
                                creatorId: v.creatorId,
                                creatorType: v.creatorType,
                                creatorName: v.creatorName,
                                iconUrl: props.icons[v.universeId],
                                likes: v.totalUpVotes,
                                dislikes: v.totalDownVotes,
                                name: v.name,
                                playerCount: v.playerCount
                            }, i));
                        })
                    })
                ]
            }),
            props.ads ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-lg-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    type: 3
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9013:
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
/* harmony import */ var _lib_numberUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6911);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5304);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _creatorLinkGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3839);
/* harmony import */ var _userProfile_styles_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3633);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _services_games__WEBPACK_IMPORTED_MODULE_4__, _creatorLinkGame__WEBPACK_IMPORTED_MODULE_5__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _services_games__WEBPACK_IMPORTED_MODULE_4__, _creatorLinkGame__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    label: {
        fontWeight: 300,
        fontSize: '16px',
        marginBottom: 0
    },
    labelPlaying: {
        fontSize: '12px',
        marginBottom: 0,
        color: '#757575'
    },
    imageWrapper: {
        padding: '8px'
    },
    image: {
        width: '100%',
        margin: '0 auto',
        display: 'block'
    },
    thumbsUp: {
        marginBottom: 0
    },
    creatorDetailsCard: {
        position: 'absolute',
        background: 'white',
        marginLeft: '-7px',
        boxShadow: '0 3px 4px 0 rgb(25 25 25 / 30%)'
    },
    creatorText: {
        color: '#c3c3c3',
        fontSize: '13px',
        '&>a': {
            color: '#00a2ff',
            '&:hover': {
                textDecoration: 'underline!important'
            }
        }
    },
    floatRight: {
        float: 'right'
    },
    ratioBox: {
        width: '20px',
        height: '5px',
        background: '#c3c3c3',
        display: 'inline-block',
        marginLeft: '3px'
    },
    ratioBoxPart: {
        height: '5px',
        display: 'inline-block'
    },
    radioBoxPartContainer: {
        display: 'inline-block',
        marginLeft: '3px'
    },
    ratioContainer: {
        display: 'inline-block'
    },
    solidGreen: {
        background: '#757575'
    },
    solidRed: {
        background: '#c3c3c3'
    },
    solidGreenColor: {
        background: '#02b757'
    },
    solidRedColor: {
        background: '#E27676'
    }
});
/**
 * SmallGameCard
 * @param {{name: string; playerCount: number; likes: number; dislikes: number; creatorId: number; creatorType: string | number; creatorName: string; iconUrl: string; placeId: number; className?: string; hideVoting?: boolean;}} props
 * @returns 
 */ const SmallGameCard = (props1)=>{
    const { hideVoting  } = props1;
    const { 0: dimensions , 1: setDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        height: window.innerHeight,
        width: window.innerWidth
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener('resize', ()=>{
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        });
    }, []);
    const s = useStyles();
    const cardStyles = (0,_userProfile_styles_card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { 0: showCreator , 1: setShowCreator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: iconUrl , 1: setIconUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('/img/empty.png');
    const { 0: boxWidth , 1: setBoxWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let likePercent = props1.likes / (props1.likes + props1.dislikes);
    if (isNaN(likePercent) || likePercent < 0) {
        likePercent = 0;
    }
    let numSolidGreen = Math.trunc(likePercent * 5);
    let numSolidRed = Math.max(0, 5 - numSolidGreen);
    const squares = [];
    for(let i2 = 0; i2 < numSolidGreen; i2++){
        squares.push({
            solidGreen: true
        });
    }
    if (numSolidGreen !== likePercent * 5) {
        let remainder = likePercent * 5 - numSolidGreen;
        numSolidRed--;
        squares.push({
            percentGreen: remainder
        });
    }
    for(let i1 = 0; i1 < numSolidRed; i1++){
        squares.push({
            solidRed: true
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (cardRef.current) {
            const width = cardRef.current.clientWidth;
            setBoxWidth((width - 75) / 5);
        }
    }, [
        dimensions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!props1.iconUrl) {
            setIconUrl('/img/empty.png');
            return;
        }
        setIconUrl(props1.iconUrl);
    }, [
        props1.iconUrl
    ]);
    const colRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const url = (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameUrl */ .IH)({
        placeId: props1.placeId,
        name: props1.name
    });
    const Voting = (props)=>{
        const { color  } = props;
        const sGreen = color ? s.solidGreenColor : s.solidGreen;
        const sRed = color ? s.solidRedColor : s.solidRed;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: s.ratioContainer + ' ',
            children: squares.map((v, i)=>{
                if (v.percentGreen) {
                    const widthGreen = boxWidth * v.percentGreen;
                    const widthRed = boxWidth - widthGreen;
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: s.radioBoxPartContainer,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.ratioBoxPart + ' ' + sGreen,
                                style: {
                                    width: widthGreen
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.ratioBoxPart + ' ' + sRed,
                                style: {
                                    width: widthRed
                                }
                            })
                        ]
                    }, i));
                }
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.ratioBox + ' ' + (v.solidGreen ? sGreen : v.solidRed ? sRed : ''),
                    style: {
                        width: boxWidth
                    }
                }, i));
            })
        }));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: cardRef,
        className: props1.className || 'col-6 col-lg-2 ps-1 pe-1',
        onMouseEnter: ()=>{
            setShowCreator(true);
        },
        onMouseLeave: ()=>{
            setShowCreator(false);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: cardStyles.card + ' ',
            ref: colRef,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    href: url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.imageWrapper,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: s.image,
                                src: iconUrl,
                                alt: props1.name,
                                onLoad: (e)=>{},
                                onError: (e)=>{
                                    if (!iconUrl || iconUrl.indexOf('empty.png') !== -1) return;
                                    setIconUrl('/img/empty.png');
                                    setTimeout(()=>{
                                        setIconUrl(props1.iconUrl);
                                    }, 1000);
                                }
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pe-2 pb-2 pt-2 ps-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.label + ' truncate',
                            children: props1.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: s.labelPlaying + ' truncate',
                            children: [
                                (0,_lib_numberUtils__WEBPACK_IMPORTED_MODULE_8__/* .abbreviateNumber */ .d)(props1.playerCount),
                                " Playing"
                            ]
                        }),
                        !showCreator && !hideVoting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.thumbsUp + ' mt-2 d-inline-block',
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-thumbs-up"
                            })
                        }) || null,
                        !showCreator && !hideVoting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Voting, {}) : null,
                        showCreator && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: s.creatorDetailsCard + ' ' + cardStyles.card,
                            style: colRef ? {
                                width: colRef.current.clientWidth + 'px'
                            } : undefined,
                            children: [
                                !hideVoting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: s.thumbsUp + ' ps-2 pe-2 mt-2',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "icon-thumbs-up colored"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Voting, {
                                                    color: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: 'icon-thumbs-down colored ' + s.floatRight
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ps-1 pt-2 pe-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "divider-top"
                                            })
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: 'ps-2 pt-2 pb-0 ' + s.creatorText,
                                    children: [
                                        "By ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLinkGame__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: props1.creatorType,
                                            name: props1.creatorName,
                                            id: props1.creatorId
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallGameCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ abbreviateNumber)
/* harmony export */ });
const abbreviateNumber = (value)=>{
    if (value < 1000) {
        return value.toLocaleString();
    }
    if (value < 1000000) {
        if (value > 99999) {
            return value.toString().slice(0, 3) + 'K+';
        }
        if (value > 9999) {
            return value.toString().slice(0, 2) + 'K+';
        }
    }
    var suffixes = [
        "",
        "k",
        "m",
        "b",
        "t"
    ];
    var suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        // @ts-ignore
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum].toUpperCase() + '+';
};


/***/ }),

/***/ 6134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDimensions = ()=>{
    const { 0: dimensions , 1: setDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        height: window.innerHeight,
        width: window.innerWidth
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const f = ()=>{
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };
        window.addEventListener('resize', f);
        return ()=>{
            window.removeEventListener('resize', f);
        };
    }, []);
    return [
        dimensions
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDimensions);


/***/ })

};
;