/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */

import * as minimist from 'minimist';

export interface Option<OptionType> {
    type: OptionType;
}

export type OptionDescriptions<T> = {
    [P in keyof T]: Option<OptionTypeName<T[P]>>;
};

type OptionTypeName<T> =
    T extends boolean ? 'boolean' :
    T extends string ? 'string' :
    T extends string[] ? 'string[]' :
    T extends undefined ? 'undefined' :
    'unknown';

export interface ErrorReporter {
    onUnknownOption(id: string): void;
    onMultipleValues(id: string, usedValue: string): void;
}

const ignoringReporter: ErrorReporter = {
    onUnknownOption: () => { },
    onMultipleValues: () => { }
};

export function parseArgs<T>(args: string[], options: OptionDescriptions<T>, errorReporter: ErrorReporter = ignoringReporter): T {
    const alias: { [key: string]: string } = {};
    const string: string[] = [];
    const boolean: string[] = [];
    for (let optionId in options) {
        if (optionId[0] === '_') {
            continue;
        }

        const o = options[optionId];

        if (o.type === 'string' || o.type === 'string[]') {
            string.push(optionId);
        } else if (o.type === 'boolean') {
            boolean.push(optionId);
        }
    }
    // remove aliases to avoid confusion
    const parsedArgs = minimist(args, { string, boolean, alias });

    const cleanedArgs: any = {};
    const remainingArgs: any = parsedArgs;

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
            } else if (o.type === 'string') {
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
