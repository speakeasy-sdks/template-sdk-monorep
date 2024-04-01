/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetCustomerRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a customer.
     */
    customerId: string;
};

export type GetCustomerResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Success
     */
    customer?: shared.Customer | null | undefined;
    /**
     * Your API request was not properly authorized.
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
export namespace GetCustomerRequest$ {
    export type Inbound = {
        companyId: string;
        customerId: string;
    };

    export const inboundSchema: z.ZodType<GetCustomerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                customerId: v.customerId,
            };
        });

    export type Outbound = {
        companyId: string;
        customerId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomerRequest> = z
        .object({
            companyId: z.string(),
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                customerId: v.customerId,
            };
        });
}

/** @internal */
export namespace GetCustomerResponse$ {
    export type Inbound = {
        ContentType: string;
        Customer?: shared.Customer$.Inbound | null | undefined;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCustomerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Customer: z.nullable(shared.Customer$.inboundSchema).optional(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Customer === undefined ? null : { customer: v.Customer }),
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Customer?: shared.Customer$.Outbound | null | undefined;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomerResponse> = z
        .object({
            contentType: z.string(),
            customer: z.nullable(shared.Customer$.outboundSchema).optional(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.customer === undefined ? null : { Customer: v.customer }),
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
