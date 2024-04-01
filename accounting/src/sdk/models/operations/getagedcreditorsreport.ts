/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as shared from "../shared";
import * as z from "zod";

export type GetAgedCreditorsReportRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Number of periods to include in the report.
     */
    numberOfPeriods?: number | undefined;
    /**
     * The length of period in days.
     */
    periodLengthDays?: number | undefined;
    /**
     * Date the report is generated up to.
     */
    reportDate?: RFCDate | undefined;
};

export type GetAgedCreditorsReportResponse = {
    /**
     * OK
     */
    agedCreditorReport?: shared.AgedCreditorReport | undefined;
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
export namespace GetAgedCreditorsReportRequest$ {
    export type Inbound = {
        companyId: string;
        numberOfPeriods?: number | undefined;
        periodLengthDays?: number | undefined;
        reportDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAgedCreditorsReportRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            numberOfPeriods: z.number().int().optional(),
            periodLengthDays: z.number().int().optional(),
            reportDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.numberOfPeriods === undefined
                    ? null
                    : { numberOfPeriods: v.numberOfPeriods }),
                ...(v.periodLengthDays === undefined
                    ? null
                    : { periodLengthDays: v.periodLengthDays }),
                ...(v.reportDate === undefined ? null : { reportDate: v.reportDate }),
            };
        });

    export type Outbound = {
        companyId: string;
        numberOfPeriods?: number | undefined;
        periodLengthDays?: number | undefined;
        reportDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAgedCreditorsReportRequest> =
        z
            .object({
                companyId: z.string(),
                numberOfPeriods: z.number().int().optional(),
                periodLengthDays: z.number().int().optional(),
                reportDate: z
                    .instanceof(RFCDate)
                    .transform((v) => v.toString())
                    .optional(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    ...(v.numberOfPeriods === undefined
                        ? null
                        : { numberOfPeriods: v.numberOfPeriods }),
                    ...(v.periodLengthDays === undefined
                        ? null
                        : { periodLengthDays: v.periodLengthDays }),
                    ...(v.reportDate === undefined ? null : { reportDate: v.reportDate }),
                };
            });
}

/** @internal */
export namespace GetAgedCreditorsReportResponse$ {
    export type Inbound = {
        AgedCreditorReport?: shared.AgedCreditorReport$.Inbound | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetAgedCreditorsReportResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AgedCreditorReport: shared.AgedCreditorReport$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AgedCreditorReport === undefined
                    ? null
                    : { agedCreditorReport: v.AgedCreditorReport }),
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AgedCreditorReport?: shared.AgedCreditorReport$.Outbound | undefined;
        ContentType: string;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAgedCreditorsReportResponse> =
        z
            .object({
                agedCreditorReport: shared.AgedCreditorReport$.outboundSchema.optional(),
                contentType: z.string(),
                errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.agedCreditorReport === undefined
                        ? null
                        : { AgedCreditorReport: v.agedCreditorReport }),
                    ContentType: v.contentType,
                    ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
