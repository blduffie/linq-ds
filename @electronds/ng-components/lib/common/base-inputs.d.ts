import { TwClassHelpers } from './tw-class-helpers';
import * as i0 from "@angular/core";
/**
 * Basic Inputs that most components will extend
 *
 * @export
 * @class BaseInputs
 * @typedef {BaseInputs}
 */
export declare class BaseInputs {
    /**
     * Tailwind classes to customize main container
     *
     * @type {string}
     */
    extraTwClasses: string;
    /**
     * Deteremines disabled state
     *
     * need to determine this state for the buttons.
     *
     * @type {boolean}
     */
    isDisabled: boolean;
    /**
     * Helpers for Tailwind Utilities/Classes
     *
     * @public
     * @type {TwClassHelpers}
     */
    TwClassHelpers: typeof TwClassHelpers;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseInputs, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseInputs, never, never, { "extraTwClasses": { "alias": "extraTwClasses"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
