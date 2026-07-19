"use strict";
exports.id = 1885;
exports.ids = [1885];
exports.modules = {

/***/ 1885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i0": () => (/* binding */ uploadAsset),
/* harmony export */   "EC": () => (/* binding */ uploadBadgePass),
/* harmony export */   "R_": () => (/* binding */ uploadAssetVersion),
/* harmony export */   "gs": () => (/* binding */ getCreatedItems),
/* harmony export */   "dQ": () => (/* binding */ updateAsset),
/* harmony export */   "sl": () => (/* binding */ setAssetPrice),
/* harmony export */   "Ks": () => (/* binding */ getAllGenres),
/* harmony export */   "pY": () => (/* binding */ setUniverseMaxPlayers),
/* harmony export */   "h_": () => (/* binding */ setGearPermissions),
/* harmony export */   "kJ": () => (/* binding */ setPlayable),
/* harmony export */   "jD": () => (/* binding */ get2020Menu),
/* harmony export */   "lI": () => (/* binding */ set2020Menu),
/* harmony export */   "HG": () => (/* binding */ setPlaceYear),
/* harmony export */   "YK": () => (/* binding */ setRigType)
/* harmony export */ });
/* unused harmony export getCreatedAssetDetails */
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2300);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_1__]);
_lib_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const uploadAsset = ({ name , assetTypeId , file , groupId  })=>{
    let formData = new FormData();
    formData.append('name', name);
    formData.append('assetType', assetTypeId);
    formData.append('file', file);
    if (groupId) {
        formData.append('groupId', groupId);
    }
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + 'develop/upload', formData);
};
const uploadBadgePass = ({ name , description , assetTypeId , placeId , file , groupId  })=>{
    let formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('assetType', assetTypeId);
    formData.append('placeId', placeId);
    formData.append('file', file);
    if (groupId) {
        formData.append('groupId', groupId);
    }
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + 'develop/upload', formData);
};
const uploadAssetVersion = ({ assetId , file  })=>{
    let form = new FormData();
    form.append('assetId', assetId);
    form.append('file', file);
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + 'develop/upload-version', form);
};
const getCreatedAssetDetails = (assetIds)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('itemconfiguration', '/v1/creations/get-asset-details'), {
        assetIds
    });
};
const getCreatedItems = ({ assetType , limit , cursor , groupId  })=>{
    let url = '/v1/creations/get-assets?assetType=' + assetType + '&limit=' + limit + '&cursor=' + encodeURIComponent(cursor);
    if (groupId) {
        url = url + '&groupId=' + encodeURIComponent(groupId);
    }
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('itemconfiguration', url)).then((assets)=>{
        if (assets.data.data.length !== 0) {
            return getCreatedAssetDetails(assets.data.data.map((v)=>v.assetId
            )).then((d)=>{
                assets.data.data = d.data.sort((a, b)=>a.assetId > b.assetId ? -1 : 1
                );
                return assets.data;
            });
        }
        return assets.data;
    });
};
const updateAsset = async ({ assetId , name , description , genres , isCopyingAllowed , enableComments  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/assets/${assetId}`), {
        name,
        description,
        genres,
        isCopyingAllowed,
        enableComments
    });
};
const setAssetPrice = async ({ assetId , priceInRobux , priceInTickets  })=>{
    let obj = {
        priceInRobux
    };
    if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('sellItemForTickets', true)) {
        obj.priceInTickets = priceInTickets;
    }
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('itemconfiguration', `/v1/assets/${assetId}/update-price`), obj);
};
const getAllGenres = async ()=>{
    return (await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', '/v1/assets/genres'))).data.data;
};
const setUniverseMaxPlayers = async ({ universeId , maxPlayers  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/universes/${universeId}/max-player-count`), {
        maxPlayers
    });
};
const setGearPermissions = async ({ universeId , enabled  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/universes/${universeId}/gear-permissions`), {
        isEnabled: enabled
    });
};
const setPlayable = async ({ universeId , isPlayable  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/universes/${universeId}/playable`), {
        isPlayable
    });
};
const get2020Menu = async ()=>{
    try {
        const response = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('users', '/v1/user/get-2020-menu'));
        return response.data;
    } catch (error) {
        console.error('failed to get 2020 menu pref:', error);
        throw error;
    }
};
const set2020Menu = async ({ enabled  })=>{
    try {
        const response = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('users', '/v1/users/2020-menu'), {
            enabled
        });
        return response.data;
    } catch (error) {
        console.error('failed to set 2020 menu pref:', error);
        throw error;
    }
};
const setPlaceYear = async ({ universeId , year  })=>{
    try {
        const response = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/universes/${universeId}/year`), {
            year
        });
        return response.data;
    } catch (error) {
        console.error('failed to set place year:', error);
        throw error;
    }
};
const setRigType = async ({ universeId , rigType  })=>{
    try {
        const response = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('develop', `/v1/universes/${universeId}/rig-type`), {
            rigType
        });
        return response.data;
    } catch (error) {
        console.error('failed to set rig type:', error);
        throw error;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;