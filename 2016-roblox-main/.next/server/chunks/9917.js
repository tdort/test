"use strict";
exports.id = 9917;
exports.ids = [9917];
exports.modules = {

/***/ 9917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "no": () => (/* binding */ getUserGroups),
/* harmony export */   "pz": () => (/* binding */ getPermissionsForRoleset),
/* harmony export */   "be": () => (/* binding */ joinGroup),
/* harmony export */   "Ln": () => (/* binding */ leaveGroup),
/* harmony export */   "Tf": () => (/* binding */ setStatus),
/* harmony export */   "sS": () => (/* binding */ createGroup),
/* harmony export */   "F3": () => (/* binding */ getRoles),
/* harmony export */   "Zw": () => (/* binding */ getMembers),
/* harmony export */   "Tm": () => (/* binding */ getRolesetMembers),
/* harmony export */   "TD": () => (/* binding */ getWall),
/* harmony export */   "Qo": () => (/* binding */ postToWall),
/* harmony export */   "fR": () => (/* binding */ deletePost),
/* harmony export */   "C5": () => (/* binding */ getInfo),
/* harmony export */   "qo": () => (/* binding */ claimGroupOwnership),
/* harmony export */   "Uv": () => (/* binding */ setGroupAsPrimary),
/* harmony export */   "AE": () => (/* binding */ removePrimaryGroup),
/* harmony export */   "TC": () => (/* binding */ getPrimaryGroup),
/* harmony export */   "WR": () => (/* binding */ setUserRole),
/* harmony export */   "I7": () => (/* binding */ setGroupIcon),
/* harmony export */   "FH": () => (/* binding */ setGroupDescription),
/* harmony export */   "Lm": () => (/* binding */ getGroupSettings),
/* harmony export */   "Iu": () => (/* binding */ setGroupSettings),
/* harmony export */   "x_": () => (/* binding */ changeGroupOwner),
/* harmony export */   "fA": () => (/* binding */ createRole),
/* harmony export */   "Aq": () => (/* binding */ editRole),
/* harmony export */   "Rd": () => (/* binding */ deleteRole),
/* harmony export */   "G0": () => (/* binding */ setRolePermissions),
/* harmony export */   "pU": () => (/* binding */ oneTimePayout),
/* harmony export */   "yL": () => (/* binding */ getGroupInfo),
/* harmony export */   "UT": () => (/* binding */ getGroupAuditLog)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getUserGroups = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/users/${userId}/groups/roles`)).then((d)=>d.data.data
    );
};
const getPermissionsForRoleset = ({ groupId , rolesetId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/roles/${rolesetId}/permissions`)).then((d)=>d.data
    );
};
const joinGroup = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/users`));
};
const leaveGroup = ({ groupId , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/users/${userId}`));
};
const setStatus = ({ groupId , message  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/status`), {
        message
    });
};
const createGroup = ({ name , description , iconElement  })=>{
    const f = new FormData();
    f.append('name', name);
    f.append('description', description);
    f.append('icon', iconElement.files[0]);
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/create`), f).then((d)=>d.data
    );
};
const getRoles = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/roles`)).then((d)=>d.data.roles
    );
};
const getMembers = ({ groupId , cursor , limit =10 , sortOrder  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/users?cursor=${encodeURIComponent(cursor || '')}&limit=${limit}&sortOrder=${sortOrder}`)).then((d)=>d.data
    );
};
const getRolesetMembers = ({ groupId , roleSetId , cursor , limit =10 , sortOrder  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/roles/${roleSetId}/users?cursor=${encodeURIComponent(cursor || '')}&limit=${limit}&sortOrder=${sortOrder}`)).then((d)=>d.data
    );
};
const getWall = ({ groupId , cursor , sort , limit  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v2/groups/${groupId}/wall/posts?sortOrder=${sort}&limit=${limit}&cursor=${encodeURIComponent(cursor || "")}`)).then((d)=>d.data
    );
};
const postToWall = ({ groupId , content  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/wall/posts`), {
        body: content
    });
};
const deletePost = ({ groupId , postId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/wall/posts/${postId}`));
};
const getInfo = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}`)).then((d)=>d.data
    );
};
const claimGroupOwnership = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/claim-ownership`));
};
const setGroupAsPrimary = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/user/groups/primary`), {
        groupId
    });
};
const removePrimaryGroup = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/user/groups/primary`));
};
const getPrimaryGroup = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/users/${userId}/groups/primary/role`)).then((d)=>d.data
    );
};
const setUserRole = ({ groupId , userId , roleId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/users/${userId}`), {
        roleId: roleId
    });
};
const setGroupIcon = ({ groupId , icon  })=>{
    const f = new FormData();
    f.append('file', icon);
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/icon?groupId=${groupId}`), f).then((d)=>d.data
    );
};
const setGroupDescription = ({ groupId , description  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/description`), {
        description
    });
};
const getGroupSettings = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/settings`)).then((d)=>d.data
    );
};
const setGroupSettings = ({ groupId , isApprovalRequired , areEnemiesAllowed , areGroupFundsVisible , areGroupGamesVisible  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/settings`), {
        isApprovalRequired,
        areEnemiesAllowed,
        areGroupFundsVisible,
        areGroupGamesVisible
    });
};
const changeGroupOwner = async ({ groupId , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/change-owner`), {
        userId
    });
};
const createRole = async ({ groupId , name , description , rank  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/rolesets/create`), {
        name,
        description,
        rank
    });
};
const editRole = async ({ groupId , roleId , name , description , rank  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/rolesets/${roleId}`), {
        name,
        description,
        rank
    });
};
const deleteRole = async ({ groupId , roleId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('DELETE', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/rolesets/${roleId}`));
};
const setRolePermissions = async (groupId, roleId, permissions)=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/roles/${roleId}/permissions`), {
        permissions: permissions
    });
};
const oneTimePayout = async ({ groupId , userId , amount , currencyType ='Robux'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/payouts`), {
        PayoutType: 'FixedAmount',
        CurrencyType: currencyType,
        Recipients: [
            {
                recipientId: userId,
                recipientType: 'User',
                amount
            }
        ]
    });
};
const getGroupInfo = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}`)).then((d)=>d.data
    );
};
const getGroupAuditLog = ({ groupId , cursor , userId , action  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('groups', `/v1/groups/${groupId}/audit-log?cursor=${cursor}&action=${action}&userId=${userId}&sortOrder=desc&limit=100`)).then((d)=>d.data
    );
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;