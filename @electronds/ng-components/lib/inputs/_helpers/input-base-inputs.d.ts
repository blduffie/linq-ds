import { FormBaseInputs } from '../../common';
import { InputSize, InputState, InputStatus } from '.';
import * as i0 from "@angular/core";
/**
 * Form Inputs that most components will extend
 *
 * @export
 * @class BaseInputs
 * @typedef {FormBaseInputs}
 */
export declare class InputBaseInputs extends FormBaseInputs {
    /**
     * Form Label Size
     *
     * @type {FormControl}
     */
    size: InputSize;
    /**
     * Input has six possible states — enabled, focus, active, filled, disabled, and read-only.
     *
     * @type {InputState}
     */
    state?: InputState;
    /**
     * Input can display a status which can be used for form validation. The four status types are success, loading, warning, and error.
     *
     * @type {InputStatus}
     */
    status?: InputStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputBaseInputs, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputBaseInputs, never, never, { "size": { "alias": "size"; "required": false; }; "state": { "alias": "state"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}
