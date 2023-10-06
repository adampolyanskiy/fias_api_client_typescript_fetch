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
 * @interface IdResult
 */
export interface IdResult {
    /**
     * 
     * @type {number}
     * @memberof IdResult
     */
    id?: number;
}

/**
 * Check if a given object implements the IdResult interface.
 */
export function instanceOfIdResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdResultFromJSON(json: any): IdResult {
    return IdResultFromJSONTyped(json, false);
}

export function IdResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function IdResultToJSON(value?: IdResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

