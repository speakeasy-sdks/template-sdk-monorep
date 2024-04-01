/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BillItem, BillItem$ } from "./billitem";
import { DataType, DataType$ } from "./datatype";
import { InvoiceItem, InvoiceItem$ } from "./invoiceitem";
import { ItemStatus, ItemStatus$ } from "./itemstatus";
import { ItemType, ItemType$ } from "./itemtype";
import { Metadata, Metadata$ } from "./metadata";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { Validation, Validation$ } from "./validation";
import * as z from "zod";

/**
 * > View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * **Items** allow your customers to save and track details of the products and services that they buy and sell.
 *
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingItem = {
    /**
     * Item details that are only for bills.
     */
    billItem?: BillItem | undefined;
    /**
     * Friendly reference for the item.
     */
    code?: string | null | undefined;
    /**
     * Identifier for the item that is unique to a company in the accounting platform.
     */
    id?: string | undefined;
    /**
     * Item details that are only for bills.
     */
    invoiceItem?: InvoiceItem | undefined;
    /**
     * Whether you can use this item for bills.
     */
    isBillItem: boolean;
    /**
     * Whether you can use this item for invoices.
     */
    isInvoiceItem: boolean;
    /**
     * Current state of the item, either:
     *
     * @remarks
     *
     * - `Active`: Available for use
     * - `Archived`: Unavailable
     * - `Unknown`
     *
     * Due to a [limitation in Xero's API](https://docs.codat.io/integrations/accounting/xero/xero-faq#why-do-all-of-my-items-from-xero-have-their-status-as-unknown), all items from Xero are mapped as `Unknown`.
     */
    itemStatus: ItemStatus;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Name of the item in the accounting platform.
     */
    name?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
    /**
     * Type of the item.
     */
    type: ItemType;
};

export type CreateItemResponse = {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    changes?: Array<PushOperationChange> | null | undefined;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId: string;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    completedOnUtc?: string | undefined;
    data?: AccountingItem | null | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionKey: string;
    /**
     * Available data types
     */
    dataType?: DataType | undefined;
    /**
     * A message about the error.
     */
    errorMessage?: string | null | undefined;
    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    pushOperationKey: string;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    requestedOnUtc: string;
    /**
     * The current status of the push operation.
     */
    status: PushOperationStatus;
    /**
     * Push status code.
     */
    statusCode: number;
    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    timeoutInMinutes?: number | null | undefined;
    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    timeoutInSeconds?: number | null | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    validation?: Validation | undefined;
};

/** @internal */
export namespace AccountingItem$ {
    export type Inbound = {
        billItem?: BillItem$.Inbound | undefined;
        code?: string | null | undefined;
        id?: string | undefined;
        invoiceItem?: InvoiceItem$.Inbound | undefined;
        isBillItem: boolean;
        isInvoiceItem: boolean;
        itemStatus: ItemStatus;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        supplementalData?: SupplementalData$.Inbound | undefined;
        type: ItemType;
    };

    export const inboundSchema: z.ZodType<AccountingItem, z.ZodTypeDef, Inbound> = z
        .object({
            billItem: BillItem$.inboundSchema.optional(),
            code: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            invoiceItem: InvoiceItem$.inboundSchema.optional(),
            isBillItem: z.boolean(),
            isInvoiceItem: z.boolean(),
            itemStatus: ItemStatus$,
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            supplementalData: SupplementalData$.inboundSchema.optional(),
            type: ItemType$,
        })
        .transform((v) => {
            return {
                ...(v.billItem === undefined ? null : { billItem: v.billItem }),
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.invoiceItem === undefined ? null : { invoiceItem: v.invoiceItem }),
                isBillItem: v.isBillItem,
                isInvoiceItem: v.isInvoiceItem,
                itemStatus: v.itemStatus,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                type: v.type,
            };
        });

    export type Outbound = {
        billItem?: BillItem$.Outbound | undefined;
        code?: string | null | undefined;
        id?: string | undefined;
        invoiceItem?: InvoiceItem$.Outbound | undefined;
        isBillItem: boolean;
        isInvoiceItem: boolean;
        itemStatus: ItemStatus;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
        type: ItemType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingItem> = z
        .object({
            billItem: BillItem$.outboundSchema.optional(),
            code: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            invoiceItem: InvoiceItem$.outboundSchema.optional(),
            isBillItem: z.boolean(),
            isInvoiceItem: z.boolean(),
            itemStatus: ItemStatus$,
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            supplementalData: SupplementalData$.outboundSchema.optional(),
            type: ItemType$,
        })
        .transform((v) => {
            return {
                ...(v.billItem === undefined ? null : { billItem: v.billItem }),
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.invoiceItem === undefined ? null : { invoiceItem: v.invoiceItem }),
                isBillItem: v.isBillItem,
                isInvoiceItem: v.isInvoiceItem,
                itemStatus: v.itemStatus,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                type: v.type,
            };
        });
}

/** @internal */
export namespace CreateItemResponse$ {
    export type Inbound = {
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingItem$.Inbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateItemResponse, z.ZodTypeDef, Inbound> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingItem$.inboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        changes?: Array<PushOperationChange$.Outbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingItem$.Outbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateItemResponse> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingItem$.outboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
