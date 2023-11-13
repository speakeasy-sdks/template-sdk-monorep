/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingAddressType } from "./accountingaddresstype";
import { Expose } from "class-transformer";

export class Items extends SpeakeasyBase {
    /**
     * City of the customer address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    /**
     * Country of the customer address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    /**
     * Line 1 of the customer address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "line1" })
    line1?: string;

    /**
     * Line 2 of the customer address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "line2" })
    line2?: string;

    /**
     * Postal code or zip code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postalCode" })
    postalCode?: string;

    /**
     * Region of the customer address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    /**
     * The type of the address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AccountingAddressType;
}
