import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Hints and errors that appear underneath forms.
 *
 * @export
 * @class FormHintsComponent
 * @typedef {FormHintsComponent}
 */
export declare class FormHintsComponent {
    /**
     * Form Control for input
     *
     * @type {FormControl}
     */
    control?: FormControl<unknown>;
    /**
     * Optional helper text for form
     *
     * @type {string}
     */
    helperText: string;
    /**
     * Optional max length field
     *
     * @type {number}
     */
    maxLength?: number;
    /**
     * Optional current length field. Should be set to work with max length.
     *
     * @type {number}
     */
    currLength: number;
    /**
     * Optional error message to display when there is an error.
     *
     * @type {string}
     */
    errorMessage?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormHintsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormHintsComponent, "eds-form-hints", never, { "control": { "alias": "control"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "currLength": { "alias": "currLength"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, {}, never, never, false, never>;
}
