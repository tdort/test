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
// ignore all the 250mb stuff RCC had a 1mb post limit and i thought it was this
const Config_1 = require("./helpers/Config");
const controllers_1 = require("./controllers");
let handle = new controllers_1.default();
const express = require("express");
const HTTPExceptions = require("ts-httpexceptions");
const WSLib = require("ws");
const rendering_1 = require("./rendering");
// WS - used for rendering
const ws = new WSLib.Server({
    port: Config_1.default.thumbnailWebsocketPort || 3040,
});
// Express
const app = express();
app.use(express.text({ limit: '250mb' }));
app.use(express.json());
app.use((req, res, next) => {
    console.log('[AUTH] [' + req.method + ']', req.url);
    if (req.url === '/api/upload-thumbnail-v1') {
        console.log('[info] skip auth for thumbnailer');
        return next();
    }
    if (req.headers['roblox-server-authorization'] !== Config_1.default.authorization) {
        console.error('bad auth');
        return res.status(500).send('Internal server error').end();
    }
    next();
});
app.get('/api/ping', (req, res) => {
    res.status(200).json(true).end();
});
app.get('/stop', (req, res) => {
    res.status(200).send("Shut down.").end();
    process.exit(0);
});
app.post('/api/public-method', (req, res, next) => {
    const b = req.body;
    console.log('[' + req.method + '] ' + req.url + ' - ' + b.method);
    // @ts-ignore
    const f = handle[b.method];
    if (typeof f === 'function') {
        const c = f.apply(handle, b.arguments);
        if (typeof c === 'object' && c.then) {
            c.then((result) => {
                res.status(200).json(result).end();
            }).catch(e => {
                console.error('[error] error handling method', b.method, e);
                res.status(500).json({ success: false }).end();
            });
        }
        else {
            res.status(200).json(c).end();
        }
    }
    else {
        res.status(404).json({ success: false, message: 'NotFound' }).end();
    }
});
const thumbnailupconf = {
    limit: '250mb',
    type: 'text/plain'
};
const thumbnailuplimit = express.text(thumbnailupconf);
app.post('/api/upload-thumbnail-v1', express.text({ limit: '250mb' }), (req, res) => {
    /* console.log("[thumbnailer] headers:", req.headers); */
    console.log('[thumbnailer] thumb size:', req.headers['content-length']);
    try {
        if (req.body) {
            const js = JSON.parse(req.body);
            if (js['accessKey'] === Config_1.default.authorization) {
                const key = js['jobId'];
                const callbacks = (0, rendering_1.getUploadCallbacks)()[key];
                handle.removeFromRunningJobs(key);
                if (callbacks) {
                    console.log("notifying", callbacks.length, 'subscribers');
                    for (const item of callbacks) {
                        item(js);
                    }
                    delete (0, rendering_1.getUploadCallbacks)()[key];
                    return res.status(200).send({
                        success: true,
                    }).end();
                }
                else {
                    console.error('[warning] no job id callback for', key);
                }
            }
            else {
                console.log('bad key', js);
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    res.status(503).send('Unavailable').end();
});
exports.default = () => {
    // Express
    app.listen(Config_1.default.port, () => {
        console.log(`[info] express listening on port`, Config_1.default.port);
    });
    // Ws
    console.log('[info] ws server listening on port', (Config_1.default.thumbnailWebsocketPort || 3040));
};
const onMessage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let cmd = JSON.parse(data.toString());
    console.log('[info] ' + cmd.command);
    // @ts-ignore
    if (typeof handle[cmd.command] !== 'function') {
        console.log('[err] sending 404 for invalidCommand: ' + cmd.command);
        return {
            status: 404,
            code: 'InvalidCommand',
            id: cmd.id,
        };
    }
    try {
        // @ts-ignore
        let results = yield handle[cmd.command](...cmd.args);
        return {
            status: 200,
            data: results,
            id: cmd.id,
        };
    }
    catch (err) {
        if (err instanceof HTTPExceptions.Exception && err instanceof HTTPExceptions.InternalServerError) {
            return {
                status: err.status,
                code: err.message,
                errorDetails: err,
                id: cmd.id,
            };
        }
        console.error('[error] [ws handle try/catch]', err);
        return {
            status: 500,
            code: 'InternalServerError',
            errorDetails: err,
            id: cmd.id,
        };
    }
});
ws.on('connection', (c, req) => {
    console.log('[info] new connection');
    let url = req.url;
    if (!url) {
        console.log('[info] closing bad conn due to no url');
        return c.close();
    }
    let q = url.indexOf('?');
    if (q === -1) {
        console.log('[info] closing bad conn due to no query param');
        return c.close();
    }
    let d = new URLSearchParams(url.slice(q));
    let key = d.get('key');
    if (!key) {
        console.log('[info] closing bad conn due to no key');
        return c.close();
    }
    if (key !== Config_1.default.authorization) {
        console.log('[info] closing bad conn due to non-matching key');
        return c.close();
    }
    c.on('message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        onMessage(data.toString()).then(result => {
            c.send(JSON.stringify(result));
        });
    }));
    c.on('close', () => {
        console.log('[info] closed connection');
    });
});
//# sourceMappingURL=server.js.map