/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateAccountRequest = {
    accountPrototype?: shared.AccountPrototype | undefined;
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    timeoutInMinutes?: number | undefined;
};

export type CreateAccountResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Success
     */
    createAccountResponse?: shared.CreateAccountResponse | undefined;
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
export namespace CreateAccountRequest$ {
    export const inboundSchema: z.ZodType<CreateAccountRequest, z.ZodTypeDef, unknown> = z.object({
        accountPrototype: shared.AccountPrototype$.inboundSchema.optional(),
        companyId: z.string(),
        connectionId: z.string(),
        timeoutInMinutes: z.number().int().optional(),
    });

    export type Outbound = {
        accountPrototype?: shared.AccountPrototype$.Outbound | undefined;
        companyId: string;
        connectionId: string;
        timeoutInMinutes?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAccountRequest> = z.object(
        {
            accountPrototype: shared.AccountPrototype$.outboundSchema.optional(),
            companyId: z.string(),
            connectionId: z.string(),
            timeoutInMinutes: z.number().int().optional(),
        }
    );
}

/** @internal */
export namespace CreateAccountResponse$ {
    export const inboundSchema: z.ZodType<CreateAccountResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            CreateAccountResponse: shared.CreateAccountResponse$.inboundSchema.optional(),
            ErrorMessage: shared.ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                CreateAccountResponse: "createAccountResponse",
                ErrorMessage: "errorMessage",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        CreateAccountResponse?: shared.CreateAccountResponse$.Outbound | undefined;
        ErrorMessage?: shared.ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAccountResponse> = z
        .object({
            contentType: z.string(),
            createAccountResponse: shared.CreateAccountResponse$.outboundSchema.optional(),
            errorMessage: shared.ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                createAccountResponse: "CreateAccountResponse",
                errorMessage: "ErrorMessage",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
