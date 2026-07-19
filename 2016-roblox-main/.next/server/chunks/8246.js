"use strict";
exports.id = 8246;
exports.ids = [8246];
exports.modules = {

/***/ 8246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z0": () => (/* binding */ getOwnedCopies),
/* harmony export */   "$v": () => (/* binding */ getInventory),
/* harmony export */   "_l": () => (/* binding */ getFavorites),
/* harmony export */   "bG": () => (/* binding */ getCollections),
/* harmony export */   "ov": () => (/* binding */ getCollectibleInventory),
/* harmony export */   "zg": () => (/* binding */ getCollectibleOwners)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const baseUrl = (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('inventory', '');
const getOwnedCopies = ({ assetId , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', `${baseUrl}/v1/users/${userId}/items/Asset/${assetId}`).then((d)=>d.data.data.map((v)=>{
            return {
                userAssetId: v.instanceId,
                seller: null,
                price: null,
                serialNumber: null
            };
        })
    );
};
const getInventory = ({ userId , limit , cursor , assetTypeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + `/users/inventory/list-json?userId=${userId}&assetTypeId=${assetTypeId}&cursor=${encodeURIComponent(cursor || '')}&itemsPerPage=${limit}`).then((d)=>d.data
    );
};
const getFavorites = ({ userId , limit , cursor , assetTypeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + `/users/favorites/list-json?userId=${userId}&assetTypeId=${assetTypeId}&pageNumber=${cursor || 1}&itemsPerPage=${limit}`).then((d)=>d.data
    ).then((d)=>{
        // we have to add cursors because roblox uses pageNumber for this endpoint.
        d.Data.nextPageCursor = cursor + 1;
        d.Data.previousPageCursor = cursor - 1;
        return d;
    });
};
const getCollections = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + `/users/profile/robloxcollections-json?userId=${userId}`).then((d)=>d.data.CollectionsItems
    );
};
const getCollectibleInventory = ({ userId , cursor , limit , assetTypeId ='null'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('inventory', `/v1/users/${userId}/assets/collectibles?cursor=${encodeURIComponent(cursor || '')}&limit=${limit}&assetType=${assetTypeId}`)).then((d)=>d.data
    );
};
const getCollectibleOwners = ({ assetId , limit , sort , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('inventory', `/v2/assets/${assetId}/owners?cursor=${encodeURIComponent(cursor || '')}&limit=${limit}&sortOrder=${sort}`)).then((d)=>d.data
    );
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;