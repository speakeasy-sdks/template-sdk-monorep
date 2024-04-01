/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Contact, Contact$ } from "./contact";
import { CustomerStatus, CustomerStatus$ } from "./customerstatus";
import { DataType, DataType$ } from "./datatype";
import { Items, Items$ } from "./items";
import { Metadata, Metadata$ } from "./metadata";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { Validation, Validation$ } from "./validation";
import * as z from "zod";

/**
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type UpdateCustomerResponseAccountingCustomer = {
    /**
     * An array of Addresses.
     */
    addresses?: Array<Items> | null | undefined;
    /**
     * Name of the main contact for the identified customer.
     */
    contactName?: string | null | undefined;
    /**
     * An array of Contacts.
     */
    contacts?: Array<Contact> | null | undefined;
    /**
     * Name of the customer as recorded in the accounting system, typically the company name.
     */
    customerName?: string | null | undefined;
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
    defaultCurrency?: string | undefined;
    /**
     * Email address the customer can be contacted by.
     */
    emailAddress?: string | null | undefined;
    /**
     * Identifier for the customer, unique to the company in the accounting platform.
     */
    id?: string | undefined;
    metadata?: Metadata | undefined;
    modifiedDate?: string | undefined;
    /**
     * Phone number the customer can be contacted by.
     */
    phone?: string | null | undefined;
    /**
     * Company number. In the UK, this is typically the Companies House company registration number.
     */
    registrationNumber?: string | null | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Status of customer.
     */
    status: CustomerStatus;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
    /**
     * Company tax number.
     */
    taxNumber?: string | null | undefined;
};

export type UpdateCustomerResponse = {
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
    data?: UpdateCustomerResponseAccountingCustomer | null | undefined;
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
export namespace UpdateCustomerResponseAccountingCustomer$ {
    export type Inbound = {
        addresses?: Array<Items$.Inbound> | null | undefined;
        contactName?: string | null | undefined;
        contacts?: Array<Contact$.Inbound> | null | undefined;
        customerName?: string | null | undefined;
        defaultCurrency?: string | undefined;
        emailAddress?: string | null | undefined;
        id?: string | undefined;
        metadata?: Metadata$.Inbound | undefined;
        modifiedDate?: string | undefined;
        phone?: string | null | undefined;
        registrationNumber?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status: CustomerStatus;
        supplementalData?: SupplementalData$.Inbound | undefined;
        taxNumber?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        UpdateCustomerResponseAccountingCustomer,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            addresses: z.nullable(z.array(Items$.inboundSchema)).optional(),
            contactName: z.nullable(z.string()).optional(),
            contacts: z.nullable(z.array(Contact$.inboundSchema)).optional(),
            customerName: z.nullable(z.string()).optional(),
            defaultCurrency: z.string().optional(),
            emailAddress: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            metadata: Metadata$.inboundSchema.optional(),
            modifiedDate: z.string().optional(),
            phone: z.nullable(z.string()).optional(),
            registrationNumber: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: CustomerStatus$,
            supplementalData: SupplementalData$.inboundSchema.optional(),
            taxNumber: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.contactName === undefined ? null : { contactName: v.contactName }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.defaultCurrency === undefined
                    ? null
                    : { defaultCurrency: v.defaultCurrency }),
                ...(v.emailAddress === undefined ? null : { emailAddress: v.emailAddress }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                status: v.status,
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                ...(v.taxNumber === undefined ? null : { taxNumber: v.taxNumber }),
            };
        });

    export type Outbound = {
        addresses?: Array<Items$.Outbound> | null | undefined;
        contactName?: string | null | undefined;
        contacts?: Array<Contact$.Outbound> | null | undefined;
        customerName?: string | null | undefined;
        defaultCurrency?: string | undefined;
        emailAddress?: string | null | undefined;
        id?: string | undefined;
        metadata?: Metadata$.Outbound | undefined;
        modifiedDate?: string | undefined;
        phone?: string | null | undefined;
        registrationNumber?: string | null | undefined;
        sourceModifiedDate?: string | undefined;
        status: CustomerStatus;
        supplementalData?: SupplementalData$.Outbound | undefined;
        taxNumber?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCustomerResponseAccountingCustomer
    > = z
        .object({
            addresses: z.nullable(z.array(Items$.outboundSchema)).optional(),
            contactName: z.nullable(z.string()).optional(),
            contacts: z.nullable(z.array(Contact$.outboundSchema)).optional(),
            customerName: z.nullable(z.string()).optional(),
            defaultCurrency: z.string().optional(),
            emailAddress: z.nullable(z.string()).optional(),
            id: z.string().optional(),
            metadata: Metadata$.outboundSchema.optional(),
            modifiedDate: z.string().optional(),
            phone: z.nullable(z.string()).optional(),
            registrationNumber: z.nullable(z.string()).optional(),
            sourceModifiedDate: z.string().optional(),
            status: CustomerStatus$,
            supplementalData: SupplementalData$.outboundSchema.optional(),
            taxNumber: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.contactName === undefined ? null : { contactName: v.contactName }),
                ...(v.contacts === undefined ? null : { contacts: v.contacts }),
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.defaultCurrency === undefined
                    ? null
                    : { defaultCurrency: v.defaultCurrency }),
                ...(v.emailAddress === undefined ? null : { emailAddress: v.emailAddress }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                status: v.status,
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                ...(v.taxNumber === undefined ? null : { taxNumber: v.taxNumber }),
            };
        });
}

/** @internal */
export namespace UpdateCustomerResponse$ {
    export type Inbound = {
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        companyId: string;
        completedOnUtc?: string | undefined;
        data?: UpdateCustomerResponseAccountingCustomer$.Inbound | null | undefined;
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

    export const inboundSchema: z.ZodType<UpdateCustomerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z
                .nullable(z.lazy(() => UpdateCustomerResponseAccountingCustomer$.inboundSchema))
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
        data?: UpdateCustomerResponseAccountingCustomer$.Outbound | null | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCustomerResponse> = z
        .object({
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            companyId: z.string(),
            completedOnUtc: z.string().optional(),
            data: z
                .nullable(z.lazy(() => UpdateCustomerResponseAccountingCustomer$.outboundSchema))
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
