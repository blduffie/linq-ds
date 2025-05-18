import { Component } from '@angular/core';
import { InputBaseInputs } from '../_helpers';
import * as i0 from "@angular/core";
import * as i1 from "../input/input.component";
/**
 * Phone variant for input.
 *
 * @export
 * @class PhoneInputComponent
 * @typedef {PhoneInputComponent}
 * @extends {InputBaseInputs}
 */
class PhoneInputComponent extends InputBaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Phone mask for the input.
         *
         * @public
         * @readonly
         * @type {"(000) 000-0000"}
         */
        this.phoneMask = '(000) 000-0000';
        /**
         * Validators to ensure a proper phone number is entered.
         *
         * @public
         * @readonly
         * @type {ValidatorEntry[]}
         */
        this.phoneValidators = [
            {
                key: 'mask',
                message: 'Valid phone number is required.',
                validator: undefined,
                validatorArgs: [],
                async: false,
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: PhoneInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: PhoneInputComponent, selector: "eds-phone-input", usesInheritance: true, ngImport: i0, template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           placeholder=\"Phone Number\"\n           [mask]=\"phoneMask\"\n           [validators]=\"phoneValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-r border-gray\"\n       edsInputPrepend>\n    +1\n  </div>\n</eds-input>", dependencies: [{ kind: "component", type: i1.InputComponent, selector: "eds-input", inputs: ["mask", "leadingIconPath"] }] }); }
}
export { PhoneInputComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: PhoneInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-phone-input', template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           placeholder=\"Phone Number\"\n           [mask]=\"phoneMask\"\n           [validators]=\"phoneValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-r border-gray\"\n       edsInputPrepend>\n    +1\n  </div>\n</eds-input>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2lucHV0cy9waG9uZS1pbnB1dC9waG9uZS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvaW5wdXRzL3Bob25lLWlucHV0L3Bob25lLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBQzlDOzs7Ozs7O0dBT0c7QUFDSCxNQUlhLG1CQUFvQixTQUFRLGVBQWU7SUFKeEQ7O1FBS0U7Ozs7OztXQU1HO1FBQ2EsY0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQzdDOzs7Ozs7V0FNRztRQUNhLG9CQUFlLEdBQXFCO1lBQ2xEO2dCQUNFLEdBQUcsRUFBRSxNQUFNO2dCQUNYLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUM7S0FDSDs4R0F6QlksbUJBQW1CO2tHQUFuQixtQkFBbUIsOEVDZmhDLG1mQWVZOztTREFDLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRW50cnkgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXRCYXNlSW5wdXRzIH0gZnJvbSAnLi4vX2hlbHBlcnMnO1xuLyoqXG4gKiBQaG9uZSB2YXJpYW50IGZvciBpbnB1dC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUGhvbmVJbnB1dENvbXBvbmVudFxuICogQHR5cGVkZWYge1Bob25lSW5wdXRDb21wb25lbnR9XG4gKiBAZXh0ZW5kcyB7SW5wdXRCYXNlSW5wdXRzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtcGhvbmUtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIFBob25lIG1hc2sgZm9yIHRoZSBpbnB1dC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge1wiKDAwMCkgMDAwLTAwMDBcIn1cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwaG9uZU1hc2sgPSAnKDAwMCkgMDAwLTAwMDAnO1xuICAvKipcbiAgICogVmFsaWRhdG9ycyB0byBlbnN1cmUgYSBwcm9wZXIgcGhvbmUgbnVtYmVyIGlzIGVudGVyZWQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtWYWxpZGF0b3JFbnRyeVtdfVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHBob25lVmFsaWRhdG9yczogVmFsaWRhdG9yRW50cnlbXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdtYXNrJyxcbiAgICAgIG1lc3NhZ2U6ICdWYWxpZCBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQuJyxcbiAgICAgIHZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgICAgdmFsaWRhdG9yQXJnczogW10sXG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxlZHMtaW5wdXQgW2NvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgW21hc2tdPVwicGhvbmVNYXNrXCJcbiAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwicGhvbmVWYWxpZGF0b3JzXCJcbiAgICAgICAgICAgKGlucHV0Q2hhbmdlKT1cImlucHV0Q2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcbiAgICAgICAgICAgW3N0YXR1c109XCJzdGF0dXNcIj5cbiAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCBweC0xMiBib3JkZXItciBib3JkZXItZ3JheVwiXG4gICAgICAgZWRzSW5wdXRQcmVwZW5kPlxuICAgICsxXG4gIDwvZGl2PlxuPC9lZHMtaW5wdXQ+Il19