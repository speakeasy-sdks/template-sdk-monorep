/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushChangeType, PushChangeType$ } from "./pushchangetype.js";
import { PushOperationRef, PushOperationRef$ } from "./pushoperationref.js";
import * as z from "zod";

export type PushOperationChange = {
    /**
     * Unique identifier for the attachment created otherwise null.
     */
    attachmentId?: string | null | undefined;
    recordRef?: PushOperationRef | undefined;
    /**
     * Type of change being applied to record in third party platform.
     */
    type?: PushChangeType | undefined;
};

/** @internal */
export namespace PushOperationChange$ {
    export const inboundSchema: z.ZodType<PushOperationChange, z.ZodTypeDef, unknown> = z.object({
        attachmentId: z.nullable(z.string()).optional(),
        recordRef: PushOperationRef$.inboundSchema.optional(),
        type: PushChangeType$.inboundSchema.optional(),
    });

    export type Outbound = {
        attachmentId?: string | null | undefined;
        recordRef?: PushOperationRef$.Outbound | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOperationChange> = z.object({
        attachmentId: z.nullable(z.string()).optional(),
        recordRef: PushOperationRef$.outboundSchema.optional(),
        type: PushChangeType$.outboundSchema.optional(),
    });
}
