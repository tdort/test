"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessage = void 0;
const axios_1 = require("axios");
const sleep = (ns) => new Promise(resolve => setTimeout(resolve, ns));
let queue = [];
const processQueue = () => __awaiter(void 0, void 0, void 0, function* () {
    const entry = queue.shift();
    if (!entry)
        return;
    if (typeof entry.content !== 'string')
        return;
    if (typeof entry.url !== 'string')
        return;
    if (entry.content.length > 1950) {
        entry.content = entry.content.substring(0, 1950);
    }
    const result = yield axios_1.default.post(entry.url, {
        content: entry.content,
    }, {
        validateStatus(status) {
            return true;
        },
    });
    if (result.status === 429) {
        console.log('discord err, too many requests');
        const retryStr = result.headers['retry-after'];
        if (retryStr) {
            const i = parseInt(retryStr, 10);
            if (!Number.isNaN(i) && i > 0.5 && i < 30) {
                console.log('discord sleep for', i, 'seconds');
                yield sleep(i * 1000);
                queue.push(entry);
                return;
            }
        }
        console.log('429 but unsure how long to wait, wait 5s');
        yield sleep(5 * 1000);
        queue.push(entry);
        return;
    }
    if (!(result.status > 199 && result.status < 300)) {
        console.log('unknown status', result.statusText);
        yield sleep(5 * 1000);
        queue.push(entry);
        return;
    }
});
const runQueue = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        try {
            yield processQueue();
        }
        catch (e) {
            console.error('[error] could not send message', e);
        }
        yield sleep(5000);
    }
});
runQueue();
const addMessage = (url, content) => {
    queue.push({
        content,
        url
    });
};
exports.addMessage = addMessage;
//# sourceMappingURL=discord.js.map