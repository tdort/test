"use strict";
exports.id = 3781;
exports.ids = [3781];
exports.modules = {

/***/ 3781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
    button: {
        color: '#777777',
        fontSize: '15px',
        border: '1px solid #777777',
        background: 'linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%)',
        '&:hover': {
            background: 'linear-gradient(0deg, rgba(203,216,255,1) 0%, rgba(255,255,255,1) 100%)'
        },
        margin: '0 auto',
        display: 'block'
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
});
/**
 * Generic pagination component
 * @param {{onClick: (mode: number) => (e: any) => void; pageCount?: number; page: number;}} props
 */ const GenericPagination = (props)=>{
    const { pageCount , page  } = props;
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${s.col} col-3`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: s.button,
                            onClick: props.onClick(-1),
                            children: "◄"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${s.col} col-6`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mb-0 pl-2 pr-2 text-center",
                            children: [
                                "Page ",
                                page,
                                " ",
                                typeof pageCount === 'number' && ' of ' + pageCount.toLocaleString() || ''
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${s.col} col-3`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: s.button,
                            onClick: props.onClick(1),
                            children: "►"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericPagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2300);
/* harmony import */ var _services_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5304);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_catalog__WEBPACK_IMPORTED_MODULE_3__]);
_services_catalog__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const stringToCategory = (str)=>{
    // these are from catalog.roblox.com/v1/search/navigation-menu-items
    switch(str.toLowerCase().trim()){
        case 'collectible':
        case 'collectibles':
            return 2;
        case 'featured':
            return 0;
        case 'accessories':
            return 11;
        case 'clothing':
            return 3;
        case 'gears':
        case 'gear':
            return 5;
        case 'bodyparts':
            return 4;
    }
    throw new Error('Invalid category "' + str + '"');
};
const stringToSubCategory = (str)=>{
    // these are from catalog.roblox.com/v1/search/navigation-menu-items
    switch(str.toLowerCase().trim()){
        case 'items':
        case 'hats':
            return 0; // todo: what do we put here?
        case 'all':
            return 0;
        case 'face':
        case 'faces':
            return 10;
        case 'packages':
            return 37; // todo: is this correct?
        case 'shirts':
            return 12;
        case 'tshirts':
            return 13;
        case 'pants':
            return 14;
        // gear categories
        case 'gear':
            return 0;
        case 'building':
            return 8;
        case 'explosive':
            return 3;
        case 'melee':
            return 1;
        case 'musical':
            return 6;
        case 'navigation':
            return 5;
        case 'powerup':
            return 4;
        case 'ranged':
            return 2;
        case 'social':
            return 7;
        case 'transport':
            return 9;
    }
    throw new Error('Invalid subcategory "' + str + '"');
};
const CatalogPageStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.keyword || '');
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const { 0: limit , 1: setLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('catalogPageLimit', 28));
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Featured');
    const { 0: subCategory , 1: setSubCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: total1 , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: nextCursor , 1: setNextCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: previousCursor , 1: setPreviousCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: cursor , 1: setCursor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: sort , 1: setSort  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: genres , 1: setGenres  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setLocked(true);
        let response = null;
        (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .searchCatalog */ ._w)({
            category,
            subCategory,
            query,
            limit,
            cursor,
            sort
        }).then((result)=>{
            response = result;
            if (response.data.length === 0) {
                return [];
            }
            return (0,_services_catalog__WEBPACK_IMPORTED_MODULE_3__/* .getItemDetails */ .rV)(result.data.map((v)=>v.id
            ));
        }).then((assetDetails)=>{
            let arr = [];
            // do it this way to preserve sort
            for (const item of response.data){
                let details = assetDetails.data.data.find((v)=>v.id === item.id
                );
                if (details) arr.push(details);
            }
            response.data = arr;
            setResults(response);
            setNextCursor(response.nextPageCursor);
            setPreviousCursor(response.previousPageCursor);
            let total = response._total;
            setTotal(typeof total === 'number' ? total : null);
        }).finally(()=>{
            setLocked(false);
        });
    }, [
        cursor,
        sort,
        category,
        subCategory,
        genres,
        query,
        limit
    ]);
    const clearStatesForNewQuery = ()=>{
        setCursor(null);
        setPage(1);
    };
    return {
        locked,
        results,
        total: total1,
        nextCursor,
        previousCursor,
        setCursor,
        sort,
        setSort,
        category,
        setCategory: (newCat)=>{
            clearStatesForNewQuery();
            setCategory(newCat);
        },
        stringToCategory,
        subCategory,
        setSubCategory: (newSubCat)=>{
            clearStatesForNewQuery();
            setSubCategory(newSubCat);
        },
        stringToSubCategory,
        genres,
        setGenres: (newGenres)=>{
            clearStatesForNewQuery();
            setGenres(newGenres);
        },
        query,
        setQuery: (newQuery)=>{
            clearStatesForNewQuery();
            setQuery(newQuery);
        },
        limit,
        setLimit: (newLimit)=>{
            clearStatesForNewQuery();
            setLimit(newLimit);
        },
        page,
        setPage
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogPageStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;