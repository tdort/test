"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 5854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropdown2016__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7516);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4008);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2300);
/* harmony import */ var _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9406);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_5__]);
_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    categoryTitle: {
        fontWeight: 300,
        fontSize: '24px'
    },
    categoryBgDesktop: {
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(150,150,150,0.75)'
    },
    selectorOptionSelected: {
        color: 'rgb(0, 162, 255)',
        borderRight: '4px solid rgb(0, 162, 255)'
    },
    selectorOption: {
        cursor: 'pointer',
        marginLeft: '1rem',
        paddingBottom: '0.5rem',
        paddingTop: '0.5rem',
        fontWeight: '300',
        fontSize: '18px',
        '&:hover': {
            color: 'rgb(0, 162, 255)',
            borderRight: '4px solid rgb(0, 162, 255)'
        }
    },
    childSelector: {
        position: 'absolute',
        width: '140px',
        marginTop: '-35px',
        marginLeft: '143px',
        zIndex: 4
    }
});
const CategorySelection = (props)=>{
    const s = useStyles();
    const store = _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const options = [
        {
            name: 'Heads',
            value: 17
        },
        {
            name: 'Faces',
            value: 18
        },
        {
            name: 'Gears',
            value: 19
        },
        (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('accessoriesEnabled', false) ? {
            name: 'Accessories',
            value: 'Accessories',
            children: [
                {
                    name: 'Hats',
                    value: 8
                },
                {
                    name: 'Hair',
                    value: 41
                },
                {
                    name: 'Face',
                    value: 42
                },
                {
                    name: 'Neck',
                    value: 43
                },
                {
                    name: 'Shoulder',
                    value: 44
                },
                {
                    name: 'Front',
                    value: 45
                },
                {
                    name: 'Back',
                    value: 46
                },
                {
                    name: 'Waist',
                    value: 47
                }, 
            ]
        } : {
            name: 'Hats',
            value: 8
        },
        {
            name: 'Hair',
            value: 41
        },
        {
            name: 'Face',
            value: 42
        },
        {
            name: 'Neck',
            value: 43
        },
        {
            name: 'Shoulder',
            value: 44
        },
        {
            name: 'Front',
            value: 45
        },
        {
            name: 'Back',
            value: 46
        },
        {
            name: 'Waist',
            value: 47
        },
        {
            name: 'T-Shirts',
            value: 2
        },
        {
            name: 'Shirts',
            value: 11
        },
        {
            name: 'Pants',
            value: 12
        },
        {
            name: 'Torsos',
            value: 27
        },
        (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('packagesEnabled', true) && {
            name: 'Packages',
            value: 32
        },
        {
            name: 'Badges',
            value: 21
        },
        {
            name: 'Game Passes',
            value: 34
        }, 
    ].filter((v)=>!!v
    );
    const { 0: selected1 , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(()=>{
        // On first load, hide menu if user is on desktop.
        // This is so that the Accessory side menu doesn't show up.
        if (false) {}
        return options.find((v)=>v.value === ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('accessoriesEnabled', false) ? 'Accessories' : 8)
        );
    });
    const onChange = (v)=>{
        if (v.children) {
            setSelected(selected1 === v ? null : v);
            return;
        }
        store.setCategory(v);
    };
    const onChangeSubCategory = (v)=>{
        store.setCategory(v);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-12 col-lg-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-block d-lg-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: s.categoryTitle,
                        children: "CATEGORY"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selector__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        options: options,
                        onChange: onChange,
                        value: (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('accessoriesEnabled', false) ? 'Accessories' : 8
                    }),
                    selected1 && (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('accessoriesEnabled', false) && selected1.children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: s.categoryTitle,
                                children: "SUBCATEGORY"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selector__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                options: selected1.children,
                                onChange: onChangeSubCategory,
                                value: 8
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-none d-lg-block d-xl-block",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.categoryBgDesktop,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ps-3 pe-3 pt-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: s.categoryTitle,
                                children: "CATEGORY"
                            })
                        }),
                        options.map((v1)=>{
                            const catSelected = store.category.value === v1.value;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onMouseEnter: ()=>{
                                    setSelected(v1);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: (e)=>{
                                            onChange(v1);
                                        },
                                        className: s.selectorOption + ' ' + (catSelected ? s.selectorOptionSelected : ''),
                                        children: v1.name
                                    }, v1.value),
                                    selected1 && selected1.children && selected1.value === v1.value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: s.categoryBgDesktop + ' ' + s.childSelector,
                                        children: selected1.children.map((v)=>{
                                            const selected = store.category.value === v.value;
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onMouseLeave: ()=>{},
                                                onClick: (e)=>{
                                                    onChange(v);
                                                    setSelected(null);
                                                },
                                                className: s.selectorOption + ' ' + (selected ? s.selectorOptionSelected : ''),
                                                children: v.name
                                            }, v.value));
                                        })
                                    }) : null
                                ]
                            }, v1.value + v1.name));
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySelection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9406);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _categorySelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5854);
/* harmony import */ var _inventoryGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(141);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_2__, _categorySelection__WEBPACK_IMPORTED_MODULE_4__, _inventoryGrid__WEBPACK_IMPORTED_MODULE_5__, _services_users__WEBPACK_IMPORTED_MODULE_6__]);
([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_2__, _categorySelection__WEBPACK_IMPORTED_MODULE_4__, _inventoryGrid__WEBPACK_IMPORTED_MODULE_5__, _services_users__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    title: {
        fontSize: '48px',
        fontWeight: 300,
        color: 'rgb(25,25,25)'
    },
    container: {
        background: '#e3e3e3'
    }
});
const Container = (props)=>{
    var ref;
    const store = _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        store.setMode(props.mode);
        store.setUserId(props.userId);
        if (!props.userId) return;
        (0,_services_users__WEBPACK_IMPORTED_MODULE_6__/* .getUserInfo */ .bG)({
            userId: props.userId
        }).then((data)=>store.setUserInfo(data)
        );
        store.requestInventory(props.mode, props.userId, store.category.value, '');
    }, [
        props
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'container ' + s.container,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: s.title,
                        children: [
                            (ref = store.userInfo) === null || ref === void 0 ? void 0 : ref.name,
                            "'s ",
                            props.mode
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_categorySelection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inventoryGrid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9406);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inventoryItemEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6646);
/* harmony import */ var _paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__, _inventoryItemEntry__WEBPACK_IMPORTED_MODULE_3__, _paging__WEBPACK_IMPORTED_MODULE_4__]);
([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__, _inventoryItemEntry__WEBPACK_IMPORTED_MODULE_3__, _paging__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    categoryValue: {
        fontWeight: 300,
        fontSize: '24px'
    },
    showingLabel: {
        fontWeight: 400,
        color: '#757575'
    }
});
const InventoryGrid = (props)=>{
    var ref, ref1;
    const s = useStyles();
    const store = _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const myPage = store.data ? store.data.Page : null;
    const isEmpty = store.data && store.data.Items.length === 0 && !store.previousPageAvailable();
    const showPaging = store.data && !isEmpty;
    let total = store.data ? ((ref = store.data) === null || ref === void 0 ? void 0 : (ref1 = ref.TotalItems) === null || ref1 === void 0 ? void 0 : ref1.toLocaleString()) || 'many' : null; // roblox started returning "null" for TotalItems :(
    if (myPage === 1 && store.data.Items.length <= 24) {
        total = '1';
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 col-lg-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12 pe-1 ps-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: s.categoryValue,
                            children: store.category.name.toUpperCase()
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.showingLabel,
                            children: myPage ? `Showing ${myPage} to ${store.data.Items.length} of ${total}` : null
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: store.data ? store.data.Items.map((v)=>{
                                const isLimited = v.AssetRestrictionIcon.CssTag === 'limited';
                                const isLimitedUnique = v.AssetRestrictionIcon.CssTag === 'limited-unique';
                                const serialNumber = v.Product.SerialNumber;
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inventoryItemEntry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    id: v.Item.AssetId,
                                    name: v.Item.Name,
                                    creatorId: v.Creator.Id,
                                    creatorType: v.Creator.Type,
                                    creatorName: v.Creator.Name,
                                    isLimited: isLimited,
                                    isLimitedUnique: isLimitedUnique,
                                    serialNumber: serialNumber
                                }, v.Item.AssetId + ' ' + serialNumber));
                            }) : null
                        }),
                        isEmpty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center mt-4",
                            children: "Player does not have any items in this category."
                        }) : null,
                        showPaging ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paging__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : null
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _itemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1669);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5304);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_itemImage__WEBPACK_IMPORTED_MODULE_2__, _services_catalog__WEBPACK_IMPORTED_MODULE_3__]);
([_itemImage__WEBPACK_IMPORTED_MODULE_2__, _services_catalog__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    itemCard: {
        background: '#fff',
        padding: '4px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(150,150,150,0.75)',
        marginBottom: '1rem',
        '&:hover': {
            boxShadow: '0 1px 6px 0 #757575'
        },
        cursor: 'pointer'
    },
    serial: {
        background: '#000',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block',
        float: 'right',
        fontSize: '12px',
        marginTop: '10px',
        marginRight: '10px',
        marginBottom: '-34px',
        zIndex: '2',
        position: 'relative'
    },
    fakeLimitedLabel: {
        width: '100%',
        height: '16px',
        display: 'inline-block'
    },
    itemImage: {
        marginTop: '-20px',
        marginBottom: '-16px'
    },
    itemLabel: {
        fontWeight: '400',
        fontSize: '12px',
        color: 'rgb(25, 25, 25)',
        borderTop: '1px solid #f2f2f2',
        marginTop: '2px'
    },
    creatorLabel: {
        fontWeight: '400',
        fontSize: '12px',
        color: '#757575',
        marginTop: '2px'
    },
    creatorUrl: {
        color: 'rgb(25, 25, 25)'
    },
    column: {
        paddingLeft: '4px',
        paddingRight: '4px'
    }
});
const InventoryItemEntry = (props)=>{
    const s = useStyles();
    const { isLimited , isLimitedUnique , serialNumber  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'col-4 col-md-3 col-lg-2 ps-1 pe-1',
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemUrl */ .yz)({
                name: props.name,
                assetId: props.id
            }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.itemCard,
                    children: [
                        typeof serialNumber === 'number' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: s.serial,
                            children: [
                                "#",
                                serialNumber
                            ]
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.itemImage,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_itemImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: props.id
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: isLimitedUnique ? "icon-limited-unique-label" : isLimited ? "icon-limited-label" : s.fakeLimitedLabel
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.itemLabel + ' text-truncate',
                            children: props.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: s.creatorLabel + ' text-truncate',
                            children: [
                                "By ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: s.creatorUrl,
                                    href: props.creatorType === 1 ? `/users/${props.creatorId}/profile` : `/My/Groups.aspx?gid=${props.creatorId}`,
                                    children: props.creatorName
                                }),
                                " "
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryItemEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9406);
/* harmony import */ var _pagination2016__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__]);
_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const InventoryPaging = (props)=>{
    const store = _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    if (!store.data) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pagination2016__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        page: store.data.Page,
        totalItems: store.data.TotalItems,
        limit: store.limit,
        nextPageAvailable: store.nextPageAvailable,
        previousPageAvailable: store.previousPageAvailable,
        loadNextPage: store.loadNextPage,
        loadPreviousPage: store.loadPreviousPage
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryPaging);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9406);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6117);
/* harmony import */ var _theme2016__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__, _components_container__WEBPACK_IMPORTED_MODULE_2__]);
([_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__, _components_container__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const UserInventory = (props)=>{
    const { userId  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme2016__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stores_userInventoryStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Provider */ .Z.Provider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                userId: userId,
                mode: props.mode
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInventory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3766);
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8246);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_users__WEBPACK_IMPORTED_MODULE_2__, _services_inventory__WEBPACK_IMPORTED_MODULE_3__]);
([_services_users__WEBPACK_IMPORTED_MODULE_2__, _services_inventory__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const UserInventoryStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const limit = 24;
    const { 0: userId1 , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: category1 , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        name: 'Hats',
        value: 8
    });
    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: mode1 , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const requestInventory = (mode, userId, category, cursor)=>{
        const func = mode === 'Inventory' ? _services_inventory__WEBPACK_IMPORTED_MODULE_3__/* .getInventory */ .$v : _services_inventory__WEBPACK_IMPORTED_MODULE_3__/* .getFavorites */ ._l;
        func({
            userId,
            limit,
            cursor,
            assetTypeId: category
        }).then((data)=>{
            setData(data.Data);
        }).catch((e)=>{
            setError(e);
        });
    };
    return {
        userId: userId1,
        setUserId: (id)=>{
            setUserId(id);
            setUserInfo(null);
        },
        userInfo,
        setUserInfo,
        mode: mode1,
        setMode,
        error,
        setError,
        data: data1,
        limit,
        category: category1,
        setCategory: (newCategory)=>{
            setCategory(newCategory);
            setData(null);
            requestInventory(mode1, userId1, newCategory.value, '');
        },
        loadNextPage: ()=>{
            requestInventory(mode1, userId1, category1.value, data1.nextPageCursor);
        },
        loadPreviousPage: ()=>{
            requestInventory(mode1, userId1, category1.value, data1.previousPageCursor);
        },
        nextPageAvailable: ()=>{
            return data1 && data1.nextPageCursor !== null;
        },
        previousPageAvailable: ()=>{
            return data1 && data1.previousPageCursor !== null;
        },
        requestInventory
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInventoryStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;