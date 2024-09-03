"use strict";
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgs = void 0;
const minimist = require("minimist");
const ignoringReporter = {
    onUnknownOption: () => { },
    onMultipleValues: () => { }
};
function parseArgs(args, options, errorReporter = ignoringReporter) {
    const alias = {};
    const string = [];
    const boolean = [];
    for (let optionId in options) {
        if (optionId[0] === '_') {
            continue;
        }
        const o = options[optionId];
        if (o.type === 'string' || o.type === 'string[]') {
            string.push(optionId);
        }
        else if (o.type === 'boolean') {
            boolean.push(optionId);
        }
    }
    // remove aliases to avoid confusion
    const parsedArgs = minimist(args, { string, boolean, alias });
    const cleanedArgs = {};
    const remainingArgs = parsedArgs;
    // https://github.com/microsoft/vscode/issues/58177, https://github.com/microsoft/vscode/issues/106617
    cleanedArgs._ = parsedArgs._.map(arg => String(arg)).filter(arg => arg.length > 0);
    delete remainingArgs._;
    for (let optionId in options) {
        const o = options[optionId];
        let val = remainingArgs[optionId];
        if (typeof val !== 'undefined') {
            if (o.type === 'string[]') {
                if (val && !Array.isArray(val)) {
                    val = [val];
                }
            }
            else if (o.type === 'string') {
                if (Array.isArray(val)) {
                    val = val.pop(); // take the last
                    errorReporter.onMultipleValues(optionId, val);
                }
            }
            cleanedArgs[optionId] = val;
        }
        delete remainingArgs[optionId];
    }
    for (let key in remainingArgs) {
        errorReporter.onUnknownOption(key);
    }
    return cleanedArgs;
}
exports.parseArgs = parseArgs;
//# sourceMappingURL=argv.js.map