/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Type of the item.
 */
export enum ItemType {
    Unknown = "Unknown",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Service = "Service",
}

/** @internal */
export const ItemType$ = z.nativeEnum(ItemType);
