"use strict";
exports.id = 5304;
exports.ids = [5304];
exports.modules = {

/***/ 5304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FS": () => (/* binding */ itemNameToEncodedName),
/* harmony export */   "yz": () => (/* binding */ getItemUrl),
/* harmony export */   "_w": () => (/* binding */ searchCatalog),
/* harmony export */   "rV": () => (/* binding */ getItemDetails),
/* harmony export */   "$K": () => (/* binding */ getRecommendations),
/* harmony export */   "Hj": () => (/* binding */ getBadgesForPlace),
/* harmony export */   "kM": () => (/* binding */ getPassessForPlace),
/* harmony export */   "li": () => (/* binding */ getComments),
/* harmony export */   "Yr": () => (/* binding */ createComment),
/* harmony export */   "Dt": () => (/* binding */ addOrRemoveFromCollections),
/* harmony export */   "Ol": () => (/* binding */ getIsFavorited),
/* harmony export */   "Ic": () => (/* binding */ createFavorite),
/* harmony export */   "r7": () => (/* binding */ deleteFavorite)
/* harmony export */ });
/* unused harmony exports getProductInfoLegacy, deleteFromInventory */
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const itemNameToEncodedName = (str)=>{
    if (typeof str !== 'string') {
        str = '';
    }
    // https://stackoverflow.com/questions/987105/asp-net-mvc-routing-vs-reserved-filenames-in-windows
    var seoName = str.replace(/'/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/^(COM\d|LPT\d|AUX|PRT|NUL|CON|BIN)$/i, "") || "unnamed";
    return seoName;
};
const itemPageLate2016Enabled = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('itemPageLate2016Enabled', false);
const csrEnabled = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('clientSideRenderingEnabled', false);
const getItemUrl = ({ assetId , name  })=>{
    return `/catalog/${assetId}/${itemNameToEncodedName(name)}`;
};
const searchCatalog = ({ category , subCategory , query , limit , cursor , sort , creatorType , creatorId  })=>{
    let url = '/v1/search/items?category=' + category + '&limit=' + limit + '&sortType=' + sort;
    if (cursor) {
        url += '&cursor=' + encodeURIComponent(cursor);
    }
    if (query) {
        url += '&keyword=' + encodeURIComponent(query);
    }
    if (subCategory) {
        url += '&subcategory=' + encodeURIComponent(subCategory);
    }
    if (creatorType && creatorId) {
        url += '&creatorTargetId=' + creatorId + '&creatorType=' + creatorType;
    }
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', url)).then((d)=>d.data
    );
};
/**
 * Only use this on server-side requests.
 * @param {number} assetId 
 */ const getProductInfoLegacy = async (assetId)=>{
    return request('GET', getFullUrl('api', '/marketplace/productinfo?assetId=' + assetId)).then((d)=>d.data
    );
};
const getItemDetails = async (assetIdArray)=>{
    if (assetIdArray.length === 0) return {
        data: {
            data: []
        }
    };
    while(true){
        try {
            const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', '/v1/catalog/items/details'), {
                items: assetIdArray.map((v)=>{
                    return {
                        itemType: 'Asset',
                        id: v
                    };
                })
            });
            for (const item of res.data.data){
                if (typeof item.isForSale === 'undefined') {
                    item.isForSale = item.unitsAvailableForConsumption !== 0 && typeof item.price === 'number' && typeof item.lowestPrice === 'undefined';
                }
            }
            return res;
        } catch (e) {
            // @ts-ignore
            if (e.response && e.response.status === 429 && false) {}
            throw e;
        }
    }
};
const getRecommendations = ({ assetId , assetTypeId , limit  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', '/v1/recommendations/asset/' + assetTypeId + '?contextAssetId=' + assetId + '&numItems=' + limit)).then((d)=>d.data
    );
};
const getBadgesForPlace = async ({ placeId , limit =10  })=>{
    let url = `/v1/badges/asset/${placeId}?limit=${limit}`;
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', url)).then((d)=>d.data
    );
};
const getPassessForPlace = async ({ placeId , limit =10 , cursor  })=>{
    let url = `/v1/passes/asset/${placeId}?limit=${limit}`;
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', url)).then((d)=>d.data
    );
};
const getComments = async ({ assetId , offset  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + 'comments/get-json?assetId=' + assetId + '&startIndex=' + offset + '&thumbnailWidth=100&thumbnailHeight=100&thumbnailFormat=PNG&cachebuster=' + Math.random()).then((d)=>d.data
    );
};
const createComment = async ({ assetId , comment  })=>{
    let result = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + 'comments/post', {
        text: comment,
        assetId: assetId
    });
    if (typeof result.data.ErrorCode === 'string') {
        throw new Error(result.data.ErrorCode);
    }
    return result.data;
};
const addOrRemoveFromCollections = ({ assetId , addToProfile  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + 'asset/toggle-profile', {
        assetId,
        addToProfile
    });
};
const deleteFromInventory = ({ assetId  })=>{
    return request('POST', getBaseUrl() + "apisite/inventory/v1/delete-from-inventory", {
        assetId: assetId
    });
};
const getIsFavorited = async ({ assetId , userId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', '/v1/favorites/users/' + userId + '/assets/' + assetId + '/favorite')).then((d)=>d.data
    );
};
const createFavorite = async ({ assetId , userId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', '/v1/favorites/users/' + userId + '/assets/' + assetId + '/favorite'));
};
const deleteFavorite = async ({ assetId , userId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('catalog', '/v1/favorites/users/' + userId + '/assets/' + assetId + '/favorite'));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;