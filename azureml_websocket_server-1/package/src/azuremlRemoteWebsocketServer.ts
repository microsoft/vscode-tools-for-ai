/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */

import * as net from 'net';
import * as WebSocket from 'ws';

export type RemoteWebsocketServerListenOptions = { port: number, vscodeServerPort: number };

export class AzureMLRemoteWebsocketServer {

    private server: WebSocket.Server | undefined = undefined;

    public dispose(): void {
        if (this.server) {
            this.server.close();
        }
    }

    public async start(listenOptions: RemoteWebsocketServerListenOptions): Promise<void> {
        this.server = new WebSocket.Server({ port: listenOptions.port });

        this.server.on('connection', async (websocket: WebSocket) => {
            const socketPromise: Promise<net.Socket> = new Promise((resolve: (s: net.Socket) => void, reject: () => void): void => {
                const socket = new net.Socket();
                let fullfilled: boolean = false;
                socket.on('connect', (): void => {
                    fullfilled = true;
                    resolve(socket);
                });

                socket.on('data', (data: Buffer): void => {
                    socket.pause();
                    websocket.send(data, (error?: Error): void => {
                        if (error) {
                            // Log error
                            console.log(`Error sending data to vscode-client ${error}`);
                        }
                        socket.resume();
                    });
                });

                socket.on('close', (had_error: boolean) => {
                    console.log(`Socket closed. Websocket status ${websocket.readyState}`);
                    websocket.removeAllListeners('close');
                    websocket.close();
                });

                socket.on('error', (error: Error): void => {
                    if (!fullfilled) {
                        reject();
                    } else {
                        websocket.removeAllListeners('close');
                        socket.removeAllListeners('close');
                        websocket.close();
                        socket.end();
                    }
                    console.log(`Socket error ${error}`);
                });

                socket.connect(listenOptions.vscodeServerPort);
            });

            websocket.on('close', (code: number, reason: string): void => {
                // Log close
                socketPromise.then((socket: net.Socket): void => {
                    socket.removeAllListeners('close');
                    socket.end();
                });
            });

            websocket.on('error', (error: Error): void => {
                // log error
                console.log(`Websocket error ${error}`);
            });

            websocket.on('message', (data: WebSocket.Data): void => {
                socketPromise.then((socket: net.Socket): void => {
                    socket.write(<Buffer>data);
                });
            });
        });

        this.server.on('error', (error: Error) => {
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
    }

}
