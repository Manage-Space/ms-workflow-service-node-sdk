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

export class CreateWorkflowStepDefinitionRequest {
    /**
    * A description of what the step does.
    */
    'description': string;
    /**
    * The event the step will raise.
    */
    'raiseEventSchemaCodeName'?: string;
    /**
    * The event the step will raise.
    */
    'executionTriggerValue'?: string;
    /**
    * The number of minutes after finishing the previous step that this step should execute by.
    */
    'delay'?: number;
    /**
    * Step position
    */
    'stepPosition': number;
    /**
    * Step position
    */
    'previousStep'?: number;
    /**
    * Step position
    */
    'nextStep'?: number;
    /**
    * Max run count of a step
    */
    'maxRunCount'?: number;
    /**
    * Ports
    */
    'ports'?: object;
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
    * Step type id
    */
    'stepTypeId': number;
    /**
    * The name of a custom function.
    */
    'externalStepName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "raiseEventSchemaCodeName",
            "baseName": "raiseEventSchemaCodeName",
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
            "name": "stepTypeId",
            "baseName": "stepTypeId",
            "type": "number"
        },
        {
            "name": "externalStepName",
            "baseName": "externalStepName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateWorkflowStepDefinitionRequest.attributeTypeMap;
    }
}

