/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { BillLineItem, BillLineItem$ } from "./billlineitem";
import { BillStatus, BillStatus$ } from "./billstatus";
import { DataType, DataType$ } from "./datatype";
import { Metadata, Metadata$ } from "./metadata";
import { PaymentAllocationItems, PaymentAllocationItems$ } from "./paymentallocationitems";
import { PurchaseOrderRef, PurchaseOrderRef$ } from "./purchaseorderref";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { SupplierRef, SupplierRef$ } from "./supplierref";
import { Validation, Validation$ } from "./validation";
import * as z from "zod";

export type UpdateBillResponseWithholdingTax = {
    /**
     * Amount of tax withheld.
     */
    amount: Decimal$ | number;
    /**
     * Name assigned to withheld tax.
     */
    name: string;
};

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company has received an invoice, and owes money to someone else (accounts payable) we call this a Bill.
 * >
 * > See [Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) for the accounts receivable equivalent of bills.
 *
 * View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In Codat, a bill contains details of:
 * * When the bill was recorded in the accounting system.
 * * How much the bill is for and the currency of the amount.
 * * Who the bill was received from — the *supplier*.
 * * What the bill is for — the *line items*.
 *
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's *expenses*.
 *
 * You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type UpdateBillResponseAccountingBill = {
    /**
     * Amount outstanding on the bill.
     */
    amountDue?: Decimal$ | number | null | undefined;
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
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     *
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, include the required currency rate in the expense transaction.  |
     */
    currencyRate?: Decimal$ | number | null | undefined;
    dueDate?: string | undefined;
    /**
     * Identifier for the bill, unique for the company in the accounting platform.
     */
    id?: string | undefined;
    issueDate: string;
    /**
     * Array of Bill line items.
     */
    lineItems?: Array<BillLineItem> | null | undefined;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Any private, company notes about the bill, such as payment information.
     */
    note?: string | null | undefined;
    /**
     * An array of payment allocations.
     */
    paymentAllocations?: Array<PaymentAllocationItems> | null | undefined;
    purchaseOrderRefs?: Array<PurchaseOrderRef> | null | undefined;
    /**
     * User-friendly reference for the bill.
     */
    reference?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Current state of the bill.
     */
    status: BillStatus;
    /**
     * Total amount of the bill, excluding any taxes.
     */
    subTotal: Decimal$ | number;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
    /**
     * Reference to the supplier the record relates to.
     */
    supplierRef?: SupplierRef | undefined;
    /**
     * Amount of tax on the bill.
     */
    taxAmount: Decimal$ | number;
    /**
     * Amount of the bill, including tax.
     */
    totalAmount: Decimal$ | number;
    withholdingTax?: Array<UpdateBillResponseWithholdingTax> | null | undefined;
};

export type UpdateBillResponse = {
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
    data?: UpdateBillResponseAccountingBill | null | undefined;
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
export namespace UpdateBillResponseWithholdingTax$ {
    export type Inbound = {
        amount: number;
        name: string;
    };

    export const inboundSchema: z.ZodType<UpdateBillResponseWithholdingTax, z.ZodTypeDef, Inbound> =
        z
            .object({
                amount: z.number().transform((v) => new Decimal$(v)),
                name: z.string(),
            })
            .transform((v) => {
                return {
                    amount: v.amount,
                    name: v.name,
                };
            });

    export type Outbound = {
        amount: number;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateBillResponseWithholdingTax
    > = z
        .object({
            amount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            name: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                name: v.name,
            };
        });
}

/** @internal */
export namespace UpdateBillResponseAccountingBill$ {
    export type Inbound = {
        amountDue?: number | null | undefined;
        currency?: string | undefined;
        currencyRate?: number | null | undefined;
        dueDate?: string | undefined;
        id?: string | undefined;
        issueDate: string;
        lineItems?: Array<BillLineItem$.Inbound> | null | undefined;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        note?: string | null | undefined;
        paymentAllocations?: Array<PaymentAllocationItems$.Inbound> | null | undefined;
        purchaseOrderRefs?: Array<PurchaseOrderRef$.Inbound> | null | undefined;
        reference?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status: BillStatus;
        subTotal: number;
        supplementalData?: SupplementalData$.Inbound | undefined;
        supplierRef?: SupplierRef$.Inbound | undefined;
        taxAmount: number;
        totalAmount: number;
        withholdingTax?: Array<UpdateBillResponseWithholdingTax$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateBillResponseAccountingBill, z.ZodTypeDef, Inbound> =
        z
            .object({
                amountDue: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
                currency: z.string().optional(),
                currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
                dueDate: z.string().optional(),
                id: z.string().optional(),
                issueDate: z.string(),
                lineItems: z.nullable(z.array(BillLineItem$.inboundSchema)).optional(),
                metadata: Metadata$.inboundSchema.optional(),
                modifiedDate: z.string().optional(),
                note: z.nullable(z.string()).optional(),
                paymentAllocations: z
                    .nullable(z.array(PaymentAllocationItems$.inboundSchema))
                    .optional(),
                purchaseOrderRefs: z.nullable(z.array(PurchaseOrderRef$.inboundSchema)).optional(),
                reference: z.nullable(z.string()).optional(),
                sourceModifiedDate: z.string().optional(),
                status: BillStatus$,
                subTotal: z.number().transform((v) => new Decimal$(v)),
                supplementalData: SupplementalData$.inboundSchema.optional(),
                supplierRef: SupplierRef$.inboundSchema.optional(),
                taxAmount: z.number().transform((v) => new Decimal$(v)),
                totalAmount: z.number().transform((v) => new Decimal$(v)),
                withholdingTax: z
                    .nullable(
                        z.array(z.lazy(() => UpdateBillResponseWithholdingTax$.inboundSchema))
                    )
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.amountDue === undefined ? null : { amountDue: v.amountDue }),
                    ...(v.currency === undefined ? null : { currency: v.currency }),
                    ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                    ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                    ...(v.id === undefined ? null : { id: v.id }),
                    issueDate: v.issueDate,
                    ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                    ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                    ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                    ...(v.note === undefined ? null : { note: v.note }),
                    ...(v.paymentAllocations === undefined
                        ? null
                        : { paymentAllocations: v.paymentAllocations }),
                    ...(v.purchaseOrderRefs === undefined
                        ? null
                        : { purchaseOrderRefs: v.purchaseOrderRefs }),
                    ...(v.reference === undefined ? null : { reference: v.reference }),
                    ...(v.sourceModifiedDate === undefined
                        ? null
                        : { sourceModifiedDate: v.sourceModifiedDate }),
                    status: v.status,
                    subTotal: v.subTotal,
                    ...(v.supplementalData === undefined
                        ? null
                        : { supplementalData: v.supplementalData }),
                    ...(v.supplierRef === undefined ? null : { supplierRef: v.supplierRef }),
                    taxAmount: v.taxAmount,
                    totalAmount: v.totalAmount,
                    ...(v.withholdingTax === undefined
                        ? null
                        : { withholdingTax: v.withholdingTax }),
                };
            });

    export type Outbound = {
        amountDue?: number | null | undefined;
        currency?: string | undefined;
        currencyRate?: number | null | undefined;
        dueDate?: string | undefined;
        id?: string | undefined;
        issueDate: string;
        lineItems?: Array<BillLineItem$.Outbound> | null | undefined;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        note?: string | null | undefined;
        paymentAllocations?: Array<PaymentAllocationItems$.Outbound> | null | undefined;
        purchaseOrderRefs?: Array<PurchaseOrderRef$.Outbound> | null | undefined;
        reference?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status: BillStatus;
        subTotal: number;
        supplementalData?: SupplementalData$.Outbound | undefined;
        supplierRef?: SupplierRef$.Outbound | undefined;
        taxAmount: number;
        totalAmount: number;
        withholdingTax?: Array<UpdateBillResponseWithholdingTax$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateBillResponseAccountingBill
    > = z
        .object({
            amountDue: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            currency: z.string().optional(),
            currencyRate: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            dueDate: z.string().optional(),
            id: z.string().optional(),
            issueDate: z.string(),
            lineItems: z.nullable(z.array(BillLineItem$.outboundSchema)).optional(),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            note: z.nullable(z.string()).optional(),
            paymentAllocations: z
                .nullable(z.array(PaymentAllocationItems$.outboundSchema))
                .optional(),
            purchaseOrderRefs: z.nullable(z.array(PurchaseOrderRef$.outboundSchema)).optional(),
            reference: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: BillStatus$,
            subTotal: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            supplementalData: SupplementalData$.outboundSchema.optional(),
            supplierRef: SupplierRef$.outboundSchema.optional(),
            taxAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            totalAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            withholdingTax: z
                .nullable(z.array(z.lazy(() => UpdateBillResponseWithholdingTax$.outboundSchema)))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.amountDue === undefined ? null : { amountDue: v.amountDue }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                issueDate: v.issueDate,
                ...(v.lineItems === undefined ? null : { lineItems: v.lineItems }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.paymentAllocations === undefined
                    ? null
                    : { paymentAllocations: v.paymentAllocations }),
                ...(v.purchaseOrderRefs === undefined
                    ? null
                    : { purchaseOrderRefs: v.purchaseOrderRefs }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                status: v.status,
                subTotal: v.subTotal,
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                ...(v.supplierRef === undefined ? null : { supplierRef: v.supplierRef }),
                taxAmount: v.taxAmount,
                totalAmount: v.totalAmount,
                ...(v.withholdingTax === undefined ? null : { withholdingTax: v.withholdingTax }),
            };
        });
}

/** @internal */
export namespace UpdateBillResponse$ {
    export type Inbound = {
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: UpdateBillResponseAccountingBill$.Inbound | null | undefined;
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

    export const inboundSchema: z.ZodType<UpdateBillResponse, z.ZodTypeDef, Inbound> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z
                .nullable(z.lazy(() => UpdateBillResponseAccountingBill$.inboundSchema))
                .optional(),
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
        data?: UpdateBillResponseAccountingBill$.Outbound | null | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBillResponse> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z
                .nullable(z.lazy(() => UpdateBillResponseAccountingBill$.outboundSchema))
                .optional(),
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
