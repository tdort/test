"use strict";
exports.id = 9043;
exports.ids = [9043];
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

/***/ 9352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2300);
/* harmony import */ var _oldVerticalTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1681);
/* harmony import */ var _stores_moneyPageStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1157);
/* harmony import */ var _currencyExchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5773);
/* harmony import */ var _mySummaryTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9149);
/* harmony import */ var _myTradesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2431);
/* harmony import */ var _myTransactionsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_currencyExchange__WEBPACK_IMPORTED_MODULE_5__, _mySummaryTable__WEBPACK_IMPORTED_MODULE_6__, _myTradesTable__WEBPACK_IMPORTED_MODULE_7__, _myTransactionsTable__WEBPACK_IMPORTED_MODULE_8__]);
([_currencyExchange__WEBPACK_IMPORTED_MODULE_5__, _mySummaryTable__WEBPACK_IMPORTED_MODULE_6__, _myTradesTable__WEBPACK_IMPORTED_MODULE_7__, _myTransactionsTable__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// @ts-nocheck








const Bar = (props)=>{
    const store = _stores_moneyPageStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const options = [
        {
            name: 'My Transactions',
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myTransactionsTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                creatorType: "User"
            })
        },
        {
            name: 'Summary',
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mySummaryTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        },
        {
            name: 'Convert/Trade Currency',
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_currencyExchange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        },
        {
            name: 'Trade Items',
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myTradesTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        }, 
    ].filter((v)=>!!v
    );
    if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('moneyPagePromotionTabVisible', false)) {
        options.push({
            name: 'Promotion',
            element: null
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldVerticalTabs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                default: store.tab,
                onChange: (newTab)=>{
                    store.setTab(newTab.name);
                    const newUrl = store.getUrl(newTab.name);
                    if (window.location.pathname !== newUrl) {
                        window.location.href = newUrl;
                    }
                },
                options: options
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7665);
/* harmony import */ var _oldModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1952);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2028);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7378);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5185);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _services_economy__WEBPACK_IMPORTED_MODULE_7__]);
([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _services_economy__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NewPositionModal = (props)=>{
    const store = _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const btnStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { 0: isMarketOrder , 1: setIsMarketOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    /*   const [rate, setRate] = useState(0); */ const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { 0: currency , 1: setCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2);
    const { 0: amountWanted , 1: setAmountWanted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    // why does this keep getting set to NaN?
    //  idk tbh so just hard code for now
    const rate = currency === 1 ? 10 : 0.1;
    /*   useEffect(() => {
    let amtInt = parseInt(amount, 10);
    let rawRate = amountWanted / amtInt;
    if (rawRate !== 0)
      setRate(rawRate);
  }, [amount, amountWanted, currency]);

  useEffect(() => {
    if (isMarketOrder && store.statistics) {
      // market average is too small to be useful right now, just use hard coded
      const averageRate = currency === 1 ? 10 : 0.1;
      console.log('avg rate', averageRate);
      setRate(averageRate);
    }
  }, [store.statistics, isMarketOrder, currency]);
  */ if (!store.newPositionVisible) return null;
    console.log('amt', amount, 'at rate', rate);
    const estimatedReturn = amount ? Math.trunc(parseInt(amount, 10) * rate) : 0;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_oldModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: store.isConvertMode ? 'Convert Currency' : 'Trade Currency',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                className: "w-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                    children: [
                        !store.isConvertMode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "text-end fw-bolder pe-2",
                                    children: "Trade Type:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                disabled: locked,
                                                type: "radio",
                                                checked: isMarketOrder,
                                                onChange: (e)=>{
                                                    setIsMarketOrder(true);
                                                    setFeedback(null);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block pe-2",
                                            children: "Market Order"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                disabled: locked,
                                                type: "radio",
                                                checked: !isMarketOrder,
                                                onChange: (e)=>{
                                                    setIsMarketOrder(false);
                                                    setFeedback(null);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block",
                                            children: "Limit Order"
                                        })
                                    ]
                                })
                            ]
                        }),
                        store.isConvertMode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "text-end fw-bolder pe-2",
                                    children: "Convert Type:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                disabled: locked,
                                                type: "radio",
                                                checked: isMarketOrder,
                                                onChange: (e)=>{
                                                    setIsMarketOrder(true);
                                                    setFeedback(null);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-inline-block pe-2",
                                            children: "Convert"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: 'text-end fw-bolder pe-2',
                                    children: "What I'll give"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            disabled: locked,
                                            type: "text",
                                            value: amount,
                                            onChange: (e)=>{
                                                setAmount(e.currentTarget.value);
                                                setFeedback(null);
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            disabled: locked,
                                            value: currency,
                                            onChange: (v)=>{
                                                setCurrency(parseInt(v.currentTarget.value, 10));
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: 1,
                                                    children: "Robux"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: 2,
                                                    children: "Tickets"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        store.isConvertMode || isMarketOrder ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: 'text-end fw-bolder pe-2',
                                    children: "What I'll get"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: feedback ? null : currency === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        children: estimatedReturn ? estimatedReturn : '-'
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        children: estimatedReturn ? estimatedReturn : '-'
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: 'text-end fw-bolder pe-2',
                                    children: "What I want"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            disabled: locked,
                                            value: amountWanted,
                                            type: "text",
                                            onChange: (e)=>{
                                                let num = parseInt(e.currentTarget.value, 10);
                                                setAmountWanted(isNaN(num) ? 0 : num);
                                                setFeedback(null);
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            value: currency === 1 ? 2 : 1,
                                            disabled: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: 1,
                                                    children: "Robux"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: 2,
                                                    children: "Tickets"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            feedback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-danger text-center mb-0",
                children: feedback
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0",
                children: " "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-4 offset-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            disabled: locked,
                            className: btnStyles.buyButton,
                            label: store.isConvertMode ? 'Convert' : 'Trade',
                            onClick: (e1)=>{
                                setFeedback(null);
                                let amt = parseInt(amount, 10);
                                if (isNaN(amt) || !Number.isSafeInteger(amt)) {
                                    setFeedback('Invalid amount');
                                    return;
                                }
                                if (isNaN(rate)) {
                                    setFeedback('Invalid rate');
                                    return;
                                }
                                setLocked(true);
                                const orderFunction = store.isConvertMode ? _services_economy__WEBPACK_IMPORTED_MODULE_7__/* .createCurrencyExchangeOrder */ .sA : _services_economy__WEBPACK_IMPORTED_MODULE_7__/* .createCurrencyExchangeOrderREAL */ .Ai;
                                orderFunction({
                                    currency,
                                    desiredRate: isMarketOrder ? amt : Math.ceil(rate * 1000),
                                    isMarketOrder,
                                    amount: amt
                                }).then(()=>{
                                    window.location.reload();
                                }).catch((e)=>{
                                    setFeedback(e.message);
                                }).finally(()=>{
                                    setLocked(false);
                                });
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            disabled: locked,
                            className: btnStyles.cancelButton,
                            label: "Cancel",
                            onClick: ()=>{
                                store.setNewPositionVisible(false);
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-0 pt-2",
                children: [
                    "Your money will be held for safe-keeping until either the ",
                    store.isConvertMode ? 'conversion' : 'trade',
                    " executes or you cancel your position."
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPositionModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PositionsPaging = (props)=>{
    const { count , setStartId , startIdHistory , page , setPage , positions  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "text-center cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>{
                        if (page === 1) return;
                        setStartId(0);
                        setPage(1);
                    },
                    children: "First "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>{
                        if (page === 1) return;
                        setStartId(startIdHistory.current[page - 1]);
                        setPage(page - 1);
                    },
                    children: "Previous "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: ()=>{
                        if (!positions.length || positions.length < 20) return;
                        setStartId(startIdHistory.current[page + 1]);
                        setPage(page + 1);
                    },
                    children: "Next "
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionsPaging);


/***/ }),

/***/ 7537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7665);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5185);
/* harmony import */ var _positionsPaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6326);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _services_economy__WEBPACK_IMPORTED_MODULE_4__, _table__WEBPACK_IMPORTED_MODULE_6__]);
([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _services_economy__WEBPACK_IMPORTED_MODULE_4__, _table__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Side = ({ children , title  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "fw-bolder mb-0",
                children: title
            }),
            children
        ]
    }));
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    main: {
        borderTop: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        marginTop: '52px'
    }
});
const PositionsTab = (props)=>{
    const { currency  } = props;
    const store = _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: positions , 1: setPositions  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: startId , 1: setStartId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const startIdHistory = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({}); // map of page number to start id
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setCount(null);
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_4__/* .countOpenPositions */ ._A)({
            currency
        }).then((c)=>{
            setCount(c);
        });
    }, [
        currency
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (count === null || count <= 0) return;
        startIdHistory.current[page] = page === 1 ? 0 : positions[0].id;
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_4__/* .getOpenPositions */ .sl)({
            startId: startIdHistory.current[page],
            limit: 1,
            currency
        }).then((data)=>{
            if (data.data.length) startIdHistory.current[page + 1] = data.data[0].id;
            setPositions(data.data);
        });
    }, [
        page,
        count
    ]);
    if (!store.statistics) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: 'col-8 ' + s.main,
                    children: [
                        count === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-center mt-4",
                            children: [
                                "You do not have any open ",
                                currency === 1 ? 'ROBUX' : 'TIX',
                                " trades."
                            ]
                        }) : positions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_table__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ad: false,
                            keys: [
                                'Offer',
                                'Remainder',
                                'Action'
                            ],
                            entries: positions.map((v)=>{
                                let rate = v.exchangeRate / 1000;
                                let rateStr = '@ 1:' + v.exchangeRate / 1000;
                                if (rate < 1) {
                                    let reversedRate = (1 / rate).toFixed(3);
                                    rateStr = '@ ' + reversedRate + ':1';
                                }
                                return [
                                    v.startAmount + ' ' + (v.sourceCurrency === 'Robux' ? 'RS' : 'TX') + ' ' + rateStr,
                                    v.balance.toLocaleString(),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            onClick: ()=>{
                                                (0,_services_economy__WEBPACK_IMPORTED_MODULE_4__/* .closePosition */ .R5)({
                                                    orderId: v.id
                                                }).then(()=>{
                                                    setPositions(positions.filter((c)=>c.id !== v.id
                                                    ));
                                                }).catch((e)=>{
                                                //todo: feedback?
                                                });
                                            },
                                            children: "Cancel"
                                        })
                                    })
                                ];
                            })
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_positionsPaging__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            positions: positions,
                            count: count,
                            setStartId: setStartId,
                            startIdHistory: startIdHistory,
                            page: page,
                            setPage: setPage
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "Pair",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "BUX/TIX"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "Spread",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: (store.statistics.average.robuxToTickets - store.statistics.average.ticketsToRobux) / 1000
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "Available Tickets",
                                        children: store.statistics.positions.tickets.map((v)=>{
                                            let rate = v.rate / 1000;
                                            let str = '@ ' + rate.toFixed(3) + ':1';
                                            if (rate < 1) {
                                                str = '@ 1:' + (1 / rate).toFixed(3);
                                            }
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-0",
                                                children: [
                                                    v.amount,
                                                    " ",
                                                    str
                                                ]
                                            }, v.rate + ' ' + v.amount));
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "Rate",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                store.statistics.average.robuxToTickets / 1000,
                                                "/",
                                                store.statistics.average.ticketsToRobux / 1000
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "High/Low",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                store.statistics.high.robuxToTickets / 1000,
                                                "/",
                                                store.statistics.low.robuxToTickets / 1000
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Side, {
                                        title: "Available Robux",
                                        children: store.statistics.positions.robux.map((v)=>{
                                            let rate = v.rate / 1000;
                                            let str = '@ ' + rate.toFixed(3) + ':1';
                                            if (rate < 0) {
                                                rate = 1 / rate;
                                                str = '@ 1:' + rate.toFixed(3);
                                            }
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-0",
                                                children: [
                                                    v.amount,
                                                    " ",
                                                    str
                                                ]
                                            }, v.rate + ' ' + v.amount));
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositionsTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7378);
/* harmony import */ var _verticalSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1068);
/* harmony import */ var _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7665);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_3__]);
_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TabSelector = (props)=>{
    const store = _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const btnStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex mb-2",
                style: {
                    gap: '10px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: btnStyles.buyButton,
                        label: "Convert",
                        onClick: ()=>{
                            store.setIsConvertMode(true);
                            store.setNewPositionVisible(true);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: btnStyles.buyButton,
                        label: "Trade",
                        onClick: ()=>{
                            store.setIsConvertMode(false);
                            store.setNewPositionVisible(true);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_verticalSelector__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                selected: store.tab,
                options: [
                    {
                        name: 'My R$ Positions',
                        url: '#',
                        onClick: (v)=>{
                            store.setTab('My R$ Positions');
                        }
                    },
                    {
                        name: 'My TX Positions',
                        url: '#',
                        onClick: (v)=>{
                            store.setTab('My TX Positions');
                        }
                    }, 
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabSelector);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7665);
/* harmony import */ var _components_positionsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _components_positionsTab__WEBPACK_IMPORTED_MODULE_2__]);
([_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__, _components_positionsTab__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Container = (props)=>{
    const store = _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    if (store.tab === 'My R$ Positions' || store.tab === 'My TX Positions') {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_positionsTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            currency: store.tab === 'My R$ Positions' ? 1 : 2
        }));
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tabSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5671);
/* harmony import */ var _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7665);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7721);
/* harmony import */ var _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9002);
/* harmony import */ var _components_newPositionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_tabSelector__WEBPACK_IMPORTED_MODULE_1__, _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_2__, _container__WEBPACK_IMPORTED_MODULE_3__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__, _components_newPositionModal__WEBPACK_IMPORTED_MODULE_5__]);
([_components_tabSelector__WEBPACK_IMPORTED_MODULE_1__, _stores_exchangeStore__WEBPACK_IMPORTED_MODULE_2__, _container__WEBPACK_IMPORTED_MODULE_3__, _userAdvertisement__WEBPACK_IMPORTED_MODULE_4__, _components_newPositionModal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CurrencyExchange = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 mb-3 mt-3",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_stores_exchangeStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_newPositionModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tabSelector__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userAdvertisement__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: 2
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyExchange);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7665:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_economy__WEBPACK_IMPORTED_MODULE_2__]);
_services_economy__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ExchangeStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('My R$ Positions');
    const { 0: newPositionVisible , 1: setNewPositionVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: statistics , 1: setStatistics  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isConvertMode , 1: setIsConvertMode  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_2__/* .getMarketActivity */ ._C)().then((d)=>{
            setStatistics(d);
        });
    }, []);
    return {
        tab,
        setTab,
        newPositionVisible,
        setNewPositionVisible,
        statistics,
        setStatistics,
        isConvertMode,
        setIsConvertMode
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExchangeStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9149:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _services_economy__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _table__WEBPACK_IMPORTED_MODULE_9__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_4__, _services_economy__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _table__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    inline: {
        display: 'inline-block'
    },
    robuxTotal: {
        textAlign: 'right'
    }
});
const MySummaryTable = (props)=>{
    const s = useStyles();
    const { 0: period , 1: setPeriod  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('day');
    const { 0: entries , 1: setEntries  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: response , 1: setResponse  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth.isPending) return;
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_5__/* .getTransactionSummary */ .IG)({
            timePeriod: period,
            userId: auth.userId
        }).then((values)=>{
            setEntries((0,_services_economy__WEBPACK_IMPORTED_MODULE_5__/* .formatSummaryResponse */ ._2)(values));
            setResponse(values);
        });
    }, [
        auth.userId,
        auth.isPending,
        period
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 mb-3 mt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-0 fw-700 lighten-1 pe-2",
                            children: "Time Period: "
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.inline,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            value: period,
                            onChange: (e)=>{
                                setPeriod(e.currentTarget.value);
                                setEntries(null);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "day",
                                    children: "Past Day"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "week",
                                    children: "Past Week"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "month",
                                    children: "Past Month"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "year",
                                    children: "Past Year"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0 fw-600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            inline: true
                        }),
                        " Robux"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_table__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    keys: [
                        'Categories',
                        'Credit', 
                    ],
                    entries: entries,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: s.robuxTotal + ' fw-600 mt-2',
                        children: [
                            "TOTAL: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogDetailsPage_components_robux__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                inline: true,
                                children: response && response.incomingRobuxTotal.toLocaleString()
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySummaryTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2431:
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
/* harmony import */ var _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1107);
/* harmony import */ var _stores_moneyPageStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1157);
/* harmony import */ var _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7982);
/* harmony import */ var _tradeEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5997);
/* harmony import */ var _tradeModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__, _tradeEntry__WEBPACK_IMPORTED_MODULE_7__, _tradeModal__WEBPACK_IMPORTED_MODULE_8__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__, _tradeEntry__WEBPACK_IMPORTED_MODULE_7__, _tradeModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    tradeTypeActions: {
        display: 'inline-block'
    },
    table: {
        width: '100%'
    },
    tableHead: {
        borderTop: '1px solid #b9b9b9',
        borderBottom: '2px solid #e3e3e3',
        background: '#f1f1f1'
    },
    tableHeadLabel: {
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '5px',
        color: '#5d5a5b'
    },
    tableHeadBorder: {
        borderRight: '2px solid #e1e1e1'
    },
    tableAction: {
        width: '60px'
    },
    feedbackWrapper: {
        border: '2px solid #839ec3',
        background: '#e6eefa',
        padding: '8px',
        marginBottom: '10px'
    }
});
const MyTradesTable = (props)=>{
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const trades = _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mt-2",
        children: [
            trades.selectedTrade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 col-lg-10",
                children: [
                    trades.feedback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.feedbackWrapper,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-0",
                                    children: trades.feedback
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: s.tradeTypeActions + ' fw-700 lighten-3',
                                    children: "Trade Type: "
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: s.tradeTypeActions + ' ms-2',
                                    value: trades.tradeType,
                                    onChange: (e)=>{
                                        trades.setTradeType(e.currentTarget.value);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                            value: "inbound",
                                            children: [
                                                "Inbound (",
                                                auth.notificationCount.trades,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "outbound",
                                            children: "Outbound"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "completed",
                                            children: "Completed"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "inactive",
                                            children: "Inactive"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: s.tradeTypeActions + ' ms-2',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://help.roblox.com",
                                        children: "How do I send a trade?"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: s.table,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: s.tableHead,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: s.tableHeadLabel + ' ' + s.tableHeadBorder,
                                                        children: "Date"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: s.tableHeadLabel + ' ' + s.tableHeadBorder,
                                                        children: "Expires"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: s.tableHeadLabel + ' ' + s.tableHeadBorder,
                                                        children: "Trade Partner"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: s.tableHeadLabel + ' ' + s.tableHeadBorder,
                                                        children: "Status"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: s.tableHeadLabel + ' ' + s.tableAction,
                                                        children: "Action"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: trades.trades && trades.trades.data.map((v)=>{
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeEntry__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    ...v
                                                }, v.id));
                                            })
                                        })
                                    ]
                                }),
                                trades.trades && trades.trades.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-4 text-center",
                                    children: "No trades available"
                                }) : null
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adSkyscraper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    context: "MyTrades"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTradesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9375);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9979);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7378);
/* harmony import */ var _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7982);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_trades__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__]);
([_services_trades__WEBPACK_IMPORTED_MODULE_2__, _stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const acceptFeedbackMessage = `You have accepted {username}'s trade request. The trade is now being processed by our system.`;
const useTradeButtonStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    acceptWrapper: {
        width: '125px',
        margin: '0 auto',
        display: 'block'
    },
    acceptButton: {
        paddingTop: '6px',
        paddingBottom: '6px',
        fontSize: '24px'
    }
});
const TradeButtons = (props)=>{
    const { trade  } = props;
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const tradeStore = _stores_tradeStore__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const s = useTradeButtonStyles();
    const buttonStyles = (0,_styles_buttonStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const canAccept = trade.status === 'Open' && trade.user.id !== auth.userId;
    const canDecline = canAccept || trade.user.id === auth.userId;
    const canCounter = canAccept;
    const canOk = !canAccept;
    const labelDecline = canAccept ? 'Decline' : 'Cancel';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row mt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-8 offset-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row mx-auto",
                children: [
                    canOk && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'col-4 mx-auto',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "OK",
                            className: buttonStyles.continueButton + ' ' + s.acceptButton,
                            onClick: ()=>{
                                tradeStore.setSelectedTrade(null);
                            }
                        })
                    }),
                    canAccept && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'col-4 mx-auto',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "Accept",
                            className: buttonStyles.continueButton + ' ' + s.acceptButton,
                            onClick: ()=>{
                                tradeStore.setSelectedTrade(null);
                                (0,_services_trades__WEBPACK_IMPORTED_MODULE_2__/* .acceptTrade */ .V)({
                                    tradeId: trade.id
                                }).then(()=>{
                                    tradeStore.setFeedback(acceptFeedbackMessage.replace(/{username}/g, trade.user.name));
                                    tradeStore.refershTrades();
                                }).catch((e)=>{
                                    tradeStore.setFeedback('Could not accept ' + trade.user.name + '\'s trade. Please try again.');
                                });
                            }
                        })
                    }),
                    canCounter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'col-4 mx-auto ps-0 pe-0',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: "Counter",
                            className: buttonStyles.continueButton + ' ' + s.acceptButton,
                            onClick: ()=>{
                                window.open("/Trade/TradeWindow.aspx?TradeSessionId=" + trade.id + "&TradePartnerID=" + trade.user.id, "_blank", "scrollbars=0, height=608, width=914");
                            }
                        })
                    }),
                    canDecline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'col-4 mx-auto',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_actionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            label: labelDecline,
                            className: buttonStyles.cancelButton + ' ' + s.acceptButton,
                            onClick: ()=>{
                                tradeStore.setFeedback(null);
                                tradeStore.setSelectedTrade(null);
                                (0,_services_trades__WEBPACK_IMPORTED_MODULE_2__/* .declineTrade */ .x4)({
                                    tradeId: trade.id
                                }).then(()=>{
                                    tradeStore.refershTrades();
                                });
                            }
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeButtons);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8379);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_getStatusText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1100);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9767);
/* harmony import */ var _stores_tradeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7982);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_playerHeadshot__WEBPACK_IMPORTED_MODULE_3__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__]);
([_playerHeadshot__WEBPACK_IMPORTED_MODULE_3__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    row: {},
    td: {
        paddingTop: '10px',
        paddingBottom: '6px',
        paddingLeft: '5px',
        borderBottom: '1px solid #e3e3e3'
    },
    block: {
        display: 'inline-block'
    },
    image: {
        borderRadius: '50%',
        border: '1px solid #c3c3c3',
        maxWidth: '30px'
    },
    senderName: {
        position: 'relative',
        top: '-10px',
        marginBottom: 0,
        left: '4px'
    },
    viewDetails: {
        cursor: 'pointer'
    },
    imageBorder: {
        borderRadius: '100%',
        overflow: 'hidden'
    }
});
const TradeEntry = (props)=>{
    const trades = _stores_tradeStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const sender = props.user;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: s.row,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: s.td,
                children: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.created).format('M/D/YY')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: s.td,
                children: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.expiration).format('M/D/YY')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: s.td,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.block + ' ' + s.imageBorder,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.image,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                id: sender.id,
                                name: sender.name
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: s.block,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.senderName,
                            children: sender.name
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: s.td,
                children: (0,_lib_getStatusText__WEBPACK_IMPORTED_MODULE_6__/* .getStatusText */ .l)(props, trades.tradeType, auth.userId)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: s.td,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `mb-0 ${s.viewDetails}`,
                    onClick: ()=>{
                        trades.setSelectedTrade(props);
                    },
                    children: "View Details"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2420:
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
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2028);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _itemImage__WEBPACK_IMPORTED_MODULE_5__]);
([_services_catalog__WEBPACK_IMPORTED_MODULE_3__, _itemImage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useTradeItemStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    col: {
        width: `calc(20% - 5px)`,
        border: '1px solid #c3c3c3',
        marginRight: '5px',
        padding: 0,
        height: '100px',
        zIndex: 99
    },
    expandedCol: {
        transform: 'scale(1.3)',
        height: '125px',
        zIndex: 200,
        background: 'white',
        marginBottom: '-50px'
    },
    itemName: {
        height: 'auto',
        lineHeight: '1',
        overflow: 'hidden',
        fontSize: '12px',
        textAlign: 'center'
    },
    expandedItemName: {
        fontSize: '9px'
    },
    imageWrapper: {
        width: '80px',
        height: '80px',
        margin: '0 auto',
        display: 'block'
    }
});
const useTradeLabelStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    rapText: {
        fontSize: '8px',
        fontWeight: 700,
        color: '#777',
        letterSpacing: -0.1,
        paddingLeft: '4px',
        marginBottom: '4px'
    },
    robux: {
        color: '#060',
        letterSpacing: -0.1
    },
    robuxWrapper: {
        display: 'inline'
    },
    robuxIcon: {
        height: '8px',
        width: '12px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 0 0 4px'
    },
    serialText: {
        marginTop: '-14px'
    }
});
const TradeLabelWithRobux = (props)=>{
    const s = useTradeLabelStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: s.rapText,
        children: [
            props.name,
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: s.robuxIcon,
                src: "/img/img-robux.png"
            }),
            " ",
            props.amount || '-'
        ]
    }));
};
const TradeItem = (props)=>{
    const s = useTradeItemStyles();
    const labelStyles = useTradeLabelStyles();
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: expanded ? s.expandedCol + ' ' + s.col : s.col,
        onMouseEnter: ()=>{
            if (!props.name) return;
            setExpanded(true);
        },
        onMouseLeave: ()=>{
            setExpanded(false);
        },
        children: [
            props.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: `text-truncate ${s.itemName} ${expanded ? s.expandedItemName : ''} mb-0 ps-1 pe-1`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
                        assetId: props.assetId,
                        name: props.name
                    }),
                    children: props.name
                })
            }),
            props.robux && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: `text-center`,
                children: [
                    props.robux,
                    " Robux"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: s.imageWrapper,
                children: [
                    props.robux && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/img-robux.png",
                        alt: "Robux Image"
                    }),
                    props.assetId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "pt-1",
                        id: props.assetId
                    })
                ]
            }),
            expanded && props.serialNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: labelStyles.rapText + ' ' + labelStyles.serialText,
                children: [
                    "#",
                    props.serialNumber,
                    "/",
                    props.assetStock || '-'
                ]
            }),
            expanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeLabelWithRobux, {
                name: "Avg. Price: ",
                amount: props.recentAveragePrice
            }),
            expanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeLabelWithRobux, {
                name: "Orig. Price: ",
                amount: props.originalPrice
            })
        ]
    }));
};
const TradeItemRow = ({ items , robux  })=>{
    let placeholders = 5 - items.length;
    if (robux) {
        placeholders--;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row ms-1 mb-4",
        children: [
            items.map((v)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeItem, {
                    ...v
                }, v.id));
            }),
            robux && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeItem, {
                robux: robux
            }),
            [
                ...new Array(placeholders)
            ].map((v, i)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeItem, {}, `placeholder ${i}`));
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeItemRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9375);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2316);
/* harmony import */ var _oldModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1952);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9767);
/* harmony import */ var _stores_tradeStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7982);
/* harmony import */ var _tradeButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1018);
/* harmony import */ var _tradeOfferEntry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6478);
/* harmony import */ var _bcOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_trades__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _creatorLink__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_9__, _tradeButtons__WEBPACK_IMPORTED_MODULE_10__, _tradeOfferEntry__WEBPACK_IMPORTED_MODULE_11__, _bcOverlay__WEBPACK_IMPORTED_MODULE_12__]);
([_services_trades__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _creatorLink__WEBPACK_IMPORTED_MODULE_6__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_8__, _stores_tradeStore__WEBPACK_IMPORTED_MODULE_9__, _tradeButtons__WEBPACK_IMPORTED_MODULE_10__, _tradeOfferEntry__WEBPACK_IMPORTED_MODULE_11__, _bcOverlay__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const TradeBelowNameText = (props)=>{
    const state = props.status;
    switch(state){
        case 'Open':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "Trade with ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                id: props.user.id,
                                name: props.user.name,
                                type: "User"
                            }),
                            " has been opened."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "font-size-12 fw-700 lighten-3 mb-0",
                        children: [
                            "Expires ",
                            dayjs__WEBPACK_IMPORTED_MODULE_2___default()(props.expiration).fromNow()
                        ]
                    })
                ]
            }));
        case 'Pending':
        case 'Expired':
        case 'Finished':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    "Trade with ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        id: props.user.id,
                        name: props.user.name,
                        type: "User"
                    }),
                    " is ",
                    state
                ]
            }));
        default:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    "Trade with ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        id: props.user.id,
                        name: props.user.name,
                        type: "User"
                    }),
                    " was ",
                    state,
                    "!"
                ]
            }));
    }
};
const TradeModal = (props)=>{
    const { /*#__PURE__*/ 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: authenticatedOffer , 1: setAuthenticatedOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: otherOffer , 1: setOtherOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const trades = _stores_tradeStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useContainer */ .Z.useContainer();
    const trade = trades.selectedTrade;
    const labelGiving = trade.status === 'Open' ? 'ITEMS YOU WILL GIVE' : trade.status === 'Inactive' || trade.status === 'Declined' || trade.status === 'Countered' ? 'ITEMS YOU WOULD GIVEN' : 'ITEMS YOU GAVE';
    const labelReceiving = trade.status === 'Open' ? 'ITEMS YOU WILL RECEIVE' : trade.status === 'Inactive' || trade.status === 'Declined' || trade.status === 'Countered' ? 'ITEMS YOU WOULD HAVE RECEIVED' : 'ITEMS YOU RECEIVED';
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (auth.userId === null) return null;
        setDetails(null);
        (0,_services_trades__WEBPACK_IMPORTED_MODULE_4__/* .getTradeDetails */ .Hh)({
            tradeId: trade.id
        }).then((data)=>{
            setDetails(data);
            setAuthenticatedOffer(data.offers.find((v)=>v.user.id === auth.userId
            ));
            setOtherOffer(data.offers.find((v)=>v.user.id !== auth.userId
            ));
        });
    }, [
        trade
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-483840e2f5fc5f3f" + " " + "trademodal",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                showClose: true,
                title: "Trade Request",
                height: 425,
                width: 700,
                onClose: ()=>{
                    trades.setSelectedTrade(null);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-483840e2f5fc5f3f" + " " + 'row pt-3 pb-3 ps-4 pe-0',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-483840e2f5fc5f3f" + " " + 'col-3 divider-right',
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    id: trade.user.id,
                                    name: trade.user.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bcOverlay__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    id: trade.user.id
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-483840e2f5fc5f3f" + " " + 'mb-0 font-size-15 fw-700 text-center',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TradeBelowNameText, {
                                        ...trade
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-483840e2f5fc5f3f" + " " + 'col-9',
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeOfferEntry__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    label: labelGiving,
                                    offer: authenticatedOffer
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-483840e2f5fc5f3f" + " " + 'row',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-483840e2f5fc5f3f" + " " + 'col-12 divider-top mb-2'
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeOfferEntry__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    label: labelReceiving,
                                    offer: otherOffer
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-483840e2f5fc5f3f" + " " + 'col-12',
                            children: otherOffer && authenticatedOffer && details ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeButtons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                trade: details
                            }) : null
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "483840e2f5fc5f3f",
                children: "@media (max-width:768px) {.trademodal.jsx-483840e2f5fc5f3f{position:fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-transform:scale(0.8);\n-moz-transform:scale(0.8);\n-ms-transform:scale(0.8);\ntransform:scale(0.8);\ntransform-origin:center;\nz-index:1000}}"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradeItemRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tradeItemRow__WEBPACK_IMPORTED_MODULE_2__]);
_tradeItemRow__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    value: {
        float: 'right',
        fontSize: '12px'
    },
    valueLabel: {
        fontWeight: 700,
        paddingRight: '4px'
    },
    robuxIconLg: {
        height: '10px',
        width: '14px',
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 2px 0 0'
    },
    robuxLabel: {
        fontWeight: 700,
        color: '#1a931a'
    }
});
const TradeOfferEntry = (props)=>{
    const s = useStyles();
    const { label , offer  } = props;
    const valueInRobux = offer && offer.userAssets.map((v)=>v.recentAveragePrice
    ).reduce((a, b)=>a + b
    , 0) || 0;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "fw-700 font-size-15",
                            children: label
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: s.value,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: s.valueLabel,
                                    children: "Value:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: s.robuxIconLg,
                                    src: "/img/img-robux.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: s.robuxLabel,
                                    children: valueInRobux
                                })
                            ]
                        })
                    })
                ]
            }),
            offer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tradeItemRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                items: offer.userAssets,
                robux: offer.robux
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeOfferEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9043:
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
/* harmony import */ var _components_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9352);
/* harmony import */ var _stores_moneyPageStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_bar__WEBPACK_IMPORTED_MODULE_4__]);
([_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_bar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// reference: https://www.youtube.com/watch?v=Fge61b89IVM





const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    moneyContainer: {
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: '2px 4px'
    }
});
const MyMoney = (props)=>{
    const s = useStyles();
    const store = _stores_moneyPageStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // There are two types: 'Trades' and 'Money'
        store.setTab(props.type);
    }, [
        props.type
    ]);
    if (!store.tab) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.moneyContainer,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyMoney);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getStatusText)
/* harmony export */ });
const getStatusText = (tradeData, tradeType, authenticatedUserId)=>{
    switch(tradeData.status){
        case 'Open':
            if (tradeData.user.id === authenticatedUserId || tradeType === 'outbound' || tradeType === 'sent') {
                let otherUser;
                if (tradeData.offers) {
                    otherUser = tradeData.offers.find((v)=>v.user.id !== authenticatedUserId
                    );
                } else {
                    otherUser = tradeData;
                }
                return 'Pending approval from ' + otherUser.user.name;
            }
            return 'Pending approval from you';
        default:
            return tradeData.status;
    }
};


/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


const MoneyPageStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: tab1 , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return {
        tab: tab1,
        setTab,
        getUrl: (tab)=>{
            switch(tab){
                case 'Trade Items':
                    return '/My/Trades.aspx';
                default:
                    return '/My/Money.aspx';
            }
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyPageStore);


/***/ }),

/***/ 7982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_trades__WEBPACK_IMPORTED_MODULE_2__]);
_services_trades__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TradeStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: feedback , 1: setFeedback  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: trades , 1: setTrades  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: tradeType , 1: setTradeType  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('inbound');
    const { 0: cursor , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: selectedTrade , 1: setSelectedTrade  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: refresh , 1: setRefresh  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setFeedback(null);
        setTrades(null);
        setCursor(null);
        setSelectedTrade(null);
        (0,_services_trades__WEBPACK_IMPORTED_MODULE_2__/* .getMyTrades */ .$X)({
            cursor: null,
            tradeType
        }).then(setTrades);
    }, [
        tradeType,
        refresh
    ]);
    return {
        trades,
        setTrades,
        tradeType,
        setTradeType,
        selectedTrade,
        setSelectedTrade,
        feedback,
        setFeedback,
        refershTrades: ()=>{
            (0,_services_trades__WEBPACK_IMPORTED_MODULE_2__/* .getMyTrades */ .$X)({
                cursor: null,
                tradeType
            }).then(setTrades);
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeStore);

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