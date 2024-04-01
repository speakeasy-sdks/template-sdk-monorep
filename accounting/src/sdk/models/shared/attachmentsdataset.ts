/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attachment, Attachment$ } from "./attachment";
import * as z from "zod";

export type AttachmentsDataset = {
    attachments?: Array<Attachment> | null | undefined;
};

/** @internal */
export namespace AttachmentsDataset$ {
    export type Inbound = {
        attachments?: Array<Attachment$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AttachmentsDataset, z.ZodTypeDef, Inbound> = z
        .object({
            attachments: z.nullable(z.array(Attachment$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
            };
        });

    export type Outbound = {
        attachments?: Array<Attachment$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachmentsDataset> = z
        .object({
            attachments: z.nullable(z.array(Attachment$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
            };
        });
}
