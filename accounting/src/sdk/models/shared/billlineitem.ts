/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { ItemRef } from "./itemref";
import { PropertieTracking } from "./propertietracking";
import { TaxRateRef } from "./taxrateref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

/**
 * Allowed name of the 'dataType'.
 */
export enum BillLineItemDataType {
    PurchaseOrders = "purchaseOrders",
}

/**
 * Reference to the purchase order line this line was generated from.
 */
export class RecordLineReference extends SpeakeasyBase {
    /**
     * Allowed name of the 'dataType'.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: BillLineItemDataType;

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

export class BillLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Friendly name of the goods or services received.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Numerical value of any discounts applied.
     *
     * @remarks
     *
     * Do not use to apply discounts in Oracle NetSuite—see Oracle NetSuite integration reference.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountAmount" })
    discountAmount?: number;

    /**
     * Percentage rate of any discount applied to the bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountPercentage" })
    discountPercentage?: number;

    /**
     * The bill is a direct cost if `True`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDirectCost" })
    isDirectCost?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "itemRef" })
    @Type(() => ItemRef)
    itemRef?: ItemRef;

    /**
     * The bill line's number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lineNumber" })
    lineNumber?: string;

    /**
     * Reference to the purchase order line this line was generated from.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "purchaseOrderLineRef" })
    @Type(() => RecordLineReference)
    purchaseOrderLineRef?: RecordLineReference;

    /**
     * Number of units of goods or services received.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    /**
     * Amount of the line, inclusive of discounts but exclusive of tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal?: number;

    /**
     * Amount of tax for the line.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxAmount" })
    taxAmount?: number;

    /**
     * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
     *
     * @remarks
     *
     * Found on:
     *
     * - Bill line items
     * - Bill Credit Note line items
     * - Credit Note line items
     * - Direct incomes line items
     * - Invoice line items
     * - Items
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxRateRef" })
    @Type(() => TaxRateRef)
    taxRateRef?: TaxRateRef;

    /**
     * Total amount of the line, including tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    /**
     * Categories, and a project and customer, against which the item is tracked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking" })
    @Type(() => PropertieTracking)
    tracking?: PropertieTracking;

    /**
     * Collection of categories against which this item is tracked.
     */
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "trackingCategoryRefs" })
    @Type(() => TrackingCategoryRef)
    trackingCategoryRefs?: TrackingCategoryRef[];

    /**
     * Price of each unit of goods or services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount: number;
}
