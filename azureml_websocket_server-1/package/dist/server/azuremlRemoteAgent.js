"use strict";
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
//import * as getPort from 'get-port';
const argv_1 = require("./argv");
const azuremlRemoteWebsocketServer_1 = require("./azuremlRemoteWebsocketServer");
const serverOptions = {
    'port': { type: 'string' },
    'vscode-server-port': { type: 'string' }
};
const errorReporter = {
    onMultipleValues: (id, usedValue) => {
        console.error(`Option ${id} can only be defined once. Using value ${usedValue}.`);
    },
    onUnknownOption: (id) => {
        console.error(`Ignoring option ${id}: not supported for server.`);
    }
};
const args = argv_1.parseArgs(process.argv.slice(2), serverOptions, errorReporter);
const REMOTE_DATA_FOLDER = process.env['AZUREML_REMOTE_WSS_FOLDER'] || path.join(os.homedir(), '.azureml-remote-wss');
const USER_DATA_PATH = path.join(REMOTE_DATA_FOLDER, 'data');
args['user-data-dir'] = USER_DATA_PATH;
// Set port:
// - If passed, check if number and if free
// - If not then pick a free port
let port = 0;
try {
    if (args.port) {
        port = parseInt(args.port);
    }
}
catch (e) {
    console.log('Port is not a number.');
}
// Verify vscode-server-port is busy and used by server-port
let vscodeServerPort = 0;
try {
    if (args['vscode-server-port']) {
        vscodeServerPort = parseInt(args['vscode-server-port']);
    }
}
catch (e) {
    console.log('VS Codes Server port is not a number.');
}
if (port && vscodeServerPort) {
    const server = new azuremlRemoteWebsocketServer_1.AzureMLRemoteWebsocketServer( /*, logService*/);
    server.start({ port: port, vscodeServerPort: vscodeServerPort });
    process.on('exit', () => {
        server.dispose();
    });
}
else {
    process.exit();
}
//# sourceMappingURL=azuremlRemoteAgent.js.map