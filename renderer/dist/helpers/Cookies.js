"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bad = exports.get = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
let cookies = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../cookies.txt')).toString().replace(/\r/g, '').split('\n').filter(val => {
    return !!val;
});
let index = 0;
let reserved = [];
const get = () => {
    let val = cookies[index];
    if (typeof val !== 'string' || !val) {
        index = 0;
        val = cookies[0];
    }
    index++;
    if (reserved.includes(val)) {
        return (0, exports.get)();
    }
    reserved.push(val);
    return {
        cookie: val,
        done: () => {
            reserved = reserved.filter(bad => {
                return bad !== val;
            });
        }
    };
};
exports.get = get;
const bad = (badCookie) => {
    cookies = cookies.filter(val => {
        return val !== badCookie;
    });
};
exports.bad = bad;
//# sourceMappingURL=Cookies.js.map