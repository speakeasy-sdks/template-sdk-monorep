/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Method of payment.
 */
export enum PaymentMethodType {
    Unknown = "Unknown",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    DebitCard = "DebitCard",
    BankTransfer = "BankTransfer",
    Other = "Other",
}

/** @internal */
export const PaymentMethodType$ = z.nativeEnum(PaymentMethodType);
