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
import type { AddressLevel } from './AddressLevel';
import {
    AddressLevelFromJSON,
    AddressLevelFromJSONTyped,
    AddressLevelToJSON,
} from './AddressLevel';

/**
 * 
 * @export
 * @interface AddressPart
 */
export interface AddressPart {
    /**
     * 
     * @type {number}
     * @memberof AddressPart
     */
    objectId?: number;
    /**
     * 
     * @type {AddressLevel}
     * @memberof AddressPart
     */
    objectLevelId?: AddressLevel;
    /**
     * 
     * @type {string}
     * @memberof AddressPart
     */
    objectGuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressPart
     */
    readonly objectType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressPart
     */
    fullName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressPart
     */
    fullNameShort?: string | null;
}

/**
 * Check if a given object implements the AddressPart interface.
 */
export function instanceOfAddressPart(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressPartFromJSON(json: any): AddressPart {
    return AddressPartFromJSONTyped(json, false);
}

export function AddressPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressPart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objectId': !exists(json, 'object_id') ? undefined : json['object_id'],
        'objectLevelId': !exists(json, 'object_level_id') ? undefined : AddressLevelFromJSON(json['object_level_id']),
        'objectGuid': !exists(json, 'object_guid') ? undefined : json['object_guid'],
        'objectType': !exists(json, 'object_type') ? undefined : json['object_type'],
        'fullName': !exists(json, 'full_name') ? undefined : json['full_name'],
        'fullNameShort': !exists(json, 'full_name_short') ? undefined : json['full_name_short'],
    };
}

export function AddressPartToJSON(value?: AddressPart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'object_id': value.objectId,
        'object_level_id': AddressLevelToJSON(value.objectLevelId),
        'object_guid': value.objectGuid,
        'full_name': value.fullName,
        'full_name_short': value.fullNameShort,
    };
}

