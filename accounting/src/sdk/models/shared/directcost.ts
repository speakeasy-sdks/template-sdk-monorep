/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { DirectCostLineItem, DirectCostLineItem$ } from "./directcostlineitem";
import { Metadata, Metadata$ } from "./metadata";
import { PaymentAllocationPayment, PaymentAllocationPayment$ } from "./paymentallocationpayment";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import * as z from "zod";

/**
 * Allowed name of the 'dataType'.
 */
export enum DirectCostDataType {
    Customers = "customers",
    Suppliers = "suppliers",
}

/**
 * A customer or supplier associated with the direct cost.
 */
export type DirectCostContactReference = {
    /**
     * Allowed name of the 'dataType'.
     */
    dataType?: DirectCostDataType | null | undefined;
    /**
     * Unique identifier for a customer or supplier.
     */
    id: string;
};

export type DirectCostAllocation = {
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
    allocatedOnDate?: string | undefined;
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
    /**
     * The total amount that has been allocated.
     */
    totalAmount?: Decimal$ | number | undefined;
};

export type DirectCostAccountingPaymentAllocation = {
    allocation: DirectCostAllocation;
    payment: PaymentAllocationPayment;
};

/**
 * > **Language tip:** Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting platforms.
 *
 * @remarks
 *
 * > View the coverage for direct costs in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct costs are the expenses associated with a business' operations. For example, purchases of raw materials and service fees are considered direct costs.
 *
 * Direct costs include:
 *   * Purchasing an item and paying it off at the point of the purchase
 *   * Receiving cash from a refunded item if the refund is made by the supplier
 *   * Withdrawing money from a bank account
 *   * Writing a cheque
 *
 * Direct costs is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 */
export type DirectCost = {
    /**
     * A customer or supplier associated with the direct cost.
     */
    contactRef?: DirectCostContactReference | undefined;
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
    currency: string;
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
    /**
     * Identifier of the direct cost, unique for the company.
     */
    id?: string | undefined;
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
    issueDate: string;
    /**
     * An array of line items.
     */
    lineItems: Array<DirectCostLineItem>;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * A note attached to the direct cost.
     */
    note?: string | null | undefined;
    /**
     * An array of payment allocations.
     */
    paymentAllocations: Array<DirectCostAccountingPaymentAllocation>;
    /**
     * User-friendly reference for the direct cost.
     */
    reference?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * The total amount of the direct costs, excluding any taxes.
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
     * The total amount of tax on the direct costs.
     */
    taxAmount: Decimal$ | number;
    /**
     * The amount of the direct costs, inclusive of tax.
     */
    totalAmount: Decimal$ | number;
};

/** @internal */
export const DirectCostDataType$ = z.nativeEnum(DirectCostDataType);

/** @internal */
export namespace DirectCostContactReference$ {
    export type Inbound = {
        dataType?: DirectCostDataType | null | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<DirectCostContactReference, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: z.nullable(DirectCostDataType$).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                id: v.id,
            };
        });

    export type Outbound = {
        dataType?: DirectCostDataType | null | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectCostContactReference> = z
        .object({
            dataType: z.nullable(DirectCostDataType$).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace DirectCostAllocation$ {
    export type Inbound = {
        allocatedOnDate?: string | undefined;
        currency?: string | undefined;
        currencyRate?: number | null | undefined;
        totalAmount?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DirectCostAllocation, z.ZodTypeDef, Inbound> = z
        .object({
            allocatedOnDate: z.string().optional(),
            currency: z.string().optional(),
            currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            totalAmount: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.allocatedOnDate === undefined
                    ? null
                    : { allocatedOnDate: v.allocatedOnDate }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
            };
        });

    export type Outbound = {
        allocatedOnDate?: string | undefined;
        currency?: string | undefined;
        currencyRate?: number | null | undefined;
        totalAmount?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectCostAllocation> = z
        .object({
            allocatedOnDate: z.string().optional(),
            currency: z.string().optional(),
            currencyRate: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            totalAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.allocatedOnDate === undefined
                    ? null
                    : { allocatedOnDate: v.allocatedOnDate }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                ...(v.totalAmount === undefined ? null : { totalAmount: v.totalAmount }),
            };
        });
}

/** @internal */
export namespace DirectCostAccountingPaymentAllocation$ {
    export type Inbound = {
        allocation: DirectCostAllocation$.Inbound;
        payment: PaymentAllocationPayment$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        DirectCostAccountingPaymentAllocation,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            allocation: z.lazy(() => DirectCostAllocation$.inboundSchema),
            payment: PaymentAllocationPayment$.inboundSchema,
        })
        .transform((v) => {
            return {
                allocation: v.allocation,
                payment: v.payment,
            };
        });

    export type Outbound = {
        allocation: DirectCostAllocation$.Outbound;
        payment: PaymentAllocationPayment$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DirectCostAccountingPaymentAllocation
    > = z
        .object({
            allocation: z.lazy(() => DirectCostAllocation$.outboundSchema),
            payment: PaymentAllocationPayment$.outboundSchema,
        })
        .transform((v) => {
            return {
                allocation: v.allocation,
                payment: v.payment,
            };
        });
}

/** @internal */
export namespace DirectCost$ {
    export type Inbound = {
        contactRef?: DirectCostContactReference$.Inbound | undefined;
        currency: string;
        currencyRate?: number | null | undefined;
        id?: string | undefined;
        issueDate: string;
        lineItems: Array<DirectCostLineItem$.Inbound>;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        note?: string | null | undefined;
        paymentAllocations: Array<DirectCostAccountingPaymentAllocation$.Inbound>;
        reference?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        subTotal: number;
        supplementalData?: SupplementalData$.Inbound | undefined;
        taxAmount: number;
        totalAmount: number;
    };

    export const inboundSchema: z.ZodType<DirectCost, z.ZodTypeDef, Inbound> = z
        .object({
            contactRef: z.lazy(() => DirectCostContactReference$.inboundSchema).optional(),
            currency: z.string(),
            currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            id: z.string().optional(),
            issueDate: z.string(),
            lineItems: z.array(DirectCostLineItem$.inboundSchema),
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            note: z.nullable(z.string()).optional(),
            paymentAllocations: z.array(
                z.lazy(() => DirectCostAccountingPaymentAllocation$.inboundSchema)
            ),
            reference: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            subTotal: z.number().transform((v) => new Decimal$(v)),
            supplementalData: SupplementalData$.inboundSchema.optional(),
            taxAmount: z.number().transform((v) => new Decimal$(v)),
            totalAmount: z.number().transform((v) => new Decimal$(v)),
        })
        .transform((v) => {
            return {
                ...(v.contactRef === undefined ? null : { contactRef: v.contactRef }),
                currency: v.currency,
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                ...(v.id === undefined ? null : { id: v.id }),
                issueDate: v.issueDate,
                lineItems: v.lineItems,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.note === undefined ? null : { note: v.note }),
                paymentAllocations: v.paymentAllocations,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                subTotal: v.subTotal,
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                taxAmount: v.taxAmount,
                totalAmount: v.totalAmount,
            };
        });

    export type Outbound = {
        contactRef?: DirectCostContactReference$.Outbound | undefined;
        currency: string;
        currencyRate?: number | null | undefined;
        id?: string | undefined;
        issueDate: string;
        lineItems: Array<DirectCostLineItem$.Outbound>;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        note?: string | null | undefined;
        paymentAllocations: Array<DirectCostAccountingPaymentAllocation$.Outbound>;
        reference?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        subTotal: number;
        supplementalData?: SupplementalData$.Outbound | undefined;
        taxAmount: number;
        totalAmount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectCost> = z
        .object({
            contactRef: z.lazy(() => DirectCostContactReference$.outboundSchema).optional(),
            currency: z.string(),
            currencyRate: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            id: z.string().optional(),
            issueDate: z.string(),
            lineItems: z.array(DirectCostLineItem$.outboundSchema),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            note: z.nullable(z.string()).optional(),
            paymentAllocations: z.array(
                z.lazy(() => DirectCostAccountingPaymentAllocation$.outboundSchema)
            ),
            reference: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            subTotal: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            supplementalData: SupplementalData$.outboundSchema.optional(),
            taxAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            totalAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
        })
        .transform((v) => {
            return {
                ...(v.contactRef === undefined ? null : { contactRef: v.contactRef }),
                currency: v.currency,
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                ...(v.id === undefined ? null : { id: v.id }),
                issueDate: v.issueDate,
                lineItems: v.lineItems,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.note === undefined ? null : { note: v.note }),
                paymentAllocations: v.paymentAllocations,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                subTotal: v.subTotal,
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                taxAmount: v.taxAmount,
                totalAmount: v.totalAmount,
            };
        });
}
