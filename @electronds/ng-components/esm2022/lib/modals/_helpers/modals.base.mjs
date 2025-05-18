/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, EventEmitter, Input, Output, TemplateRef, } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Modals Base
 *
 * @export
 * @class ModalsBase
 * @typedef {ModalsBase}
 * @extends {BaseInputs}
 */
class ModalsBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Determines if modal is open or not (can manually opened/closed if needed)
         *
         * @type {boolean}
         */
        this.isOpen = false;
        /**
         * Determines if modal can be dismissed without interaction
         *
         * @type {boolean}
         */
        this.allowClose = false;
        /**
         * Modals title in <h2>
         *
         * @type {string}
         */
        this.title = 'Modal Title..';
        /**
         * Text for primary button
         *
         * @type {string}
         */
        this.primaryBtnText = 'Yes';
        /**
         * Tailwind classes to further style the primary button
         *
         * @type {string}
         */
        this.primaryBtnTwClasses = 'btn-sm btn-full';
        /**
         * Text for secondary button
         *
         * @type {string}
         */
        this.secondaryBtnText = 'No';
        /**
         * Tailwind classes to further style the secondary button
         *
         * @type {string}
         */
        this.secondaryBtnTwClasses = 'btn-sm btn-full';
        /**
         * Where modal will open on the screen
         *
         * @type {ModalPlacement}
         */
        this.alignment = 'center';
        /**
         * Event for primary button clicked
         *
         * @type {*}
         */
        this.primaryBtnClicked = new EventEmitter();
        /**
         * Event for secondary button clicked
         *
         * @type {*}
         */
        this.secondaryBtnClicked = new EventEmitter();
        /**
         * On Modal close
         *
         * @type {*}
         */
        this.modalClosed = new EventEmitter();
    }
    /**
     * Gets classes for modal when open/closed
     *
     * @readonly
     * @type {string}
     */
    get modalOpenCloseClasses() {
        return this.isOpen
            ? 'opacity-100 transform scale-100 translate-y-0 ease-out duration-200'
            : 'opacity-0 transform scale-95 translate-y-1/3 sm:translate-y-0 ease-in duration-75';
    }
    /**
     * Gets classes for overlay background
     *
     * @readonly
     * @type {string}
     */
    get overlayBackgroundOpenCloseClasses() {
        return this.isOpen
            ? 'bg-opacity-80 ease-out duration-100'
            : 'bg-opacity-0 ease-in duration-150';
    }
    /**
     * Gets classes for overlay
     *
     * @readonly
     * @type {string}
     */
    get overlayOpenCloseClasses() {
        return this.isOpen ? 'visible' : 'invisible';
    }
    /**
     * @public
     */
    handleSecondaryBtnClicked() {
        this.secondaryBtnClicked.emit();
        this.toggleModal();
    }
    /**
     * @public
     */
    handlePrimaryBtnClicked() {
        this.primaryBtnClicked.emit();
        this.toggleModal();
    }
    /**
     * @public
     */
    handleCloseBtnClicked() {
        this.toggleModal();
    }
    /**
     * @private
     */
    toggleModal() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.modalClosed.emit();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ModalsBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: ModalsBase, inputs: { isOpen: "isOpen", allowClose: "allowClose", title: "title", content: "content", contentTemplate: "contentTemplate", primaryBtnText: "primaryBtnText", primaryBtnTwClasses: "primaryBtnTwClasses", secondaryBtnText: "secondaryBtnText", secondaryBtnTwClasses: "secondaryBtnTwClasses", alignment: "alignment" }, outputs: { primaryBtnClicked: "primaryBtnClicked", secondaryBtnClicked: "secondaryBtnClicked", modalClosed: "modalClosed" }, usesInheritance: true, ngImport: i0 }); }
}
export { ModalsBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ModalsBase, decorators: [{
            type: Directive
        }], propDecorators: { isOpen: [{
                type: Input
            }], allowClose: [{
                type: Input
            }], title: [{
                type: Input
            }], content: [{
                type: Input
            }], contentTemplate: [{
                type: Input
            }], primaryBtnText: [{
                type: Input
            }], primaryBtnTwClasses: [{
                type: Input
            }], secondaryBtnText: [{
                type: Input
            }], secondaryBtnTwClasses: [{
                type: Input
            }], alignment: [{
                type: Input
            }], primaryBtnClicked: [{
                type: Output
            }], secondaryBtnClicked: [{
                type: Output
            }], modalClosed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzLmJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvbW9kYWxzL19oZWxwZXJzL21vZGFscy5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFrQixNQUFNLGNBQWMsQ0FBQzs7QUFFMUQ7Ozs7Ozs7R0FPRztBQUNILE1BQ2EsVUFBVyxTQUFRLFVBQVU7SUFEMUM7O1FBRUU7Ozs7V0FJRztRQUNNLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFakM7Ozs7V0FJRztRQUNNLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFckM7Ozs7V0FJRztRQUNNLFVBQUssR0FBVyxlQUFlLENBQUM7UUFnQnpDOzs7O1dBSUc7UUFDTSxtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUV4Qzs7OztXQUlHO1FBQ00sd0JBQW1CLEdBQVcsaUJBQWlCLENBQUM7UUFFekQ7Ozs7V0FJRztRQUNNLHFCQUFnQixHQUFXLElBQUksQ0FBQztRQUV6Qzs7OztXQUlHO1FBQ00sMEJBQXFCLEdBQVcsaUJBQWlCLENBQUM7UUFFM0Q7Ozs7V0FJRztRQUNNLGNBQVMsR0FBbUIsUUFBUSxDQUFDO1FBRTlDOzs7O1dBSUc7UUFDTyxzQkFBaUIsR0FBUSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXREOzs7O1dBSUc7UUFDTyx3QkFBbUIsR0FBUSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhEOzs7O1dBSUc7UUFDTyxnQkFBVyxHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7S0FvRWpEO0lBbEVDOzs7OztPQUtHO0lBQ0gsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNoQixDQUFDLENBQUMscUVBQXFFO1lBQ3ZFLENBQUMsQ0FBQyxtRkFBbUYsQ0FBQztJQUMxRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFJLGlDQUFpQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ2hCLENBQUMsQ0FBQyxxQ0FBcUM7WUFDdkMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUksdUJBQXVCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUJBQXlCO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUJBQXFCO1FBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzhHQTdKVSxVQUFVO2tHQUFWLFVBQVU7O1NBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUR0QixTQUFTOzhCQU9DLE1BQU07c0JBQWQsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxPQUFPO3NCQUFmLEtBQUs7Z0JBT0csZUFBZTtzQkFBdkIsS0FBSztnQkFPRyxjQUFjO3NCQUF0QixLQUFLO2dCQU9HLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFPRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBT0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0ksaUJBQWlCO3NCQUExQixNQUFNO2dCQU9HLG1CQUFtQjtzQkFBNUIsTUFBTTtnQkFPRyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJbnB1dHMsIE1vZGFsUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyoqXG4gKiBNb2RhbHMgQmFzZVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBNb2RhbHNCYXNlXG4gKiBAdHlwZWRlZiB7TW9kYWxzQmFzZX1cbiAqIEBleHRlbmRzIHtCYXNlSW5wdXRzfVxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBNb2RhbHNCYXNlIGV4dGVuZHMgQmFzZUlucHV0cyB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIG1vZGFsIGlzIG9wZW4gb3Igbm90IChjYW4gbWFudWFsbHkgb3BlbmVkL2Nsb3NlZCBpZiBuZWVkZWQpXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgbW9kYWwgY2FuIGJlIGRpc21pc3NlZCB3aXRob3V0IGludGVyYWN0aW9uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgYWxsb3dDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBNb2RhbHMgdGl0bGUgaW4gPGgyPlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdNb2RhbCBUaXRsZS4uJztcblxuICAvKipcbiAgICogQ29udGVudC9kZXNjcmlwdGlvbiB0ZXh0IHRvIGJlIGRpc3BsYXllZCB0byB1c2VyXG4gICAqIEBvcHRpb25hbFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgY29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICogQ29udGVudCBpbiB0aGUgZm9ybSBvZiBhIHRlbXBsYXRlIGRlZmluZWQgYnkgdXNlciAob3B0aW9uYWwpXG4gICAqIEBvcHRpb25hbFxuICAgKiBAdHlwZSB7P1RlbXBsYXRlUmVmPGFueT59XG4gICAqL1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBwcmltYXJ5IGJ1dHRvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgcHJpbWFyeUJ0blRleHQ6IHN0cmluZyA9ICdZZXMnO1xuXG4gIC8qKlxuICAgKiBUYWlsd2luZCBjbGFzc2VzIHRvIGZ1cnRoZXIgc3R5bGUgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBwcmltYXJ5QnRuVHdDbGFzc2VzOiBzdHJpbmcgPSAnYnRuLXNtIGJ0bi1mdWxsJztcblxuICAvKipcbiAgICogVGV4dCBmb3Igc2Vjb25kYXJ5IGJ1dHRvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgc2Vjb25kYXJ5QnRuVGV4dDogc3RyaW5nID0gJ05vJztcblxuICAvKipcbiAgICogVGFpbHdpbmQgY2xhc3NlcyB0byBmdXJ0aGVyIHN0eWxlIHRoZSBzZWNvbmRhcnkgYnV0dG9uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBzZWNvbmRhcnlCdG5Ud0NsYXNzZXM6IHN0cmluZyA9ICdidG4tc20gYnRuLWZ1bGwnO1xuXG4gIC8qKlxuICAgKiBXaGVyZSBtb2RhbCB3aWxsIG9wZW4gb24gdGhlIHNjcmVlblxuICAgKlxuICAgKiBAdHlwZSB7TW9kYWxQbGFjZW1lbnR9XG4gICAqL1xuICBASW5wdXQoKSBhbGlnbm1lbnQ6IE1vZGFsUGxhY2VtZW50ID0gJ2NlbnRlcic7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGZvciBwcmltYXJ5IGJ1dHRvbiBjbGlja2VkXG4gICAqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgQE91dHB1dCgpIHByaW1hcnlCdG5DbGlja2VkOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGZvciBzZWNvbmRhcnkgYnV0dG9uIGNsaWNrZWRcbiAgICpcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBAT3V0cHV0KCkgc2Vjb25kYXJ5QnRuQ2xpY2tlZDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBPbiBNb2RhbCBjbG9zZVxuICAgKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIEBPdXRwdXQoKSBtb2RhbENsb3NlZDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIGNsYXNzZXMgZm9yIG1vZGFsIHdoZW4gb3Blbi9jbG9zZWRcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9kYWxPcGVuQ2xvc2VDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXG4gICAgICA/ICdvcGFjaXR5LTEwMCB0cmFuc2Zvcm0gc2NhbGUtMTAwIHRyYW5zbGF0ZS15LTAgZWFzZS1vdXQgZHVyYXRpb24tMjAwJ1xuICAgICAgOiAnb3BhY2l0eS0wIHRyYW5zZm9ybSBzY2FsZS05NSB0cmFuc2xhdGUteS0xLzMgc206dHJhbnNsYXRlLXktMCBlYXNlLWluIGR1cmF0aW9uLTc1JztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGNsYXNzZXMgZm9yIG92ZXJsYXkgYmFja2dyb3VuZFxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvdmVybGF5QmFja2dyb3VuZE9wZW5DbG9zZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5cbiAgICAgID8gJ2JnLW9wYWNpdHktODAgZWFzZS1vdXQgZHVyYXRpb24tMTAwJ1xuICAgICAgOiAnYmctb3BhY2l0eS0wIGVhc2UtaW4gZHVyYXRpb24tMTUwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGNsYXNzZXMgZm9yIG92ZXJsYXlcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb3ZlcmxheU9wZW5DbG9zZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc09wZW4gPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2Vjb25kYXJ5QnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlY29uZGFyeUJ0bkNsaWNrZWQuZW1pdCgpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlUHJpbWFyeUJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5wcmltYXJ5QnRuQ2xpY2tlZC5lbWl0KCk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVDbG9zZUJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMubW9kYWxDbG9zZWQuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19