"use strict";
exports.id = 4368;
exports.ids = [4368];
exports.modules = {

/***/ 4368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "rV": () => (/* binding */ validateUsername),
/* harmony export */   "JC": () => (/* binding */ changeUsername),
/* harmony export */   "Rb": () => (/* binding */ logoutFromAllOtherSessions)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const login = ({ username , password  })=>{
    const formBody = new URLSearchParams({
        username,
        password
    }).toString();
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', '/login', formBody, {
        'Content-Type': 'application/x-www-form-urlencoded'
    });
};
const logout = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('auth', '/v2/logout'), {});
};
const changePassword = ({ existingPassword , newPassword  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('auth', `/v2/user/passwords/change`), {
        currentPassword: existingPassword,
        newPassword
    });
};
const validateUsername = ({ username , context  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('auth', `/v1/usernames/validate?username=${encodeURIComponent(username)}&context=${encodeURIComponent(context)}`)).then((d)=>d.data
    );
};
const changeUsername = ({ username , password  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('auth', `/v1/username`), {
        username,
        password
    });
};
const logoutFromAllOtherSessions = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('auth', '/v2/logoutfromallsessionsandreauthenticate'));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;