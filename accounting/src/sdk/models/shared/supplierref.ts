/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Reference to the supplier the record relates to.
 */
export type SupplierRef = {
    /**
     * The supplier's unique ID
     */
    id: string;
    /**
     * The supplier's name
     */
    supplierName?: string | null | undefined;
};

/** @internal */
export namespace SupplierRef$ {
    export type Inbound = {
        id: string;
        supplierName?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<SupplierRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            supplierName: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.supplierName === undefined ? null : { supplierName: v.supplierName }),
            };
        });

    export type Outbound = {
        id: string;
        supplierName?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplierRef> = z
        .object({
            id: z.string(),
            supplierName: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.supplierName === undefined ? null : { supplierName: v.supplierName }),
            };
        });
}
