/**
 * ManageSpace Workflow API
 * ManageSpace Workflow API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

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
    * The type of this step
    */
    'stepTypeId': WorkflowStepDefinitionResponse.StepTypeIdEnum;
    /**
    * A description of what the step does.
    */
    'description': string;
    /**
    * The event that will trigger this step.
    */
    'executionTriggerValue'?: string;
    /**
    * The number of minutes after finishing the previous step that this step should execute by.
    */
    'delay'?: number;
    /**
    * The event the step will raise.
    */
    'raiseEventSchemaCodeName'?: string;
    /**
    * The name of a custom function.
    */
    'externalStepName'?: string;
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
    * Mappings
    */
    'mappings': object;
    /**
    * Literals
    */
    'literals': object;
    /**
    * Templates
    */
    'templates': object;
    /**
    * Ports
    */
    'ports'?: object;
    /**
    * The port that starts this step.
    */
    'triggerPort'?: string;

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
            "name": "stepTypeId",
            "baseName": "stepTypeId",
            "type": "WorkflowStepDefinitionResponse.StepTypeIdEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "executionTriggerValue",
            "baseName": "executionTriggerValue",
            "type": "string"
        },
        {
            "name": "delay",
            "baseName": "delay",
            "type": "number"
        },
        {
            "name": "raiseEventSchemaCodeName",
            "baseName": "raiseEventSchemaCodeName",
            "type": "string"
        },
        {
            "name": "externalStepName",
            "baseName": "externalStepName",
            "type": "string"
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
            "name": "mappings",
            "baseName": "mappings",
            "type": "object"
        },
        {
            "name": "literals",
            "baseName": "literals",
            "type": "object"
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "object"
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
        }    ];

    static getAttributeTypeMap() {
        return WorkflowStepDefinitionResponse.attributeTypeMap;
    }
}

export namespace WorkflowStepDefinitionResponse {
    export enum StepTypeIdEnum {
        NUMBER_1 = <any> 1,
        NUMBER_2 = <any> 2,
        NUMBER_3 = <any> 3,
        NUMBER_4 = <any> 4
    }
}
