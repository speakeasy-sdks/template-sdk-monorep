/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListAccountTransactionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
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

export type ListAccountTransactionsResponse = {
    /**
     * Success
     */
    accountTransactions?: shared.AccountTransactions | undefined;
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
export namespace ListAccountTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        orderBy?: string | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAccountTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            orderBy: z.string().optional(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        orderBy?: string | undefined;
        page: number;
        pageSize: number;
        query?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAccountTransactionsRequest> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
                orderBy: z.string().optional(),
                page: z.number().int().default(1),
                pageSize: z.number().int().default(100),
                query: z.string().optional(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                    ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                    page: v.page,
                    pageSize: v.pageSize,
                    ...(v.query === undefined ? null : { query: v.query }),
                };
            });
}

/** @internal */
export namespace ListAccountTransactionsResponse$ {
    export type Inbound = {
        AccountTransactions?: shared.AccountTransactions$.Inbound | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListAccountTransactionsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                AccountTransactions: shared.AccountTransactions$.inboundSchema.optional(),
                ContentType: z.string(),
                ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    ...(v.AccountTransactions === undefined
                        ? null
                        : { accountTransactions: v.AccountTransactions }),
                    contentType: v.ContentType,
                    ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        AccountTransactions?: shared.AccountTransactions$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListAccountTransactionsResponse
    > = z
        .object({
            accountTransactions: shared.AccountTransactions$.outboundSchema.optional(),
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.accountTransactions === undefined
                    ? null
                    : { AccountTransactions: v.accountTransactions }),
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
