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
 * @interface ConvertionRecord
 */
export interface ConvertionRecord {
    /**
     * 
     * @type {string}
     * @memberof ConvertionRecord
     */
    readonly dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConvertionRecord
     */
    extId?: string | null;
}

/**
 * Check if a given object implements the ConvertionRecord interface.
 */
export function instanceOfConvertionRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConvertionRecordFromJSON(json: any): ConvertionRecord {
    return ConvertionRecordFromJSONTyped(json, false);
}

export function ConvertionRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConvertionRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'data_type') ? undefined : json['data_type'],
        'extId': !exists(json, 'ext_id') ? undefined : json['ext_id'],
    };
}

export function ConvertionRecordToJSON(value?: ConvertionRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ext_id': value.extId,
    };
}

