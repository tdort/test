"use strict";
exports.id = 3602;
exports.ids = [3602];
exports.modules = {

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Theme2016 = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "theme-2016-enabled"
            }),
            props.children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme2016);


/***/ }),

/***/ 4601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b1": () => (/* binding */ isTouchDevice),
/* harmony export */   "Dc": () => (/* binding */ wait),
/* harmony export */   "lF": () => (/* binding */ IsNullOrEmpty),
/* harmony export */   "uX": () => (/* binding */ Stopwatch)
/* harmony export */ });
/* unused harmony export Random */
const isTouchDevice = ()=>{
    // From https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || // @ts-ignore
    (navigator.msMaxTouchPoints > 0);
};
const Random = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
};
/**
 * @param {number} seconds
 * @returns {Promise}
 */ const wait = (seconds)=>new Promise((resolve)=>setTimeout(resolve, seconds * 1000)
    )
;
function IsNullOrEmpty(value) {
    return !value || value.trim().length === 0;
}
class Stopwatch {
    startTime = 0;
    endTime = 0;
    Start() {
        this.startTime = Date.now();
    }
    Stop() {
        this.endTime = Date.now();
        return this.endTime - this.startTime;
    }
    ElapsedMilliseconds() {
        return this.endTime - this.startTime;
    }
    ElapsedSeconds() {
        return (this.endTime - this.startTime) / 1000;
    }
    ElapsedMinutes() {
        return (this.endTime - this.startTime) / 1000 * 60;
    }
    ElapsedHours() {
        return (this.endTime - this.startTime) / 1000 * 60 * 60;
    }
} /**
 * @template T
 * @typedef {[T, import('react').Dispatch<T>]} UseState
 */ 


/***/ })

};
;