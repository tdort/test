"use strict";
exports.id = 465;
exports.ids = [465];
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

/***/ 2754:
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
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1669);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    creator: {
        fontSize: '12px',
        color: '#999',
        marginTop: '2px'
    },
    image: {
        maxWidth: '110px',
        display: 'block',
        margin: '0 auto'
    }
});
const BadgeEntry = (props)=>{
    const s = useEntryStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-4 col-lg-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.image,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: props.id
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
                        assetId: props.id,
                        name: props.name
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: props.name
                    })
                })
            })
        ]
    }));
};
const useBadgeStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    row: {
        '@media (min-width: 500px)': {
            '& >div': {
                width: '20%'
            }
        }
    }
});
/**
 * Badges based off the {assetId}
 * @param {{assetId: number; assetType: number;}} props 
 */ const Badges = (props)=>{
    const s = useBadgeStyles();
    const { 0: badges , 1: setBadges  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getBadgesForPlace */ .Hj)({
            placeId: props.assetId,
            limit: 50
        }).then((result)=>{
            setBadges(result.data);
        });
    }, [
        props.assetId
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `row ${s.row}`,
        children: badges && badges.map((v)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BadgeEntry, {
                id: v.item.assetId,
                name: v.item.name
            }, v.item.assetId));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badges);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9696:
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
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7378);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9326);
/* harmony import */ var _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9930);
/* harmony import */ var _buyItemModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9442);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3488);
/* harmony import */ var _offsaleDeadline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__, _buyItemModal__WEBPACK_IMPORTED_MODULE_8__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__, _buyItemModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useBestPriceStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        fontSize: '14px',
        marginBottom: '4px',
        textAlign: 'center',
        marginTop: '4px'
    },
    noSellers: {
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '30px'
    }
});
const BestPriceEntry = (props)=>{
    const s = useBestPriceStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const lowestSeller = store.getPurchaseDetails();
    if (!lowestSeller) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: s.noSellers,
            children: " No one is currently selling this item. "
        }));
    }
    const lowestPrice = lowestSeller.price;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: s.text,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            prefix: "Best Price: ",
            children: lowestPrice
        })
    }));
};
const useBuyButtonStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        width: '100%',
        border: '1px solid #a7a7a7',
        background: '#e1e1e1'
    }
});
const PrivateSellersCount = (props)=>{
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mt-0 mb-0 text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "a",
            children: [
                "See all private sellers (",
                store.resellersCount || 0,
                ")"
            ]
        })
    }));
};
const useSaleCountStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        color: '#666',
        fontSize: '12px'
    }
});
const SaleCount = (props)=>{
    var ref, ref1;
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = useSaleCountStyles();
    const statusText = ((ref = store.details) === null || ref === void 0 ? void 0 : ref.assetType) === 21 ? 'Awarded' : 'Sold';
    console.log('type:', (ref1 = store.details) === null || ref1 === void 0 ? void 0 : ref1.assetType);
    console.log('sales:', store.saleCount);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: 'mt-2 mb-2 text-center ' + s.text,
        children: [
            "( ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-black",
                children: store.saleCount
            }),
            " ",
            statusText,
            ")"
        ]
    }));
};
const OwnedCount = (props)=>{
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = useSaleCountStyles();
    if (!store.ownedCopies || store.ownedCopies.length === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: 'mt-2 mb-0 text-center ' + s.text,
        children: [
            "( ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-black",
                children: store.ownedCopies.length
            }),
            " Owned)"
        ]
    }));
};
const useTicketPriceStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    ticketPrice: {
        width: '100%',
        height: '23px'
    }
});
const PriceTickets = (props)=>{
    const s = useTicketPriceStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.ticketPrice,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Price: "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: store.details.priceTickets
            })
        ]
    }));
};
const BuyAction = (props)=>{
    const currency = props.currency; // 1 = Robux, 2 = Tickets
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const authenticationStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const productInfo = store.getPurchaseDetails();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    if (store.ownedCopies === null) return null;
    const isOwned = store.ownedCopies.length !== 0;
    const showPriceText = store.details.isForSale;
    const isResaleItem = store.isResellable;
    const isDisabled = !store.isResellable && !store.details.isForSale || isOwned && !store.isResellable || store.isResellable && !productInfo || store.isResellable && productInfo.sellerId === authenticationStore.userId;
    const isFree = !isDisabled && store.details.price === 0;
    const tooltipTitle = isOwned ? 'You already own this item.' : 'This item is not for sale';
    const actionBuyText = (()=>{
        if (isFree && !isResaleItem) return 'Take One';
        if (currency === 2) {
            return 'Buy with Tx';
        }
        return 'Buy with R$';
    })();
    if (store.isResellable) {
        if (!store.allResellers || store.allResellers.length === 0) {
            return null;
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            showPriceText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-1 text-center",
                children: currency === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    prefix: "Price: ",
                    children: isFree ? 'FREE' : store.details.price
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PriceTickets, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: (e)=>{
                    modalStore.openPurchaseModal(store.getPurchaseDetails(), auth.robux, auth.tix, currency);
                },
                label: actionBuyText,
                disabled: isDisabled,
                tooltipText: tooltipTitle
            })
        ]
    }));
};
const useOrTabStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        borderBottom: '1px solid #a7a7a7',
        marginBottom: '10px'
    },
    label: {
        padding: '0 10px',
        marginBottom: 0,
        width: 'width',
        textAlign: 'center'
    },
    labelBg: {
        background: '#e1e1e1',
        position: 'relative',
        bottom: '-10px'
    }
});
const PurchaseWithRobuxOrTicketsLabel = (props)=>{
    const s = useOrTabStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: s.label,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.labelBg,
                children: "OR"
            })
        })
    }));
};
/**
 * The purchase button
 * @param {*} props 
 */ const BuyButton = (props)=>{
    const s = useBuyButtonStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const isResellAsset = store.isResellable;
    // Show buy button if item has ticket price and no sale price, or if item has sale price
    const showBuyButton = (()=>{
        if (isResellAsset) return true;
        if (store.details.priceTickets) {
            if (store.details.price === null) {
                return false;
            }
        }
        return true;
    })();
    const showBuyTicketsButton = store.details.priceTickets !== null && !isResellAsset;
    const showOrTab = !isResellAsset && showBuyButton && showBuyTicketsButton;
    const hasOffsaleLabel = store.offsaleDeadline !== null && !isResellAsset && (showBuyButton || showBuyTicketsButton);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.wrapper,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: hasOffsaleLabel ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_offsaleDeadline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    offsaleDeadline: store.offsaleDeadline
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: isResellAsset ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BestPriceEntry, {
                    details: store.details
                }) : null
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    !isResellAsset ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-2"
                    }) : null,
                    showBuyButton ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BuyAction, {
                        currency: 1
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    showOrTab ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PurchaseWithRobuxOrTicketsLabel, {}) : null,
                    showBuyTicketsButton ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BuyAction, {
                        currency: 2
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: isResellAsset ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrivateSellersCount, {
                    details: store.details
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: isResellAsset ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwnedCount, {}) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SaleCount, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2388:
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
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5304);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7378);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2316);
/* harmony import */ var _reportAbuse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5547);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2918);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _creatorLink__WEBPACK_IMPORTED_MODULE_8__, _playerImage__WEBPACK_IMPORTED_MODULE_10__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _creatorLink__WEBPACK_IMPORTED_MODULE_8__, _playerImage__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useCreateCommentStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    createCommentTextArea: {
        width: '100%',
        background: '#ecf4ff',
        border: '2px solid #dee1ec',
        borderRadius: '4px',
        '&:focus-visible': {
            outline: 'none'
        }
    },
    buttonWrapper: {
        position: 'relative',
        width: '80px',
        float: 'right',
        marginTop: '-45px',
        marginRight: '13px'
    },
    continueButton: {
        fontSize: '14px'
    }
});
const CreateComment = (props)=>{
    const s = useCreateCommentStyles();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const textAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onClick = (e1)=>{
        e1.preventDefault();
        const text = textAreaRef.current.value;
        if (!text || text.length < 1) {
            return setError('Your comment is too short!');
        }
        if (text.length > 200) {
            return setError('Your comment is too long! It must be under 200 characters.');
        }
        setLocked(true);
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_4__/* .createComment */ .Yr)({
            assetId: props.assetId,
            comment: text
        }).then(()=>{
            window.location.reload(); // todo: if we ever want to add spa support, then we need to add current comment to top of comments list
        }).catch((e)=>{
            const errorMessage = (()=>{
                switch(e.message){
                    case 'VerifyEmail':
                        return 'Your account must have a verified email before you can comment.';
                    case 'RequiresCaptcha':
                        return 'You must pass the robot test.';
                    case 'UserTooNew':
                        return 'Your account is too new to post comments. Try again later.';
                    case 'FloodedGlobally':
                    case 'FloodedPerAsset':
                        return 'You are flood checked. Try again later.';
                    case 'Moderated':
                        return 'Your comment was moderated. Try again.';
                    default:
                        return 'An unknown error occurred posting your comment. Error: ' + e.message;
                }
            })();
            setError(errorMessage);
        }).finally(()=>{
            setLocked(false);
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mt-4 mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-3 pe-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    id: authStore.userId
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-9",
                children: [
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-danger mb-0",
                        children: error
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        disabled: locked,
                        maxLength: 200,
                        rows: 8,
                        className: s.createCommentTextArea,
                        ref: textAreaRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.buttonWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onClick: onClick,
                            disabled: locked,
                            className: buttonStyles.continueButton + ' ' + s.continueButton,
                            label: "Continue"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "divider-top-thick divider-light mt-3"
                })
            })
        ]
    }));
};
const useCommentEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    commentEntryDiv: {
        height: '120px',
        width: '100%',
        background: '#f6f6f5',
        border: '2px solid #e6e6e6',
        borderRadius: '4px'
    },
    commentText: {
        padding: '10px 10px'
    },
    commentCreatedAt: {
        color: '#666',
        fontSize: '12px',
        marginBottom: '8px'
    },
    report: {
        marginTop: '-15px',
        float: 'right'
    }
});
const CommentEntry = (props)=>{
    const s = useCommentEntryStyles();
    const createdAt = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(props.PostedDate, 'MMM D[,] YYYY [|] h:mm A').fromNow();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-3 pe-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    id: props.AuthorId
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-9",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.commentEntryDiv,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: s.commentText,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-7",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: s.commentCreatedAt,
                                            children: [
                                                "Posted ",
                                                createdAt,
                                                " by ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    type: "User",
                                                    id: props.AuthorId,
                                                    name: props.AuthorName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: s.report,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reportAbuse__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                id: props.Id,
                                                type: "comment"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-0",
                                children: props.Text
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
const useCommentStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    loadMore: {
        color: '#0055b3',
        cursor: 'pointer'
    }
});
const Comments = (props)=>{
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: offset , 1: setOffset  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: areMoreAvailable , 1: setAreMoreAvailable  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const s = useCommentStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (offset === 0) {
            setComments(null);
        }
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_4__/* .getComments */ .li)({
            assetId: props.assetId,
            offset
        }).then((data)=>{
            if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)('commentsEndpointHasAreCommentsDisabledProp', false) && data.AreCommentsDisabled) {
                setDisabled(true);
                return;
            }
            setAreMoreAvailable(data.Comments.length >= data.MaxRows);
            if (comments) {
                comments.Comments.reverse().forEach((v)=>{
                    data.Comments.unshift(v);
                });
            }
            setComments(data);
        });
    }, [
        props,
        offset
    ]);
    if (disabled) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 fw-600",
                    children: "Comments are disabled for this item."
                })
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 col-lg-9",
                children: [
                    authStore.isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateComment, {
                        assetId: props.assetId
                    }),
                    comments && comments.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "No comments."
                    }) : comments && comments.Comments.map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommentEntry, {
                            ...v
                        }, v.Id));
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: !locked && comments && areMoreAvailable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `mb-0 text-center mt-2 ${s.loadMore}`,
                    onClick: ()=>{
                        setOffset(offset + comments.MaxRows);
                    },
                    children: "More"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bcOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6664);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2316);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2918);
/* harmony import */ var _groupIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bcOverlay__WEBPACK_IMPORTED_MODULE_4__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _playerImage__WEBPACK_IMPORTED_MODULE_6__, _groupIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_bcOverlay__WEBPACK_IMPORTED_MODULE_4__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _playerImage__WEBPACK_IMPORTED_MODULE_6__, _groupIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useStatEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    text: {
        fontSize: '12px',
        paddingBottom: 0,
        marginBottom: 0
    },
    statName: {
        color: '#999'
    }
});
const StatEntry = (props)=>{
    const s = useStatEntryStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: s.text,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: s.statName,
                children: [
                    props.name,
                    ": "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: props.value
            })
        ]
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({});
const CreatorDetails = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-4 pe-0",
                children: [
                    props.type === 'User' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        id: props.id,
                        name: props.name
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_groupIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        id: props.id,
                        name: props.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bcOverlay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        id: props.id
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-8 ps-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        name: "Creator",
                        value: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            id: props.id,
                            name: props.name,
                            type: props.type
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        name: "Created",
                        value: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.createdAt).format('M/D/YYYY')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        name: "Updated",
                        value: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.updatedAt).fromNow()
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5787:
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
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
/* harmony import */ var _oldModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1952);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9326);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1669);
/* harmony import */ var _selectUserAsset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__]);
([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useModalStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    inlineSelect: {
        display: 'inline-block'
    },
    select: {},
    inlineRow: {},
    buttonRow: {
        marginTop: '20px'
    }
});
const DelistItemModal = (props)=>{
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const s = useModalStyles();
    const { 0: toSell , 1: setToSell  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    if (!store.ownedCopies || !store.unlistModalOpen) return null;
    const delistable = store.ownedCopies.filter((v)=>v.price !== 0 && v.price !== null
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_oldModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: "Take Off Sale.",
        children: [
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 text-danger mb-0",
                    children: error
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            id: store.details.id
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-9 mt-4",
                        children: [
                            delistable.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selectUserAsset__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                selected: toSell,
                                setSelected: setToSell,
                                userAssets: delistable,
                                locked: locked
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-0",
                                children: "Are you sure you want to take this item off sale?"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row mt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${s.buttonRow} row`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-10 offset-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-8 pe-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            disabled: locked,
                                            label: "Take Off Sale",
                                            className: buttonStyles.buyButton,
                                            onClick: (e1)=>{
                                                e1.preventDefault();
                                                setLocked(true);
                                                let userAssetId = toSell;
                                                if (userAssetId === null) {
                                                    userAssetId = delistable[0].userAssetId;
                                                }
                                                (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .takeResellableAssetOffSale */ .EB)({
                                                    userAssetId: userAssetId,
                                                    assetId: store.details.id
                                                }).then(()=>{
                                                    window.location.reload();
                                                }).catch((e)=>{
                                                    setLocked(false);
                                                    setError(e.message);
                                                });
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-4 ps-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            disabled: locked,
                                            label: "Cancel",
                                            className: buttonStyles.cancelButton,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                store.setUnlistModalOpen(false);
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DelistItemModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8269:
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
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_4__.createUseStyles)({
    wrapper: {},
    favoriteStar: {
        display: 'inline-block',
        width: '16px',
        height: '16px',
        background: 'url("/img/FavoriteStar.png")',
        marginBottom: '-2px'
    },
    favoriteCount: {
        textAlign: 'center'
    }
});
const Favorite = (props)=>{
    const { assetId  } = props;
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const { 0: isFavorited , 1: setIsFavorited  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: favoriteCount , 1: setFavoriteCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsFavorited(null);
        setFavoriteCount(props.favoriteCount);
        setLocked(false);
        if (auth.userId) {
            (0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .getIsFavorited */ .Ol)({
                assetId,
                userId: auth.userId
            }).then((data)=>{
                setIsFavorited(!!data);
            }).catch((e)=>{
                // undefined/null response causes axios to incorrectly return network error :)
                setIsFavorited(false);
            });
        }
    }, [
        props.favoriteCount,
        props.assetId,
        auth.userId
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.favoriteCount,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.favoriteStar
                }),
                favoriteCount.toLocaleString(),
                isFavorited !== null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ms-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: (e)=>{
                            e.preventDefault();
                            if (locked) return;
                            setLocked(true);
                            setIsFavorited(!isFavorited);
                            setFavoriteCount(isFavorited ? favoriteCount - 1 : favoriteCount + 1);
                            if (isFavorited) {
                                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .deleteFavorite */ .r7)({
                                    userId: auth.userId,
                                    assetId
                                }).finally(()=>{
                                    setLocked(false);
                                });
                            } else {
                                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_2__/* .createFavorite */ .Ic)({
                                    userId: auth.userId,
                                    assetId
                                }).finally(()=>{
                                    setLocked(false);
                                });
                            }
                        },
                        children: isFavorited ? 'Unfavorite' : 'Favorite'
                    })
                }) : null
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    header: {
        color: '#999',
        fontSize: '12px',
        marginBottom: 0
    },
    genre: {
        fontSize: '12px',
        color: '#0055B3'
    }
});
const genreToHuman = (str)=>{
    switch(str){
        case 'TownAndCity':
            return 'Town and City';
        default:
            return str;
    }
};
const Genres = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.header,
                children: "Genres:"
            }),
            props.genres.map((v)=>{
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: s.genre,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `GamesInfoIcon ${v}`
                        }),
                        genreToHuman(v)
                    ]
                }, v));
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genres);


/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ LimitedOverlay),
/* harmony export */   "O": () => (/* binding */ LimitedUniqueOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    wrapper: {
        marginTop: '-60px',
        overflowX: 'hidden'
    },
    img: {
        marginLeft: '-26px'
    }
});
const LimitedOverlay = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: s.img,
            src: "/img/limitedOverlay_itemPage.png"
        })
    }));
};
const LimitedUniqueOverlay = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: s.img,
            src: "/img/limitedUniqueOverlay_itemPage.png"
        })
    }));
};



/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8379);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    offsaleLabel: {
        color: '#666'
    }
});
const OffsaleDeadline = (props)=>{
    // This doesn't work if the off sale time is 1 year+ into the future.
    const s = useStyles();
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: label , 1: setLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const updateLabel = ()=>{
        if (props.offsaleDeadline === null) {
            setLabel(null);
            return;
        }
        const offSaleTime = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props.offsaleDeadline);
        const currentTime = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
        if (offSaleTime.isBefore(currentTime)) {
            setLabel(null);
            return;
        }
        // as you can probably tell, math is not my strongest skill. If anyone could rewrite this to use dayjs or something,
        // that would be great :)
        let diffInSeconds = offSaleTime.unix() - Date.now() / 1000;
        let days = diffInSeconds / 86400;
        if (days >= 1) {
            diffInSeconds -= Math.floor(days) * 86400;
        }
        let hours = diffInSeconds / 3600;
        if (hours >= 1) {
            diffInSeconds -= Math.floor(hours) * 3600;
        }
        let minutes = diffInSeconds / 60;
        if (minutes >= 1) {
            diffInSeconds -= Math.floor(minutes) * 60;
        }
        days = Math.floor(days);
        hours = Math.floor(hours);
        minutes = Math.floor(minutes);
        let seconds = Math.floor(diffInSeconds);
        let newLabel = ``;
        if (days > 0) {
            newLabel += `${days} day${days === 1 ? '' : 's'} `;
        }
        if (hours > 0 || newLabel !== '') {
            newLabel += `${hours} hour${hours === 1 ? '' : 's'} `;
        }
        if (minutes > 0 || newLabel !== '') {
            newLabel += `${minutes} minute${minutes === 1 ? '' : 's'} `;
        }
        if (seconds > 0 || newLabel !== '') {
            newLabel += `${seconds} second${seconds === 1 ? '' : 's'} `;
        }
        if (newLabel === '') {
            setLabel(null);
            return;
        }
        setLabel(newLabel);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timer.current) {
            clearInterval(timer.currency);
            timer.current = null;
        }
        if (props.offsaleDeadline !== null) {
            timer.current = setInterval(()=>{
                updateLabel();
            }, 1000);
            updateLabel();
        }
    }, [
        props.offsaleDeadline
    ]);
    if (label !== null) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: 'mt-2 mb-0 text-center ' + s.offsaleLabel,
                    children: "Item goes off sale in:"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "fw-bolder mt-0 mb-0 text-center text-danger",
                    children: label
                })
            ]
        }));
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffsaleDeadline);


/***/ }),

/***/ 3129:
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
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8246);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7378);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2316);
/* harmony import */ var _genericPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3781);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_inventory__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _genericPagination__WEBPACK_IMPORTED_MODULE_6__, _playerImage__WEBPACK_IMPORTED_MODULE_7__]);
([_services_inventory__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _genericPagination__WEBPACK_IMPORTED_MODULE_6__, _playerImage__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Owners = (props)=>{
    const { assetId  } = props;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: cursor , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: owners , 1: setOwners  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLocked(true);
        setFeedback(null);
        (0,_services_inventory__WEBPACK_IMPORTED_MODULE_3__/* .getCollectibleOwners */ .zg)({
            assetId,
            cursor,
            sort: 'Asc',
            limit: 50
        }).then((d)=>{
            setOwners(d);
        }).catch((e)=>{
            setFeedback(e.message);
        }).finally(()=>{
            setLocked(false);
        });
    }, [
        cursor
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    feedback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-4 mt-4 text-danger",
                        children: feedback
                    }) : null,
                    owners && owners.data.map((v)=>{
                        const owner = v.owner;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-2",
                                    children: owner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        id: owner.id,
                                        name: owner.name
                                    }) : null
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-0 mt-2",
                                            children: owner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                id: owner.id,
                                                name: owner.name,
                                                type: "User"
                                            }) : 'Deleted/Private'
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-1 mb-0",
                                            children: [
                                                "Serial ",
                                                v.serialNumber ? '#' + v.serialNumber : 'N/A'
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-1 mb-0",
                                            children: [
                                                "Updated ",
                                                dayjs__WEBPACK_IMPORTED_MODULE_1___default()(v.updated).fromNow()
                                            ]
                                        }),
                                        !owner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-4"
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4",
                                        children: owner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            label: "Trade",
                                            onClick: ()=>{
                                                window.open("/Trade/TradeWindow.aspx?TradePartnerID=" + owner.id, "_blank", "scrollbars=0, height=608, width=914");
                                            }
                                        }) : null
                                    })
                                })
                            ]
                        }, v.userAssetId));
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-lg-6 mx-auto",
                children: owners && (owners.nextPageCursor || owners.previousPageCursor) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_genericPagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    page: page,
                    onClick: (newPage)=>{
                        return (e)=>{
                            e.preventDefault();
                            if (newPage === 1) {
                                if (!owners.nextPageCursor || locked) return;
                                setCursor(owners.nextPageCursor);
                                setPage(page + 1);
                            } else if (newPage === -1) {
                                if (!owners.previousPageCursor || locked) return;
                                setCursor(owners.previousPageCursor);
                                setPage(page - 1);
                            }
                        };
                    }
                }) : null
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Owners);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7690:
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
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1669);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    creator: {
        fontSize: '12px',
        color: '#999',
        marginTop: '2px'
    },
    image: {
        maxWidth: '110px',
        display: 'block',
        margin: '0 auto'
    }
});
const PassEntry = (props)=>{
    const s = useEntryStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-4 col-lg-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.image,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: props.id
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
                        assetId: props.id,
                        name: props.name
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: props.name
                    })
                })
            })
        ]
    }));
};
const usePassStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    row: {
        '@media (min-width: 500px)': {
            '& >div': {
                width: '20%'
            }
        }
    }
});
/**
 * Passess based off the {assetId}
 * @param {{assetId: number; assetType: number;}} props 
 */ const Passess = (props)=>{
    const s = usePassStyles();
    const { 0: passess , 1: setPassess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getPassessForPlace */ .kM)({
            placeId: props.assetId,
            limit: 50
        }).then((result)=>{
            setPassess(result.data);
        });
    }, [
        props.assetId
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `row ${s.row}`,
        children: passess && passess.map((v)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PassEntry, {
                id: v.item.assetId,
                name: v.item.name
            }, v.item.assetId));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Passess);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7741:
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
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1669);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _creatorLink__WEBPACK_IMPORTED_MODULE_4__, _itemImage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    creator: {
        fontSize: '12px',
        color: '#999',
        marginTop: '2px'
    },
    image: {
        maxWidth: '110px',
        display: 'block',
        margin: '0 auto'
    }
});
const RecommendationEntry = (props)=>{
    const s = useEntryStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-4 col-lg-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.image,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: props.id
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
                        assetId: props.id,
                        name: props.name
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: props.name
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: `${s.creator} mb-0 text-center`,
                children: [
                    "Creator: ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        id: props.creatorId,
                        type: props.creatorType,
                        name: props.creatorName
                    })
                ]
            })
        ]
    }));
};
const useRecommenndationStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    row: {
        '@media (min-width: 500px)': {
            '& >div': {
                width: '20%'
            }
        }
    }
});
/**
 * Recommendations based off the {assetId}
 * @param {{assetId: number; assetType: number;}} props 
 */ const Recommendations = (props)=>{
    const s = useRecommenndationStyles();
    const { 0: recommendations , 1: setRecommendations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getRecommendations */ .$K)({
            assetId: props.assetId,
            assetTypeId: props.assetType,
            limit: 10
        }).then((result)=>{
            setRecommendations(result.data);
        });
    }, [
        props.assetId
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `row ${s.row}`,
        children: recommendations && recommendations.map((v)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecommendationEntry, {
                id: v.item.assetId,
                name: v.item.name,
                creatorId: v.creator.creatorId,
                creatorType: v.creator.creatorType,
                creatorName: v.creator.name
            }, v.item.assetId));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recommendations);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9158:
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
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2316);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9326);
/* harmony import */ var _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9930);
/* harmony import */ var _buyItemModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9442);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2918);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3488);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _creatorLink__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_8__, _buyItemModal__WEBPACK_IMPORTED_MODULE_9__, _playerImage__WEBPACK_IMPORTED_MODULE_10__]);
([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _creatorLink__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_8__, _buyItemModal__WEBPACK_IMPORTED_MODULE_9__, _playerImage__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useSellerEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    button: {
        fontSize: '14px',
        marginTop: '20px',
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    imageContainer: {
        maxWidth: '50px',
        display: 'block',
        margin: '0 auto'
    },
    takeOffSale: {
        background: 'grey',
        '&:hover': {
            background: 'darkgrey'
        }
    }
});
const SellerEntry = (props)=>{
    const s = useSellerEntryStyles();
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const isOwnItem = authStore.userId === props.seller.id;
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `col-4 col-lg-3`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.imageContainer,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        size: 50,
                        id: props.seller.id,
                        name: props.seller.name
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-6 col-lg-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            id: props.seller.id,
                            type: "User",
                            name: props.seller.name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            children: props.price.toLocaleString()
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-1",
                        children: [
                            "Serial ",
                            props.serialNumber || 'N/A'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-6 mx-auto col-lg-3 mb-4 mb-lg-0",
                children: isOwnItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    disabled: locked,
                    label: "Take Off Sale",
                    className: s.button + ' ' + s.takeOffSale,
                    onClick: (e)=>{
                        e.preventDefault();
                        setLocked(true);
                        (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .takeResellableAssetOffSale */ .EB)({
                            assetId: store.details.id,
                            userAssetId: props.userAssetId
                        }).then(()=>{
                            store.setAllResellers(store.allResellers.filter((c)=>{
                                return c.userAssetId !== props.userAssetId;
                            }));
                        });
                    }
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: s.button + ' ' + buttonStyles.buyButton,
                    onClick: (e)=>{
                        e.preventDefault();
                        modalStore.openPurchaseModal(store.getPurchaseDetails(props.userAssetId), authStore.robux, authStore.tix, 1);
                    }
                })
            })
        ]
    }));
};
const usePaginationStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        display: 'inline',
        marginBottom: 0,
        userSelect: 'none'
    },
    link: {
        paddingRight: '5px'
    },
    linkClickable: {
        color: '#0055b3',
        cursor: 'pointer'
    }
});
const ResellersPagination = (props1)=>{
    const s = usePaginationStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    if (!store.resellers) return null;
    const pages = Math.ceil(store.resellersCount / 6);
    const { 0: pagesBack , 1: setPagesBack  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Array of pages to appear on left side
    const { 0: pagesForward , 1: setPagesForward  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Array of pages to appear on right side
    const { 0: showDots , 1: setShowDots  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let pagesAhead = [];
        let pagesBehind = [];
        for(let i = 1; i <= pages; i++){
            if (i === store.resellersPage) continue;
            if (i > store.resellersPage) {
                pagesAhead.push(i);
            } else {
                pagesBehind.unshift(i);
            }
        }
        setPagesBack(pagesBehind.slice(0, 4));
        setPagesForward(pagesAhead.slice(0, 4));
        setShowDots(pagesAhead.length > 4);
    }, [
        store.resellersPage
    ]);
    const onClick = (v)=>{
        return (e)=>{
            e.preventDefault();
            store.setResellersPage(v);
        };
    };
    const firstAvailable = store.resellersPage !== 1;
    const previousAvailable = firstAvailable;
    const lastAvailable = store.resellersPage !== pages;
    const nextAvailable = lastAvailable;
    /**
   * Condition link
   * @param {{page: number; condition: boolean; children: JSX.Element | string}} props 
   * @returns 
   */ const LinkOnCondition = (props)=>{
        if (props.condition) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.link + ' ' + s.linkClickable,
                onClick: (v)=>{
                    store.setResellersPage(props.page);
                },
                children: props.children
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: s.link,
            children: props.children
        }));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: s.text,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                    condition: firstAvailable,
                    page: 1,
                    children: "First"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                    condition: previousAvailable,
                    page: store.resellersPage - 1,
                    children: "Previous"
                }),
                pagesBack.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                        condition: true,
                        page: v,
                        children: v
                    }, v));
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: s.link,
                    children: store.resellersPage
                }),
                pagesForward.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                        condition: true,
                        page: v,
                        children: v
                    }, v));
                }),
                showDots && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: s.link,
                    children: "..."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                    condition: nextAvailable,
                    page: store.resellersPage + 1,
                    children: "Next"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkOnCondition, {
                    condition: lastAvailable,
                    page: pages,
                    children: "Last"
                })
            ]
        })
    }));
};
const useMainStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    header: {
        fontSize: '26px',
        fontWeight: 400,
        paddingTop: '10px',
        paddingBottom: '10px'
    }
});
const Resellers = (props)=>{
    const s = useMainStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    if (!store.resellers) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: s.header,
                    children: "Private Sales"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 divider-right",
                children: [
                    store.allResellers && store.allResellers.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: " Sorry, no one is privately selling this item at the moment. "
                    }) : store.resellers.map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SellerEntry, {
                            ...v
                        }, v.userAssetId));
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mt-2",
                        children: store.allResellers && store.allResellers.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResellersPagination, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resellers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4335:
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
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9326);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_4__]);
([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useSaleHistoryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    rap: {
        color: '#060',
        fontWeight: '600'
    },
    rapText: {
        fontSize: '14px',
        marginBottom: 0
    },
    row: {
        marginTop: '55px'
    },
    daySelectionText: {
        '& .selected-text': {
        },
        textAlign: 'center',
        cursor: 'pointer'
    }
});
const formatGraphTicks = (v, axis)=>{
    var result;
    if (v > 1000000000) {
        result = (v / 1000000000).toFixed(axis.tickDecimals) + "B R$";
    } else if (v > 1000000) {
        result = (v / 1000000).toFixed(axis.tickDecimals) + "M R$";
    } else {
        result = v.toFixed(axis.tickDecimals);
    }
    return result.toLocaleString() + " R$";
};
const SaleHistory = (props)=>{
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: rap , 1: setRap  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: rapChart , 1: setRapChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: volumeChart , 1: setVolumeChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const s = useSaleHistoryStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!store.details) return;
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .getResaleData */ .nm)({
            assetId: store.details.id
        }).then((resaleData)=>{
            setRap(resaleData.recentAveragePrice);
            setRapChart(resaleData.priceDataPoints);
            setVolumeChart(resaleData.volumeDataPoints);
            if (store.saleCount === 0) {
                store.setSaleCount(resaleData.sales);
            }
        });
    }, [
        store.details
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const el = document.getElementById('placeholder');
        if (!rapChart || !volumeChart) {
            return;
        }
        const rapData = rapChart.map((v)=>{
            return [
                dayjs__WEBPACK_IMPORTED_MODULE_5___default()(v.date).unix() * 1000,
                v.value, 
            ];
        });
        const volumeData = volumeChart.map((v)=>{
            return [
                dayjs__WEBPACK_IMPORTED_MODULE_5___default()(v.date).unix() * 1000,
                v.value, 
            ];
        });
        // @ts-ignore
        if (!window.RobloxItemChartLibrary) {
            const saleChartScript = document.createElement('script');
            saleChartScript.setAttribute('src', '/js/itemSaleChart.js?refresh=1');
            saleChartScript.onload = function() {
                // @ts-ignore
                window.RobloxItemChartLibrary.loadChart(rapData, volumeData);
            };
            document.body.appendChild(saleChartScript);
        } else {
            // @ts-ignore
            window.RobloxItemChartLibrary.loadChart(rapData, volumeData);
        }
    }, [
        rapChart,
        volumeChart
    ]);
    if (!rapChart) {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `row ${s.row}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 ps-4 pe-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: s.rapText,
                    children: [
                        "Recent Average Price: ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: s.rap,
                            children: [
                                "R$ ",
                                rap && rap.toLocaleString()
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 mt-4 ps-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: s.daySelectionText,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                id: "days90",
                                className: "pe-1",
                                children: "30 Days"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "|"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                id: "days90",
                                className: "pe-1",
                                children: "90 Days"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "|"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                id: "days180",
                                children: "180 Days"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "placeholder",
                        style: {
                            width: '370px',
                            height: '300px'
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "volumegraph",
                        style: {
                            width: '370x',
                            height: '60px'
                        }
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleHistory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useSelectionStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    inlineSelect: {
        display: 'inline-block'
    },
    select: {},
    inlineRow: {},
    buttonRow: {
        marginTop: '20px'
    },
    priceInput: {
        width: '125px'
    }
});
const SelectUserAsset = (props)=>{
    const { locked , selected , userAssets , setSelected  } = props;
    const s = useSelectionStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.inlineRow,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.inlineSelect,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-0",
                    children: "Serial Number:"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.inlineSelect,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    disabled: locked,
                    className: s.select,
                    value: selected || userAssets[0].userAssetId,
                    onChange: (nv)=>{
                        setSelected(parseInt(nv.currentTarget.value, 10));
                    },
                    children: userAssets.map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: v.userAssetId,
                            children: v.serialNumber || 'N/A'
                        }, v.userAssetId));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectUserAsset);


/***/ }),

/***/ 8926:
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
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
/* harmony import */ var _oldModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1952);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9326);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1669);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3488);
/* harmony import */ var _selectUserAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__]);
([_services_economy__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useModalStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    inlineSelect: {
        display: 'inline-block'
    },
    select: {},
    inlineRow: {},
    buttonRow: {
        marginTop: '20px'
    },
    priceInput: {
        width: '125px'
    }
});
const SellItemModal = (props)=>{
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const s = useModalStyles();
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: toSell , 1: setToSell  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    if (!store.ownedCopies || !store.resaleModalOpen) return null;
    const sellableCopies = store.ownedCopies.filter((v)=>v.price === 0 || v.price === null
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_oldModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: "Sell Your Collectible Item",
        children: [
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 text-danger mb-0",
                    children: error
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            id: store.details.id
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-9 mt-4",
                        children: [
                            sellableCopies.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selectUserAsset__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                selected: toSell,
                                setSelected: setToSell,
                                userAssets: sellableCopies,
                                locked: locked
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: s.inlineRow,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: s.inlineSelect,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mb-0",
                                            children: [
                                                "Price (minimum 1): ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    inline: true
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: s.inlineSelect,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            disabled: locked,
                                            value: price,
                                            className: s.priceInput,
                                            type: "text",
                                            onChange: (e)=>{
                                                let parsed = parseInt(e.currentTarget.value, 10);
                                                if (!Number.isSafeInteger(parsed)) return;
                                                setPrice(parsed);
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.inlineRow,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mb-0",
                                    children: [
                                        "Marketplace fee at 30%: ",
                                        price && Math.ceil(price * 0.3)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.inlineRow,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mb-0",
                                    children: [
                                        "You get: ",
                                        Math.trunc(price * 0.7)
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row mt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${s.buttonRow} row`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-8 offset-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 pe-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            disabled: locked,
                                            label: "Sell Now",
                                            className: buttonStyles.buyButton,
                                            onClick: (e1)=>{
                                                e1.preventDefault();
                                                setLocked(true);
                                                let userAssetId = toSell;
                                                if (userAssetId === null) {
                                                    userAssetId = sellableCopies[0].userAssetId;
                                                }
                                                (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .setResellableAssetPrice */ .LL)({
                                                    userAssetId: userAssetId,
                                                    price: price,
                                                    assetId: store.details.id
                                                }).then(()=>{
                                                    window.location.reload();
                                                }).catch((e)=>{
                                                    setLocked(false);
                                                    setError(e.message);
                                                });
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 ps-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            disabled: locked,
                                            label: "Cancel",
                                            className: buttonStyles.cancelButton,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                store.setResaleModalOpen(false);
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellItemModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9903:
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
/* harmony import */ var _gearDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7328);
/* harmony import */ var _oldVerticalTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1681);
/* harmony import */ var _reportAbuse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5547);
/* harmony import */ var _components_buyButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9696);
/* harmony import */ var _components_buyItemModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9442);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2388);
/* harmony import */ var _components_creatorDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3214);
/* harmony import */ var _components_delistItemModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5787);
/* harmony import */ var _components_genres__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8482);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1669);
/* harmony import */ var _components_limitedOverlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4264);
/* harmony import */ var _components_recommendations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7741);
/* harmony import */ var _components_resellers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9158);
/* harmony import */ var _components_saleHistory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4335);
/* harmony import */ var _components_sellItemModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8926);
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9326);
/* harmony import */ var _ad_adBanner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2565);
/* harmony import */ var _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1107);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5304);
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8246);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2300);
/* harmony import */ var _components_owners__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3129);
/* harmony import */ var _components_favorite__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _components_buyButton__WEBPACK_IMPORTED_MODULE_7__, _components_buyItemModal__WEBPACK_IMPORTED_MODULE_8__, _components_comments__WEBPACK_IMPORTED_MODULE_9__, _components_creatorDetails__WEBPACK_IMPORTED_MODULE_10__, _components_delistItemModal__WEBPACK_IMPORTED_MODULE_11__, _itemImage__WEBPACK_IMPORTED_MODULE_13__, _components_recommendations__WEBPACK_IMPORTED_MODULE_15__, _components_resellers__WEBPACK_IMPORTED_MODULE_16__, _components_saleHistory__WEBPACK_IMPORTED_MODULE_17__, _components_sellItemModal__WEBPACK_IMPORTED_MODULE_18__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_19__, _ad_adBanner__WEBPACK_IMPORTED_MODULE_20__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_21__, _services_catalog__WEBPACK_IMPORTED_MODULE_22__, _services_inventory__WEBPACK_IMPORTED_MODULE_23__, _components_owners__WEBPACK_IMPORTED_MODULE_25__, _components_favorite__WEBPACK_IMPORTED_MODULE_26__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _components_buyButton__WEBPACK_IMPORTED_MODULE_7__, _components_buyItemModal__WEBPACK_IMPORTED_MODULE_8__, _components_comments__WEBPACK_IMPORTED_MODULE_9__, _components_creatorDetails__WEBPACK_IMPORTED_MODULE_10__, _components_delistItemModal__WEBPACK_IMPORTED_MODULE_11__, _itemImage__WEBPACK_IMPORTED_MODULE_13__, _components_recommendations__WEBPACK_IMPORTED_MODULE_15__, _components_resellers__WEBPACK_IMPORTED_MODULE_16__, _components_saleHistory__WEBPACK_IMPORTED_MODULE_17__, _components_sellItemModal__WEBPACK_IMPORTED_MODULE_18__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_19__, _ad_adBanner__WEBPACK_IMPORTED_MODULE_20__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_21__, _services_catalog__WEBPACK_IMPORTED_MODULE_22__, _services_inventory__WEBPACK_IMPORTED_MODULE_23__, _components_owners__WEBPACK_IMPORTED_MODULE_25__, _components_favorite__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const emptyDescriptionMessage = 'No description available.';
const filterTextForEmpty = (str)=>{
    if (!str) return emptyDescriptionMessage;
    if (str.trim().length === 0) {
        return emptyDescriptionMessage;
    }
    if (!str.match(/[a-z0-9A-Z]+/g)) {
        return emptyDescriptionMessage;
    }
    return str;
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    title: {
        fontWeight: 650,
        fontSize: '32px',
        color: '#343434'
    },
    subtitle: {
        fontWeight: 600,
        fontSize: '14px'
    },
    description: {
        marginBottom: 0,
        fontSize: '14px'
    },
    catalogItemContainer: {
        background: '#fff',
        padding: '2px 8px',
        overflow: 'hidden'
    }
});
/**
 * CatalogDetails page
 * @param {{details: AssetDetailsEntry}} props
 * @returns 
 */ const CatalogDetails = (props)=>{
    const { details  } = props;
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const isLimited = details.itemRestrictions.includes('Limited');
    const isLimitedUnique = details.itemRestrictions.includes('LimitedUnique');
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        store.setDetails(props.details);
        if (props.details.saleCount) {
            store.setSaleCount(props.details.saleCount);
        } else {
            store.setSaleCount(0);
        }
        if (props.details.offsaleDeadline) {
            store.setOffsaleDeadline(props.details.offsaleDeadline);
        } else {
            store.setOffsaleDeadline(null);
        }
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!authStore.userId || !store.details) {
            return;
        }
        store.loadOwnedCopies(authStore.userId);
        if (store.isResellable) {
            store.loadResellers();
        }
        (0,_services_inventory__WEBPACK_IMPORTED_MODULE_23__/* .getCollections */ .bG)({
            userId: authStore.userId
        }).then((col)=>{
            let inCollection = col.find((v)=>{
                return v.Id === store.details.id;
            });
            store.setInCollection(inCollection !== undefined);
        });
    }, [
        store.details,
        authStore.userId
    ]);
    const hasItemToDeList = store.isResellable && store.allResellers && store.allResellers.find((v)=>v.seller.id === authStore.userId
    ) !== undefined;
    const hasItemToSell = store.isResellable && store.ownedCopies && store.ownedCopies.filter((v)=>v.price === null || v.price === 0
    ).length > 0;
    const isCreator = store.details && store.details.creatorType === 'User' && store.details.creatorTargetId == authStore.userId; // todo: group support
    const showGear = hasItemToDeList || hasItemToSell || isCreator || store.ownedCopies && store.ownedCopies.length > 0 // Collection stuff
    ;
    if (!store.details) return null;
    const subTitle = `ROBLOX ${store.subCategoryDisplayName}${isLimited || isLimitedUnique ? ' / Collectible Item' : ''}${isLimitedUnique ? ' / Limited Edition' : ''}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adBanner__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: s.catalogItemContainer,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buyItemModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sellItemModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_delistItemModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row mt-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-lg-10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: s.title,
                                                        children: details.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: s.subtitle,
                                                        children: subTitle
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-2",
                                                children: showGear && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gearDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    options: [
                                                        hasItemToDeList && {
                                                            name: 'Take Off Sale',
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                store.setUnlistModalOpen(true);
                                                            }
                                                        },
                                                        hasItemToSell && {
                                                            name: 'Sell Item',
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                store.setResaleModalOpen(true);
                                                            }
                                                        },
                                                        isCreator && {
                                                            name: 'Configure',
                                                            url: '/My/Item.aspx?id=' + props.details.id
                                                        },
                                                        isCreator && {
                                                            name: 'Advertise',
                                                            url: '/My/CreateUserAd.aspx?targetId=' + props.details.id + '&targetType=asset'
                                                        },
                                                        // delete from inventory button here
                                                        /*store.ownedCopies && store.ownedCopies.length > 0 ? {
                      name: 'Delete',
                      onClick: e => {
                        let res = prompt('Are you sure you want to PERMANENTLY delete this item from your inventory? Type yes to confirm.');
                        if (res === 'yes') {
                          console.log("[info] deleting asset id " + props.details.id)
                          deleteFromInventory({assetId: props.details.id})
                        }
                        ;
                      },
                    } : null,*/ store.inCollection ? {
                                                            name: 'Remove From Collection',
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                store.setInCollection(false);
                                                                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_22__/* .addOrRemoveFromCollections */ .Dt)({
                                                                    assetId: store.details.id,
                                                                    addToProfile: false
                                                                });
                                                            }
                                                        } : store.ownedCopies && store.ownedCopies.length > 0 ? {
                                                            name: 'Add To Collection',
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                store.setInCollection(true);
                                                                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_22__/* .addOrRemoveFromCollections */ .Dt)({
                                                                    assetId: store.details.id,
                                                                    addToProfile: true
                                                                });
                                                            }
                                                        } : null, 
                                                    ].filter((v)=>!!v
                                                    )
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 col-md-6 col-lg-5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                id: details.id,
                                                                name: details.name
                                                            }),
                                                            isLimitedUnique && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_limitedOverlay__WEBPACK_IMPORTED_MODULE_14__/* .LimitedUniqueOverlay */ .O, {}) || isLimited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_limitedOverlay__WEBPACK_IMPORTED_MODULE_14__/* .LimitedOverlay */ .X, {}) || null
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 col-md-6 col-lg-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_creatorDetails__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                id: details.creatorTargetId,
                                                                name: details.creatorName,
                                                                type: details.creatorType,
                                                                createdAt: details.createdAt,
                                                                updatedAt: details.updatedAt
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: s.description,
                                                                children: filterTextForEmpty(details.description)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_reportAbuse__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                assetId: details.id
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "divider-top mt-2"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_genres__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                genres: details.genres
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 col-lg-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buyButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_favorite__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                                                assetId: details.id,
                                                                favoriteCount: details.favoriteCount
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            store.isResellable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "divider-top mt-2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_resellers__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_saleHistory__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 mt-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldVerticalTabs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        options: [
                                                            {
                                                                name: 'Recommendations',
                                                                element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_recommendations__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                    assetId: details.id,
                                                                    assetType: details.assetType
                                                                })
                                                            },
                                                            {
                                                                name: 'Commentary',
                                                                element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    assetId: details.id
                                                                })
                                                            },
                                                            (isLimited || isLimitedUnique) && (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)('catalogDetailsPageOwnersTabEnabled', false) && {
                                                                name: 'Owners',
                                                                element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_owners__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                                                    assetId: details.id
                                                                })
                                                            }, 
                                                        ].filter((v)=>!!v
                                                        )
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-lg-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2316);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_creatorLink__WEBPACK_IMPORTED_MODULE_1__, _playerImage__WEBPACK_IMPORTED_MODULE_2__]);
([_creatorLink__WEBPACK_IMPORTED_MODULE_1__, _playerImage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const BuilderDetails = (props)=>{
    const { creatorId , creatorType , creatorName  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-3 ps-0 pe-0",
                children: creatorType === 'User' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    name: creatorName,
                    id: creatorId
                }) : null
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-9",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-0 fw-600 lighten-2 font-size-15",
                        children: "Builder:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-0 fw-500 font-size-18",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            id: creatorId,
                            name: creatorName,
                            type: creatorType
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__]);
_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    descriptionText: {
        whiteSpace: 'break-spaces'
    }
});
const Description = (props)=>{
    var ref;
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: 'mb-0 mt-4 ' + s.descriptionText,
                children: ((ref = store.details.description) === null || ref === void 0 ? void 0 : ref.trim()) || 'No description available'
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3535:
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
/* harmony import */ var _gearDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7328);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(418);
/* harmony import */ var _builderDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6628);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7960);
/* harmony import */ var _gameStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var _gameThumbnails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(611);
/* harmony import */ var _playButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3312);
/* harmony import */ var _vote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8513);
/* harmony import */ var _catalogDetailsPage_components_favorite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_5__, _builderDetails__WEBPACK_IMPORTED_MODULE_6__, _description__WEBPACK_IMPORTED_MODULE_7__, _gameStats__WEBPACK_IMPORTED_MODULE_8__, _gameThumbnails__WEBPACK_IMPORTED_MODULE_9__, _playButton__WEBPACK_IMPORTED_MODULE_10__, _vote__WEBPACK_IMPORTED_MODULE_11__, _catalogDetailsPage_components_favorite__WEBPACK_IMPORTED_MODULE_12__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_5__, _builderDetails__WEBPACK_IMPORTED_MODULE_6__, _description__WEBPACK_IMPORTED_MODULE_7__, _gameStats__WEBPACK_IMPORTED_MODULE_8__, _gameThumbnails__WEBPACK_IMPORTED_MODULE_9__, _playButton__WEBPACK_IMPORTED_MODULE_10__, _vote__WEBPACK_IMPORTED_MODULE_11__, _catalogDetailsPage_components_favorite__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    gameTitle: {
        fontWeight: 700,
        fontSize: '30px',
        color: '#343434'
    }
});
const GameOverview = (props)=>{
    const s = useStyles();
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const showGear = store.details.creatorType === 'User' && store.details.creatorTargetId === auth.userId;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: showGear ? 'col-12 col-lg-10' : 'col-12',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: s.gameTitle,
                    children: store.details.name
                })
            }),
            showGear && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-lg-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gearDropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    options: [
                        {
                            name: 'Configure',
                            url: `/places/${store.details.id}/update`
                        }
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 col-lg-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gameThumbnails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vote__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_description__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 col-lg-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_builderDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        creatorId: store.details.creatorTargetId,
                        creatorName: store.details.creatorName,
                        creatorType: store.details.creatorType
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider-top mb-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        placeId: store.details.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gameStats__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider-top mb-2"
                    }),
                    store.universeDetails ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_favorite__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        assetId: store.details.id,
                        favoriteCount: store.universeDetails.favoritedCount
                    }) : null
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOverview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7378);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2316);
/* harmony import */ var _playerImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2918);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(418);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_2__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _playerImage__WEBPACK_IMPORTED_MODULE_6__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_7__]);
([_services_games__WEBPACK_IMPORTED_MODULE_2__, _creatorLink__WEBPACK_IMPORTED_MODULE_5__, _playerImage__WEBPACK_IMPORTED_MODULE_6__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// Most of this is just guess work. I don't know what the server list looked like, and I can't find any photos/videos.







const ServerEntry = (props)=>{
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-lg-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    label: "Join",
                    className: buttonStyles.continueButton + ' pt-1 pb-1',
                    onClick: ()=>{
                        alert('Feature is not implemented'); // todo
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 col-lg-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0 font-size-15 mt-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "fw-600",
                                    children: "Player Count: "
                                }),
                                props.CurrentPlayers.length,
                                " / ",
                                store.universeDetails.maxPlayers,
                                " Players"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "fw-600 ps-4",
                                    children: "FPS: "
                                }),
                                " ",
                                props.Fps
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "fw-600 ps-4",
                                    children: "Ping: "
                                }),
                                " ",
                                props.Ping
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mt-2 mb-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: props.CurrentPlayers.map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-2 col-md-3 col-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            id: v.Id,
                                            name: v.Username
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 mt-3 overflow-hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            id: v.Id,
                                            name: v.Username,
                                            type: "User"
                                        })
                                    })
                                ]
                            })
                        }, v.Id));
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "divider-top mt-1"
                })
            })
        ]
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    buttonWrapper: {
        margin: '0 auto',
        width: '100%',
        maxWidth: '200px'
    }
});
const GameServers = (props)=>{
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const showButton = !store.servers || store.servers && store.servers.areMoreAvailable && !store.servers.loading;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 mt-4 mb-4",
            children: [
                store.servers && store.servers.Collection && store.servers.Collection.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerEntry, {
                        ...v
                    }, v.Guid));
                }) || null,
                store.servers && store.servers.Collection && store.servers.Collection.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Nobody is playing this game."
                }) || null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.buttonWrapper,
                    children: showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        label: "Load Games",
                        onClick: (e)=>{
                            if (store.servers && store.servers.loading) {
                                return;
                            }
                            if (!store.servers) {
                                store.setServers({
                                    loading: true
                                });
                            }
                            (0,_services_games__WEBPACK_IMPORTED_MODULE_2__/* .getServers */ .MC)({
                                placeId: store.details.id,
                                offset: store.servers && store.servers.offset || 0
                            }).then((servers)=>{
                                store.setServers({
                                    ...servers,
                                    loading: false,
                                    areMoreAvailable: servers.Collection.length >= 10,
                                    offset: (store.servers && store.servers.offset || 0) + 10
                                });
                            });
                        }
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameServers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_2__]);
_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StatEntry = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "mb-0 font-size-12 mb-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "fw-600",
                children: [
                    props.name,
                    ":"
                ]
            }),
            " ",
            props.value
        ]
    }));
};
const GameStats = (props)=>{
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    if (!store.placeDetails || !store.universeDetails) return null;
    const stats = [
        {
            name: 'Created',
            value: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(store.universeDetails.created).format('M/DD/YYYY')
        },
        {
            name: 'Updated',
            value: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(store.universeDetails.updated).fromNow()
        },
        {
            name: 'Favorited',
            value: store.universeDetails.favoritedCount.toLocaleString()
        },
        {
            name: 'Visited',
            value: store.universeDetails.visits.toLocaleString()
        },
        {
            name: 'Max Players',
            value: store.universeDetails.maxPlayers.toLocaleString()
        }
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: stats.map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        ...v
                    }, v.name));
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 mt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        name: "Genres",
                        value: store.universeDetails.genre
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatEntry, {
                        name: "Allowed Gear Types",
                        value: ''
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "None"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameStats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 611:
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
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(418);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2069);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_4__, _services_games__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_4__, _services_games__WEBPACK_IMPORTED_MODULE_5__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        width: '100%',
        height: 'auto',
        maxWidth: '800px',
        margin: '0 auto',
        display: 'block'
    },
    pageButtons: {
        marginTop: '-165px',
        marginLeft: '10px',
        paddingRight: '30px',
        color: 'rgba(255,255,255,0.5)'
    },
    pageButton: {
        textShadow: '0px 0px 8px rgba(0,0,0,0.5)',
        '&:hover': {
            color: 'rgba(255,255,255,1)'
        }
    }
});
const GameThumbnails = (props)=>{
    const s = useStyles();
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: imageUrl , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: images1 , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!store.universeDetails || !store.universeDetails.id) return;
        (0,_services_games__WEBPACK_IMPORTED_MODULE_5__/* .getGameMedia */ .CT)({
            universeId: store.universeDetails.id
        }).then((media)=>{
            const images = media.filter((v)=>v.assetType === 'Image'
            );
            if (images.length) {
                (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_6__/* .multiGetAssetThumbnails */ .A3)({
                    assetIds: images.map((v)=>v.imageId
                    )
                }).then((thumb)=>{
                    // Default to first thumbnail
                    setImageUrl(thumb[0].imageUrl);
                    setImages(thumb.map((v)=>v.imageUrl
                    ));
                });
            } else {
                (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_6__/* .multiGetAssetThumbnails */ .A3)({
                    assetIds: [
                        store.universeDetails.rootPlaceId
                    ]
                }).then((thumb)=>{
                    if (thumb.length) {
                        setImageUrl(thumb[0].imageUrl);
                        setImages([
                            thumb[0].imageUrl
                        ]);
                    }
                });
            }
        });
    }, [
        store.universeDetails,
        store.details
    ]);
    const loadNextImage = ()=>{
        let newImage = '';
        for(let i = 0; i < images1.length; i++){
            if (imageUrl === images1[i]) {
                newImage = images1[i + 1];
            }
        }
        if (!newImage) {
            newImage = images1[0];
        }
        setImageUrl(newImage);
    };
    const loadPrevImage = ()=>{
        let newImage = '';
        for(let i = 0; i < images1.length; i++){
            if (imageUrl === images1[i]) {
                newImage = images1[i - 1];
            }
        }
        if (!newImage) {
            newImage = images1[images1.length - 1];
        }
        setImageUrl(newImage);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!images1 || !images1.length) return;
        let timer = setTimeout(()=>{
            loadNextImage();
        }, 10 * 1000);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        imageUrl,
        images1
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: s.image,
                    src: imageUrl
                }) : null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: 'fw-bolder font-size-30 user-select-none mb-0 ' + s.pageButtons,
                    children: images1 && images1.length > 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: 'me-4 cursor-pointer float-left ' + s.pageButton,
                                onClick: ()=>{
                                    loadPrevImage();
                                },
                                children: '<'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: 'ms-4 cursor-pointer float-right ' + s.pageButton,
                                onClick: ()=>{
                                    loadNextImage();
                                },
                                children: '>'
                            })
                        ]
                    }) : null
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameThumbnails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3312:
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
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(418);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__]);
([_services_games__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    buttonWrapper: {
        width: '100%',
        maxWidth: '200px'
    },
    button: {
        width: '100%',
        paddingTop: '2px',
        paddingBottom: '4px'
    },
    disabledText: {
        color: '#ff0000',
        textAlign: 'center',
        marginBottom: '8px'
    }
});
/**
 * Play button
 * @param {{placeId: number}} props 
 * @returns 
 */ const PlayButton = (props)=>{
    var ref2;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const gameDetails = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const onClick = (e1)=>{
        var ref;
        if (!((ref = gameDetails.placeDetails) === null || ref === void 0 ? void 0 : ref.isPlayable)) return;
        if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('launchUsingEsURI', false)) {
            var ref1;
            e1 === null || e1 === void 0 ? void 0 : e1.preventDefault();
            if (!auth.isAuthenticated) {
                window.location.href = '/';
                return;
            }
            (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .launchGame */ .Yv)({
                placeId: props.placeId,
                year: ((ref1 = gameDetails.placeDetails) === null || ref1 === void 0 ? void 0 : ref1.year) || 2016
            }).catch((e)=>{
                // todo: modal
                setError(e.message);
            });
        } else if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('launchUsingEsWeb', false)) {
            window.location.href = '/RobloxApp/Play?placeId=' + props.placeId;
        } else {
            // TODO: Roblox URI handling here (is this even possible?)
            alert('Support for joining ROBLOX games is not implemented. You will be redirected to ROBLOX to play this game.');
            window.location.href = 'https://www.roblox.com/games/' + props.placeId + '/--';
        }
    };
    const isDisabled = !((ref2 = gameDetails.placeDetails) === null || ref2 === void 0 ? void 0 : ref2.isPlayable);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: 'col-12 mx-auto ' + s.buttonWrapper,
            children: [
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-danger mb-1 mt-1",
                    children: error
                }),
                isDisabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: s.disabledText,
                    children: "You cannot access this place at this time."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    label: "Play",
                    className: s.button + ' ' + buttonStyles.buyButton,
                    onClick: onClick,
                    disabled: isDisabled
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2069);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__, _services_games__WEBPACK_IMPORTED_MODULE_3__]);
([_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__, _services_games__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_4__.createUseStyles)({
    redBg: {
        background: '#CE645B',
        width: '100%',
        height: '5px'
    },
    greenBg: {
        background: '#52A846',
        height: '5px'
    },
    borderLeft: {
        borderLeft: '1px solid #c3c3c3'
    },
    thumbsText: {
        fontSize: '12px'
    }
});
const Vote = (props)=>{
    const s = useStyles();
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: votes , 1: setVotes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const loadVotes = ()=>{
        if (store.universeDetails && store.universeDetails.id) {
            (0,_services_games__WEBPACK_IMPORTED_MODULE_3__/* .multiGetGameVotes */ .Ff)({
                universeIds: [
                    store.universeDetails.id
                ]
            }).then((data)=>{
                setVotes(data[0]);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadVotes();
    }, [
        store.universeDetails
    ]);
    const submitVote = (didUpvote)=>{
        if (locked) return;
        setLocked(true);
        setFeedback(null);
        (0,_services_games__WEBPACK_IMPORTED_MODULE_3__/* .voteOnGame */ .TD)({
            universeId: store.universeDetails.id,
            isUpvote: didUpvote
        }).then((result)=>{
            loadVotes();
        }).catch((e)=>{
            if (!e.response || !e.response.data || !e.response.data.errors) {
                setFeedback('An unknown error has occurred. Try again.');
                return;
            }
            const status = e.response.status;
            const err = e.response.data.errors[0];
            const code = err.code;
            const msg = err.message;
            if (status === 403 && code === 6) {
                setFeedback('You must play this game before you can vote on it.');
            } else if (status === 400 && (code === 3 || code === 2)) {
                setFeedback('You cannot vote on this game.');
            } else if (status === 429 && code === 5) {
                setFeedback('Too many attempts to vote. Try again later.');
            } else if (msg) {
                setFeedback(msg);
            }
        }).finally(()=>{
            setLocked(false);
        });
    };
    if (votes !== null) {
        const total = votes.upVotes + votes.downVotes;
        const greenPercent = Math.ceil(votes.upVotes / total * 100);
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row mt-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-10 offset-1 col-lg-6 offset-lg-3",
                children: [
                    feedback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-danger mb-0",
                        children: feedback
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: 'row ps-3 pe-3 ' + (locked ? 'opacity-50' : ''),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6 p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tiny-thumbs-up cursor-pointer",
                                        onClick: ()=>{
                                            submitVote(true);
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.thumbsText + ' ms-1',
                                        children: votes.upVotes.toLocaleString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: 'col-6 p-0 text-right ' + s.borderLeft,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "float-right",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: s.thumbsText,
                                            children: votes.downVotes.toLocaleString()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tiny-thumbs-down cursor-pointer",
                                            onClick: ()=>{
                                                submitVote(false);
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.redBg + ' mt-1',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.greenBg,
                            style: {
                                width: greenPercent + '%'
                            }
                        })
                    })
                ]
            })
        }));
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vote);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4247:
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
/* harmony import */ var _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
/* harmony import */ var _catalogDetailsPage_components_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2388);
/* harmony import */ var _catalogDetailsPage_components_recommendations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7741);
/* harmony import */ var _catalogDetailsPage_components_badges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2754);
/* harmony import */ var _catalogDetailsPage_components_passess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7690);
/* harmony import */ var _oldVerticalTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1681);
/* harmony import */ var _components_gameOverview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3535);
/* harmony import */ var _components_gameServers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8018);
/* harmony import */ var _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(418);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__, _catalogDetailsPage_components_comments__WEBPACK_IMPORTED_MODULE_5__, _catalogDetailsPage_components_recommendations__WEBPACK_IMPORTED_MODULE_6__, _catalogDetailsPage_components_badges__WEBPACK_IMPORTED_MODULE_7__, _catalogDetailsPage_components_passess__WEBPACK_IMPORTED_MODULE_8__, _components_gameOverview__WEBPACK_IMPORTED_MODULE_10__, _components_gameServers__WEBPACK_IMPORTED_MODULE_11__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_12__]);
([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__, _catalogDetailsPage_components_comments__WEBPACK_IMPORTED_MODULE_5__, _catalogDetailsPage_components_recommendations__WEBPACK_IMPORTED_MODULE_6__, _catalogDetailsPage_components_badges__WEBPACK_IMPORTED_MODULE_7__, _catalogDetailsPage_components_passess__WEBPACK_IMPORTED_MODULE_8__, _components_gameOverview__WEBPACK_IMPORTED_MODULE_10__, _components_gameServers__WEBPACK_IMPORTED_MODULE_11__, _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// reference: https://web.archive.org/web/20150228101148mp_/http://www.roblox.com/Work-at-a-Pizza-Place-place?id=192800












const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    gameContainer: {
        backgroundColor: '#fff',
        padding: '4px 8px',
        overflow: 'hidden'
    }
});
const GameDetails = (props)=>{
    const { details  } = props;
    const s = useStyles();
    const store = _stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_12__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        store.setDetails(details);
    }, [
        props
    ]);
    if (!store.details) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.gameContainer,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mt-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12 col-lg-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gameOverview__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldVerticalTabs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            options: [
                                                {
                                                    name: 'Recommendations',
                                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_recommendations__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        assetId: details.id,
                                                        assetType: 9
                                                    })
                                                },
                                                {
                                                    name: 'Games',
                                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gameServers__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                },
                                                {
                                                    name: 'Commentary',
                                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_comments__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        assetId: details.id
                                                    })
                                                },
                                                {
                                                    name: 'Badges',
                                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_badges__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        assetId: details.id,
                                                        assetType: 21
                                                    })
                                                },
                                                {
                                                    name: 'Game Passes',
                                                    element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_passess__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        assetId: details.id,
                                                        assetType: 34
                                                    })
                                                }, 
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-none d-lg-flex col-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_2__]);
_services_games__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GameDetailsStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: media , 1: setMedia  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: placeDetails , 1: setPlaceDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: universeDetails , 1: setUniverseDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: servers , 1: setServers  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // reset our states, then get new details
        setMedia(null);
        setPlaceDetails(null);
        setUniverseDetails(null);
        if (!details) return;
        (0,_services_games__WEBPACK_IMPORTED_MODULE_2__/* .multiGetPlaceDetails */ .nh)({
            placeIds: [
                details.id
            ]
        }).then((d)=>setPlaceDetails(d[0])
        );
    }, [
        details
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!placeDetails) return;
        (0,_services_games__WEBPACK_IMPORTED_MODULE_2__/* .multiGetUniverseDetails */ .eJ)({
            universeIds: [
                placeDetails.universeId
            ]
        }).then((d)=>{
            setUniverseDetails(d[0]);
            (0,_services_games__WEBPACK_IMPORTED_MODULE_2__/* .getGameMedia */ .CT)({
                universeId: d[0].id
            }).then(setMedia);
        });
    }, [
        placeDetails
    ]);
    return {
        details,
        setDetails,
        servers,
        setServers,
        placeDetails,
        universeDetails,
        media,
        setMedia
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameDetailsStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalogDetailsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9903);
/* harmony import */ var _catalogDetailsPage_stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9326);
/* harmony import */ var _catalogDetailsPage_stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9930);
/* harmony import */ var _gameDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4247);
/* harmony import */ var _gameDetails_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(418);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2300);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2611);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5304);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2069);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_2__, _catalogDetailsPage_stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_3__, _catalogDetailsPage_stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_4__, _gameDetails__WEBPACK_IMPORTED_MODULE_5__, _gameDetails_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__, _services_catalog__WEBPACK_IMPORTED_MODULE_9__, _services_games__WEBPACK_IMPORTED_MODULE_10__]);
([_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_2__, _catalogDetailsPage_stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_3__, _catalogDetailsPage_stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_4__, _gameDetails__WEBPACK_IMPORTED_MODULE_5__, _gameDetails_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__, _services_catalog__WEBPACK_IMPORTED_MODULE_9__, _services_games__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const getUrlForAssetType = ({ assetTypeId , assetId , name  })=>{
    if (assetTypeId === 9) {
        // Place
        return (0,_services_games__WEBPACK_IMPORTED_MODULE_10__/* .getGameUrl */ .IH)({
            placeId: assetId,
            name
        });
    }
    // Anything else
    return (0,_services_catalog__WEBPACK_IMPORTED_MODULE_9__/* .getItemUrl */ .yz)({
        assetId: assetId,
        name: name
    });
};
const AssetPage = (props)=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const assetId = router.query[props.idParamName];
    const name1 = router.query[props.nameParamName];
    // TODO: all this asset details crap needs to be done in getInitialProps()
    // The only reason it's not in there now is because I don't have a solution to the server-side CSRF issue yet
    /**
   * @type {[AssetDetailsEntry, import('react').Dispatch<AssetDetailsEntry>]}
   */ const { 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const redirectIfBadUrl = ({ assetTypeId , name  })=>{
        const expectedUrl = getUrlForAssetType({
            assetTypeId: assetTypeId,
            assetId: assetId,
            name: name
        });
        if (false) {}
        return false;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!assetId) return;
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_9__/* .getItemDetails */ .rV)([
            assetId
        ]).then((result)=>{
            const newDetails = result.data.data[0];
            if (newDetails === undefined) {
                throw new Error('NotFound');
            }
            setDetails(newDetails);
            redirectIfBadUrl({
                assetTypeId: newDetails.assetType,
                name: newDetails.name
            });
        }).catch((e1)=>{
            if (e1.response && e1.response.status === 406) {
                const isBadAssetType = e1.response.data.errors.find((v)=>v.code === 11
                );
                if (isBadAssetType) {
                    // Get from place details endpoint
                    (0,_services_games__WEBPACK_IMPORTED_MODULE_10__/* .multiGetPlaceDetails */ .nh)({
                        placeIds: [
                            assetId
                        ]
                    }).then((resp)=>{
                        const place = resp[0];
                        return (0,_services_games__WEBPACK_IMPORTED_MODULE_10__/* .multiGetUniverseDetails */ .eJ)({
                            universeIds: [
                                place.universeId
                            ]
                        }).then((data)=>{
                            const uni = data[0];
                            setDetails({
                                name: uni.name,
                                description: uni.description,
                                creatorTargetId: uni.creator.id,
                                creatorType: uni.creator.type,
                                creatorName: uni.creator.name,
                                assetType: 9,
                                id: assetId,
                                createdAt: uni.created,
                                updatedAt: uni.updated,
                                genres: [
                                    uni.genre
                                ],
                                favoriteCount: uni.favoritedCount,
                                isForSale: uni.price !== null,
                                price: uni.price,
                                itemRestrictions: [],
                                productId: assetId,
                                itemType: 'Asset',
                                lowestSellerData: null,
                                offsaleDeadline: null,
                                currency: 1
                            });
                        });
                    }).catch((e)=>{
                        console.error('could not get place details', e);
                        setError(e);
                    });
                    return;
                } else {
                    setError(e1);
                }
            }
            setError(e1);
        });
    }, [
        assetId
    ]);
    if (error) {
        // todo: better error page would be nice
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card card-body",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "fw-bold",
                                children: "Error Loading Item"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: error.message ? error.message : error.toString()
                            })
                        ]
                    })
                })
            })
        }));
    }
    if (!details) return null;
    if (!assetId) return null;
    if (details.assetType === 9) {
        // Place
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gameDetails_stores_gameDetailsStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Provider */ .Z.Provider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gameDetails__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                details: details
            })
        }));
    }
    // Anything else (e.g. hat, shirt, model)
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                details: details
            })
        })
    }));
};
/*
export async function getServerSideProps({ query, res, req }) {
  const assetId = query['id'];
  const name = query['asset'] || query['url'];
  if (!assetId || !name) {
    return {
      notFound: true,
    }
  }
  let info;
  try {
    info = await getProductInfoLegacy(assetId);
    // Redirection seems to break every few nextjs updates but I can't figure out why.
    if (getFlag('assetRedirectsEnabled', true)) {
      const expectedUrl = getUrlForAssetType({
        assetId: info.AssetId,
        name: info.Name,
        assetTypeId: info.AssetTypeId,
      });
      if (req.url !== expectedUrl) {
        logger.info('redirects', 'asset redirect from', req.url, 'to', expectedUrl);
        return {
          redirect: {
            destination: expectedUrl,
          },
          props: {},
        };
      }
    }
  } catch (e) {
    if (e.response && (e.response.status === 404 || e.response.status === 400)) {
      return {
        notFound: true,
      }
    }
    // todo: we need a better error handling mechanism...
    throw e;
  }
  return {
    props: {
      assetId,
      name,
      title: info.Name + ' - ROBLOX'
    },
  };
}
*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetPage);

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


/***/ })

};
;