import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DividerBase } from '../_helpers/divider.base';
import * as i0 from "@angular/core";
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
export { VerticalDividerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: VerticalDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-vertical-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Vertical divider -->\n<div class=\"flex flex-col justify-center items-center h-full mx-16 {{text ? 'gap-8' : 'gap-0'}}  \n            empty:gap-0 text-center font-bold text-gray-dark/60 uppercase leading-none before:bg-gray after:bg-gray \n            {{verticalClass}} {{extraTwClasses}}\">\n  {{text}}\n</div>" }]
        }], propDecorators: { textAlign: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2RpdmlkZXJzL3ZlcnRpY2FsL3ZlcnRpY2FsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9kaXZpZGVycy92ZXJ0aWNhbC92ZXJ0aWNhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXZEOzs7Ozs7O0dBT0c7QUFDSCxNQUthLHdCQUF5QixTQUFRLFdBQVc7SUFMekQ7O1FBTUU7Ozs7V0FJRztRQUNNLGNBQVMsR0FBc0IsUUFBUSxDQUFDO0tBU2xEO0lBUEM7OztPQUdHO0lBQ0gsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzhHQWRVLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHVIQ2pCckMsOFRBS007O1NEWU8sd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0Usc0JBQXNCLG1CQUVmLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVydGljYWxQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgRGl2aWRlckJhc2UgfSBmcm9tICcuLi9faGVscGVycy9kaXZpZGVyLmJhc2UnO1xuXG4vKipcbiAqIFZlcnRpY2FsIERpdmlkZXJcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmVydGljYWxEaXZpZGVyQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7VmVydGljYWxEaXZpZGVyQ29tcG9uZW50fVxuICogQGV4dGVuZHMge0RpdmlkZXJCYXNlfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtdmVydGljYWwtZGl2aWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZXJ0aWNhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbERpdmlkZXJDb21wb25lbnQgZXh0ZW5kcyBEaXZpZGVyQmFzZSB7XG4gIC8qKlxuICAgKiBUZXh0IHBsYWNlbWVudCB3aXRoaW4gZGl2aWRlclxuICAgKlxuICAgKiBAdHlwZSB7VmVydGljYWxQbGFjZW1lbnR9XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0QWxpZ246IFZlcnRpY2FsUGxhY2VtZW50ID0gJ2NlbnRlcic7XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZlcnRpY2FsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50d0NsYXNzZXModGhpcy50ZXh0QWxpZ24pO1xuICB9XG59XG4iLCI8IS0tIFZlcnRpY2FsIGRpdmlkZXIgLS0+XG48ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIG14LTE2IHt7dGV4dCA/ICdnYXAtOCcgOiAnZ2FwLTAnfX0gIFxuICAgICAgICAgICAgZW1wdHk6Z2FwLTAgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtZ3JheS1kYXJrLzYwIHVwcGVyY2FzZSBsZWFkaW5nLW5vbmUgYmVmb3JlOmJnLWdyYXkgYWZ0ZXI6YmctZ3JheSBcbiAgICAgICAgICAgIHt7dmVydGljYWxDbGFzc319IHt7ZXh0cmFUd0NsYXNzZXN9fVwiPlxuICB7e3RleHR9fVxuPC9kaXY+Il19