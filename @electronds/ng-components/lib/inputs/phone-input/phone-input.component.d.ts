import { ValidatorEntry } from '../../common';
import { InputBaseInputs } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Phone variant for input.
 *
 * @export
 * @class PhoneInputComponent
 * @typedef {PhoneInputComponent}
 * @extends {InputBaseInputs}
 */
export declare class PhoneInputComponent extends InputBaseInputs {
    /**
     * Phone mask for the input.
     *
     * @public
     * @readonly
     * @type {"(000) 000-0000"}
     */
    readonly phoneMask = "(000) 000-0000";
    /**
     * Validators to ensure a proper phone number is entered.
     *
     * @public
     * @readonly
     * @type {ValidatorEntry[]}
     */
    readonly phoneValidators: ValidatorEntry[];
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneInputComponent, "eds-phone-input", never, {}, {}, never, never, false, never>;
}
