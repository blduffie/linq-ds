import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
export { PageHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUU7Ozs7Ozs7R0FPRztBQUNILE1BS2EsbUJBQW1CO0lBTGhDO1FBTUU7Ozs7V0FJRztRQUNNLFVBQUssR0FBVyxZQUFZLENBQUM7UUFDdEM7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQVcsa0JBQWtCLENBQUM7UUFDbEQ7Ozs7V0FJRztRQUNNLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0tBQ3RDOzhHQW5CWSxtQkFBbUI7a0dBQW5CLG1CQUFtQixpSkNmaEMsa1RBVVM7O1NES0ksbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCLG1CQUVWLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxXQUFXO3NCQUFuQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBhZ2UgSGVhZGVyIHdpdGggb3B0aW9uYWwgZGVzY3JpcHRpb25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudFxuICogQHR5cGVkZWYge1BhZ2VIZWFkZXJDb21wb25lbnR9XG4gKiBAZXh0ZW5kcyB7QmFzZUlucHV0c31cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRzLXBhZ2UtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnQge1xuICAvKipcbiAgICogVGl0bGUgdG8gZGlzcGxheSBhdCB0b3BcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnUGFnZSBUaXRsZSc7XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiB0byBkaXNwbGF5IHVuZGVybmVhdGggdGl0bGVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFnZSBEZXNjcmlwdGlvbic7XG4gIC8qKlxuICAgKiBUYWlsd2luZCBjbGFzc2VzIHRvIGN1c3RvbWl6ZSBtYWluIGNvbnRhaW5lclxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZXh0cmFUd0NsYXNzZXM6IHN0cmluZyA9ICcnO1xufVxuIiwiPGhlYWRlciBjbGFzcz1cInB4LTE2IG1kOnB4LTI0IHB5LTMyIG1kOnB5LTQ4IGJnLXdoaXRlIHt7ZXh0cmFUd0NsYXNzZXN9fVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhsIHRleHQtY2VudGVyXCI+XG4gICAgPGgxIGNsYXNzPVwidGV4dC0zeGwgdGV4dC1ibHVlXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2gxPlxuXG4gICAgPHAgY2xhc3M9XCJyaWNoLXRleHQgdGV4dC1sZyB0ZXh0LWJsdWUgcHQtNiBtZDpwdC0xMlwiPlxuICAgICAge3tkZXNjcmlwdGlvbn19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvaGVhZGVyPiJdfQ==