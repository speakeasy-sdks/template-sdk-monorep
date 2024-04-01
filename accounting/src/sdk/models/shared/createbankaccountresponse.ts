/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { DataType, DataType$ } from "./datatype";
import { Metadata, Metadata$ } from "./metadata";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { Validation, Validation$ } from "./validation";
import * as z from "zod";

/**
 * The type of transactions and balances on the account.
 *
 * @remarks
 * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
 * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
 */
export enum CreateBankAccountResponseBankAccountType {
    Unknown = "Unknown",
    Credit = "Credit",
    Debit = "Debit",
}

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific data connection.
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingBankAccount = {
    /**
     * Name of the bank account in the accounting platform.
     */
    accountName?: string | null | undefined;
    /**
     * Account number for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
     *
     * FreeAgent integrations
     * For Credit accounts, only the last four digits are required. For other types, the field is optional.
     */
    accountNumber?: string | null | undefined;
    /**
     * The type of transactions and balances on the account.
     *
     * @remarks
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    accountType?: CreateBankAccountResponseBankAccountType | undefined;
    /**
     * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
     */
    availableBalance?: Decimal$ | number | null | undefined;
    /**
     * Balance of the bank account.
     */
    balance?: Decimal$ | number | null | undefined;
    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    currency?: string | undefined;
    /**
     * International bank account number of the account. Often used when making or receiving international payments.
     */
    iBan?: string | null | undefined;
    /**
     * Identifier for the account, unique for the company in the accounting platform.
     */
    id?: string | undefined;
    /**
     * The institution of the bank account.
     */
    institution?: string | null | undefined;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Code used to identify each nominal account for a business.
     */
    nominalCode?: string | null | undefined;
    /**
     * Pre-arranged overdraft limit of the account.
     *
     * @remarks
     *
     * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
     */
    overdraftLimit?: Decimal$ | number | null | undefined;
    /**
     * Sort code for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
     */
    sortCode?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
};

export type CreateBankAccountResponse = {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    changes?: Array<PushOperationChange> | null | undefined;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId: string;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    completedOnUtc?: string | undefined;
    data?: AccountingBankAccount | null | undefined;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionKey: string;
    /**
     * Available data types
     */
    dataType?: DataType | undefined;
    /**
     * A message about the error.
     */
    errorMessage?: string | null | undefined;
    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    pushOperationKey: string;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    requestedOnUtc: string;
    /**
     * The current status of the push operation.
     */
    status: PushOperationStatus;
    /**
     * Push status code.
     */
    statusCode: number;
    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    timeoutInMinutes?: number | null | undefined;
    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    timeoutInSeconds?: number | null | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    validation?: Validation | undefined;
};

/** @internal */
export const CreateBankAccountResponseBankAccountType$ = z.nativeEnum(
    CreateBankAccountResponseBankAccountType
);

/** @internal */
export namespace AccountingBankAccount$ {
    export type Inbound = {
        accountName?: string | null | undefined;
        accountNumber?: string | null | undefined;
        accountType?: CreateBankAccountResponseBankAccountType | undefined;
        availableBalance?: number | null | undefined;
        balance?: number | null | undefined;
        currency?: string | undefined;
        iBan?: string | null | undefined;
        id?: string | undefined;
        institution?: string | null | undefined;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        nominalCode?: string | null | undefined;
        overdraftLimit?: number | null | undefined;
        sortCode?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        supplementalData?: SupplementalData$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingBankAccount, z.ZodTypeDef, Inbound> = z
        .object({
            accountName: z.nullable(z.string()).optional(),
            accountNumber: z.nullable(z.string()).optional(),
            accountType: CreateBankAccountResponseBankAccountType$.optional(),
            availableBalance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            balance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            currency: z.string().optional(),
            iBan: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            institution: z.nullable(z.string()).optional(),
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            nominalCode: z.nullable(z.string()).optional(),
            overdraftLimit: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            sortCode: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            supplementalData: SupplementalData$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.availableBalance === undefined
                    ? null
                    : { availableBalance: v.availableBalance }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.iBan === undefined ? null : { iBan: v.iBan }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.institution === undefined ? null : { institution: v.institution }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
                ...(v.sortCode === undefined ? null : { sortCode: v.sortCode }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });

    export type Outbound = {
        accountName?: string | null | undefined;
        accountNumber?: string | null | undefined;
        accountType?: CreateBankAccountResponseBankAccountType | undefined;
        availableBalance?: number | null | undefined;
        balance?: number | null | undefined;
        currency?: string | undefined;
        iBan?: string | null | undefined;
        id?: string | undefined;
        institution?: string | null | undefined;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        nominalCode?: string | null | undefined;
        overdraftLimit?: number | null | undefined;
        sortCode?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingBankAccount> = z
        .object({
            accountName: z.nullable(z.string()).optional(),
            accountNumber: z.nullable(z.string()).optional(),
            accountType: CreateBankAccountResponseBankAccountType$.optional(),
            availableBalance: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            balance: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            currency: z.string().optional(),
            iBan: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            institution: z.nullable(z.string()).optional(),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            nominalCode: z.nullable(z.string()).optional(),
            overdraftLimit: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            sortCode: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            supplementalData: SupplementalData$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.availableBalance === undefined
                    ? null
                    : { availableBalance: v.availableBalance }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.iBan === undefined ? null : { iBan: v.iBan }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.institution === undefined ? null : { institution: v.institution }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
                ...(v.sortCode === undefined ? null : { sortCode: v.sortCode }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });
}

/** @internal */
export namespace CreateBankAccountResponse$ {
    export type Inbound = {
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingBankAccount$.Inbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateBankAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingBankAccount$.inboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        changes?: Array<PushOperationChange$.Outbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: AccountingBankAccount$.Outbound | null | undefined;
        dataConnectionKey: string;
        dataType?: DataType | undefined;
        errorMessage?: string | null | undefined;
        pushOperationKey: string;
        requestedOnUtc: string;
        status: PushOperationStatus;
        statusCode: number;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        validation?: Validation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBankAccountResponse> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z.nullable(z.lazy(() => AccountingBankAccount$.outboundSchema)).optional(),
            dataConnectionKey: z.string(),
            dataType: DataType$.optional(),
            errorMessage: z.nullable(z.string()).optional(),
            pushOperationKey: z.string(),
            requestedOnUtc: z.string(),
            status: PushOperationStatus$,
            statusCode: z.number().int(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            validation: Validation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.changes === undefined ? null : { changes: v.changes }),
                companyId: v.companyId,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.data === undefined ? null : { data: v.data }),
                dataConnectionKey: v.dataConnectionKey,
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                pushOperationKey: v.pushOperationKey,
                requestedOnUtc: v.requestedOnUtc,
                status: v.status,
                statusCode: v.statusCode,
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
