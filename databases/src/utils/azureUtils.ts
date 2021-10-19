/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export namespace azureUtils {
    export function getResourceGroupFromId(id: string): string {
        const matches: RegExpMatchArray | null = id.match(/\/subscriptions\/(.*)\/resourceGroups\/(.*)\/providers\/(.*)\/(.*)/);

        if (!matches || matches.length < 3) {
            throw new Error('Invalid Azure Resource Id');
        }

        return matches[2];
    }
    export function getAccountNameFromId(id: string): string {
        const matches: RegExpMatchArray | null = id.match(/\/subscriptions\/(.*)\/resourceGroups\/(.*)\/providers\/(.*)\/databaseAccounts\/(.*)/);

        if (!matches || matches.length < 5) {
            throw new Error('Invalid Azure Resource Id');
        }

        return matches[4];
    }
}
