/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Allowed name of the 'dataType'.
 */
export enum ZeroDataType {
    PurchaseOrders = "purchaseOrders",
    Bills = "bills",
}

/**
 * Links the current record line to the underlying record line that created it.
 *
 * @remarks
 *
 * For example, if a bill is generated from a purchase order, this property allows you to connect the bill line item to the purchase order line item in our data model.
 */
export class Zero extends SpeakeasyBase {
    /**
     * Allowed name of the 'dataType'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: ZeroDataType;

    /**
     * 'id' of the underlying record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Line number of the underlying record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lineNumber" })
    lineNumber?: string;
}
