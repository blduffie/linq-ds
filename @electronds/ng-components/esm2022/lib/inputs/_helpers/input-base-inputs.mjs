import { Directive, Input } from '@angular/core';
import { FormBaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Form Inputs that most components will extend
 *
 * @export
 * @class BaseInputs
 * @typedef {FormBaseInputs}
 */
class InputBaseInputs extends FormBaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Form Label Size
         *
         * @type {FormControl}
         */
        this.size = 'md';
        /**
         * Input has six possible states — enabled, focus, active, filled, disabled, and read-only.
         *
         * @type {InputState}
         */
        this.state = undefined;
        /**
         * Input can display a status which can be used for form validation. The four status types are success, loading, warning, and error.
         *
         * @type {InputStatus}
         */
        this.status = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputBaseInputs, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: InputBaseInputs, inputs: { size: "size", state: "state", status: "status" }, usesInheritance: true, ngImport: i0 }); }
}
export { InputBaseInputs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputBaseInputs, decorators: [{
            type: Directive
        }], propDecorators: { size: [{
                type: Input
            }], state: [{
                type: Input
            }], status: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYmFzZS1pbnB1dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvaW5wdXRzL19oZWxwZXJzL2lucHV0LWJhc2UtaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRzlDOzs7Ozs7R0FNRztBQUNILE1BQ2EsZUFBZ0IsU0FBUSxjQUFjO0lBRG5EOztRQUVFOzs7O1dBSUc7UUFDTSxTQUFJLEdBQWMsSUFBSSxDQUFDO1FBQ2hDOzs7O1dBSUc7UUFDTSxVQUFLLEdBQWdCLFNBQVMsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ00sV0FBTSxHQUFpQixTQUFTLENBQUM7S0FDM0M7OEdBbkJZLGVBQWU7a0dBQWYsZUFBZTs7U0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFNBQVM7OEJBT0MsSUFBSTtzQkFBWixLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQmFzZUlucHV0cyB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgeyBJbnB1dFNpemUsIElucHV0U3RhdGUsIElucHV0U3RhdHVzIH0gZnJvbSAnLic7XG5cbi8qKlxuICogRm9ybSBJbnB1dHMgdGhhdCBtb3N0IGNvbXBvbmVudHMgd2lsbCBleHRlbmRcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmFzZUlucHV0c1xuICogQHR5cGVkZWYge0Zvcm1CYXNlSW5wdXRzfVxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBJbnB1dEJhc2VJbnB1dHMgZXh0ZW5kcyBGb3JtQmFzZUlucHV0cyB7XG4gIC8qKlxuICAgKiBGb3JtIExhYmVsIFNpemVcbiAgICpcbiAgICogQHR5cGUge0Zvcm1Db250cm9sfVxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogSW5wdXRTaXplID0gJ21kJztcbiAgLyoqXG4gICAqIElucHV0IGhhcyBzaXggcG9zc2libGUgc3RhdGVzIOKAlCBlbmFibGVkLCBmb2N1cywgYWN0aXZlLCBmaWxsZWQsIGRpc2FibGVkLCBhbmQgcmVhZC1vbmx5LlxuICAgKlxuICAgKiBAdHlwZSB7SW5wdXRTdGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpIHN0YXRlPzogSW5wdXRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIElucHV0IGNhbiBkaXNwbGF5IGEgc3RhdHVzIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBmb3JtIHZhbGlkYXRpb24uIFRoZSBmb3VyIHN0YXR1cyB0eXBlcyBhcmUgc3VjY2VzcywgbG9hZGluZywgd2FybmluZywgYW5kIGVycm9yLlxuICAgKlxuICAgKiBAdHlwZSB7SW5wdXRTdGF0dXN9XG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM/OiBJbnB1dFN0YXR1cyA9IHVuZGVmaW5lZDtcbn1cbiJdfQ==