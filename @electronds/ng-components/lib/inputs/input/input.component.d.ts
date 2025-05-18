import { OnChanges, OnDestroy } from '@angular/core';
import { InputBaseInputs } from '../_helpers/input-base-inputs';
import * as i0 from "@angular/core";
/**
 * Input Component
 *
 * @export
 * @class InputComponent
 * @typedef {InputComponent}
 * @extends {InputBaseInputs}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
export declare class InputComponent extends InputBaseInputs implements OnChanges, OnDestroy {
    /**
     * Description placeholder
     *
     * @public
     * @readonly
     * @type {*}
     */
    readonly statusIconLookup: Record<import("../_helpers").InputStatus, string>;
    /**
     * Sets a mask on the input.
     *
     * @type {string}
     */
    mask?: string;
    /**
     * Inputs have leading icons enabled. Simply provide a path.
     *
     * @type {string}
     */
    leadingIconPath?: string;
    /**
     * Classes that are appended using ngClass.
     *
     * @public
     * @type {string[]}
     */
    twClassList: string[];
    /**
     * Creates an instance of InputComponent.
     *
     * @constructor
     */
    constructor();
    /**
     * Regenerates CSS classes on changing user selections.
     */
    ngOnChanges(): void;
    /**
     * Generates CSS classes based on user inputs.
     *
     * @private
     * @returns {string[]}
     */
    private generateClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "eds-input", never, { "mask": { "alias": "mask"; "required": false; }; "leadingIconPath": { "alias": "leadingIconPath"; "required": false; }; }, {}, never, ["[edsInputPrepend]", "[edsInputAppend]"], false, never>;
}
