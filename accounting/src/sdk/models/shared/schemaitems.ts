/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Item, Item$ } from "./item";
import { Links, Links$ } from "./links";
import * as z from "zod";

export type SchemaItems = {
    links: Links;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    results?: Array<Item> | undefined;
    /**
     * Total number of items.
     */
    totalResults: number;
};

/** @internal */
export namespace SchemaItems$ {
    export type Inbound = {
        _links: Links$.Inbound;
        pageNumber: number;
        pageSize: number;
        results?: Array<Item$.Inbound> | undefined;
        totalResults: number;
    };

    export const inboundSchema: z.ZodType<SchemaItems, z.ZodTypeDef, Inbound> = z
        .object({
            _links: Links$.inboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(Item$.inboundSchema).optional(),
            totalResults: z.number().int(),
        })
        .transform((v) => {
            return {
                links: v._links,
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                ...(v.results === undefined ? null : { results: v.results }),
                totalResults: v.totalResults,
            };
        });

    export type Outbound = {
        _links: Links$.Outbound;
        pageNumber: number;
        pageSize: number;
        results?: Array<Item$.Outbound> | undefined;
        totalResults: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemaItems> = z
        .object({
            links: Links$.outboundSchema,
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            results: z.array(Item$.outboundSchema).optional(),
            totalResults: z.number().int(),
        })
        .transform((v) => {
            return {
                _links: v.links,
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                ...(v.results === undefined ? null : { results: v.results }),
                totalResults: v.totalResults,
            };
        });
}
