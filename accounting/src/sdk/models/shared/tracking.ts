/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TrackingRecordRef, TrackingRecordRef$ } from "./trackingrecordref";
import * as z from "zod";

/**
 * Links the current record to the underlying record or data type that created it.
 *
 * @remarks
 *
 * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
 */
export type RecordReference = {
    /**
     * Allowed name of the 'dataType'.
     */
    dataType?: string | undefined;
    /**
     * 'id' of the underlying record or data type.
     */
    id?: string | undefined;
};

export type Tracking = {
    /**
     * Links the current record to the underlying record or data type that created it.
     *
     * @remarks
     *
     * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
     */
    invoiceTo?: RecordReference | undefined;
    recordRefs: Array<TrackingRecordRef>;
};

/** @internal */
export namespace RecordReference$ {
    export type Inbound = {
        dataType?: string | undefined;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RecordReference, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: z.string().optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        dataType?: string | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordReference> = z
        .object({
            dataType: z.string().optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace Tracking$ {
    export type Inbound = {
        invoiceTo?: RecordReference$.Inbound | undefined;
        recordRefs: Array<TrackingRecordRef$.Inbound>;
    };

    export const inboundSchema: z.ZodType<Tracking, z.ZodTypeDef, Inbound> = z
        .object({
            invoiceTo: z.lazy(() => RecordReference$.inboundSchema).optional(),
            recordRefs: z.array(TrackingRecordRef$.inboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.invoiceTo === undefined ? null : { invoiceTo: v.invoiceTo }),
                recordRefs: v.recordRefs,
            };
        });

    export type Outbound = {
        invoiceTo?: RecordReference$.Outbound | undefined;
        recordRefs: Array<TrackingRecordRef$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tracking> = z
        .object({
            invoiceTo: z.lazy(() => RecordReference$.outboundSchema).optional(),
            recordRefs: z.array(TrackingRecordRef$.outboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.invoiceTo === undefined ? null : { invoiceTo: v.invoiceTo }),
                recordRefs: v.recordRefs,
            };
        });
}
