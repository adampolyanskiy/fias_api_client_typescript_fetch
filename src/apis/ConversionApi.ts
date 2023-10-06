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


import * as runtime from '../runtime';
import type {
  AddConversionDataInput,
  ConversionTaskStatusAndStatistics,
  ConvertionResultBlockResult,
  CreateConversionTaskResult,
  ErrorResult,
  SearchByPartsResult,
  StructuredAddress,
  SuccessResult,
} from '../models/index';
import {
    AddConversionDataInputFromJSON,
    AddConversionDataInputToJSON,
    ConversionTaskStatusAndStatisticsFromJSON,
    ConversionTaskStatusAndStatisticsToJSON,
    ConvertionResultBlockResultFromJSON,
    ConvertionResultBlockResultToJSON,
    CreateConversionTaskResultFromJSON,
    CreateConversionTaskResultToJSON,
    ErrorResultFromJSON,
    ErrorResultToJSON,
    SearchByPartsResultFromJSON,
    SearchByPartsResultToJSON,
    StructuredAddressFromJSON,
    StructuredAddressToJSON,
    SuccessResultFromJSON,
    SuccessResultToJSON,
} from '../models/index';

export interface ApiSpasV20AddConversionDataPostRequest {
    addConversionDataInput?: AddConversionDataInput;
}

export interface ApiSpasV20CancelConversionTaskGetRequest {
    taskGuid?: string;
}

export interface ApiSpasV20GetConversionTaskStatusGetRequest {
    taskGuid?: string;
}

export interface ApiSpasV20GetConvertionResultBlockGetRequest {
    taskGuid?: string;
    blockIndex?: number;
}

export interface ApiSpasV20SearchByPartsPostRequest {
    structuredAddress?: StructuredAddress;
}

export interface ApiSpasV20StartConversionTaskGetRequest {
    taskGuid?: string;
}

/**
 * 
 */
export class ConversionApi extends runtime.BaseAPI {

    /**
     * Добавить данные в задачу на конвертацию адресов
     */
    async apiSpasV20AddConversionDataPostRaw(requestParameters: ApiSpasV20AddConversionDataPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/AddConversionData`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddConversionDataInputToJSON(requestParameters.addConversionDataInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResultFromJSON(jsonValue));
    }

    /**
     * Добавить данные в задачу на конвертацию адресов
     */
    async apiSpasV20AddConversionDataPost(requestParameters: ApiSpasV20AddConversionDataPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResult> {
        const response = await this.apiSpasV20AddConversionDataPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Отменить задачу на конвертацию адресов
     */
    async apiSpasV20CancelConversionTaskGetRaw(requestParameters: ApiSpasV20CancelConversionTaskGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResult>> {
        const queryParameters: any = {};

        if (requestParameters.taskGuid !== undefined) {
            queryParameters['task_guid'] = requestParameters.taskGuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/CancelConversionTask`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResultFromJSON(jsonValue));
    }

    /**
     * Отменить задачу на конвертацию адресов
     */
    async apiSpasV20CancelConversionTaskGet(requestParameters: ApiSpasV20CancelConversionTaskGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResult> {
        const response = await this.apiSpasV20CancelConversionTaskGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Создать задачу на конвертацию адресов
     */
    async apiSpasV20CreateConversionTaskGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateConversionTaskResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/CreateConversionTask`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateConversionTaskResultFromJSON(jsonValue));
    }

    /**
     * Создать задачу на конвертацию адресов
     */
    async apiSpasV20CreateConversionTaskGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateConversionTaskResult> {
        const response = await this.apiSpasV20CreateConversionTaskGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Получить статус задачи и статистику выполнения
     */
    async apiSpasV20GetConversionTaskStatusGetRaw(requestParameters: ApiSpasV20GetConversionTaskStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConversionTaskStatusAndStatistics>> {
        const queryParameters: any = {};

        if (requestParameters.taskGuid !== undefined) {
            queryParameters['task_guid'] = requestParameters.taskGuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/GetConversionTaskStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversionTaskStatusAndStatisticsFromJSON(jsonValue));
    }

    /**
     * Получить статус задачи и статистику выполнения
     */
    async apiSpasV20GetConversionTaskStatusGet(requestParameters: ApiSpasV20GetConversionTaskStatusGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversionTaskStatusAndStatistics> {
        const response = await this.apiSpasV20GetConversionTaskStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Получить блок идентификаторов адресных элементов, полученных при конвертации
     */
    async apiSpasV20GetConvertionResultBlockGetRaw(requestParameters: ApiSpasV20GetConvertionResultBlockGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConvertionResultBlockResult>> {
        const queryParameters: any = {};

        if (requestParameters.taskGuid !== undefined) {
            queryParameters['task_guid'] = requestParameters.taskGuid;
        }

        if (requestParameters.blockIndex !== undefined) {
            queryParameters['block_index'] = requestParameters.blockIndex;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/GetConvertionResultBlock`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConvertionResultBlockResultFromJSON(jsonValue));
    }

    /**
     * Получить блок идентификаторов адресных элементов, полученных при конвертации
     */
    async apiSpasV20GetConvertionResultBlockGet(requestParameters: ApiSpasV20GetConvertionResultBlockGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConvertionResultBlockResult> {
        const response = await this.apiSpasV20GetConvertionResultBlockGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Поиск объекта ФИАС по частям его адреса
     */
    async apiSpasV20SearchByPartsPostRaw(requestParameters: ApiSpasV20SearchByPartsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchByPartsResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/SearchByParts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StructuredAddressToJSON(requestParameters.structuredAddress),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchByPartsResultFromJSON(jsonValue));
    }

    /**
     * Поиск объекта ФИАС по частям его адреса
     */
    async apiSpasV20SearchByPartsPost(requestParameters: ApiSpasV20SearchByPartsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchByPartsResult> {
        const response = await this.apiSpasV20SearchByPartsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Запустить задачу на конвертацию адресов
     */
    async apiSpasV20StartConversionTaskGetRaw(requestParameters: ApiSpasV20StartConversionTaskGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResult>> {
        const queryParameters: any = {};

        if (requestParameters.taskGuid !== undefined) {
            queryParameters['task_guid'] = requestParameters.taskGuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["master-token"] = this.configuration.apiKey("master-token"); // master-token authentication
        }

        const response = await this.request({
            path: `/api/spas/v2.0/StartConversionTask`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResultFromJSON(jsonValue));
    }

    /**
     * Запустить задачу на конвертацию адресов
     */
    async apiSpasV20StartConversionTaskGet(requestParameters: ApiSpasV20StartConversionTaskGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResult> {
        const response = await this.apiSpasV20StartConversionTaskGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
