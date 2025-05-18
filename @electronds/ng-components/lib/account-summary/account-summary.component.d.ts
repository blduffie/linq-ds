import { EventEmitter } from '@angular/core';
import { AccountSummaryStanding } from './_helpers';
import { BaseInputs } from '../common/base-inputs';
import * as i0 from "@angular/core";
export declare class AccountSummaryComponent extends BaseInputs {
    date: string;
    amount: string;
    set accountStanding(standing: AccountSummaryStanding);
    PayNowClick: EventEmitter<Event>;
    ViewBillClick: EventEmitter<Event>;
    private _accountColor;
    getAccountColor(): string;
    handlePayNowClick(event: Event): void;
    handleViewBillClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountSummaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccountSummaryComponent, "eds-account-summary", never, { "date": { "alias": "date"; "required": false; }; "amount": { "alias": "amount"; "required": false; }; "accountStanding": { "alias": "accountStanding"; "required": false; }; }, { "PayNowClick": "PayNowClick"; "ViewBillClick": "ViewBillClick"; }, never, never, false, never>;
}
