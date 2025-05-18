import { EventEmitter } from '@angular/core';
import { ToggleBase } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Settings toggle
 *
 * @export
 * @class ToggleComponent
 * @typedef {ToggleComponent}
 * @extends {ToggleBase}
 */
export declare class ToggleComponent extends ToggleBase {
    /**
     * Text to be displayed next to toggle
     *
     * @type {string}
     */
    text: string;
    /**
     * Provides value to change checked state
     *
     * @type {boolean}
     */
    isChecked: boolean;
    /**
     * Provide image/icon src (optional)
     *
     * @type {string}
     */
    iconSrc: string;
    /**
     * Emits boolean as to whether the toggle is checked or not
     *
     * @type {EventEmitter<boolean>}
     */
    isCheckedChanged: EventEmitter<boolean>;
    /**
     * When toggle is clicked
     *
     * @public
     */
    handleToggleClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleComponent, "eds-toggle", never, { "text": { "alias": "text"; "required": false; }; "isChecked": { "alias": "isChecked"; "required": false; }; "iconSrc": { "alias": "iconSrc"; "required": false; }; }, { "isCheckedChanged": "isCheckedChanged"; }, never, never, false, never>;
}
