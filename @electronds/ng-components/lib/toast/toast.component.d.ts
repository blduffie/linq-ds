import { EventEmitter } from '@angular/core';
import { BaseInputs, SvgMeta, ToastTypes } from '../common';
import * as i0 from "@angular/core";
/**
 * Toast Message displayed at bottom of screen
 *
 * @export
 * @class ToastComponent
 * @typedef {ToastComponent}
 */
export declare class ToastComponent extends BaseInputs {
    /**
     * Type of toast to show
     *
     * @type {ToastTypes}
     */
    type: ToastTypes;
    /**
     * Displayed Message
     *
     * @type {string}
     */
    message: string;
    /**
     * Whether toast is docked to bottom of screen
     *
     * @type {boolean}
     */
    dockedAtBottom: boolean;
    /**
     * Duration for toast to be displayed
     *
     * @type {number}
     */
    durationInMs: number;
    /**
     * Allow user to dismiss toast
     *
     * @type {boolean}
     */
    allowDismiss: boolean;
    /**
     * Triggers the showing of the toast for x seconds.
     *
     * @type {boolean}
     */
    set showToast(show: boolean);
    /**
     * Callback when toast has closed
     *
     * @type {EventEmitter<unknown>}
     */
    toastClosed: EventEmitter<unknown>;
    /**
     * @private
     * @type {boolean}
     */
    private _show;
    /**
     * @private
     * @type {boolean}
     */
    private _hide;
    /**
     * @private
     * @type {!Subscription}
     */
    private _timerSub;
    /**
     * @readonly
     * @type {boolean}
     */
    get show(): boolean;
    /**
     * @readonly
     * @type {boolean}
     */
    get hide(): boolean;
    /**
     * @readonly
     * @type {string}
     */
    get backgroundColor(): string;
    /**
     * @readonly
     * @type {SvgMeta}
     */
    get svgData(): SvgMeta;
    /**
     * @readonly
     * @type {string}
     */
    get iconData(): string;
    /**
     * Manullay closed the toast
     *
     * @public
     */
    closeToast(): void;
    /**
     * Timer to allow toast to be shown for x amount of time
     *
     * @private
     */
    private startToastTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "eds-toast", never, { "type": { "alias": "type"; "required": false; }; "message": { "alias": "message"; "required": false; }; "dockedAtBottom": { "alias": "dockedAtBottom"; "required": false; }; "durationInMs": { "alias": "durationInMs"; "required": false; }; "allowDismiss": { "alias": "allowDismiss"; "required": false; }; "showToast": { "alias": "showToast"; "required": false; }; }, { "toastClosed": "toastClosed"; }, never, never, false, never>;
}
