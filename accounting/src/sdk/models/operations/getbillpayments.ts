/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetBillPaymentsRequest = {
    /**
     * Unique identifier for a bill payment.
     */
    billPaymentId: string;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

export type GetBillPaymentsResponse = {
    /**
     * Success
     */
    billPayment?: shared.BillPayment | null | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace GetBillPaymentsRequest$ {
    export type Inbound = {
        billPaymentId: string;
        companyId: string;
    };

    export const inboundSchema: z.ZodType<GetBillPaymentsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            billPaymentId: z.string(),
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                billPaymentId: v.billPaymentId,
                companyId: v.companyId,
            };
        });

    export type Outbound = {
        billPaymentId: string;
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBillPaymentsRequest> = z
        .object({
            billPaymentId: z.string(),
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                billPaymentId: v.billPaymentId,
                companyId: v.companyId,
            };
        });
}

/** @internal */
export namespace GetBillPaymentsResponse$ {
    export type Inbound = {
        BillPayment?: shared.BillPayment$.Inbound | null | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetBillPaymentsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BillPayment: z.nullable(shared.BillPayment$.inboundSchema).optional(),
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BillPayment === undefined ? null : { billPayment: v.BillPayment }),
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BillPayment?: shared.BillPayment$.Outbound | null | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBillPaymentsResponse> = z
        .object({
            billPayment: z.nullable(shared.BillPayment$.outboundSchema).optional(),
            contentType: z.string(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.billPayment === undefined ? null : { BillPayment: v.billPayment }),
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
