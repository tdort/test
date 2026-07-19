(() => {
var exports = {};
exports.id = 3065;
exports.ids = [3065,2197];
exports.modules = {

/***/ 1970:
/***/ ((module) => {

// Exports
module.exports = {
	"legacyButton": "buttons_legacyButton__vUgL2",
	"delete": "buttons_delete__0IU7L"
};


/***/ }),

/***/ 2565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__]);
_stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    label: {
        fontSize: '13px',
        paddingLeft: '4px'
    },
    header: {
        fontWeight: 600,
        fontSize: '16px'
    },
    allGenres: {
        paddingLeft: '5px',
        fontWeight: 600,
        marginBottom: 0,
        paddingBottom: 0
    }
});
const GenreFilter = (props)=>{
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const genres = [
        {
            genre: 13,
            name: 'Building'
        },
        {
            genre: 5,
            name: 'Horror'
        },
        {
            genre: 1,
            name: 'Town and City'
        },
        {
            genre: 11,
            name: 'Military'
        },
        {
            genre: 9,
            name: 'Comedy'
        },
        {
            genre: 2,
            name: 'Medieval'
        },
        {
            genre: 7,
            name: 'Adventure'
        },
        {
            genre: 3,
            name: 'Sci-Fi'
        },
        {
            genre: 6,
            name: 'Naval'
        },
        {
            genre: 14,
            name: 'FPS'
        },
        {
            genre: 15,
            name: 'RPG'
        },
        {
            genre: 8,
            name: 'Sports'
        },
        {
            genre: 4,
            name: 'Fighting'
        },
        {
            genre: 10,
            name: 'Western'
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.header,
                children: "Genre"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.allGenres + ' cursor-pointer',
                onClick: ()=>{
                    store.setGenres([]);
                },
                children: "All Genres"
            }),
            genres.map((v)=>{
                const id = 'catalog_genre_fitler_' + v.genre;
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: id,
                            type: "checkbox",
                            checked: store.genres.includes(v.genre),
                            onChange: (c)=>{
                                if (c.currentTarget.checked === false) {
                                    store.setGenres(store.genres.filter((x)=>x !== v.genre
                                    ));
                                } else {
                                    store.setGenres([
                                        ...store.genres,
                                        v.genre
                                    ]);
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: id,
                            className: s.label,
                            children: v.name
                        })
                    ]
                }, id));
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenreFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _genreFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7580);
/* harmony import */ var _subcategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__, _genreFilter__WEBPACK_IMPORTED_MODULE_4__, _subcategory__WEBPACK_IMPORTED_MODULE_5__]);
([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__, _genreFilter__WEBPACK_IMPORTED_MODULE_4__, _subcategory__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useFilterStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    header: {
        paddingTop: '20px'
    }
});
const useClothingFilterStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    label: {
        fontSize: '15px',
        fontWeight: 600,
        paddingBottom: '5px'
    },
    subCategories: {
        paddingLeft: '5px'
    }
});
const ClothingFilter = (props)=>{
    const s = useClothingFilterStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: `mb-0 ${s.label}`,
                children: "Clothing Type"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.subCategories,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subcategory__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    subCategories: [
                        {
                            displayName: 'All Clothing',
                            value: 'Clothing'
                        },
                        {
                            displayName: 'Hats'
                        },
                        {
                            displayName: 'Shirts'
                        },
                        {
                            displayName: 'T-Shirts',
                            value: 'TeeShirt'
                        },
                        {
                            displayName: 'Pants'
                        },
                        {
                            displayName: 'Packages'
                        }, 
                    ]
                })
            })
        ]
    }));
};
const CatalogFilters = (props)=>{
    const s = useFilterStyles();
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const hasClothingTypeFilter = store.subCategory === 'Clothing' || store.subCategory === 'Hats' || store.subCategory === 'Accessories' || store.subCategory === 'TeeShirt' || store.subCategory === 'Shirt' || store.subCategory === 'Pant';
    if (store.category === 'featured') {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: s.header,
                    children: "Filters"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    hasClothingTypeFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClothingFilter, {}),
                    hasClothingTypeFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divider-top mt-4 mb-4 divider-light"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_genreFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogFilters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__]);
_stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    link: {
        fontSize: '13px'
    }
});
const SubCategoryFilter = (props)=>{
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const sub = store.subCategory;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.subCategories.map((v)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                onClick: ()=>{
                    if (store.locked) return;
                    store.setSubCategory(v.value || v.displayName);
                },
                className: 'mb-0 ' + s.link + ' ' + ((v.value || v.displayName) === sub ? '' : 'fake-link'),
                children: v.displayName
            }, v.value || v.displayName));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubCategoryFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useCatalogLegendStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    summary: {
        paddingTop: '12px'
    },
    wrapper: {
        userSelect: 'none'
    }
});
const useLegendStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    title: {
        fontWeight: 600,
        marginBottom: 0
    },
    desc: {
        marginBottom: '0',
        marginTop: 0,
        lineHeight: 'normal'
    }
});
const LegendEntry = (props)=>{
    const s = useLegendStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: props.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.title,
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.desc,
                children: props.description
            })
        ]
    }));
};
const CatalogLegend = (props)=>{
    const s = useCatalogLegendStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                    className: s.summary,
                    children: "Legend"
                }),
                [
                    {
                        image: '/img/overlay_bcCatalog.png',
                        title: 'Builders Club Only',
                        description: 'Only purchasable by Builders Club members.'
                    },
                    {
                        image: '/img/limitedOverlay_small.png',
                        title: 'Limited Items',
                        description: 'Owners of these discontinued items can re-sell them to other users at any price.'
                    },
                    {
                        image: '/img/limitedUOverlay_small.png',
                        title: 'Limited Unique Items',
                        description: 'A limited supply originally sold by ROBLOX. Each unit is labeled with a serial number. Once sold out, owners can re-sell them to other users.'
                    }, 
                ].map((v)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LegendEntry, {
                        image: v.image,
                        title: v.title,
                        description: v.description
                    }, v.title));
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogLegend);


/***/ }),

/***/ 3858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useLimitedOverlayStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        marginTop: '-48px',
        width: '70px',
        height: '24px'
    }
});
const LimitedOverlay = (props)=>{
    const s = useLimitedOverlayStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/CatalogOverlays/Limited.png",
        className: s.overlay
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LimitedOverlay);


/***/ }),

/***/ 9733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useLimitedOverlayStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        marginTop: '-48px',
        width: '88px',
        height: '24px'
    }
});
const LimitedUniqueOverlay = (props)=>{
    const s = useLimitedOverlayStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/CatalogOverlays/LimitedUnique.png",
        className: s.overlay
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LimitedUniqueOverlay);


/***/ }),

/***/ 8374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useNewOverlayStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        marginBottom: '-68px',
        float: 'right',
        width: '53px',
        height: '53px',
        zIndex: 2,
        position: 'relative'
    }
});
const NewOverlay = (props)=>{
    const s = useNewOverlayStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/CatalogOverlays/New.png",
        className: s.overlay,
        alt: "Newly Released"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewOverlay);


/***/ }),

/***/ 6451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useSaleStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        marginBottom: '-77px',
        float: 'right',
        width: '72px',
        height: '72px',
        zIndex: 2,
        position: 'relative'
    }
});
const SaleOverlay = (props)=>{
    const s = useSaleStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/CatalogOverlays/Sale.png",
        className: s.overlay,
        alt: "Sale"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleOverlay);


/***/ }),

/***/ 6510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useTimerStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    overlay: {
        marginBottom: '-42px',
        float: 'right',
        width: '36px',
        height: '36px',
        zIndex: 2,
        position: 'relative'
    }
});
const TimerOverlay = (props)=>{
    const s = useTimerStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/CatalogOverlays/Timer.png",
        className: s.overlay,
        alt: "Available for a Limited Time"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimerOverlay);


/***/ }),

/***/ 8125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2300);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(465);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5304);
/* harmony import */ var _catalogOverlays_limited__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3858);
/* harmony import */ var _catalogOverlays_limitedUnique__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9733);
/* harmony import */ var _catalogOverlays_new__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8374);
/* harmony import */ var _catalogOverlays_sale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6451);
/* harmony import */ var _catalogOverlays_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6510);
/* harmony import */ var _creatorLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2316);
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2028);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1747);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8452);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_5__, _services_catalog__WEBPACK_IMPORTED_MODULE_6__, _creatorLink__WEBPACK_IMPORTED_MODULE_12__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_14__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_5__, _services_catalog__WEBPACK_IMPORTED_MODULE_6__, _creatorLink__WEBPACK_IMPORTED_MODULE_12__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const useCatalogPageStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    image: {
        width: '100%',
        height: 'auto',
        border: '1px solid #eee',
        margin: '0 auto',
        display: 'block'
    },
    imageBig: {
        maxWidth: '152px',
        display: 'block',
        margin: '0 auto'
    },
    imageSmall: {
        maxWidth: '112px',
        display: 'block',
        margin: '0 auto'
    },
    detailsLarge: {},
    detailsSmall: {},
    detailsWrapper: {
        position: 'absolute',
        display: 'none',
        background: '#fff',
        paddingBottom: '5px',
        border: '1px solid #c3c3c3',
        transform: 'scale(110%)',
        zIndex: 2,
        paddingLeft: '4px'
    },
    detailsOpen: {
        display: 'block',
        marginTop: '-10px'
    },
    detailsKey: {
        fontSize: '10px',
        marginLeft: '0',
        marginRight: '2px',
        opacity: 0.7,
        fontWeight: 600
    },
    detailsValue: {
        fontSize: '10px'
    },
    detailsEntry: {
        marginBottom: 0,
        marginTop: '-5px'
    },
    overviewDetails: {},
    itemName: {
        overflow: 'hidden'
    }
});
const usePriceStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_3__.createUseStyles)({
    remainingText: {
        fontWeight: 700,
        fontSize: '12px'
    },
    remainingLabel: {
        color: 'red',
        fontWeight: 600,
        fontSize: '12px'
    }
});
const PriceText = (props)=>{
    const s = usePriceStyles();
    const isLimited = props.itemRestrictions && (props.itemRestrictions.includes('Limited') || props.itemRestrictions.includes('LimitedUnique'));
    const copiesRemaining = props.unitsAvailableForConsumption;
    let priceElements = [];
    if (props.isForSale) {
        if (props.price === 0) {
            priceElements.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0 text-dark",
                children: "Free"
            }));
        } else if (props.price !== null) {
            priceElements.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    children: props.price
                })
            }));
        }
        // If item is free, why would anyone pay in tickets?
        if (props.priceTickets !== null && props.price !== 0) {
            priceElements.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickets__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    children: props.priceTickets
                })
            }));
        }
    }
    if (props.isForSale && props.price !== 0 && props.price !== null) {
        if (copiesRemaining) {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: priceElements.map((v, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                children: v
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.remainingLabel,
                                children: "Remaining: "
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.remainingText + ' text-dark',
                                children: copiesRemaining.toLocaleString()
                            })
                        ]
                    })
                ]
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: priceElements.map((v, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                    children: v
                }, i)
            )
        }));
    }
    if (props.isForSale && (props.price === 0 || props.price === null)) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: priceElements.map((v, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                    children: v
                }, i)
            )
        }));
    }
    if (isLimited && !props.isForSale) {
        // Limited and not for sale anymore
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        prefix: "was ",
                        children: props.price || '-'
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_robux__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        prefix: "now ",
                        children: props.lowestPrice || '-'
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-0 text-dark",
        children: "offsale"
    }));
};
const CatalogPageCard = (props)=>{
    var ref;
    const s = useCatalogPageStyles();
    const isLarge = props.mode === 'large';
    const c = isLarge ? 'col-6 col-md-6 col-lg-3 mb-4 ' : 'col-6 col-md-6 col-lg-2 mb-2';
    const thumbs = _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_14__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(thumbs.getPlaceholder());
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setImage(thumbs.getAssetThumbnail(props.id));
    }, [
        props,
        thumbs.thumbnails
    ]);
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // various conditionals
    const isLimited = props.itemRestrictions && props.itemRestrictions.includes('Limited');
    const isLimitedU = props.itemRestrictions && props.itemRestrictions.includes('LimitedUnique');
    const hasBottomOverlay = isLimited || isLimitedU;
    const isTimedItem = props.isForSale && props.offsaleDeadline;
    const isNew = props.createdAt ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(props.createdAt).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().subtract(2, 'days')) : false;
    const isSale = false; // TODO
    const hasTopOverlay = isNew || isSale;
    const hasRobux = props.isForSale && props.price !== null;
    const hasTickets = props.isForSale && props.priceTickets !== null;
    const hasBeforePrice = !props.isForSale && (isLimited || isLimitedU);
    const nameHeight = hasRobux && hasTickets || hasBeforePrice ? 18 : 36;
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: cardMarginBottom , 1: setCardMarginBottom  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!nameRef.current) return;
        const totalHeight = nameRef.current.clientHeight;
        if (nameHeight > totalHeight) {
            const diff = nameHeight - totalHeight;
            setCardMarginBottom(diff);
        }
    }, [
        hasTickets,
        hasBeforePrice
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${c}`,
        onMouseEnter: ()=>setShowDetails(true)
        ,
        onMouseLeave: ()=>setShowDetails(false)
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: cardRef,
                className: isLarge ? s.imageBig : s.imageSmall,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        href: (0,_services_catalog__WEBPACK_IMPORTED_MODULE_6__/* .getItemUrl */ .yz)({
                            assetId: props.id,
                            name: props.name
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    zIndex: showDetails ? 10 : 0,
                                    position: 'relative'
                                },
                                children: [
                                    isTimedItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogOverlays_timer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}) : null,
                                    isNew ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogOverlays_new__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : isSale ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogOverlays_sale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: props.name,
                                        src: image,
                                        className: `${s.image} ${props.mode === 'large' ? s.imageBig : s.imageSmall}`,
                                        onError: (e)=>{
                                            if (e.currentTarget.src !== thumbs.getPlaceholder()) {
                                                setImage(thumbs.getPlaceholder());
                                            }
                                        }
                                    }),
                                    isLimited ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogOverlays_limited__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : null,
                                    isLimitedU ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogOverlays_limitedUnique__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: s.overviewDetails,
                                        style: hasBottomOverlay ? {
                                            marginTop: '-18px'
                                        } : undefined,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                ref: nameRef,
                                                className: `mb-0 ${s.itemName}`,
                                                style: {
                                                    maxHeight: nameHeight
                                                },
                                                children: props.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PriceText, {
                                                ...props
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: showDetails ? {
                            width: cardRef.current.clientWidth,
                            paddingTop: cardRef.current.clientHeight + 'px',
                            marginTop: '-' + cardRef.current.clientHeight + 'px'
                        } : undefined,
                        className: s.detailsWrapper + ' ' + (isLarge ? s.detailsLarge : s.detailsSmall) + ' ' + (showDetails ? s.detailsOpen : ''),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: s.detailsEntry,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsKey,
                                        children: "Creator: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsValue,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_creatorLink__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            id: props.creatorTargetId,
                                            name: props.creatorName,
                                            type: props.creatorType
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: s.detailsEntry,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsKey,
                                        children: "Updated: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsValue,
                                        children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(props.updatedAt).fromNow()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: s.detailsEntry,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsKey,
                                        children: "Sales: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsValue,
                                        children: (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('catalogSaleCountVisibleFromDetailsEndpoint', true) ? props.saleCount.toLocaleString() : 0
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: s.detailsEntry,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.detailsKey,
                                        children: "Favorited: "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: s.detailsValue,
                                        children: [
                                            ((ref = props.favoriteCount) === null || ref === void 0 ? void 0 : ref.toLocaleString()) || 0,
                                            " times"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginBottom: cardMarginBottom
                }
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1970);
/* harmony import */ var _styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__]);
_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useInputStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    input: {
        width: '100%',
        padding: '2px',
        border: '1px solid #a7a7a7'
    },
    select: {
        width: '100%',
        padding: '2px',
        border: '1px solid #a7a7a7',
        paddingLeft: '2px',
        appearance: 'none'
    },
    col: {
        padding: 0,
        paddingLeft: '2px'
    },
    caret: {
        position: 'absolute',
        marginLeft: '-21px',
        fontSize: '8px',
        transform: 'rotate(90deg)',
        marginTop: '6px',
        border: '1px solid black',
        paddingLeft: '3px',
        paddingRight: '1px',
        background: 'linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%)'
    }
});
/**
 * Catalog page search input
 * @param {*} props 
 */ const CatalogPageInput = (props)=>{
    const s = useInputStyles();
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const input = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const category = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // for keyword updates from url param
        if (input.current) input.current.value = store.query;
    }, [
        store.query
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 col-lg-8 offset-lg-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `col-12 col-md-6 ${s.col}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: `${s.input}`,
                            ref: input
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `col-6 col-md-3 ${s.col}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                disabled: store.locked,
                                className: s.select,
                                ref: category,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "all",
                                    children: "All Categories"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.caret,
                                children: "►"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `col-6 col-md-2 ${s.col}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: store.locked,
                            className: `${(_styles_buttons_module_css__WEBPACK_IMPORTED_MODULE_4___default().legacyButton)} w-100`,
                            onClick: (e)=>{
                                e.preventDefault();
                                store.setQuery(input.current.value);
                            },
                            children: "Search"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _catalogLegend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__]);
_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const navigationItems = [
    {
        name: 'Featured',
        clickData: '',
        children: {
            title: 'Featured Types',
            children: [
                {
                    name: 'All Featured Items',
                    clickData: 'Featured,'
                },
                {
                    name: 'Featured Hats',
                    clickData: 'Featured,Accessories'
                },
                {
                    name: 'Featured Gear',
                    clickData: 'Featured,Gear'
                },
                {
                    name: 'Featured Faces',
                    clickData: 'Featured,Faces'
                }
            ]
        }
    },
    {
        name: 'Collectibles',
        clickData: '',
        children: {
            title: 'Collectible Types',
            children: [
                {
                    name: 'All Collectibles',
                    clickData: 'Collectibles,'
                },
                {
                    name: 'Collectible Faces',
                    clickData: 'Collectibles,Faces'
                },
                {
                    name: 'Collectible Hats',
                    clickData: 'Collectibles,Accessories'
                },
                {
                    name: 'Collectible Gear',
                    clickData: 'Collectibles,Gear'
                }, 
            ]
        }
    },
    {
        name: 'separator',
        clickData: ''
    },
    {
        name: 'All Categories',
        clickData: 'all,all'
    },
    {
        name: 'Clothing',
        clickData: '',
        children: {
            title: 'Clothing Types',
            children: [
                {
                    name: 'All Clothing',
                    clickData: 'null,Clothing'
                },
                {
                    name: 'Hats',
                    clickData: 'null,Accessories'
                },
                {
                    name: 'Shirts',
                    clickData: 'null,Shirt'
                },
                {
                    name: 'T-Shirts',
                    clickData: 'null,TeeShirt'
                },
                {
                    name: 'Pants',
                    clickData: 'null,Pants'
                },
                {
                    name: 'Packages',
                    clickData: 'null,Packages'
                }, 
            ]
        }
    },
    {
        name: 'Body Parts',
        clickData: '',
        children: {
            title: 'Body Part Types',
            children: [
                {
                    name: 'All Body Parts',
                    clickData: 'bodyparts,All'
                },
                {
                    name: 'Heads',
                    clickData: 'bodyparts,Heads'
                },
                {
                    name: 'Faces',
                    clickData: 'bodyparts,Faces'
                },
                {
                    name: 'Packages',
                    clickData: 'bodyparts,Packages'
                }, 
            ]
        }
    },
    {
        name: 'Gear',
        clickData: '',
        children: {
            title: 'Gear Categories',
            children: [
                {
                    name: 'All Gear',
                    clickData: 'gear,all'
                },
                {
                    name: 'Melee Weapon',
                    clickData: 'gear,melee'
                },
                {
                    name: 'Ranged Weapon',
                    clickData: 'gear,ranged'
                },
                {
                    name: 'Explosive',
                    clickData: 'gear,explosive'
                },
                {
                    name: 'Power Up',
                    clickData: 'gear,powerup'
                },
                {
                    name: 'Navigation Enhancer',
                    clickData: 'gear,navigation'
                },
                {
                    name: 'Musical Instrument',
                    clickData: 'gear,musical'
                },
                {
                    name: 'Social Item',
                    clickData: 'gear,social'
                },
                {
                    name: 'Building Tool',
                    clickData: 'gear,building'
                },
                {
                    name: 'Personal Transport',
                    clickData: 'gear,transport'
                }, 
            ]
        }
    }
];
const useTitleStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    top: {
        fontSize: '12px',
        color: 'white',
        fontWeight: 600,
        lineHeight: 'normal',
        marginBottom: '-5px',
        paddingLeft: '4px',
        textShadow: '1px 1px 1px black'
    },
    bottom: {
        fontSize: '20px',
        color: 'white',
        fontWeight: 700,
        lineHeight: 'normal',
        paddingLeft: '4px',
        textShadow: '1px 1px 1px black'
    }
});
const CatalogPageNavigation = ()=>{
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const title = useTitleStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            onClick: (e, clickData)=>{
                console.log('[info] catalog dropdown clicked with', clickData);
                const [category, subCategory] = clickData.split(',');
                if (category === '') {
                    console.log('[info] bad category');
                    return;
                }
                store.setCategory(category);
                store.setSubCategory(subCategory);
            },
            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `mt-0 ${title.top}`,
                        children: "Browse by"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `mb-0 mt-0 ${title.bottom}`,
                        children: "Category"
                    })
                ]
            }),
            items: navigationItems
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageNavigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var _catalogPageCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8125);
/* harmony import */ var _catalogPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(896);
/* harmony import */ var _oldSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__, _catalogPageCard__WEBPACK_IMPORTED_MODULE_4__, _catalogPagination__WEBPACK_IMPORTED_MODULE_5__]);
([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__, _catalogPageCard__WEBPACK_IMPORTED_MODULE_4__, _catalogPagination__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useResultStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    pageTitle: {
        fontSize: '28px',
        fontWeight: 500
    },
    pageTitleAlt: {
        fontSize: '14px',
        fontWeight: 700,
        opacity: 1,
        letterSpacing: -0.2
    },
    subtitleText: {
        fontSize: '12px',
        fontWeight: 500
    },
    selectWrapper: {
        width: '200px',
        display: 'inline-block'
    },
    sortWrapper: {
        float: 'right'
    },
    sortByLabel: {
        paddingRight: '4px',
        fontWeight: 600,
        color: '#343434'
    },
    sortByLabelWrapper: {
        display: 'inline-block'
    }
});
const ResultsContainer = (props)=>{
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    if (!props.showTopFour) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: store.results.data.map((v, i)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogPageCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...v
                }, v.id));
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            store.results.data.slice(0, 4).map((v, i)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogPageCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...v,
                    mode: "large"
                }, v.id));
            }),
            store.results.data.slice(4).map((v, i)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogPageCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ...v
                }, v.id));
            })
        ]
    }));
};
const getDisplayNameForCombination = (cat, subCat)=>{
    let suffix = '';
    let prefix = '';
    if (subCat) {
        switch(subCat.toLowerCase()){
            case 'all':
                if (!cat) {
                    return 'All';
                }
                suffix = 'all';
                break;
            case 'clothing':
                return 'All Clothing';
            case 'teeshirt':
            case 'teeshirts':
            case 'tshirt':
                suffix = 'T-Shirts';
                break;
            case 'pants':
                suffix = 'Pants';
                break;
            case 'shirts':
            case 'shirt':
                suffix = 'Shirts';
                break;
            case 'hats':
                suffix = 'Hats';
                break;
            case 'accessories':
                suffix = 'Hats';
                break;
            case 'packages':
                suffix = 'Packages';
                break;
            case 'face':
            case 'faces':
                suffix = 'Faces';
                break;
            case 'gear':
            case 'gears':
                suffix = 'Gears';
                break;
        }
    }
    if (cat) {
        switch(cat.toLowerCase()){
            case 'collectibles':
                if (!subCat) {
                    return 'Collectibles';
                }
                prefix = 'Collectible';
                break;
        }
    }
    return prefix + ' ' + suffix;
};
const CatalogPageResults = (props)=>{
    const s = useResultStyles();
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    let showTopFour = store.category === 'Featured';
    const getTitle = ()=>{
        if (store.category === 'Featured') {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: s.pageTitle,
                children: "Featured Items on ROBLOX"
            }));
        }
        let title = getDisplayNameForCombination(store.category, store.subCategory);
        const currentOffset = Math.trunc(store.page / store.limit + 1) || 0;
        const limit = store.limit < store.results.data.length ? store.limit : store.results.data.length;
        const moreAvailable = store.nextCursor !== null;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: s.pageTitleAlt,
                    children: title.toUpperCase()
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: s.subtitleText,
                    children: [
                        "Showing ",
                        store.results.data.length === 0 ? '0' : currentOffset.toLocaleString(),
                        " ",
                        moreAvailable ? '- ' + limit.toLocaleString() : '',
                        " of ",
                        (typeof store.total === 'number' ? store.total : 'many').toLocaleString(),
                        " results"
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        style: store.locked ? {
            opacity: '0.25'
        } : undefined,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-6",
                children: getTitle()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.sortWrapper,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.sortByLabelWrapper,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.sortByLabel,
                                children: "Sort By: "
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.selectWrapper,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_oldSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onChange: (newSort)=>{
                                    store.setSort(parseInt(newSort, 10));
                                },
                                options: [
                                    {
                                        key: '0',
                                        value: 'Relevance'
                                    },
                                    // TODO
                                    {
                                        key: '100',
                                        value: 'Most Favorited'
                                    },
                                    // TODO
                                    {
                                        key: '101',
                                        value: 'Best Selling'
                                    },
                                    {
                                        key: '3',
                                        value: 'Recently updated'
                                    },
                                    {
                                        key: '4',
                                        value: 'Price (Low to High)'
                                    },
                                    {
                                        key: '5',
                                        value: 'Price (High to Low)'
                                    }, 
                                ],
                                disabled: store.locked
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: store.results ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsContainer, {
                            showTopFour: showTopFour
                        }) : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_catalogPagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageResults);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1796);
/* harmony import */ var _genericPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_1__, _genericPagination__WEBPACK_IMPORTED_MODULE_2__]);
([_stores_catalogPage__WEBPACK_IMPORTED_MODULE_1__, _genericPagination__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/**
 * Catalog pagination component
 * @param {*} props 
 */ const CatalogPagination = (props)=>{
    const store = _stores_catalogPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const { limit , total , page  } = store;
    let pageCount = typeof total === 'number' ? Math.ceil(total / limit) : null;
    if (pageCount === 0) {
        pageCount = 1;
    }
    const onClick = (increment)=>{
        return (e)=>{
            e.preventDefault();
            if (store.locked) {
                return;
            }
            let cursor = '';
            if (increment === 1) {
                if (pageCount !== null && page >= pageCount) return;
                store.setPage(page + 1);
                cursor = store.nextCursor;
            } else if (increment === -1) {
                if (page === 1) return;
                store.setPage(page - 1);
                cursor = store.previousCursor;
            }
            store.setCursor(cursor);
        };
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-6 col-lg-3 mx-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_genericPagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                page: page,
                pageCount: pageCount,
                onClick: onClick
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);



const useDropdownStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        border: '1px solid #565655',
        width: '100%'
    },
    heading: {
        background: 'linear-gradient(0deg, rgba(86,86,85,1) 0%, rgba(128,127,127,1) 100%)',
        padding: '2px'
    },
    mainBody: {
        backgroundColor: '#efefef'
    },
    itemDiv: {
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '4px',
        cursor: 'pointer',
        '&:hover': {
            background: '#d8d8d8'
        }
    },
    caret: {
        float: 'right',
        color: '#666666',
        paddingTop: '2px',
        fontSize: '12px'
    },
    leftMenu: {
        position: 'absolute',
        backgroundColor: '#efefef',
        border: '1px solid #565655',
        minWidth: '150px',
        '@media(max-width: 800px)': {
            marginLeft: '20%!important',
            width: '80%',
            boxShadow: '5px 5px 24px black'
        }
    },
    leftMenuTitle: {
        fontSize: '14px',
        fontWeight: 700,
        paddingTop: '8px',
        paddingLeft: '4px'
    },
    separator: {
        borderBottom: '1px solid #c3c3c3',
        width: '100%'
    }
});
/**
 * Ancient dropdown used for catalog page + other stuff
 * @param {{title: JSX.Element; onClick: (e: any, data: any) => void; items: {name: string; clickData: any; children?: {title: string; children?: {name: string; clickData: any;}[]}}[]}} props
 */ const Dropdown = (props)=>{
    var ref;
    const s = useDropdownStyles();
    const { 0: leftMenu , 1: setLeftMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const leftMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const leftMenuStyles = {
        marginLeft: (((ref = wrapperRef.current) === null || ref === void 0 ? void 0 : ref.clientWidth) || 0) + 'px',
        zIndex: 11
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onMouseLeave: ()=>{
            setLeftMenu(null);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.wrapper,
            ref: wrapperRef,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.heading,
                    children: props.title
                }),
                leftMenu && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: leftMenuRef,
                    className: s.leftMenu,
                    style: leftMenuStyles,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: s.leftMenuTitle,
                            children: leftMenu.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.separator
                        }),
                        leftMenu.children.map((v)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.itemDiv,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `mb-0 mt-0`,
                                    onClick: (e)=>{
                                        props.onClick(e, v.clickData);
                                    },
                                    children: v.name
                                })
                            }, v.name));
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.mainBody,
                    children: props.items.map((v, i)=>{
                        if (v.name === 'separator') {
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: s.separator
                            }, 'separator' + i));
                        }
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: s.itemDiv,
                            onMouseEnter: ()=>{
                                if (v.children) {
                                    setLeftMenu(v.children);
                                }
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `mb-0 mt-0`,
                                onClick: (e)=>{
                                    props.onClick(e, v.clickData);
                                },
                                children: [
                                    v.name,
                                    " ",
                                    v.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: s.caret,
                                        children: "►"
                                    })
                                ]
                            })
                        }, v.name));
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ 4641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);



const useInputStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    select: {
        width: '100%',
        padding: '2px',
        border: '1px solid #a7a7a7',
        paddingLeft: '2px',
        appearance: 'none'
    },
    col: {
        padding: 0,
        paddingLeft: '2px'
    },
    caret: {
        position: 'absolute',
        marginLeft: '-21px',
        fontSize: '8px',
        transform: 'rotate(90deg)',
        marginTop: '6px',
        border: '1px solid black',
        paddingLeft: '3px',
        paddingRight: '1px',
        background: 'linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%)'
    }
});
/**
 * Old select component
 * @param {{onChange: (newVal: string) => void; disabled?: boolean; options: {key: string; value: string;}[]}} props 
 * @returns 
 */ const OldSelect = (props)=>{
    const s = useInputStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                disabled: props.disabled,
                className: s.select,
                onChange: (v)=>{
                    props.onChange(v.currentTarget.value);
                },
                children: props.options.map((v, i)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: v.key,
                        children: v.value
                    }, i));
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: s.caret,
                children: "►"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OldSelect);


/***/ }),

/***/ 1258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2565);
/* harmony import */ var _components_catalogFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5047);
/* harmony import */ var _components_catalogLegend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _components_catalogPageInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3054);
/* harmony import */ var _components_catalogPageNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8464);
/* harmony import */ var _components_catalogPageResults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2370);
/* harmony import */ var _stores_catalogPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_catalogFilters__WEBPACK_IMPORTED_MODULE_4__, _components_catalogPageInput__WEBPACK_IMPORTED_MODULE_6__, _components_catalogPageNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_catalogPageResults__WEBPACK_IMPORTED_MODULE_8__, _stores_catalogPage__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__, _components_catalogFilters__WEBPACK_IMPORTED_MODULE_4__, _components_catalogPageInput__WEBPACK_IMPORTED_MODULE_6__, _components_catalogPageNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_catalogPageResults__WEBPACK_IMPORTED_MODULE_8__, _stores_catalogPage__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    title: {
        fontWeight: 700,
        fontSize: '32px',
        marginBottom: '12px',
        color: '#343434'
    },
    catalogContainer: {
        backgroundColor: '#fff',
        padding: '2px 4px'
    }
});
const CatalogPage = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stores_catalogPage__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Provider */ .Z.Provider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mt-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ad_adBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.catalogContainer,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row mt-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-4 col-lg-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: s.title,
                                        children: "Catalog"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-8 col-lg-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogPageInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-4 col-lg-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "divider-right",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pe-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogPageNavigation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogFilters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogLegend__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 col-md-8 col-lg-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_catalogPageResults__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
CatalogPage.getInitialProps = ()=>{
    return {
        title: 'Catalog - ROBLOX'
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7686:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1191:
/***/ ((module) => {

"use strict";
module.exports = require("react-jss");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7441:
/***/ ((module) => {

"use strict";
module.exports = require("unstated-next");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,9002,2634,5304,5893,3781,2316,2028], () => (__webpack_exec__(1258)));
module.exports = __webpack_exports__;

})();