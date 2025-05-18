import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DividerBase } from '../_helpers/divider.base';
import * as i0 from "@angular/core";
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
export { HorizontalDividerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: HorizontalDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-horizontal-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Horizontal divider -->\n<div class=\"flex flex-row justify-center items-center w-full my-16 {{text ? 'gap-12' : 'gap-0'}} \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray\n            {{horizontalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>" }]
        }], propDecorators: { textAlign: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvZGl2aWRlcnMvaG9yaXpvbnRhbC9ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9kaXZpZGVycy9ob3Jpem9udGFsL2hvcml6b250YWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV2RDs7Ozs7OztHQU9HO0FBQ0gsTUFLYSwwQkFBMkIsU0FBUSxXQUFXO0lBTDNEOztRQU1FOzs7O1dBSUc7UUFDTSxjQUFTLEdBQXdCLFFBQVEsQ0FBQztLQVNwRDtJQVBDOzs7T0FHRztJQUNILElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OEdBZFUsMEJBQTBCO2tHQUExQiwwQkFBMEIseUhDakJ2QyxpVUFLTTs7U0RZTywwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx3QkFBd0IsbUJBRWpCLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbFBsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgeyBEaXZpZGVyQmFzZSB9IGZyb20gJy4uL19oZWxwZXJzL2RpdmlkZXIuYmFzZSc7XG5cbi8qKlxuICogSG9yaXpvbnRhbCBEaXZpZGVyXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEhvcml6b250YWxEaXZpZGVyQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7SG9yaXpvbnRhbERpdmlkZXJDb21wb25lbnR9XG4gKiBAZXh0ZW5kcyB7RGl2aWRlckJhc2V9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy1ob3Jpem9udGFsLWRpdmlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsRGl2aWRlckNvbXBvbmVudCBleHRlbmRzIERpdmlkZXJCYXNlIHtcbiAgLyoqXG4gICAqIFRleHQgcGxhY2VtZW50IHdpdGhpbiBkaXZpZGVyXG4gICAqXG4gICAqIEB0eXBlIHtIb3Jpem9udGFsUGxhY2VtZW50fVxuICAgKi9cbiAgQElucHV0KCkgdGV4dEFsaWduOiBIb3Jpem9udGFsUGxhY2VtZW50ID0gJ2NlbnRlcic7XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGhvcml6b250YWxDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnR3Q2xhc3Nlcyh0aGlzLnRleHRBbGlnbik7XG4gIH1cbn1cbiIsIjwhLS0gSG9yaXpvbnRhbCBkaXZpZGVyIC0tPlxuPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBteS0xNiB7e3RleHQgPyAnZ2FwLTEyJyA6ICdnYXAtMCd9fSBcbiAgICAgICAgICAgIGVtcHR5OmdhcC0wIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LWdyYXktZGFyay82MCB1cHBlcmNhc2UgbGVhZGluZy1ub25lIGJlZm9yZTpiZy1ncmF5IGFmdGVyOmJnLWdyYXlcbiAgICAgICAgICAgIHt7aG9yaXpvbnRhbENsYXNzfX0ge3tleHRyYVR3Q2xhc3Nlc319XCI+XG4gIHt7dGV4dH19XG48L2Rpdj4iXX0=