import { EventEmitter } from '@angular/core';
import { BaseInputs, Placement } from '../../common';
import * as i0 from "@angular/core";
export declare class CheckboxesBase extends BaseInputs {
    labelPlacement: Placement;
    isChecked: boolean;
    text: string;
    isCheckedChanged: EventEmitter<Event>;
    handleCheckedChanged($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxesBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CheckboxesBase, never, never, { "labelPlacement": { "alias": "labelPlacement"; "required": false; }; "isChecked": { "alias": "isChecked"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, { "isCheckedChanged": "isCheckedChanged"; }, never, never, false, never>;
}
