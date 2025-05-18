import { EventEmitter } from '@angular/core';
import { ButtonTypes } from './button-types';
import { BaseInputs, Size } from '../../common';
import * as i0 from "@angular/core";
export declare class ButtonBase extends BaseInputs {
    /**
     * Detemines what the button looks like (and type)
     *
     * @type {ButtonTypes}
     */
    type: ButtonTypes;
    /**
     * Sizing options for button
     *
     * @type {Size}
     */
    size: Size;
    /**
     * When true triggers progress spinner. ** not functioning **
     *
     * @type {boolean}
     */
    isLoading: boolean;
    /**
     * Whether showing on dark background
     *
     * @type {boolean}
     */
    isReversed: boolean;
    /**
     * Shows underline
     *
     * @type {boolean}
     */
    isUnderlined: boolean;
    /**
     * Displayed text on button
     *
     * @type {string}
     */
    text: string;
    /**
     * Button click output
     *
     * @type {EventEmitter<Event>}
     */
    buttonClick: EventEmitter<Event>;
    /**
     * Builds tailwind classes based on user inputs
     *
     * @readonly
     * @type {string}
     */
    get twClassesBasedOnInputs(): string;
    /**
     * Method to broadcast button click event
     */
    handleButtonClick($event: Event): void;
    /**
     * @private
     * @param {ButtonTypes} type
     * @param {boolean} isReversed
     * @param {boolean} isUnderlined
     * @param {string} extras
     * @returns {string}
     */
    private buildTwClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonBase, never, never, { "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "isReversed": { "alias": "isReversed"; "required": false; }; "isUnderlined": { "alias": "isUnderlined"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, { "buttonClick": "buttonClick"; }, never, never, false, never>;
}
