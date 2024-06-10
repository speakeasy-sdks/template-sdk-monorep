/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import {
    AccountTransactionLineRecordRef,
    AccountTransactionLineRecordRef$,
} from "./accounttransactionlinerecordref";
import * as z from "zod";

export type AccountTransactionLine = {
    /**
     * Amount in the bill payment currency.
     */
    amount?: Decimal$ | number | undefined;
    /**
     * Description of the account transaction.
     */
    description?: string | null | undefined;
    /**
     * Links an account transaction line to the underlying record that created it.
     */
    recordRef?: AccountTransactionLineRecordRef | undefined;
};

/** @internal */
export namespace AccountTransactionLine$ {
    export const inboundSchema: z.ZodType<AccountTransactionLine, z.ZodTypeDef, unknown> = z.object(
        {
            amount: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            description: z.nullable(z.string()).optional(),
            recordRef: AccountTransactionLineRecordRef$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        amount?: number | undefined;
        description?: string | null | undefined;
        recordRef?: AccountTransactionLineRecordRef$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountTransactionLine> =
        z.object({
            amount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            description: z.nullable(z.string()).optional(),
            recordRef: AccountTransactionLineRecordRef$.outboundSchema.optional(),
        });
}
