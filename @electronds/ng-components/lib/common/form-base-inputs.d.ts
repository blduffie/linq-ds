import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseInputs } from './base-inputs';
import { ValidatorEntry } from './validator-entry.type';
import * as i0 from "@angular/core";
/**
 * Form Inputs that most form components will extend
 *
 * @export
 * @class FormBaseInputs
 * @typedef {FormBaseInputs}
 */
export declare class FormBaseInputs extends BaseInputs implements OnInit, OnDestroy {
    /**
     * Internal maxLength property that is determined by a max length validator being set on the form control.
     *
     * @public
     * @type {?number}
     */
    maxLength?: number;
    /**
     * Internal minLength property that is determined by a minLength length validator being set on the form control
     *
     * @public
     * @type {?number}
     */
    minLength?: number;
    /**
     * Form Control for input.
     *
     * @type {FormControl}
    */
    control: FormControl<string | null>;
    /**
   * Whether or not the form control is required.
   *
   * @type {boolean}
  */
    required: boolean;
    /**
   * An event that emits when the user changes the input.
   *
   * @type {string}
  */
    inputChange: EventEmitter<string | null>;
    /**
   * Optional id attribute.
   *
   * @type {string}
  */
    id: string;
    /**
     * Optional name attribute
     *
     * @type {string}
    */
    name: string;
    /**
     * Sets an initial value on the Form Control. Useful if you don't want to pass in your own control.
     *
     * @type {string}
    */
    set initialValue(initialValue: string);
    /**
     * A label to display before user selects a value
     *
     * @type {string}
    */
    placeholder: string;
    /**
     * Optional helper text for input
     *
     * @type {string}
    */
    helperText: string;
    /**
     * Determines if the input is disabled.
     *
     * @type {boolean}
    */
    set disabled(disabled: boolean);
    /**
     * An object used to control what error messages are shown. The key is the error name and the value is the message.
     *
     * @type {Record<string, string>}
    */
    errorMessages: Record<string, string>;
    /**
     * An array of validators and their associated error messages. The key is the error that shows up as the key in the form control error object. The value is the message to display.
     *
     * @type {ValidatorEntry[]}
    */
    validators: ValidatorEntry[];
    /**
     * Description placeholder
     *
     * @public
     * @readonly
     * @type {*}
     */
    get errorMessage(): string | undefined;
    /**
     * Internal control to clear subscriptions.
     *
     * @private
     * @type {*}
     */
    private _clearSub$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Sets the validators onto the form control. Also scans for relevant validators to set properties like max length, min length, and required.
     *
     * @private
     */
    private setValidators;
    /**
     * Emits changes to the form. Unsubscribes on destroy.
     *
     * @private
     */
    private subscribeForFormChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormBaseInputs, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormBaseInputs, never, never, { "control": { "alias": "control"; "required": false; }; "required": { "alias": "required"; "required": false; }; "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "initialValue": { "alias": "initialValue"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "validators": { "alias": "validators"; "required": false; }; }, { "inputChange": "inputChange"; }, never, never, false, never>;
}
