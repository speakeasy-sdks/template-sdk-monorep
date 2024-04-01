/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountRef, AccountRef$ } from "./accountref";
import { ItemRef, ItemRef$ } from "./itemref";
import { TaxRateRef, TaxRateRef$ } from "./taxrateref";
import { TrackingCategoryRef, TrackingCategoryRef$ } from "./trackingcategoryref";
import * as z from "zod";

export type DirectIncomeLineItem = {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    accountRef?: AccountRef | undefined;
    /**
     * A user-friendly name of the goods or services.
     */
    description?: string | null | undefined;
    /**
     * Discount amount for the line before tax.
     */
    discountAmount?: Decimal$ | number | null | undefined;
    /**
     * Discount percentage for the line before tax.
     */
    discountPercentage?: Decimal$ | number | null | undefined;
    itemRef?: ItemRef | undefined;
    /**
     * The number of units of goods or services received.
     *
     * @remarks
     *
     * Note: If the platform does not provide this information, the quantity will be mapped as 1.
     */
    quantity: Decimal$ | number;
    /**
     * The amount of the line, inclusive of discounts, but exclusive of tax.
     */
    subTotal?: Decimal$ | number | null | undefined;
    /**
     * The amount of tax for the line.
     *
     * @remarks
     * Note: If the platform does not provide this information, the quantity will be mapped as 0.00.
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
     * The total amount of the line, including tax.
     */
    totalAmount?: Decimal$ | number | null | undefined;
    /**
     * An array of categories against which this direct cost is tracked.
     */
    trackingCategoryRefs?: Array<TrackingCategoryRef> | null | undefined;
    /**
     * The price of each unit of goods or services.
     *
     * @remarks
     * Note: If the platform does not provide this information, the unit amount will be mapped to the total amount.
     */
    unitAmount: Decimal$ | number;
};

/** @internal */
export namespace DirectIncomeLineItem$ {
    export type Inbound = {
        accountRef?: AccountRef$.Inbound | undefined;
        description?: string | null | undefined;
        discountAmount?: number | null | undefined;
        discountPercentage?: number | null | undefined;
        itemRef?: ItemRef$.Inbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Inbound | undefined;
        totalAmount?: number | null | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Inbound> | null | undefined;
        unitAmount: number;
    };

    export const inboundSchema: z.ZodType<DirectIncomeLineItem, z.ZodTypeDef, Inbound> = z
        .object({
            accountRef: AccountRef$.inboundSchema.optional(),
            description: z.nullable(z.string()).optional(),
            discountAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            discountPercentage: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            itemRef: ItemRef$.inboundSchema.optional(),
            quantity: z.number().transform((v) => new Decimal$(v)),
            subTotal: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            taxRateRef: TaxRateRef$.inboundSchema.optional(),
            totalAmount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
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
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                quantity: v.quantity,
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxRateRef === undefined ? null : { taxRateRef: v.taxRateRef }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
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
        itemRef?: ItemRef$.Outbound | undefined;
        quantity: number;
        subTotal?: number | null | undefined;
        taxAmount?: number | null | undefined;
        taxRateRef?: TaxRateRef$.Outbound | undefined;
        totalAmount?: number | null | undefined;
        trackingCategoryRefs?: Array<TrackingCategoryRef$.Outbound> | null | undefined;
        unitAmount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectIncomeLineItem> = z
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
                ...(v.itemRef === undefined ? null : { itemRef: v.itemRef }),
                quantity: v.quantity,
                ...(v.subTotal === undefined ? null : { subTotal: v.subTotal }),
                ...(v.taxAmount === undefined ? null : { taxAmount: v.taxAmount }),
                ...(v.taxRateRef === undefined ? null : { taxRateRef: v.taxRateRef }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
                ...(v.trackingCategoryRefs === undefined
                    ? null
                    : { trackingCategoryRefs: v.trackingCategoryRefs }),
                unitAmount: v.unitAmount,
            };
        });
}
