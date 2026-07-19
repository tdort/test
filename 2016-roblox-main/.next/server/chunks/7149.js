"use strict";
exports.id = 7149;
exports.ids = [7149];
exports.modules = {

/***/ 7149:
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
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5185);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5435);
/* harmony import */ var _catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3488);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9767);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8532);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8452);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _services_economy__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _table__WEBPACK_IMPORTED_MODULE_9__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _services_economy__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _table__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const DeletedEntryMessage = (props)=>{
    const { 0: showMessage , 1: setShowMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        children: [
            "Deleted Item ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                onClick: ()=>{
                    setShowMessage(!showMessage);
                },
                style: {
                    fontSize: '10px',
                    cursor: 'pointer'
                },
                children: "?"
            }),
            showMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 mb-0",
                children: props.message
            })
        ]
    }));
};
const DescriptionEntry = (props)=>{
    const deletedMessage = `This item was deleted. For more details, contact customer support, and reference transaction ID: #${props.id || '-'}`;
    let verb = '';
    let link = '';
    /**@type {string | JSX.Element} */ let noun = '';
    if (props.assetDetails) {
        noun = props.assetDetails.name;
        link = (0,_services_catalog__WEBPACK_IMPORTED_MODULE_4__/* .getItemUrl */ .yz)({
            assetId: props.assetDetails.id,
            name: props.assetDetails.name
        });
    }
    if (props.transactionType === 'Purchase') {
        verb = 'Purchased';
        if (!noun && props.details) {
            if (props.details.type === 'RobloxProduct') {
                noun = props.details.name;
            }
        }
    } else if (props.transactionType === 'Sale') {
        verb = 'Sold';
        if (props.details && props.details.name && !noun) {
            noun = props.details.name;
        }
    }
    if (!noun) {
        // item was deleted ?
        noun = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeletedEntryMessage, {
            message: deletedMessage
        });
    }
    // console.log(props)
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        children: [
            verb,
            " ",
            link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                href: link,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: noun
                })
            }) : noun
        ]
    }));
};
const useSellerStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    playerHeadshot: {
        width: '30px',
        height: '30px',
        border: '1px solid #c3c3c3',
        borderRadius: '100%',
        overflow: 'hidden',
        float: 'left'
    },
    sellerName: {
        marginLeft: '4px',
        float: 'left',
        marginTop: '7px',
        color: '#000'
    }
});
const SellerEntry = (props)=>{
    const s = useSellerStyles();
    if (props.type === 'Group') {
        // TODO
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: props.name
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            href: `/users/${props.id}/profile`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.playerHeadshot,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            id: props.id,
                            name: props.name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.sellerName,
                        children: props.name
                    })
                ]
            })
        })
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    inline: {
        display: 'inline-block'
    },
    more: {
        textAlign: 'center',
        marginTop: '10px',
        cursor: 'pointer'
    }
});
const applyAssetDetails = (transactionsArray, detailsArray)=>{
    for (const item of transactionsArray){
        item.assetDetails = detailsArray.find((v)=>v.id === item.details.id
        );
    }
};
/**
 * Transactions table
 * @param props {{creatorType: string, creatorId: number, hideTransactionTypeSelector: boolean}}
 * @returns {JSX.Element}
 * @constructor
 */ const MyTransactionsTable = (props)=>{
    const hideSelector = props.hideTransactionTypeSelector === true;
    const s = useStyles();
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.creatorType === 'Group' ? 'sale' : 'purchase');
    const { 0: cursor , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: entries , 1: setEntries  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth.isPending) return;
        let f = props.creatorType === 'User' ? (0,_services_economy__WEBPACK_IMPORTED_MODULE_5__/* .getTransactions */ .f1)({
            cursor,
            type: type,
            userId: auth.userId
        }) : (0,_services_economy__WEBPACK_IMPORTED_MODULE_5__/* .getGroupTransactions */ .$A)({
            cursor,
            type,
            groupId: props.creatorId
        });
        f.then((values)=>{
            let existing = entries;
            if (!existing) {
                existing = {
                    nextPageCursor: null,
                    data: []
                };
            }
            let ref = [];
            let assetIds = values.data.filter((v)=>{
                return v.details && typeof v.details.id === 'number';
            }).map((v)=>{
                ref.push(v);
                return v.details.id;
            });
            if (assetIds.length > 0) {
                (0,_services_catalog__WEBPACK_IMPORTED_MODULE_4__/* .getItemDetails */ .rV)(assetIds).then((itemDetails)=>{
                    applyAssetDetails(ref, itemDetails.data.data);
                    existing.nextPageCursor = values.nextPageCursor;
                    existing.data = [
                        ...existing.data,
                        ...values.data
                    ];
                    setEntries({
                        ...existing
                    });
                });
            } else {
                existing.nextPageCursor = values.nextPageCursor;
                existing.data = [
                    ...existing.data,
                    ...values.data
                ];
                setEntries({
                    ...existing
                });
            }
        });
    }, [
        cursor,
        auth.userId,
        auth.isPending,
        type,
        props
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            !hideSelector ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 mb-3 mt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-0 fw-700 lighten-1 pe-2",
                            children: "Transaction Type: "
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            value: type,
                            onChange: (e)=>{
                                setType(e.currentTarget.value);
                                setCursor(null);
                                setEntries(null);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "purchase",
                                    children: "Purchases"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "sale",
                                    children: "Sales"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "commision",
                                    children: "Commisions"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "adrevenue",
                                    children: "Ad Revenue"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "group-payout",
                                    children: "Group Payouts"
                                })
                            ]
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_table__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    keys: [
                        'Date',
                        'Member',
                        'Description',
                        'Amount', 
                    ],
                    entries: entries && entries.data && entries.data.map((v)=>{
                        return [
                            dayjs__WEBPACK_IMPORTED_MODULE_1___default()(v.created).format('M/D/YY'),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SellerEntry, {
                                ...v.agent
                            }, v.id),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescriptionEntry, {
                                ...v
                            }),
                            v.currency.amount === 0 ? '0' : v.currency.type === 'Tix' || v.currency.type === 'Tickets' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                children: v.currency.amount
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                children: v.currency.amount
                            })
                        ];
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: entries && entries.nextPageCursor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: s.more,
                    onClick: ()=>{
                        setCursor(entries.nextPageCursor);
                    },
                    children: "Load More"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTransactionsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;