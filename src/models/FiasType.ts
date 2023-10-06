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
 * @interface FiasType
 */
export interface FiasType {
    /**
     * 
     * @type {number}
     * @memberof FiasType
     */
    id?: number;
    /**
     * 
     * @type {AddressLevel}
     * @memberof FiasType
     */
    addressLevel?: AddressLevel;
    /**
     * 
     * @type {string}
     * @memberof FiasType
     */
    typeShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FiasType
     */
    typeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FiasType
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FiasType
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FiasType
     */
    formCode?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof FiasType
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof FiasType
     */
    endDate?: Date | null;
}

/**
 * Check if a given object implements the FiasType interface.
 */
export function instanceOfFiasType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiasTypeFromJSON(json: any): FiasType {
    return FiasTypeFromJSONTyped(json, false);
}

export function FiasTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiasType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'addressLevel': !exists(json, 'address_level') ? undefined : AddressLevelFromJSON(json['address_level']),
        'typeShortName': !exists(json, 'type_short_name') ? undefined : json['type_short_name'],
        'typeName': !exists(json, 'type_name') ? undefined : json['type_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'formCode': !exists(json, 'form_code') ? undefined : json['form_code'],
        'startDate': !exists(json, 'start_date') ? undefined : (json['start_date'] === null ? null : new Date(json['start_date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (json['end_date'] === null ? null : new Date(json['end_date'])),
    };
}

export function FiasTypeToJSON(value?: FiasType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'address_level': AddressLevelToJSON(value.addressLevel),
        'type_short_name': value.typeShortName,
        'type_name': value.typeName,
        'description': value.description,
        'is_active': value.isActive,
        'form_code': value.formCode,
        'start_date': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate === null ? null : value.endDate.toISOString()),
    };
}
