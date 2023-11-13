/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { InvoiceTo } from "./invoiceto";
import { ItemRef } from "./itemref";
import { TaxRateRef } from "./taxrateref";
import { Expose, Type } from "class-transformer";

export class SalesOrderLineItemTracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: InvoiceTo })
    @Expose({ name: "recordRefs" })
    @Type(() => InvoiceTo)
    recordRefs?: InvoiceTo[];
}

export class SalesOrderLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Description of the goods or services that have been ordered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Value of any discounts applied.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountAmount" })
    discountAmount?: number;

    /**
     * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountPercentage" })
    discountPercentage?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "itemRef" })
    @Type(() => ItemRef)
    itemRef?: ItemRef;

    /**
     * Number of units that have been ordered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

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
     * Total amount of the line, inclusive of discounts and tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tracking" })
    @Type(() => SalesOrderLineItemTracking)
    tracking?: SalesOrderLineItemTracking;

    /**
     * Price of each unit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount?: number;
}
