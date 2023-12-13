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
import { ExcludeCodeMetaData } from './excludeCodeMetaData';

export class WorkflowStepDefinitionResponse {
    /**
    * Workflow Step Definition ID
    */
    'id': string;
    /**
    * Workflow Definition ID of this step
    */
    'workflowDefinitionId': string;
    /**
    * The number of minutes after finishing the previous step that this step should execute by.
    */
    'delay'?: number;
    /**
    * Step position
    */
    'stepPosition': number;
    /**
    * Previous step position
    */
    'previousStep'?: number;
    /**
    * Next step position
    */
    'nextStep'?: number;
    /**
    * The number of times this step can run.
    */
    'maxCount': number;
    /**
    * Ports
    */
    'ports'?: object;
    /**
    * The port that starts this step.
    */
    'triggerPort'?: string;
    'metaData': ExcludeCodeMetaData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "workflowDefinitionId",
            "baseName": "workflowDefinitionId",
            "type": "string"
        },
        {
            "name": "delay",
            "baseName": "delay",
            "type": "number"
        },
        {
            "name": "stepPosition",
            "baseName": "stepPosition",
            "type": "number"
        },
        {
            "name": "previousStep",
            "baseName": "previousStep",
            "type": "number"
        },
        {
            "name": "nextStep",
            "baseName": "nextStep",
            "type": "number"
        },
        {
            "name": "maxCount",
            "baseName": "maxCount",
            "type": "number"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "object"
        },
        {
            "name": "triggerPort",
            "baseName": "triggerPort",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "ExcludeCodeMetaData"
        }    ];

    static getAttributeTypeMap() {
        return WorkflowStepDefinitionResponse.attributeTypeMap;
    }
}

