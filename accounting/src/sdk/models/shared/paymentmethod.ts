/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Metadata, Metadata$ } from "./metadata";
import { PaymentMethodType, PaymentMethodType$ } from "./paymentmethodtype";
import * as z from "zod";

/**
 * Status of the Payment Method.
 */
export enum PaymentMethodStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
}

/**
 * > View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/accounting-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/accounting-api#/schemas/Payment).
 */
export type PaymentMethod = {
    /**
     * Unique identifier for the payment method.
     */
    id?: string | undefined;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Name of the payment method.
     */
    name?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Status of the Payment Method.
     */
    status?: PaymentMethodStatus | undefined;
    /**
     * Method of payment.
     */
    type?: PaymentMethodType | undefined;
};

/** @internal */
export const PaymentMethodStatus$ = z.nativeEnum(PaymentMethodStatus);

/** @internal */
export namespace PaymentMethod$ {
    export type Inbound = {
        id?: string | undefined;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status?: PaymentMethodStatus | undefined;
        type?: PaymentMethodType | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: PaymentMethodStatus$.optional(),
            type: PaymentMethodType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        name?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status?: PaymentMethodStatus | undefined;
        type?: PaymentMethodType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethod> = z
        .object({
            id: z.string().optional(),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            name: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: PaymentMethodStatus$.optional(),
            type: PaymentMethodType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
