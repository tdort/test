"use strict";
(() => {
var exports = {};
exports.id = 7017;
exports.ids = [7017,2197];
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

/***/ 4953:
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
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5304);
/* harmony import */ var _gearDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7328);
/* harmony import */ var _assetListAdEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9888);
/* harmony import */ var _assetListCatalogEntry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6220);
/* harmony import */ var _assetListGameEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8178);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1747);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8452);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2300);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _assetListAdEntry__WEBPACK_IMPORTED_MODULE_5__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_8__, _services_games__WEBPACK_IMPORTED_MODULE_11__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _assetListAdEntry__WEBPACK_IMPORTED_MODULE_5__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_8__, _services_games__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        margin: '0 auto',
        display: 'block',
        height: '70px',
        width: '70px',
        objectFit: 'cover'
    },
    row: {
        borderBottom: '1px solid #f2f2f2',
        paddingBottom: '4px'
    },
    gearDropdownWrapper: {
        marginBottom: '-1rem'
    }
});
const AssetEntry = (props)=>{
    //console.log('props:', props);
    const s = useStyles();
    const thumbs = _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useContainer */ .Z.useContainer();
    const isPlace = props.assetType === 9;
    const isAd = props.ad !== undefined && props.target !== undefined;
    const isBadge = props.typeId === 21;
    const isPass = props.typeId === 34;
    const assetUrl = isPlace ? (0,_services_games__WEBPACK_IMPORTED_MODULE_11__/* .getGameUrl */ .IH)({
        placeId: props.assetId,
        name: props.name
    }) : (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
        assetId: props.assetId,
        name: props.name
    });
    const url = isPlace ? `/universes/configure?id=${props.universeId}` : assetUrl;
    const imageAssetId = isAd ? props.ad.advertisementAssetId : props.assetId;
    // todo: figure out better way to do this
    const { 0: runMenuOpen , 1: setRunMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const gearOptions = [
        isPlace && {
            url: '/universes/configure?id=' + props.universeId,
            name: 'Configure Game'
        },
        isPlace && {
            url: '/places/' + props.assetId + '/update',
            name: 'Configure Start Place'
        },
        // localization skipped
        isPlace && {
            name: 'separator'
        },
        isPlace && {
            name: 'Create Badge',
            url: `/develop?selectedPlaceId=${props.assetId}&View=21`
        },
        isPlace && {
            name: 'Create Pass',
            url: `/develop?selectedPlaceId=${props.assetId}&View=34`
        },
        isPlace && {
            name: 'Developer Stats',
            url: `/creations/games/${props.universeId}/stats`
        },
        isPlace && {
            name: 'separator'
        },
        !isAd && !isPlace && {
            name: 'Configure',
            url: `/My/Item.aspx?id=${props.assetId}`
        },
        !isAd && {
            name: 'Advertise',
            url: `/My/CreateUserAd.aspx?targetId=${props.assetId}&targetType=asset`
        },
        isAd && {
            name: 'Run',
            onClick: (e)=>{
                e.preventDefault();
                console.log('run ad');
                setRunMenuOpen(!runMenuOpen);
            }
        },
        isPlace && {
            name: 'separator'
        },
        isPlace && {
            name: 'Shut Down All Servers',
            url: '#',
            onClick: (e)=>{
                e.preventDefault();
            // TODO
            }
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'row ' + s.row,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: s.image,
                    src: thumbs.getAssetThumbnail(imageAssetId)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-9 ps-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            href: url,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: props.name
                            })
                        })
                    }),
                    isAd ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetListAdEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ad: props.ad,
                        target: props.target,
                        runMenuOpen: runMenuOpen,
                        setRunMenuOpen: setRunMenuOpen
                    }) : props.assetType === 9 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetListGameEntry__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        url: assetUrl,
                        startPlaceName: props.name
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetListCatalogEntry__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        created: props.created
                    }),
                    (isBadge || isPass) && props.placeId && props.placeName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-0",
                        style: {
                            fontSize: '14px',
                            color: '#666'
                        },
                        children: [
                            "Target Place: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                href: `/games/${props.placeId}/Game`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: props.placeName
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gearDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    boxDropdownRightAmount: 0,
                    options: gearOptions.filter((v)=>!!v
                    )
                })
            })
        ]
    }));
};
const AssetList = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: props.assets.map((v)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AssetEntry, {
                    ...v
                }, v.assetId || v.ad.id));
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9888:
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
/* harmony import */ var _services_ads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5948);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5304);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7378);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_ads__WEBPACK_IMPORTED_MODULE_4__, _services_catalog__WEBPACK_IMPORTED_MODULE_5__]);
([_services_ads__WEBPACK_IMPORTED_MODULE_4__, _services_catalog__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getUrl = (target)=>{
    if (target.targetType === 'Asset') return (0,_services_catalog__WEBPACK_IMPORTED_MODULE_5__/* .getItemUrl */ .yz)({
        assetId: target.targetId,
        name: target.targetName
    });
    if (target.targetType === 'Group') return `/My/Groups.aspx?gid=${target.targetId}`;
    throw new Error('Type not implemented: ' + target.targetType);
};
const useStatStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    createdLabel: {
        color: '#999'
    }
});
const AdStat = ({ name , value  })=>{
    const s = useStatStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "mb-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: s.createdLabel,
                    children: [
                        name,
                        ": "
                    ]
                }),
                " ",
                value
            ]
        })
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    notRunningIcon: {
        height: '4px',
        width: '4px',
        background: '#0a0a0a'
    },
    bidLabel: {
        fontWeight: 600
    },
    btn: {
        fontSize: '1rem',
        display: 'inline',
        marginLeft: '0.5rem'
    }
});
const AssetListAdEntry = (props)=>{
    const s = useStyles();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { ad , target  } = props;
    const { runMenuOpen , setRunMenuOpen  } = props;
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const amountRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    let ctr = (ad.clicksLastRun / ad.impressionsLastRun * 100).toFixed(2);
    let totalCtr = (ad.clicksAll / ad.impressionsAll * 100).toFixed(2);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-0",
                children: [
                    ad.name,
                    " (for ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        href: getUrl(target),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: target.targetName
                        })
                    }),
                    ")"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Impressions",
                        value: ad.impressionsLastRun.toLocaleString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Clicks",
                        value: ad.clicksLastRun.toLocaleString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "CTR",
                        value: ctr + '%'
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Bid",
                        value: ad.bidAmountRobuxLastRun.toLocaleString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Total Impr",
                        value: ad.impressionsAll.toLocaleString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Total Clicks",
                        value: ad.clicksAll.toLocaleString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Total CTR",
                        value: totalCtr + '%'
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdStat, {
                        name: "Total Bid",
                        value: ad.bidAmountRobuxAll.toLocaleString()
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "cursor-pointer",
                        onClick: (e)=>{
                            if (!ad.isRunning || true) {
                                setRunMenuOpen(!runMenuOpen);
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: 'game-privacy-symbol ' + (ad.isRunning ? 'gps-active' : 'gps-inactive')
                            }),
                            " ",
                            ad.isRunning ? 'Running' : 'Not Running'
                        ]
                    })
                })
            }),
            runMenuOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    feedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-danger",
                            children: feedback
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.bidLabel,
                                children: "Bid in Robux: "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                disabled: locked,
                                ref: amountRef,
                                type: "text",
                                className: "p-1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                disabled: locked,
                                label: "Bid",
                                className: buttonStyles.buyButton + ' ' + buttonStyles.normal + ' ' + s.btn,
                                divClassName: s.btn,
                                onClick: ()=>{
                                    if (locked) return;
                                    setFeedback(null);
                                    let num = parseInt(amountRef.current.value, 10);
                                    if (!Number.isSafeInteger(num) || num < 0) return setFeedback('Invalid Robux amount.');
                                    setLocked(true);
                                    (0,_services_ads__WEBPACK_IMPORTED_MODULE_4__/* .bidOnAd */ .ow)({
                                        adId: ad.id,
                                        robux: num
                                    }).then(()=>{
                                        window.location.reload();
                                    }).catch((e)=>{
                                        setFeedback('Error buying ad. ' + e.message);
                                        setLocked(false);
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                label: "Cancel",
                                className: buttonStyles.cancelButton + ' ' + buttonStyles.normal + ' ' + s.btn,
                                divClassName: s.btn,
                                onClick: ()=>{
                                    setRunMenuOpen(false);
                                }
                            })
                        ]
                    })
                ]
            }) : null
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetListAdEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    createdLabel: {
        color: '#999'
    }
});
const AssetListCatalogEntry = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "mb-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: s.createdLabel,
                    children: "Created: "
                }),
                " ",
                dayjs__WEBPACK_IMPORTED_MODULE_1___default()(props.created).format('M/d/YYYY')
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetListCatalogEntry);


/***/ }),

/***/ 8178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8452);



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    startPlaceLabel: {
        color: '#999',
        paddingRight: '8px',
        fontSize: '13px'
    },
    visibilityButton: {}
});
const AssetListGameEntry = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: s.startPlaceLabel,
                        children: "Start Place: "
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        href: props.url,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: props.startPlaceName
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.visibilityButton + ' mb-0 mt-1',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    href: props.url + '#/#basicSettings',
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Public"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetListGameEntry);


/***/ }),

/***/ 1568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verticalSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1068);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7225);
/* harmony import */ var _subPages_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5599);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9917);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_constants__WEBPACK_IMPORTED_MODULE_3__, _subPages_games__WEBPACK_IMPORTED_MODULE_4__, _services_groups__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__]);
([_constants__WEBPACK_IMPORTED_MODULE_3__, _subPages_games__WEBPACK_IMPORTED_MODULE_4__, _services_groups__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CreationsTab = (props)=>{
    const selected = _constants__WEBPACK_IMPORTED_MODULE_3__/* .developerPages.find */ .F.find((v)=>v.id === props.id
    ) || _constants__WEBPACK_IMPORTED_MODULE_3__/* .developerPages[0] */ .F[0];
    if (!selected) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-2",
                children: [
                    props.groupId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-0 mt-2",
                                children: "Select Group:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                className: "w-100",
                                onChange: (newValue)=>{
                                    props.setGroupId(parseInt(newValue.currentTarget.value, 10));
                                },
                                children: props.groups.map((v)=>{
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: v.id,
                                        children: v.name
                                    }, v.id));
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_verticalSelector__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        selected: selected.name,
                        options: _constants__WEBPACK_IMPORTED_MODULE_3__/* .developerPages.map */ .F.map((v)=>{
                            return {
                                name: v.name,
                                url: v.url,
                                disabled: v.disabled
                            };
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-8 mt-4",
                children: selected.element({
                    isGroupTab: props.isGroupTab,
                    groupId: props.groupId
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreationsTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2332:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NotAvailable = (props)=>{
    return(/*#__PURE__*/ _jsx("div", {
        className: "row",
        children: /*#__PURE__*/ _jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ _jsx("p", {
                className: "mt-2",
                children: "This feature is not available right now."
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NotAvailable)));


/***/ }),

/***/ 3242:
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
/* harmony import */ var _services_ads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5948);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
/* harmony import */ var _assetList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_ads__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _assetList__WEBPACK_IMPORTED_MODULE_5__]);
([_services_ads__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _assetList__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Clothing = (props)=>{
    const { 0: ads , 1: setAds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.userId && !props.groupId) return;
        setAds(null);
        (0,_services_ads__WEBPACK_IMPORTED_MODULE_3__/* .getAds */ .bW)({
            creatorId: props.groupId || auth.userId,
            creatorType: props.groupId ? 'Group' : 'User'
        }).then((d)=>{
            setAds(d);
        });
    }, [
        auth.userId,
        props.groupId
    ]);
    if (!ads) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "User Ads"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mt-4",
                children: ads.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "You haven't created any User Ads."
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    assets: ads.data
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clothing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_develop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1885);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _assetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4953);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_develop__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _assetList__WEBPACK_IMPORTED_MODULE_4__]);
([_services_develop__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _assetList__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Badges = ()=>{
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: badges , 1: setBadges  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedPlaceId , 1: setSelectedPlaceId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: badgeName , 1: setBadgeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: badgeDescription , 1: setBadgeDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const params = new URLSearchParams(window.location.search);
        const placeId = params.get('selectedPlaceId');
        if (placeId) setSelectedPlaceId(placeId);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.userId) return;
        (0,_services_develop__WEBPACK_IMPORTED_MODULE_2__/* .getCreatedItems */ .gs)({
            limit: 100,
            cursor: '',
            assetType: 21
        }).then((data)=>setBadges(data)
        ).catch((err)=>console.error(err)
        );
    }, [
        auth.userId
    ]);
    const onSubmit = async ()=>{
        if (locked) return;
        if (!fileRef.current.files.length) return setFeedback("You must select a file.");
        if (!badgeName) return setFeedback("You must provide a badge name.");
        if (!badgeDescription) return setFeedback("You must provide a description.");
        setFeedback(null);
        setLocked(true);
        try {
            // why does upload asset not come with a description field Boi
            await (0,_services_develop__WEBPACK_IMPORTED_MODULE_2__/* .uploadBadgePass */ .EC)({
                name: badgeName,
                description: badgeDescription,
                assetTypeId: 21,
                placeId: selectedPlaceId,
                file: fileRef.current.files[0]
            });
            window.location.href = "/develop?View=21";
        } catch (err) {
            setFeedback(err.message);
            setLocked(false);
        }
    };
    // Make the template an actual link
    if (selectedPlaceId) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Upload a Badge"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Don't know how? ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/img/Template.png",
                            children: "Click Here"
                        }),
                        "."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Image:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            ref: fileRef,
                            accept: "image/*",
                            style: {
                                width: '300px',
                                height: '30px'
                            }
                        }),
                        feedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: 'red',
                                marginLeft: '8px'
                            },
                            children: feedback
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Name:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: badgeName,
                            onChange: (e)=>setBadgeName(e.target.value)
                            ,
                            style: {
                                width: '300px',
                                height: '30px',
                                borderRadius: 0,
                                border: '1px solid #ccc'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Description:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            value: badgeDescription,
                            onChange: (e)=>setBadgeDescription(e.target.value)
                            ,
                            style: {
                                width: '300px',
                                height: '60px',
                                borderRadius: 0,
                                border: '1px solid #ccc'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    disabled: locked,
                    label: "Upload",
                    onClick: onSubmit
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Your Badges"
            }),
            badges ? badges.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "You haven't created any badges yet."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                assets: badges.data
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading..."
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badges);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1386:
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
/* harmony import */ var _services_develop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1885);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7378);
/* harmony import */ var _assetList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _services_develop__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _assetList__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _services_develop__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _assetList__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const detailsMap = {
    2: {
        name: 'T-Shirt',
        namePlural: 'T-Shirts',
        title: 'a T-Shirt',
        templateUrl: '',
        fileLabel: 'image'
    },
    11: {
        name: 'Shirt',
        namePlural: 'Shirts',
        title: 'a Shirt',
        templateUrl: `${(0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getFullUrl */ .mn)('rbxcdn', `/static/images/Template-Shirts-R15_07262019.png`)}`,
        fileLabel: 'image'
    },
    12: {
        name: 'Pants',
        namePlural: 'pants',
        title: 'Pants',
        templateUrl: `${(0,_lib_request__WEBPACK_IMPORTED_MODULE_3__/* .getFullUrl */ .mn)('rbxcdn', `/static/images/Template-Shirts-R15_07262019.png`)}`,
        fileLabel: 'image'
    },
    3: {
        name: 'Audio',
        namePlural: 'audio',
        title: 'Audio',
        fileLabel: '.mp3 or .ogg file',
        subtext: `Audio uploads cost 25 Robux regardless of size. Audio uploads must be less than 7 minutes and smaller than 19.5 MB.`
    },
    1: {
        name: 'Decal',
        namePlural: 'Decals',
        title: 'Decals',
        fileLabel: '.png or .jpeg'
    },
    4: {
        name: 'Mesh',
        namePlural: 'Meshes',
        title: 'a Mesh',
        fileLabel: '.mesh'
    }
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    subtext: {
        color: '#d2d2d2',
        fontSize: '14px',
        marginLeft: '8px'
    },
    inputItemName: {
        width: 'calc(100% - 200px)',
        marginLeft: '28px'
    }
});
const Clothing = (props)=>{
    const { id , groupId  } = props;
    const details = detailsMap[id];
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: assetList , 1: setAssetList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    /**
   * @type {React.Ref<HTMLInputElement>}
   */ const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onSubmit = (e1)=>{
        e1.preventDefault();
        if (locked) return;
        if (!fileRef.current.files.length) return setFeedback('You must select a file');
        if (!nameRef.current.value) return setFeedback('You must specify a name');
        let image = fileRef.current.files[0];
        if (image.size >= 80000000) return setFeedback('The file is too large');
        if (image.size === 0) return setFeedback('The file is empty');
        setLocked(true);
        (0,_services_develop__WEBPACK_IMPORTED_MODULE_4__/* .uploadAsset */ .i0)({
            name: nameRef.current.value,
            assetTypeId: id,
            file: image,
            groupId
        }).then(()=>{
            window.location.reload();
        }).catch((e)=>{
            setFeedback(e.message);
            setLocked(false);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAssetList(null);
        if (!auth.userId && !groupId) return;
        (0,_services_develop__WEBPACK_IMPORTED_MODULE_4__/* .getCreatedItems */ .gs)({
            limit: 100,
            cursor: '',
            assetType: id,
            groupId
        }).then((d)=>{
            setAssetList(d);
        });
    }, [
        auth.userId,
        id,
        groupId
    ]);
    const s = useStyles();
    if (!details) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        children: [
                            "Create ",
                            details.title,
                            " ",
                            !details.subtext ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: s.subtext,
                                children: [
                                    "Don't know how? ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://developer.roblox.com/articles/How-to-Make-Shirts-and-Pants-for-Roblox-Characters",
                                        children: "Click Here"
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    details.subtext ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: details.subtext
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ms-4 me-4 mt-4",
                    children: [
                        details.templateUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Did you use the template? If not, ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: details.templateUrl,
                                    children: "download it here"
                                }),
                                "."
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Find your ",
                                details.fileLabel,
                                ": ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ref: fileRef,
                                    type: "file"
                                }),
                                " ",
                                feedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-danger",
                                    children: feedback
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                details.name,
                                " Name: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ref: nameRef,
                                    type: "text",
                                    className: s.inputItemName
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "float-left",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                disabled: locked,
                                label: "Upload",
                                onClick: onSubmit
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mt-4",
                children: assetList ? assetList.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "You haven't created any ",
                        details.namePlural.toLowerCase(),
                        "."
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    assets: assetList.data
                }) : null
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clothing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5599:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7378);
/* harmony import */ var _assetList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _assetList__WEBPACK_IMPORTED_MODULE_8__]);
([_services_games__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _assetList__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({});
const GamesSubPage = (props)=>{
    const s = useStyles();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { 0: games , 1: setGames  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setGames(null);
        if (props.groupId) {
            (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGroupGames */ .af)({
                groupId: props.groupId,
                cursor: ''
            }).then((data)=>setGames(data)
            );
        } else if (auth.userId) {
            (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getUserGames */ .Sq)({
                userId: auth.userId,
                cursor: ''
            }).then((data)=>setGames(data)
            );
        }
    }, [
        auth.userId,
        props.groupId
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    className: buttonStyles.buyButton + ' w-auto ms-0',
                    label: "Create New Game",
                    onClick: ()=>router.push('/internal/create-place')
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "mt-2",
                    children: "Games"
                }),
                games ? games.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4",
                    children: "You haven't created any games."
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    assets: games.data.map((v)=>{
                        return {
                            assetId: v.rootPlace.id,
                            assetType: 9,
                            name: v.name,
                            universeId: v.id,
                            // todo:
                            isPublic: true
                        };
                    })
                }) : null
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamesSubPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_develop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1885);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _assetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4953);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_develop__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _assetList__WEBPACK_IMPORTED_MODULE_4__]);
([_services_develop__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _assetList__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Badges = ()=>{
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: badges , 1: setBadges  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedPlaceId , 1: setSelectedPlaceId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: badgeName , 1: setBadgeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: badgeDescription , 1: setBadgeDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const params = new URLSearchParams(window.location.search);
        const placeId = params.get('selectedPlaceId');
        if (placeId) setSelectedPlaceId(placeId);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.userId) return;
        (0,_services_develop__WEBPACK_IMPORTED_MODULE_2__/* .getCreatedItems */ .gs)({
            limit: 100,
            cursor: '',
            assetType: 34
        }).then((data)=>setBadges(data)
        ).catch((err)=>console.error(err)
        );
    }, [
        auth.userId
    ]);
    const onSubmit = async ()=>{
        if (locked) return;
        if (!fileRef.current.files.length) return setFeedback("You must select a file.");
        if (!badgeName) return setFeedback("You must provide a badge name.");
        if (!badgeDescription) return setFeedback("You must provide a description.");
        setFeedback(null);
        setLocked(true);
        try {
            // why does upload asset not come with a description field Boi
            await (0,_services_develop__WEBPACK_IMPORTED_MODULE_2__/* .uploadBadgePass */ .EC)({
                name: badgeName,
                description: badgeDescription,
                assetTypeId: 34,
                placeId: selectedPlaceId,
                file: fileRef.current.files[0]
            });
            window.location.href = "/develop?View=34";
        } catch (err) {
            setFeedback(err.message);
            setLocked(false);
        }
    };
    // Make the template an actual link
    if (selectedPlaceId) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Upload a Game Pass"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Don't know how? ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/img/Template.png",
                            children: "Click Here"
                        }),
                        "."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Image:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            ref: fileRef,
                            accept: "image/*",
                            style: {
                                width: '300px',
                                height: '30px'
                            }
                        }),
                        feedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: 'red',
                                marginLeft: '8px'
                            },
                            children: feedback
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Name:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: badgeName,
                            onChange: (e)=>setBadgeName(e.target.value)
                            ,
                            style: {
                                width: '300px',
                                height: '30px',
                                borderRadius: 0,
                                border: '1px solid #ccc'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginBottom: '10px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Description:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            value: badgeDescription,
                            onChange: (e)=>setBadgeDescription(e.target.value)
                            ,
                            style: {
                                width: '300px',
                                height: '60px',
                                borderRadius: 0,
                                border: '1px solid #ccc'
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    disabled: locked,
                    label: "Upload",
                    onClick: onSubmit
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Your Game Passess"
            }),
            badges ? badges.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "You haven't created any game passess yet."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assetList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                assets: badges.data
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading..."
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badges);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ developerPages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_subPages_ads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3242);
/* harmony import */ var _components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1386);
/* harmony import */ var _components_subPages_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5599);
/* harmony import */ var _components_subPages_badges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2814);
/* harmony import */ var _components_subPages_passess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4827);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_subPages_ads__WEBPACK_IMPORTED_MODULE_2__, _components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__, _components_subPages_games__WEBPACK_IMPORTED_MODULE_4__, _components_subPages_badges__WEBPACK_IMPORTED_MODULE_5__, _components_subPages_passess__WEBPACK_IMPORTED_MODULE_6__]);
([_components_subPages_ads__WEBPACK_IMPORTED_MODULE_2__, _components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__, _components_subPages_games__WEBPACK_IMPORTED_MODULE_4__, _components_subPages_badges__WEBPACK_IMPORTED_MODULE_5__, _components_subPages_passess__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const developerPages = [
    {
        id: 0,
        name: 'Games',
        url: '/develop?View=0',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_games__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                ...props
            })
    },
    /*   {
    id: 9,
    name: 'Places',
    url: '/develop?View=9',
    disabled: true,
  }, */ {
        id: 10,
        name: 'Models',
        url: '/develop?View=10',
        disabled: true
    },
    {
        id: 102,
        name: 'Decals',
        url: '/develop?View=102',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 1,
                ...props
            })
    },
    {
        id: 21,
        name: 'Badges',
        url: '/develop?View=21',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_badges__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...props
            })
    },
    {
        id: 34,
        name: 'Passes',
        url: '/develop?View=34',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_passess__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ...props
            })
    },
    {
        id: 3,
        name: 'Audio',
        url: '/develop?View=3',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 3,
                ...props
            })
    },
    /*   {
    id: 24,
    name: 'Animations',
    url: '/develop?View=24',
    disabled: true,
  }, */ {
        id: 4,
        name: 'Meshes',
        url: '/develop?View=4',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 4,
                ...props
            })
    },
    {
        id: 101,
        name: 'User Ads',
        url: '/develop?View=101',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_ads__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...props
            })
    },
    /*   {
    id: 102,
    name: 'Sponsored Games',
    url: '/develop?View=102',
    disabled: true,
  }, */ {
        id: 11,
        name: 'Shirts',
        url: '/develop?View=11',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 11,
                ...props
            })
    },
    {
        id: 2,
        name: 'T-Shirts',
        url: '/develop?View=2',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 2,
                ...props
            })
    },
    {
        id: 12,
        name: 'Pants',
        url: '/develop?View=12',
        element: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subPages_clothing__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: 12,
                ...props
            })
    }
];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2954:
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
/* harmony import */ var _ad_adBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2565);
/* harmony import */ var _oldVerticalTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1681);
/* harmony import */ var _components_creationsTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1568);
/* harmony import */ var _components_notAvailable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2332);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5435);
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_creationsTab__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _services_groups__WEBPACK_IMPORTED_MODULE_8__]);
([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_creationsTab__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_7__, _services_groups__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    developerContainer: {
        backgroundColor: '#fff',
        padding: '4px 8px',
        overflow: 'hidden'
    }
});
const myGroups = (prev, act)=>{
    let ns = [];
    if (prev) {
        ns = [
            ...prev
        ];
    }
    if (act.action === 'ADD') {
        ns.push(act.group);
    }
    return ns;
};
const Develop = (props)=>{
    const s = useStyles();
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: groupId , 1: setGroupId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: groups , 1: dispatchGroups  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(myGroups, null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!auth.userId) return;
        (0,_services_groups__WEBPACK_IMPORTED_MODULE_8__/* .getUserGroups */ .no)({
            userId: auth.userId
        }).then((myGroups1)=>{
            myGroups1.forEach((v)=>{
                (0,_services_groups__WEBPACK_IMPORTED_MODULE_8__/* .getPermissionsForRoleset */ .pz)({
                    groupId: v.group.id,
                    rolesetId: v.role.id
                }).then((roleData)=>{
                    if (roleData.permissions.groupEconomyPermissions.manageGroupGames) {
                        dispatchGroups({
                            action: 'ADD',
                            group: v.group
                        });
                    }
                }).catch((e)=>{
                // doesn't have permission to view permissions!
                });
            });
        });
    }, [
        auth.userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (groupId === null && groups && groups.length > 0) {
            setGroupId(groups[0].id);
        }
    }, [
        groupId,
        groups
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let defaultOpts = [
            {
                name: 'My Creations',
                element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_creationsTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: props.id
                })
            },
            {
                name: 'Group Creations',
                element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_creationsTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: props.id,
                    group: true,
                    groupId: groupId,
                    groups: groups,
                    setGroupId: setGroupId
                })
            }
        ];
        if (tab === null) setTab(defaultOpts[0].name);
        setOptions(defaultOpts);
    }, [
        props.id,
        groupId,
        tab
    ]);
    if (!options.length) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.developerContainer,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldVerticalTabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    options: options,
                    default: tab,
                    onChange: (n)=>setTab(n.name)
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Develop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Runtime type enforcer. If the argument does not match the expected type, a default value is returned.
 */ const t = {
    string: (str)=>{
        if (typeof str !== 'string') {
            return '';
        }
        return str;
    },
    array: (arr)=>{
        if (!arr || !Array.isArray(arr)) {
            return [];
        }
        return arr;
    },
    object: (obj)=>{
        if (typeof obj !== 'object' && !obj) {
            return {};
        }
        return obj;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t);


/***/ }),

/***/ 3154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var _components_develop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2954);
/* harmony import */ var _lib_t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1789);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_develop__WEBPACK_IMPORTED_MODULE_2__]);
_components_develop__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DevelopPage = (props)=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const id = _lib_t__WEBPACK_IMPORTED_MODULE_3__/* ["default"].string */ .Z.string(router.query['View']);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_develop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        id: parseInt(id, 10) || 0
    }));
};
DevelopPage.getInitialProps = ()=>{
    return {
        title: 'Develop - ROBLOX'
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DevelopPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_4": () => (/* binding */ uploadAdvertisement),
/* harmony export */   "bW": () => (/* binding */ getAds),
/* harmony export */   "ow": () => (/* binding */ bidOnAd)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const uploadAdvertisement = ({ file , name , targetId , type  })=>{
    let formData = new FormData();
    formData.append('name', name);
    formData.append('files', file);
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('ads', '/v1/user-ads/' + type + '/create?assetId=' + targetId), formData);
};
// Note: Endpoint is temporary until Roblox actually adds a "get ads" endpoint
const getAds = ({ creatorId , creatorType  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('ads', '/v1/user-ads/' + (creatorType === 'User' ? 'User' : 'Group') + '/' + creatorId)).then((d)=>d.data
    );
};
// Note: Endpoint is temporary until Roblox adds an ads.roblox.com "buy ads" endpoint
const bidOnAd = ({ adId , robux  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('ads', '/v1/user-ads/' + adId + '/run'), {
        robux
    });
};

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,9002,7378,2634,9979,5967,5435,5304,1681,2069,9917,1068,7328,1885], () => (__webpack_exec__(3154)));
module.exports = __webpack_exports__;

})();