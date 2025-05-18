import { EventEmitter } from '@angular/core';
import { BaseInputs, Size } from '../common';
import * as i0 from "@angular/core";
export declare class ButtonGroupComponent extends BaseInputs {
    isPrimaryFirst: boolean;
    primaryText: string;
    primaryExtraTwClasses: string;
    isPrimaryDisabled: boolean;
    secondaryText: string;
    secondaryExtraTwClasses: string;
    isSecondaryDisabled: boolean;
    tertiaryText: string;
    tertiaryExtraTwClasses: string;
    helperText: string;
    helperExtraTwClasses: string;
    size: Size;
    primaryClick: EventEmitter<Event>;
    secondaryClick: EventEmitter<Event>;
    tertiaryClick: EventEmitter<Event>;
    handlePrimaryClick(event: Event): void;
    handleSecondaryClick(event: Event): void;
    handleTertiaryClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonGroupComponent, "eds-button-group", never, { "isPrimaryFirst": { "alias": "isPrimaryFirst"; "required": false; }; "primaryText": { "alias": "primaryText"; "required": false; }; "primaryExtraTwClasses": { "alias": "primaryExtraTwClasses"; "required": false; }; "isPrimaryDisabled": { "alias": "isPrimaryDisabled"; "required": false; }; "secondaryText": { "alias": "secondaryText"; "required": false; }; "secondaryExtraTwClasses": { "alias": "secondaryExtraTwClasses"; "required": false; }; "isSecondaryDisabled": { "alias": "isSecondaryDisabled"; "required": false; }; "tertiaryText": { "alias": "tertiaryText"; "required": false; }; "tertiaryExtraTwClasses": { "alias": "tertiaryExtraTwClasses"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "helperExtraTwClasses": { "alias": "helperExtraTwClasses"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "primaryClick": "primaryClick"; "secondaryClick": "secondaryClick"; "tertiaryClick": "tertiaryClick"; }, never, never, false, never>;
}
