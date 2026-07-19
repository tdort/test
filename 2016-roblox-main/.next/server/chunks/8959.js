"use strict";
exports.id = 8959;
exports.ids = [8959];
exports.modules = {

/***/ 7896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smallGameCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9013);
/* harmony import */ var _gameRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_gamesPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_smallGameCard__WEBPACK_IMPORTED_MODULE_1__, _gameRow__WEBPACK_IMPORTED_MODULE_2__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_4__]);
([_smallGameCard__WEBPACK_IMPORTED_MODULE_1__, _gameRow__WEBPACK_IMPORTED_MODULE_2__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Games = (props)=>{
    const store = _stores_gamesPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const gameS = (0,_gameRow__WEBPACK_IMPORTED_MODULE_2__/* .useStyles */ .y)();
    let existingGames = {};
    if (store.infiniteGamesGrid) {
        if (store.infiniteGamesGrid.games.length === 0) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-4",
                children: "No results."
            }));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: store.infiniteGamesGrid.games.map((v)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_smallGameCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: gameS.gameCard + ' mb-3',
                    placeId: v.placeId,
                    creatorId: v.creatorId,
                    creatorType: v.creatorType,
                    creatorName: v.creatorName,
                    iconUrl: store.icons[v.universeId],
                    likes: v.totalUpVotes,
                    dislikes: v.totalDownVotes,
                    name: v.name,
                    playerCount: v.playerCount
                }, v.universeId));
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: store.sorts ? store.sorts.map((v)=>{
            if (existingGames[v.token]) {
                return null;
            }
            existingGames[v.token] = true;
            let games = store.games && store.games[v.token] || null;
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gameRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ads: true,
                title: v.displayName,
                games: games,
                icons: store.icons
            }, 'row ' + v.token));
        }) : null
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Games);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2300);
/* harmony import */ var _stores_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5435);
/* harmony import */ var _stores_gamesPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4914);
/* harmony import */ var _ad_adBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2565);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4008);
/* harmony import */ var _lib_getQueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4385);
/* harmony import */ var _components_games__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_5__, _ad_adBanner__WEBPACK_IMPORTED_MODULE_6__, _components_games__WEBPACK_IMPORTED_MODULE_9__]);
([_stores_authentication__WEBPACK_IMPORTED_MODULE_4__, _stores_gamesPage__WEBPACK_IMPORTED_MODULE_5__, _ad_adBanner__WEBPACK_IMPORTED_MODULE_6__, _components_games__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,react_jss__WEBPACK_IMPORTED_MODULE_2__.createUseStyles)({
    authContainer: {
        '@media(min-width: 1300px)': {
            marginLeft: '180px'
        }
    },
    selectorSort: {
        width: '200px',
        float: 'left'
    },
    gamesContainer: {
        backgroundColor: '#e3e3e3',
        paddingTop: '8px',
        marginLeft: '15px',
        marginRight: '15px'
    }
});
const Games = (props)=>{
    const query = (0,_lib_getQueryParams__WEBPACK_IMPORTED_MODULE_8__/* .getQueryParams */ .v)();
    const store = _stores_gamesPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    const auth = _stores_authentication__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const s = useStyles();
    const showGenre = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('gameGenreFilterSupported', false) && !query.keyword;
    const showSortDropdown = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('gameCustomSortDropdown', false) && !query.keyword;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (query.keyword) store.setQuery(query.keyword);
        store.loadGames({
            query: query.keyword,
            genreFilter: store.genreFilter
        });
    }, [
        store.genreFilter
    ]);
    // if (!store.sorts || !store.games || !store.icons) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'row ' + (auth.isAuthenticated ? s.authContainer : ''),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ad_adBanner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    context: "gamesPage"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 ps-0 pb-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: 'row pb-2 ' + s.gamesContainer,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12",
                            children: [
                                showSortDropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: s.selectorSort,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selector__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        onChange: (newValue)=>{
                                            // TODO
                                            console.log('[info] use sort', newValue);
                                        },
                                        options: [
                                            {
                                                name: 'Default',
                                                value: 'default'
                                            },
                                            {
                                                name: 'Popular',
                                                value: 'popular'
                                            },
                                            {
                                                name: 'Top Earning',
                                                value: 'top-earning'
                                            },
                                            {
                                                name: 'Top Rated',
                                                value: 'top-rated'
                                            },
                                            {
                                                name: 'Recommended',
                                                value: 'recommended'
                                            },
                                            {
                                                name: 'Top Favorite',
                                                value: 'top-favorite'
                                            },
                                            {
                                                name: 'Top Paid',
                                                value: 'top-paid'
                                            },
                                            {
                                                name: 'Builders Club',
                                                value: 'builders-club'
                                            }, 
                                        ]
                                    })
                                }),
                                showGenre && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: s.selectorSort + ' ms-2',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_selector__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        onChange: (newValue)=>{
                                            // TODO
                                            console.log('[info] use genre', newValue);
                                            store.setGenreFilter(newValue.value);
                                        },
                                        options: store.selectorSorts
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_games__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Games);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getQueryParams)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

// Client-side only version of useRouter().query that will return correct result on first render.
const getQueryParams = ()=>{
    if (true) {
        return (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)().query;
    }
    let queryParams = window.location.search;
    if (typeof queryParams !== 'string' || queryParams.length === 0 || queryParams.indexOf('=') === -1) return {};
    if (queryParams.startsWith('?')) queryParams = queryParams.substring(1);
    let kv = {};
    let split = queryParams.split('=');
    for(let i = 0; i < split.length; i++){
        if (i % 2 === 0) continue;
        let k = split[i - 1];
        let v = split[i];
        kv[decodeURIComponent(k)] = decodeURIComponent(v);
    }
    return kv;
};


/***/ }),

/***/ 4914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_getFlag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2300);
/* harmony import */ var _services_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8586);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_games__WEBPACK_IMPORTED_MODULE_4__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_5__]);
([_services_games__WEBPACK_IMPORTED_MODULE_4__, _services_thumbnails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const selectorSorts = [
    {
        name: 'All',
        value: 'all',
        id: 0
    },
    {
        name: 'Adventure',
        value: 'adventure',
        id: 7
    },
    {
        name: 'Building',
        value: 'building',
        id: 13
    },
    {
        name: 'Comedy',
        value: 'comedy',
        id: 9
    },
    {
        name: 'Fighting',
        value: 'fighting',
        id: 4
    },
    {
        name: 'FPS',
        value: 'fps',
        id: 14
    },
    {
        name: 'Horror',
        value: 'horror',
        id: 5
    },
    {
        name: 'Medieval',
        value: 'medieval',
        id: 2
    },
    {
        name: 'Military',
        value: 'military',
        id: 11
    },
    {
        name: 'Naval',
        value: 'naval',
        id: 6
    },
    {
        name: 'RPG',
        value: 'rpg',
        id: 15
    },
    {
        name: 'Sci-Fi',
        value: 'sci-fi',
        id: 3
    },
    {
        name: 'Sports',
        value: 'sports',
        id: 8
    },
    {
        name: 'Town and City',
        value: 'town and city',
        id: 1
    },
    {
        name: 'Western',
        value: 'western',
        id: 10
    }
];
const GamesPageStore = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__.createContainer)(()=>{
    const { 0: sorts , 1: setSorts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: games1 , 1: setGames  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: infiniteGamesGrid , 1: setInfiniteGamesGrid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // for genre and keyword searches
    const iconsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const { 0: icons , 1: setIconsInternal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: query1 , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const setIcons = (newIcons)=>{
        setIconsInternal(newIcons);
        iconsRef.current = newIcons;
    };
    const { 0: genreFilter1 , 1: setGenreFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const genreFilterMethod = (0,_lib_getFlag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('gameGenreFilterMethod', 'default'); // default = genre query param, keyword = add to search keyword
    const loadIcons = (pendingIconUniverseIds)=>{
        let split = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(pendingIconUniverseIds, 100);
        for (const pendingIconUniverseIds1 of split){
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_5__/* .multiGetUniverseIcons */ .$U)({
                universeIds: pendingIconUniverseIds1,
                size: '150x150'
            }).then((result)=>{
                let obj = {
                    ...iconsRef.current || {}
                };
                for (const item of result){
                    obj[item.targetId] = item.imageUrl;
                }
                setIcons({
                    ...obj
                });
            });
        }
    };
    const setInitialSorts = ()=>{
        (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameSorts */ .Xy)({
            gameSortsContext: 'GamesDefaultSorts'
        }).then((d1)=>{
            setSorts(d1.sorts);
            let games = {};
            let promises = [];
            let pendingIconUniverseIds = [];
            for (const item of d1.sorts){
                promises.push((0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameList */ .ZN)({
                    sortToken: item.token,
                    limit: 100,
                    keyword: ''
                }).then((d)=>{
                    games[item.token] = d.games;
                    d.games.forEach((v)=>{
                        if (pendingIconUniverseIds.includes(v.universeId)) return;
                        pendingIconUniverseIds.push(v.universeId);
                    });
                }));
            }
            Promise.all(promises).then(()=>{
                setGames(games);
                loadIcons(pendingIconUniverseIds);
            });
        });
    };
    const loadGames = ({ query , genreFilter  })=>{
        setSorts(null);
        setGames(null);
        setInfiniteGamesGrid(null);
        if (query) {
            // lookup
            (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameList */ .ZN)({
                sortToken: '',
                limit: 100,
                genre: [],
                keyword: query
            }).then((d)=>{
                setInfiniteGamesGrid(d);
                let universeIds = [];
                for (const item of d.games){
                    if (!universeIds.includes(item.universeId)) universeIds.push(item.universeId);
                }
                loadIcons(universeIds);
            });
            return;
        }
        if (genreFilter === 'default' || genreFilter === null || genreFilter === 'all') {
            setInitialSorts();
        } else {
            (0,_services_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameList */ .ZN)({
                sortToken: '',
                keyword: genreFilterMethod === 'keyword' ? genreFilter : '',
                limit: 100,
                genre: selectorSorts.find((v)=>v.value === genreFilter
                ).id
            }).then((newGames)=>{
                setInfiniteGamesGrid(newGames);
                let universeIds = [];
                for (const item of newGames.games){
                    if (!universeIds.includes(item.universeId)) universeIds.push(item.universeId);
                }
                loadIcons(universeIds);
            });
        }
    };
    return {
        sorts,
        games: games1,
        icons,
        infiniteGamesGrid,
        query: query1,
        setQuery,
        genreFilter: genreFilter1,
        setGenreFilter,
        selectorSorts,
        loadGames
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamesPageStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;