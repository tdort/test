"use strict";
exports.id = 3766;
exports.ids = [3766];
exports.modules = {

/***/ 3766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Y": () => (/* binding */ getMyInfo),
/* harmony export */   "bG": () => (/* binding */ getUserInfo),
/* harmony export */   "Tq": () => (/* binding */ getUserStatus),
/* harmony export */   "Nf": () => (/* binding */ updateStatus),
/* harmony export */   "h6": () => (/* binding */ getPreviousUsernames),
/* harmony export */   "pz": () => (/* binding */ searchUsers),
/* harmony export */   "$$": () => (/* binding */ getMembershipType),
/* harmony export */   "Y3": () => (/* binding */ getUserIdByUsername)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const baseUrl = (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('users', '');
const getMyInfo = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', baseUrl + '/v1/users/authenticated').then((d)=>d.data
    );
};
const getUserInfo = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', baseUrl + '/v1/users/' + userId).then((d)=>d.data
    );
};
const getUserStatus = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', baseUrl + '/v1/users/' + userId + '/status').then((d)=>d.data
    );
};
const updateStatus = ({ newStatus , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('users', '/v1/users/' + userId + '/status'), {
        status: newStatus
    }).then((d)=>d.data
    );
};
const getPreviousUsernames = async ({ userId  })=>{
    let cursor = '';
    let names = [];
    do {
        let results = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('users', '/v1/users/' + userId + '/username-history?limit=100&cursor=' + encodeURIComponent(cursor)));
        results.data.data.forEach((v)=>names.push(v.name)
        );
        cursor = results.data.nextPageCursor;
    }while (cursor !== null);
    return names;
};
const searchUsers = async ({ keyword , limit , offset  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getBaseUrl */ .SV)() + 'search/users/results?keyword=' + (keyword || '') + '&maxRows=' + limit + '&startIndex=' + offset).then((d)=>d.data
    );
};
const getMembershipType = async ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('premiumfeatures', '/v1/users/' + userId + '/validate-membership')).then((d)=>d.data
    ).then((data)=>{
        if (data === true) {
            return 4;
        } else if (data === false) {
            return 0;
        }
        return data;
    });
};
const getUserIdByUsername = async (username)=>{
    let result = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('users', `/v1/usernames/users`), {
        usernames: [
            username
        ]
    });
    if (!result.data.data.length) throw new Error('Invalid username');
    return result.data.data[0].id;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;