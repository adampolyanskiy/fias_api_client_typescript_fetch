/* tslint:disable */
/* eslint-disable */
/**
 * SPAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IFetchChangesTaskStatus
 */
export interface IFetchChangesTaskStatus {
    /**
     * 
     * @type {boolean}
     * @memberof IFetchChangesTaskStatus
     */
    readonly completed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IFetchChangesTaskStatus
     */
    readonly blockCount?: number;
}

/**
 * Check if a given object implements the IFetchChangesTaskStatus interface.
 */
export function instanceOfIFetchChangesTaskStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IFetchChangesTaskStatusFromJSON(json: any): IFetchChangesTaskStatus {
    return IFetchChangesTaskStatusFromJSONTyped(json, false);
}

export function IFetchChangesTaskStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IFetchChangesTaskStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'blockCount': !exists(json, 'blockCount') ? undefined : json['blockCount'],
    };
}

export function IFetchChangesTaskStatusToJSON(value?: IFetchChangesTaskStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

