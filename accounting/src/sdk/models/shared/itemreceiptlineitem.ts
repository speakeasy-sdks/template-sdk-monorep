/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountRef, AccountRef$ } from "./accountref";
import { ItemRef, ItemRef$ } from "./itemref";
import { TrackingRecordRef, TrackingRecordRef$ } from "./trackingrecordref";
import * as z from "zod";

/**
 * Allowed name of the 'dataType'.
 */
export enum ItemReceiptLineItemDataType {
    PurchaseOrders = "purchaseOrders",
    Bills = "bills",
}

/**
 * Reference to the item receipt line this line was generated from.
 */
export type RecordLineReference = {
    /**
     * Allowed name of the 'dataType'.
     */
    dataType?: ItemReceiptLineItemDataType | undefined;
    /**
     * 'id' of the underlying record.
     */
    id?: string | undefined;
    /**
     * Line number of the underlying record.
     */
    lineNumber?: string | undefined;
};

export type ItemReceiptLineItemTracking = {
    recordRefs?: Array<TrackingRecordRef> | null | undefined;
};

export type ItemReceiptLineItem = {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    accountRef?: AccountRef | undefined;
    /**
     * Friendly name of the item or services received.
     */
    description?: string | null | undefined;
    itemRef?: ItemRef | undefined;
    /**
     * The item receipt line's number.
     */
    lineNumber?: string | null | undefined;
    purchaseOrderLineRef?: RecordLineReference | undefined;
    /**
     * Number of units of item or services received.
     */
    quantity?: Decimal$ | number | undefined;
    /**
     * Amount of the line, inclusive of discounts but exclusive of tax.
     */
    subTotal?: Decimal$ | number | null | undefined;
    /**
     * Total amount of the line, including tax.
     */
    totalAmount?: Decimal$ | number | null | undefined;
    tracking?: ItemReceiptLineItemTracking | undefined;
    /**
     * Price of each unit of item or services.
     */
    unitAmount?: Decimal$ | number | undefined;
    /**
     * The measurement which defines a unit for this item (e.g. 'kilogram', 'litre').
     */
    unitOfMeasurement?: string | null | undefined;
};

/** @internal */
export const ItemReceiptLineItemDataType$ = z.nativeEnum(ItemReceiptLineItemDataType);

/** @internal */
export namespace RecordLineReference$ {
    export type Inbound = {
        dataType?: ItemReceiptLineItemDataType | undefined;
        id?: string | undefined;
        lineNumber?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RecordLineReference, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: ItemReceiptLineItemDataType$.optional(),
            id: z.string().optional(),
            lineNumber: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
            };
        });

    export type Outbound = {
        dataType?: ItemReceiptLineItemDataType | undefined;
        id?: string | undefined;
        lineNumber?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordLineReference> = z
        .object({
            dataType: ItemReceiptLineItemDataType$.optional(),
            id: z.string().optional(),
            lineNumber: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
            };
        });
}

/** @internal */
export namespace ItemReceiptLineItemTracking$ {
    export type Inbound = {
        recordRefs?: Array<TrackingRecordRef$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<ItemReceiptLineItemTracking, z.ZodTypeDef, Inbound> = z
        .object({
            recordRefs: z.nullable(z.array(TrackingRecordRef$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.recordRefs === undefined ? null : { recordRefs: v.recordRefs }),
            };
        });

    export type Outbound = {
        recordRefs?: Array<TrackingRecordRef$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ItemReceiptLineItemTracking> = z
        .object({
            recordRefs: z.nullable(z.array(TrackingRecordRef$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.recordRefs === undefined ? null : { recordRefs: v.recordRefs }),
            };
        });
}

/** @internal */
export namespace ItemReceiptLineItem$ {
    export type Inbound = {
        accountRef?: AccountRef$.Inbound | undefined;
        description?: string | null | undefined;
        itemRef?: ItemRef$.Inbound | undefined;
        lineNumber?: string | null | undefined;
        purchaseOrderLineRef?: RecordLineReference$.Inbound | undefined;
        quantity?: number | undefined;
        subTotal?: number | null | undefined;
        totalAmount?: number | null | undefined;
        tracking?: ItemReceiptLineItemTracking$.Inbound | undefined;
        unitAmount?: number | undefined;
        unitOfMeasurement?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<ItemReceiptLineItem, z.ZodTypeDef, Inbound> = z
        .object({
            accountRef: AccountRef$.inboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            itemRef: ItemRef$.inboundSchema.optional(),
            lineNumber: z.nullable(z.string()).optional(),
            purchaseOrderLineRef: z.lazy(() => RecordLineReference$.inboundSchema).optional(),
            quantity: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            subTotal: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            totalAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            tracking: z.lazy(() => ItemReceiptLineItemTracking$.inboundSchema).optional(),
            unitAmount: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            unitOfMeasurement: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
                ...(v.purchaseOrderLineRef === undefined
                    ? null
                    : { purchaseOrderLineRef: v.purchaseOrderLineRef }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.unitAmount === undefined ? null : { unitAmount: v.unitAmount }),
                ...(v.unitOfMeasurement === undefined
                    ? null
                    : { unitOfMeasurement: v.unitOfMeasurement }),
            };
        });

    export type Outbound = {
        accountRef?: AccountRef$.Outbound | undefined;
        description?: string | null | undefined;
        itemRef?: ItemRef$.Outbound | undefined;
        lineNumber?: string | null | undefined;
        purchaseOrderLineRef?: RecordLineReference$.Outbound | undefined;
        quantity?: number | undefined;
        subTotal?: number | null | undefined;
        totalAmount?: number | null | undefined;
        tracking?: ItemReceiptLineItemTracking$.Outbound | undefined;
        unitAmount?: number | undefined;
        unitOfMeasurement?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ItemReceiptLineItem> = z
        .object({
            accountRef: AccountRef$.outboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            itemRef: ItemRef$.outboundSchema.optional(),
            lineNumber: z.nullable(z.string()).optional(),
            purchaseOrderLineRef: z.lazy(() => RecordLineReference$.outboundSchema).optional(),
            quantity: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            subTotal: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            totalAmount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            tracking: z.lazy(() => ItemReceiptLineItemTracking$.outboundSchema).optional(),
            unitAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            unitOfMeasurement: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
                ...(v.purchaseOrderLineRef === undefined
                    ? null
                    : { purchaseOrderLineRef: v.purchaseOrderLineRef }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.unitAmount === undefined ? null : { unitAmount: v.unitAmount }),
                ...(v.unitOfMeasurement === undefined
                    ? null
                    : { unitOfMeasurement: v.unitOfMeasurement }),
            };
        });
}
