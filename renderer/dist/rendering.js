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
exports.getResult = exports.awaitResult = exports.registerCallback = exports.getUploadCallbacks = exports.doesCallbackExist = exports.resolutionMultiplier = void 0;
const sharp = require("sharp");
// Poor man's anti-aliasing
exports.resolutionMultiplier = {
    game: 4,
    asset: 1,
    userThumbnail: 2,
    userHeadshot: 2,
    mesh: 1,
    texture: 1
};
let uploadCallbacks = {};
const doesCallbackExist = (id) => {
    return uploadCallbacks[id] !== undefined;
};
exports.doesCallbackExist = doesCallbackExist;
// fuicking hate this it crashes
const getUploadCallbacks = () => uploadCallbacks;
exports.getUploadCallbacks = getUploadCallbacks;
const registerCallback = (key, callback) => {
    if (!uploadCallbacks[key]) {
        uploadCallbacks[key] = [];
    }
    uploadCallbacks[key].push(callback);
    return () => {
        if (uploadCallbacks[key]) {
            uploadCallbacks[key] = uploadCallbacks[key].filter(cb => cb !== callback);
            if (uploadCallbacks[key] && uploadCallbacks[key].length === 0) {
                delete uploadCallbacks[key];
            }
        }
    };
};
exports.registerCallback = registerCallback;
const awaitResult = (key) => {
    return new Promise((res) => {
        const timeout = setTimeout(() => {
            console.warn(`timeout waiting for ${key}, skipping`);
            unregister();
            res();
        }, 1 * 60 * 1000);
        const unregister = (0, exports.registerCallback)(key, () => {
            clearTimeout(timeout);
            unregister();
            res();
        });
    });
};
exports.awaitResult = awaitResult;
const getResult = (key, upscaleAmount) => {
    return new Promise((res) => {
        const timeout = setTimeout(() => {
            console.warn(`timeout waiting for key: ${key}, skipping`);
            unregister();
            // should we just return like a blocked image/bad render image if this happens?
            res(undefined);
        }, 2 * 60 * 1000);
        const unregister = (0, exports.registerCallback)(key, (data) => __awaiter(void 0, void 0, void 0, function* () {
            clearTimeout(timeout);
            unregister();
            try {
                if (typeof data.thumbnail === 'string') {
                    const originalImage = yield sharp(Buffer.from(data.thumbnail, 'base64')).metadata();
                    if (typeof originalImage.width !== 'number' || typeof originalImage.height !== 'number') {
                        throw new Error('bad image dimensions');
                    }
                    const image = yield sharp(Buffer.from(data.thumbnail, 'base64'))
                        .resize(Math.trunc(originalImage.width / upscaleAmount), Math.trunc(originalImage.height / upscaleAmount))
                        .png({ compressionLevel: 9, quality: 99, effort: 10 })
                        .toBuffer();
                    data.thumbnail = image.toString('base64');
                }
                res(data);
            }
            catch (error) {
                console.error("error processing image:", error);
                res(undefined); // should we just return like a blocked image/bad render image if this happens?
            }
        }));
        process.on('exit', () => {
            clearTimeout(timeout);
            unregister();
        });
    });
};
exports.getResult = getResult;
//# sourceMappingURL=rendering.js.map