/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DataType,
  DataType$inboundSchema,
  DataType$outboundSchema,
} from "./datatype.js";

export type PushOperationRef = {
  /**
   * Available data types
   */
  dataType?: DataType | undefined;
  /**
   * Unique identifier for a push operation.
   */
  id?: string | undefined;
};

/** @internal */
export const PushOperationRef$inboundSchema: z.ZodType<
  PushOperationRef,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataType: DataType$inboundSchema.optional(),
  id: z.string().optional(),
});

/** @internal */
export type PushOperationRef$Outbound = {
  dataType?: string | undefined;
  id?: string | undefined;
};

/** @internal */
export const PushOperationRef$outboundSchema: z.ZodType<
  PushOperationRef$Outbound,
  z.ZodTypeDef,
  PushOperationRef
> = z.object({
  dataType: DataType$outboundSchema.optional(),
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushOperationRef$ {
  /** @deprecated use `PushOperationRef$inboundSchema` instead. */
  export const inboundSchema = PushOperationRef$inboundSchema;
  /** @deprecated use `PushOperationRef$outboundSchema` instead. */
  export const outboundSchema = PushOperationRef$outboundSchema;
  /** @deprecated use `PushOperationRef$Outbound` instead. */
  export type Outbound = PushOperationRef$Outbound;
}
