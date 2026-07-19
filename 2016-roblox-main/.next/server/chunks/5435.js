"use strict";
exports.id = 5435;
exports.ids = [5435];
exports.modules = {

/***/ 5185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UH": () => (/* binding */ getResellers),
/* harmony export */   "C6": () => (/* binding */ getRobux),
/* harmony export */   "YG": () => (/* binding */ getRobuxGroup),
/* harmony export */   "Ec": () => (/* binding */ getResellableCopies),
/* harmony export */   "xD": () => (/* binding */ purchaseItem),
/* harmony export */   "LL": () => (/* binding */ setResellableAssetPrice),
/* harmony export */   "EB": () => (/* binding */ takeResellableAssetOffSale),
/* harmony export */   "nm": () => (/* binding */ getResaleData),
/* harmony export */   "f1": () => (/* binding */ getTransactions),
/* harmony export */   "$A": () => (/* binding */ getGroupTransactions),
/* harmony export */   "IG": () => (/* binding */ getTransactionSummary),
/* harmony export */   "eX": () => (/* binding */ getGroupTransactionSummary),
/* harmony export */   "_2": () => (/* binding */ formatSummaryResponse),
/* harmony export */   "_C": () => (/* binding */ getMarketActivity),
/* harmony export */   "sA": () => (/* binding */ createCurrencyExchangeOrder),
/* harmony export */   "Ai": () => (/* binding */ createCurrencyExchangeOrderREAL),
/* harmony export */   "_A": () => (/* binding */ countOpenPositions),
/* harmony export */   "sl": () => (/* binding */ getOpenPositions),
/* harmony export */   "R5": () => (/* binding */ closePosition)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getResellers = ({ assetId , cursor , limit  })=>{
    const url = (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v1/assets/' + assetId + '/resellers?limit=' + limit + '&cursor=' + encodeURIComponent(cursor || ''));
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', url);
};
const getRobux = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v1/users/' + userId + '/currency')).then((d)=>d.data
    );
};
const getRobuxGroup = ({ groupId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v1/groups/' + groupId + '/currency')).then((d)=>d.data
    );
};
const getResellableCopies = ({ assetId , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v1/assets/${assetId}/users/${userId}/resellable-copies`)).then((d)=>d.data
    );
};
const purchaseItem = ({ productId , assetId , sellerId , userAssetId , price , expectedCurrency  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v1/purchases/products/${productId}`), {
        assetId,
        expectedPrice: price,
        expectedSellerId: sellerId,
        userAssetId,
        expectedCurrency
    }).then((d)=>d.data
    );
};
const setResellableAssetPrice = ({ assetId , userAssetId , price  })=>{
    if (!Number.isSafeInteger(price) || price < 0 || isNaN(price)) {
        throw new Error('Invalid Price "' + price + '"');
    }
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v1/assets/${assetId}/resellable-copies/${userAssetId}`), {
        price
    }).then((d)=>d.data
    );
};
const takeResellableAssetOffSale = ({ assetId , userAssetId  })=>{
    return setResellableAssetPrice({
        assetId,
        userAssetId,
        price: 0
    });
};
const getResaleData = ({ assetId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v1/assets/${assetId}/resale-data`)).then((d)=>d.data
    );
};
const getTransactions = ({ userId , cursor , type  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v2/users/${userId}/transactions?cursor=${encodeURIComponent(cursor || '')}&transactionType=${encodeURIComponent(type)}`)).then((d)=>d.data
    );
};
const getGroupTransactions = ({ groupId , cursor , type  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v2/groups/${groupId}/transactions?cursor=${encodeURIComponent(cursor || '')}&transactionType=${encodeURIComponent(type)}`)).then((d)=>d.data
    );
};
const getTransactionSummary = ({ userId , timePeriod  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v2/users/${userId}/transaction-totals?timeFrame=${timePeriod}&transactionType=summary`)).then((d)=>d.data
    );
};
const getGroupTransactionSummary = ({ groupId , timePeriod  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', `/v2/groups/${groupId}/transaction-totals?timeFrame=${timePeriod}&transactionType=summary`)).then((d)=>d.data
    );
};
const fNum = (num)=>{
    if (!num) return '';
    return num.toLocaleString();
};
const formatSummaryResponse = (resp, type = 'User')=>{
    const isUser = type === 1 || type === 'User';
    const result = [
        isUser && [
            'Builders Club Stipend',
            fNum(resp.premiumStipendsTotal), 
        ],
        isUser && [
            'Builders Club Stipend Bonus',
            '', 
        ],
        [
            'Sale of Goods',
            fNum(resp.salesTotal), 
        ],
        isUser && [
            'Currency Purchase',
            fNum(resp.currencyPurchasesTotal), 
        ],
        isUser && [
            'Trade System Trades',
            fNum(resp.tradeSystemEarningsTotal), 
        ],
        [
            'Promoted Page Conversion Revenue',
            '', 
        ],
        [
            'Game Page Conversion Revenue',
            '', 
        ],
        [
            'Pending Sales',
            fNum(resp.pendingRobuxTotal), 
        ],
        isUser && [
            'Group Payouts',
            fNum(resp.groupPayoutsTotal), 
        ], 
    ].filter((v)=>!!v
    );
    return result;
};
// Extension - these don't exist on real roblox
const getMarketActivity = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/market/activity')).then((d)=>d.data
    );
};
const createCurrencyExchangeOrder = async ({ currency , amount , isMarketOrder , desiredRate ,  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/orders/create'), {
        amount,
        sourceCurrency: currency,
        isMarketOrder,
        desiredRate
    });
};
const createCurrencyExchangeOrderREAL = async ({ currency , amount , isMarketOrder , desiredRate ,  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/orders/create/trade'), {
        amount,
        sourceCurrency: currency,
        isMarketOrder,
        desiredRate
    });
};
/**
 * Get open position count for authenticated user
 * @returns {Promise<number>}
 */ const countOpenPositions = async ({ currency  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/orders/my/count?currency=' + currency)).then((d)=>d.data.total
    );
};
const getOpenPositions = async ({ startId , limit , currency  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/orders/my?limit=' + limit + '&startId=' + startId + '&currency=' + currency)).then((d)=>d.data
    );
};
const closePosition = async ({ orderId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('economy', '/v2/currency-exchange/orders/' + orderId + '/close'));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$J": () => (/* binding */ getFriends),
/* harmony export */   "Yo": () => (/* binding */ getFriendRequestCount),
/* harmony export */   "$8": () => (/* binding */ getFollowersCount),
/* harmony export */   "ET": () => (/* binding */ getFollowers),
/* harmony export */   "IA": () => (/* binding */ getFollowingsCount),
/* harmony export */   "$7": () => (/* binding */ getFollowings),
/* harmony export */   "UN": () => (/* binding */ getFriendStatus),
/* harmony export */   "_e": () => (/* binding */ getFriendRequests),
/* harmony export */   "g5": () => (/* binding */ unfriendUser),
/* harmony export */   "ND": () => (/* binding */ acceptFriendRequest),
/* harmony export */   "fI": () => (/* binding */ declineFriendRequest),
/* harmony export */   "QT": () => (/* binding */ sendFriendRequest),
/* harmony export */   "P_": () => (/* binding */ followUser),
/* harmony export */   "F6": () => (/* binding */ unfollowUser),
/* harmony export */   "WB": () => (/* binding */ isAuthenticatedUserFollowingUserId)
/* harmony export */ });
/* unused harmony export getFollowingStatus */
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getFriends = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/friends`)).then((d)=>d.data.data
    );
};
/**
 * Get friend request count for the authenticated user
 * @returns {Promise<number>}
 */ const getFriendRequestCount = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/user/friend-requests/count`)).then((d)=>d.data.count
    );
};
/**
 * @returns {Promise<number>}
 */ const getFollowersCount = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/followers/count`)).then((d)=>d.data.count
    );
};
const getFollowers = ({ userId , cursor , limit , sort ='Asc'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/followers?cursor=${encodeURIComponent(cursor || '')}&sort=${sort}&limit=${limit}`)).then((d)=>d.data
    );
};
/**
 * @returns {Promise<number>}
 */ const getFollowingsCount = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/followings/count`)).then((d)=>d.data.count
    );
};
const getFollowings = ({ userId , cursor , limit , sort ='Asc'  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/followings?cursor=${encodeURIComponent(cursor || '')}&sort=${sort}&limit=${limit}`)).then((d)=>d.data
    );
};
/**@returns {Promise<string>} */ const getFriendStatus = ({ authenticatedUserId , userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${authenticatedUserId}/friends/statuses?userIds=${userId}`)).then((d)=>d.data.data[0].status
    );
};
const getFriendRequests = ({ cursor , limit  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/my/friends/requests?limit=${limit}&cursor=${cursor}`)).then((d)=>d.data
    );
};
const unfriendUser = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/unfriend`));
};
const acceptFriendRequest = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/accept-friend-request`));
};
const declineFriendRequest = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/decline-friend-request`));
};
const sendFriendRequest = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/request-friendship`));
};
const followUser = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/follow`));
};
const unfollowUser = ({ userId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/users/${userId}/unfollow`));
};
const getFollowingStatus = ({ userIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('friends', `/v1/user/following-exists`), {
        targetUserIds: userIds
    }).then((d)=>d.data.followings
    );
};
/**
 * Get if the authenticated user is following the provided userId
 * @returns {Promise<boolean>}
 */ const isAuthenticatedUserFollowingUserId = ({ userId  })=>{
    return getFollowingStatus({
        userIds: [
            userId
        ]
    }).then((result)=>{
        return result[0] && result[0].isFollowing || false;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$X": () => (/* binding */ getMyTrades),
/* harmony export */   "Hh": () => (/* binding */ getTradeDetails),
/* harmony export */   "V": () => (/* binding */ acceptTrade),
/* harmony export */   "x4": () => (/* binding */ declineTrade),
/* harmony export */   "jY": () => (/* binding */ getInboundTradeCount),
/* harmony export */   "TR": () => (/* binding */ createTrade),
/* harmony export */   "uj": () => (/* binding */ counterTrade)
/* harmony export */ });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_0__]);
_lib_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getMyTrades = ({ tradeType , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/${tradeType}?cursor=${encodeURIComponent(cursor || '')}`)).then((d)=>d.data
    );
};
const getTradeDetails = ({ tradeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/${tradeId}`)).then((d)=>d.data
    );
};
const acceptTrade = ({ tradeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/${tradeId}/accept`)).then((d)=>d.data
    );
};
const declineTrade = ({ tradeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/${tradeId}/decline`)).then((d)=>d.data
    );
};
/**
 * Get the total inbound trades for the authenticated user
 * @returns {Promise<number>}
 */ const getInboundTradeCount = ()=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/inbound/count`)).then((d)=>d.data.count
    );
};
const createTrade = ({ offerRobux , requestRobux , offerUserAssets , requestUserAssets , offerUserId , requestUserId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/send`), {
        offers: [
            {
                robux: offerRobux,
                userAssetIds: offerUserAssets,
                userId: offerUserId
            },
            {
                robux: requestRobux,
                userAssetIds: requestUserAssets,
                userId: requestUserId
            }
        ]
    });
};
const counterTrade = ({ tradeId , offerRobux , requestRobux , offerUserAssets , requestUserAssets , offerUserId , requestUserId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('POST', (0,_lib_request__WEBPACK_IMPORTED_MODULE_0__/* .getFullUrl */ .mn)('trades', `/v1/trades/${tradeId}/counter`), {
        offers: [
            {
                robux: offerRobux,
                userAssetIds: offerUserAssets,
                userId: offerUserId
            },
            {
                robux: requestRobux,
                userAssetIds: requestUserAssets,
                userId: requestUserId
            }
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(465);
/* harmony import */ var _services_economy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5185);
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7918);
/* harmony import */ var _services_privateMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5967);
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9375);
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_2__, _services_economy__WEBPACK_IMPORTED_MODULE_3__, _services_friends__WEBPACK_IMPORTED_MODULE_4__, _services_privateMessages__WEBPACK_IMPORTED_MODULE_5__, _services_trades__WEBPACK_IMPORTED_MODULE_6__, _services_users__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_2__, _services_economy__WEBPACK_IMPORTED_MODULE_3__, _services_friends__WEBPACK_IMPORTED_MODULE_4__, _services_privateMessages__WEBPACK_IMPORTED_MODULE_5__, _services_trades__WEBPACK_IMPORTED_MODULE_6__, _services_users__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AuthenticationStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(()=>{
    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isAuthenticated , 1: setIsAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: isPending , 1: setIsPending  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { 0: robux , 1: setRobux  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: tix , 1: setTix  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: notificationCount , 1: setNotificationCount  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        messages: 0,
        trades: 0,
        friendRequests: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,_services_users__WEBPACK_IMPORTED_MODULE_7__/* .getMyInfo */ ._Y)().then((result)=>{
            if (typeof result === 'string') {
                throw new Error('Unexpected Response');
            }
            console.log(result);
            setUserId(result.id);
            setUsername(result.name);
            setIsAuthenticated(true);
            setIsPending(false);
        }).catch((e)=>{
            setIsPending(false);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!userId) return;
        // Get Robux
        (0,_services_economy__WEBPACK_IMPORTED_MODULE_3__/* .getRobux */ .C6)({
            userId
        }).then((data)=>{
            setRobux(data.robux || 0);
            setTix(data.tickets || 0);
        }).catch((e)=>{
            // what do we do here?
            console.error('[error] robux error', e);
        });
        // Get notifications
        Promise.all([
            (0,_services_trades__WEBPACK_IMPORTED_MODULE_6__/* .getInboundTradeCount */ .jY)(),
            (0,_services_privateMessages__WEBPACK_IMPORTED_MODULE_5__/* .getUnreadMessageCount */ .Hs)(),
            (0,_services_friends__WEBPACK_IMPORTED_MODULE_4__/* .getFriendRequestCount */ .Yo)(), 
        ]).then(([inboundTradeCount, messageCount, friendRequestCount])=>{
            setNotificationCount({
                messages: messageCount,
                friendRequests: friendRequestCount,
                trades: inboundTradeCount
            });
        });
    }, [
        userId
    ]);
    return {
        userId,
        username,
        isAuthenticated,
        isPending,
        robux,
        tix,
        notificationCount
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;