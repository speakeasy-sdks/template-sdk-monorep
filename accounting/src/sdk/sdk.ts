/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Accounts } from "./accounts";
import { AccountTransactions } from "./accounttransactions";
import { BankAccounts } from "./bankaccounts";
import { BankAccountTransactions } from "./bankaccounttransactions";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { CompanyInfo } from "./companyinfo";
import { CreditNotes } from "./creditnotes";
import { Customers } from "./customers";
import { DirectCosts } from "./directcosts";
import { DirectIncomes } from "./directincomes";
import { Invoices } from "./invoices";
import { Items } from "./items";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { PaymentMethods } from "./paymentmethods";
import { Payments } from "./payments";
import { PurchaseOrders } from "./purchaseorders";
import { Reports } from "./reports";
import { SalesOrders } from "./salesorders";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
import { TrackingCategories } from "./trackingcategories";
import { Transfers } from "./transfers";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.codat.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    authHeader?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.0";
    sdkVersion = "0.4.0";
    genVersion = "2.188.1";
    userAgent = "speakeasy-sdk/typescript 0.4.0 2.188.1 3.0.0 @speakeasy-sdks/accounting";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Accounting API: A flexible API for pulling accounting data, normalized and aggregated from 20 accounting integrations.
 *
 * @remarks
 *
 * Standardize how you connect to your customers’ accounting software. View, create, update, and delete data in the same way for all the leading accounting platforms.
 *
 * [Read more...](https://docs.codat.io/accounting-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class Accounting {
    /**
     * Account transactions
     */
    public accountTransactions: AccountTransactions;
    /**
     * Bank accounts
     */
    public bankAccounts: BankAccounts;
    /**
     * Bank transactions for bank accounts
     */
    public bankAccountTransactions: BankAccountTransactions;
    /**
     * Bills
     */
    public bills: Bills;
    /**
     * Customers
     */
    public customers: Customers;
    /**
     * Direct costs
     */
    public directCosts: DirectCosts;
    /**
     * Direct incomes
     */
    public directIncomes: DirectIncomes;
    /**
     * Invoices
     */
    public invoices: Invoices;
    /**
     * Purchase orders
     */
    public purchaseOrders: PurchaseOrders;
    /**
     * Suppliers
     */
    public suppliers: Suppliers;
    /**
     * Transfers
     */
    public transfers: Transfers;
    /**
     * Bill credit notes
     */
    public billCreditNotes: BillCreditNotes;
    /**
     * Bill payments
     */
    public billPayments: BillPayments;
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Credit notes
     */
    public creditNotes: CreditNotes;
    /**
     * Items
     */
    public items: Items;
    /**
     * Journal entries
     */
    public journalEntries: JournalEntries;
    /**
     * Journals
     */
    public journals: Journals;
    /**
     * Payments
     */
    public payments: Payments;
    /**
     * Reports
     */
    public reports: Reports;
    /**
     * Company info
     */
    public companyInfo: CompanyInfo;
    /**
     * Payment methods
     */
    public paymentMethods: PaymentMethods;
    /**
     * Sales orders
     */
    public salesOrders: SalesOrders;
    /**
     * Tax rates
     */
    public taxRates: TaxRates;
    /**
     * Tracking categories
     */
    public trackingCategories: TrackingCategories;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ authHeader: props?.authHeader }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accountTransactions = new AccountTransactions(this.sdkConfiguration);
        this.bankAccounts = new BankAccounts(this.sdkConfiguration);
        this.bankAccountTransactions = new BankAccountTransactions(this.sdkConfiguration);
        this.bills = new Bills(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.directCosts = new DirectCosts(this.sdkConfiguration);
        this.directIncomes = new DirectIncomes(this.sdkConfiguration);
        this.invoices = new Invoices(this.sdkConfiguration);
        this.purchaseOrders = new PurchaseOrders(this.sdkConfiguration);
        this.suppliers = new Suppliers(this.sdkConfiguration);
        this.transfers = new Transfers(this.sdkConfiguration);
        this.billCreditNotes = new BillCreditNotes(this.sdkConfiguration);
        this.billPayments = new BillPayments(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.creditNotes = new CreditNotes(this.sdkConfiguration);
        this.items = new Items(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.paymentMethods = new PaymentMethods(this.sdkConfiguration);
        this.salesOrders = new SalesOrders(this.sdkConfiguration);
        this.taxRates = new TaxRates(this.sdkConfiguration);
        this.trackingCategories = new TrackingCategories(this.sdkConfiguration);
    }
}
