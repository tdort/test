(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,2197];
exports.modules = {

/***/ 9163:
/***/ ((module) => {

// Exports
module.exports = {
	"chatEntry": "chatEntry_chatEntry__SEAwk",
	"chatHeadshotColumn": "chatEntry_chatHeadshotColumn__il21F",
	"chatHeadshot": "chatEntry_chatHeadshot__ZLaJR",
	"chatHeadshotImage": "chatEntry_chatHeadshotImage__uBeEp",
	"chatLatestMessage": "chatEntry_chatLatestMessage__2Yxmu",
	"chatUsername": "chatEntry_chatUsername__F153v",
	"chatMessage": "chatEntry_chatMessage__LwYHb",
	"chatMessageUnread": "chatEntry_chatMessageUnread__m6_Tg"
};


/***/ }),

/***/ 7144:
/***/ ((module) => {

// Exports
module.exports = {
	"chatMenu": "chatMenu_chatMenu__3SjMs",
	"chatMenuHeader": "chatMenu_chatMenuHeader__Xy3ps",
	"chatLabel": "chatMenu_chatLabel__DDNOw",
	"chatMenuBody": "chatMenu_chatMenuBody__9LE3E",
	"unreadBubble": "chatMenu_unreadBubble__K3BC0",
	"chatClose": "chatMenu_chatClose__6l_Re",
	"chatMessageHistory": "chatMenu_chatMessageHistory__fx0Zb",
	"chatMessageBox": "chatMenu_chatMessageBox__iJRKZ"
};


/***/ }),

/***/ 28:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "conversationEntry_box__2NuH5",
	"boxOther": "conversationEntry_boxOther__38G1V",
	"boxSelf": "conversationEntry_boxSelf__NR8P7",
	"messageBoxOther": "conversationEntry_messageBoxOther__culu7",
	"messageBoxSelf": "conversationEntry_messageBoxSelf__kOHbB",
	"headshot": "conversationEntry_headshot__17YBX",
	"message": "conversationEntry_message__LzooN",
	"messageOtherHeadshot": "conversationEntry_messageOtherHeadshot__DeGhq",
	"messageOther": "conversationEntry_messageOther__tktJI",
	"date": "conversationEntry_date__ZoNkQ",
	"dateLabel": "conversationEntry_dateLabel__19KMv",
	"dateSpan": "conversationEntry_dateSpan__h2IP2"
};


/***/ }),

/***/ 1336:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_container__Ufhp_"
};


/***/ }),

/***/ 1744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const conversationReducer = (state, action)=>{
    if (action.action === 'MULTI_ADD') {
        let newState = state ? [
            ...state
        ] : [];
        action.data.forEach((v)=>{
            if (!newState.find((x)=>x.id === v.id
            )) {
                newState.push(v);
            }
        });
        return newState;
    }
    if (action.action === 'MARK_AS_READ') {
        let newState = [
            ...state
        ];
        const convo = newState.find((a)=>a.id === action.conversationId
        );
        convo.hasUnreadMessages = false;
        return newState;
    }
    if (action.action === 'MULTI_ADD_LATEST_MESSAGES') {
        let newState = [
            ...state
        ];
        for (const item of action.data){
            const convo = newState.find((x)=>x.id === item.conversationId
            );
            let msg = item.chatMessages[0] || null;
            if (convo) {
                convo.latest = msg;
                if (msg && msg.read === false) {
                    convo.hasUnreadMessages = true;
                }
            }
        }
        return newState;
    }
    if (action.action === 'SET_TYPING_STATUS') {
        let newState = [
            ...state
        ];
        const convo = newState.find((a)=>a.id === action.conversationId
        );
        for (const participant of convo.participants){
            if (participant.targetId === action.userId) {
                participant.isTyping = action.isTyping;
            }
        }
        return newState;
    }
    return state;
};
const ChatStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_0__.createContainer)(()=>{
    const { 0: conversations , 1: dispatchConversations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(conversationReducer, null);
    const { 0: friends , 1: setFriends  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedConversation , 1: setSelectedConversation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const unreadCount = (()=>{
        if (!conversations) return null;
        let total = 0;
        for (const item of conversations){
            if (item.hasUnreadMessages) total++;
        }
        return total;
    })();
    return {
        unreadCount,
        conversations,
        dispatchConversations,
        selectedConversation,
        setSelectedConversation,
        friends,
        setFriends
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatStore);


/***/ }),

/***/ 3438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9163);
/* harmony import */ var _chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9767);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_playerHeadshot__WEBPACK_IMPORTED_MODULE_1__]);
_playerHeadshot__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ChatEntry = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const { user , conversationId , latestMessage , hasUnread  } = props;
    const isUnread = hasUnread;
    const onClick = (e)=>{
        e.preventDefault();
        let existing = [
            ...store.selectedConversation.filter((v)=>{
                if (v.conversationId === null) {
                    return v.user.id !== user.id;
                }
                return v.conversationId !== conversationId;
            })
        ];
        if (existing.length >= 3) {
            existing = existing.slice(0, 2);
        }
        existing.unshift({
            user,
            conversationId,
            latestMessage
        });
        store.setSelectedConversation(existing);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatEntry),
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatHeadshotColumn),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatHeadshot),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatHeadshotImage),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            id: user.id,
                            name: user.username
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatLatestMessage),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatUsername),
                        children: user.username
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessage) + ' text-truncate ' + (isUnread ? (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessageUnread) : ''),
                        children: user.isTyping ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "fst-italic",
                            children: "Typing..."
                        }) : latestMessage ? latestMessage.content : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: " "
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatEntry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7144);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(886);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1744);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_chat__WEBPACK_IMPORTED_MODULE_1__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__]);
([_services_chat__WEBPACK_IMPORTED_MODULE_1__, _stores_authentication__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ChatInput = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const { locked , setLocked , conversationId , addCreatedMessage , user  } = props;
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const typingState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
        sentAt: 0,
        timer: null,
        broadcastTypingTimer: null
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        autoFocus: true,
        ref: inputRef,
        type: "text",
        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatMessageBox),
        placeholder: "Send a message",
        onKeyDown: (e1)=>{
            if (locked) return;
            if (conversationId) {
                if (typingState.current.timer) {
                    clearTimeout(typingState.current.timer);
                }
                typingState.current.timer = setTimeout(()=>{
                    clearInterval(typingState.current.broadcastTypingTimer);
                    typingState.current.broadcastTypingTimer = null;
                }, 3000);
                if (!typingState.current.broadcastTypingTimer) {
                    const updateStatus = ()=>{
                        (0,_services_chat__WEBPACK_IMPORTED_MODULE_1__/* .updateTypingStatus */ .x_)({
                            conversationId,
                            isTyping: true
                        });
                    };
                    typingState.current.broadcastTypingTimer = setInterval(()=>{
                        updateStatus();
                    }, 1000);
                    updateStatus();
                }
            }
            if (e1.key === 'Enter') {
                if (typingState.current.broadcastTypingTimer) {
                    clearInterval(typingState.current.broadcastTypingTimer);
                    typingState.current.broadcastTypingTimer = null;
                }
                if (typingState.current.timer) {
                    clearTimeout(typingState.current.timer);
                    typingState.current.timer = null;
                }
                setLocked(true);
                const message = e1.currentTarget.value;
                if (conversationId === null) {
                    if (!message || message.length < 3 || message.length > 255) return; // Invalid message
                    // We have to create a conversation, THEN send the message
                    (0,_services_chat__WEBPACK_IMPORTED_MODULE_1__/* .startOneToOneConversation */ .MJ)({
                        userId: user.id
                    }).then((d)=>{
                        store.dispatchConversations({
                            action: 'MULTI_ADD',
                            data: [
                                {
                                    id: d.conversation.id,
                                    hasUnreadMessages: false,
                                    participants: [
                                        {
                                            type: 'User',
                                            targetId: auth.userId,
                                            name: auth.username
                                        },
                                        {
                                            type: 'User',
                                            targetId: user.id,
                                            name: user.username
                                        }
                                    ],
                                    conversationType: 'OneToOneConversation',
                                    conversationTitle: {
                                        titleForViewer: null,
                                        isDefaultTitle: true
                                    },
                                    conversationUniverse: null
                                }, 
                            ]
                        });
                        (0,_services_chat__WEBPACK_IMPORTED_MODULE_1__/* .sendMessage */ .bG)({
                            conversationId: d.conversation.id,
                            message: message
                        }).then((msg)=>{
                            addCreatedMessage(msg, d.conversation.id);
                            // Update the ID
                            store.selectedConversation.find((a)=>a.user.id === user.id
                            ).conversationId = d.conversation.id;
                            store.setSelectedConversation([
                                ...store.selectedConversation
                            ]);
                        }).catch((e)=>{
                            setLocked(false);
                            // todo: feedback
                            console.error('[error] could not send message', e);
                        });
                    }).catch((e)=>{
                        // todo: feedback
                        setLocked(false);
                        console.error('[error] could not create conversation', e);
                    });
                } else {
                    // Just send the message like normal
                    (0,_services_chat__WEBPACK_IMPORTED_MODULE_1__/* .sendMessage */ .bG)({
                        conversationId: conversationId,
                        message: message
                    }).then((msg)=>{
                        addCreatedMessage(msg);
                        inputRef.current.value = '';
                        setLocked(false);
                    }).catch((e)=>{
                        //todo: feedback
                        setLocked(false);
                        console.error('[error] could not send message', e);
                    });
                }
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7144);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1744);
/* harmony import */ var _chatEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3438);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(886);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chatEntry__WEBPACK_IMPORTED_MODULE_3__, _services_chat__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__]);
([_chatEntry__WEBPACK_IMPORTED_MODULE_3__, _services_chat__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ChatMenuClosed = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatMenu),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatMenuHeader),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatLabel),
                onClick: ()=>{
                    props.setMenuOpen(true);
                },
                children: [
                    "Chat ",
                    store.unreadCount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().unreadBubble),
                        children: store.unreadCount
                    }) : null
                ]
            })
        })
    }));
};
const ChatMenuOpen = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatMenu),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatMenuHeader),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatLabel),
                    onClick: ()=>{
                        props.setMenuOpen(false);
                    },
                    children: [
                        "Chat ",
                        store.unreadCount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().unreadBubble),
                            children: store.unreadCount
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatMenuBody),
                children: [
                    store.conversations ? store.conversations.sort((a, b)=>{
                        return a.latest && b.latest ? dayjs__WEBPACK_IMPORTED_MODULE_6___default()(a.latest.sent).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_6___default()(b.latest.sent)) ? -1 : 1 : 0;
                    }).filter((v)=>v.conversationType === 'OneToOneConversation'
                    ).map((v)=>{
                        const other = v.participants.find((o)=>o.targetId !== auth.userId
                        );
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatEntry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            user: {
                                id: other.targetId,
                                username: other.name,
                                isTyping: other.isTyping || false
                            },
                            conversationId: v.id,
                            latestMessage: v.latest || null,
                            hasUnread: v.hasUnreadMessages
                        }, v.id));
                    }) : null,
                    store.friends ? store.friends.filter((v)=>{
                        return store.conversations.find((x)=>x.conversationType === 'OneToOneConversation' && x.participants.find((o)=>o.targetId === v.id
                            )
                        ) === undefined;
                    // return true;
                    }).map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatEntry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            user: {
                                id: v.id,
                                username: v.name,
                                isTyping: false
                            },
                            conversationId: null,
                            latestMessage: null,
                            hasUnread: false
                        }, v.id));
                    }) : null
                ]
            })
        ]
    }));
};
const ChatMenu = (props)=>{
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    if (menuOpen) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatMenuOpen, {
            setMenuOpen: setMenuOpen
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatMenuClosed, {
        setMenuOpen: setMenuOpen
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7144);
/* harmony import */ var _chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1744);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(886);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28);
/* harmony import */ var _conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _chatEntry_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9163);
/* harmony import */ var _chatEntry_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _playerHeadshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9767);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2300);
/* harmony import */ var _chatInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9615);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_chat__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_6__, _chatInput__WEBPACK_IMPORTED_MODULE_8__]);
([_services_chat__WEBPACK_IMPORTED_MODULE_3__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _playerHeadshot__WEBPACK_IMPORTED_MODULE_6__, _chatInput__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const useSignalCoreForRealTimeChat = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)('useSignalCoreForRealTimeChat', false);
const ChatInputMemo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        ...props
    })
);
/**
 *
 * @param {{id: string, sent: string, read: boolean, messageType: string, senderTargetId: number, content: string}[]} chat
 * @returns {*}
 */ const GenerateLayoutFromMessageHistory = (chat)=>{
    /**
   * @type {{type: 'message' | 'date'}[]}
   */ const final = [];
    chat.forEach((v, i, arr)=>{
        let previous = i > 0 ? arr[i - 1] : undefined;
        let next = i < arr.length ? arr[i + 1] : undefined;
        const previousInFinal = final.length > 0 ? final[final.length - 1] : undefined;
        if (previousInFinal && previousInFinal.type === 'message') {
            if (previousInFinal.data.senderTargetId === v.senderTargetId) {
                const currentTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(v.sent);
                const lastSendTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(previousInFinal.data.messages[previousInFinal.data.messages.length - 1]);
                // if (currentTime.day() !== lastSendTime.day() && currentTime.year() === lastSendTime.year())
                previousInFinal.data.messages.unshift(v);
                return;
            }
        }
        // If there is over "1 day" of difference between each message, add a date separator
        if (previousInFinal && previousInFinal.type === 'message') {
            const lastMessageSentAt = previousInFinal.data.messages[0].sent;
            const currentTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(v.sent);
            const lastSendTime = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(lastMessageSentAt);
            const now = dayjs__WEBPACK_IMPORTED_MODULE_4___default()();
            if (currentTime.day() !== lastSendTime.day()) {
                let doAddFull = true;
                if (currentTime.month() === lastSendTime.month() && currentTime.year() === lastSendTime.year()) {
                    const difference = lastSendTime.day() - currentTime.day();
                    const differenceToNow = currentTime.day() - now.day();
                    if (differenceToNow >= 7) {
                        doAddFull = false;
                        // e.g. "Nov 12, 2015"
                        final.push({
                            type: 'date',
                            data: {
                                label: currentTime.format('MMM DD, YYYY')
                            }
                        });
                    }
                }
                if (doAddFull) {
                    final.push({
                        type: 'date',
                        data: {
                            label: currentTime.format('ddd | h:mm A')
                        }
                    });
                }
            }
        }
        final.push({
            type: 'message',
            data: {
                senderTargetId: v.senderTargetId,
                messages: [
                    v
                ]
            }
        });
    });
    if (chat.length < 100) {
        final.push({
            type: 'date',
            data: {
                label: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(chat[0].sent).format('MMM DD, YYYY')
            }
        });
    }
    return final.reverse();
};
const ChatHistory = (props)=>{
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    if (props.messageLayout) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.messageLayout.map((v1)=>{
                if (v1.type === 'message') {
                    const isMe = auth.userId === v1.data.senderTargetId;
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().box) + ' ' + (isMe ? (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().boxSelf) : (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().boxOther)),
                        children: isMe ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().messageBoxSelf),
                                children: v1.data.messages.map((v)=>{
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().message),
                                        children: v.content
                                    }, v.id));
                                })
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().messageOtherHeadshot),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_10___default().chatHeadshot),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_chatEntry_module_css__WEBPACK_IMPORTED_MODULE_10___default().chatHeadshotImage),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_playerHeadshot__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                id: v1.data.senderTargetId,
                                                name: 'Roblox User'
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().messageOther),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().messageBoxOther),
                                        children: v1.data.messages.map((v)=>{
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().message),
                                                children: v.content
                                            }, v.id));
                                        })
                                    })
                                })
                            ]
                        })
                    }, v1.data.messages[0].id));
                } else if (v1.type === 'date') {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().date),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().dateLabel),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_conversationEntry_module_css__WEBPACK_IMPORTED_MODULE_9___default().dateSpan),
                                children: v1.data.label
                            })
                        })
                    }, 'date ' + v1.data.label));
                }
            })
        }));
    }
    return null;
};
const Conversation = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const myIndex = props.index;
    const { user , conversationId  } = props;
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)((prev, action)=>{
        if (action.action === 'MULTI_ADD') {
            let previous = prev ? [
                ...prev
            ] : [];
            let toAdd = action.data.filter((v)=>{
                return !previous.find((x)=>x.id === v.id
                );
            });
            if (toAdd.length === 0) return prev;
            for (const item of previous){
                toAdd.push(item);
            }
            return toAdd;
        }
        if (action.action === 'ADD_ONE') {
            if (!prev) return [
                action.data
            ];
            return [
                action.data,
                ...prev
            ];
        }
        if (action.action === 'RESET') return null;
        return prev;
    }, null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const myConvo = store.conversations.filter((v)=>v.id === conversationId
        )[0];
        if (!myConvo || !conversationId) return;
        if (myConvo.hasUnreadMessages) {
            store.dispatchConversations({
                action: 'MARK_AS_READ',
                conversationId
            });
        }
        if (messages && myConvo.latest && useSignalCoreForRealTimeChat) {
            const messageExists = messages.find((a)=>a.id === myConvo.latest.id
            );
            if (!messageExists) {
                setMessages({
                    action: 'MULTI_ADD',
                    data: [
                        myConvo.latest
                    ]
                });
                (0,_services_chat__WEBPACK_IMPORTED_MODULE_3__/* .markAsRead */ .zJ)({
                    conversationId: conversationId,
                    endMessageId: myConvo.latest.id
                }).then().catch((e)=>{
                // uh-oh
                });
            }
        }
    }, [
        store.conversations,
        messages
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        }
        setMessages({
            action: 'RESET'
        });
        if (conversationId === null) {
            return;
        }
        const loadMessages = ()=>{
            // TODO: paging
            (0,_services_chat__WEBPACK_IMPORTED_MODULE_3__/* .getMessages */ ._U)({
                conversationId,
                pageSize: 100,
                startId: ''
            }).then((data)=>{
                setMessages({
                    action: 'MULTI_ADD',
                    data: data
                });
                if (data.length) {
                    (0,_services_chat__WEBPACK_IMPORTED_MODULE_3__/* .markAsRead */ .zJ)({
                        conversationId: conversationId,
                        endMessageId: data[data.length - 1].id
                    }).then().catch((e)=>{
                    // uh-oh
                    });
                }
            });
        };
        if (!useSignalCoreForRealTimeChat) {
            timer.current = setInterval(()=>{
                loadMessages();
            }, 2 * 1000);
        }
        loadMessages();
        return ()=>{
            if (!useSignalCoreForRealTimeChat) {
                clearInterval(timer.current);
            }
            timer.current = null;
        };
    }, [
        user,
        conversationId
    ]);
    const addCreatedMessage = (msg, conversationIdOverride)=>{
        const newMsg = {
            id: msg.messageId,
            sent: msg.sent,
            content: msg.content,
            messageType: 'PlainText',
            senderTargetId: auth.userId
        };
        store.dispatchConversations({
            action: 'MULTI_ADD_LATEST_MESSAGES',
            data: [
                {
                    conversationId: conversationIdOverride || conversationId,
                    chatMessages: [
                        {
                            ...newMsg,
                            read: true
                        }
                    ]
                }
            ]
        });
        setMessages({
            action: 'ADD_ONE',
            data: newMsg
        });
    };
    const chatHistoryRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        chatHistoryRef.current.focus();
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatMenu),
        style: {
            right: 30 + (myIndex + 1) * 260
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatMenuHeader),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-inline-block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatLabel),
                            children: user.username
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatClose),
                        onClick: (e)=>{
                            e.preventDefault();
                            store.setSelectedConversation(store.selectedConversation.filter((v)=>{
                                if (conversationId) return v.conversationId !== conversationId;
                                return v.user.id !== user.id;
                            }));
                        },
                        children: "X"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatMenuBody),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_chatMenu_module_css__WEBPACK_IMPORTED_MODULE_11___default().chatMessageHistory),
                        ref: chatHistoryRef,
                        children: messages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatHistory, {
                            messageLayout: GenerateLayoutFromMessageHistory(messages)
                        }) : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatInputMemo, {
                        conversationId: conversationId,
                        locked: locked,
                        setLocked: setLocked,
                        addCreatedMessage: addCreatedMessage,
                        user: user
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conversation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_chatMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2005);
/* harmony import */ var _container_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1336);
/* harmony import */ var _container_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_container_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1744);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(886);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5435);
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7918);
/* harmony import */ var _components_conversationEntry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2551);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1719);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_chatMenu__WEBPACK_IMPORTED_MODULE_1__, _services_chat__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _services_friends__WEBPACK_IMPORTED_MODULE_6__, _components_conversationEntry__WEBPACK_IMPORTED_MODULE_7__]);
([_components_chatMenu__WEBPACK_IMPORTED_MODULE_1__, _services_chat__WEBPACK_IMPORTED_MODULE_4__, _stores_authentication__WEBPACK_IMPORTED_MODULE_5__, _services_friends__WEBPACK_IMPORTED_MODULE_6__, _components_conversationEntry__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const useSignalCoreForRealTimeChat = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)('useSignalCoreForRealTimeChat', false);
const ConversationContainer = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    if (store.selectedConversation === null || store.selectedConversation.length === 0) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: store.selectedConversation.map((v, i)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_conversationEntry__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                index: i,
                ...v
            }, v.conversationId || v.user.userId));
        })
    }));
};
const ChatContainer = (props)=>{
    const store = _chatStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const conversationUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const typingEndRefs = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({});
    const setTyping = (conversationId, userId, isTyping)=>{
        store.dispatchConversations({
            action: 'SET_TYPING_STATUS',
            conversationId: conversationId,
            userId: userId,
            isTyping: isTyping
        });
    };
    const getTypingKey = (msg)=>`${msg.conversationId}_${msg.userId}`
    ;
    const removeTypingEndRefIfExists = (k)=>{
        if (typingEndRefs.current[k]) {
            clearTimeout(typingEndRefs.current[k]);
            typingEndRefs.current[k] = null;
        }
    };
    const onChatTyping = (msg)=>{
        console.log('[info] typing for', msg);
        setTyping(msg.conversationId, msg.userId, true);
        const k = getTypingKey(msg);
        removeTypingEndRefIfExists(k);
        typingEndRefs.current[k] = setTimeout(()=>{
            typingEndRefs.current[k] = null;
            setTyping(msg.conversationId, msg.userId, false);
        }, msg.endsAt - Date.now());
    };
    const onChatConversationAdded = (msg)=>{
        store.dispatchConversations({
            action: 'MULTI_ADD',
            data: [
                data.conversation
            ]
        });
        (0,_services_chat__WEBPACK_IMPORTED_MODULE_4__/* .multiGetLatestMessages */ .OG)({
            conversationIds: [
                msg.id
            ]
        }).then((data)=>{
            store.dispatchConversations({
                action: 'MULTI_ADD_LATEST_MESSAGES',
                data: data
            });
        });
    };
    const onChatMessageReceived = (msg)=>{
        console.log('[info] signalr ChatMessageReceived', msg);
        const k = getTypingKey(msg);
        removeTypingEndRefIfExists(k);
        setTyping(msg.conversationId, msg.userId, false);
        store.dispatchConversations({
            action: 'MULTI_ADD_LATEST_MESSAGES',
            data: [
                {
                    conversationId: msg.conversationId,
                    chatMessages: [
                        {
                            id: msg.id,
                            content: msg.message,
                            sent: msg.sent,
                            senderTargetId: msg.userId,
                            read: false
                        }
                    ]
                }, 
            ]
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (useSignalCoreForRealTimeChat) {
            if (conversationUpdate.current) {
                console.log('[info] signalr closing existing connection');
                conversationUpdate.current.connection.stop();
                if (conversationUpdate.current.pingTimer) {
                    clearInterval(conversationUpdate.current.pingTimer);
                }
            }
            console.log('[info] signalr creating connection');
            const connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_8__.HubConnectionBuilder().withUrl("/chat").build();
            connection.on('ChatTyping', (data)=>onChatTyping(JSON.parse(data))
            );
            connection.on('ChatConversationAdded', (data)=>onChatConversationAdded(JSON.parse(data))
            );
            connection.on("ChatMessageReceived", (data)=>onChatMessageReceived(JSON.parse(data))
            );
            let pingTimer;
            connection.start().then(()=>{
                console.log('[info] signalr connection ready');
                pingTimer = setInterval(()=>{
                    connection.invoke("ListenForMessages").then((r)=>{
                        console.log('[info] signalr ListenForMessages response', r);
                    }).catch((e)=>{
                        console.error('[err] signalr ListenForMessages error', e);
                    });
                }, 5000);
            }).catch((e)=>{
                console.error('[error] signalr connection error:', e);
            });
            conversationUpdate.current = {
                connection,
                pingTimer
            };
        }
        const updateConversations = ()=>{
            // hard coded since this is mostly a POC right now. we should probably add paging eventually
            (0,_services_chat__WEBPACK_IMPORTED_MODULE_4__/* .getUserConversations */ .e1)({
                pageNumber: 1,
                pageSize: 100
            }).then((conv)=>{
                store.dispatchConversations({
                    action: 'MULTI_ADD',
                    data: conv
                });
                if (conv.length === 0) return;
                (0,_services_chat__WEBPACK_IMPORTED_MODULE_4__/* .multiGetLatestMessages */ .OG)({
                    conversationIds: conv.map((v)=>v.id
                    )
                }).then((data)=>{
                    store.dispatchConversations({
                        action: 'MULTI_ADD_LATEST_MESSAGES',
                        data: data
                    });
                });
            });
        };
        updateConversations();
        if (!useSignalCoreForRealTimeChat) {
            conversationUpdate.current = setInterval(()=>{
                updateConversations();
            }, 5 * 1000);
        }
        return ()=>{
            if (!useSignalCoreForRealTimeChat) {
                clearInterval(conversationUpdate.current);
            } else {
                if (conversationUpdate.current) conversationUpdate.current.connection.stop();
            }
            conversationUpdate.current = null;
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (auth.userId) {
            (0,_services_friends__WEBPACK_IMPORTED_MODULE_6__/* .getFriends */ .$J)({
                userId: auth.userId
            }).then((d)=>{
                store.setFriends(d);
            });
        }
    }, [
        auth.userId
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_container_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chatMenu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConversationContainer, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6904);
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(886);
/* harmony import */ var _chatStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_container__WEBPACK_IMPORTED_MODULE_2__, _services_chat__WEBPACK_IMPORTED_MODULE_3__]);
([_container__WEBPACK_IMPORTED_MODULE_2__, _services_chat__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Chat = (props)=>{
    const { 0: enabled , 1: setEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_chat__WEBPACK_IMPORTED_MODULE_3__/* .getChatSettings */ .xk)().then((d)=>{
            if (d.chatEnabled) {
                setEnabled(true);
            }
        }).catch((e)=>{
            console.error('[error] error fetching chat settings:', e);
        });
    }, []);
    if (!enabled) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useFooterStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    text: {
        color: '#B8B8B8',
        fontSize: '12px',
        fontWeight: '400'
    },
    link: {
        fontSize: '21px',
        textAlign: 'center',
        fontWeight: '300',
        textDecoration: 'none',
        '&:hover': {
            color: '#191919'
        }
    },
    footer: {
        background: '#ffffff'
    },
    footerContainer: {
        paddingTop: '5px',
        paddingBottom: '20px'
    }
});
const footerLinks = {
    '/about-us': 'About Us',
    '/jobs': 'Jobs',
    '/info/blog': 'Blog',
    '/privacy': 'Privacy',
    '/help': 'Help'
};
const Footer = (props)=>{
    const s = useFooterStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: s.footer,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: 'container mt-4 mb-0 ' + s.footerContainer,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    Object.getOwnPropertyNames(footerLinks).map((v)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-2 mb-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: s.text + ' ' + s.link,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: s.text + ' ' + s.link,
                                    href: v,
                                    children: footerLinks[v]
                                })
                            })
                        }, v));
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-10 offset-lg-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: `${s.text}`,
                            children: [
                                "ROBLOX, \"Online Building Toy\", characters, logos, names, and all related indicia are trademarks of ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://corp.roblox.com",
                                    children: " ROBLOX Corporation"
                                }),
                                ", \xa92016. Patents pending. ROBLOX is not sponsored, authorized or endorsed by any producer of plastic building bricks, including The LEGO Group, MEGA Brands, and K'Nex, and no resemblance to the products of these companies is intended. Use of this site signifies your acceptance of the ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/terms-and-conditions",
                                    children: "Terms and Conditions"
                                }),
                                "."
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_3__]);
_services_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    alertBg: {
        background: '#F68802'
    },
    alertText: {
        color: '#fff',
        textAlign: 'center',
        padding: '12px 0',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    alertLink: {
        color: '#fff',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    fakeAlert: {
        width: '100%',
        position: 'relative',
        height: '40px'
    }
});
const GlobalAlert = (props)=>{
    const s = useStyles();
    const { 0: alert , 1: setAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Always cache alert for 30 seconds
        const alertStorageKey = 'alert1';
        const existingAlert = sessionStorage.getItem(alertStorageKey);
        if (existingAlert !== null) {
            try {
                const parsed = JSON.parse(existingAlert);
                const expires = parsed.CreatedAt + 30 * 1000;
                if (expires > Date.now()) {
                    // It is still OK
                    setAlert(parsed);
                    return;
                }
            } catch (e) {
            // Nothing to do here
            }
        }
        (0,_services_api__WEBPACK_IMPORTED_MODULE_3__/* .getAlert */ .u)().then((msg)=>{
            msg.CreatedAt = Date.now();
            sessionStorage.setItem(alertStorageKey, JSON.stringify(msg));
            setAlert(msg);
        }).catch((e)=>{
            console.error('[error] could not fetch global alert:', e);
        });
    }, []);
    if (alert === null || !alert.IsVisible) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: s.fakeAlert
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.alertBg,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: s.alertText,
            children: alert.LinkUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: s.alertLink,
                href: alert.LinkUrl,
                children: alert.Text
            }) : alert.Text
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalAlert);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4368);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_3__]);
_services_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useLoginModalStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        position: 'absolute',
        display: 'block',
        right: '10px',
        top: '45px',
        boxShadow: '0 5px 10px rgb(0 0 0 / 20%)',
        zIndex: 99,
        borderRadius: '3px'
    },
    card: {
        width: '320px',
        background: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    input: {
        fontSize: '16px',
        margin: '10px 0',
        width: '280px'
    },
    btn: {
        width: '100%',
        color: 'white',
        fontWeight: 400,
        transition: 'none',
        '&:hover': {
            color: 'white',
            transition: 'none',
            boxShadow: '0 1px 3px rgb(150 150 150 / 74%)'
        }
    },
    btnPrimary: {
        background: '#00A2FF',
        '&:hover': {
            background: '#32B5FF'
        }
    },
    btnSecondary: {
        color: '#757575',
        border: '1px solid #B8B8B8',
        '&:hover': {
            color: '#757575'
        }
    },
    forgotPass: {
        color: '#00A2FF'
    }
});
const LoginModal = (props)=>{
    const s = useLoginModalStyles();
    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: locked , 1: setLocked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.wrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.card,
            children: [
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-danger mb-0",
                    children: error
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ref: userRef,
                    className: `form-control ${s.input}`,
                    type: "text",
                    placeholder: "Username"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ref: passRef,
                    className: `form-control ${s.input}`,
                    type: "password",
                    placeholder: "Password"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                disabled: locked,
                                className: `btn ${s.btnPrimary} ${s.btn}`,
                                onClick: (e1)=>{
                                    e1.preventDefault();
                                    setLocked(true);
                                    const username = userRef.current.value;
                                    const password = passRef.current.value;
                                    (0,_services_auth__WEBPACK_IMPORTED_MODULE_3__/* .login */ .x4)({
                                        username,
                                        password
                                    }).then((userInfo)=>{
                                        console.log(userInfo);
                                        window.location.reload();
                                    }).catch((e)=>{
                                        if (e.response && e.response.data) {
                                            setError(e.response.data.errors[0].message);
                                        } else {
                                            setError(e.message);
                                        }
                                    }).finally(()=>{
                                        setLocked(false);
                                    });
                                },
                                children: "Log In"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `btn ${s.btnSecondary} ${s.btn}`,
                                children: "Sign up"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mt-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: s.forgotPass,
                                href: "/forgotpasswordOrUsername",
                                children: "Forgot Password?"
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    main: {
        minHeight: '95vh'
    }
});
const MainWrapper = ({ children  })=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.main,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainWrapper);


/***/ }),

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8452);



const formatCount = (num)=>{
    if (num > 99) return '99+';
    return num;
};
const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    linkEntry: {
        marginBottom: '0',
        paddingTop: '5px'
    },
    name: {
        fontSize: '16px',
        verticalAlign: 'middle'
    },
    wrapper: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    link: {
        color: 'inherit'
    },
    countWrapper: {
        float: 'right',
        paddingTop: '5px'
    },
    count: {
        background: '#01a2fd',
        color: 'white',
        borderRadius: '10px',
        padding: '2px 7px'
    }
});
/**
 * Nav sidebar link entry
 * @param {{count?: number; name: string; icon: string; url: string;}} props 
 * @returns 
 */ const LinkEntry = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        href: props.url,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: s.link,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.wrapper + ' hover-' + props.icon,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: s.linkEntry,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: props.icon
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: s.name,
                            children: props.name
                        }),
                        props.count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: s.countWrapper,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: s.count,
                                children: formatCount(props.count)
                            })
                        }) || null
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkEntry);


/***/ }),

/***/ 4680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5435);
/* harmony import */ var _stores_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4534);
/* harmony import */ var _components_linkEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5607);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _lib_request__WEBPACK_IMPORTED_MODULE_6__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_3__, _lib_request__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useNavSideBarStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999
    },
    card: {
        width: '175px',
        background: '#f2f2f2',
        height: '100vh',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    username: {
        fontSize: '18px',
        paddingTop: '8px',
        paddingBottom: '5px',
        marginBottom: 0,
        color: '#1e1e1f'
    },
    divider: {
        borderBottom: '2px solid #c3c3c3',
        height: '2px',
        width: '100%'
    },
    upgradeNowButton: {
        marginTop: '10px',
        background: '#01a2fd',
        fontSize: '15px',
        fontWeight: 500,
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        textAlign: 'center',
        color: 'white',
        borderRadius: '4px',
        '&:hover': {
            background: '#3ab8ff'
        }
    }
});
const NavSideBar = (props)=>{
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const navStore = _stores_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const mainNavBarRef = props.mainNavBarRef;
    const { 0: avatarMenu , 1: setAvatarMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('R15');
    const { 0: dimensions , 1: setDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: pendingCount , 1: setPendingCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const s = useNavSideBarStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const menuType = localStorage.getItem('rbx_avatarmenu_type');
        if (menuType === 'Legacy' || menuType === 'R15') {
            setAvatarMenu(menuType);
        }
        window.addEventListener('resize', ()=>{
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        });
        const getStaffData = async ()=>{
            try {
                const response = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_6__/* .getFullUrl */ .mn)('users', '/v1/users/authenticated'));
                setUserData(response.data);
                if (response.data.isStaff) {
                    const [pendingIcons, pendingAssets, pendingGroupIcons] = await Promise.all([
                        (0,_lib_request__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)('GET', `/admin-api/api/icons/pending-assets`),
                        (0,_lib_request__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)('GET', `/admin-api/api/assets/pending-assets`),
                        (0,_lib_request__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)('GET', `/admin-api/api/groups/pending-icons`)
                    ]);
                    let count = 0;
                    if (pendingIcons.data) {
                        count += pendingIcons.data.length;
                    }
                    if (pendingAssets.data) {
                        count += pendingAssets.data.length;
                    }
                    if (pendingGroupIcons.data) {
                        count += pendingGroupIcons.data.length;
                    }
                    setPendingCount(count);
                }
            } catch (error) {
                console.error('Failed to fetch staff data:', error);
            }
        };
        getStaffData();
        return ()=>{
            window.removeEventListener('resize', ()=>{});
        };
    }, []);
    const paddingTop = mainNavBarRef.current && mainNavBarRef.current.clientHeight + 'px' || 0;
    if (navStore.isSidebarOpen === false && dimensions.width <= 1300) {
        return null;
    }
    const characterUrl = avatarMenu === 'R15' ? '/My/Avatar' : '/My/Character.aspx';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: s.container,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: s.card,
            style: {
                paddingTop: paddingTop
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: s.username,
                    children: authStore.username
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.divider
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Home",
                    url: "/home",
                    icon: "icon-nav-home"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Profile",
                    url: '/users/' + authStore.userId + '/profile',
                    icon: "icon-nav-profile"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Messages",
                    url: "/My/Messages",
                    icon: "icon-nav-message",
                    count: authStore.notificationCount.messages
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Friends",
                    url: '/users/' + authStore.userId + '/friends',
                    icon: "icon-nav-friends",
                    count: authStore.notificationCount.friendRequests
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Avatar",
                    url: characterUrl,
                    icon: "icon-nav-charactercustomizer"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Inventory",
                    url: '/users/' + authStore.userId + '/inventory',
                    icon: "icon-nav-inventory"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Trade",
                    url: "/My/Trades.aspx",
                    icon: "icon-nav-trade",
                    count: authStore.notificationCount.trades
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Groups",
                    url: "/My/Groups.aspx",
                    icon: "icon-nav-group"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Forums",
                    url: "/Forum/Default.aspx",
                    icon: "icon-nav-forum"
                }),
                (userData === null || userData === void 0 ? void 0 : userData.isStaff) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Admin",
                    url: "/admin",
                    icon: "icon-nav-friends",
                    count: pendingCount
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_linkEntry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: "Trello",
                    url: "https://trello.com/b/EuDe6QMM/ROBLOX",
                    icon: "icon-nav-blog"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "/BuildersClub/Upgrade.ashx",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.upgradeNowButton,
                        children: "Upgrade Now"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavSideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2300);
/* harmony import */ var _lib_numberUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6911);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4368);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5435);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__]);
([_services_auth__WEBPACK_IMPORTED_MODULE_5__, _stores_authentication__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useDropdownStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        width: '125px',
        position: 'absolute',
        top: '45px',
        right: '10px',
        boxShadow: '0 -5px 20px rgba(25,25,25,0.15)',
        userSelect: 'none',
        background: 'white'
    },
    text: {
        padding: '10px',
        marginBottom: 0,
        fontSize: '16px',
        '&:hover': {
            background: '#eaeaea',
            borderLeft: '4px solid #0074BD'
        },
        '&:hover > a': {
            marginLeft: '-4px'
        }
    }
});
const SettingsDropdown = (props)=>{
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const s = useDropdownStyles();
    const handlelog = async (e)=>{
        e.preventDefault();
        try {
            await (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__/* .logout */ .kS)();
            window.location.href = '/';
        } catch (err) {
            console.error('logout err:', err);
            router.push('/');
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.wrapper,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.text,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    href: "/My/Account",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-dark",
                        children: "Settings"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: s.text,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    onClick: handlelog,
                    className: "text-dark",
                    children: "Logout"
                })
            })
        ]
    }));
};
const useLoginAreaStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        color: 'white',
        fontWeight: 400,
        fontSize: '16px',
        borderBottom: 0,
        marginTop: '2px',
        marginBottom: 0,
        textAlign: 'right',
        whiteSpace: 'nowrap',
        display: 'inline'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '4px 8px',
        '&:hover': {
            color: 'white',
            background: 'rgba(25,25,25,0.1)',
            cursor: 'pointer',
            borderRadius: '4px'
        }
    },
    settingsIcon: {
        float: 'right'
    },
    linkContainer: {},
    linkContainerCol: {
        maxWidth: '250px',
        float: 'right'
    },
    robuxText: {
        marginRight: '20px',
        marginLeft: '5px'
    }
});
const LoggedInArea = (props)=>{
    const s = useLoginAreaStyles();
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].useContainer */ .Z.useContainer();
    const { 0: settingsOpen , 1: setSettingsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (authStore.robux === null || authStore.tix === null) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${s.linkContainerCol} `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `col-12 ${s.linkContainer}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.text,
                        title: authStore.robux.toLocaleString(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            href: "/My/Money.aspx",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-nav-robux"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.text + ' ' + s.robuxText,
                        title: authStore.robux.toLocaleString(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: (0,_lib_numberUtils__WEBPACK_IMPORTED_MODULE_8__/* .abbreviateNumber */ .d)(authStore.robux)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: s.text,
                                title: authStore.tix.toLocaleString(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    href: "/My/Money.aspx",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "icon-nav-tix"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: s.text + ' ' + s.robuxText,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    title: authStore.tix.toLocaleString(),
                                    children: (0,_lib_numberUtils__WEBPACK_IMPORTED_MODULE_8__/* .abbreviateNumber */ .d)(authStore.tix)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: s.text,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: (e)=>{
                                e.preventDefault();
                                setSettingsOpen(!settingsOpen);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `icon-nav-settings ${s.settingsIcon}`,
                                id: "nav-settings"
                            })
                        })
                    }),
                    settingsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsDropdown, {})
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggedInArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_loginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1023);
/* harmony import */ var _loginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1563);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2300);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_loginModal__WEBPACK_IMPORTED_MODULE_4__]);
_loginModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useLoginAreaStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        color: 'white',
        fontWeight: 400,
        fontSize: '16px',
        borderBottom: 0,
        marginTop: '2px',
        marginBottom: 0,
        textAlign: 'right',
        whiteSpace: 'nowrap'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '4px 8px',
        '&:hover': {
            color: 'white',
            background: 'rgba(25,25,25,0.1)',
            cursor: 'pointer',
            borderRadius: '4px'
        }
    }
});
const LoginArea = (props)=>{
    const Router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const s = useLoginAreaStyles();
    const loginModalStore = _stores_loginModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-6 offset-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: s.text,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: s.link,
                                children: "Sign Up"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: s.text,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: s.link,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('requireLoginThroughCookie', false)) {
                                            if ((0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('clientSideRenderingEnabled', false)) {
                                                Router.push('/login');
                                            } else {
                                                window.location.href = '/login';
                                            }
                                            return;
                                        }
                                        loginModalStore.setOpen(!loginModalStore.open);
                                    },
                                    children: "Login"
                                })
                            }),
                            loginModalStore.open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_loginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4534);



const useLogoStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    imgDesktop: {
        width: '118px',
        height: '30px',
        backgroundImage: `url(/img/bb_logo.png)`,
        backgroundSize: '118px 30px',
        display: 'none',
        '@media(min-width: 1301px)': {
            display: 'block'
        }
    },
    imgMobile: {
        backgroundImage: `url(/img/logo_bb.png)`,
        width: '30px',
        height: '30px',
        display: 'block',
        backgroundSize: '30px',
        '@media(min-width: 1301px)': {
            display: 'none'
        }
    },
    imgMobileWrapper: {
        marginLeft: '40px'
    },
    col: {
        maxWidth: '140px'
    },
    openSideNavMobile: {
        display: 'none',
        '@media(max-width: 1300px)': {
            display: 'block',
            float: 'left',
            height: '30px',
            width: '30px',
            cursor: 'pointer'
        }
    }
});
const Logo = ()=>{
    const s = useLogoStyles();
    const navStore = _stores_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"].useContainer */ .Z.useContainer();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${s.col} col-2 col-lg-2`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.openSideNavMobile + ' icon-menu',
                onClick: ()=>{
                    navStore.setIsSidebarOpen(!navStore.isSidebarOpen);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.imgDesktop
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: s.imgMobileWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: s.imgMobile
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8452);



const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_1__.createUseStyles)({
    container: {
        marginTop: '3px',
        marginBottom: 0,
        paddingBottom: 0,
        paddingLeft: '0'
    },
    linkEntry: {
        color: 'white',
        fontWeight: 400,
        marginBottom: 0,
        paddingBottom: 0,
        textAlign: 'center',
        fontSize: '16px',
        textDecoration: 'none',
        padding: '4px 8px',
        transition: 'none',
        '&:hover': {
            color: 'white',
            background: 'rgba(25,25,25,0.1)',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'none'
        }
    },
    navItem: {
        paddingRight: '2rem',
        '@media(max-width: 1300px)': {
            paddingRight: '1.75rem'
        },
        '@media(max-width: 1250px)': {
            paddingRight: '1.5rem'
        },
        '@media(max-width: 1175px)': {
            paddingRight: '1rem'
        }
    },
    col: {
        paddingLeft: 0,
        marginLeft: 0
    }
});
const LinkEntry = (props)=>{
    const s = useStyles();
    const isabsolute = props.url.startsWith('http');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-3",
        children: isabsolute ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: props.url,
            className: `${s.linkEntry} nav-link active pt-0`,
            target: "_blank",
            rel: "noopener noreferrer",
            children: props.children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            href: `/${props.url}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: `${s.linkEntry} nav-link active pt-0`,
                children: props.children
            })
        })
    }));
};
const NavigationLinks = (props)=>{
    const s = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${s.col} col-10 col-lg-5`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: s.container,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkEntry, {
                        url: "games",
                        children: "Games"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkEntry, {
                        url: "catalog",
                        children: "Catalog"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkEntry, {
                        url: "develop",
                        children: "Develop"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkEntry, {
                        url: "https://bt.zawg.ca/downloads",
                        children: "Download"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationLinks);


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);



const useSearchIconStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    icon: {
        float: 'right',
        marginTop: '-24px',
        paddingTop: 0
    }
});
const SearchIcon = (props)=>{
    const s = useSearchIconStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `${s.icon} icon-nav-search`
    }));
};
const useSuggestionEntryStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    text: {
        paddingLeft: '15px',
        fontSize: '16px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        marginBottom: 0,
        fontWeight: 400,
        color: 'rgb(52, 52, 52)',
        '&:hover': {
            boxShadow: '4px 0 0 0 #00a2ff inset'
        }
    },
    link: {
        color: 'rgb(52, 52, 52)',
        textDecoration: 'none'
    }
});
const SearchSuggestionEntry = (props)=>{
    const s = useSuggestionEntryStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: s.link + ' ',
        href: `${props.url}?keyword=${encodeURIComponent(props.query)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: s.text,
            children: [
                "Search \"",
                props.query,
                "\" in ",
                props.mode
            ]
        })
    }));
};
const useSuggestionStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    container: {
        background: 'white',
        position: 'fixed',
        boxShadow: '0 -5px 20px rgb(25 25 25 / 15%)',
        border: '1px solid rgba(0,0,0,0.15)',
        borderRadius: '3px',
        width: 'inherit',
        marginTop: '1px'
    }
});
const SearchSuggestionContainer = (props)=>{
    const input = props.inputRef.current;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        input.clientWidth
    ]);
    const s = useSuggestionStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.container,
        style: {
            width: input.clientWidth + 'px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSuggestionEntry, {
                mode: "Catalog",
                url: "/catalog",
                query: props.query
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSuggestionEntry, {
                mode: "People",
                url: "/search/users",
                query: props.query
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSuggestionEntry, {
                mode: "Games",
                url: "/games",
                query: props.query
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSuggestionEntry, {
                mode: "Groups",
                url: "/SearchGroups.aspx",
                query: props.query
            })
        ]
    }));
};
const useSearchStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    wrapper: {
        padding: '4px 2px',
        background: 'white',
        borderRadius: '2px',
        border: '1px solid #c3c3c3',
        width: '100%'
    },
    searchInput: {
        width: '100%',
        border: 'none',
        paddingTop: 0,
        paddingBottom: 0,
        '&:focus': {
            border: 'none!important',
            boxShadow: 'none!important'
        }
    }
});
const Search = (props)=>{
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: showSearchThing , 1: setShowSearchThing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const s = useSearchStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowSearchThing(query !== '');
    }, [
        query
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 col-lg-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: s.wrapper,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: inputRef,
                            value: query,
                            className: `form-control ${s.searchInput}`,
                            placeholder: "Search",
                            onInput: (v)=>{
                                setQuery(v.currentTarget.value);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {})
                    ]
                }),
                showSearchThing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSuggestionContainer, {
                    query: query,
                    inputRef: inputRef
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 5229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1191);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7858);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
/* harmony import */ var _stores_loginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1023);
/* harmony import */ var _stores_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4534);
/* harmony import */ var _navSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4680);
/* harmony import */ var _components_loggedinArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5426);
/* harmony import */ var _components_loginArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1139);
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3136);
/* harmony import */ var _components_navigationLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7288);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _navSidebar__WEBPACK_IMPORTED_MODULE_7__, _components_loggedinArea__WEBPACK_IMPORTED_MODULE_8__, _components_loginArea__WEBPACK_IMPORTED_MODULE_9__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _navSidebar__WEBPACK_IMPORTED_MODULE_7__, _components_loggedinArea__WEBPACK_IMPORTED_MODULE_8__, _components_loginArea__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useNavBarStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    navbar: {
        backgroundColor: (p)=>p.theme === _services_theme__WEBPACK_IMPORTED_MODULE_3__/* .themeType.obc2016 */ .uS.obc2016 ? '#393939' : '#0074BD'
        ,
        paddingTop: '6px',
        paddingBottom: '3px'
    },
    navContainer: {
        maxWidth: '100%!important',
        paddingTop: '0',
        paddingBottom: '0'
    },
    leftContainer: {},
    row: {
        width: '100%'
    },
    wrapper: {
        marginBottom: '40px',
        maxWidth: '100vw',
        overflow: 'auto',
        '@media(max-width: 991px)': {
            marginBottom: '98px'
        }
    }
});
const Navbar = ()=>{
    const s = useNavBarStyles({
        theme: (0,_services_theme__WEBPACK_IMPORTED_MODULE_3__/* .getTheme */ .gh)()
    });
    const authStore = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const mainNavBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: s.wrapper + ' navbar-wrapper-main',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: `navbar fixed-top navbar-expand-lg ${s.navbar}`,
                ref: mainNavBarRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${s.navContainer} container`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${s.row} row`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-lg-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${s.row} row`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_logo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigationLinks__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-lg-4",
                                children: authStore.isPending ? null : authStore.isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loggedinArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loginArea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                })
            }),
            authStore.isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navSidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                mainNavBarRef: mainNavBarRef
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7686);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4125);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4__);





dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_4___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ abbreviateNumber)
/* harmony export */ });
const abbreviateNumber = (value)=>{
    if (value < 1000) {
        return value.toLocaleString();
    }
    if (value < 1000000) {
        if (value > 99999) {
            return value.toString().slice(0, 3) + 'K+';
        }
        if (value > 9999) {
            return value.toString().slice(0, 2) + 'K+';
        }
    }
    var suffixes = [
        "",
        "k",
        "m",
        "b",
        "t"
    ];
    var suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        // @ts-ignore
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum].toUpperCase() + '+';
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5229);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3333);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8379);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stores_loginModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1023);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5435);
/* harmony import */ var _stores_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4534);
/* harmony import */ var _services_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7858);
/* harmony import */ var _components_mainWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9385);
/* harmony import */ var _components_globalAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7193);
/* harmony import */ var _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1747);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2300);
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_navbar__WEBPACK_IMPORTED_MODULE_1__, _stores_authentication__WEBPACK_IMPORTED_MODULE_8__, _components_globalAlert__WEBPACK_IMPORTED_MODULE_12__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_13__, _components_chat__WEBPACK_IMPORTED_MODULE_15__]);
([_components_navbar__WEBPACK_IMPORTED_MODULE_1__, _stores_authentication__WEBPACK_IMPORTED_MODULE_8__, _components_globalAlert__WEBPACK_IMPORTED_MODULE_12__, _stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_13__, _components_chat__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Roblox CSS
















if (false) {}
function RobloxApp({ Component , pageProps  }) {
    // set theme:
    // jss globals apparently don't support parameters/props, so the only way to do a dynamic global style is to either append a <style> element, use setAttribute(), or append a css file.
    // @ts-ignore
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const el =  false && 0;
        if (el && el.length) {
            const theme = (0,_services_theme__WEBPACK_IMPORTED_MODULE_10__/* .getTheme */ .gh)();
            const divBackground = theme === _services_theme__WEBPACK_IMPORTED_MODULE_10__/* .themeType.obc2016 */ .uS.obc2016 ? 'url(/img/Unofficial/obc_theme_2016_bg.png) repeat-x #222224' : document.getElementById('theme-2016-enabled') ? '#e3e3e3' : '#fff';
            el[0].setAttribute('style', 'background: ' + divBackground);
        }
    }, [
        pageProps
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ''
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageProps.title || 'ROBLOX'
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/vnd.microsoft.icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_stores_authentication__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Provider */ .Z.Provider, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stores_loginModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Provider */ .Z.Provider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stores_navigation__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Provider */ .Z.Provider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_globalAlert__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_mainWrapper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: [
                            (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)('clientSideRenderingEnabled', false) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                options: {
                                    showSpinner: false
                                },
                                color: "#fff",
                                height: 2
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_stores_thumbnailStore__WEBPACK_IMPORTED_MODULE_13__/* ["default"].Provider */ .Z.Provider, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chat__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RobloxApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getAlert)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// TODO: What is the documented replacement for this?
const getAlert = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('api', '/alerts/alert-info')).then((d)=>d.data
    );
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xk": () => (/* binding */ getChatSettings),
/* harmony export */   "e1": () => (/* binding */ getUserConversations),
/* harmony export */   "zJ": () => (/* binding */ markAsRead),
/* harmony export */   "MJ": () => (/* binding */ startOneToOneConversation),
/* harmony export */   "x_": () => (/* binding */ updateTypingStatus),
/* harmony export */   "bG": () => (/* binding */ sendMessage),
/* harmony export */   "OG": () => (/* binding */ multiGetLatestMessages),
/* harmony export */   "_U": () => (/* binding */ getMessages)
/* harmony export */ });
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2300);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_1__]);
_lib_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/**
 * Get chat settings for authenticated user
 * @returns {Promise<{chatEnabled: boolean, isActiveChatUser: boolean}>}
 */ const getChatSettings = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/chat-settings')).then((d)=>{
        return d.data;
    });
};
/**
 * Get conversations for the authenticated user
 * @param pageNumber
 * @param pageSize
 * @returns {Promise<{id: number, title: string, hasUnreadMessages: boolean, participants: {type: 'User', targetId: number, name: string}[], conversationType: 'OneToOneConversation' | 'MultiUserConversation' | 'CloudEditConversation', conversationTitle: {titleForViewer: string, isDefaultTitle: boolean}, lastUpdated: string, conversationUniverse: {universeId: number, rootPlaceId: number}}[]>}
 */ const getUserConversations = async ({ pageNumber , pageSize  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/get-user-conversations?pageNumber=' + encodeURIComponent(pageNumber.toString()) + '&pageSize=' + encodeURIComponent(pageSize.toString()))).then((d)=>{
        return d.data;
    });
};
/**
 * Mark a conversation as read
 * @param conversationId
 * @param endMessageId
 * @returns {Promise<any>}
 */ const markAsRead = async ({ conversationId , endMessageId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/mark-as-read'), {
        conversationId,
        endMessageId
    });
};
/**
 * Start a one-to-one conversation
 * @param userId
 * @returns {Promise<{conversation: {id: number}}>}
 */ const startOneToOneConversation = async ({ userId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/start-one-to-one-conversation'), {
        participantUserId: userId
    }).then((d)=>d.data
    );
};
const updateTypingStatus = async ({ conversationId , isTyping  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/update-user-typing-status'), {
        isTyping: isTyping,
        conversationId
    });
};
const sendMessage = async ({ conversationId , message  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/send-message'), {
        conversationId,
        message
    }).then((d)=>d.data
    );
};
/**
 * Multi-get the latest messages for a set of conversation IDs
 * @param conversationIds
 * @returns {Promise<{conversationId: number, chatMessages: {id: string, sent: string, read: boolean, senderTargetId: number, content: string}[]}[]>}
 */ const multiGetLatestMessages = async ({ conversationIds  })=>{
    let ids = encodeURIComponent(conversationIds.join(','));
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/multi-get-latest-messages?conversationIds=' + ids)).then((d)=>{
        return d.data;
    });
};
/**
 * Get messages for a conversation
 * @param conversationId
 * @param pageSize
 * @param startId
 * @returns {Promise<{id: string, sent: string, read: boolean, messageType: string, senderTargetId: number, content: string}[]>}
 */ const getMessages = async ({ conversationId , pageSize , startId  })=>{
    return await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('chat', '/v2/get-messages?conversationId=' + encodeURIComponent(conversationId.toString()) + '&pageSize=' + encodeURIComponent(pageSize.toString()) + '&exclusiveStartMessageId=' + encodeURIComponent(startId.toString()))).then((d)=>{
        return d.data;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ reportImageFail)
/* harmony export */ });
const reportImageFail = ({ src , errorEvent , type  })=>{
    console.error('[error] image load fail for', src, '\n\nevent data:', errorEvent, '\n', 'type', type);
};


/***/ }),

/***/ 1023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


const LoginModalStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return {
        open,
        setOpen
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModalStore);


/***/ }),

/***/ 4534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


const NavigationStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: isSidebarOpen , 1: setIsSidebarOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        isSidebarOpen,
        setIsSidebarOpen
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationStore);


/***/ }),

/***/ 1719:
/***/ ((module) => {

"use strict";
module.exports = require("@microsoft/signalr");

/***/ }),

/***/ 7686:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 5334:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ 4125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 4195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 3291:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1191:
/***/ ((module) => {

"use strict";
module.exports = require("react-jss");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7441:
/***/ ((module) => {

"use strict";
module.exports = require("unstated-next");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,9285,1664,8756,3766,6002,2634,5967,5435,9767,4368,7858], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();