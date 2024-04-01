/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type CreateBillRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    bill?: shared.Bill | null | undefined;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
};

export type CreateBillResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Success
     */
    createBillResponse?: shared.CreateBillResponse | undefined;
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
export namespace CreateBillRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        Bill?: shared.Bill$.Inbound | null | undefined;
        timeoutInMinutes?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreateBillRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            Bill: z.nullable(shared.Bill$.inboundSchema).optional(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.Bill === undefined ? null : { bill: v.Bill }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        Bill?: shared.Bill$.Outbound | null | undefined;
        timeoutInMinutes?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBillRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            bill: z.nullable(shared.Bill$.outboundSchema).optional(),
            timeoutInMinutes: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.bill === undefined ? null : { Bill: v.bill }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
            };
        });
}

/** @internal */
export namespace CreateBillResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateBillResponse?: shared.CreateBillResponse$.Inbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateBillResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateBillResponse: shared.CreateBillResponse$.inboundSchema.optional(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateBillResponse === undefined
                    ? null
                    : { createBillResponse: v.CreateBillResponse }),
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateBillResponse?: shared.CreateBillResponse$.Outbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBillResponse> = z
        .object({
            contentType: z.string(),
            createBillResponse: shared.CreateBillResponse$.outboundSchema.optional(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createBillResponse === undefined
                    ? null
                    : { CreateBillResponse: v.createBillResponse }),
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
