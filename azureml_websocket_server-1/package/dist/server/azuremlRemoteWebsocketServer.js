"use strict";
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */
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
exports.AzureMLRemoteWebsocketServer = void 0;
const net = require("net");
const WebSocket = require("ws");
class AzureMLRemoteWebsocketServer {
    constructor() {
        this.server = undefined;
    }
    dispose() {
        if (this.server) {
            this.server.close();
        }
    }
    start(listenOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.server = new WebSocket.Server({ port: listenOptions.port });
            this.server.on('connection', (websocket) => __awaiter(this, void 0, void 0, function* () {
                const socketPromise = new Promise((resolve, reject) => {
                    const socket = new net.Socket();
                    let fullfilled = false;
                    socket.on('connect', () => {
                        fullfilled = true;
                        resolve(socket);
                    });
                    socket.on('data', (data) => {
                        socket.pause();
                        websocket.send(data, (error) => {
                            if (error) {
                                // Log error
                                console.log(`Error sending data to vscode-client ${error}`);
                            }
                            socket.resume();
                        });
                    });
                    socket.on('close', (had_error) => {
                        console.log(`Socket closed. Websocket status ${websocket.readyState}`);
                        websocket.removeAllListeners('close');
                        websocket.close();
                    });
                    socket.on('error', (error) => {
                        if (!fullfilled) {
                            reject();
                        }
                        else {
                            websocket.removeAllListeners('close');
                            socket.removeAllListeners('close');
                            websocket.close();
                            socket.end();
                        }
                        console.log(`Socket error ${error}`);
                    });
                    socket.connect(listenOptions.vscodeServerPort);
                });
                websocket.on('close', (code, reason) => {
                    // Log close
                    socketPromise.then((socket) => {
                        socket.removeAllListeners('close');
                        socket.end();
                    });
                });
                websocket.on('error', (error) => {
                    // log error
                    console.log(`Websocket error ${error}`);
                });
                websocket.on('message', (data) => {
                    socketPromise.then((socket) => {
                        socket.write(data);
                    });
                });
            }));
            this.server.on('error', (error) => {
                //this.logService.error('Error occurred in server');
                //this.logService.error(error);
                console.log(`Server error ${error}`);
            });
            this.server.on('listening', () => {
                console.log(`Azure ML websocket server listening on ${listenOptions.port}`);
                console.log();
                console.log();
                // this.logService.info('Azure ML websocket server started');
            });
        });
    }
}
exports.AzureMLRemoteWebsocketServer = AzureMLRemoteWebsocketServer;
//# sourceMappingURL=azuremlRemoteWebsocketServer.js.map