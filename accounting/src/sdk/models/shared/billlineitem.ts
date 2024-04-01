/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountRef, AccountRef$ } from "./accountref";
import { ItemRef, ItemRef$ } from "./itemref";
import { PropertieTracking, PropertieTracking$ } from "./propertietracking";
import { TaxRateRef, TaxRateRef$ } from "./taxrateref";
import { TrackingCategoryRef, TrackingCategoryRef$ } from "./trackingcategoryref";
import { Zero, Zero$ } from "./zero";
import * as z from "zod";

export type BillLineItem = {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    accountRef?: AccountRef | undefined;
    /**
     * Friendly name of the goods or services received.
     */
    description?: string | null | undefined;
    /**
     * Numerical value of any discounts applied.
     *
     * @remarks
     *
     * Do not use to apply discounts in Oracle NetSuite—see Oracle NetSuite integration reference.
     */
    discountAmount?: Decimal$ | number | null | undefined;
    /**
     * Percentage rate of any discount applied to the bill.
     */
    discountPercentage?: Decimal$ | number | null | undefined;
    /**
     * The bill is a direct cost if `True`.
     */
    isDirectCost?: boolean | undefined;
    itemRef?: ItemRef | undefined;
    /**
     * The bill line's number.
     */
    lineNumber?: string | null | undefined;
    purchaseOrderLineRef?: Zero | undefined;
    /**
     * Number of units of goods or services received.
     */
    quantity: Decimal$ | number;
    /**
     * Amount of the line, inclusive of discounts but exclusive of tax.
     */
    subTotal?: Decimal$ | number | null | undefined;
    /**
     * Amount of tax for the line.
     */
    taxAmount?: Decimal$ | number | null | undefined;
    /**
     * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
     *
     * @remarks
     *
     * Found on:
     *
     * - Bill line items
     * - Bill Credit Note line items
     * - Credit Note line items
     * - Direct incomes line items
     * - Invoice line items
     * - Items
     */
    taxRateRef?: TaxRateRef | undefined;
    /**
     * Total amount of the line, including tax.
     */
    totalAmount?: Decimal$ | number | null | undefined;
    /**
     * Categories, and a project and customer, against which the item is tracked.
     */
    tracking?: PropertieTracking | undefined;
    /**
     * Collection of categories against which this item is tracked.
     */
    trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
    /**
     * Price of each unit of goods or services.
     */
    unitAmount: Decimal$ | number;
    /**
     * The measurement which defines a unit for this item (e.g. 'kilogram', 'litre').
     */
    unitOfMeasurement?: string | null | undefined;
};

/** @internal */
export namespace BillLineItem$ {
    export type Inbound = {
        accountRef?: AccountRef$.Inbound | undefined;
        description?: string | null | undefined;
        discountAmount?: number | null | undefined;
        discountPercentage?: number | null | undefined;
        isDirectCost?: boolean | undefined;
        itemRef?: ItemRef$.Inbound | undefined;
        lineNumber?: string | null | undefined;
        purchaseOrderLineRef?: Zero$.Inbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Inbound | undefined;
        totalAmount?: number | null | undefined;
        tracking?: PropertieTracking$.Inbound | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Inbound> | null | undefined;
        unitAmount: number;
        unitOfMeasurement?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<BillLineItem, z.ZodTypeDef, Inbound> = z
        .object({
            accountRef: AccountRef$.inboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            discountAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            discountPercentage: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            isDirectCost: z.boolean().optional(),
            itemRef: ItemRef$.inboundSchema.optional(),
            lineNumber: z.nullable(z.string()).optional(),
            purchaseOrderLineRef: Zero$.inboundSchema.optional(),
            quantity: z.number().transform((v) => new Decimal$(v)),
            subTotal: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxRateRef: TaxRateRef$.inboundSchema.optional(),
            totalAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            tracking: PropertieTracking$.inboundSchema.optional(),
            trackingCategoryRefs: z
                .nullable(z.array(TrackingCategoryRef$.inboundSchema))
                .optional(),
            unitAmount: z.number().transform((v) => new Decimal$(v)),
            unitOfMeasurement: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.discountAmount === undefined ? null : { discountAmount: v.discountAmount }),
                ...(v.discountPercentage === undefined
                    ? null
                    : { discountPercentage: v.discountPercentage }),
                ...(v.isDirectCost === undefined ? null : { isDirectCost: v.isDirectCost }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
                ...(v.purchaseOrderLineRef === undefined
                    ? null
                    : { purchaseOrderLineRef: v.purchaseOrderLineRef }),
                quantity: v.quantity,
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxRateRef === undefined ? null : { taxRateRef: v.taxRateRef }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.trackingCategoryRefs === undefined
                    ? null
                    : { trackingCategoryRefs: v.trackingCategoryRefs }),
                unitAmount: v.unitAmount,
                ...(v.unitOfMeasurement === undefined
                    ? null
                    : { unitOfMeasurement: v.unitOfMeasurement }),
            };
        });

    export type Outbound = {
        accountRef?: AccountRef$.Outbound | undefined;
        description?: string | null | undefined;
        discountAmount?: number | null | undefined;
        discountPercentage?: number | null | undefined;
        isDirectCost?: boolean | undefined;
        itemRef?: ItemRef$.Outbound | undefined;
        lineNumber?: string | null | undefined;
        purchaseOrderLineRef?: Zero$.Outbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Outbound | undefined;
        totalAmount?: number | null | undefined;
        tracking?: PropertieTracking$.Outbound | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Outbound> | null | undefined;
        unitAmount: number;
        unitOfMeasurement?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillLineItem> = z
        .object({
            accountRef: AccountRef$.outboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            discountAmount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            discountPercentage: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            isDirectCost: z.boolean().optional(),
            itemRef: ItemRef$.outboundSchema.optional(),
            lineNumber: z.nullable(z.string()).optional(),
            purchaseOrderLineRef: Zero$.outboundSchema.optional(),
            quantity: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            subTotal: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            taxAmount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            taxRateRef: TaxRateRef$.outboundSchema.optional(),
            totalAmount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            tracking: PropertieTracking$.outboundSchema.optional(),
            trackingCategoryRefs: z
                .nullable(z.array(TrackingCategoryRef$.outboundSchema))
                .optional(),
            unitAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            unitOfMeasurement: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.discountAmount === undefined ? null : { discountAmount: v.discountAmount }),
                ...(v.discountPercentage === undefined
                    ? null
                    : { discountPercentage: v.discountPercentage }),
                ...(v.isDirectCost === undefined ? null : { isDirectCost: v.isDirectCost }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                ...(v.lineNumber === undefined ? null : { lineNumber: v.lineNumber }),
                ...(v.purchaseOrderLineRef === undefined
                    ? null
                    : { purchaseOrderLineRef: v.purchaseOrderLineRef }),
                quantity: v.quantity,
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxRateRef === undefined ? null : { taxRateRef: v.taxRateRef }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.tracking === undefined ? null : { tracking: v.tracking }),
                ...(v.trackingCategoryRefs === undefined
                    ? null
                    : { trackingCategoryRefs: v.trackingCategoryRefs }),
                unitAmount: v.unitAmount,
                ...(v.unitOfMeasurement === undefined
                    ? null
                    : { unitOfMeasurement: v.unitOfMeasurement }),
            };
        });
}
