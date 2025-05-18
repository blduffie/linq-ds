import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseInputs } from '../common';
import { delay, tap, timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../buttons/icon-button/icon-button.component";
/**
 * Toast Message displayed at bottom of screen
 *
 * @export
 * @class ToastComponent
 * @typedef {ToastComponent}
 */
class ToastComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Type of toast to show
         *
         * @type {ToastTypes}
         */
        this.type = 'success';
        /**
         * Displayed Message
         *
         * @type {string}
         */
        this.message = 'Message goes here';
        /**
         * Whether toast is docked to bottom of screen
         *
         * @type {boolean}
         */
        this.dockedAtBottom = true;
        /**
         * Duration for toast to be displayed
         *
         * @type {number}
         */
        this.durationInMs = 4000;
        /**
         * Allow user to dismiss toast
         *
         * @type {boolean}
         */
        this.allowDismiss = false;
        /**
         * Callback when toast has closed
         *
         * @type {EventEmitter<unknown>}
         */
        this.toastClosed = new EventEmitter();
        /**
         * @private
         * @type {boolean}
         */
        this._show = false;
        /**
         * @private
         * @type {boolean}
         */
        this._hide = false;
    }
    /**
     * Triggers the showing of the toast for x seconds.
     *
     * @type {boolean}
     */
    set showToast(show) {
        this._hide = false;
        if (!this._show && show) {
            this.startToastTimer();
        }
        this._show = show;
    }
    /**
     * @readonly
     * @type {boolean}
     */
    get show() {
        return this._show;
    }
    /**
     * @readonly
     * @type {boolean}
     */
    get hide() {
        return this._hide;
    }
    /**
     * @readonly
     * @type {string}
     */
    get backgroundColor() {
        if (this.type === 'info') {
            return 'bg-gray-darker';
        }
        if (this.type === 'error') {
            return 'bg-red';
        }
        return 'bg-green-dark';
    }
    /**
     * @readonly
     * @type {SvgMeta}
     */
    get svgData() {
        return {
            d: 'M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z',
            viewBox: '0 0 24 24',
            iconClass: 'icon-16 text-white',
        };
    }
    /**
     * @readonly
     * @type {string}
     */
    get iconData() {
        if (this.type === 'info') {
            return 'M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32,32-14.327,32-32S49.673,0,32,0Zm-4.681,17.472c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677v.11c0,2.583-2.094,4.677-4.677,4.677s-4.677-2.094-4.677-4.677v-.11Zm9.362,29.979c0,2.01-1.629,3.639-3.639,3.639h-2.075c-2.01,0-3.639-1.629-3.639-3.639V28.965c0-2.01,1.629-3.639,3.639-3.639h2.075c2.01,0,3.639,1.629,3.639,3.639v18.487Z';
        }
        if (this.type === 'error') {
            return 'M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32,32-14.327,32-32S49.673,0,32,0Zm4.312,45.291h0c0,2.38-1.929,4.308-4.308,4.308-2.379,0-4.307-1.929-4.307-4.308v-.301c.08-2.296,2.005-4.092,4.301-4.013,.068-.003,.136-.003,.208,.003,2.296,.03,4.134,1.914,4.106,4.211v.101Zm.099-28.365l-2.13,18.602c-.07,1.151-.988,2.069-2.139,2.139-1.258,.077-2.34-.881-2.416-2.139l-2.131-18.602c-.152-1.432,.64-2.526,1.979-2.526h4.842c1.347,0,2.131,1.095,1.996,2.526Z';
        }
        return 'M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32,32-14.327,32-32S49.673,0,32,0Zm19.368,16.905c-17.247,16.347-23.464,32.49-23.528,32.659-.44,1.162-1.739,1.748-2.901,1.308-.357-.135-.674-.359-.921-.65l-11.555-13.714c-.806-.945-.692-2.365,.253-3.171,.807-.688,1.985-.719,2.827-.074l8.648,6.573c13.293-18.094,23.81-26.05,24.265-26.387,.988-.764,2.409-.583,3.173,.405,.719,.93,.606,2.256-.26,3.051Z';
    }
    /**
     * Manullay closed the toast
     *
     * @public
     */
    closeToast() {
        this._hide = false;
        this._show = false;
        this._timerSub?.unsubscribe();
        this.toastClosed.emit();
    }
    /**
     * Timer to allow toast to be shown for x amount of time
     *
     * @private
     */
    startToastTimer() {
        this._timerSub = timer(this.durationInMs)
            .pipe(tap(() => (this._hide = true)), delay(300), tap(() => {
            this._show = false;
            this._hide = false;
            this.toastClosed.emit();
        }))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToastComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ToastComponent, selector: "eds-toast", inputs: { type: "type", message: "message", dockedAtBottom: "dockedAtBottom", durationInMs: "durationInMs", allowDismiss: "allowDismiss", showToast: "showToast" }, outputs: { toastClosed: "toastClosed" }, usesInheritance: true, ngImport: i0, template: "<section\n         class=\"flex flex-col items-center px-16 md:px-24 pb-16 md:pb-24 z-modal\n                space-y-16 fixed {{dockedAtBottom ? 'bottom-0' : ''}} left-0 right-0 {{show ? 'pointer-events-auto' : 'pointer-events-none'}} {{extraTwClasses}}\">\n  <output id=toast\n          class=\"flex justify-between items-start w-full max-w-xs \n                {{backgroundColor}} {{!show ? 'opacity-0 translate-y-6' : 'opacity-100 -translate-y-6'}} {{hide ? 'opacity-0' : ''}}\n                text-white shadow rounded-md transform duration-200\"\n          role=\"status\">\n\n    <div class=\"flex flex-grow gap-8 px-16 py-12\">\n      <svg class=\"flex-shrink-0 mt-[3px] icon-18\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n           viewBox=\"0 0 64 64\"\n           fill=\"currentColor\"\n           aria-hidden=\"true\"\n           focusable=\"false\">\n        <path [attr.d]=\"iconData\" />\n      </svg>\n\n      <span class=\"relative top-[1px] ml-8\">\n        {{message}}\n      </span>\n    </div>\n\n    <div *ngIf=\"allowDismiss\"\n         class=\"flex flex-shrink-0 mt-px p-4\">\n      <eds-icon-button type=\"tertiary\"\n                       (buttonClick)=\"closeToast()\"\n                       [isReversed]=\"true\"\n                       size=\"2xs\"\n                       [svgData]=\"svgData\"></eds-icon-button>\n    </div>\n  </output>\n</section>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.IconButtonComponent, selector: "eds-icon-button", inputs: ["iconPlacement", "imageData", "svgData"] }] }); }
}
export { ToastComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-toast', template: "<section\n         class=\"flex flex-col items-center px-16 md:px-24 pb-16 md:pb-24 z-modal\n                space-y-16 fixed {{dockedAtBottom ? 'bottom-0' : ''}} left-0 right-0 {{show ? 'pointer-events-auto' : 'pointer-events-none'}} {{extraTwClasses}}\">\n  <output id=toast\n          class=\"flex justify-between items-start w-full max-w-xs \n                {{backgroundColor}} {{!show ? 'opacity-0 translate-y-6' : 'opacity-100 -translate-y-6'}} {{hide ? 'opacity-0' : ''}}\n                text-white shadow rounded-md transform duration-200\"\n          role=\"status\">\n\n    <div class=\"flex flex-grow gap-8 px-16 py-12\">\n      <svg class=\"flex-shrink-0 mt-[3px] icon-18\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n           viewBox=\"0 0 64 64\"\n           fill=\"currentColor\"\n           aria-hidden=\"true\"\n           focusable=\"false\">\n        <path [attr.d]=\"iconData\" />\n      </svg>\n\n      <span class=\"relative top-[1px] ml-8\">\n        {{message}}\n      </span>\n    </div>\n\n    <div *ngIf=\"allowDismiss\"\n         class=\"flex flex-shrink-0 mt-px p-4\">\n      <eds-icon-button type=\"tertiary\"\n                       (buttonClick)=\"closeToast()\"\n                       [isReversed]=\"true\"\n                       size=\"2xs\"\n                       [svgData]=\"svgData\"></eds-icon-button>\n    </div>\n  </output>\n</section>" }]
        }], propDecorators: { type: [{
                type: Input
            }], message: [{
                type: Input
            }], dockedAtBottom: [{
                type: Input
            }], durationInMs: [{
                type: Input
            }], allowDismiss: [{
                type: Input
            }], showToast: [{
                type: Input
            }], toastClosed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQXVCLE1BQU0sV0FBVyxDQUFDO0FBQzVELE9BQU8sRUFBZ0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFdkQ7Ozs7OztHQU1HO0FBQ0gsTUFJYSxjQUFlLFNBQVEsVUFBVTtJQUo5Qzs7UUFLRTs7OztXQUlHO1FBQ00sU0FBSSxHQUFlLFNBQVMsQ0FBQztRQUN0Qzs7OztXQUlHO1FBQ00sWUFBTyxHQUFXLG1CQUFtQixDQUFDO1FBQy9DOzs7O1dBSUc7UUFDTSxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ00saUJBQVksR0FBVyxJQUFJLENBQUM7UUFDckM7Ozs7V0FJRztRQUNNLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZDOzs7O1dBSUc7UUFDTyxnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNFOzs7V0FHRztRQUNLLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDdEI7OztXQUdHO1FBQ0ssVUFBSyxHQUFHLEtBQUssQ0FBQztLQWlHdkI7SUE5SEM7Ozs7T0FJRztJQUNILElBQWEsU0FBUyxDQUFDLElBQWE7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUF3QkQ7OztPQUdHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksZUFBZTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3hCLE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksT0FBTztRQUNULE9BQU87WUFDTCxDQUFDLEVBQUUsb01BQW9NO1lBQ3ZNLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3hCLE9BQU8sNFhBQTRYLENBQUM7U0FDclk7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLE9BQU8sNGJBQTRiLENBQUM7U0FDcmM7UUFFRCxPQUFPLHVZQUF1WSxDQUFDO0lBQ2paLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGVBQWU7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN0QyxJQUFJLENBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ1YsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzhHQTVKVSxjQUFjO2tHQUFkLGNBQWMscVJDZjNCLCsyQ0FpQ1U7O1NEbEJHLGNBQWM7MkZBQWQsY0FBYztrQkFKMUIsU0FBUzsrQkFDRSxXQUFXOzhCQVNaLElBQUk7c0JBQVosS0FBSztnQkFNRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsY0FBYztzQkFBdEIsS0FBSztnQkFNRyxZQUFZO3NCQUFwQixLQUFLO2dCQU1HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBTU8sU0FBUztzQkFBckIsS0FBSztnQkFhSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJbnB1dHMsIFN2Z01ldGEsIFRvYXN0VHlwZXMgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBkZWxheSwgdGFwLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRvYXN0IE1lc3NhZ2UgZGlzcGxheWVkIGF0IGJvdHRvbSBvZiBzY3JlZW5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVG9hc3RDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtUb2FzdENvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRzLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdG9hc3QgdG8gc2hvd1xuICAgKlxuICAgKiBAdHlwZSB7VG9hc3RUeXBlc31cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IFRvYXN0VHlwZXMgPSAnc3VjY2Vzcyc7XG4gIC8qKlxuICAgKiBEaXNwbGF5ZWQgTWVzc2FnZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJ01lc3NhZ2UgZ29lcyBoZXJlJztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG9hc3QgaXMgZG9ja2VkIHRvIGJvdHRvbSBvZiBzY3JlZW5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKSBkb2NrZWRBdEJvdHRvbTogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBEdXJhdGlvbiBmb3IgdG9hc3QgdG8gYmUgZGlzcGxheWVkXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBASW5wdXQoKSBkdXJhdGlvbkluTXM6IG51bWJlciA9IDQwMDA7XG4gIC8qKlxuICAgKiBBbGxvdyB1c2VyIHRvIGRpc21pc3MgdG9hc3RcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKSBhbGxvd0Rpc21pc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBzaG93aW5nIG9mIHRoZSB0b2FzdCBmb3IgeCBzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIHNldCBzaG93VG9hc3Qoc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGUgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5fc2hvdyAmJiBzaG93KSB7XG4gICAgICB0aGlzLnN0YXJ0VG9hc3RUaW1lcigpO1xuICAgIH1cbiAgICB0aGlzLl9zaG93ID0gc2hvdztcbiAgfVxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiB0b2FzdCBoYXMgY2xvc2VkXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8dW5rbm93bj59XG4gICAqL1xuICBAT3V0cHV0KCkgdG9hc3RDbG9zZWQ6IEV2ZW50RW1pdHRlcjx1bmtub3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8dW5rbm93bj4oKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBwcml2YXRlIF9zaG93ID0gZmFsc2U7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHByaXZhdGUgX2hpZGUgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshU3Vic2NyaXB0aW9ufVxuICAgKi9cbiAgcHJpdmF0ZSBfdGltZXJTdWIhOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBzaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoaWRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZvJykge1xuICAgICAgcmV0dXJuICdiZy1ncmF5LWRhcmtlcic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgcmV0dXJuICdiZy1yZWQnO1xuICAgIH1cblxuICAgIHJldHVybiAnYmctZ3JlZW4tZGFyayc7XG4gIH1cblxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtTdmdNZXRhfVxuICAgKi9cbiAgZ2V0IHN2Z0RhdGEoKTogU3ZnTWV0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGQ6ICdNMi43ODIuNDc3LDEyLDkuNywyMS4yMTguNDc3YTEuNjMsMS42MywwLDAsMSwyLjMsMi4zMDVMMTQuMzA1LDEybDkuMjE4LDkuMjE4YTEuNjMsMS42MywwLDAsMS0yLjMsMi4zTDEyLDE0LjMwNSwyLjc4MiwyMy41MjNhMS42MywxLjYzLDAsMCwxLTIuMzA1LTIuM0w5LjcsMTIsLjQ3NywyLjc4MkExLjYzLDEuNjMsMCwwLDEsMi43ODIuNDc3WicsXG4gICAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgICAgIGljb25DbGFzczogJ2ljb24tMTYgdGV4dC13aGl0ZScsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpY29uRGF0YSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdpbmZvJykge1xuICAgICAgcmV0dXJuICdNMzIsMEMxNC4zMjcsMCwwLDE0LjMyNywwLDMyczE0LjMyNywzMiwzMiwzMiwzMi0xNC4zMjcsMzItMzJTNDkuNjczLDAsMzIsMFptLTQuNjgxLDE3LjQ3MmMwLTIuNTgzLDIuMDk0LTQuNjc3LDQuNjc3LTQuNjc3czQuNjc3LDIuMDk0LDQuNjc3LDQuNjc3di4xMWMwLDIuNTgzLTIuMDk0LDQuNjc3LTQuNjc3LDQuNjc3cy00LjY3Ny0yLjA5NC00LjY3Ny00LjY3N3YtLjExWm05LjM2MiwyOS45NzljMCwyLjAxLTEuNjI5LDMuNjM5LTMuNjM5LDMuNjM5aC0yLjA3NWMtMi4wMSwwLTMuNjM5LTEuNjI5LTMuNjM5LTMuNjM5VjI4Ljk2NWMwLTIuMDEsMS42MjktMy42MzksMy42MzktMy42MzloMi4wNzVjMi4wMSwwLDMuNjM5LDEuNjI5LDMuNjM5LDMuNjM5djE4LjQ4N1onO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAnTTMyLDBDMTQuMzI3LDAsMCwxNC4zMjcsMCwzMnMxNC4zMjcsMzIsMzIsMzIsMzItMTQuMzI3LDMyLTMyUzQ5LjY3MywwLDMyLDBabTQuMzEyLDQ1LjI5MWgwYzAsMi4zOC0xLjkyOSw0LjMwOC00LjMwOCw0LjMwOC0yLjM3OSwwLTQuMzA3LTEuOTI5LTQuMzA3LTQuMzA4di0uMzAxYy4wOC0yLjI5NiwyLjAwNS00LjA5Miw0LjMwMS00LjAxMywuMDY4LS4wMDMsLjEzNi0uMDAzLC4yMDgsLjAwMywyLjI5NiwuMDMsNC4xMzQsMS45MTQsNC4xMDYsNC4yMTF2LjEwMVptLjA5OS0yOC4zNjVsLTIuMTMsMTguNjAyYy0uMDcsMS4xNTEtLjk4OCwyLjA2OS0yLjEzOSwyLjEzOS0xLjI1OCwuMDc3LTIuMzQtLjg4MS0yLjQxNi0yLjEzOWwtMi4xMzEtMTguNjAyYy0uMTUyLTEuNDMyLC42NC0yLjUyNiwxLjk3OS0yLjUyNmg0Ljg0MmMxLjM0NywwLDIuMTMxLDEuMDk1LDEuOTk2LDIuNTI2Wic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdNMzIsMEMxNC4zMjcsMCwwLDE0LjMyNywwLDMyczE0LjMyNywzMiwzMiwzMiwzMi0xNC4zMjcsMzItMzJTNDkuNjczLDAsMzIsMFptMTkuMzY4LDE2LjkwNWMtMTcuMjQ3LDE2LjM0Ny0yMy40NjQsMzIuNDktMjMuNTI4LDMyLjY1OS0uNDQsMS4xNjItMS43MzksMS43NDgtMi45MDEsMS4zMDgtLjM1Ny0uMTM1LS42NzQtLjM1OS0uOTIxLS42NWwtMTEuNTU1LTEzLjcxNGMtLjgwNi0uOTQ1LS42OTItMi4zNjUsLjI1My0zLjE3MSwuODA3LS42ODgsMS45ODUtLjcxOSwyLjgyNy0uMDc0bDguNjQ4LDYuNTczYzEzLjI5My0xOC4wOTQsMjMuODEtMjYuMDUsMjQuMjY1LTI2LjM4NywuOTg4LS43NjQsMi40MDktLjU4MywzLjE3MywuNDA1LC43MTksLjkzLC42MDYsMi4yNTYtLjI2LDMuMDUxWic7XG4gIH1cblxuICAvKipcbiAgICogTWFudWxsYXkgY2xvc2VkIHRoZSB0b2FzdFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgY2xvc2VUb2FzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9oaWRlID0gZmFsc2U7XG4gICAgdGhpcy5fc2hvdyA9IGZhbHNlO1xuICAgIHRoaXMuX3RpbWVyU3ViPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudG9hc3RDbG9zZWQuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRpbWVyIHRvIGFsbG93IHRvYXN0IHRvIGJlIHNob3duIGZvciB4IGFtb3VudCBvZiB0aW1lXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN0YXJ0VG9hc3RUaW1lcigpIHtcbiAgICB0aGlzLl90aW1lclN1YiA9IHRpbWVyKHRoaXMuZHVyYXRpb25Jbk1zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiAodGhpcy5faGlkZSA9IHRydWUpKSxcbiAgICAgICAgZGVsYXkoMzAwKSxcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5faGlkZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9hc3RDbG9zZWQuZW1pdCgpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG5cbiIsIjxzZWN0aW9uXG4gICAgICAgICBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTE2IG1kOnB4LTI0IHBiLTE2IG1kOnBiLTI0IHotbW9kYWxcbiAgICAgICAgICAgICAgICBzcGFjZS15LTE2IGZpeGVkIHt7ZG9ja2VkQXRCb3R0b20gPyAnYm90dG9tLTAnIDogJyd9fSBsZWZ0LTAgcmlnaHQtMCB7e3Nob3cgPyAncG9pbnRlci1ldmVudHMtYXV0bycgOiAncG9pbnRlci1ldmVudHMtbm9uZSd9fSB7e2V4dHJhVHdDbGFzc2VzfX1cIj5cbiAgPG91dHB1dCBpZD10b2FzdFxuICAgICAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgdy1mdWxsIG1heC13LXhzIFxuICAgICAgICAgICAgICAgIHt7YmFja2dyb3VuZENvbG9yfX0ge3shc2hvdyA/ICdvcGFjaXR5LTAgdHJhbnNsYXRlLXktNicgOiAnb3BhY2l0eS0xMDAgLXRyYW5zbGF0ZS15LTYnfX0ge3toaWRlID8gJ29wYWNpdHktMCcgOiAnJ319XG4gICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBzaGFkb3cgcm91bmRlZC1tZCB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICByb2xlPVwic3RhdHVzXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWdyb3cgZ2FwLTggcHgtMTYgcHktMTJcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJmbGV4LXNocmluay0wIG10LVszcHhdIGljb24tMThcIlxuICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NCA2NFwiXG4gICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImljb25EYXRhXCIgLz5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInJlbGF0aXZlIHRvcC1bMXB4XSBtbC04XCI+XG4gICAgICAgIHt7bWVzc2FnZX19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiYWxsb3dEaXNtaXNzXCJcbiAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LXNocmluay0wIG10LXB4IHAtNFwiPlxuICAgICAgPGVkcy1pY29uLWJ1dHRvbiB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAoYnV0dG9uQ2xpY2spPVwiY2xvc2VUb2FzdCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2lzUmV2ZXJzZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyeHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbc3ZnRGF0YV09XCJzdmdEYXRhXCI+PC9lZHMtaWNvbi1idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvb3V0cHV0PlxuPC9zZWN0aW9uPiJdfQ==