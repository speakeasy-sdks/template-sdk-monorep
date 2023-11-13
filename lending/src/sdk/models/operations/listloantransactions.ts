/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Data source type.
 */
export enum ListLoanTransactionsQueryParamSourceType {
    Banking = "banking",
    Commerce = "commerce",
    Accounting = "accounting",
}

export class ListLoanTransactionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Data source type.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceType" })
    sourceType: ListLoanTransactionsQueryParamSourceType;
}

export class ListLoanTransactionsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request made is not valid.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    loanTransactions?: shared.LoanTransactions;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
