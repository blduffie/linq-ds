import { ValidatorEntry } from '../../common/validator-entry.type';
import { InputBaseInputs } from '../_helpers/input-base-inputs';
import * as i0 from "@angular/core";
/**
 * Email variant of input component.
 *
 * @export
 * @class EmailInputComponent
 * @typedef {EmailInputComponent}
 * @extends {InputBaseInputs}
 */
export declare class EmailInputComponent extends InputBaseInputs {
    /**
     * Validator to ensure the user enters a proper email.
     *
     * @public
     * @readonly
     * @type {ValidatorEntry[]}
     */
    readonly emailValidators: ValidatorEntry[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailInputComponent, "eds-email-input", never, {}, {}, never, never, false, never>;
}
