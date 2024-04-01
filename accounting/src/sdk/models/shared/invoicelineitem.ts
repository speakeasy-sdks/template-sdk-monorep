/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountRef, AccountRef$ } from "./accountref";
import { ItemRef, ItemRef$ } from "./itemref";
import { PropertieTracking1, PropertieTracking1$ } from "./propertietracking1";
import { TaxRateRef, TaxRateRef$ } from "./taxrateref";
import { TrackingCategoryRef, TrackingCategoryRef$ } from "./trackingcategoryref";
import * as z from "zod";

export type InvoiceLineItem = {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    accountRef?: AccountRef | undefined;
    /**
     * Friendly name of the goods or services provided.
     */
    description?: string | null | undefined;
    /**
     * Numerical value of any discounts applied.
     */
    discountAmount?: Decimal$ | number | null | undefined;
    /**
     * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
     */
    discountPercentage?: Decimal$ | number | null | undefined;
    /**
     * The invoice is a direct income if `True`.
     */
    isDirectIncome?: boolean | undefined;
    itemRef?: ItemRef | undefined;
    /**
     * Number of units of goods or services provided.
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
     * Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified.
     */
    totalAmount?: Decimal$ | number | null | undefined;
    /**
     * Categories, and a project and customer, against which the item is tracked.
     */
    tracking?: PropertieTracking1 | undefined;
    /**
     * Reference to the tracking categories to which the line item is linked.
     */
    trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
    /**
     * Price of each unit of goods or services.
     */
    unitAmount: Decimal$ | number;
};

/** @internal */
export namespace InvoiceLineItem$ {
    export type Inbound = {
        accountRef?: AccountRef$.Inbound | undefined;
        description?: string | null | undefined;
        discountAmount?: number | null | undefined;
        discountPercentage?: number | null | undefined;
        isDirectIncome?: boolean | undefined;
        itemRef?: ItemRef$.Inbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Inbound | undefined;
        totalAmount?: number | null | undefined;
        tracking?: PropertieTracking1$.Inbound | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Inbound> | null | undefined;
        unitAmount: number;
    };

    export const inboundSchema: z.ZodType<InvoiceLineItem, z.ZodTypeDef, Inbound> = z
        .object({
            accountRef: AccountRef$.inboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            discountAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            discountPercentage: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            isDirectIncome: z.boolean().optional(),
            itemRef: ItemRef$.inboundSchema.optional(),
            quantity: z.number().transform((v) => new Decimal$(v)),
            subTotal: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxRateRef: TaxRateRef$.inboundSchema.optional(),
            totalAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            tracking: PropertieTracking1$.inboundSchema.optional(),
            trackingCategoryRefs: z
                .nullable(z.array(TrackingCategoryRef$.inboundSchema))
                .optional(),
            unitAmount: z.number().transform((v) => new Decimal$(v)),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.discountAmount === undefined ? null : { discountAmount: v.discountAmount }),
                ...(v.discountPercentage === undefined
                    ? null
                    : { discountPercentage: v.discountPercentage }),
                ...(v.isDirectIncome === undefined ? null : { isDirectIncome: v.isDirectIncome }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
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
            };
        });

    export type Outbound = {
        accountRef?: AccountRef$.Outbound | undefined;
        description?: string | null | undefined;
        discountAmount?: number | null | undefined;
        discountPercentage?: number | null | undefined;
        isDirectIncome?: boolean | undefined;
        itemRef?: ItemRef$.Outbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Outbound | undefined;
        totalAmount?: number | null | undefined;
        tracking?: PropertieTracking1$.Outbound | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Outbound> | null | undefined;
        unitAmount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceLineItem> = z
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
            isDirectIncome: z.boolean().optional(),
            itemRef: ItemRef$.outboundSchema.optional(),
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
            tracking: PropertieTracking1$.outboundSchema.optional(),
            trackingCategoryRefs: z
                .nullable(z.array(TrackingCategoryRef$.outboundSchema))
                .optional(),
            unitAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
        })
        .transform((v) => {
            return {
                ...(v.accountRef === undefined ? null : { accountRef: v.accountRef }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.discountAmount === undefined ? null : { discountAmount: v.discountAmount }),
                ...(v.discountPercentage === undefined
                    ? null
                    : { discountPercentage: v.discountPercentage }),
                ...(v.isDirectIncome === undefined ? null : { isDirectIncome: v.isDirectIncome }),
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
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
            };
        });
}
