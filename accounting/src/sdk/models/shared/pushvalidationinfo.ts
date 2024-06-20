/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushFieldValidation, PushFieldValidation$ } from "./pushfieldvalidation.js";
import * as z from "zod";

export type PushValidationInfo = {
    information?: Array<PushFieldValidation> | null | undefined;
    warnings?: Array<PushFieldValidation> | null | undefined;
};

/** @internal */
export namespace PushValidationInfo$ {
    export const inboundSchema: z.ZodType<PushValidationInfo, z.ZodTypeDef, unknown> = z.object({
        information: z.nullable(z.array(PushFieldValidation$.inboundSchema)).optional(),
        warnings: z.nullable(z.array(PushFieldValidation$.inboundSchema)).optional(),
    });

    export type Outbound = {
        information?: Array<PushFieldValidation$.Outbound> | null | undefined;
        warnings?: Array<PushFieldValidation$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushValidationInfo> = z.object({
        information: z.nullable(z.array(PushFieldValidation$.outboundSchema)).optional(),
        warnings: z.nullable(z.array(PushFieldValidation$.outboundSchema)).optional(),
    });
}
