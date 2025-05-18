import * as i0 from '@angular/core';
import { NgModule, Directive, Input, Component, EventEmitter, Output, ChangeDetectionStrategy, ViewChild, ViewChildren } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@angular/forms';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { v4 } from 'uuid';
import { Subject, takeUntil, timer, tap, delay } from 'rxjs';
import * as i1$1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2 from '@angular/platform-browser';
import * as i5 from 'ngx-mask';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

class ComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: ComponentsModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ComponentsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

class TwClassHelpers {
    static buildIconButtonClass(placement, base) {
        let extras = ' ';
        switch (placement) {
            case 'top':
                extras = 'flex-col py-32';
                break;
            case 'right':
                extras = 'flex-row';
                break;
            case 'bottom':
                extras = 'flex-col-reverse py-32';
                break;
            case 'left':
            default:
                extras = 'flex-row-reverse';
                break;
        }
        return `${base} ${extras}`;
    }
    static buildIconClass(placement, size) {
        switch (placement) {
            case 'right':
                return `${size} mr-4`;
            case 'left':
                return `${size} ml-4`;
            case 'bottom':
                return `${size} mt-2`;
            case 'top':
            default:
                return `${size} mb-2`;
        }
    }
}

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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BaseInputs, decorators: [{
            type: Directive
        }], propDecorators: { extraTwClasses: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }] } });

/**
 * Hints and errors that appear underneath forms.
 *
 * @export
 * @class FormHintsComponent
 * @typedef {FormHintsComponent}
 */
class FormHintsComponent {
    constructor() {
        /**
         * Form Control for input
         *
         * @type {FormControl}
         */
        this.control = undefined;
        /**
         * Optional helper text for form
         *
         * @type {string}
         */
        this.helperText = '';
        /**
         * Optional max length field
         *
         * @type {number}
         */
        this.maxLength = undefined;
        /**
         * Optional current length field. Should be set to work with max length.
         *
         * @type {number}
         */
        this.currLength = 0;
        /**
         * Optional error message to display when there is an error.
         *
         * @type {string}
         */
        this.errorMessage = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormHintsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: FormHintsComponent, selector: "eds-form-hints", inputs: { control: "control", helperText: "helperText", maxLength: "maxLength", currLength: "currLength", errorMessage: "errorMessage" }, ngImport: i0, template: "<ng-container *ngIf=\"control\">\n\n  <div class=\"form-field-hints\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText && (control.statusChanges | async) !== 'PENDING' || maxLength\">\n\n    <div *ngIf=\"(control.invalid && !control.pristine); else helperTextField\"\n         class=\"text-red\">\n      {{ errorMessage }}\n    </div>\n\n    <ng-template #helperTextField\n                 class=\"form-field-helper\"\n                 id=\"form-field-helper\">\n      {{ helperText }}\n    </ng-template>\n\n    <div class=\"form-field-count\"\n         *ngIf=\"maxLength\">\n      <span>{{ currLength }}</span> / <span>{{ maxLength }}</span>\n    </div>\n  </div>\n</ng-container>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormHintsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-form-hints', template: "<ng-container *ngIf=\"control\">\n\n  <div class=\"form-field-hints\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText && (control.statusChanges | async) !== 'PENDING' || maxLength\">\n\n    <div *ngIf=\"(control.invalid && !control.pristine); else helperTextField\"\n         class=\"text-red\">\n      {{ errorMessage }}\n    </div>\n\n    <ng-template #helperTextField\n                 class=\"form-field-helper\"\n                 id=\"form-field-helper\">\n      {{ helperText }}\n    </ng-template>\n\n    <div class=\"form-field-count\"\n         *ngIf=\"maxLength\">\n      <span>{{ currLength }}</span> / <span>{{ maxLength }}</span>\n    </div>\n  </div>\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: Input
            }], helperText: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], currLength: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }] } });

class FormHintsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormHintsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: FormHintsModule, declarations: [FormHintsComponent], imports: [CommonModule], exports: [FormHintsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormHintsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FormHintsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [FormHintsComponent],
                    exports: [FormHintsComponent],
                }]
        }] });

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

class ButtonBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Detemines what the button looks like (and type)
         *
         * @type {ButtonTypes}
         */
        this.type = 'primary';
        /**
         * Sizing options for button
         *
         * @type {Size}
         */
        this.size = 'sm';
        /**
         * When true triggers progress spinner. ** not functioning **
         *
         * @type {boolean}
         */
        this.isLoading = false;
        /**
         * Whether showing on dark background
         *
         * @type {boolean}
         */
        this.isReversed = false;
        /**
         * Shows underline
         *
         * @type {boolean}
         */
        this.isUnderlined = false;
        /**
         * Displayed text on button
         *
         * @type {string}
         */
        this.text = '';
        /**
         * Button click output
         *
         * @type {EventEmitter<Event>}
         */
        this.buttonClick = new EventEmitter();
    }
    /**
     * Builds tailwind classes based on user inputs
     *
     * @readonly
     * @type {string}
     */
    get twClassesBasedOnInputs() {
        return `btn-${this.size} ${this.buildTwClasses(this.type, this.isReversed, this.isUnderlined, this.extraTwClasses)}`;
    }
    /**
     * Method to broadcast button click event
     */
    handleButtonClick($event) {
        if (this.isDisabled) {
            return;
        }
        this.buttonClick.emit($event);
    }
    /**
     * @private
     * @param {ButtonTypes} type
     * @param {boolean} isReversed
     * @param {boolean} isUnderlined
     * @param {string} extras
     * @returns {string}
     */
    buildTwClasses(type, isReversed, isUnderlined, extras) {
        let twClass = `btn-${type}${isReversed ? '-reversed ' : ' '}`;
        twClass += isUnderlined ? 'btn-underline ' : '';
        return `${twClass}${extras} `;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: ButtonBase, inputs: { type: "type", size: "size", isLoading: "isLoading", isReversed: "isReversed", isUnderlined: "isUnderlined", text: "text" }, outputs: { buttonClick: "buttonClick" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonBase, decorators: [{
            type: Directive
        }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], isReversed: [{
                type: Input
            }], isUnderlined: [{
                type: Input
            }], text: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });

/**
 * Icon Button
 *
 * @export
 * @class IconButtonComponent
 * @typedef {IconButtonComponent}
 * @extends {ButtonBase}
 */
class IconButtonComponent extends ButtonBase {
    constructor() {
        super(...arguments);
        /**
         * Where on the button the icon is displayed
         *
         * @type {Placement}
         */
        this.iconPlacement = 'left';
        /**
         * Icon data
         *
         * @type {IconMeta}
         */
        this.imageData = {
            src: '',
            iconClass: 'icon-24',
            altText: 'image',
        };
        /**
         * Svg Data
         *
         * @type {SvgMeta}
         */
        this.svgData = {
            d: '',
            viewBox: '0 0 64 64',
            iconClass: 'icon-16',
        };
    }
    /**
     * @readonly
     * @type {string}
     */
    get iconButtonClass() {
        return this.TwClassHelpers.buildIconButtonClass(this.iconPlacement, this.twClassesBasedOnInputs);
    }
    /**
     * @readonly
     * @type {string}
     */
    get iconClass() {
        return this.TwClassHelpers.buildIconClass(this.iconPlacement, this.imageData.iconClass);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: IconButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: IconButtonComponent, selector: "eds-icon-button", inputs: { iconPlacement: "iconPlacement", imageData: "imageData", svgData: "svgData" }, usesInheritance: true, ngImport: i0, template: "<button class=\"btn {{iconButtonClass}}\"\n        type=\"button\"\n        (click)=\"handleButtonClick($event)\">\n     <img *ngIf=\"imageData.src !== ''\"\n          class=\"{{iconClass}}\"\n          src=\"{{imageData.src}}\" />\n\n     <svg *ngIf=\"svgData.d !== ''\"\n          class=\"fill-current text-blue {{svgData.iconClass}}\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          [attr.viewBox]=\"svgData.viewBox\"\n          aria-hidden=\"true\"\n          focusable=\"false\">\n          <path [attr.d]=\"svgData.d\" />\n     </svg>\n     {{text}}\n</button>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: IconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-icon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button class=\"btn {{iconButtonClass}}\"\n        type=\"button\"\n        (click)=\"handleButtonClick($event)\">\n     <img *ngIf=\"imageData.src !== ''\"\n          class=\"{{iconClass}}\"\n          src=\"{{imageData.src}}\" />\n\n     <svg *ngIf=\"svgData.d !== ''\"\n          class=\"fill-current text-blue {{svgData.iconClass}}\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          [attr.viewBox]=\"svgData.viewBox\"\n          aria-hidden=\"true\"\n          focusable=\"false\">\n          <path [attr.d]=\"svgData.d\" />\n     </svg>\n     {{text}}\n</button>" }]
        }], propDecorators: { iconPlacement: [{
                type: Input
            }], imageData: [{
                type: Input
            }], svgData: [{
                type: Input
            }] } });

/**
 * Button Component with various states
 *
 * @export
 * @class ButtonComponent
 * @typedef {ButtonComponent}
 * @extends {ButtonBase}
 */
class ButtonComponent extends ButtonBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ButtonComponent, selector: "eds-button", usesInheritance: true, ngImport: i0, template: "<button class=\"btn {{twClassesBasedOnInputs}}\"\n        type=\"{{type === 'primary' ? 'submit' : 'button'}}\"\n        [disabled]=\"isDisabled\"\n        (click)=\"handleButtonClick($event)\">\n        {{text}}\n</button>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button class=\"btn {{twClassesBasedOnInputs}}\"\n        type=\"{{type === 'primary' ? 'submit' : 'button'}}\"\n        [disabled]=\"isDisabled\"\n        (click)=\"handleButtonClick($event)\">\n        {{text}}\n</button>" }]
        }] });

class EdsButtonsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonsModule, declarations: [IconButtonComponent, ButtonComponent], imports: [CommonModule], exports: [IconButtonComponent, ButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonsModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IconButtonComponent, ButtonComponent],
                    imports: [CommonModule],
                    exports: [IconButtonComponent, ButtonComponent],
                }]
        }] });

class CheckboxesBase extends BaseInputs {
    constructor() {
        super(...arguments);
        this.labelPlacement = 'left';
        this.isChecked = true;
        this.text = '';
        this.isCheckedChanged = new EventEmitter();
    }
    handleCheckedChanged($event) {
        this.isCheckedChanged.emit($event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxesBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: CheckboxesBase, inputs: { labelPlacement: "labelPlacement", isChecked: "isChecked", text: "text" }, outputs: { isCheckedChanged: "isCheckedChanged" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxesBase, decorators: [{
            type: Directive
        }], propDecorators: { labelPlacement: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], text: [{
                type: Input
            }], isCheckedChanged: [{
                type: Output
            }] } });

class CheckboxComponent extends CheckboxesBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: CheckboxComponent, selector: "eds-checkbox", usesInheritance: true, ngImport: i0, template: "<input class=\"checkbox\"\n       type=\"checkbox\"\n       title=\"checkbox\"\n       [checked]=\"isChecked\"\n       (change)=\"handleCheckedChanged($event)\" />\n<label class=\"\"\n       for=\"checkbox\">{{text}}</label>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-checkbox', template: "<input class=\"checkbox\"\n       type=\"checkbox\"\n       title=\"checkbox\"\n       [checked]=\"isChecked\"\n       (change)=\"handleCheckedChanged($event)\" />\n<label class=\"\"\n       for=\"checkbox\">{{text}}</label>" }]
        }] });

class IconCheckboxComponent extends CheckboxesBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: IconCheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: IconCheckboxComponent, selector: "eds-icon-checkbox", usesInheritance: true, ngImport: i0, template: "<input class=\"checkbox\"\n       type=\"checkbox\"\n       title=\"checkbox\"\n       [checked]=\"isChecked\"\n       (change)=\"handleCheckedChanged($event)\" />\n<label class=\"\"\n       for=\"checkbox\">{{text}}</label>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: IconCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-icon-checkbox', template: "<input class=\"checkbox\"\n       type=\"checkbox\"\n       title=\"checkbox\"\n       [checked]=\"isChecked\"\n       (change)=\"handleCheckedChanged($event)\" />\n<label class=\"\"\n       for=\"checkbox\">{{text}}</label>" }]
        }] });

class EdsCheckboxesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsCheckboxesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsCheckboxesModule, declarations: [CheckboxComponent, IconCheckboxComponent], imports: [CommonModule], exports: [CheckboxComponent, IconCheckboxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsCheckboxesModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsCheckboxesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CheckboxComponent, IconCheckboxComponent],
                    imports: [CommonModule],
                    exports: [CheckboxComponent, IconCheckboxComponent],
                }]
        }] });

class NavCardLinkComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        this.text = 'Nav Link';
        this.href = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NavCardLinkComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: NavCardLinkComponent, selector: "eds-nav-card-link", inputs: { text: "text", href: "href" }, usesInheritance: true, ngImport: i0, template: "<a class='block text-teal-darker no-underline hover:underline {{extraTwClasses}}'\n   href='{{href}}'>\n  {{text}}<span class='whitespace-nowrap'>&zwnj;\u200C<svg class='inline-flex link-chevron'\n         xmlns='http://www.w3.org/2000/svg'\n         viewBox='0 0 16 32'\n         fill='currentColor'\n         aria-hidden='true'\n         focusable='false'>\n      <path\n            d='M11.445 15.666L.465 28.741a1.993 1.993 0 00.226 2.789 1.944 1.944 0 002.76-.228l12.084-14.389a2 2 0 00-.034-2.6L3.418.66A1.943 1.943 0 00.653.5 1.993 1.993 0 00.5 3.3z' />\n    </svg></span>\n</a>" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NavCardLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-nav-card-link', template: "<a class='block text-teal-darker no-underline hover:underline {{extraTwClasses}}'\n   href='{{href}}'>\n  {{text}}<span class='whitespace-nowrap'>&zwnj;\u200C<svg class='inline-flex link-chevron'\n         xmlns='http://www.w3.org/2000/svg'\n         viewBox='0 0 16 32'\n         fill='currentColor'\n         aria-hidden='true'\n         focusable='false'>\n      <path\n            d='M11.445 15.666L.465 28.741a1.993 1.993 0 00.226 2.789 1.944 1.944 0 002.76-.228l12.084-14.389a2 2 0 00-.034-2.6L3.418.66A1.943 1.943 0 00.653.5 1.993 1.993 0 00.5 3.3z' />\n    </svg></span>\n</a>" }]
        }], propDecorators: { text: [{
                type: Input
            }], href: [{
                type: Input
            }] } });

/**
 * Big Icon Card
 *
 * @export
 * @class BigIconCardComponent
 * @typedef {BigIconCardComponent}
 * @extends {BaseInputs}
 */
class BigIconCardComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Main title of the card (header)
         *
         * @type {string}
         */
        this.cardTitle = '';
        /**
         * Subtext for card
         *
         * @type {string}
         */
        this.description = '';
        /**
         * Path to icon
         *
         * @type {string}
         */
        this.iconSrc = '';
        /**
         * URL / Route
         *
         * @type {string}
         */
        this.href = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BigIconCardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: BigIconCardComponent, selector: "eds-big-icon-card", inputs: { cardTitle: "cardTitle", description: "description", iconSrc: "iconSrc", href: "href" }, usesInheritance: true, ngImport: i0, template: "<div class='relative flex sm:flex-col sm:h-full {{extraTwClasses}}'>\n\n  <a\n    class='block h-fit mr-12 sm:mr-0 sm:mb-12 flex-shrink-0'\n    href='{{href}}'\n    tabindex='-1'\n    aria-hidden='true'\n  >\n    <img\n      class='icon-80 sm:icon-112 sm:mx-auto rounded-full'\n      src='{{iconSrc}}'\n      alt=''>\n  </a>\n\n  <div class='flex flex-col flex-grow justify-center sm:justify-start text-left sm:text-center max-w-2xs sm:mx-auto'>\n    <h3 class='text-xl'>\n      <eds-nav-card-link [text]=\"cardTitle\"\n                         [href]=\"href\"></eds-nav-card-link>\n    </h3>\n    <p class='mt-4 md:mt-6 sm:mx-auto line-clamp-6'>\n      {{description}}\n    </p>\n  </div>\n\n</div>", dependencies: [{ kind: "component", type: NavCardLinkComponent, selector: "eds-nav-card-link", inputs: ["text", "href"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BigIconCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-big-icon-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class='relative flex sm:flex-col sm:h-full {{extraTwClasses}}'>\n\n  <a\n    class='block h-fit mr-12 sm:mr-0 sm:mb-12 flex-shrink-0'\n    href='{{href}}'\n    tabindex='-1'\n    aria-hidden='true'\n  >\n    <img\n      class='icon-80 sm:icon-112 sm:mx-auto rounded-full'\n      src='{{iconSrc}}'\n      alt=''>\n  </a>\n\n  <div class='flex flex-col flex-grow justify-center sm:justify-start text-left sm:text-center max-w-2xs sm:mx-auto'>\n    <h3 class='text-xl'>\n      <eds-nav-card-link [text]=\"cardTitle\"\n                         [href]=\"href\"></eds-nav-card-link>\n    </h3>\n    <p class='mt-4 md:mt-6 sm:mx-auto line-clamp-6'>\n      {{description}}\n    </p>\n  </div>\n\n</div>" }]
        }], propDecorators: { cardTitle: [{
                type: Input
            }], description: [{
                type: Input
            }], iconSrc: [{
                type: Input
            }], href: [{
                type: Input
            }] } });

class EdsLinksModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsLinksModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsLinksModule, declarations: [NavCardLinkComponent], imports: [CommonModule], exports: [NavCardLinkComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsLinksModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsLinksModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NavCardLinkComponent],
                    imports: [CommonModule],
                    exports: [NavCardLinkComponent],
                }]
        }] });

class EdsBigIconCardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsBigIconCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsBigIconCardModule, declarations: [BigIconCardComponent], imports: [CommonModule, EdsLinksModule], exports: [BigIconCardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsBigIconCardModule, imports: [CommonModule, EdsLinksModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsBigIconCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BigIconCardComponent],
                    imports: [CommonModule, EdsLinksModule],
                    exports: [BigIconCardComponent],
                }]
        }] });

class ButtonGroupComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        this.isPrimaryFirst = false;
        this.primaryText = '';
        this.primaryExtraTwClasses = '';
        this.isPrimaryDisabled = false;
        this.secondaryText = '';
        this.secondaryExtraTwClasses = '';
        this.isSecondaryDisabled = false;
        this.tertiaryText = '';
        this.tertiaryExtraTwClasses = '';
        this.helperText = '';
        this.helperExtraTwClasses = '';
        this.size = '2xs';
        this.primaryClick = new EventEmitter();
        this.secondaryClick = new EventEmitter();
        this.tertiaryClick = new EventEmitter();
    }
    handlePrimaryClick(event) {
        this.primaryClick.emit(event);
    }
    handleSecondaryClick(event) {
        this.secondaryClick.emit(event);
    }
    handleTertiaryClick(event) {
        this.tertiaryClick.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ButtonGroupComponent, selector: "eds-button-group", inputs: { isPrimaryFirst: "isPrimaryFirst", primaryText: "primaryText", primaryExtraTwClasses: "primaryExtraTwClasses", isPrimaryDisabled: "isPrimaryDisabled", secondaryText: "secondaryText", secondaryExtraTwClasses: "secondaryExtraTwClasses", isSecondaryDisabled: "isSecondaryDisabled", tertiaryText: "tertiaryText", tertiaryExtraTwClasses: "tertiaryExtraTwClasses", helperText: "helperText", helperExtraTwClasses: "helperExtraTwClasses", size: "size" }, outputs: { primaryClick: "primaryClick", secondaryClick: "secondaryClick", tertiaryClick: "tertiaryClick" }, usesInheritance: true, ngImport: i0, template: "<div class=\"flex flex-col items-center w-full max-w-xs mx-auto {{extraTwClasses}}\"\n\t [ngClass]=\"{'': isDisabled}\"\n\t role=\"group\"\n\t aria-labelledby=\"button-group\">\n\n\t<div class=\"flex justify-center gap-12 w-full {{isPrimaryFirst ? 'flex-row' : 'flex-row-reverse'}}\">\n\t\t<div *ngIf=\"primaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button type=\"primary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t(buttonClick)=\"handlePrimaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isPrimaryDisabled\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{primaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{primaryText}}\"></eds-button>\n\t\t</div>\n\t\t<div *ngIf=\"secondaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button (buttonClick)=\"handleSecondaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isSecondaryDisabled\"\n\t\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{secondaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{secondaryText}}\"></eds-button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"helperText\"\n\t\t class=\"text-center  mt-16 {{helperExtraTwClasses}}\">\n\t\t{{helperText}}\n\t</div>\n\t<div *ngIf=\"tertiaryText\"\n\t\t class=\"flex justify-center {{helperText ? 'mt-2' : 'mt-6'}}\">\n\t\t<eds-button type=\"flat\"\n\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t(buttonClick)=\"handleTertiaryClick($event)\"\n\t\t\t\t\textraTwClasses=\"btn-underline btn-md {{tertiaryExtraTwClasses}}\"\n\t\t\t\t\ttext=\"{{tertiaryText}}\"></eds-button>\n\t</div>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "eds-button" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-button-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-col items-center w-full max-w-xs mx-auto {{extraTwClasses}}\"\n\t [ngClass]=\"{'': isDisabled}\"\n\t role=\"group\"\n\t aria-labelledby=\"button-group\">\n\n\t<div class=\"flex justify-center gap-12 w-full {{isPrimaryFirst ? 'flex-row' : 'flex-row-reverse'}}\">\n\t\t<div *ngIf=\"primaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button type=\"primary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t(buttonClick)=\"handlePrimaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isPrimaryDisabled\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{primaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{primaryText}}\"></eds-button>\n\t\t</div>\n\t\t<div *ngIf=\"secondaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button (buttonClick)=\"handleSecondaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isSecondaryDisabled\"\n\t\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{secondaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{secondaryText}}\"></eds-button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"helperText\"\n\t\t class=\"text-center  mt-16 {{helperExtraTwClasses}}\">\n\t\t{{helperText}}\n\t</div>\n\t<div *ngIf=\"tertiaryText\"\n\t\t class=\"flex justify-center {{helperText ? 'mt-2' : 'mt-6'}}\">\n\t\t<eds-button type=\"flat\"\n\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t(buttonClick)=\"handleTertiaryClick($event)\"\n\t\t\t\t\textraTwClasses=\"btn-underline btn-md {{tertiaryExtraTwClasses}}\"\n\t\t\t\t\ttext=\"{{tertiaryText}}\"></eds-button>\n\t</div>\n</div>" }]
        }], propDecorators: { isPrimaryFirst: [{
                type: Input
            }], primaryText: [{
                type: Input
            }], primaryExtraTwClasses: [{
                type: Input
            }], isPrimaryDisabled: [{
                type: Input
            }], secondaryText: [{
                type: Input
            }], secondaryExtraTwClasses: [{
                type: Input
            }], isSecondaryDisabled: [{
                type: Input
            }], tertiaryText: [{
                type: Input
            }], tertiaryExtraTwClasses: [{
                type: Input
            }], helperText: [{
                type: Input
            }], helperExtraTwClasses: [{
                type: Input
            }], size: [{
                type: Input
            }], primaryClick: [{
                type: Output
            }], secondaryClick: [{
                type: Output
            }], tertiaryClick: [{
                type: Output
            }] } });

class EdsButtonGroupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonGroupModule, declarations: [ButtonGroupComponent], imports: [CommonModule, EdsButtonsModule], exports: [ButtonGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonGroupModule, imports: [CommonModule, EdsButtonsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonGroupComponent],
                    imports: [CommonModule, EdsButtonsModule],
                    exports: [ButtonGroupComponent],
                }]
        }] });

/**
 * To display money
 *
 * @export
 * @class FeaturedMoneyComponent
 * @typedef {FeaturedMoneyComponent}
 * @extends {BaseInputs}
 */
class FeaturedMoneyComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Text color
         *
         * @type {string}
         */
        this.twTextColor = 'text-blue';
        /**
         * Text sizes
         *
         * @type {TextSize}
         */
        this.textSize = '2xl';
        /**
         * Description placeholder
         *
         * @private
         * @type {string}
         */
        this._dollarAmount = '0';
        /**
         * Description placeholder
         *
         * @private
         * @type {string}
         */
        this._centsAmount = '00';
    }
    /**
     * Amount to display
     *
     * @type {string}
     */
    set amount(amount) {
        const textArray = amount.split('.');
        if (textArray.length > 1) {
            this._dollarAmount = textArray[0];
            const cents = textArray[1];
            this._centsAmount = cents.length > 1 ? cents : `${cents}0`;
        }
        else {
            const nMoney = amount;
            if (+nMoney > 0) {
                this._dollarAmount = nMoney;
                this._centsAmount = '00';
            }
        }
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get ariaLabel() {
        return `${this.dollarAmount} dollars and ${this.centsAmount} cents`;
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get dollarAmount() {
        return this._dollarAmount;
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get centsAmount() {
        return this._centsAmount;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FeaturedMoneyComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: FeaturedMoneyComponent, selector: "eds-featured-money", inputs: { twTextColor: "twTextColor", textSize: "textSize", amount: "amount" }, usesInheritance: true, ngImport: i0, template: "<span class=\"block text-{{textSize}}-fixed {{twTextColor}} {{extraTwClasses}}\"\n      [attr.aria-label]=\"ariaLabel\">\n  <sup>$</sup>{{dollarAmount | number}}<sup>.{{centsAmount}}</sup>\n</span>", dependencies: [{ kind: "pipe", type: i1.DecimalPipe, name: "number" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FeaturedMoneyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-featured-money', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"block text-{{textSize}}-fixed {{twTextColor}} {{extraTwClasses}}\"\n      [attr.aria-label]=\"ariaLabel\">\n  <sup>$</sup>{{dollarAmount | number}}<sup>.{{centsAmount}}</sup>\n</span>" }]
        }], propDecorators: { twTextColor: [{
                type: Input
            }], textSize: [{
                type: Input
            }], amount: [{
                type: Input
            }] } });

class EdsFeaturedMoneyModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsFeaturedMoneyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsFeaturedMoneyModule, declarations: [FeaturedMoneyComponent], imports: [CommonModule], exports: [FeaturedMoneyComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsFeaturedMoneyModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsFeaturedMoneyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [FeaturedMoneyComponent],
                    exports: [FeaturedMoneyComponent],
                }]
        }] });

const DEFAULT_IMG_URL = 'https://www.duke-energy.com/_/media/images/electronds/hero/hero-business-solar.jpg?w=800&as=1&bc=ffffff';
const DEFAULT_IMG_ALT = 'An image of solar panels on a roof';

class HeroComponent {
    constructor() {
        /**
         * Url for background image
         *
         * @type {string}
         */
        /**
         * Image data
         *
         * @type {ImageMeta}
         */
        this.imageData = {
            src: DEFAULT_IMG_URL,
            altText: DEFAULT_IMG_ALT,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: HeroComponent, selector: "eds-hero", inputs: { title: "title", description: "description", imageData: "imageData", primaryBtnLabel: "primaryBtnLabel", primaryBtnLink: "primaryBtnLink", secondaryBtnLabel: "secondaryBtnLabel", secondaryBtnLink: "secondaryBtnLink" }, ngImport: i0, template: "<section class=\"relative 2xl:px-24 2xl:pt-24\">\n  <div\n       class=\"relative container-5xl flex flex-col justify-center aspect-16/12 sm:aspect-16/9 md:aspect-16/7 lg:aspect-16/6 xl:aspect-16/5 px-24 sm:px-32 md:px-48 py-64 md:py-48\">\n\n    <img class=\"absolute top-0 left-0 object-cover object-right w-full h-full 2xl:rounded-lg bg-gray-light\"\n         [src]=\"imageData.src\"\n         [srcset]=\"imageData.src + '800w, ' + imageData.src + ' 1600w'\"\n         sizes=\"(min-width: 768px) 1600px, 800px\"\n         [alt]=\"imageData.altText\"\n         width=\"1600\"\n         height=\"500\"\n         loading=\"lazy\">\n\n    <div class=\"absolute top-0 left-0 h-full w-full md:w-3/4 2xl:rounded-l-lg bg-gradient-to-tr md:bg-gradient-to-r from-blue-dark to-green-dark md:to-transparent md:via-green-dark opacity-80\"\n         aria-hidden=\"true\"></div>\n\n    <div class=\"relative w-full container-xs md:container-4xl\">\n\n      <div class=\"w-full md:w-1/2 text-white text-center md:text-left\">\n        <h2 class=\"text-3xl md:text-2xl-fixed xl:text-3xl\"\n            id=\"hero-title\">\n          {{title}}\n        </h2>\n        <p class=\"text-lg xl:text-xl mt-12 lg:mt-16\">\n          {{description}}\n        </p>\n        <div *ngIf=\"primaryBtnLabel || secondaryBtnLabel\"\n             class=\"container-2xs sm:container-none flex flex-col sm:flex-row sm:justify-center md:justify-start gap-16 lg:gap-24 mt-16 lg:mt-24\">\n          <a *ngIf=\"primaryBtnLabel\"\n             class=\"btn btn-primary-reversed btn-md\"\n             [href]=\"primaryBtnLink\"\n             id=\"hero-cta\"\n             aria-labelledby=\"hero-cta\">\n            {{primaryBtnLabel}}\n          </a>\n          <a *ngIf=\"secondaryBtnLabel\"\n             class=\"btn btn-secondary-reversed btn-md\"\n             [href]=\"secondaryBtnLink\"\n             id=\"hero-cta2\"\n             aria-labelledby=\"hero-cta2\">\n            {{secondaryBtnLabel}}\n          </a>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-hero', template: "<section class=\"relative 2xl:px-24 2xl:pt-24\">\n  <div\n       class=\"relative container-5xl flex flex-col justify-center aspect-16/12 sm:aspect-16/9 md:aspect-16/7 lg:aspect-16/6 xl:aspect-16/5 px-24 sm:px-32 md:px-48 py-64 md:py-48\">\n\n    <img class=\"absolute top-0 left-0 object-cover object-right w-full h-full 2xl:rounded-lg bg-gray-light\"\n         [src]=\"imageData.src\"\n         [srcset]=\"imageData.src + '800w, ' + imageData.src + ' 1600w'\"\n         sizes=\"(min-width: 768px) 1600px, 800px\"\n         [alt]=\"imageData.altText\"\n         width=\"1600\"\n         height=\"500\"\n         loading=\"lazy\">\n\n    <div class=\"absolute top-0 left-0 h-full w-full md:w-3/4 2xl:rounded-l-lg bg-gradient-to-tr md:bg-gradient-to-r from-blue-dark to-green-dark md:to-transparent md:via-green-dark opacity-80\"\n         aria-hidden=\"true\"></div>\n\n    <div class=\"relative w-full container-xs md:container-4xl\">\n\n      <div class=\"w-full md:w-1/2 text-white text-center md:text-left\">\n        <h2 class=\"text-3xl md:text-2xl-fixed xl:text-3xl\"\n            id=\"hero-title\">\n          {{title}}\n        </h2>\n        <p class=\"text-lg xl:text-xl mt-12 lg:mt-16\">\n          {{description}}\n        </p>\n        <div *ngIf=\"primaryBtnLabel || secondaryBtnLabel\"\n             class=\"container-2xs sm:container-none flex flex-col sm:flex-row sm:justify-center md:justify-start gap-16 lg:gap-24 mt-16 lg:mt-24\">\n          <a *ngIf=\"primaryBtnLabel\"\n             class=\"btn btn-primary-reversed btn-md\"\n             [href]=\"primaryBtnLink\"\n             id=\"hero-cta\"\n             aria-labelledby=\"hero-cta\">\n            {{primaryBtnLabel}}\n          </a>\n          <a *ngIf=\"secondaryBtnLabel\"\n             class=\"btn btn-secondary-reversed btn-md\"\n             [href]=\"secondaryBtnLink\"\n             id=\"hero-cta2\"\n             aria-labelledby=\"hero-cta2\">\n            {{secondaryBtnLabel}}\n          </a>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>" }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], imageData: [{
                type: Input
            }], primaryBtnLabel: [{
                type: Input
            }], primaryBtnLink: [{
                type: Input
            }], secondaryBtnLabel: [{
                type: Input
            }], secondaryBtnLink: [{
                type: Input
            }] } });

class EdsHeroModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsHeroModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsHeroModule, declarations: [HeroComponent], imports: [CommonModule], exports: [HeroComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsHeroModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsHeroModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [HeroComponent],
                    exports: [HeroComponent],
                }]
        }] });

/**
 * Base class for Banners
 *
 * @export
 * @class BannerBase
 * @typedef {BannerBase}
 * @extends {BaseInputs}
 */
class BannerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Link URL / Route
         *
         * @type {string}
         */
        this.link = '';
        /**
         * Link text to be displayed
         *
         * @type {string}
         */
        this.linkText = '';
        /**
         * @private
         * @type {string}
         */
        this._icon = '';
        /**
         * @private
         * @type {string}
         */
        this._color = '';
        /**
         * @private
         * @type {string}
         */
        this._borderColor = '';
    }
    /**
     * Determines what banner is shown
     *
     * @type {BannerType}
     */
    set status(status) {
        {
            switch (status) {
                case 'error':
                    this._icon = 'components/assets/icons/error-solid.svg';
                    this._color = 'red';
                    this._borderColor = 'border-red';
                    break;
                case 'success':
                    this._icon = 'components/assets/icons/success-solid.svg';
                    this._color = 'green-dark';
                    this._borderColor = 'border-green-dark';
                    break;
                case 'warn':
                    this._icon = 'components/assets/icons/warning-solid.svg';
                    this._color = 'yellow-dark';
                    this._borderColor = 'border-yellow-dark';
                    break;
                case 'info':
                default:
                    this._icon = 'components/assets/icons/information-solid.svg';
                    this._color = 'gray-darker';
                    this._borderColor = 'border-gray-darker';
            }
        }
    }
    /**
     * @readonly
     * @type {string}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @readonly
     * @type {string}
     */
    get color() {
        return this._color;
    }
    /**
     * @readonly
     * @type {string}
     */
    get borderColor() {
        return this._borderColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BannerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: BannerBase, inputs: { link: "link", linkText: "linkText", status: "status" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BannerBase, decorators: [{
            type: Directive
        }], propDecorators: { link: [{
                type: Input
            }], linkText: [{
                type: Input
            }], status: [{
                type: Input
            }] } });

/**
 * Banner to display (cannot be dismissed by user)
 *
 * @export
 * @class InlineBannerComponent
 * @typedef {InlineBannerComponent}
 * @extends {BannerBase}
 */
class InlineBannerComponent extends BannerBase {
    constructor() {
        super(...arguments);
        /**
         * Message/text to display on banner
         *
         * @type {string}
         */
        this.message = '';
        /**
         * Action text, look and feel of a link
         *
         * @type {string}
         */
        this.actionText = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InlineBannerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: InlineBannerComponent, selector: "eds-inline-banner", inputs: { message: "message", actionText: "actionText", actionFn: "actionFn" }, usesInheritance: true, ngImport: i0, template: "<div class=\"container-xl relative flex rounded-md border {{borderColor}} bg-{{color}} {{extraTwClasses}}\">\n  <div class=\"px-16 py-12 rounded-tl-md rounded-bl-md\">\n    <img [src]=\"icon\"\n         class=\"icon-24 text-{{color}}\"\n         alt=\"\" />\n  </div>\n  <div class=\"rich-text px-16 py-12 rounded-br-md rounded-tr-md w-full bg-white\">\n    {{message}}\n    <a *ngIf=\"link !== ''\"\n       href=\"{{link}}\">{{linkText}}</a>\n    <a *ngIf=\"actionText !== ''\"\n       (click)=\"actionFn()\"\n       href=\"javascript:void(0)\">{{actionText}}</a>\n  </div>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InlineBannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-inline-banner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-xl relative flex rounded-md border {{borderColor}} bg-{{color}} {{extraTwClasses}}\">\n  <div class=\"px-16 py-12 rounded-tl-md rounded-bl-md\">\n    <img [src]=\"icon\"\n         class=\"icon-24 text-{{color}}\"\n         alt=\"\" />\n  </div>\n  <div class=\"rich-text px-16 py-12 rounded-br-md rounded-tr-md w-full bg-white\">\n    {{message}}\n    <a *ngIf=\"link !== ''\"\n       href=\"{{link}}\">{{linkText}}</a>\n    <a *ngIf=\"actionText !== ''\"\n       (click)=\"actionFn()\"\n       href=\"javascript:void(0)\">{{actionText}}</a>\n  </div>\n</div>" }]
        }], propDecorators: { message: [{
                type: Input
            }], actionText: [{
                type: Input
            }], actionFn: [{
                type: Input
            }] } });

/**
 * Banner to display with list of items (cannot be dismissed by user)
 *
 * @export
 * @class InlineListBannerComponent
 * @typedef {InlineListBannerComponent}
 * @extends {BannerBase}
 */
class InlineListBannerComponent extends BannerBase {
    constructor() {
        super(...arguments);
        /**
         * Main title of the banner
         *
         * @type {string}
         */
        this.title = '';
        /**
         * List of messages/texts to display
         *
         * @type {string[]}
         */
        this.messages = new Array();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InlineListBannerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: InlineListBannerComponent, selector: "eds-inline-list-banner", inputs: { title: "title", messages: "messages" }, usesInheritance: true, ngImport: i0, template: "<div class=\"container-xl relative flex rounded-md border {{borderColor}} bg-{{color}} {{extraTwClasses}}\">\n    <div class=\"px-16 py-12 rounded-tl-md rounded-bl-md\">\n        <img [src]=\"icon\"\n             class=\"icon-24 text-{{color}}\" />\n    </div>\n    <div class=\"rich-text font-bold px-16 py-12 rounded-br-md rounded-tr-md w-full bg-white\">\n        {{title}}\n        <a *ngIf=\"link !== ''\"\n           href=\"{{link}}\">{{linkText}}</a>\n        <ul class=\"mt-8 font-normal\">\n            <li *ngFor=\"let msg of messages\"\n                class=\"my-4 before:left-8\">{{msg}}</li>\n        </ul>\n    </div>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InlineListBannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-inline-list-banner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-xl relative flex rounded-md border {{borderColor}} bg-{{color}} {{extraTwClasses}}\">\n    <div class=\"px-16 py-12 rounded-tl-md rounded-bl-md\">\n        <img [src]=\"icon\"\n             class=\"icon-24 text-{{color}}\" />\n    </div>\n    <div class=\"rich-text font-bold px-16 py-12 rounded-br-md rounded-tr-md w-full bg-white\">\n        {{title}}\n        <a *ngIf=\"link !== ''\"\n           href=\"{{link}}\">{{linkText}}</a>\n        <ul class=\"mt-8 font-normal\">\n            <li *ngFor=\"let msg of messages\"\n                class=\"my-4 before:left-8\">{{msg}}</li>\n        </ul>\n    </div>\n</div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], messages: [{
                type: Input
            }] } });

class EdsInlineBannersModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInlineBannersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsInlineBannersModule, declarations: [InlineBannerComponent, InlineListBannerComponent], imports: [CommonModule], exports: [InlineBannerComponent, InlineListBannerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInlineBannersModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInlineBannersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InlineBannerComponent, InlineListBannerComponent],
                    imports: [CommonModule],
                    exports: [InlineBannerComponent, InlineListBannerComponent],
                }]
        }] });

/**
 * Tooltip for additional information
 *
 * @export
 * @class TooltipComponent
 * @typedef {TooltipComponent}
 * @extends {BaseInputs}
 */
class TooltipComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Title (optional, if not supplied will be icon only)
         *
         * @type {string}
         */
        this.title = '';
        /**
         * Text to display when tooltip opens
         *
         * @type {string}
         */
        this.tooltipText = '';
        /**
         * @private
         * @type {string}
         */
        this._titleColor = 'text-gray-darker';
        /**
         * @private
         * @type {string}
         */
        this._ttTextClass = 'text-white bg-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._svgClass = 'text-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgFill = 'fill-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._buttonClass = 'flex-row items-center';
        /**
         * @private
         * @type {string}
         */
        this._ttClass = 'flex-row items-center right-0 mr-16 group-hover:mr-24 group-focus:mr-24';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgClass = 'my-16 w-12';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgDPath = 'M0 0l16 11.56L0 24V0z';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgViewBox = '0 0 16 24';
    }
    /**
     * Whether the tooltip is on a darkbackground, will change the font color
     *
     * @type {boolean}
     */
    set onDarkBackground(darkBg) {
        this.makeColors(darkBg);
    }
    /**
     * Direction to open tooltip text
     *
     * @type {OpenDirections}
     */
    set openDirection(direction) {
        this.makeClasses(direction);
    }
    /**
     * @readonly
     * @type {string}
     */
    get titleColor() {
        return this._titleColor;
    }
    /**
     * @readonly
     * @type {string}
     */
    get buttonClass() {
        return this._buttonClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get svgClass() {
        return this._svgClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipClass() {
        return this._ttClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgFill() {
        return this._ttSvgFill;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipTextClass() {
        return this._ttTextClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgClass() {
        return this._ttSvgClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgDPath() {
        return this._ttSvgDPath;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgViewBox() {
        return this._ttSvgViewBox;
    }
    /**
     * @readonly
     * @type {string}
     */
    get pathData() {
        return 'm32,0c17.673,0,32,14.327,32,32s-14.327,32-32,32S0,49.673,0,32,14.327,0,32,0Zm0,2.526C15.722,2.526,2.526,15.722,2.526,32s13.196,29.474,29.474,29.474,29.474-13.196,29.474-29.474S48.278,2.526,32,2.526Zm1.701,22.765c2.165,0,3.921,1.755,3.921,3.921h0v19.92c0,2.165-1.756,3.92-3.921,3.921h-2.236c-2.165,0-3.92-1.756-3.921-3.921v-19.92c0-2.165,1.755-3.921,3.921-3.921h2.236Zm-1.128-13.501c2.783,0,5.039,2.256,5.039,5.039h0v.118c0,2.783-2.256,5.039-5.039,5.039s-5.039-2.256-5.039-5.039h0v-.118c0-2.783,2.256-5.039,5.039-5.039h0Z';
    }
    /**
     * @private
     * @param {boolean} darkBg
     */
    makeColors(darkBg) {
        this._titleColor = darkBg ? 'text-white' : 'text-gray-darker';
        this._svgClass = darkBg ? 'text-white' : 'text-teal-darker';
        this._ttSvgFill = darkBg ? 'fill-white ' : 'fill-teal-darker';
        this._ttTextClass = darkBg ? 'text-gray-darker bg-white' : 'text-white bg-teal-darker';
    }
    /**
     * @private
     * @param {Placement} direction
     */
    makeClasses(direction) {
        switch (direction) {
            case 'top':
                this._buttonClass = 'flex-col items-start';
                this._ttClass = 'flex-col items-start bottom-0 -mx-16 mb-16 group-hover:mb-24 group-focus:mb-24';
                this._ttSvgClass = 'mx-16 h-12';
                this._ttSvgDPath = 'M0 0l11.56 16L24 0H0z';
                this._ttSvgViewBox = '0 0 24 16';
                break;
            case 'right':
                this._buttonClass = 'flex-row items-center';
                this._ttClass = 'flex-row-reverse items-center left-0 ml-16 group-hover:ml-24 group-focus:ml-24';
                this._ttSvgClass = 'my-16 w-12';
                this._ttSvgDPath = 'M16 24L0 12.44 16 0v24z';
                this._ttSvgViewBox = '0 0 16 24';
                break;
            case 'bottom':
                this._buttonClass = 'flex-col items-center';
                this._ttClass = 'flex-col-reverse items-center top-0 -mx-16 mt-16 group-hover:mt-24 group-focus:mt-24';
                this._ttSvgClass = 'mx-16 h-12';
                this._ttSvgDPath = 'M0 16L11.56 0 24 16H0z';
                this._ttSvgViewBox = '0 0 24 16';
                break;
            case 'left':
            default:
                this._buttonClass = 'flex-row items-center';
                this._ttClass = 'flex-row items-center right-0 mr-16 group-hover:mr-24 group-focus:mr-24';
                this._ttSvgClass = 'my-16 w-12';
                this._ttSvgDPath = 'M0 0l16 11.56L0 24V0z';
                this._ttSvgViewBox = '0 0 16 24';
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TooltipComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: TooltipComponent, selector: "eds-tooltip", inputs: { title: "title", tooltipText: "tooltipText", onDarkBackground: "onDarkBackground", openDirection: "openDirection" }, usesInheritance: true, ngImport: i0, template: "<div class=\"text-center {{extraTwClasses}}\">\n    <span class=\"block text-sm {{titleColor}}\">{{title}}</span>\n    <button class=\"relative inline-flex cursor-default group -m-2 p-2 rounded-md {{svgClass}} {{buttonClass}}\"\n            type=\"button\"\n            aria-labelledby=\"\">\n\n        <svg class=\"fill-current flex-none icon-18 {{svgClass}}\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 64 64\"\n             aria-hidden=\"true\"\n             focusable=\"false\">\n            <path [attr.d]=\"pathData\" />\n        </svg>\n\n        <div class=\"absolute z-tooltip flex w-256 filter drop-shadow-md invisible \n                    group-hover:visible group-focus:visible \n                    opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all delay-200 \n                    {{tooltipClass}}\">\n            <div class=\"rich-text text-left flex-1 p-16 rounded-md {{tooltipTextClass}}\">\n                {{tooltipText}}\n            </div>\n            <svg class=\"{{tooltipSvgFill}} flex-shrink-0 {{svgClass}} {{tooltipSvgClass}}\"\n                 xmlns=\"http://www.w3.org/2000/svg\"\n                 [attr.viewBox]=\"tooltipSvgViewBox\"\n                 aria-hidden=\"true\"\n                 focusable=\"false\">\n                <path [attr.d]=\"tooltipSvgDPath\"></path>\n            </svg>\n        </div>\n    </button>\n</div>", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"text-center {{extraTwClasses}}\">\n    <span class=\"block text-sm {{titleColor}}\">{{title}}</span>\n    <button class=\"relative inline-flex cursor-default group -m-2 p-2 rounded-md {{svgClass}} {{buttonClass}}\"\n            type=\"button\"\n            aria-labelledby=\"\">\n\n        <svg class=\"fill-current flex-none icon-18 {{svgClass}}\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 64 64\"\n             aria-hidden=\"true\"\n             focusable=\"false\">\n            <path [attr.d]=\"pathData\" />\n        </svg>\n\n        <div class=\"absolute z-tooltip flex w-256 filter drop-shadow-md invisible \n                    group-hover:visible group-focus:visible \n                    opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all delay-200 \n                    {{tooltipClass}}\">\n            <div class=\"rich-text text-left flex-1 p-16 rounded-md {{tooltipTextClass}}\">\n                {{tooltipText}}\n            </div>\n            <svg class=\"{{tooltipSvgFill}} flex-shrink-0 {{svgClass}} {{tooltipSvgClass}}\"\n                 xmlns=\"http://www.w3.org/2000/svg\"\n                 [attr.viewBox]=\"tooltipSvgViewBox\"\n                 aria-hidden=\"true\"\n                 focusable=\"false\">\n                <path [attr.d]=\"tooltipSvgDPath\"></path>\n            </svg>\n        </div>\n    </button>\n</div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], tooltipText: [{
                type: Input
            }], onDarkBackground: [{
                type: Input
            }], openDirection: [{
                type: Input
            }] } });

class EdsTooltipModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsTooltipModule, declarations: [TooltipComponent], imports: [CommonModule], exports: [TooltipComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTooltipModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipComponent],
                    imports: [CommonModule],
                    exports: [TooltipComponent],
                }]
        }] });

class AccountSummaryComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        this.date = '';
        this.amount = '';
        this.PayNowClick = new EventEmitter();
        this.ViewBillClick = new EventEmitter();
        this._accountColor = 'bg-red';
    }
    set accountStanding(standing) {
        this._accountColor = standing === 'good' ? 'bg-blue' : 'bg-red';
    }
    getAccountColor() {
        return this._accountColor;
    }
    handlePayNowClick(event) {
        this.PayNowClick.emit(event);
    }
    handleViewBillClick(event) {
        this.ViewBillClick.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccountSummaryComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: AccountSummaryComponent, selector: "eds-account-summary", inputs: { date: "date", amount: "amount", accountStanding: "accountStanding" }, outputs: { PayNowClick: "PayNowClick", ViewBillClick: "ViewBillClick" }, usesInheritance: true, ngImport: i0, template: "<div class=\"max-w-xl px-16 py-48 {{getAccountColor()}} text-center text-white {{extraTwClasses}}\">\n  <h3>\n    <eds-featured-money\n      amount=\"{{amount}}\"\n      textSize=\"3xl\"\n      twTextColor=\"text-white\"\n    ></eds-featured-money>\n  </h3>\n  <p class=\"mt-24 flex justify-center\">Due {{date}}</p>\n  <p>\n    <eds-button\n      type=\"primary\"\n      text=\"Pay Now\"\n      [isReversed]=\"true\"\n      extraTwClasses=\"btn-full mt-24\"\n      size=\"lg\"\n      (buttonClick)=\"handlePayNowClick($event)\"\n    ></eds-button>\n  </p>\n  <p>\n    <eds-button\n      text=\"View Bill\"\n      type=\"tertiary\"\n      [isUnderlined]=\"true\"\n      extraTwClasses=\"text-white hover:no-underline hover:bg-transparent hover:text-white mt-24 md:mt-32\"\n      (buttonClick)=\"handleViewBillClick($event)\"\n    ></eds-button>\n  </p>\n</div>\n", dependencies: [{ kind: "component", type: ButtonComponent, selector: "eds-button" }, { kind: "component", type: FeaturedMoneyComponent, selector: "eds-featured-money", inputs: ["twTextColor", "textSize", "amount"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccountSummaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-account-summary', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"max-w-xl px-16 py-48 {{getAccountColor()}} text-center text-white {{extraTwClasses}}\">\n  <h3>\n    <eds-featured-money\n      amount=\"{{amount}}\"\n      textSize=\"3xl\"\n      twTextColor=\"text-white\"\n    ></eds-featured-money>\n  </h3>\n  <p class=\"mt-24 flex justify-center\">Due {{date}}</p>\n  <p>\n    <eds-button\n      type=\"primary\"\n      text=\"Pay Now\"\n      [isReversed]=\"true\"\n      extraTwClasses=\"btn-full mt-24\"\n      size=\"lg\"\n      (buttonClick)=\"handlePayNowClick($event)\"\n    ></eds-button>\n  </p>\n  <p>\n    <eds-button\n      text=\"View Bill\"\n      type=\"tertiary\"\n      [isUnderlined]=\"true\"\n      extraTwClasses=\"text-white hover:no-underline hover:bg-transparent hover:text-white mt-24 md:mt-32\"\n      (buttonClick)=\"handleViewBillClick($event)\"\n    ></eds-button>\n  </p>\n</div>\n" }]
        }], propDecorators: { date: [{
                type: Input
            }], amount: [{
                type: Input
            }], accountStanding: [{
                type: Input
            }], PayNowClick: [{
                type: Output
            }], ViewBillClick: [{
                type: Output
            }] } });

class EdsAccountSummaryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccountSummaryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsAccountSummaryModule, declarations: [AccountSummaryComponent], imports: [CommonModule, EdsButtonsModule, EdsFeaturedMoneyModule], exports: [AccountSummaryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccountSummaryModule, imports: [CommonModule, EdsButtonsModule, EdsFeaturedMoneyModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccountSummaryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccountSummaryComponent],
                    imports: [CommonModule, EdsButtonsModule, EdsFeaturedMoneyModule],
                    exports: [AccountSummaryComponent],
                }]
        }] });

/**
 * Accordion component
 *
 * @export
 * @class AccordionComponent
 * @typedef {AccordionComponent}
 * @extends {BaseInputs}
 */
class AccordionComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * @private
         * @type {AccordionItem[]}
         */
        this._items = new Array();
    }
    /**
     * Array of ContentModel
     *
     * @type {ContentModel[]}
     */
    set items(items) {
        if (items) {
            this._items = [
                ...items.map((item, i) => ({
                    id: i,
                    isExpanded: false,
                    content: { ...item },
                })),
            ];
        }
    }
    /**
     * Returns items from input
     *
     * @public
     * @returns {AccordionItem[]}
     */
    getItems() {
        return this._items ?? new Array();
    }
    /**
     * Checks if accordion item is expanded
     *
     * @public
     * @param {AccordionItem} item
     * @returns {boolean}
     */
    expanded(item) {
        return item.isExpanded ?? false;
    }
    /**
     * Toggles expansion of accordion item
     *
     * @public
     * @param {AccordionItem} item
     */
    toggleExpansion(item) {
        item.isExpanded = !item.isExpanded;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccordionComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: AccordionComponent, selector: "eds-accordion", inputs: { items: "items" }, usesInheritance: true, ngImport: i0, template: "<div class=\"container-4xl -mx-16 sm:mx-auto {{extraTwClasses}}\">\n  <ul class=\"divide-y divide-gray\">\n    <li *ngFor=\"let item of getItems(), let i=index\">\n      <div>\n        <button class=\"flex items-center justify-between w-full p-16 md:py-24 text-xl text-teal-darker text-left hover:bg-teal-lighter transition-colors duration-200\"\n                type=\"button\"\n                (click)=\"toggleExpansion(item)\"\n                [attr.aria-expanded]=\"expanded(item)\"\n                [attr.aria-controls]=\"'accordion-content-' + i+1\"\n                [id]=\"'accordion-question-' + i+1\">\n\n          {{item.content.title}}\n\n          <svg class=\"icon-16 md:icon-20 flex-shrink-0 ml-24 md:ml-32 transform duration-300\"\n               [ngClass]=\"{'scale-y-flip': expanded(item), '': !expanded(item)}\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               viewBox=\"0 0 64 64\"\n               fill=\"currentColor\"\n               aria-hidden=\"true\"\n               focusable=\"false\">\n            <path\n                  d=\"M57.404,16.997c1.634-1.441,4.123-1.304,5.588,.308,1.442,1.59,1.323,4.048-.268,5.491-.015,.013-.029,.026-.044,.039l-27.307,24.169c-1.479,1.304-3.688,1.332-5.199,.067L1.397,22.905c-1.649-1.376-1.869-3.828-.493-5.476,.012-.015,.025-.029,.037-.044,1.424-1.65,3.908-1.851,5.578-.451l26.148,21.956,24.737-21.893Z\" />\n          </svg>\n        </button>\n      </div>\n      <div class=\"grid relative px-16 transition-all duration-300\"\n           [ngClass]=\"{'grid-rows-1fr': expanded(item), 'grid-rows-0fr': !expanded(item)}\"\n           [id]=\"'accordion-content-' + i+1\"\n           [attr.aria-hidden]=\"!expanded(item)\"\n           [attr.aria-labelledby]=\"'accordion-question-' + i+1\">\n        <div [ngClass]=\"{'opacity-100 translate-y-0': expanded(item), 'opacity-0 -translate-y-12': !expanded(item)}\"\n             class=\"overflow-hidden transform transition-all duration-500\">\n          <p class=\"mb-28\"\n             *ngIf=\"item.content.contentText\">\n            {{item.content.contentText}}\n          </p>\n          <ng-container *ngIf=\"item.content.contentTemplate\"\n                        [ngTemplateOutlet]=\"item.content.contentTemplate\">\n\n          </ng-container>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-accordion', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-4xl -mx-16 sm:mx-auto {{extraTwClasses}}\">\n  <ul class=\"divide-y divide-gray\">\n    <li *ngFor=\"let item of getItems(), let i=index\">\n      <div>\n        <button class=\"flex items-center justify-between w-full p-16 md:py-24 text-xl text-teal-darker text-left hover:bg-teal-lighter transition-colors duration-200\"\n                type=\"button\"\n                (click)=\"toggleExpansion(item)\"\n                [attr.aria-expanded]=\"expanded(item)\"\n                [attr.aria-controls]=\"'accordion-content-' + i+1\"\n                [id]=\"'accordion-question-' + i+1\">\n\n          {{item.content.title}}\n\n          <svg class=\"icon-16 md:icon-20 flex-shrink-0 ml-24 md:ml-32 transform duration-300\"\n               [ngClass]=\"{'scale-y-flip': expanded(item), '': !expanded(item)}\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               viewBox=\"0 0 64 64\"\n               fill=\"currentColor\"\n               aria-hidden=\"true\"\n               focusable=\"false\">\n            <path\n                  d=\"M57.404,16.997c1.634-1.441,4.123-1.304,5.588,.308,1.442,1.59,1.323,4.048-.268,5.491-.015,.013-.029,.026-.044,.039l-27.307,24.169c-1.479,1.304-3.688,1.332-5.199,.067L1.397,22.905c-1.649-1.376-1.869-3.828-.493-5.476,.012-.015,.025-.029,.037-.044,1.424-1.65,3.908-1.851,5.578-.451l26.148,21.956,24.737-21.893Z\" />\n          </svg>\n        </button>\n      </div>\n      <div class=\"grid relative px-16 transition-all duration-300\"\n           [ngClass]=\"{'grid-rows-1fr': expanded(item), 'grid-rows-0fr': !expanded(item)}\"\n           [id]=\"'accordion-content-' + i+1\"\n           [attr.aria-hidden]=\"!expanded(item)\"\n           [attr.aria-labelledby]=\"'accordion-question-' + i+1\">\n        <div [ngClass]=\"{'opacity-100 translate-y-0': expanded(item), 'opacity-0 -translate-y-12': !expanded(item)}\"\n             class=\"overflow-hidden transform transition-all duration-500\">\n          <p class=\"mb-28\"\n             *ngIf=\"item.content.contentText\">\n            {{item.content.contentText}}\n          </p>\n          <ng-container *ngIf=\"item.content.contentTemplate\"\n                        [ngTemplateOutlet]=\"item.content.contentTemplate\">\n\n          </ng-container>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>" }]
        }], propDecorators: { items: [{
                type: Input
            }] } });

class EdsAccordionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsAccordionModule, declarations: [AccordionComponent], imports: [CommonModule], exports: [AccordionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccordionModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionComponent],
                    imports: [CommonModule],
                    exports: [AccordionComponent],
                }]
        }] });

class ToggleBase extends BaseInputs {
}

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

class ToggleGroupComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToggleGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ToggleGroupComponent, selector: "eds-toggle-group", ngImport: i0, template: "<p>Component not yet available</p>\n", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ToggleGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-toggle-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Component not yet available</p>\n" }]
        }] });

class EdsTogglesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTogglesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsTogglesModule, declarations: [ToggleComponent, ToggleGroupComponent], imports: [CommonModule], exports: [ToggleComponent, ToggleGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTogglesModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTogglesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ToggleComponent, ToggleGroupComponent],
                    imports: [CommonModule],
                    exports: [ToggleComponent, ToggleGroupComponent],
                }]
        }] });

/* eslint-disable @typescript-eslint/no-explicit-any */
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

/**
 * Standard Modal
 *
 * @export
 * @class ModalComponent
 * @typedef {ModalComponent}
 */
class ModalComponent extends ModalsBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ModalComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ModalComponent, selector: "eds-modal", inputs: { iconSrc: "iconSrc" }, usesInheritance: true, ngImport: i0, template: "<body [ngClass]=\"{'overflow-hidden touch-none': isOpen}\">\n\n  <!-- Overlay -->\n  <div class=\"fixed inset-0 z-modal {{overlayOpenCloseClasses}} {{extraTwClasses}}\">\n\n    <!-- Overlay Background -->\n    <div class=\"absolute inset-0 bg-gray-darker transition-opacity \n            {{overlayBackgroundOpenCloseClasses}}\"\n         aria-hidden=\"true\"></div>\n\n    <!-- Modal -->\n    <div class=\"absolute inset-0 flex justify-center text-center items-center p-12\">\n      <div class=\"relative p-36 max-h-full rounded-lg shadow overflow-hidden bg-white transition-all\n                  {{modalOpenCloseClasses}}\"\n           role=\"dialog\"\n           aria-modal=\"true\"\n           aria-labelledby=\"modal-title\"\n           aria-describedby=\"modal-description\">\n\n        <button *ngIf=\"allowClose\"\n                class=\"absolute p-16 md:p-8 top-0 md:top-16 right-0 md:right-16 transform hover:scale-110 transition-transform ease-in-out duration-300\"\n                type=\"button\"\n                aria-label=\"Close Dialog\"\n                (click)=\"handleCloseBtnClicked()\">\n          <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               viewBox=\"0 0 24 24\"\n               aria-hidden=\"true\">\n            <path\n                  d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n          </svg>\n        </button>\n\n        <div class=\"container-md flex flex-col h-full\"\n             role=\"document\">\n          <div class=\"rich-text\">\n            <img *ngIf=\"iconSrc\"\n                 class=\"mx-auto icon-56 sm:icon-64 text-blue\"\n                 [src]=\"iconSrc\" />\n            <h2 class=\"text-2xl text-gray-darker mt-20\"\n                id=\"modal-title\">\n              {{title}}\n            </h2>\n            <p *ngIf=\"content\"\n               class=\"p-12\"\n               id=\"modal-description\">\n              {{content}}\n            </p>\n            <ng-container *ngIf=\"contentTemplate\"\n                          [ngTemplateOutlet]=\"contentTemplate\">\n            </ng-container>\n          </div>\n\n          <div *ngIf=\"primaryBtnText !== '' && secondaryBtnText !== ''\"\n               class=\"flex justify-center space-x-12 mt-24\">\n            <eds-button *ngIf=\"secondaryBtnClicked !== ''\"\n                        type=\"secondary\"\n                        extraTwClasses=\"{{secondaryBtnTwClasses}}\"\n                        [text]=\"secondaryBtnText\"\n                        (click)=\"handleSecondaryBtnClicked()\">\n            </eds-button>\n            <!-- set focus on open -->\n            <eds-button #primaryButton\n                        *ngIf=\"primaryBtnText !== ''\"\n                        type=\"primary\"\n                        [text]=\"primaryBtnText\"\n                        extraTwClasses=\"{{primaryBtnTwClasses}}\"\n                        (click)=\"handlePrimaryBtnClicked()\">\n            </eds-button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: ButtonComponent, selector: "eds-button" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<body [ngClass]=\"{'overflow-hidden touch-none': isOpen}\">\n\n  <!-- Overlay -->\n  <div class=\"fixed inset-0 z-modal {{overlayOpenCloseClasses}} {{extraTwClasses}}\">\n\n    <!-- Overlay Background -->\n    <div class=\"absolute inset-0 bg-gray-darker transition-opacity \n            {{overlayBackgroundOpenCloseClasses}}\"\n         aria-hidden=\"true\"></div>\n\n    <!-- Modal -->\n    <div class=\"absolute inset-0 flex justify-center text-center items-center p-12\">\n      <div class=\"relative p-36 max-h-full rounded-lg shadow overflow-hidden bg-white transition-all\n                  {{modalOpenCloseClasses}}\"\n           role=\"dialog\"\n           aria-modal=\"true\"\n           aria-labelledby=\"modal-title\"\n           aria-describedby=\"modal-description\">\n\n        <button *ngIf=\"allowClose\"\n                class=\"absolute p-16 md:p-8 top-0 md:top-16 right-0 md:right-16 transform hover:scale-110 transition-transform ease-in-out duration-300\"\n                type=\"button\"\n                aria-label=\"Close Dialog\"\n                (click)=\"handleCloseBtnClicked()\">\n          <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               viewBox=\"0 0 24 24\"\n               aria-hidden=\"true\">\n            <path\n                  d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n          </svg>\n        </button>\n\n        <div class=\"container-md flex flex-col h-full\"\n             role=\"document\">\n          <div class=\"rich-text\">\n            <img *ngIf=\"iconSrc\"\n                 class=\"mx-auto icon-56 sm:icon-64 text-blue\"\n                 [src]=\"iconSrc\" />\n            <h2 class=\"text-2xl text-gray-darker mt-20\"\n                id=\"modal-title\">\n              {{title}}\n            </h2>\n            <p *ngIf=\"content\"\n               class=\"p-12\"\n               id=\"modal-description\">\n              {{content}}\n            </p>\n            <ng-container *ngIf=\"contentTemplate\"\n                          [ngTemplateOutlet]=\"contentTemplate\">\n            </ng-container>\n          </div>\n\n          <div *ngIf=\"primaryBtnText !== '' && secondaryBtnText !== ''\"\n               class=\"flex justify-center space-x-12 mt-24\">\n            <eds-button *ngIf=\"secondaryBtnClicked !== ''\"\n                        type=\"secondary\"\n                        extraTwClasses=\"{{secondaryBtnTwClasses}}\"\n                        [text]=\"secondaryBtnText\"\n                        (click)=\"handleSecondaryBtnClicked()\">\n            </eds-button>\n            <!-- set focus on open -->\n            <eds-button #primaryButton\n                        *ngIf=\"primaryBtnText !== ''\"\n                        type=\"primary\"\n                        [text]=\"primaryBtnText\"\n                        extraTwClasses=\"{{primaryBtnTwClasses}}\"\n                        (click)=\"handlePrimaryBtnClicked()\">\n            </eds-button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>" }]
        }], propDecorators: { iconSrc: [{
                type: Input
            }] } });

class EdsModalsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsModalsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsModalsModule, declarations: [ModalComponent], imports: [CommonModule, EdsButtonsModule], exports: [ModalComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsModalsModule, imports: [CommonModule, EdsButtonsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsModalsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ModalComponent],
                    imports: [CommonModule, EdsButtonsModule],
                    exports: [ModalComponent],
                }]
        }] });

/**
 * Base class for divider components
 *
 * @export
 * @class DividerBase
 * @typedef {DividerBase}
 */
class DividerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Text to be displayed within the divider
         *
         * @type {(string)}
         */
        this.text = '';
    }
    /**
     * Builds tw classes based on textAlignment
     *
     * @public
     * @param {(HorizontalPlacement | VerticalPlacement)} textAlign
     * @returns {string}
     */
    twClasses(textAlign) {
        // default - center
        let twClass = 'before:h-2 before:w-2 after:h-2 after:w-2 before:flex-grow after:flex-grow';
        if (this.text) {
            switch (textAlign) {
                case 'top':
                case 'left':
                    twClass = 'after:h-2 after:w-2 after:flex-grow';
                    break;
                case 'bottom':
                case 'right':
                    twClass = 'before:h-2 before:w-2 before:flex-grow';
                    break;
                case 'center':
                default:
            }
        }
        return twClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DividerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: DividerBase, inputs: { text: "text" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DividerBase, decorators: [{
            type: Directive
        }], propDecorators: { text: [{
                type: Input
            }] } });

/**
 * Horizontal Divider
 *
 * @export
 * @class HorizontalDividerComponent
 * @typedef {HorizontalDividerComponent}
 * @extends {DividerBase}
 */
class HorizontalDividerComponent extends DividerBase {
    constructor() {
        super(...arguments);
        /**
         * Text placement within divider
         *
         * @type {HorizontalPlacement}
         */
        this.textAlign = 'center';
    }
    /**
     * @readonly
     * @type {string}
     */
    get horizontalClass() {
        return this.twClasses(this.textAlign);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: HorizontalDividerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: HorizontalDividerComponent, selector: "eds-horizontal-divider", inputs: { textAlign: "textAlign" }, usesInheritance: true, ngImport: i0, template: "<!-- Horizontal divider -->\n<div class=\"flex flex-row justify-center items-center w-full my-16 {{text ? 'gap-12' : 'gap-0'}} \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray\n            {{horizontalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: HorizontalDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-horizontal-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Horizontal divider -->\n<div class=\"flex flex-row justify-center items-center w-full my-16 {{text ? 'gap-12' : 'gap-0'}} \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray\n            {{horizontalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>" }]
        }], propDecorators: { textAlign: [{
                type: Input
            }] } });

/**
 * Vertical Divider
 *
 * @export
 * @class VerticalDividerComponent
 * @typedef {VerticalDividerComponent}
 * @extends {DividerBase}
 */
class VerticalDividerComponent extends DividerBase {
    constructor() {
        super(...arguments);
        /**
         * Text placement within divider
         *
         * @type {VerticalPlacement}
         */
        this.textAlign = 'center';
    }
    /**
     * @readonly
     * @type {string}
     */
    get verticalClass() {
        return this.twClasses(this.textAlign);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: VerticalDividerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: VerticalDividerComponent, selector: "eds-vertical-divider", inputs: { textAlign: "textAlign" }, usesInheritance: true, ngImport: i0, template: "<!-- Vertical divider -->\n<div class=\"flex flex-col justify-center items-center h-full mx-16 {{text ? 'gap-8' : 'gap-0'}}  \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray \n            {{verticalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: VerticalDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-vertical-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Vertical divider -->\n<div class=\"flex flex-col justify-center items-center h-full mx-16 {{text ? 'gap-8' : 'gap-0'}}  \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray \n            {{verticalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>" }]
        }], propDecorators: { textAlign: [{
                type: Input
            }] } });

class EdsDividersModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDividersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsDividersModule, declarations: [HorizontalDividerComponent, VerticalDividerComponent], imports: [CommonModule], exports: [HorizontalDividerComponent, VerticalDividerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDividersModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDividersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HorizontalDividerComponent, VerticalDividerComponent],
                    imports: [CommonModule],
                    exports: [HorizontalDividerComponent, VerticalDividerComponent],
                }]
        }] });

/**
 * The Drawer flies out from the 'right' or 'left' side of the screen, with a masked
 * background. The body content can be any TemplateRef you want, but the body container
 * is y-scrollable (not x-scrollable) and padded. Footer buttons are experimental and
 * subject to change.
 *
 * @example
 *```
 * <ng-template #drawerContent>
 *     <div>This goes into the drawer body</div>
 * </ng-template>
 *
 * <eds-drawer
 *     [isDrawerOpen]="isDrawerOpen"
 *     [openFrom]="openDirection"
 *     [title]="Drawer Title"
 *     [body]="drawerContent"
 *     [footerButtons]="[{label: 'Cancel', type: 'secondary'}, {label: 'OK', type: 'primary'}]"
 *     (dismiss)="drawerClosed($event)"
 * ></eds-drawer>
 *```
 */
class DrawerComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Displayed in the drawer header, as-is. Should limit to two short words.
         * @default 'Drawer Title'
         */
        this.title = 'Drawer Title';
        /**
         * Custom body to be displayed between header and footer (container being y-scrollable and padded)
         */
        this.body = undefined;
        /**
         * <b>experimental</b> - Only up to 2 buttons currently supported. Further buttons ignored.
         * @see dismiss
         */
        this.footerButtons = [];
        /**
         * Close event with a 0-indexed number indicating footer button # pressed to dismiss.
         * -1 to be returned if dismissed without pressing footer button.
         */
        this.dismiss = new EventEmitter();
        this.opensFrom = 'right';
        // Helps with slide-in/out transitions when changing sides
        this.changingSides = false;
        this.isOpen = false;
    }
    /**
     * Which side will the drawer open from? Default is 'right'
     * @param opensFrom
     */
    set openFrom(opensFrom) {
        // Just in case
        if (!opensFrom) {
            opensFrom = 'right';
        }
        if (opensFrom !== this.opensFrom) {
            this.changingSides = true;
        }
        this.opensFrom = opensFrom;
        // changingSides animation helper
        setTimeout(() => {
            this.changingSides = false;
        });
    }
    set isDrawerOpen(isOpen) {
        // changingSides animation helper
        setTimeout(() => {
            this.isOpen = isOpen;
            // isOpen has to be guaranteed to update AFTER changingSides is set to false
        }, 2);
    }
    closeDrawer(footerButtonNum = -1) {
        this.dismiss.emit(footerButtonNum);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DrawerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: DrawerComponent, selector: "eds-drawer", inputs: { openFrom: "openFrom", isDrawerOpen: "isDrawerOpen", title: "title", body: "body", footerButtons: "footerButtons" }, outputs: { dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: "<div class=\"eds-drawer__mask fixed z-[4] inset-0 flex bg-black\"\n     [ngClass]=\"{\n     'flex-row-reverse': opensFrom === 'right',\n     'flex-row': opensFrom === 'left',\n     'visible bg-opacity-60 ease-out duration-300': isOpen,\n     'invisible bg-opacity-0 ease-in duration-200': !isOpen,\n     }\"\n     (click)=\"closeDrawer()\">\n  <div class=\"eds-drawer__container w-full max-w-sm bg-white flex flex-col justify-between\"\n       [ngClass]=\"{\n         'ease-out duration-300 delay-100': isOpen && !changingSides,\n         'ease-in duration-100': !isOpen && !changingSides,\n         'rounded-l-lg': opensFrom === 'right',\n         'rounded-r-lg': opensFrom === 'left',\n         'translate-x-full': !isOpen && opensFrom === 'right',\n         '-translate-x-full': !isOpen && opensFrom === 'left',\n         }\"\n       (click)=\"$event.stopPropagation()\">\n\n    <div\n         class=\"eds-drawer__header px-24 pt-24 pb-16 text-left shadow-md text-xl leading-sm text-gray-darker flex justify-between\">\n      <h2>\n        {{title}}\n      </h2>\n      <!-- Blue X button -->\n\n      <button class=\"-m-12 btn btn-tertiary btn-xs btn-icon-only\"\n              (click)=\"closeDrawer()\">\n        <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 24 24\"\n             aria-hidden=\"true\">\n          <path\n                d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n        </svg>\n      </button>\n    </div>\n\n\n    <div *ngIf=\"body\"\n         class=\"eds-drawer__body flex-grow p-16 sm:p-24 h-full overflow-y-auto\">\n      <!-- Custom user body content -->\n      <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n    </div>\n\n\n    <div *ngIf=\"footerButtons.length > 0\"\n         class=\"eds-drawer__footer flex-shrink-0 flex flex-wrap gap-8 px-16 pb-16 pt-12 dark:pt-12 border-t border-gray sm:px-24 sm:pt-16 sm:pb-24\">\n      <button class=\"btn btn-{{footerButtons[0].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(0)\">\n        {{footerButtons[0].label}}\n      </button>\n      <button *ngIf=\"footerButtons.length > 1\"\n              class=\"btn btn-{{footerButtons[1].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(1)\">\n        {{footerButtons[1].label}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: aria-labelled-by, role, dark:mode, general ADA compliance -->", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-drawer', template: "<div class=\"eds-drawer__mask fixed z-[4] inset-0 flex bg-black\"\n     [ngClass]=\"{\n     'flex-row-reverse': opensFrom === 'right',\n     'flex-row': opensFrom === 'left',\n     'visible bg-opacity-60 ease-out duration-300': isOpen,\n     'invisible bg-opacity-0 ease-in duration-200': !isOpen,\n     }\"\n     (click)=\"closeDrawer()\">\n  <div class=\"eds-drawer__container w-full max-w-sm bg-white flex flex-col justify-between\"\n       [ngClass]=\"{\n         'ease-out duration-300 delay-100': isOpen && !changingSides,\n         'ease-in duration-100': !isOpen && !changingSides,\n         'rounded-l-lg': opensFrom === 'right',\n         'rounded-r-lg': opensFrom === 'left',\n         'translate-x-full': !isOpen && opensFrom === 'right',\n         '-translate-x-full': !isOpen && opensFrom === 'left',\n         }\"\n       (click)=\"$event.stopPropagation()\">\n\n    <div\n         class=\"eds-drawer__header px-24 pt-24 pb-16 text-left shadow-md text-xl leading-sm text-gray-darker flex justify-between\">\n      <h2>\n        {{title}}\n      </h2>\n      <!-- Blue X button -->\n\n      <button class=\"-m-12 btn btn-tertiary btn-xs btn-icon-only\"\n              (click)=\"closeDrawer()\">\n        <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 24 24\"\n             aria-hidden=\"true\">\n          <path\n                d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n        </svg>\n      </button>\n    </div>\n\n\n    <div *ngIf=\"body\"\n         class=\"eds-drawer__body flex-grow p-16 sm:p-24 h-full overflow-y-auto\">\n      <!-- Custom user body content -->\n      <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n    </div>\n\n\n    <div *ngIf=\"footerButtons.length > 0\"\n         class=\"eds-drawer__footer flex-shrink-0 flex flex-wrap gap-8 px-16 pb-16 pt-12 dark:pt-12 border-t border-gray sm:px-24 sm:pt-16 sm:pb-24\">\n      <button class=\"btn btn-{{footerButtons[0].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(0)\">\n        {{footerButtons[0].label}}\n      </button>\n      <button *ngIf=\"footerButtons.length > 1\"\n              class=\"btn btn-{{footerButtons[1].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(1)\">\n        {{footerButtons[1].label}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: aria-labelled-by, role, dark:mode, general ADA compliance -->" }]
        }], propDecorators: { openFrom: [{
                type: Input
            }], isDrawerOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], body: [{
                type: Input
            }], footerButtons: [{
                type: Input
            }], dismiss: [{
                type: Output
            }] } });

class EdsDrawerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsDrawerModule, declarations: [DrawerComponent], imports: [CommonModule], exports: [DrawerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDrawerModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DrawerComponent],
                    imports: [CommonModule],
                    exports: [DrawerComponent],
                }]
        }] });

class SvgComponent {
    constructor(http, renderer, sanitizer) {
        this.http = http;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        /**
         * Path to the svg
         *
         * @type {string}
         */
        this.svgPath = '';
        /**
         * Initial list of classes to apply to the svg
         *
         * @type {string[]}
         */
        this.twClassList = [];
        /**
         * Initial list of attributes to apply to the svg
         *
         * @type {SvgAttributes}
         */
        this.attributes = {};
        /**
         * Initialize size class for SVG. Must include size and width.
         *
         * @type {string}
         */
        this.svgSizeClass = 'icon-28';
    }
    ngOnInit() {
        this.http.get(this.svgPath, { responseType: 'text' }).subscribe((svg) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(svg, 'image/svg+xml');
            const svgElement = doc.querySelector('svg');
            // Add class and attributes
            svgElement?.classList.add(...this.twClassList, this.svgSizeClass);
            for (const attribute in this.attributes) {
                svgElement?.setAttribute(attribute, this.attributes[attribute]);
            }
            // Serialize back to string and sanitize
            if (svgElement) {
                const serializer = new XMLSerializer();
                const serializedSvg = serializer.serializeToString(svgElement);
                this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(serializedSvg);
            }
        });
    }
    swapClass(addClass, removeClass) {
        this.addClass(addClass);
        this.removeClass(removeClass);
    }
    addClass(className) {
        this.renderer.addClass(this.getSvgElement(), className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.getSvgElement(), className);
    }
    getSvgElement() {
        return this._svgContainer.nativeElement.firstElementChild;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgComponent, deps: [{ token: i1$1.HttpClient }, { token: i0.Renderer2 }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: SvgComponent, selector: "eds-svg", inputs: { svgPath: "svgPath", twClassList: "twClassList", attributes: "attributes", svgSizeClass: "svgSizeClass" }, viewQueries: [{ propertyName: "_svgContainer", first: true, predicate: ["svgContainer"], descendants: true }], ngImport: i0, template: "<div #svgContainer\n     *ngIf=\"safeSvg\"\n     [innerHTML]=\"safeSvg\"></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-svg', template: "<div #svgContainer\n     *ngIf=\"safeSvg\"\n     [innerHTML]=\"safeSvg\"></div>" }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: i0.Renderer2 }, { type: i2.DomSanitizer }]; }, propDecorators: { svgPath: [{
                type: Input
            }], twClassList: [{
                type: Input
            }], attributes: [{
                type: Input
            }], svgSizeClass: [{
                type: Input
            }], _svgContainer: [{
                type: ViewChild,
                args: ['svgContainer', { static: false }]
            }] } });

class SvgModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: SvgModule, declarations: [SvgComponent], imports: [CommonModule, HttpClientModule], exports: [SvgComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                    declarations: [SvgComponent],
                    exports: [SvgComponent],
                }]
        }] });

class DynamicComponentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DynamicComponentDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: DynamicComponentDirective, selector: "[edsDynamicComponent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DynamicComponentDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[edsDynamicComponent]' }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });

class TabsComponent {
    constructor() {
        /**
         * An array of tabs to display.
         *
         * @type {Tab[]}
         */
        this.tabs = [];
        /**
         * Description of purpose for tabs.
         *
         * @type {string}
         */
        this.tabsAriaLabel = 'Tabs that control what component is shown.';
        this.svgClassList = ['fill-current', 'text-blue', 'transition-all', 'duration-200'];
        this.svgAttributes = { 'viewBox': '0 0 76 76' };
        this._selectedIndex = 0;
    }
    set selectedIndex(value) {
        this.setAnimations(value);
        this._selectedIndex = value;
        this.loadComponent();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    ngAfterViewInit() {
        this.loadComponent();
    }
    setAnimations(i) {
        if (this.selectedIndex !== i) {
            this._svgComponent.get(this.selectedIndex)?.swapClass('icon-28', 'icon-48');
            this._svgComponent.get(i)?.swapClass('icon-48', 'icon-28');
        }
    }
    loadComponent() {
        const adItem = this.tabs[this.selectedIndex];
        const viewContainerRef = this._dynamicComponent?.viewContainerRef;
        viewContainerRef?.clear();
        viewContainerRef?.createComponent(adItem.component);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: TabsComponent, selector: "eds-tabs", inputs: { tabs: "tabs", tabsAriaLabel: "tabsAriaLabel" }, viewQueries: [{ propertyName: "_dynamicComponent", first: true, predicate: DynamicComponentDirective, descendants: true }, { propertyName: "_svgComponent", predicate: SvgComponent, descendants: true }], ngImport: i0, template: "<section class=\"px-16 md:px-24 py-0 bg-white\"\n  [ngClass]=\"tabs.length <= 3 ? 'justify-center' : 'snap sm:snap-none overflow-x-scroll scrollbar-none md:justify-center'\"\n>\n  <div \n       class=\"container-3xl flex -mx-16 md:mx-auto pt-16 md:pt-24 border-b border-gray\"\n       role=\"tablist\"\n       aria-orientation=\"horizontal\"\n       [attr.aria-label]=\"tabsAriaLabel\">\n    <button *ngFor=\"let tab of tabs; let i = index\"\n            [ngClass]=\"{'font-bold': i === selectedIndex, 'w-1/3': tabs.length <= 3, 'snap-start w-1/29': tabs.length > 3}\"\n            class=\"relative flex flex-col flex-shrink-0 items-center p-8 md:px-12 lg:px-24 hover:bg-teal-lighter text-center text-teal-darker transition-colors duration-150\"\n            [id]=\"'eds-tabs-'+i\"\n            role=\"tab\"\n            type=\"button\"\n            [attr.aria-controls]=\"'eds-tabs-panel-'+i\"\n            [attr.aria-selected]=\"i === selectedIndex\"\n            [attr.tabindex]=\"i === selectedIndex ? 0 : -1\"\n            (click)=\"selectedIndex = i\">\n      <div class=\"flex justify-center items-end mb-6 w-full h-48\">\n        <eds-svg [svgPath]=\"tab.svg\"\n                 [svgSizeClass]=\"i === selectedIndex ? 'icon-48' : 'icon-28'\"\n                 [twClassList]=\"svgClassList\"\n                 [attributes]=\"svgAttributes\"></eds-svg>\n      </div>\n      <span class=\"line-clamp-3\">\n        {{tab.label}}\n      </span>\n      <span [ngClass]=\"{'scale-100': i === selectedIndex, 'scale-0': i !== selectedIndex}\"\n            class=\"absolute bottom-0 block w-full h-4 bg-teal-dark transform transition-all duration-200\"></span>\n    </button>\n  </div>\n  <div class=\"-mx-16 md:-mx-24 bg-gray-lighter\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         [id]=\"'eds-tabs-panel-'+i\"\n         role=\"tabpanel\"\n         [attr.tabindex]=\"i === selectedIndex ? 0 : -1\"\n         [attr.aria-labelledby]=\"'eds-tabs-'+i\">\n      <ng-template edsDynamicComponent></ng-template>\n    </div>\n  </div>\n</section>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: SvgComponent, selector: "eds-svg", inputs: ["svgPath", "twClassList", "attributes", "svgSizeClass"] }, { kind: "directive", type: DynamicComponentDirective, selector: "[edsDynamicComponent]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-tabs', template: "<section class=\"px-16 md:px-24 py-0 bg-white\"\n  [ngClass]=\"tabs.length <= 3 ? 'justify-center' : 'snap sm:snap-none overflow-x-scroll scrollbar-none md:justify-center'\"\n>\n  <div \n       class=\"container-3xl flex -mx-16 md:mx-auto pt-16 md:pt-24 border-b border-gray\"\n       role=\"tablist\"\n       aria-orientation=\"horizontal\"\n       [attr.aria-label]=\"tabsAriaLabel\">\n    <button *ngFor=\"let tab of tabs; let i = index\"\n            [ngClass]=\"{'font-bold': i === selectedIndex, 'w-1/3': tabs.length <= 3, 'snap-start w-1/29': tabs.length > 3}\"\n            class=\"relative flex flex-col flex-shrink-0 items-center p-8 md:px-12 lg:px-24 hover:bg-teal-lighter text-center text-teal-darker transition-colors duration-150\"\n            [id]=\"'eds-tabs-'+i\"\n            role=\"tab\"\n            type=\"button\"\n            [attr.aria-controls]=\"'eds-tabs-panel-'+i\"\n            [attr.aria-selected]=\"i === selectedIndex\"\n            [attr.tabindex]=\"i === selectedIndex ? 0 : -1\"\n            (click)=\"selectedIndex = i\">\n      <div class=\"flex justify-center items-end mb-6 w-full h-48\">\n        <eds-svg [svgPath]=\"tab.svg\"\n                 [svgSizeClass]=\"i === selectedIndex ? 'icon-48' : 'icon-28'\"\n                 [twClassList]=\"svgClassList\"\n                 [attributes]=\"svgAttributes\"></eds-svg>\n      </div>\n      <span class=\"line-clamp-3\">\n        {{tab.label}}\n      </span>\n      <span [ngClass]=\"{'scale-100': i === selectedIndex, 'scale-0': i !== selectedIndex}\"\n            class=\"absolute bottom-0 block w-full h-4 bg-teal-dark transform transition-all duration-200\"></span>\n    </button>\n  </div>\n  <div class=\"-mx-16 md:-mx-24 bg-gray-lighter\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         [id]=\"'eds-tabs-panel-'+i\"\n         role=\"tabpanel\"\n         [attr.tabindex]=\"i === selectedIndex ? 0 : -1\"\n         [attr.aria-labelledby]=\"'eds-tabs-'+i\">\n      <ng-template edsDynamicComponent></ng-template>\n    </div>\n  </div>\n</section>" }]
        }], propDecorators: { tabs: [{
                type: Input
            }], tabsAriaLabel: [{
                type: Input
            }], _dynamicComponent: [{
                type: ViewChild,
                args: [DynamicComponentDirective, { static: false }]
            }], _svgComponent: [{
                type: ViewChildren,
                args: [SvgComponent]
            }] } });

class EdsTabsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsTabsModule, declarations: [TabsComponent, DynamicComponentDirective], imports: [CommonModule, SvgModule], exports: [TabsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTabsModule, imports: [CommonModule, SvgModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SvgModule],
                    declarations: [TabsComponent, DynamicComponentDirective],
                    exports: [TabsComponent],
                }]
        }] });

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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ToastComponent, selector: "eds-toast", inputs: { type: "type", message: "message", dockedAtBottom: "dockedAtBottom", durationInMs: "durationInMs", allowDismiss: "allowDismiss", showToast: "showToast" }, outputs: { toastClosed: "toastClosed" }, usesInheritance: true, ngImport: i0, template: "<section\n         class=\"flex flex-col items-center px-16 md:px-24 pb-16 md:pb-24 z-modal\n                space-y-16 fixed {{dockedAtBottom ? 'bottom-0' : ''}} left-0 right-0 {{show ? 'pointer-events-auto' : 'pointer-events-none'}} {{extraTwClasses}}\">\n  <output id=toast\n          class=\"flex justify-between items-start w-full max-w-xs \n                {{backgroundColor}} {{!show ? 'opacity-0 translate-y-6' : 'opacity-100 -translate-y-6'}} {{hide ? 'opacity-0' : ''}}\n                text-white shadow rounded-md transform duration-200\"\n          role=\"status\">\n\n    <div class=\"flex flex-grow gap-8 px-16 py-12\">\n      <svg class=\"flex-shrink-0 mt-[3px] icon-18\"\n           xmlns=\"http://www.w3.org/2000/svg\"\n           viewBox=\"0 0 64 64\"\n           fill=\"currentColor\"\n           aria-hidden=\"true\"\n           focusable=\"false\">\n        <path [attr.d]=\"iconData\" />\n      </svg>\n\n      <span class=\"relative top-[1px] ml-8\">\n        {{message}}\n      </span>\n    </div>\n\n    <div *ngIf=\"allowDismiss\"\n         class=\"flex flex-shrink-0 mt-px p-4\">\n      <eds-icon-button type=\"tertiary\"\n                       (buttonClick)=\"closeToast()\"\n                       [isReversed]=\"true\"\n                       size=\"2xs\"\n                       [svgData]=\"svgData\"></eds-icon-button>\n    </div>\n  </output>\n</section>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IconButtonComponent, selector: "eds-icon-button", inputs: ["iconPlacement", "imageData", "svgData"] }] }); }
}
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

class EdsToastModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsToastModule, declarations: [ToastComponent], imports: [CommonModule, EdsButtonsModule], exports: [ToastComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsToastModule, imports: [CommonModule, EdsButtonsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ToastComponent],
                    imports: [CommonModule, EdsButtonsModule],
                    exports: [ToastComponent],
                }]
        }] });

/**
 * Page Header with optional description
 *
 * @export
 * @class PageHeaderComponent
 * @typedef {PageHeaderComponent}
 * @extends {BaseInputs}
 */
class PageHeaderComponent {
    constructor() {
        /**
         * Title to display at top
         *
         * @type {string}
         */
        this.title = 'Page Title';
        /**
         * Description to display underneath title
         *
         * @type {string}
         */
        this.description = 'Page Description';
        /**
         * Tailwind classes to customize main container
         *
         * @type {string}
         */
        this.extraTwClasses = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: PageHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: PageHeaderComponent, selector: "eds-page-header", inputs: { title: "title", description: "description", extraTwClasses: "extraTwClasses" }, ngImport: i0, template: "<header class=\"px-16 md:px-24 py-32 md:py-48 bg-white {{extraTwClasses}}\">\n  <div class=\"container-xl text-center\">\n    <h1 class=\"text-3xl text-blue\">\n      {{title}}\n    </h1>\n\n    <p class=\"rich-text text-lg text-blue pt-6 md:pt-12\">\n      {{description}}\n    </p>\n  </div>\n</header>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-page-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"px-16 md:px-24 py-32 md:py-48 bg-white {{extraTwClasses}}\">\n  <div class=\"container-xl text-center\">\n    <h1 class=\"text-3xl text-blue\">\n      {{title}}\n    </h1>\n\n    <p class=\"rich-text text-lg text-blue pt-6 md:pt-12\">\n      {{description}}\n    </p>\n  </div>\n</header>" }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], extraTwClasses: [{
                type: Input
            }] } });

class EdsPageHeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsPageHeaderModule, declarations: [PageHeaderComponent], imports: [CommonModule], exports: [PageHeaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPageHeaderModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageHeaderComponent],
                    imports: [CommonModule],
                    exports: [PageHeaderComponent],
                }]
        }] });

/**
 * Simple Card
 *
 * @export
 * @class SimpleCardComponent
 * @typedef {SimpleCardComponent}
 * @extends {BasesInputs}
 */
class SimpleCardComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Main title for card
         *
         * @type {string}
         */
        this.cardTitle = '';
        /**
         * Subtext for card
         *
         * @type {string}
         */
        this.description = '';
        /**
         * Icon path
         *
         * @type {string}
         */
        this.cardIcon = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SimpleCardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: SimpleCardComponent, selector: "eds-simple-card", inputs: { cardTitle: "cardTitle", description: "description", cardIcon: "cardIcon" }, usesInheritance: true, ngImport: i0, template: "<div\r\n     class=\"container-md relative flex p-16 rounded-md border border-gray bg-white sm:hover:scale-102 transition-transform duration-300 ease-in-out {{extraTwClasses}}\">\r\n  <div class=\"flex-shrink-0 mr-12 sm:mr-16 sm:flex sm:items-center\">\r\n    <img class=\"icon-24\"\r\n         [src]=\"cardIcon\"\r\n         alt=\"icon\" />\r\n  </div>\r\n\r\n  <div class=\"flex-grow flex flex-col justify-center\">\r\n    <span class=\"pt-2\">\r\n      <a class=\"text-lg text-teal-darker before:absolute before:-inset-px before:rounded-md before:shadow-sm before:opacity-0 sm:hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out \"\r\n         href=\"#\">\r\n        {{cardTitle}}\r\n      </a>\r\n    </span>\r\n    <span>\r\n      {{description}}\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"flex flex-shrink-0 ml-16 items-center\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n         viewBox=\"0 0 9 14\"\r\n         width=\"20px\"\r\n         height=\"20px\">\r\n      <path d=\"M8.69 6.32l-.237-.22-.02-.02-.016-.01L2.023.278A1.1 1.1 0 0 0 1.285 0a1.1 1.1 0 0 0-.738.277L.31.49a.9.9 0 0 0 0 1.36L5.99 7 .31 12.15a.9.9 0 0 0 0 1.36l.237.213a1.1 1.1 0 0 0 .738.277 1.1 1.1 0 0 0 .738-.277l6.4-5.8.03-.023.237-.214a.9.9 0 0 0 0-1.362z\"\r\n            fill=\"#067799\" />\r\n    </svg>\r\n\r\n  </div>\r\n\r\n</div>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SimpleCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-simple-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\r\n     class=\"container-md relative flex p-16 rounded-md border border-gray bg-white sm:hover:scale-102 transition-transform duration-300 ease-in-out {{extraTwClasses}}\">\r\n  <div class=\"flex-shrink-0 mr-12 sm:mr-16 sm:flex sm:items-center\">\r\n    <img class=\"icon-24\"\r\n         [src]=\"cardIcon\"\r\n         alt=\"icon\" />\r\n  </div>\r\n\r\n  <div class=\"flex-grow flex flex-col justify-center\">\r\n    <span class=\"pt-2\">\r\n      <a class=\"text-lg text-teal-darker before:absolute before:-inset-px before:rounded-md before:shadow-sm before:opacity-0 sm:hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out \"\r\n         href=\"#\">\r\n        {{cardTitle}}\r\n      </a>\r\n    </span>\r\n    <span>\r\n      {{description}}\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"flex flex-shrink-0 ml-16 items-center\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n         viewBox=\"0 0 9 14\"\r\n         width=\"20px\"\r\n         height=\"20px\">\r\n      <path d=\"M8.69 6.32l-.237-.22-.02-.02-.016-.01L2.023.278A1.1 1.1 0 0 0 1.285 0a1.1 1.1 0 0 0-.738.277L.31.49a.9.9 0 0 0 0 1.36L5.99 7 .31 12.15a.9.9 0 0 0 0 1.36l.237.213a1.1 1.1 0 0 0 .738.277 1.1 1.1 0 0 0 .738-.277l6.4-5.8.03-.023.237-.214a.9.9 0 0 0 0-1.362z\"\r\n            fill=\"#067799\" />\r\n    </svg>\r\n\r\n  </div>\r\n\r\n</div>" }]
        }], propDecorators: { cardTitle: [{
                type: Input
            }], description: [{
                type: Input
            }], cardIcon: [{
                type: Input
            }] } });

class EdsSimpleCardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSimpleCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsSimpleCardModule, declarations: [SimpleCardComponent], imports: [ComponentsModule], exports: [SimpleCardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSimpleCardModule, imports: [ComponentsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSimpleCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SimpleCardComponent],
                    imports: [ComponentsModule],
                    exports: [SimpleCardComponent]
                }]
        }] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Site Banner Base
 *
 * @export
 * @class SiteBannerBase
 * @typedef {SiteBannerBase}
 * @extends {BaseInputs}
 */
class SiteBannerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Hidden Details Text
         *
         * @type {string}
         * */
        this.hiddenDetails = '';
        /**
         * Identifies if details are shown or not
         *
         * @type {boolean}
         */
        this.showDetails = false;
        /**
         * Identifies if banner is closed on click
         *
         * @type {boolean}
         */
        this.close = false;
        /**
         * Banner Title
         *
         * @type {string}
         *
         */
        this.title = '';
        /**
         * Banner Main Text
         *
         * @type {string}
         */
        this.mainText = '';
        /**
         * Banner Details Text
         * Can be optional to use "Read More" or "Learn More" text
         *
         * @type {string}
         */
        this.details = 'Show Details';
        /**
         * Exiting the banner on click
         *
         * @type {*}
         *
         */
        this.bannerClosed = new EventEmitter();
        /**
         * Emits boolean as to whether the details are shown or not
         *
         * @type {EventEmitter<boolean>}
         */
        this.showDetailsChanged = new EventEmitter();
    }
    /**
     * When Show Details is clicked
     *
     * @public
     */
    handleDetailsClicked() {
        this.showDetails = !this.showDetails;
        this.details = this.showDetails ? 'Hide Details' : 'Show Details';
        this.showDetailsChanged.emit(this.showDetails);
    }
    /**
     * @public
     */
    handleCloseButton() {
        this.delete();
    }
    /**
     * @private
     */
    delete() {
        this.close = !this.close;
        setTimeout(this.bannerClosed, 1000);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: SiteBannerBase, inputs: { hiddenDetails: "hiddenDetails", showDetails: "showDetails", close: "close", title: "title", mainText: "mainText", details: "details" }, outputs: { bannerClosed: "bannerClosed", showDetailsChanged: "showDetailsChanged" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerBase, decorators: [{
            type: Directive
        }], propDecorators: { hiddenDetails: [{
                type: Input
            }], showDetails: [{
                type: Input
            }], close: [{
                type: Input
            }], title: [{
                type: Input
            }], mainText: [{
                type: Input
            }], details: [{
                type: Input
            }], bannerClosed: [{
                type: Output
            }], showDetailsChanged: [{
                type: Output
            }] } });

/**
 * Site Banner
 *
 * @export
 * @class SiteBannerComponent
 * @typedef {SiteBannerComponent}
 * @extends {SiteBannerBase}
 */
class SiteBannerComponent extends SiteBannerBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: SiteBannerComponent, selector: "eds-site-banner", usesInheritance: true, ngImport: i0, template: "<section class=\"relative px-16 md:px-24 text-blue-dark bg-yellow {{close ? 'hidden' : ''}}\"\r\n         role=\"alert\">\r\n\r\n  <div class=\"relative flex gap-8 md:gap-12 py-16\">\r\n    <div class=\"flex-grow\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n           class=\"flex-shrink-0 ml-auto icon-18 md:icon-24 fill-current text-yellow\"\r\n           viewBox=\"0 0 64 64\">\r\n        <circle cx=\"32\"\r\n                cy=\"32\"\r\n                r=\"32\"\r\n                fill=\"#014464\" />\r\n        <path d=\"M36.924,48.251c.027,2.632-2.085,4.787-4.717,4.813-.07,0-.141,0-.211-.003-2.63,.088-4.833-1.973-4.921-4.603-.002-.069-.003-.138-.002-.208v-.112c-.029-2.628,2.079-4.782,4.708-4.811,.072,0,.144,0,.215,.003,2.629-.091,4.834,1.966,4.925,4.595,.002,.071,.003,.142,.003,.214v.112Zm.115-32.43l-2.435,21.287c-.093,1.439-1.335,2.529-2.774,2.436-1.309-.085-2.351-1.127-2.436-2.436l-2.433-21.287c-.168-1.637,.733-2.886,2.268-2.886h5.539c1.534,.004,2.436,1.249,2.27,2.886Z\"\r\n              fill=\"fdb913\" />\r\n      </svg>\r\n    </div>\r\n    <div class=\"w-full max-w-2xl -my-4 md:my-0\">\r\n      <strong class=\"top-2\"\r\n              id=\"site-banner-title\">\r\n        {{title}}\r\n      </strong>\r\n      <span class=\"pt-2 px-10 ml-6 border-l-2 border-current\">\r\n        {{mainText}}\r\n      </span>\r\n      <button class=\"btn btn-xs btn-flat btn-underline -my-12 text-current hover:text-current\"\r\n              type=\"button\"\r\n              id=\"site-banner-trigger\"\r\n              aria-controls=\"site-banner-panel\"\r\n              [attr.aria-expanded]=\"showDetails ? false : true\"\r\n              (click)=\"handleDetailsClicked()\">\r\n        <span>\r\n          {{details}}\r\n        </span>\r\n        <svg class=\"transform duration-200 {{showDetails ? 'scale-y-flip' : '-scale-y-flip'}}\"\r\n             xmlns=\"http://www.w3.org/2000/svg\"\r\n             viewBox=\"0 0 64 64\">\r\n          <path\r\n                d=\"M57.404,16.997c1.634-1.441,4.123-1.304,5.588,.308,1.442,1.59,1.323,4.048-.268,5.491-.015,.013-.029,.026-.044,.039l-27.307,24.169c-1.479,1.304-3.688,1.332-5.199,.067L1.397,22.905c-1.649-1.376-1.869-3.828-.493-5.476,.012-.015,.025-.029,.037-.044,1.424-1.65,3.908-1.851,5.578-.451l26.148,21.956,24.737-21.893Z\" />\r\n        </svg>\r\n      </button>\r\n\r\n      <div class=\"grid relative transition-all {{showDetails ? 'grid-rows-1fr duration-300 ease-out': 'grid-rows-0fr duration-150 ease-in'}}\"\r\n           id=\"site-banner-panel\"\r\n           aria-labelledby=\"site-banner-trigger\"\r\n           aria-hidden=\"true\">\r\n        <div class=\"overflow-hidden transition-opacity opacity-100 duration-300 delay-75 ease-out\">\r\n          <div class=\"rich-text mt-8 opacity-100 duration-300 delay-75 ease-out\">\r\n            {{hiddenDetails}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-grow flex justify-end items-start pl-6 md:pl-8\">\r\n      <button class=\"btn btn-xs btn-tertiary btn-icon-only -m-12 md:-my-8 text-current hover:text-current\"\r\n              type=\"button\"\r\n              aria-labelledby=\"site-banner-close site-banner-title\"\r\n              [attr.ari-hidden]=\"close ? 'hidden' : ''\"\r\n              (click)=\"handleCloseButton()\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n             class=\"icon-16\"\r\n             viewBox=\"0 0 64 64\">\r\n          <path\r\n                d=\"M62.662,55.308l-23.308-23.308L62.662,8.692c1.62-1.624,1.62-4.252,0-5.876l-1.54-1.54c-1.624-1.62-4.252-1.62-5.876,0L31.938,24.584,8.631,1.276C7.007-.343,4.379-.343,2.755,1.276l-1.54,1.54C-.405,4.44-.405,7.068,1.215,8.692L24.522,32,1.215,55.308c-1.62,1.624-1.62,4.252,0,5.876l1.54,1.54c1.624,1.62,4.252,1.62,5.876,0l23.308-23.308,23.308,23.308c1.624,1.62,4.252,1.62,5.876,0l1.54-1.54c1.666-1.508,1.793-4.081,.285-5.746-.017-.019-.034-.037-.051-.055-.054-.073-.148-.103-.234-.075Z\" />\r\n        </svg>\r\n        <span id=\"site-banner-close\">Close</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</section>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-site-banner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"relative px-16 md:px-24 text-blue-dark bg-yellow {{close ? 'hidden' : ''}}\"\r\n         role=\"alert\">\r\n\r\n  <div class=\"relative flex gap-8 md:gap-12 py-16\">\r\n    <div class=\"flex-grow\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n           class=\"flex-shrink-0 ml-auto icon-18 md:icon-24 fill-current text-yellow\"\r\n           viewBox=\"0 0 64 64\">\r\n        <circle cx=\"32\"\r\n                cy=\"32\"\r\n                r=\"32\"\r\n                fill=\"#014464\" />\r\n        <path d=\"M36.924,48.251c.027,2.632-2.085,4.787-4.717,4.813-.07,0-.141,0-.211-.003-2.63,.088-4.833-1.973-4.921-4.603-.002-.069-.003-.138-.002-.208v-.112c-.029-2.628,2.079-4.782,4.708-4.811,.072,0,.144,0,.215,.003,2.629-.091,4.834,1.966,4.925,4.595,.002,.071,.003,.142,.003,.214v.112Zm.115-32.43l-2.435,21.287c-.093,1.439-1.335,2.529-2.774,2.436-1.309-.085-2.351-1.127-2.436-2.436l-2.433-21.287c-.168-1.637,.733-2.886,2.268-2.886h5.539c1.534,.004,2.436,1.249,2.27,2.886Z\"\r\n              fill=\"fdb913\" />\r\n      </svg>\r\n    </div>\r\n    <div class=\"w-full max-w-2xl -my-4 md:my-0\">\r\n      <strong class=\"top-2\"\r\n              id=\"site-banner-title\">\r\n        {{title}}\r\n      </strong>\r\n      <span class=\"pt-2 px-10 ml-6 border-l-2 border-current\">\r\n        {{mainText}}\r\n      </span>\r\n      <button class=\"btn btn-xs btn-flat btn-underline -my-12 text-current hover:text-current\"\r\n              type=\"button\"\r\n              id=\"site-banner-trigger\"\r\n              aria-controls=\"site-banner-panel\"\r\n              [attr.aria-expanded]=\"showDetails ? false : true\"\r\n              (click)=\"handleDetailsClicked()\">\r\n        <span>\r\n          {{details}}\r\n        </span>\r\n        <svg class=\"transform duration-200 {{showDetails ? 'scale-y-flip' : '-scale-y-flip'}}\"\r\n             xmlns=\"http://www.w3.org/2000/svg\"\r\n             viewBox=\"0 0 64 64\">\r\n          <path\r\n                d=\"M57.404,16.997c1.634-1.441,4.123-1.304,5.588,.308,1.442,1.59,1.323,4.048-.268,5.491-.015,.013-.029,.026-.044,.039l-27.307,24.169c-1.479,1.304-3.688,1.332-5.199,.067L1.397,22.905c-1.649-1.376-1.869-3.828-.493-5.476,.012-.015,.025-.029,.037-.044,1.424-1.65,3.908-1.851,5.578-.451l26.148,21.956,24.737-21.893Z\" />\r\n        </svg>\r\n      </button>\r\n\r\n      <div class=\"grid relative transition-all {{showDetails ? 'grid-rows-1fr duration-300 ease-out': 'grid-rows-0fr duration-150 ease-in'}}\"\r\n           id=\"site-banner-panel\"\r\n           aria-labelledby=\"site-banner-trigger\"\r\n           aria-hidden=\"true\">\r\n        <div class=\"overflow-hidden transition-opacity opacity-100 duration-300 delay-75 ease-out\">\r\n          <div class=\"rich-text mt-8 opacity-100 duration-300 delay-75 ease-out\">\r\n            {{hiddenDetails}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-grow flex justify-end items-start pl-6 md:pl-8\">\r\n      <button class=\"btn btn-xs btn-tertiary btn-icon-only -m-12 md:-my-8 text-current hover:text-current\"\r\n              type=\"button\"\r\n              aria-labelledby=\"site-banner-close site-banner-title\"\r\n              [attr.ari-hidden]=\"close ? 'hidden' : ''\"\r\n              (click)=\"handleCloseButton()\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n             class=\"icon-16\"\r\n             viewBox=\"0 0 64 64\">\r\n          <path\r\n                d=\"M62.662,55.308l-23.308-23.308L62.662,8.692c1.62-1.624,1.62-4.252,0-5.876l-1.54-1.54c-1.624-1.62-4.252-1.62-5.876,0L31.938,24.584,8.631,1.276C7.007-.343,4.379-.343,2.755,1.276l-1.54,1.54C-.405,4.44-.405,7.068,1.215,8.692L24.522,32,1.215,55.308c-1.62,1.624-1.62,4.252,0,5.876l1.54,1.54c1.624,1.62,4.252,1.62,5.876,0l23.308-23.308,23.308,23.308c1.624,1.62,4.252,1.62,5.876,0l1.54-1.54c1.666-1.508,1.793-4.081,.285-5.746-.017-.019-.034-.037-.051-.055-.054-.073-.148-.103-.234-.075Z\" />\r\n        </svg>\r\n        <span id=\"site-banner-close\">Close</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</section>" }]
        }] });

class EdsSiteBannerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSiteBannerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsSiteBannerModule, declarations: [SiteBannerComponent], imports: [CommonModule], exports: [SiteBannerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSiteBannerModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsSiteBannerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [SiteBannerComponent],
                    exports: [SiteBannerComponent],
                }]
        }] });

const StatusIconLookup = {
    'error': 'assets/icons/exclamation.svg',
    'loading': 'assets/icons/loading.svg',
    'success': 'assets/icons/success-solid.svg',
    'warning': 'assets/icons/warning-solid.svg'
};

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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputBaseInputs, decorators: [{
            type: Directive
        }], propDecorators: { size: [{
                type: Input
            }], state: [{
                type: Input
            }], status: [{
                type: Input
            }] } });

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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: InputComponent, selector: "eds-input", inputs: { mask: "mask", leadingIconPath: "leadingIconPath" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-input-wrapper\"\n     *ngIf=\"control\"\n     [ngClass]=\"twClassList\">\n  <div class=\"form-input-group\">\n\n    <div class=\"form-input-group-prepend\">\n      <ng-content select=\"[edsInputPrepend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-group-append\">\n      <ng-content select=\"[edsInputAppend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-trailing-icon\"\n         *ngIf=\"status\">\n      <eds-svg [attributes]=\"{'fill': 'currentColor', 'viewBox': '0 0 64 64'}\"\n               [svgPath]=\"statusIconLookup[status]\"></eds-svg>\n    </div>\n\n    <div class=\"form-input-group-content\">\n      <input [formControl]=\"control\"\n             class=\"form-input-field\"\n             type=\"text\"\n             [mask]=\"mask\"\n             [id]=\"id\"\n             [name]=\"name\"\n             [attr.minlength]=\"minLength ?? null\"\n             [required]=\"required\"\n             [placeholder]=\"placeholder\"\n             [attr.maxlength]=\"maxLength ?? null\"\n             [attr.aria-describedby]=\"(control.pristine && control.touched) === false && helperText ? 'form-field-helper' : null\">\n      <label class=\"form-input-label\"\n             [for]=\"id\">\n        {{ placeholder }} {{ required ? '*' : ''}}\n      </label>\n\n      <eds-svg class=\"form-input-leading-icon\"\n               *ngIf=\"leadingIconPath\"\n               [svgSizeClass]=\"'icon-18'\"\n               [twClassList]=\"['text-gray-dark']\"\n               [attributes]=\"{'fill': 'currentColor', 'height': '16', 'width': '16'}\"\n               [svgPath]=\"leadingIconPath\"></eds-svg>\n\n    </div>\n  </div>\n\n  <div class=\"form-input-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: SvgComponent, selector: "eds-svg", inputs: ["svgPath", "twClassList", "attributes", "svgSizeClass"] }, { kind: "component", type: FormHintsComponent, selector: "eds-form-hints", inputs: ["control", "helperText", "maxLength", "currLength", "errorMessage"] }, { kind: "directive", type: i5.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-input', template: "<div class=\"form-input-wrapper\"\n     *ngIf=\"control\"\n     [ngClass]=\"twClassList\">\n  <div class=\"form-input-group\">\n\n    <div class=\"form-input-group-prepend\">\n      <ng-content select=\"[edsInputPrepend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-group-append\">\n      <ng-content select=\"[edsInputAppend]\"></ng-content>\n    </div>\n\n    <div class=\"form-input-trailing-icon\"\n         *ngIf=\"status\">\n      <eds-svg [attributes]=\"{'fill': 'currentColor', 'viewBox': '0 0 64 64'}\"\n               [svgPath]=\"statusIconLookup[status]\"></eds-svg>\n    </div>\n\n    <div class=\"form-input-group-content\">\n      <input [formControl]=\"control\"\n             class=\"form-input-field\"\n             type=\"text\"\n             [mask]=\"mask\"\n             [id]=\"id\"\n             [name]=\"name\"\n             [attr.minlength]=\"minLength ?? null\"\n             [required]=\"required\"\n             [placeholder]=\"placeholder\"\n             [attr.maxlength]=\"maxLength ?? null\"\n             [attr.aria-describedby]=\"(control.pristine && control.touched) === false && helperText ? 'form-field-helper' : null\">\n      <label class=\"form-input-label\"\n             [for]=\"id\">\n        {{ placeholder }} {{ required ? '*' : ''}}\n      </label>\n\n      <eds-svg class=\"form-input-leading-icon\"\n               *ngIf=\"leadingIconPath\"\n               [svgSizeClass]=\"'icon-18'\"\n               [twClassList]=\"['text-gray-dark']\"\n               [attributes]=\"{'fill': 'currentColor', 'height': '16', 'width': '16'}\"\n               [svgPath]=\"leadingIconPath\"></eds-svg>\n\n    </div>\n  </div>\n\n  <div class=\"form-input-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { mask: [{
                type: Input
            }], leadingIconPath: [{
                type: Input
            }] } });

const ngxMask = [NgxMaskDirective, NgxMaskPipe];
class EdsInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, declarations: [InputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            SvgModule,
            FormHintsModule, NgxMaskDirective, NgxMaskPipe], exports: [InputComponent, NgxMaskDirective, NgxMaskPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, providers: [provideNgxMask()], imports: [CommonModule,
            ReactiveFormsModule,
            SvgModule,
            FormHintsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InputComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        SvgModule,
                        FormHintsModule,
                        ...ngxMask,
                    ],
                    exports: [InputComponent, ...ngxMask],
                    providers: [provideNgxMask()],
                }]
        }] });

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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: EmailInputComponent, selector: "eds-email-input", usesInheritance: true, ngImport: i0, template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           [placeholder]=\"placeholder !== 'Input Placeholder' ? placeholder : 'Email Address'\"\n           [leadingIconPath]=\"'components/assets/icons/mail.svg'\"\n           [validators]=\"emailValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-l border-gray\"\n       edsInputAppend>\n    @duke-energy.com\n  </div>\n</eds-input>", dependencies: [{ kind: "component", type: InputComponent, selector: "eds-input", inputs: ["mask", "leadingIconPath"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EmailInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-email-input', template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           [placeholder]=\"placeholder !== 'Input Placeholder' ? placeholder : 'Email Address'\"\n           [leadingIconPath]=\"'components/assets/icons/mail.svg'\"\n           [validators]=\"emailValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-l border-gray\"\n       edsInputAppend>\n    @duke-energy.com\n  </div>\n</eds-input>" }]
        }] });

class EdsEmailInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsEmailInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsEmailInputModule, declarations: [EmailInputComponent], imports: [CommonModule, EdsInputModule], exports: [EmailInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsEmailInputModule, imports: [CommonModule, EdsInputModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsEmailInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, EdsInputModule],
                    declarations: [EmailInputComponent],
                    exports: [EmailInputComponent],
                }]
        }] });

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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: PhoneInputComponent, selector: "eds-phone-input", usesInheritance: true, ngImport: i0, template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           placeholder=\"Phone Number\"\n           [mask]=\"phoneMask\"\n           [validators]=\"phoneValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-r border-gray\"\n       edsInputPrepend>\n    +1\n  </div>\n</eds-input>", dependencies: [{ kind: "component", type: InputComponent, selector: "eds-input", inputs: ["mask", "leadingIconPath"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: PhoneInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-phone-input', template: "<eds-input [control]=\"control\"\n           [required]=\"required\"\n           placeholder=\"Phone Number\"\n           [mask]=\"phoneMask\"\n           [validators]=\"phoneValidators\"\n           (inputChange)=\"inputChange.emit($event)\"\n           [size]=\"size\"\n           [id]=\"id\"\n           [name]=\"name\"\n           [state]=\"state\"\n           [status]=\"status\">\n  <div class=\"font-bold px-12 border-r border-gray\"\n       edsInputPrepend>\n    +1\n  </div>\n</eds-input>" }]
        }] });

class EdsPhoneInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPhoneInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsPhoneInputModule, declarations: [PhoneInputComponent], imports: [CommonModule, EdsInputModule], exports: [PhoneInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPhoneInputModule, imports: [CommonModule, EdsInputModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsPhoneInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, EdsInputModule],
                    declarations: [PhoneInputComponent],
                    exports: [PhoneInputComponent],
                }]
        }] });

/**
 * Textarea Component
 *
 * @export
 * @class TextAreaComponent
 * @typedef {TextAreaComponent}
 * @extends {FormBaseInputs}
 */
class TextAreaComponent extends FormBaseInputs {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TextAreaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: TextAreaComponent, selector: "eds-textarea", usesInheritance: true, ngImport: i0, template: "<div class=\"form-textarea-wrapper\">\n\n  <div class=\"form-textarea-group\">\n\n    <textarea class=\"form-textarea-field\"\n              [id]=\"id\"\n              [name]=\"name\"\n              [formControl]=\"control\"\n              [placeholder]=\"placeholder\"\n              [attr.maxlength]=\"maxLength ?? null\"></textarea>\n\n    <label class=\"form-textarea-label\"\n           [for]=\"id\">\n      {{ placeholder }}\n    </label>\n\n  </div>\n\n  <div class=\"form-textarea-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>\n\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FormHintsComponent, selector: "eds-form-hints", inputs: ["control", "helperText", "maxLength", "currLength", "errorMessage"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-textarea', template: "<div class=\"form-textarea-wrapper\">\n\n  <div class=\"form-textarea-group\">\n\n    <textarea class=\"form-textarea-field\"\n              [id]=\"id\"\n              [name]=\"name\"\n              [formControl]=\"control\"\n              [placeholder]=\"placeholder\"\n              [attr.maxlength]=\"maxLength ?? null\"></textarea>\n\n    <label class=\"form-textarea-label\"\n           [for]=\"id\">\n      {{ placeholder }}\n    </label>\n\n  </div>\n\n  <div class=\"form-textarea-support\"\n       *ngIf=\"(control.invalid && !control.pristine) ||  helperText || maxLength \">\n    <eds-form-hints [control]=\"control\"\n                    [helperText]=\"helperText\"\n                    [errorMessage]=\"errorMessage\"\n                    [maxLength]=\"maxLength\"\n                    [currLength]=\"control.value?.length || 0\"></eds-form-hints>\n  </div>\n\n</div>" }]
        }] });

class EdsTextAreaModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsTextAreaModule, declarations: [TextAreaComponent], imports: [CommonModule, FormHintsModule, ReactiveFormsModule], exports: [TextAreaComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTextAreaModule, imports: [CommonModule, FormHintsModule, ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormHintsModule, ReactiveFormsModule],
                    declarations: [TextAreaComponent],
                    exports: [TextAreaComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccountSummaryComponent, BannerBase, BaseInputs, BigIconCardComponent, ButtonBase, ButtonComponent, ButtonGroupComponent, CheckboxComponent, CheckboxesBase, ComponentsModule, DividerBase, DrawerComponent, DynamicComponentDirective, EdsAccordionModule, EdsAccountSummaryModule, EdsBigIconCardModule, EdsButtonGroupModule, EdsButtonsModule, EdsCheckboxesModule, EdsDividersModule, EdsDrawerModule, EdsEmailInputModule, EdsFeaturedMoneyModule, EdsHeroModule, EdsInlineBannersModule, EdsInputModule, EdsModalsModule, EdsPageHeaderModule, EdsPhoneInputModule, EdsSimpleCardModule, EdsSiteBannerModule, EdsTabsModule, EdsTextAreaModule, EdsToastModule, EdsTogglesModule, EdsTooltipModule, EmailInputComponent, FeaturedMoneyComponent, FormBaseInputs, FormHintsComponent, FormHintsModule, HeroComponent, HorizontalDividerComponent, IconButtonComponent, IconCheckboxComponent, InlineBannerComponent, InlineListBannerComponent, InputBaseInputs, InputComponent, ModalComponent, PageHeaderComponent, PhoneInputComponent, SimpleCardComponent, SiteBannerBase, SiteBannerComponent, StatusIconLookup, SvgComponent, SvgModule, TabsComponent, TextAreaComponent, ToastComponent, ToggleComponent, ToggleGroupComponent, TooltipComponent, TwClassHelpers, VerticalDividerComponent };
//# sourceMappingURL=electronds-ng-components.mjs.map
