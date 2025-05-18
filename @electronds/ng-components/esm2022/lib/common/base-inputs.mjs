import { Directive, Input } from '@angular/core';
import { TwClassHelpers } from './tw-class-helpers';
import * as i0 from "@angular/core";
/**
 * Basic Inputs that most components will extend
 *
 * @export
 * @class BaseInputs
 * @typedef {BaseInputs}
 */
class BaseInputs {
    constructor() {
        /**
         * Tailwind classes to customize main container
         *
         * @type {string}
         */
        this.extraTwClasses = '';
        /**
         * Deteremines disabled state
         *
         * need to determine this state for the buttons.
         *
         * @type {boolean}
         */
        this.isDisabled = false;
        /**
         * Helpers for Tailwind Utilities/Classes
         *
         * @public
         * @type {TwClassHelpers}
         */
        this.TwClassHelpers = TwClassHelpers;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BaseInputs, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: BaseInputs, inputs: { extraTwClasses: "extraTwClasses", isDisabled: "isDisabled" }, ngImport: i0 }); }
}
export { BaseInputs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BaseInputs, decorators: [{
            type: Directive
        }], propDecorators: { extraTwClasses: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1pbnB1dHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvY29tbW9uL2Jhc2UtaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFcEQ7Ozs7OztHQU1HO0FBQ0gsTUFDYSxVQUFVO0lBRHZCO1FBRUU7Ozs7V0FJRztRQUNNLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRXJDOzs7Ozs7V0FNRztRQUNNLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFckM7Ozs7O1dBS0c7UUFDSSxtQkFBYyxHQUEwQixjQUFjLENBQUM7S0FDL0Q7OEdBeEJZLFVBQVU7a0dBQVYsVUFBVTs7U0FBVixVQUFVOzJGQUFWLFVBQVU7a0JBRHRCLFNBQVM7OEJBT0MsY0FBYztzQkFBdEIsS0FBSztnQkFTRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUd0NsYXNzSGVscGVycyB9IGZyb20gJy4vdHctY2xhc3MtaGVscGVycyc7XG5cbi8qKlxuICogQmFzaWMgSW5wdXRzIHRoYXQgbW9zdCBjb21wb25lbnRzIHdpbGwgZXh0ZW5kXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJhc2VJbnB1dHNcbiAqIEB0eXBlZGVmIHtCYXNlSW5wdXRzfVxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIFRhaWx3aW5kIGNsYXNzZXMgdG8gY3VzdG9taXplIG1haW4gY29udGFpbmVyXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBleHRyYVR3Q2xhc3Nlczogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVyZW1pbmVzIGRpc2FibGVkIHN0YXRlXG4gICAqXG4gICAqIG5lZWQgdG8gZGV0ZXJtaW5lIHRoaXMgc3RhdGUgZm9yIHRoZSBidXR0b25zLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSGVscGVycyBmb3IgVGFpbHdpbmQgVXRpbGl0aWVzL0NsYXNzZXNcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAdHlwZSB7VHdDbGFzc0hlbHBlcnN9XG4gICAqL1xuICBwdWJsaWMgVHdDbGFzc0hlbHBlcnM6IHR5cGVvZiBUd0NsYXNzSGVscGVycyA9IFR3Q2xhc3NIZWxwZXJzO1xufVxuIl19