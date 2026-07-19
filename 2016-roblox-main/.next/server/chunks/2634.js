"use strict";
exports.id = 2634;
exports.ids = [2634];
exports.modules = {

/***/ 2300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9159);

const getFlag = (flag, defaultValue)=>{
    const v = _config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].publicRuntimeConfig.backend.flags */ .Z.publicRuntimeConfig.backend.flags[flag];
    if (typeof v === 'undefined') return defaultValue;
    return v;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlag);


/***/ }),

/***/ 1747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__]);
_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getKey = (id, type, size)=>{
    return type + '_' + id + '_' + size;
};
const thumbnailReducer = (prev, action)=>{
    let newData = {
        ...prev
    };
    if (action.event === 'MULTI_ADD') {
        for (const item of action.thumbnails){
            newData[getKey(item.targetId, action.type, action.size)] = item.imageUrl;
        }
    }
    return newData;
};
const ThumbnailStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_0__.createContainer)(()=>{
    const { 0: thumbnails , 1: dispatchThumbnails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(thumbnailReducer, {});
    const pendingState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        pending: false,
        pendingCount: 0,
        pendingTimer: 0,
        pendingItems: [],
        userThumbnail: [],
        userHeadshot: [],
        asset: [],
        groupIcon: []
    });
    const doWithRetry = (cb)=>{
        (async ()=>{
            while(true){
                try {
                    await cb();
                    return;
                } catch (e) {
                    if (e.response && e.response.status === 400) return;
                    await new Promise((res)=>setTimeout(res, 1000)
                    );
                }
            }
        })();
    };
    const fetchThumbnails = ()=>{
        const copy = pendingState.current;
        pendingState.current = {
            pending: false,
            pendingCount: 0,
            pendingTimer: 0,
            pendingItems: copy.pendingItems,
            userThumbnail: [],
            userHeadshot: [],
            asset: [],
            groupIcon: []
        };
        const getAndProcessThumbnails = (type, cb)=>{
            const assets = copy[type];
            if (assets && assets.length) {
                for (const t of assets){
                    pendingState.current.pendingItems.push(getKey(t.id, type, t.size || '420x420'));
                }
                doWithRetry(async ()=>{
                    const data = await cb(assets);
                    dispatchThumbnails({
                        event: 'MULTI_ADD',
                        type: type,
                        size: '420x420',
                        thumbnails: data
                    });
                    for (const item of data){
                        pendingState.current.pendingItems = pendingState.current.pendingItems.filter((v)=>v !== getKey(item.targetId, type, '420x420')
                        );
                    }
                });
            }
        };
        getAndProcessThumbnails('userThumbnail', (items)=>{
            return (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__/* .multiGetUserThumbnails */ .ve)({
                userIds: items.map((v)=>v.id
                ),
                size: '420x420',
                format: 'png'
            });
        });
        getAndProcessThumbnails('userHeadshot', (items)=>{
            return (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__/* .multiGetUserHeadshots */ .Rv)({
                userIds: items.map((v)=>v.id
                ),
                size: '420x420',
                format: 'png'
            });
        });
        getAndProcessThumbnails('asset', (items)=>{
            return (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__/* .multiGetAssetThumbnails */ .A3)({
                assetIds: items.map((v)=>v.id
                )
            });
        });
        getAndProcessThumbnails('groupIcon', (items)=>{
            return (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__/* .multiGetGroupIcons */ .tn)({
                groupIds: items.map((v)=>v.id
                )
            });
        });
    };
    const requestThumbnail = (id, type, size = '420x420')=>{
        if (!pendingState.current[type]) {
            pendingState.current[type] = [];
        }
        let exists = pendingState.current[type].find((v)=>v.id === id
        );
        if (exists) return;
        if (pendingState.current.pendingItems.includes(getKey(id, type, size))) {
            return;
        }
        pendingState.current[type].push({
            id: id,
            size: size
        });
        pendingState.current.pendingCount++;
        if (!pendingState.current.pending) {
            pendingState.current.pending = true;
            pendingState.current.pendingTimer = setTimeout(()=>{
                fetchThumbnails();
            }, 10);
        } else if (pendingState.current.pendingCount >= 50) {
            clearTimeout(pendingState.current.pendingTimer);
            fetchThumbnails();
        }
    };
    const getPlaceholder = ()=>{
        return '/img/placeholder.png';
    };
    const getThumbnailHandler = (type)=>{
        return (id, size = '420x420')=>{
            if (![
                '420x420'
            ].includes(size)) {
                throw new Error('Invalid size');
            }
            const t = thumbnails[getKey(id, type, size)];
            // if t is null, the image is pending/blocked/not available
            if (t === null || typeof t === 'string' && t.length === 0) {
                return getPlaceholder();
            }
            if (t === undefined) {
                requestThumbnail(id, type, size);
                return getPlaceholder();
            }
            return t;
        };
    };
    const getThumbnailRemovalHandler = (type)=>{
        return (id, size = '420x420')=>{
            delete thumbnails[getKey(id, type, size)];
        };
    };
    return {
        thumbnails,
        getUserThumbnail: getThumbnailHandler('userThumbnail'),
        removeUserThumbnail: getThumbnailRemovalHandler('userThumbnail'),
        getUserHeadshot: getThumbnailHandler('userHeadshot'),
        removeUserHeadshot: getThumbnailRemovalHandler('userHeadshot'),
        getAssetThumbnail: getThumbnailHandler('asset'),
        getGroupIcon: getThumbnailHandler('groupIcon'),
        getPlaceholder
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;