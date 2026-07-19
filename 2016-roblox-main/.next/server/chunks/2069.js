"use strict";
exports.id = 2069;
exports.ids = [2069];
exports.modules = {

/***/ 2069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ getGameUrl),
/* harmony export */   "Sq": () => (/* binding */ getUserGames),
/* harmony export */   "af": () => (/* binding */ getGroupGames),
/* harmony export */   "Xy": () => (/* binding */ getGameSorts),
/* harmony export */   "ZN": () => (/* binding */ getGameList),
/* harmony export */   "CT": () => (/* binding */ getGameMedia),
/* harmony export */   "Yv": () => (/* binding */ launchGame),
/* harmony export */   "nh": () => (/* binding */ multiGetPlaceDetails),
/* harmony export */   "eJ": () => (/* binding */ multiGetUniverseDetails),
/* harmony export */   "MC": () => (/* binding */ getServers),
/* harmony export */   "Ff": () => (/* binding */ multiGetGameVotes),
/* harmony export */   "TD": () => (/* binding */ voteOnGame)
/* harmony export */ });
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2300);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(465);
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_request__WEBPACK_IMPORTED_MODULE_1__, _catalog__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_request__WEBPACK_IMPORTED_MODULE_1__, _catalog__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const gamePage2015Enabled = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('2015GameDetailsPageEnabled', false);
const csrEnabled = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('clientSideRenderingEnabled', false);
const getGameUrl = ({ placeId , name  })=>{
    return `/games/${placeId}/${(0,_catalog__WEBPACK_IMPORTED_MODULE_2__/* .itemNameToEncodedName */ .FS)(name)}`;
};
const getUserGames = ({ userId , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v2/users/${userId}/games?cursor=${encodeURIComponent(cursor || '')}`)).then((d)=>d.data
    );
};
const getGroupGames = ({ groupId , cursor  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v2/groups/${groupId}/games?cursor=${encodeURIComponent(cursor || '')}`)).then((d)=>d.data
    );
};
const getGameSorts = ({ gameSortsContext  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v1/games/sorts?gameSortsContext=${encodeURIComponent(gameSortsContext || '')}`)).then((d)=>d.data
    );
};
const getGameList = ({ sortToken , limit , genre =0 , keyword  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v1/games/list?sortToken=${encodeURIComponent(sortToken)}&maxRows=${limit}&genre=${genre}&keyword=${keyword}`)).then((d)=>d.data
    );
};
const getGameMedia = ({ universeId  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v2/games/${universeId}/media`)).then((d)=>d.data.data
    );
};
const launchGame = async ({ placeId , year =2016  })=>{
    const result = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + '/game/get-join-script?placeId=' + encodeURIComponent(placeId));
    let launchUrl;
    if (typeof result.data === 'string') {
        const match = result.data.match(/ticket=([^&"']+)/);
        if (match && match[1]) {
            const ticket = match[1];
            launchUrl = `bbclient://join?place=${placeId}&ticket=${encodeURIComponent(ticket)}&year=${year}`;
            console.log("got raw response, using bbclient:// with year:", year);
        } else {
            console.error("Could not extract ticket from raw response (is user authenticated?)", result.data);
            return;
        }
    } else if (result.data.clientArgs) {
        launchUrl = `rbxeconsim:${result.data.clientArgs}`;
        console.log("Using rbxeconsim");
    } else {
        console.error("Error: Unrecognized response format", result.data);
        return;
    }
    console.log("launching game with:", launchUrl);
    const aTag = document.createElement('a');
    aTag.setAttribute('href', launchUrl);
    document.body.appendChild(aTag);
    aTag.click();
    setTimeout(()=>{
        aTag.remove();
    }, 1000);
};
const multiGetPlaceDetails = ({ placeIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v1/games/multiget-place-details?placeIds=${encodeURIComponent(placeIds.join(','))}`)).then((d)=>d.data
    );
};
const multiGetUniverseDetails = ({ universeIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', `/v1/games?universeIds=${encodeURIComponent(universeIds.join(','))}`)).then((d)=>d.data.data
    );
};
const getServers = ({ placeId , offset  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getBaseUrl */ .SV)() + `/games/getgameinstancesjson?placeId=${placeId}&startIndex=${offset}`).then((d)=>d.data
    );
};
const multiGetGameVotes = ({ universeIds  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('GET', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', '/v1/games/votes?universeIds=' + encodeURIComponent(universeIds.join(',')))).then((d)=>d.data.data
    );
};
const voteOnGame = ({ universeId , isUpvote  })=>{
    return (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('PATCH', (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__/* .getFullUrl */ .mn)('games', '/v1/games/' + universeId + '/user-votes'), {
        vote: isUpvote
    }).then((d)=>d.data.data
    );
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;