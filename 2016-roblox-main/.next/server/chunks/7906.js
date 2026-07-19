"use strict";
exports.id = 7906;
exports.ids = [7906];
exports.modules = {

/***/ 9442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useModalStyles),
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
/* harmony import */ var _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9326);
/* harmony import */ var _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9930);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1669);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3488);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8452);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__, _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__, _itemImage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useDescStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    purchaseText: {
        fontWeight: 700,
        marginTop: '10px'
    }
});
const ModalDescription = (props)=>{
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const sellerDetails = modalStore.purchaseDetails;
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const s = useDescStyles();
    switch(modalStore.purchaseState){
        case 'PURCHASE_PENDING':
        case 'PURCHASE':
            let priceElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                inline: true,
                children: sellerDetails.price
            });
            let action = 'buy';
            if (modalStore.currency === 2) {
                priceElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    inline: true,
                    children: sellerDetails.priceTickets
                });
            } else {
                if (sellerDetails.price === 0) {
                    priceElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Free"
                    });
                    action = 'take';
                }
            }
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: s.purchaseText,
                children: [
                    "Would you like to ",
                    action,
                    " the ",
                    store.details.name,
                    " ",
                    store.subCategoryDisplayName,
                    " from ",
                    sellerDetails.sellerName,
                    " for ",
                    priceElement,
                    "?"
                ]
            }));
        case 'PURCHASE_OK':
            let priceStuff = modalStore.currency === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                inline: true,
                children: sellerDetails.priceTickets
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                inline: true,
                children: sellerDetails.price
            });
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: s.purchaseText,
                children: [
                    "You have successfully bought the ",
                    store.details.name,
                    " ",
                    store.subCategoryDisplayName,
                    " from ",
                    sellerDetails.sellerName,
                    " for ",
                    priceStuff,
                    "."
                ]
            }));
        case 'INSUFFICIENT_FUNDS':
            if (modalStore.currency === 1) {
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: s.purchaseText,
                    children: [
                        "You need ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            inline: true,
                            children: sellerDetails.price - auth.robux
                        }),
                        " more to purchase this item."
                    ]
                }));
            }
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: s.purchaseText,
                children: [
                    "You need ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        inline: true,
                        children: sellerDetails.priceTickets - auth.tix
                    }),
                    " more to purchase this item."
                ]
            }));
        case 'PURCHASE_ERROR':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.purchaseText,
                children: "An error occurred purchasing this item. You have not been charged."
            }));
        default:
            return null;
    }
};
const ModalButtons = (props)=>{
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const sellerDetails = modalStore.purchaseDetails;
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    switch(modalStore.purchaseState){
        case 'PURCHASE':
        case 'PURCHASE_PENDING':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-8 offset-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    disabled: modalStore.purchaseState === 'PURCHASE_PENDING',
                                    label: sellerDetails.price === 0 ? 'Take' : 'Buy Now',
                                    className: s.buyButton,
                                    onClick: (e1)=>{
                                        e1.preventDefault();
                                        modalStore.setPurchaseState('PURCHASE_PENDING');
                                        modalStore.purchaseItem().then(()=>{
                                            modalStore.setPurchaseState('PURCHASE_OK');
                                        }).catch((e)=>{
                                            modalStore.setPurchaseState(e.state || 'PURCHASE_ERROR');
                                        });
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    disabled: modalStore.purchaseState === 'PURCHASE_PENDING',
                                    label: "Cancel",
                                    className: s.cancelButton,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        modalStore.closePurchaseModal();
                                    }
                                })
                            })
                        ]
                    })
                })
            }));
        case 'PURCHASE_OK':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-10 offset-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: s.continueButton,
                        label: "Continue Shopping",
                        onClick: ()=>{
                            modalStore.closePurchaseModal();
                            window.location.reload();
                        }
                    })
                })
            }));
        case 'INSUFFICIENT_FUNDS':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `row ${s.badPurchaseRow}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6 pe-0 offset-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: s.buyButton,
                            label: "Purchase ROBUX",
                            onClick: ()=>{
                                modalStore.closePurchaseModal();
                                window.location.href = '/';
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: false,
                            label: "Cancel",
                            className: s.cancelButton,
                            onClick: (e)=>{
                                e.preventDefault();
                                modalStore.closePurchaseModal();
                            }
                        })
                    })
                ]
            }));
        case 'PURCHASE_ERROR':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `row ${s.badPurchaseRow}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-4 offset-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disabled: false,
                        label: "Cancel",
                        className: s.cancelButton,
                        onClick: (e)=>{
                            e.preventDefault();
                            modalStore.closePurchaseModal();
                        }
                    })
                })
            }));
        default:
            return null;
    }
};
const ModalImage = (props)=>{
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    switch(modalStore.purchaseState){
        case 'PURCHASE':
        case 'PURCHASE_PENDING':
        case 'PURCHASE_OK':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                id: store.details.id
            }));
        case 'INSUFFICIENT_FUNDS':
        case 'PURCHASE_ERROR':
            // TODO: yellow triangle icon
            return null;
        default:
            return null;
    }
};
const ModalTitle = ()=>{
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    switch(modalStore.purchaseState){
        case 'PURCHASE':
        case 'PURCHASE_PENDING':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Buy Item"
            }));
        case 'PURCHASE_OK':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Purchase Complete!"
            }));
        case 'INSUFFICIENT_FUNDS':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Insufficient Funds"
            }));
        case 'PURCHASE_ERROR':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Purchase Error"
            }));
        default:
            return null;
    }
};
const useModalStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    modalBg: {
        background: 'rgba(0,0,0,0.8)',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        left: 0,
        zIndex: 9999
    },
    modalWrapper: {
        width: '400px',
        height: '250px',
        backgroundColor: '#e1e1e1',
        margin: '0 auto',
        border: '1px solid #a3a3a3',
        marginTop: 'calc(50vh - 125px)'
    },
    title: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '24px',
        marginTop: '10px'
    },
    innerSection: {
        padding: '4px 8px',
        background: 'white',
        width: '100%',
        height: '205px',
        border: '4px solid #e1e1e1'
    },
    footerText: {
        textAlign: 'center',
        marginBottom: '0',
        marginTop: '14px',
        fontSize: '12px',
        fontWeight: 600,
        color: 'grey'
    }
});
const BuyItemModal = (props)=>{
    const s = useModalStyles();
    const store = _stores_catalogDetailsPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const modalStore = _stores_catalogDetailsPageModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    if (modalStore.isPurchasePromptOpen === false) {
        return null;
    }
    if (store.details === null) return null;
    const sellerDetails = modalStore.purchaseDetails;
    const newBalance = modalStore.currency === 1 ? authStore.robux - sellerDetails.price : authStore.tix - sellerDetails.priceTickets;
    const AfterTransactionBalance = ()=>{
        if (modalStore.currency === 1) {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: s.footerText,
                children: [
                    "Your balance after this transaction will be R$",
                    newBalance.toLocaleString(),
                    " robux."
                ]
            }));
        }
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: s.footerText,
            children: [
                "Your balance after this transaction will be T$",
                newBalance.toLocaleString(),
                " tix."
            ]
        }));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.modalBg,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.modalWrapper,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: s.title,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalTitle, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.innerSection,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalImage, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-9",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalDescription, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalButtons, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12",
                                        children: (modalStore.purchaseState === 'PURCHASE' || modalStore.purchaseState === 'PURCHASE_PENDING') && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AfterTransactionBalance, {}) || modalStore.purchaseState === 'PURCHASE_OK' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: s.footerText,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                href: "/My/Character.aspx",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Customize Character"
                                                })
                                            })
                                        }) || null
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyItemModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PurchaseError)
/* harmony export */ });
class PurchaseError extends Error {
    constructor(errorState){
        super('Purchase failed with state ' + errorState);
        this.state = errorState;
    }
};


/***/ }),

/***/ 9326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5185);
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_2__, _services_inventory__WEBPACK_IMPORTED_MODULE_3__]);
([_services_economy__WEBPACK_IMPORTED_MODULE_2__, _services_inventory__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const subCatIdToName = (id)=>{
    return ({
        1: 'Image',
        2: 'T-Shirt',
        3: 'Sound',
        4: 'Mesh',
        5: '',
        8: 'Hat',
        9: 'Place',
        10: 'Model',
        11: 'Shirt',
        12: 'Pants',
        13: 'Decal',
        17: 'Head',
        18: 'Face',
        19: 'Gear',
        21: 'Badge',
        24: 'Animation',
        27: 'Torso',
        28: 'Right Arm',
        29: 'Left Arm',
        30: 'Left Leg',
        31: 'Right Leg',
        32: 'Package',
        34: 'Game Pass',
        38: 'Plugin',
        40: 'Mesh Part',
        41: 'Hair',
        42: 'Face Accessory',
        43: 'Neck Accessory',
        44: 'Shoulder Accessory',
        45: 'Front Accessory',
        46: 'Back Accessory',
        47: 'Waist Accessory',
        48: 'Climb Animation',
        49: 'Death Animation',
        50: 'Fall Animation',
        51: 'Idle Animation',
        52: 'Jump Animation',
        53: 'Run Animation',
        54: 'Swim Animation',
        55: 'Walk Animation',
        56: 'Pose Animation',
        61: 'Emote Animation'
    })[id];
};
const isLimited = (details)=>{
    if (!details.itemRestrictions.includes('Limited') && !details.itemRestrictions.includes('LimitedUnique')) {
        return false;
    }
    return true;
};
const isResellable = (details)=>{
    return isLimited(details) && !details.isForSale;
};
const CatalogDetailsPage = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    /**
   * @type {[AssetDetailsEntry, import('react').Dispatch<AssetDetailsEntry>]}
   */ const { 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: resellers , 1: setResellers  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: allResellers , 1: setAllResellers  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: resellersPage , 1: setResellersPage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const { 0: resellersCount , 1: setResellersCount  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: saleCount , 1: setSaleCount  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: ownedCopies , 1: setOwnedCopies  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: resaleModalOpen , 1: setResaleModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: unlistModalOpen , 1: setUnlistModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: inCollection , 1: setInCollection  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: offsaleDeadline , 1: setOffsaleDeadline  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const getPurchaseDetails = (specificUaid = undefined)=>{
        if (isResellable(details)) {
            // Get lowest seller
            const seller = specificUaid ? resellers.find((v)=>v.userAssetId === specificUaid
            ) : resellers && resellers[0];
            if (!seller) return null;
            return {
                assetId: details.id,
                assetType: details.assetType,
                sellerName: seller.seller.name,
                sellerId: seller.seller.id,
                price: seller.price,
                priceTickets: null,
                userAssetId: seller.userAssetId,
                productId: details.productId || details.id,
                currency: details.currency || 1
            };
        } else if (details.isForSale) {
            return {
                assetId: details.id,
                assetType: details.assetType,
                sellerName: details.creatorName,
                sellerId: details.creatorTargetId,
                price: details.price,
                priceTickets: details.priceTickets,
                userAssetId: null,
                productId: details.productId || details.id,
                currency: details.currency || 1
            };
        }
        return null;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!allResellers) return;
        let offset = resellersPage * 6 - 6;
        let limit = 6 + offset;
        setResellers(allResellers.slice(offset, limit));
    }, [
        resellersPage,
        allResellers
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!allResellers) return;
        setResellersCount(allResellers.length);
    }, [
        allResellers
    ]);
    return {
        details,
        setDetails,
        saleCount,
        setSaleCount,
        ownedCopies,
        setOwnedCopies,
        inCollection,
        setInCollection,
        isResellable: details && isResellable(details) || false,
        getPurchaseDetails,
        subCategoryDisplayName: details && subCatIdToName(details.assetType),
        offsaleDeadline,
        setOffsaleDeadline,
        unlistModalOpen,
        setUnlistModalOpen,
        resaleModalOpen,
        setResaleModalOpen,
        resellers,
        setResellers,
        resellersCount,
        setResellersCount,
        resellersPage,
        setResellersPage,
        allResellers,
        setAllResellers,
        loadResellers: async ()=>{
            let data = {};
            let cursor = '';
            let allSellers = [];
            do {
                data = await (0,_services_economy__WEBPACK_IMPORTED_MODULE_2__/* .getResellers */ .UH)({
                    assetId: details.id,
                    cursor,
                    limit: 100
                });
                cursor = data.data.nextPageCursor;
                data.data.data.forEach((v)=>allSellers.push(v)
                );
            }while (cursor !== null);
            setAllResellers(allSellers);
            setResellers(allSellers.slice(0, 6));
            setResellersCount(allSellers.length);
        },
        loadOwnedCopies: (userId)=>{
            if (!details) return;
            // Get resellers (collectible items)
            if (isResellable(details)) {
                // Get copies (resellable)
                (0,_services_economy__WEBPACK_IMPORTED_MODULE_2__/* .getResellableCopies */ .Ec)({
                    assetId: details.id,
                    userId: userId
                }).then(({ data  })=>{
                    setOwnedCopies(data);
                }).catch((e)=>{
                    console.error('[error] could not get owned resellable copies', e);
                });
            } else {
                // Get normal copies
                (0,_services_inventory__WEBPACK_IMPORTED_MODULE_3__/* .getOwnedCopies */ .Z0)({
                    assetId: details.id,
                    userId: userId
                }).then((data)=>{
                    setOwnedCopies(data);
                }).catch((e)=>{
                    console.error('[error] could not get owned copies', e);
                });
            }
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogDetailsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5185);
/* harmony import */ var _purchaseError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_2__]);
_services_economy__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CatalogDetailsPageModal = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: purchaseState , 1: setPurchaseState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('PURCHASE');
    const { 0: isPurchasePromptOpen , 1: setIsPurchasePromptOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: purchaseDetails , 1: setPurchaseDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: currency1 , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isPurchasing , 1: setIsPurchasing  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        isPurchasePromptOpen,
        purchaseDetails,
        purchaseState,
        setPurchaseState,
        currency: currency1,
        setCurrency,
        openPurchaseModal: (details, currentBalanceRobux, currentBalanceTix, currency)=>{
            if (isPurchasing) return;
            setIsPurchasePromptOpen(true);
            setPurchaseDetails(details);
            setCurrency(currency);
            const newBalance = currency === 1 ? currentBalanceRobux - details.price : currentBalanceTix - details.priceTickets;
            if (newBalance < 0) {
                setPurchaseState('INSUFFICIENT_FUNDS');
            } else {
                setPurchaseState('PURCHASE');
            }
        },
        closePurchaseModal: ()=>{
            if (isPurchasing) return;
            setIsPurchasePromptOpen(false);
        },
        /**
     * Complete the purchase of the selected product
     */ purchaseItem: async ()=>{
            setIsPurchasing(true);
            try {
                let result = await (0,_services_economy__WEBPACK_IMPORTED_MODULE_2__/* .purchaseItem */ .xD)({
                    assetId: purchaseDetails.assetId,
                    productId: purchaseDetails.productId,
                    sellerId: purchaseDetails.sellerId,
                    userAssetId: purchaseDetails.userAssetId,
                    price: currency1 === 1 ? purchaseDetails.price : purchaseDetails.priceTickets,
                    expectedCurrency: currency1
                });
                const success = result.purchased;
                if (!success) {
                    const error = new _purchaseError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z('PURCHASE_ERROR');
                    const errorReason = result.reason;
                    if (errorReason === 'InsufficientFunds') {
                        error.state = 'INSUFFICIENT_FUNDS';
                    }
                    throw error;
                }
                return result;
            } finally{
                setIsPurchasing(false);
            }
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogDetailsPageModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9298:
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
/* harmony import */ var _services_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9125);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_3__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    image: {
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        height: 'auto',
        display: 'block'
    }
});
const GroupIcon = (props)=>{
    const s = useStyles();
    const size = props.size || 420;
    const { 0: retryCount , 1: setRetryCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const thumbs = _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.url ? props.url : thumbs.getGroupIcon(props.id, '420x420'));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.url) {
            setImage(props.url);
            return;
        }
        setRetryCount(0);
        setImage(thumbs.getGroupIcon(props.id, '420x420'));
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.url) {
            return;
        }
        setImage(thumbs.getGroupIcon(props.id, '420x420'));
    }, [
        thumbs.thumbnails
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: s.image,
        src: image,
        alt: props.name,
        onError: (e)=>{
            if (retryCount >= 3) return;
            (0,_services_metrics__WEBPACK_IMPORTED_MODULE_5__/* .reportImageFail */ .a)({
                errorEvent: e,
                type: 'groupIcon',
                src: image
            });
            setRetryCount(retryCount + 1);
            setImage('/img/placeholder.png');
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;