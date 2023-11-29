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
import { CreateWorkflowStepDefinitionRequest } from './createWorkflowStepDefinitionRequest';

export class CreateWorkflowDefinitionRequest {
    /**
    * A description of what the step does.
    */
    'description': string;
    /**
    * The event that triggers this workflow.
    */
    'triggerEventSchemaCodeName': CreateWorkflowDefinitionRequest.TriggerEventSchemaCodeNameEnum;
    /**
    * The steps of the workflow.
    */
    'steps': Array<CreateWorkflowStepDefinitionRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "triggerEventSchemaCodeName",
            "baseName": "triggerEventSchemaCodeName",
            "type": "CreateWorkflowDefinitionRequest.TriggerEventSchemaCodeNameEnum"
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Array<CreateWorkflowStepDefinitionRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateWorkflowDefinitionRequest.attributeTypeMap;
    }
}

export namespace CreateWorkflowDefinitionRequest {
    export enum TriggerEventSchemaCodeNameEnum {
        AuditEntryRequired = <any> 'AuditEntryRequired',
        MoveOutCreated = <any> 'MoveOutCreated',
        ReservationCreated = <any> 'ReservationCreated',
        ReservationUpdated = <any> 'ReservationUpdated',
        ReservationCancelled = <any> 'ReservationCancelled',
        ReservationExpired = <any> 'ReservationExpired',
        SpaceReservationCreated = <any> 'SpaceReservationCreated',
        LeaseCreated = <any> 'LeaseCreated',
        RentalCreated = <any> 'RentalCreated',
        DiaryEntryRequired = <any> 'DiaryEntryRequired',
        DiaryEntryActioned = <any> 'DiaryEntryActioned',
        DocumentReady = <any> 'DocumentReady',
        DocumentRequired = <any> 'DocumentRequired',
        DocumentCompleted = <any> 'DocumentCompleted',
        CommunicationRequired = <any> 'CommunicationRequired',
        CartLeaseItemPurchased = <any> 'CartLeaseItemPurchased',
        InvoiceRequired = <any> 'InvoiceRequired',
        InvoiceV2Required = <any> 'InvoiceV2Required',
        InvoiceStateChanged = <any> 'InvoiceStateChanged',
        InvoiceV2LineItemRequired = <any> 'InvoiceV2LineItemRequired',
        ImportCompleted = <any> 'ImportCompleted',
        SmartSearchCompleted = <any> 'SmartSearchCompleted',
        PaymentRequested = <any> 'PaymentRequested',
        PaymentAttempted = <any> 'PaymentAttempted',
        UpdateUnit = <any> 'UpdateUnit'
    }
}
