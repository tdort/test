"use strict";
exports.id = 6002;
exports.ids = [6002];
exports.modules = {

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const Link = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: props.href,
        children: props.children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 8586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ve": () => (/* binding */ multiGetUserThumbnails),
/* harmony export */   "Rv": () => (/* binding */ multiGetUserHeadshots),
/* harmony export */   "JM": () => (/* binding */ multiGetOutfitThumbnails),
/* harmony export */   "tn": () => (/* binding */ multiGetGroupIcons),
/* harmony export */   "A3": () => (/* binding */ multiGetAssetThumbnails),
/* harmony export */   "$U": () => (/* binding */ multiGetUniverseIcons)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_1__]);
_lib_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const toCsv = (str)=>{
    if (typeof str === 'string') return str;
    return encodeURIComponent(str.join(','));
};
const addBaseUrl = (arrayOfThumbs)=>{
    return arrayOfThumbs.map((v)=>{
        if (typeof v.imageUrl === 'string' && !v.imageUrl.startsWith('http')) {
            v.imageUrl = (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + v.imageUrl;
        }
        return v;
    });
};
const multiGetUserThumbnails = ({ userIds , size ='420x420' , format ='png'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/users/avatar?userIds=${toCsv(userIds)}&size=${size}&format=${format}`)).then((d)=>d.data.data
    ).then(addBaseUrl);
};
let _multiGetHeadshotsMeta = {
    locked: false,
    cache: {},
    pending: [],
    onFinish: [],
    didRun: false,
    timer: 0
};
const multiGetUserHeadshots = ({ userIds , size ='420x420' , format ='png'  })=>{
    userIds = [
        ...new Set(userIds)
    ];
    let results = [];
    let toRemove = [];
    for (const id of userIds){
        const key = `${id} ${size} ${format}`;
        const exists = _multiGetHeadshotsMeta.cache[key];
        if (exists) {
            results.push({
                imageUrl: exists,
                state: 'Completed',
                targetId: typeof id === 'string' ? parseInt(id, 10) : id
            });
            toRemove.push(id);
        }
    }
    userIds = userIds.filter((v)=>toRemove.includes(v) === false
    );
    if (userIds.length === 0) {
        return new Promise((res)=>res(results)
        );
    }
    if (_multiGetHeadshotsMeta.pending.length !== 0) {
        clearTimeout(_multiGetHeadshotsMeta.timer);
    }
    userIds.forEach((v)=>{
        _multiGetHeadshotsMeta.pending.push(v);
    });
    // @ts-ignore
    _multiGetHeadshotsMeta.timer = setTimeout(()=>{
        console.debug('[info] Make avatar/headshot request');
        const { pending , onFinish  } = _multiGetHeadshotsMeta;
        _multiGetHeadshotsMeta.onFinish = [];
        _multiGetHeadshotsMeta.pending = [];
        _multiGetHeadshotsMeta.timer = 0;
        (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/users/avatar-headshot?userIds=${toCsv(pending)}&size=${size}&format=${format}`)).then((d)=>d.data.data
        ).then(addBaseUrl).then((finalResults)=>{
            finalResults = addBaseUrl(finalResults);
            for (const item of finalResults){
                const imageUrl = item.imageUrl;
                if (typeof imageUrl !== 'string') continue;
                _multiGetHeadshotsMeta.cache[`${item.targetId} ${size} ${format}`] = imageUrl;
            }
            onFinish.forEach((v)=>{
                v(finalResults);
            });
        });
    }, 50);
    return new Promise((res, rej)=>{
        _multiGetHeadshotsMeta.onFinish.push((data)=>{
            res(data);
        });
    });
};
const multiGetOutfitThumbnails = ({ userOutfitIds , size ='420x420' , format ='png'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/users/outfits?userOutfitIds=${toCsv(userOutfitIds)}&size=${size}&format=${format}`)).then((d)=>d.data.data
    );
};
const multiGetGroupIcons = ({ groupIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('get', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/groups/icons?groupIds=${toCsv(groupIds)}&format=png&size=420x420`)).then((d)=>d.data.data
    ).then(addBaseUrl);
};
const multiGetAssetThumbnails = ({ assetIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('get', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/assets?assetIds=${toCsv(assetIds)}&format=png&size=420x420`)).then((d)=>d.data.data
    ).then(addBaseUrl);
};
const multiGetUniverseIcons = ({ universeIds , size  })=>{
    let all = [];
    let c = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(universeIds, 100);
    for (const item of c){
        all.push((0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('get', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('thumbnails', `/v1/games/icons?size=${size}&format=png&universeIds=${toCsv(item)}`)).then((d)=>d.data.data
        ).then(addBaseUrl));
    }
    return Promise.all(all).then((d)=>{
        let arr = [];
        d.forEach((v)=>{
            v.forEach((x)=>{
                arr.push(x);
            });
        });
        return arr;
    }).then((d)=>{
        return d;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;