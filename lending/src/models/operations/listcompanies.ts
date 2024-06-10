/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type ListCompaniesRequest = {
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
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
};

export type ListCompaniesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    companies?: components.Companies | undefined;
};

/** @internal */
export namespace ListCompaniesRequest$ {
    export const inboundSchema: z.ZodType<ListCompaniesRequest, z.ZodTypeDef, unknown> = z.object({
        page: z.number().int().default(1),
        pageSize: z.number().int().default(100),
        query: z.string().optional(),
        orderBy: z.string().optional(),
    });

    export type Outbound = {
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCompaniesRequest> = z.object(
        {
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        }
    );
}

/** @internal */
export namespace ListCompaniesResponse$ {
    export const inboundSchema: z.ZodType<ListCompaniesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Companies: components.Companies$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Companies: "companies",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Companies?: components.Companies$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCompaniesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            companies: components.Companies$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                companies: "Companies",
            });
        });
}
