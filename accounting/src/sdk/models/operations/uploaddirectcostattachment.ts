/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type UploadDirectCostAttachmentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a direct cost.
     */
    directCostId: string;
    attachmentUpload?: shared.AttachmentUpload | undefined;
};

export type UploadDirectCostAttachmentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The request made is not valid.
     */
    errorMessage?: shared.ErrorMessage | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace UploadDirectCostAttachmentRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        directCostId: string;
        AttachmentUpload?: shared.AttachmentUpload$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        UploadDirectCostAttachmentRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            directCostId: z.string(),
            AttachmentUpload: shared.AttachmentUpload$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                directCostId: v.directCostId,
                ...(v.AttachmentUpload === undefined
                    ? null
                    : { attachmentUpload: v.AttachmentUpload }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        directCostId: string;
        AttachmentUpload?: shared.AttachmentUpload$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDirectCostAttachmentRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            directCostId: z.string(),
            attachmentUpload: shared.AttachmentUpload$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                directCostId: v.directCostId,
                ...(v.attachmentUpload === undefined
                    ? null
                    : { AttachmentUpload: v.attachmentUpload }),
            };
        });
}

/** @internal */
export namespace UploadDirectCostAttachmentResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UploadDirectCostAttachmentResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDirectCostAttachmentResponse
    > = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
