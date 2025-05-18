import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { v4 } from 'uuid';
import { BaseInputs } from './base-inputs';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Form Inputs that most form components will extend
 *
 * @export
 * @class FormBaseInputs
 * @typedef {FormBaseInputs}
 */
class FormBaseInputs extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Internal maxLength property that is determined by a max length validator being set on the form control.
         *
         * @public
         * @type {?number}
         */
        this.maxLength = undefined;
        /**
         * Internal minLength property that is determined by a minLength length validator being set on the form control
         *
         * @public
         * @type {?number}
         */
        this.minLength = undefined;
        /**
         * Form Control for input.
         *
         * @type {FormControl}
        */
        this.control = new FormControl('');
        /**
       * Whether or not the form control is required.
       *
       * @type {boolean}
      */
        this.required = false;
        /**
       * An event that emits when the user changes the input.
       *
       * @type {string}
      */
        this.inputChange = new EventEmitter();
        /**
       * Optional id attribute.
       *
       * @type {string}
      */
        this.id = `id-form-control-${v4()}`;
        /**
         * Optional name attribute
         *
         * @type {string}
        */
        this.name = `name-form-control-${v4()}`;
        /**
         * A label to display before user selects a value
         *
         * @type {string}
        */
        this.placeholder = 'Input Placeholder';
        /**
         * Optional helper text for input
         *
         * @type {string}
        */
        this.helperText = '';
        /**
         * An object used to control what error messages are shown. The key is the error name and the value is the message.
         *
         * @type {Record<string, string>}
        */
        this.errorMessages = {};
        /**
         * An array of validators and their associated error messages. The key is the error that shows up as the key in the form control error object. The value is the message to display.
         *
         * @type {ValidatorEntry[]}
        */
        this.validators = [];
        /**
         * Internal control to clear subscriptions.
         *
         * @private
         * @type {*}
         */
        this._clearSub$ = new Subject();
    }
    /**
     * Sets an initial value on the Form Control. Useful if you don't want to pass in your own control.
     *
     * @type {string}
    */
    set initialValue(initialValue) {
        this.control.setValue(initialValue);
    }
    /**
     * Determines if the input is disabled.
     *
     * @type {boolean}
    */
    set disabled(disabled) {
        disabled ? this.control.disable() : this.control.enable();
    }
    /**
     * Description placeholder
     *
     * @public
     * @readonly
     * @type {*}
     */
    get errorMessage() {
        const errors = this.control.errors;
        if (errors) {
            for (const errorKey in errors) {
                if (this.errorMessages[errorKey]) {
                    return this.errorMessages[errorKey];
                }
            }
            return 'This form is invalid.';
        }
        return undefined;
    }
    ngOnInit() {
        this.setValidators();
        this.subscribeForFormChanges();
    }
    ngOnDestroy() {
        this._clearSub$.next();
        this._clearSub$.complete();
    }
    /**
     * Sets the validators onto the form control. Also scans for relevant validators to set properties like max length, min length, and required.
     *
     * @private
     */
    setValidators() {
        const asyncValidators = [];
        const syncValidators = [];
        for (const entry of this.validators) {
            if (entry.async) {
                asyncValidators.push(entry.validator(...entry.validatorArgs));
            }
            if (!entry.async && entry.validator) {
                syncValidators.push(entry.validator(...entry.validatorArgs));
            }
            if (entry.key === 'maxlength' && typeof entry.validatorArgs[0] === 'number') {
                this.maxLength = entry.validatorArgs[0];
            }
            if (entry.key === 'minlength' && typeof entry.validatorArgs[0] === 'number') {
                this.minLength = entry.validatorArgs[0];
            }
            if (entry.key === 'required') {
                this.required = true;
            }
            this.errorMessages[entry.key] = entry.message;
            this.control.setErrors({ ...this.control.errors, [entry.key]: false });
        }
        this.control.setValidators(syncValidators);
        this.control.setAsyncValidators(asyncValidators);
        this.control.updateValueAndValidity();
    }
    /**
     * Emits changes to the form. Unsubscribes on destroy.
     *
     * @private
     */
    subscribeForFormChanges() {
        this.control.valueChanges
            .pipe(takeUntil(this._clearSub$))
            .subscribe((value) => this.inputChange.emit(value));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormBaseInputs, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: FormBaseInputs, inputs: { control: "control", required: "required", id: "id", name: "name", initialValue: "initialValue", placeholder: "placeholder", helperText: "helperText", disabled: "disabled", errorMessages: "errorMessages", validators: "validators" }, outputs: { inputChange: "inputChange" }, usesInheritance: true, ngImport: i0 }); }
}
export { FormBaseInputs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormBaseInputs, decorators: [{
            type: Directive
        }], propDecorators: { control: [{
                type: Input
            }], required: [{
                type: Input
            }], inputChange: [{
                type: Output
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], initialValue: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], helperText: [{
                type: Input
            }], disabled: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], validators: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1iYXNlLWlucHV0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9jb21tb24vZm9ybS1iYXNlLWlucHV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBb0IsV0FBVyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUkxQzs7Ozs7O0dBTUc7QUFDSCxNQUNhLGNBQWUsU0FBUSxVQUFVO0lBRDlDOztRQUdFOzs7OztXQUtHO1FBQ0ksY0FBUyxHQUFZLFNBQVMsQ0FBQztRQUN0Qzs7Ozs7V0FLRztRQUNJLGNBQVMsR0FBWSxTQUFTLENBQUM7UUFHdEM7Ozs7VUFJRTtRQUNPLFlBQU8sR0FBK0IsSUFBSSxXQUFXLENBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGOzs7O1FBSUE7UUFDUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRW5DOzs7O1FBSUE7UUFDUSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ3hEOzs7O1FBSUE7UUFDTyxPQUFFLEdBQVcsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLENBQUE7UUFDL0M7Ozs7VUFJRTtRQUNPLFNBQUksR0FBVyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsQ0FBQTtRQVVuRDs7OztVQUlFO1FBQ08sZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQztRQUNuRDs7OztVQUlFO1FBQ08sZUFBVSxHQUFXLEVBQUUsQ0FBQTtRQVVoQzs7OztVQUlFO1FBQ08sa0JBQWEsR0FBMkIsRUFBRSxDQUFBO1FBRW5EOzs7O1VBSUU7UUFDTyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQXNCM0M7Ozs7O1dBS0c7UUFDSyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztLQXVFMUM7SUE3SUM7Ozs7TUFJRTtJQUNGLElBQ1csWUFBWSxDQUFDLFlBQW9CO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFhRDs7OztNQUlFO0lBQ0YsSUFDVyxRQUFRLENBQUMsUUFBaUI7UUFDbkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVELENBQUM7SUFlRDs7Ozs7O09BTUc7SUFDSCxJQUFXLFlBQVk7UUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNoQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7WUFDRCxPQUFPLHVCQUF1QixDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQVlELFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVDOzs7O09BSUc7SUFDSyxhQUFhO1FBQ25CLE1BQU0sZUFBZSxHQUF1QixFQUFFLENBQUM7UUFDL0MsTUFBTSxjQUFjLEdBQWtCLEVBQUUsQ0FBQztRQUV6QyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFFbkMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO2FBQzlEO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDbkMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7YUFDN0Q7WUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQVcsQ0FBQTthQUNsRDtZQUVELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBVyxDQUFBO2FBQ2xEO1lBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRTlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBRXZFO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFeEMsQ0FBQztJQUdEOzs7O09BSUc7SUFDSyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO2FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDdEUsQ0FBQzs4R0ExTFUsY0FBYztrR0FBZCxjQUFjOztTQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsU0FBUzs4QkF3QkMsT0FBTztzQkFBZixLQUFLO2dCQU1LLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0UsV0FBVztzQkFBcEIsTUFBTTtnQkFNRSxFQUFFO3NCQUFWLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU9LLFlBQVk7c0JBRHRCLEtBQUs7Z0JBU0csV0FBVztzQkFBbkIsS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9LLFFBQVE7c0JBRGxCLEtBQUs7Z0JBU0csYUFBYTtzQkFBckIsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc3luY1ZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQmFzZUlucHV0cyB9IGZyb20gJy4vYmFzZS1pbnB1dHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JFbnRyeSB9IGZyb20gJy4vdmFsaWRhdG9yLWVudHJ5LnR5cGUnO1xuXG5cbi8qKlxuICogRm9ybSBJbnB1dHMgdGhhdCBtb3N0IGZvcm0gY29tcG9uZW50cyB3aWxsIGV4dGVuZFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBGb3JtQmFzZUlucHV0c1xuICogQHR5cGVkZWYge0Zvcm1CYXNlSW5wdXRzfVxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZUlucHV0cyBleHRlbmRzIEJhc2VJbnB1dHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSAgeyAgXG4gIFxuICAvKipcbiAgICogSW50ZXJuYWwgbWF4TGVuZ3RoIHByb3BlcnR5IHRoYXQgaXMgZGV0ZXJtaW5lZCBieSBhIG1heCBsZW5ndGggdmFsaWRhdG9yIGJlaW5nIHNldCBvbiB0aGUgZm9ybSBjb250cm9sLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKi9cbiAgcHVibGljIG1heExlbmd0aD86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIEludGVybmFsIG1pbkxlbmd0aCBwcm9wZXJ0eSB0aGF0IGlzIGRldGVybWluZWQgYnkgYSBtaW5MZW5ndGggbGVuZ3RoIHZhbGlkYXRvciBiZWluZyBzZXQgb24gdGhlIGZvcm0gY29udHJvbFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKi9cbiAgcHVibGljIG1pbkxlbmd0aD86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgXG5cbiAgLyoqIFxuICAgKiBGb3JtIENvbnRyb2wgZm9yIGlucHV0LiBcbiAgICogXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbH1cbiAgKi9cbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVsbD4gPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVsbD4oJycpO1xuICAgIC8qKiBcbiAgICogV2hldGhlciBvciBub3QgdGhlIGZvcm0gY29udHJvbCBpcyByZXF1aXJlZC5cbiAgICogXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAqL1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiogXG4gICAqIEFuIGV2ZW50IHRoYXQgZW1pdHMgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBpbnB1dC5cbiAgICogXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICovXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcbiAgICAvKiogXG4gICAqIE9wdGlvbmFsIGlkIGF0dHJpYnV0ZS5cbiAgICogXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSBgaWQtZm9ybS1jb250cm9sLSR7djQoKX1gXG4gIC8qKiBcbiAgICogT3B0aW9uYWwgbmFtZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9IGBuYW1lLWZvcm0tY29udHJvbC0ke3Y0KCl9YFxuICAvKiogXG4gICAqIFNldHMgYW4gaW5pdGlhbCB2YWx1ZSBvbiB0aGUgRm9ybSBDb250cm9sLiBVc2VmdWwgaWYgeW91IGRvbid0IHdhbnQgdG8gcGFzcyBpbiB5b3VyIG93biBjb250cm9sLlxuICAgKiBcbiAgICogQHR5cGUge3N0cmluZ31cbiAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpbml0aWFsVmFsdWUoaW5pdGlhbFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoaW5pdGlhbFZhbHVlKTtcbiAgfVxuICAvKipcbiAgICogQSBsYWJlbCB0byBkaXNwbGF5IGJlZm9yZSB1c2VyIHNlbGVjdHMgYSB2YWx1ZVxuICAgKiBcbiAgICogQHR5cGUge3N0cmluZ31cbiAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdJbnB1dCBQbGFjZWhvbGRlcic7XG4gIC8qKiBcbiAgICogT3B0aW9uYWwgaGVscGVyIHRleHQgZm9yIGlucHV0XG4gICAqIFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAqL1xuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJ1xuICAvKiogXG4gICAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgKiBcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBkaXNhYmxlZCA/IHRoaXMuY29udHJvbC5kaXNhYmxlKCkgOiB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gIH1cbiAgLyoqIFxuICAgKiBBbiBvYmplY3QgdXNlZCB0byBjb250cm9sIHdoYXQgZXJyb3IgbWVzc2FnZXMgYXJlIHNob3duLiBUaGUga2V5IGlzIHRoZSBlcnJvciBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgdGhlIG1lc3NhZ2UuXG4gICAqIFxuICAgKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn1cbiAgKi9cbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG5cbiAgLyoqIFxuICAgKiBBbiBhcnJheSBvZiB2YWxpZGF0b3JzIGFuZCB0aGVpciBhc3NvY2lhdGVkIGVycm9yIG1lc3NhZ2VzLiBUaGUga2V5IGlzIHRoZSBlcnJvciB0aGF0IHNob3dzIHVwIGFzIHRoZSBrZXkgaW4gdGhlIGZvcm0gY29udHJvbCBlcnJvciBvYmplY3QuIFRoZSB2YWx1ZSBpcyB0aGUgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKiBcbiAgICogQHR5cGUge1ZhbGlkYXRvckVudHJ5W119XG4gICovXG4gIEBJbnB1dCgpIHZhbGlkYXRvcnM6IFZhbGlkYXRvckVudHJ5W10gPSBbXTtcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gcGxhY2Vob2xkZXJcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBwdWJsaWMgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgZm9yIChjb25zdCBlcnJvcktleSBpbiBlcnJvcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JNZXNzYWdlc1tlcnJvcktleV0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2VzW2Vycm9yS2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdUaGlzIGZvcm0gaXMgaW52YWxpZC4nO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgY29udHJvbCB0byBjbGVhciBzdWJzY3JpcHRpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIHByaXZhdGUgX2NsZWFyU3ViJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKCk7XG4gICAgICB0aGlzLnN1YnNjcmliZUZvckZvcm1DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhclN1YiQubmV4dCgpO1xuICAgIHRoaXMuX2NsZWFyU3ViJC5jb21wbGV0ZSgpO1xufVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWxpZGF0b3JzIG9udG8gdGhlIGZvcm0gY29udHJvbC4gQWxzbyBzY2FucyBmb3IgcmVsZXZhbnQgdmFsaWRhdG9ycyB0byBzZXQgcHJvcGVydGllcyBsaWtlIG1heCBsZW5ndGgsIG1pbiBsZW5ndGgsIGFuZCByZXF1aXJlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9ycygpOiB2b2lkIHtcbiAgICBjb25zdCBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSA9IFtdO1xuICAgIGNvbnN0IHN5bmNWYWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMudmFsaWRhdG9ycykge1xuXG4gICAgICBpZiAoZW50cnkuYXN5bmMpIHtcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzLnB1c2goZW50cnkudmFsaWRhdG9yKC4uLmVudHJ5LnZhbGlkYXRvckFyZ3MpKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWVudHJ5LmFzeW5jICYmIGVudHJ5LnZhbGlkYXRvcikge1xuICAgICAgICBzeW5jVmFsaWRhdG9ycy5wdXNoKGVudHJ5LnZhbGlkYXRvciguLi5lbnRyeS52YWxpZGF0b3JBcmdzKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVudHJ5LmtleSA9PT0gJ21heGxlbmd0aCcgJiYgdHlwZW9mIGVudHJ5LnZhbGlkYXRvckFyZ3NbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gZW50cnkudmFsaWRhdG9yQXJnc1swXSBhcyBudW1iZXJcbiAgICAgIH1cblxuICAgICAgaWYgKGVudHJ5LmtleSA9PT0gJ21pbmxlbmd0aCcgJiYgdHlwZW9mIGVudHJ5LnZhbGlkYXRvckFyZ3NbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMubWluTGVuZ3RoID0gZW50cnkudmFsaWRhdG9yQXJnc1swXSBhcyBudW1iZXJcbiAgICAgIH1cblxuICAgICAgaWYgKGVudHJ5LmtleSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzW2VudHJ5LmtleV0gPSBlbnRyeS5tZXNzYWdlO1xuXG4gICAgICB0aGlzLmNvbnRyb2wuc2V0RXJyb3JzKHsgLi4udGhpcy5jb250cm9sLmVycm9ycywgW2VudHJ5LmtleV06IGZhbHNlIH0pXG5cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhzeW5jVmFsaWRhdG9ycyk7XG4gICAgdGhpcy5jb250cm9sLnNldEFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpXG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblxuICB9XG5cblxuICAvKipcbiAgICogRW1pdHMgY2hhbmdlcyB0byB0aGUgZm9ybS4gVW5zdWJzY3JpYmVzIG9uIGRlc3Ryb3kuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZUZvckZvcm1DaGFuZ2VzKCkge1xuICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9jbGVhclN1YiQpKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSkpXG4gIH1cblxuXG4gIFxufVxuIl19