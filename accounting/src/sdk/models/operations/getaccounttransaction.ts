/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetAccountTransactionRequest = {
  /**
   * Unique identifier for an account transaction.
   */
  accountTransactionId: string;
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

export type GetAccountTransactionResponse = {
  /**
   * Success
   */
  accountTransaction?: shared.AccountTransaction | null | undefined;
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
export const GetAccountTransactionRequest$inboundSchema: z.ZodType<
  GetAccountTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountTransactionId: z.string(),
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type GetAccountTransactionRequest$Outbound = {
  accountTransactionId: string;
  companyId: string;
  connectionId: string;
};

/** @internal */
export const GetAccountTransactionRequest$outboundSchema: z.ZodType<
  GetAccountTransactionRequest$Outbound,
  z.ZodTypeDef,
  GetAccountTransactionRequest
> = z.object({
  accountTransactionId: z.string(),
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountTransactionRequest$ {
  /** @deprecated use `GetAccountTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccountTransactionRequest$inboundSchema;
  /** @deprecated use `GetAccountTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccountTransactionRequest$outboundSchema;
  /** @deprecated use `GetAccountTransactionRequest$Outbound` instead. */
  export type Outbound = GetAccountTransactionRequest$Outbound;
}

/** @internal */
export const GetAccountTransactionResponse$inboundSchema: z.ZodType<
  GetAccountTransactionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AccountTransaction: z.nullable(shared.AccountTransaction$inboundSchema)
    .optional(),
  ContentType: z.string(),
  ErrorMessage: shared.ErrorMessage$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AccountTransaction": "accountTransaction",
    "ContentType": "contentType",
    "ErrorMessage": "errorMessage",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetAccountTransactionResponse$Outbound = {
  AccountTransaction?: shared.AccountTransaction$Outbound | null | undefined;
  ContentType: string;
  ErrorMessage?: shared.ErrorMessage$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetAccountTransactionResponse$outboundSchema: z.ZodType<
  GetAccountTransactionResponse$Outbound,
  z.ZodTypeDef,
  GetAccountTransactionResponse
> = z.object({
  accountTransaction: z.nullable(shared.AccountTransaction$outboundSchema)
    .optional(),
  contentType: z.string(),
  errorMessage: shared.ErrorMessage$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    accountTransaction: "AccountTransaction",
    contentType: "ContentType",
    errorMessage: "ErrorMessage",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountTransactionResponse$ {
  /** @deprecated use `GetAccountTransactionResponse$inboundSchema` instead. */
  export const inboundSchema = GetAccountTransactionResponse$inboundSchema;
  /** @deprecated use `GetAccountTransactionResponse$outboundSchema` instead. */
  export const outboundSchema = GetAccountTransactionResponse$outboundSchema;
  /** @deprecated use `GetAccountTransactionResponse$Outbound` instead. */
  export type Outbound = GetAccountTransactionResponse$Outbound;
}
