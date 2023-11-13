/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Disputes } from "./disputes";
import { LendingCustomers } from "./lendingcustomers";
import { LendingReports } from "./lendingreports";
import { LendingSalesPayments } from "./lendingsalespayments";
import { LendingTransactions } from "./lendingtransactions";
import { Locations } from "./locations";
import { Metrics } from "./metrics";
import { Orders } from "./orders";
import { PaymentMethods } from "./paymentmethods";
import { ProductCategories } from "./productcategories";
import { Products } from "./products";
import { SDKConfiguration } from "./sdk";

export class Sales {
    public customers: LendingCustomers;
    public disputes: Disputes;
    public locations: Locations;
    public orders: Orders;
    public paymentMethods: PaymentMethods;
    public payments: LendingSalesPayments;
    public productCategories: ProductCategories;
    public products: Products;
    public transactions: LendingTransactions;
    public metrics: Metrics;
    public reports: LendingReports;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.customers = new LendingCustomers(this.sdkConfiguration);
        this.disputes = new Disputes(this.sdkConfiguration);
        this.locations = new Locations(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.paymentMethods = new PaymentMethods(this.sdkConfiguration);
        this.payments = new LendingSalesPayments(this.sdkConfiguration);
        this.productCategories = new ProductCategories(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.transactions = new LendingTransactions(this.sdkConfiguration);
        this.metrics = new Metrics(this.sdkConfiguration);
        this.reports = new LendingReports(this.sdkConfiguration);
    }
}
