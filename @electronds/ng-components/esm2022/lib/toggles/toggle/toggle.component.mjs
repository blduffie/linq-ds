import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
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
class ToggleComponent extends ToggleBase {
    constructor() {
        super(...arguments);
        /**
         * Text to be displayed next to toggle
         *
         * @type {string}
         */
        this.text = 'toggle text';
        /**
         * Provides value to change checked state
         *
         * @type {boolean}
         */
        this.isChecked = false;
        /**
         * Provide image/icon src (optional)
         *
         * @type {string}
         */
        this.iconSrc = '';
        /**
         * Emits boolean as to whether the toggle is checked or not
         *
         * @type {EventEmitter<boolean>}
         */
        this.isCheckedChanged = new EventEmitter();
    }
    /**
     * When toggle is clicked
     *
     * @public
     */
    handleToggleClicked() {
        this.isChecked = !this.isChecked;
        this.isCheckedChanged.emit(this.isChecked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToggleComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ToggleComponent, selector: "eds-toggle", inputs: { text: "text", isChecked: "isChecked", iconSrc: "iconSrc" }, outputs: { isCheckedChanged: "isCheckedChanged" }, usesInheritance: true, ngImport: i0, template: "<div class=\"flex items-center py-12 transition-colors duration-150 ease-in-out \n            {{isDisabled ? 'opacity-40' : 'hover:bg-teal-lighter'}} {{extraTwClasses}}\">\n  <label class=\"pr-12\"\n         id=\"toggle-label\"\n         for=\"toggle-button\">\n    {{text}}\n  </label>\n\n  <button class=\"flex items-center px-4 h-28 border border-gray-light \n                rounded-full transition ease-in-out duration-200 \n                {{isChecked ? 'bg-teal-darker' : 'bg-gray-light'}}\"\n          type=\"button\"\n          id=\"toggle-button\"\n          aria-labelledby=\"toggle-label\"\n          role=\"switch\"\n          [attr.disabled]=\"isDisabled ? true : null\"\n          [attr.checked]=\"isChecked\"\n          [attr.aria-checked]=\"isChecked\"\n          (click)=\"handleToggleClicked()\">\n\n    <span class=\"block mx-12 w-20 h-20 rounded-full bg-white shadow transform transition ease-in-out duration-200 \n                {{isChecked ? 'translate-x-12' : '-translate-x-12'}}\"\n          aria-hidden=\"true\">\n    </span>\n\n  </button>\n</div>", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { ToggleComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-toggle', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex items-center py-12 transition-colors duration-150 ease-in-out \n            {{isDisabled ? 'opacity-40' : 'hover:bg-teal-lighter'}} {{extraTwClasses}}\">\n  <label class=\"pr-12\"\n         id=\"toggle-label\"\n         for=\"toggle-button\">\n    {{text}}\n  </label>\n\n  <button class=\"flex items-center px-4 h-28 border border-gray-light \n                rounded-full transition ease-in-out duration-200 \n                {{isChecked ? 'bg-teal-darker' : 'bg-gray-light'}}\"\n          type=\"button\"\n          id=\"toggle-button\"\n          aria-labelledby=\"toggle-label\"\n          role=\"switch\"\n          [attr.disabled]=\"isDisabled ? true : null\"\n          [attr.checked]=\"isChecked\"\n          [attr.aria-checked]=\"isChecked\"\n          (click)=\"handleToggleClicked()\">\n\n    <span class=\"block mx-12 w-20 h-20 rounded-full bg-white shadow transform transition ease-in-out duration-200 \n                {{isChecked ? 'translate-x-12' : '-translate-x-12'}}\"\n          aria-hidden=\"true\">\n    </span>\n\n  </button>\n</div>" }]
        }], propDecorators: { text: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], iconSrc: [{
                type: Input
            }], isCheckedChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi90b2dnbGVzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL3RvZ2dsZXMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUV6Qzs7Ozs7OztHQU9HO0FBQ0gsTUFNYSxlQUFnQixTQUFRLFVBQVU7SUFOL0M7O1FBT0U7Ozs7V0FJRztRQUNNLFNBQUksR0FBVyxhQUFhLENBQUM7UUFFdEM7Ozs7V0FJRztRQUNNLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFcEM7Ozs7V0FJRztRQUNNLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFOUI7Ozs7V0FJRztRQUNPLHFCQUFnQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0tBV2pGO0lBVEM7Ozs7T0FJRztJQUNJLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOzhHQXJDVSxlQUFlO2tHQUFmLGVBQWUsa01DdkI1QixxakNBMEJNOztTREhPLGVBQWU7MkZBQWYsZUFBZTtrQkFOM0IsU0FBUzsrQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLElBQUk7c0JBQVosS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPSSxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9nZ2xlQmFzZSB9IGZyb20gJy4uL19oZWxwZXJzJztcblxuLyoqXG4gKiBTZXR0aW5ncyB0b2dnbGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVG9nZ2xlQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7VG9nZ2xlQ29tcG9uZW50fVxuICogQGV4dGVuZHMge1RvZ2dsZUJhc2V9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBUb2dnbGVCYXNlIHtcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gdG9nZ2xlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAndG9nZ2xlIHRleHQnO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyB2YWx1ZSB0byBjaGFuZ2UgY2hlY2tlZCBzdGF0ZVxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlIGltYWdlL2ljb24gc3JjIChvcHRpb25hbClcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGljb25TcmM6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBib29sZWFuIGFzIHRvIHdoZXRoZXIgdGhlIHRvZ2dsZSBpcyBjaGVja2VkIG9yIG5vdFxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGJvb2xlYW4+fVxuICAgKi9cbiAgQE91dHB1dCgpIGlzQ2hlY2tlZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogV2hlbiB0b2dnbGUgaXMgY2xpY2tlZFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlVG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZDtcbiAgICB0aGlzLmlzQ2hlY2tlZENoYW5nZWQuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0xMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICB7e2lzRGlzYWJsZWQgPyAnb3BhY2l0eS00MCcgOiAnaG92ZXI6YmctdGVhbC1saWdodGVyJ319IHt7ZXh0cmFUd0NsYXNzZXN9fVwiPlxuICA8bGFiZWwgY2xhc3M9XCJwci0xMlwiXG4gICAgICAgICBpZD1cInRvZ2dsZS1sYWJlbFwiXG4gICAgICAgICBmb3I9XCJ0b2dnbGUtYnV0dG9uXCI+XG4gICAge3t0ZXh0fX1cbiAgPC9sYWJlbD5cblxuICA8YnV0dG9uIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBoLTI4IGJvcmRlciBib3JkZXItZ3JheS1saWdodCBcbiAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0yMDAgXG4gICAgICAgICAgICAgICAge3tpc0NoZWNrZWQgPyAnYmctdGVhbC1kYXJrZXInIDogJ2JnLWdyYXktbGlnaHQnfX1cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidG9nZ2xlLWxhYmVsXCJcbiAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuICAgICAgICAgIFthdHRyLmNoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlVG9nZ2xlQ2xpY2tlZCgpXCI+XG5cbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIG14LTEyIHctMjAgaC0yMCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IHRyYW5zZm9ybSB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTIwMCBcbiAgICAgICAgICAgICAgICB7e2lzQ2hlY2tlZCA/ICd0cmFuc2xhdGUteC0xMicgOiAnLXRyYW5zbGF0ZS14LTEyJ319XCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8L3NwYW4+XG5cbiAgPC9idXR0b24+XG48L2Rpdj4iXX0=