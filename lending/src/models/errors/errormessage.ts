/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The request made is not valid.
 */
export type ErrorMessageData = {
    /**
     * The HTTP status code returned by the error.
     */
    statusCode?: number | undefined;
    /**
     * Codat's service the returned the error.
     */
    service?: string | undefined;
    /**
     * A brief description of the error.
     */
    error?: string | undefined;
    /**
     * Unique identifier used to propagate to all downstream services and determine the source of the error.
     */
    correlationId?: string | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
     */
    validation?: components.ErrorValidation | null | undefined;
    /**
     * `True` if the error occurred transiently and can be retried.
     */
    canBeRetried?: string | undefined;
    /**
     * Machine readable error code used to automate processes based on the code returned.
     */
    detailedErrorCode?: number | undefined;
};

/**
 * The request made is not valid.
 */
export class ErrorMessage extends Error {
    /**
     * The HTTP status code returned by the error.
     */
    statusCode?: number | undefined;
    /**
     * Codat's service the returned the error.
     */
    service?: string | undefined;
    /**
     * A brief description of the error.
     */
    error?: string | undefined;
    /**
     * Unique identifier used to propagate to all downstream services and determine the source of the error.
     */
    correlationId?: string | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
     */
    validation?: components.ErrorValidation | null | undefined;
    /**
     * `True` if the error occurred transiently and can be retried.
     */
    canBeRetried?: string | undefined;
    /**
     * Machine readable error code used to automate processes based on the code returned.
     */
    detailedErrorCode?: number | undefined;

    /** The original data that was passed to this error instance. */
    data$: ErrorMessageData;

    constructor(err: ErrorMessageData) {
        super("");
        this.data$ = err;

        if (err.statusCode != null) {
            this.statusCode = err.statusCode;
        }
        if (err.service != null) {
            this.service = err.service;
        }
        if (err.error != null) {
            this.error = err.error;
        }
        if (err.correlationId != null) {
            this.correlationId = err.correlationId;
        }
        if (err.validation != null) {
            this.validation = err.validation;
        }
        if (err.canBeRetried != null) {
            this.canBeRetried = err.canBeRetried;
        }
        if (err.detailedErrorCode != null) {
            this.detailedErrorCode = err.detailedErrorCode;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrorMessage";
    }
}

/** @internal */
export namespace ErrorMessage$ {
    export const inboundSchema: z.ZodType<ErrorMessage, z.ZodTypeDef, unknown> = z
        .object({
            statusCode: z.number().int().optional(),
            service: z.string().optional(),
            error: z.string().optional(),
            correlationId: z.string().optional(),
            validation: z.nullable(components.ErrorValidation$.inboundSchema).optional(),
            canBeRetried: z.string().optional(),
            detailedErrorCode: z.number().int().optional(),
        })
        .transform((v) => {
            return new ErrorMessage(v);
        });

    export type Outbound = {
        statusCode?: number | undefined;
        service?: string | undefined;
        error?: string | undefined;
        correlationId?: string | undefined;
        validation?: components.ErrorValidation$.Outbound | null | undefined;
        canBeRetried?: string | undefined;
        detailedErrorCode?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorMessage> = z
        .instanceof(ErrorMessage)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                statusCode: z.number().int().optional(),
                service: z.string().optional(),
                error: z.string().optional(),
                correlationId: z.string().optional(),
                validation: z.nullable(components.ErrorValidation$.outboundSchema).optional(),
                canBeRetried: z.string().optional(),
                detailedErrorCode: z.number().int().optional(),
            })
        );
}
