/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type CreatePurchaseOrderRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    purchaseOrder?: shared.PurchaseOrder | null | undefined;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
};

export type CreatePurchaseOrderResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Success
     */
    createPurchaseOrderResponse?: shared.CreatePurchaseOrderResponse | undefined;
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
export namespace CreatePurchaseOrderRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        PurchaseOrder?: shared.PurchaseOrder$.Inbound | null | undefined;
        timeoutInMinutes?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePurchaseOrderRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            PurchaseOrder: z.nullable(shared.PurchaseOrder$.inboundSchema).optional(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.PurchaseOrder === undefined ? null : { purchaseOrder: v.PurchaseOrder }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        PurchaseOrder?: shared.PurchaseOrder$.Outbound | null | undefined;
        timeoutInMinutes?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePurchaseOrderRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            purchaseOrder: z.nullable(shared.PurchaseOrder$.outboundSchema).optional(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.purchaseOrder === undefined ? null : { PurchaseOrder: v.purchaseOrder }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });
}

/** @internal */
export namespace CreatePurchaseOrderResponse$ {
    export type Inbound = {
        ContentType: string;
        CreatePurchaseOrderResponse?: shared.CreatePurchaseOrderResponse$.Inbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreatePurchaseOrderResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreatePurchaseOrderResponse:
                shared.CreatePurchaseOrderResponse$.inboundSchema.optional(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreatePurchaseOrderResponse === undefined
                    ? null
                    : { createPurchaseOrderResponse: v.CreatePurchaseOrderResponse }),
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreatePurchaseOrderResponse?: shared.CreatePurchaseOrderResponse$.Outbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePurchaseOrderResponse> = z
        .object({
            contentType: z.string(),
            createPurchaseOrderResponse:
                shared.CreatePurchaseOrderResponse$.outboundSchema.optional(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createPurchaseOrderResponse === undefined
                    ? null
                    : { CreatePurchaseOrderResponse: v.createPurchaseOrderResponse }),
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
