/**
 * ManageSpace Workflow API
 * ManageSpace Workflow API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { NameOnlyMetaDataRequest } from './nameOnlyMetaDataRequest';

export class CreateWorkflowStepDefinitionRequest {
    /**
    * Step position
    */
    'stepPosition': number;
    /**
    * Max run count of a step
    */
    'maxRunCount'?: number;
    /**
    * Ports
    */
    'ports'?: object | null;
    'metaData': NameOnlyMetaDataRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stepPosition",
            "baseName": "stepPosition",
            "type": "number"
        },
        {
            "name": "maxRunCount",
            "baseName": "maxRunCount",
            "type": "number"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "object"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "NameOnlyMetaDataRequest"
        }    ];

    static getAttributeTypeMap() {
        return CreateWorkflowStepDefinitionRequest.attributeTypeMap;
    }
}

