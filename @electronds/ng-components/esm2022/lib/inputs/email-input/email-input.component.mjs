import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputBaseInputs } from '../_helpers/input-base-inputs';
import * as i0 from "@angular/core";
import * as i1 from "../input/input.component";
/**
 * Email variant of input component.
 *
 * @export
 * @class EmailInputComponent
 * @typedef {EmailInputComponent}
 * @extends {InputBaseInputs}
 */
class EmailInputComponent extends InputBaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Validator to ensure the user enters a proper email.
         *
         * @public
         * @readonly
         * @type {ValidatorEntry[]}
         */
        this.emailValidators = [
            {
                key: 'email',
                message: 'Valid email address is required.',
                validator: () => Validators.email,
                validatorArgs: [],
                async: false,
            },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EmailInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: EmailInputComponent, selector: "eds-email-input", usesInheritance: true, ngImport: i0, template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           [placeholder]=\"placeholder !== 'Input Placeholder' ? placeholder : 'Email Address'\"\n           [leadingIconPath]=\"'components/assets/icons/mail.svg'\"\n           [validators]=\"emailValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-l border-gray\"\n       edsInputAppend>\n    @duke-energy.com\n  </div>\n</eds-input>", dependencies: [{ kind: "component", type: i1.InputComponent, selector: "eds-input", inputs: ["mask", "leadingIconPath"] }] }); }
}
export { EmailInputComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EmailInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-email-input', template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           [placeholder]=\"placeholder !== 'Input Placeholder' ? placeholder : 'Email Address'\"\n           [leadingIconPath]=\"'components/assets/icons/mail.svg'\"\n           [validators]=\"emailValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-l border-gray\"\n       edsInputAppend>\n    @duke-energy.com\n  </div>\n</eds-input>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2lucHV0cy9lbWFpbC1pbnB1dC9lbWFpbC1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvaW5wdXRzL2VtYWlsLWlucHV0L2VtYWlsLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBRWhFOzs7Ozs7O0dBT0c7QUFDSCxNQUlhLG1CQUFvQixTQUFRLGVBQWU7SUFKeEQ7O1FBS0U7Ozs7OztXQU1HO1FBQ2Esb0JBQWUsR0FBcUI7WUFDbEQ7Z0JBQ0UsR0FBRyxFQUFFLE9BQU87Z0JBQ1osT0FBTyxFQUFFLGtDQUFrQztnQkFDM0MsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2dCQUNqQyxhQUFhLEVBQUUsRUFBRTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUM7S0FDSDs4R0FqQlksbUJBQW1CO2tHQUFuQixtQkFBbUIsOEVDakJoQyw2bEJBZVk7O1NERUMsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JFbnRyeSB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0b3ItZW50cnkudHlwZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRCYXNlSW5wdXRzIH0gZnJvbSAnLi4vX2hlbHBlcnMvaW5wdXQtYmFzZS1pbnB1dHMnO1xuXG4vKipcbiAqIEVtYWlsIHZhcmlhbnQgb2YgaW5wdXQgY29tcG9uZW50LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBFbWFpbElucHV0Q29tcG9uZW50XG4gKiBAdHlwZWRlZiB7RW1haWxJbnB1dENvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtJbnB1dEJhc2VJbnB1dHN9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy1lbWFpbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEJhc2VJbnB1dHMge1xuICAvKipcbiAgICogVmFsaWRhdG9yIHRvIGVuc3VyZSB0aGUgdXNlciBlbnRlcnMgYSBwcm9wZXIgZW1haWwuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtWYWxpZGF0b3JFbnRyeVtdfVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yRW50cnlbXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdlbWFpbCcsXG4gICAgICBtZXNzYWdlOiAnVmFsaWQgZW1haWwgYWRkcmVzcyBpcyByZXF1aXJlZC4nLFxuICAgICAgdmFsaWRhdG9yOiAoKSA9PiBWYWxpZGF0b3JzLmVtYWlsLFxuICAgICAgdmFsaWRhdG9yQXJnczogW10sXG4gICAgICBhc3luYzogZmFsc2UsXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxlZHMtaW5wdXQgW2NvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciAhPT0gJ0lucHV0IFBsYWNlaG9sZGVyJyA/IHBsYWNlaG9sZGVyIDogJ0VtYWlsIEFkZHJlc3MnXCJcbiAgICAgICAgICAgW2xlYWRpbmdJY29uUGF0aF09XCInY29tcG9uZW50cy9hc3NldHMvaWNvbnMvbWFpbC5zdmcnXCJcbiAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwiZW1haWxWYWxpZGF0b3JzXCJcbiAgICAgICAgICAgKGlucHV0Q2hhbmdlKT1cImlucHV0Q2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcbiAgICAgICAgICAgW3N0YXR1c109XCJzdGF0dXNcIj5cbiAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCBweC0xMiBib3JkZXItbCBib3JkZXItZ3JheVwiXG4gICAgICAgZWRzSW5wdXRBcHBlbmQ+XG4gICAgQGR1a2UtZW5lcmd5LmNvbVxuICA8L2Rpdj5cbjwvZWRzLWlucHV0PiJdfQ==