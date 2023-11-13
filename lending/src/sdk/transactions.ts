/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountTransactions } from "./accounttransactions";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { LendingDirectCosts } from "./lendingdirectcosts";
import { LendingTransfers } from "./lendingtransfers";
import { SDKConfiguration } from "./sdk";

export class Transactions {
    public accountTransactions: AccountTransactions;
    public directCosts: LendingDirectCosts;
    public transfers: LendingTransfers;
    public journalEntries: JournalEntries;
    public journals: Journals;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.accountTransactions = new AccountTransactions(this.sdkConfiguration);
        this.directCosts = new LendingDirectCosts(this.sdkConfiguration);
        this.transfers = new LendingTransfers(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
    }
}
