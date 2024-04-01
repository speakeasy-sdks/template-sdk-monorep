/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Current state of the purchase order
 */
export enum PurchaseOrderStatus {
    Unknown = "Unknown",
    Draft = "Draft",
    Open = "Open",
    Closed = "Closed",
    Void = "Void",
}

/** @internal */
export const PurchaseOrderStatus$ = z.nativeEnum(PurchaseOrderStatus);
