/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetCreateTransfersModelRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
};

export type GetCreateTransfersModelResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your API request was not properly authorized.
     */
    errorMessage?: shared.ErrorMessage | undefined;
    /**
     * OK
     */
    pushOption?: shared.PushOption | undefined;
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
export namespace GetCreateTransfersModelRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
    };

    export const inboundSchema: z.ZodType<GetCreateTransfersModelRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCreateTransfersModelRequest> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                };
            });
}

/** @internal */
export namespace GetCreateTransfersModelResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        PushOption?: shared.PushOption$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCreateTransfersModelResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
                PushOption: shared.PushOption$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                    ...(v.PushOption === undefined ? null : { pushOption: v.PushOption }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        PushOption?: shared.PushOption$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCreateTransfersModelResponse
    > = z
        .object({
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            pushOption: shared.PushOption$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                ...(v.pushOption === undefined ? null : { PushOption: v.pushOption }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
