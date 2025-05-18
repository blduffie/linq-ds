import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BannerBase } from '../_helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { InlineListBannerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: InlineListBannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-inline-list-banner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-xl relative flex rounded-md border {{borderColor}} bg-{{color}} {{extraTwClasses}}\">\n    <div class=\"px-16 py-12 rounded-tl-md rounded-bl-md\">\n        <img [src]=\"icon\"\n             class=\"icon-24 text-{{color}}\" />\n    </div>\n    <div class=\"rich-text font-bold px-16 py-12 rounded-br-md rounded-tr-md w-full bg-white\">\n        {{title}}\n        <a *ngIf=\"link !== ''\"\n           href=\"{{link}}\">{{linkText}}</a>\n        <ul class=\"mt-8 font-normal\">\n            <li *ngFor=\"let msg of messages\"\n                class=\"my-4 before:left-8\">{{msg}}</li>\n        </ul>\n    </div>\n</div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], messages: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWxpc3QtYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9pbmxpbmUtYmFubmVycy9pbmxpbmUtbGlzdC1iYW5uZXIvaW5saW5lLWxpc3QtYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9pbmxpbmUtYmFubmVycy9pbmxpbmUtbGlzdC1iYW5uZXIvaW5saW5lLWxpc3QtYmFubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUV6Qzs7Ozs7OztHQU9HO0FBQ0gsTUFNYSx5QkFBMEIsU0FBUSxVQUFVO0lBTnpEOztRQU9FOzs7O1dBSUc7UUFDTSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRTVCOzs7O1dBSUc7UUFDTSxhQUFRLEdBQWEsSUFBSSxLQUFLLEVBQVUsQ0FBQztLQUNuRDs4R0FkWSx5QkFBeUI7a0dBQXpCLHlCQUF5Qix1SUNqQnRDLGtvQkFjTTs7U0RHTyx5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDRSx3QkFBd0IsbUJBR2pCLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhbm5lckJhc2UgfSBmcm9tICcuLi9faGVscGVycyc7XG5cbi8qKlxuICogQmFubmVyIHRvIGRpc3BsYXkgd2l0aCBsaXN0IG9mIGl0ZW1zIChjYW5ub3QgYmUgZGlzbWlzc2VkIGJ5IHVzZXIpXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIElubGluZUxpc3RCYW5uZXJDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtJbmxpbmVMaXN0QmFubmVyQ29tcG9uZW50fVxuICogQGV4dGVuZHMge0Jhbm5lckJhc2V9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy1pbmxpbmUtbGlzdC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5saW5lLWxpc3QtYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5saW5lLWxpc3QtYmFubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBJbmxpbmVMaXN0QmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQmFubmVyQmFzZSB7XG4gIC8qKlxuICAgKiBNYWluIHRpdGxlIG9mIHRoZSBiYW5uZXJcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogTGlzdCBvZiBtZXNzYWdlcy90ZXh0cyB0byBkaXNwbGF5XG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhsIHJlbGF0aXZlIGZsZXggcm91bmRlZC1tZCBib3JkZXIge3tib3JkZXJDb2xvcn19IGJnLXt7Y29sb3J9fSB7e2V4dHJhVHdDbGFzc2VzfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicHgtMTYgcHktMTIgcm91bmRlZC10bC1tZCByb3VuZGVkLWJsLW1kXCI+XG4gICAgICAgIDxpbWcgW3NyY109XCJpY29uXCJcbiAgICAgICAgICAgICBjbGFzcz1cImljb24tMjQgdGV4dC17e2NvbG9yfX1cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWNoLXRleHQgZm9udC1ib2xkIHB4LTE2IHB5LTEyIHJvdW5kZWQtYnItbWQgcm91bmRlZC10ci1tZCB3LWZ1bGwgYmctd2hpdGVcIj5cbiAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDxhICpuZ0lmPVwibGluayAhPT0gJydcIlxuICAgICAgICAgICBocmVmPVwie3tsaW5rfX1cIj57e2xpbmtUZXh0fX08L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cIm10LTggZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbXNnIG9mIG1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm15LTQgYmVmb3JlOmxlZnQtOFwiPnt7bXNnfX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC9kaXY+Il19