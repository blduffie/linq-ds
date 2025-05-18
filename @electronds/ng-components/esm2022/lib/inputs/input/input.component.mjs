import { Component, Input } from '@angular/core';
import { StatusIconLookup } from '../_helpers';
import { InputBaseInputs } from '../_helpers/input-base-inputs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../svg/svg.component";
import * as i4 from "../../common/form-hints/form-hints.component";
import * as i5 from "ngx-mask";
/**
 * Input Component
 *
 * @export
 * @class InputComponent
 * @typedef {InputComponent}
 * @extends {InputBaseInputs}
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
class InputComponent extends InputBaseInputs {
    /**
     * Creates an instance of InputComponent.
     *
     * @constructor
     */
    constructor() {
        super();
        /**
         * Description placeholder
         *
         * @public
         * @readonly
         * @type {*}
         */
        this.statusIconLookup = StatusIconLookup;
        /**
         * Sets a mask on the input.
         *
         * @type {string}
         */
        this.mask = undefined;
        /**
         * Inputs have leading icons enabled. Simply provide a path.
         *
         * @type {string}
         */
        this.leadingIconPath = undefined;
        /**
         * Classes that are appended using ngClass.
         *
         * @public
         * @type {string[]}
         */
        this.twClassList = [];
        this.twClassList = this.generateClasses();
    }
    /**
     * Regenerates CSS classes on changing user selections.
     */
    ngOnChanges() {
        this.twClassList = this.generateClasses();
    }
    /**
     * Generates CSS classes based on user inputs.
     *
     * @private
     * @returns {string[]}
     */
    generateClasses() {
        const classes = [];
        if (this.size) {
            classes.push(`form-size-${this.size}`);
        }
        if (this.status) {
            classes.push(`form-status-${this.status}`);
        }
        if (this.state) {
            classes.push(`form-state-${this.state}`);
        }
        if (this.leadingIconPath) {
            classes.push('form-icon-leading');
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: InputComponent, selector: "eds-input", inputs: { mask: "mask", leadingIconPath: "leadingIconPath" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-input-wrapper\"\n     *ngIf=\"control\"\n     [ngClass]=\"twClassList\">\n  <div class=\"form-input-group\">\n\n    <div class=\"form-input-group-prepend\">\n      <ng-content select=\"[edsInputPrepend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-group-append\">\n      <ng-content select=\"[edsInputAppend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-trailing-icon\"\n         *ngIf=\"status\">\n      <eds-svg [attributes]=\"{'fill': 'currentColor', 'viewBox': '0 0 64 64'}\"\n               [svgPath]=\"statusIconLookup[status]\"></eds-svg>\n    </div>\n\n    <div class=\"form-input-group-content\">\n      <input [formControl]=\"control\"\n             class=\"form-input-field\"\n             type=\"text\"\n             [mask]=\"mask\"\n             [id]=\"id\"\n             [name]=\"name\"\n             [attr.minlength]=\"minLength ?? null\"\n             [required]=\"required\"\n             [placeholder]=\"placeholder\"\n             [attr.maxlength]=\"maxLength ?? null\"\n             [attr.aria-describedby]=\"(control.pristine && control.touched) === false && helperText ? 'form-field-helper' : null\">\n      <label class=\"form-input-label\"\n             [for]=\"id\">\n        {{ placeholder }} {{ required ? '*' : ''}}\n      </label>\n\n      <eds-svg class=\"form-input-leading-icon\"\n               *ngIf=\"leadingIconPath\"\n               [svgSizeClass]=\"'icon-18'\"\n               [twClassList]=\"['text-gray-dark']\"\n               [attributes]=\"{'fill': 'currentColor', 'height': '16', 'width': '16'}\"\n               [svgPath]=\"leadingIconPath\"></eds-svg>\n\n    </div>\n  </div>\n\n  <div class=\"form-input-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.SvgComponent, selector: "eds-svg", inputs: ["svgPath", "twClassList", "attributes", "svgSizeClass"] }, { kind: "component", type: i4.FormHintsComponent, selector: "eds-form-hints", inputs: ["control", "helperText", "maxLength", "currLength", "errorMessage"] }, { kind: "directive", type: i5.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }] }); }
}
export { InputComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-input', template: "<div class=\"form-input-wrapper\"\n     *ngIf=\"control\"\n     [ngClass]=\"twClassList\">\n  <div class=\"form-input-group\">\n\n    <div class=\"form-input-group-prepend\">\n      <ng-content select=\"[edsInputPrepend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-group-append\">\n      <ng-content select=\"[edsInputAppend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-trailing-icon\"\n         *ngIf=\"status\">\n      <eds-svg [attributes]=\"{'fill': 'currentColor', 'viewBox': '0 0 64 64'}\"\n               [svgPath]=\"statusIconLookup[status]\"></eds-svg>\n    </div>\n\n    <div class=\"form-input-group-content\">\n      <input [formControl]=\"control\"\n             class=\"form-input-field\"\n             type=\"text\"\n             [mask]=\"mask\"\n             [id]=\"id\"\n             [name]=\"name\"\n             [attr.minlength]=\"minLength ?? null\"\n             [required]=\"required\"\n             [placeholder]=\"placeholder\"\n             [attr.maxlength]=\"maxLength ?? null\"\n             [attr.aria-describedby]=\"(control.pristine && control.touched) === false && helperText ? 'form-field-helper' : null\">\n      <label class=\"form-input-label\"\n             [for]=\"id\">\n        {{ placeholder }} {{ required ? '*' : ''}}\n      </label>\n\n      <eds-svg class=\"form-input-leading-icon\"\n               *ngIf=\"leadingIconPath\"\n               [svgSizeClass]=\"'icon-18'\"\n               [twClassList]=\"['text-gray-dark']\"\n               [attributes]=\"{'fill': 'currentColor', 'height': '16', 'width': '16'}\"\n               [svgPath]=\"leadingIconPath\"></eds-svg>\n\n    </div>\n  </div>\n\n  <div class=\"form-input-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { mask: [{
                type: Input
            }], leadingIconPath: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2lucHV0cy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvaW5wdXRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBRWhFOzs7Ozs7Ozs7R0FTRztBQUNILE1BSWEsY0FDWCxTQUFRLGVBQWU7SUFnQ3ZCOzs7O09BSUc7SUFDSDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBbkNWOzs7Ozs7V0FNRztRQUNhLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3BEOzs7O1dBSUc7UUFDTSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDTSxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUU5Qzs7Ozs7V0FLRztRQUNJLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBU2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxlQUFlO1FBQ3JCLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs4R0E1RVUsY0FBYztrR0FBZCxjQUFjLDJKQ2xCM0IsZ2lFQXFEUTs7U0RuQ0ssY0FBYzsyRkFBZCxjQUFjO2tCQUoxQixTQUFTOytCQUNFLFdBQVc7MEVBb0JaLElBQUk7c0JBQVosS0FBSztnQkFNRyxlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXR1c0ljb25Mb29rdXAgfSBmcm9tICcuLi9faGVscGVycyc7XG5pbXBvcnQgeyBJbnB1dEJhc2VJbnB1dHMgfSBmcm9tICcuLi9faGVscGVycy9pbnB1dC1iYXNlLWlucHV0cyc7XG5cbi8qKlxuICogSW5wdXQgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIElucHV0Q29tcG9uZW50XG4gKiBAdHlwZWRlZiB7SW5wdXRDb21wb25lbnR9XG4gKiBAZXh0ZW5kcyB7SW5wdXRCYXNlSW5wdXRzfVxuICogQGltcGxlbWVudHMge09uQ2hhbmdlc31cbiAqIEBpbXBsZW1lbnRzIHtPbkRlc3Ryb3l9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50XG4gIGV4dGVuZHMgSW5wdXRCYXNlSW5wdXRzXG4gIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbntcbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1c0ljb25Mb29rdXAgPSBTdGF0dXNJY29uTG9va3VwO1xuICAvKipcbiAgICogU2V0cyBhIG1hc2sgb24gdGhlIGlucHV0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWFzaz86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIElucHV0cyBoYXZlIGxlYWRpbmcgaWNvbnMgZW5hYmxlZC4gU2ltcGx5IHByb3ZpZGUgYSBwYXRoLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbGVhZGluZ0ljb25QYXRoPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBDbGFzc2VzIHRoYXQgYXJlIGFwcGVuZGVkIHVzaW5nIG5nQ2xhc3MuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKi9cbiAgcHVibGljIHR3Q2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIElucHV0Q29tcG9uZW50LlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50d0NsYXNzTGlzdCA9IHRoaXMuZ2VuZXJhdGVDbGFzc2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnZW5lcmF0ZXMgQ1NTIGNsYXNzZXMgb24gY2hhbmdpbmcgdXNlciBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy50d0NsYXNzTGlzdCA9IHRoaXMuZ2VuZXJhdGVDbGFzc2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIENTUyBjbGFzc2VzIGJhc2VkIG9uIHVzZXIgaW5wdXRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChgZm9ybS1zaXplLSR7dGhpcy5zaXplfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXR1cykge1xuICAgICAgY2xhc3Nlcy5wdXNoKGBmb3JtLXN0YXR1cy0ke3RoaXMuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goYGZvcm0tc3RhdGUtJHt0aGlzLnN0YXRlfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlYWRpbmdJY29uUGF0aCkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdmb3JtLWljb24tbGVhZGluZycpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dC13cmFwcGVyXCJcbiAgICAgKm5nSWY9XCJjb250cm9sXCJcbiAgICAgW25nQ2xhc3NdPVwidHdDbGFzc0xpc3RcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXQtZ3JvdXBcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltlZHNJbnB1dFByZXBlbmRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZWRzSW5wdXRBcHBlbmRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXQtdHJhaWxpbmctaWNvblwiXG4gICAgICAgICAqbmdJZj1cInN0YXR1c1wiPlxuICAgICAgPGVkcy1zdmcgW2F0dHJpYnV0ZXNdPVwieydmaWxsJzogJ2N1cnJlbnRDb2xvcicsICd2aWV3Qm94JzogJzAgMCA2NCA2NCd9XCJcbiAgICAgICAgICAgICAgIFtzdmdQYXRoXT1cInN0YXR1c0ljb25Mb29rdXBbc3RhdHVzXVwiPjwvZWRzLXN2Zz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0LWdyb3VwLWNvbnRlbnRcIj5cbiAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0LWZpZWxkXCJcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgW21hc2tdPVwibWFza1wiXG4gICAgICAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICBbYXR0ci5taW5sZW5ndGhdPVwibWluTGVuZ3RoID8/IG51bGxcIlxuICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoID8/IG51bGxcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiKGNvbnRyb2wucHJpc3RpbmUgJiYgY29udHJvbC50b3VjaGVkKSA9PT0gZmFsc2UgJiYgaGVscGVyVGV4dCA/ICdmb3JtLWZpZWxkLWhlbHBlcicgOiBudWxsXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWlucHV0LWxhYmVsXCJcbiAgICAgICAgICAgICBbZm9yXT1cImlkXCI+XG4gICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IHt7IHJlcXVpcmVkID8gJyonIDogJyd9fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGVkcy1zdmcgY2xhc3M9XCJmb3JtLWlucHV0LWxlYWRpbmctaWNvblwiXG4gICAgICAgICAgICAgICAqbmdJZj1cImxlYWRpbmdJY29uUGF0aFwiXG4gICAgICAgICAgICAgICBbc3ZnU2l6ZUNsYXNzXT1cIidpY29uLTE4J1wiXG4gICAgICAgICAgICAgICBbdHdDbGFzc0xpc3RdPVwiWyd0ZXh0LWdyYXktZGFyayddXCJcbiAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cInsnZmlsbCc6ICdjdXJyZW50Q29sb3InLCAnaGVpZ2h0JzogJzE2JywgJ3dpZHRoJzogJzE2J31cIlxuICAgICAgICAgICAgICAgW3N2Z1BhdGhdPVwibGVhZGluZ0ljb25QYXRoXCI+PC9lZHMtc3ZnPlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0LXN1cHBvcnRcIlxuICAgICAgICpuZ0lmPVwiKGNvbnRyb2wuaW52YWxpZCAmJiAhY29udHJvbC5wcmlzdGluZSkgfHwgIGhlbHBlclRleHQgfHwgbWF4TGVuZ3RoIFwiPlxuICAgIDxlZHMtZm9ybS1oaW50cyBbY29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgW2hlbHBlclRleHRdPVwiaGVscGVyVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIFtlcnJvck1lc3NhZ2VdPVwiZXJyb3JNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICBbY3Vyckxlbmd0aF09XCJjb250cm9sLnZhbHVlPy5sZW5ndGggfHwgMFwiPjwvZWRzLWZvcm0taGludHM+XG4gIDwvZGl2PiJdfQ==