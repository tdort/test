"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$c": () => (/* binding */ getRules),
/* harmony export */   "wX": () => (/* binding */ getAvatar),
/* harmony export */   "qH": () => (/* binding */ getMyAvatar),
/* harmony export */   "oY": () => (/* binding */ getItemRestrictions),
/* harmony export */   "c8": () => (/* binding */ getRecentItems),
/* harmony export */   "Ly": () => (/* binding */ RECENT_ITEMS),
/* harmony export */   "$g": () => (/* binding */ redrawMyAvatar),
/* harmony export */   "Vt": () => (/* binding */ setWearingAssets),
/* harmony export */   "Ow": () => (/* binding */ setColors),
/* harmony export */   "YK": () => (/* binding */ setRigType),
/* harmony export */   "Sh": () => (/* binding */ setScales),
/* harmony export */   "vx": () => (/* binding */ getOutfits),
/* harmony export */   "DM": () => (/* binding */ createOutfit),
/* harmony export */   "o$": () => (/* binding */ wearOutfit),
/* harmony export */   "pn": () => (/* binding */ deleteOutfit),
/* harmony export */   "Mu": () => (/* binding */ renameOutfit),
/* harmony export */   "lL": () => (/* binding */ updateOutfit)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getRules = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar-rules')).then((d)=>d.data
    );
};
const getAvatar = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/users/' + userId + '/avatar')).then((d)=>d.data
    );
};
const getMyAvatar = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar')).then((d)=>d.data
    );
};
/**
 * @typedef ItemRestrictionsClass
 * @property {number} assetId
 * @property {boolean} isLimited
 * @property {boolean} isLimitedUnique
 * @property {boolean} exists
 */ /**
 * @param {number[]} assetIds
 * @returns {Promise<ItemRestrictionsClass[]>}
 */ const getItemRestrictions = (assetIds)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('api', `/v1/items/restrictions?assetIds=${assetIds}`)).then((d)=>d.data
    );
};
/**
 *
 * @param {string} listType
 * @returns {Promise<PekoraCollection<Asset>>}
 */ const getRecentItems = async (listType)=>{
    let req = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)("GET", (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)("avatar", `/v1/recent-items/${listType}/list`));
    return req.data;
};
const RECENT_ITEMS = Object.freeze({
    ALL: "all",
    CLOTHING: "clothing",
    BODY_PARTS: "bodyparts",
    ANIMATIONS: "avataranimations",
    ACCESSORIES: "accessories",
    OUTFITS: "outfits",
    GEAR: "gear"
});
const redrawMyAvatar = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar/redraw-thumbnail')).then((d)=>d.data
    );
};
const setWearingAssets = ({ assetIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar/set-wearing-assets'), {
        assetIds
    });
};
const setColors = (bodyColors)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar/set-body-colors'), bodyColors);
};
const setRigType = (rigType)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar/set-player-avatar-type'), {
        playerAvatarType: rigType === "R15" ? 2 : 1
    });
};
const setScales = (scales)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/avatar/set-scales'), scales);
};
/**
 * @typedef {Object} OutfitItem
 * @property {number} id - Unique identifier for the item.
 * @property {string} name - Name of the item.
 * @property {string} created - ISO 8601 timestamp indicating when the item was created.
 */ /**
 * @typedef {Object} OutfitResponse
 * @property {number} filteredCount - Number of items after applying filters (can be 0).
 * @property {OutfitItem[]} data - Array of item objects.
 * @property {number} total - Total number of items available.
 */ /**
 * @param {number} userId
 * @param {number?} limit
 * @returns {OutfitResponse}
 */ const getOutfits = ({ userId , limit =50  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/users/' + userId + `/outfits?itemsPerPage=${limit}&page=1`)).then((d)=>d.data
    );
};
const createOutfit = ({ name  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/outfits/create'), {
        name
    });
};
const wearOutfit = ({ outfitId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/outfits/' + outfitId + '/wear'));
};
const deleteOutfit = ({ outfitId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/outfits/' + outfitId + '/delete'));
};
const renameOutfit = ({ outfitId , name  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', `/v1/outfits/${outfitId}/rename`), {
        name
    });
};
const updateOutfit = ({ outfitId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('avatar', '/v1/outfits/' + outfitId), {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;