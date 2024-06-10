/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ListAccountsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
    /**
     * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    page?: number | undefined;
    /**
     * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    pageSize?: number | undefined;
    /**
     * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
     */
    query?: string | undefined;
};

export type ListAccountsResponse = {
    /**
     * Success
     */
    accounts?: shared.Accounts | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Your `query` parameter was not correctly formed
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
export namespace ListAccountsRequest$ {
    export const inboundSchema: z.ZodType<ListAccountsRequest, z.ZodTypeDef, unknown> = z.object({
        companyId: z.string(),
        orderBy: z.string().optional(),
        page: z.number().int().default(1),
        pageSize: z.number().int().default(100),
        query: z.string().optional(),
    });

    export type Outbound = {
        companyId: string;
        orderBy?: string | undefined;
        page: number;
        pageSize: number;
        query?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAccountsRequest> = z.object({
        companyId: z.string(),
        orderBy: z.string().optional(),
        page: z.number().int().default(1),
        pageSize: z.number().int().default(100),
        query: z.string().optional(),
    });
}

/** @internal */
export namespace ListAccountsResponse$ {
    export const inboundSchema: z.ZodType<ListAccountsResponse, z.ZodTypeDef, unknown> = z
        .object({
            Accounts: shared.Accounts$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                Accounts: "accounts",
                ContentType: "contentType",
                ErrorMessage: "errorMessage",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        Accounts?: shared.Accounts$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAccountsResponse> = z
        .object({
            accounts: shared.Accounts$.outboundSchema.optional(),
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                accounts: "Accounts",
                contentType: "ContentType",
                errorMessage: "ErrorMessage",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
