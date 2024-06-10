/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ErrorValidationItem = {
    /**
     * Unique identifier for a validation item.
     */
    itemId?: string | null | undefined;
    /**
     * A message outlining validation item's issue.
     */
    message?: string | null | undefined;
    /**
     * Name of validator.
     */
    validatorName?: string | null | undefined;
};

/** @internal */
export namespace ErrorValidationItem$ {
    export const inboundSchema: z.ZodType<ErrorValidationItem, z.ZodTypeDef, unknown> = z.object({
        itemId: z.nullable(z.string()).optional(),
        message: z.nullable(z.string()).optional(),
        validatorName: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        itemId?: string | null | undefined;
        message?: string | null | undefined;
        validatorName?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorValidationItem> = z.object({
        itemId: z.nullable(z.string()).optional(),
        message: z.nullable(z.string()).optional(),
        validatorName: z.nullable(z.string()).optional(),
    });
}
