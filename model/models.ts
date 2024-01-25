import localVarRequest from 'request';

export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './createMetaData200Response';
export * from './createMetaDataRequest';
export * from './createWorkflowDefinition200Response';
export * from './createWorkflowDefinitionRequest';
export * from './createWorkflowStepDefinitionRequest';
export * from './excludeCodeMetaData';
export * from './excludeCodeMetaDataResponse';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getByWorkflowInstanceId200Response';
export * from './getWithoutCode200Response';
export * from './getWorkflowInstanceById200Response';
export * from './getWorkflowInstances200Response';
export * from './getWorkflowStepDefinitions200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './metaDataCodeResponse';
export * from './nameOnlyMetaDataRequest';
export * from './setStepInstanceExecuteByRequestDto';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './updateStepInstanceRequestDto';
export * from './workflowDefinitionResponse';
export * from './workflowInstanceResponse';
export * from './workflowStepDefinitionResponse';
export * from './workflowStepInstanceResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CreateMetaData200Response } from './createMetaData200Response';
import { CreateMetaDataRequest } from './createMetaDataRequest';
import { CreateWorkflowDefinition200Response } from './createWorkflowDefinition200Response';
import { CreateWorkflowDefinitionRequest } from './createWorkflowDefinitionRequest';
import { CreateWorkflowStepDefinitionRequest } from './createWorkflowStepDefinitionRequest';
import { ExcludeCodeMetaData } from './excludeCodeMetaData';
import { ExcludeCodeMetaDataResponse } from './excludeCodeMetaDataResponse';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetByWorkflowInstanceId200Response } from './getByWorkflowInstanceId200Response';
import { GetWithoutCode200Response } from './getWithoutCode200Response';
import { GetWorkflowInstanceById200Response } from './getWorkflowInstanceById200Response';
import { GetWorkflowInstances200Response } from './getWorkflowInstances200Response';
import { GetWorkflowStepDefinitions200Response } from './getWorkflowStepDefinitions200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { MetaDataCodeResponse } from './metaDataCodeResponse';
import { NameOnlyMetaDataRequest } from './nameOnlyMetaDataRequest';
import { SetStepInstanceExecuteByRequestDto } from './setStepInstanceExecuteByRequestDto';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UpdateStepInstanceRequestDto } from './updateStepInstanceRequestDto';
import { WorkflowDefinitionResponse } from './workflowDefinitionResponse';
import { WorkflowInstanceResponse } from './workflowInstanceResponse';
import { WorkflowStepDefinitionResponse } from './workflowStepDefinitionResponse';
import { WorkflowStepInstanceResponse } from './workflowStepInstanceResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CreateWorkflowDefinitionRequest.TriggerEventSchemaCodeNameEnum": CreateWorkflowDefinitionRequest.TriggerEventSchemaCodeNameEnum,
        "WorkflowDefinitionResponse.TriggerEventSchemaCodeNameEnum": WorkflowDefinitionResponse.TriggerEventSchemaCodeNameEnum,
}

let typeMap: {[index: string]: any} = {
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CreateMetaData200Response": CreateMetaData200Response,
    "CreateMetaDataRequest": CreateMetaDataRequest,
    "CreateWorkflowDefinition200Response": CreateWorkflowDefinition200Response,
    "CreateWorkflowDefinitionRequest": CreateWorkflowDefinitionRequest,
    "CreateWorkflowStepDefinitionRequest": CreateWorkflowStepDefinitionRequest,
    "ExcludeCodeMetaData": ExcludeCodeMetaData,
    "ExcludeCodeMetaDataResponse": ExcludeCodeMetaDataResponse,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetByWorkflowInstanceId200Response": GetByWorkflowInstanceId200Response,
    "GetWithoutCode200Response": GetWithoutCode200Response,
    "GetWorkflowInstanceById200Response": GetWorkflowInstanceById200Response,
    "GetWorkflowInstances200Response": GetWorkflowInstances200Response,
    "GetWorkflowStepDefinitions200Response": GetWorkflowStepDefinitions200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "MetaDataCodeResponse": MetaDataCodeResponse,
    "NameOnlyMetaDataRequest": NameOnlyMetaDataRequest,
    "SetStepInstanceExecuteByRequestDto": SetStepInstanceExecuteByRequestDto,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UpdateStepInstanceRequestDto": UpdateStepInstanceRequestDto,
    "WorkflowDefinitionResponse": WorkflowDefinitionResponse,
    "WorkflowInstanceResponse": WorkflowInstanceResponse,
    "WorkflowStepDefinitionResponse": WorkflowStepDefinitionResponse,
    "WorkflowStepInstanceResponse": WorkflowStepInstanceResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
