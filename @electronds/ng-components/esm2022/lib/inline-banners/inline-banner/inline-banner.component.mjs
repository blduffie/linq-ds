import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BannerBase } from '../_helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { InlineBannerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvaW5saW5lLWJhbm5lcnMvaW5saW5lLWJhbm5lci9pbmxpbmUtYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9pbmxpbmUtYmFubmVycy9pbmxpbmUtYmFubmVyL2lubGluZS1iYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRXpDOzs7Ozs7O0dBT0c7QUFDSCxNQU1hLHFCQUFzQixTQUFRLFVBQVU7SUFOckQ7O1FBT0U7Ozs7V0FJRztRQUNNLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFOUI7Ozs7V0FJRztRQUNNLGVBQVUsR0FBVyxFQUFFLENBQUM7S0FRbEM7OEdBckJZLHFCQUFxQjtrR0FBckIscUJBQXFCLGdLQ2xCbEMsd2tCQWNNOztTRElPLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLG1CQUFtQixtQkFHWix1QkFBdUIsQ0FBQyxNQUFNOzhCQVF0QyxPQUFPO3NCQUFmLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFubmVyQmFzZSB9IGZyb20gJy4uL19oZWxwZXJzJztcblxuLyoqXG4gKiBCYW5uZXIgdG8gZGlzcGxheSAoY2Fubm90IGJlIGRpc21pc3NlZCBieSB1c2VyKVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBJbmxpbmVCYW5uZXJDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtJbmxpbmVCYW5uZXJDb21wb25lbnR9XG4gKiBAZXh0ZW5kcyB7QmFubmVyQmFzZX1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRzLWlubGluZS1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5saW5lLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lubGluZS1iYW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIElubGluZUJhbm5lckNvbXBvbmVudCBleHRlbmRzIEJhbm5lckJhc2Uge1xuICAvKipcbiAgICogTWVzc2FnZS90ZXh0IHRvIGRpc3BsYXkgb24gYmFubmVyXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQWN0aW9uIHRleHQsIGxvb2sgYW5kIGZlZWwgb2YgYSBsaW5rXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBhY3Rpb25UZXh0OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQWN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gY2xpY2sgZXZlbnRcbiAgICpcbiAgICogQHR5cGUge3ZvaWR9XG4gICAqL1xuICBASW5wdXQoKSBhY3Rpb25GbiE6ICgpID0+IHZvaWQ7XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhsIHJlbGF0aXZlIGZsZXggcm91bmRlZC1tZCBib3JkZXIge3tib3JkZXJDb2xvcn19IGJnLXt7Y29sb3J9fSB7e2V4dHJhVHdDbGFzc2VzfX1cIj5cbiAgPGRpdiBjbGFzcz1cInB4LTE2IHB5LTEyIHJvdW5kZWQtdGwtbWQgcm91bmRlZC1ibC1tZFwiPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCJcbiAgICAgICAgIGNsYXNzPVwiaWNvbi0yNCB0ZXh0LXt7Y29sb3J9fVwiXG4gICAgICAgICBhbHQ9XCJcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dCBweC0xNiBweS0xMiByb3VuZGVkLWJyLW1kIHJvdW5kZWQtdHItbWQgdy1mdWxsIGJnLXdoaXRlXCI+XG4gICAge3ttZXNzYWdlfX1cbiAgICA8YSAqbmdJZj1cImxpbmsgIT09ICcnXCJcbiAgICAgICBocmVmPVwie3tsaW5rfX1cIj57e2xpbmtUZXh0fX08L2E+XG4gICAgPGEgKm5nSWY9XCJhY3Rpb25UZXh0ICE9PSAnJ1wiXG4gICAgICAgKGNsaWNrKT1cImFjdGlvbkZuKClcIlxuICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj57e2FjdGlvblRleHR9fTwvYT5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=