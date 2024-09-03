/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */

import * as os from 'os';
import * as path from 'path';
//import * as getPort from 'get-port';
import { ErrorReporter, OptionDescriptions, parseArgs } from './argv';
import { AzureMLRemoteWebsocketServer } from './azuremlRemoteWebsocketServer';

const serverOptions: OptionDescriptions<ServerParsedArgs> = {
    'port': { type: 'string' },
    'vscode-server-port': { type: 'string' }
}

export interface ServerParsedArgs {
    port?: string;
    'vscode-server-port': string;
    'user-data-dir'?: string;
}

const errorReporter: ErrorReporter = {
    onMultipleValues: (id: string, usedValue: string) => {
        console.error(`Option ${id} can only be defined once. Using value ${usedValue}.`);
    },

    onUnknownOption: (id: string) => {
        console.error(`Ignoring option ${id}: not supported for server.`);
    }
};

const args = parseArgs(process.argv.slice(2), serverOptions, errorReporter);

const REMOTE_DATA_FOLDER = process.env['AZUREML_REMOTE_WSS_FOLDER'] || path.join(os.homedir(), '.azureml-remote-wss');
const USER_DATA_PATH = path.join(REMOTE_DATA_FOLDER, 'data');
args['user-data-dir'] = USER_DATA_PATH;

// Set port:
// - If passed, check if number and if free
// - If not then pick a free port
let port: number = 0;
try {
    if (args.port) {
        port = parseInt(args.port);
    }
} catch (e) {
    console.log('Port is not a number.');
}

// Verify vscode-server-port is busy and used by server-port
let vscodeServerPort: number = 0;
try {
    if (args['vscode-server-port']) {
        vscodeServerPort = parseInt(args['vscode-server-port']);
    }
} catch (e) {
    console.log('VS Codes Server port is not a number.');
}

if (port && vscodeServerPort) {
    const server = new AzureMLRemoteWebsocketServer(/*, logService*/);
    server.start({ port: port, vscodeServerPort: vscodeServerPort });

    process.on('exit', () => {
        server.dispose();
    });
} else {
    process.exit();
}
