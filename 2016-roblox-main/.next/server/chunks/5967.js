"use strict";
exports.id = 5967;
exports.ids = [5967];
exports.modules = {

/***/ 5967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bG": () => (/* binding */ sendMessage),
/* harmony export */   "qm": () => (/* binding */ getAnnouncements),
/* harmony export */   "_U": () => (/* binding */ getMessages),
/* harmony export */   "xr": () => (/* binding */ toggleReadStatus),
/* harmony export */   "Lk": () => (/* binding */ toggleArchiveStatus),
/* harmony export */   "Hs": () => (/* binding */ getUnreadMessageCount)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const sendMessage = ({ userId , subject , body , replyMessageId , includePreviousMessage  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', '/v1/messages/send'), {
        recipientid: userId,
        body,
        subject,
        replyMessageId,
        includePreviousMessage
    }).then((d)=>d.data
    );
};
const getAnnouncements = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', '/v1/announcements')).then((d)=>d.data
    );
};
const getMessages = ({ tab , offset , limit  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', `/v1/messages?messageTab=${encodeURIComponent(tab)}&pageSize=${limit}&pageNumber=${offset / limit}`)).then((d)=>d.data
    );
};
const toggleReadStatus = ({ messageIds , isRead  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', `/v1/messages/${isRead ? 'mark-read' : 'mark-unread'}`), {
        messageIds
    });
};
const toggleArchiveStatus = ({ messageIds , isArchived  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', `/v1/messages/${isArchived ? 'archive' : 'unarchive'}`), {
        messageIds
    });
};
/**
 * Get the count of unread messages
 * @returns {Promise<number>}
 */ const getUnreadMessageCount = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('privatemessages', `/v1/messages/unread/count`)).then((d)=>d.data.count
    );
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;