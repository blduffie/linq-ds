import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { AccordionComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-accordion', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-4xl -mx-16 sm:mx-auto {{extraTwClasses}}\">\n  <ul class=\"divide-y divide-gray\">\n    <li *ngFor=\"let item of getItems(), let i=index\">\n      <div>\n        <button class=\"flex items-center justify-between w-full p-16 md:py-24 text-xl text-teal-darker text-left hover:bg-teal-lighter transition-colors duration-200\"\n                type=\"button\"\n                (click)=\"toggleExpansion(item)\"\n                [attr.aria-expanded]=\"expanded(item)\"\n                [attr.aria-controls]=\"'accordion-content-' + i+1\"\n                [id]=\"'accordion-question-' + i+1\">\n\n          {{item.content.title}}\n\n          <svg class=\"icon-16 md:icon-20 flex-shrink-0 ml-24 md:ml-32 transform duration-300\"\n               [ngClass]=\"{'scale-y-flip': expanded(item), '': !expanded(item)}\"\n               xmlns=\"http://www.w3.org/2000/svg\"\n               viewBox=\"0 0 64 64\"\n               fill=\"currentColor\"\n               aria-hidden=\"true\"\n               focusable=\"false\">\n            <path\n                  d=\"M57.404,16.997c1.634-1.441,4.123-1.304,5.588,.308,1.442,1.59,1.323,4.048-.268,5.491-.015,.013-.029,.026-.044,.039l-27.307,24.169c-1.479,1.304-3.688,1.332-5.199,.067L1.397,22.905c-1.649-1.376-1.869-3.828-.493-5.476,.012-.015,.025-.029,.037-.044,1.424-1.65,3.908-1.851,5.578-.451l26.148,21.956,24.737-21.893Z\" />\n          </svg>\n        </button>\n      </div>\n      <div class=\"grid relative px-16 transition-all duration-300\"\n           [ngClass]=\"{'grid-rows-1fr': expanded(item), 'grid-rows-0fr': !expanded(item)}\"\n           [id]=\"'accordion-content-' + i+1\"\n           [attr.aria-hidden]=\"!expanded(item)\"\n           [attr.aria-labelledby]=\"'accordion-question-' + i+1\">\n        <div [ngClass]=\"{'opacity-100 translate-y-0': expanded(item), 'opacity-0 -translate-y-12': !expanded(item)}\"\n             class=\"overflow-hidden transform transition-all duration-500\">\n          <p class=\"mb-28\"\n             *ngIf=\"item.content.contentText\">\n            {{item.content.contentText}}\n          </p>\n          <ng-container *ngIf=\"item.content.contentTemplate\"\n                        [ngTemplateOutlet]=\"item.content.contentTemplate\">\n\n          </ng-container>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>" }]
        }], propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVN2Qzs7Ozs7OztHQU9HO0FBQ0gsTUFLYSxrQkFBbUIsU0FBUSxVQUFVO0lBTGxEOztRQXVCRTs7O1dBR0c7UUFDSyxXQUFNLEdBQW9CLElBQUksS0FBSyxFQUFpQixDQUFDO0tBZ0M5RDtJQXJEQzs7OztPQUlHO0lBQ0gsSUFBYSxLQUFLLENBQUMsS0FBMEI7UUFDM0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3pCLEVBQUUsRUFBRSxDQUFDO29CQUNMLFVBQVUsRUFBRSxLQUFLO29CQUNqQixPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRTtpQkFDckIsQ0FBQyxDQUFDO2FBQ0osQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQVFEOzs7OztPQUtHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBaUIsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksUUFBUSxDQUFDLElBQW1CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksZUFBZSxDQUFDLElBQW1CO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7OEdBckRVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLHdHQ3ZCL0IsZ3lFQTRDTTs7U0RyQk8sa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNOzhCQVFsQyxLQUFLO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJbnB1dHMgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgQ29udGVudE1vZGVsIH0gZnJvbSAnLi9faGVscGVycyc7XG5cbnR5cGUgQWNjb3JkaW9uSXRlbSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgaXNFeHBhbmRlZDogYm9vbGVhbjtcbiAgY29udGVudDogQ29udGVudE1vZGVsO1xufTtcblxuLyoqXG4gKiBBY2NvcmRpb24gY29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudFxuICogQHR5cGVkZWYge0FjY29yZGlvbkNvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtCYXNlSW5wdXRzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIEFycmF5IG9mIENvbnRlbnRNb2RlbFxuICAgKlxuICAgKiBAdHlwZSB7Q29udGVudE1vZGVsW119XG4gICAqL1xuICBASW5wdXQoKSBzZXQgaXRlbXMoaXRlbXM6IEFycmF5PENvbnRlbnRNb2RlbD4pIHtcbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gW1xuICAgICAgICAuLi5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+ICh7XG4gICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgY29udGVudDogeyAuLi5pdGVtIH0sXG4gICAgICAgIH0pKSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBY2NvcmRpb25JdGVtW119XG4gICAqL1xuICBwcml2YXRlIF9pdGVtczogQWNjb3JkaW9uSXRlbVtdID0gbmV3IEFycmF5PEFjY29yZGlvbkl0ZW0+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaXRlbXMgZnJvbSBpbnB1dFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtBY2NvcmRpb25JdGVtW119XG4gICAqL1xuICBwdWJsaWMgZ2V0SXRlbXMoKTogQWNjb3JkaW9uSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXMgPz8gbmV3IEFycmF5PEFjY29yZGlvbkl0ZW0+KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFjY29yZGlvbiBpdGVtIGlzIGV4cGFuZGVkXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtBY2NvcmRpb25JdGVtfSBpdGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgcHVibGljIGV4cGFuZGVkKGl0ZW06IEFjY29yZGlvbkl0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXRlbS5pc0V4cGFuZGVkID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgZXhwYW5zaW9uIG9mIGFjY29yZGlvbiBpdGVtXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtBY2NvcmRpb25JdGVtfSBpdGVtXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlRXhwYW5zaW9uKGl0ZW06IEFjY29yZGlvbkl0ZW0pOiB2b2lkIHtcbiAgICBpdGVtLmlzRXhwYW5kZWQgPSAhaXRlbS5pc0V4cGFuZGVkO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLTR4bCAtbXgtMTYgc206bXgtYXV0byB7e2V4dHJhVHdDbGFzc2VzfX1cIj5cbiAgPHVsIGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXlcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ2V0SXRlbXMoKSwgbGV0IGk9aW5kZXhcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHAtMTYgbWQ6cHktMjQgdGV4dC14bCB0ZXh0LXRlYWwtZGFya2VyIHRleHQtbGVmdCBob3ZlcjpiZy10ZWFsLWxpZ2h0ZXIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRXhwYW5zaW9uKGl0ZW0pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImV4cGFuZGVkKGl0ZW0pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIidhY2NvcmRpb24tY29udGVudC0nICsgaSsxXCJcbiAgICAgICAgICAgICAgICBbaWRdPVwiJ2FjY29yZGlvbi1xdWVzdGlvbi0nICsgaSsxXCI+XG5cbiAgICAgICAgICB7e2l0ZW0uY29udGVudC50aXRsZX19XG5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi0xNiBtZDppY29uLTIwIGZsZXgtc2hyaW5rLTAgbWwtMjQgbWQ6bWwtMzIgdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NjYWxlLXktZmxpcCc6IGV4cGFuZGVkKGl0ZW0pLCAnJzogIWV4cGFuZGVkKGl0ZW0pfVwiXG4gICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxuICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTU3LjQwNCwxNi45OTdjMS42MzQtMS40NDEsNC4xMjMtMS4zMDQsNS41ODgsLjMwOCwxLjQ0MiwxLjU5LDEuMzIzLDQuMDQ4LS4yNjgsNS40OTEtLjAxNSwuMDEzLS4wMjksLjAyNi0uMDQ0LC4wMzlsLTI3LjMwNywyNC4xNjljLTEuNDc5LDEuMzA0LTMuNjg4LDEuMzMyLTUuMTk5LC4wNjdMMS4zOTcsMjIuOTA1Yy0xLjY0OS0xLjM3Ni0xLjg2OS0zLjgyOC0uNDkzLTUuNDc2LC4wMTItLjAxNSwuMDI1LS4wMjksLjAzNy0uMDQ0LDEuNDI0LTEuNjUsMy45MDgtMS44NTEsNS41NzgtLjQ1MWwyNi4xNDgsMjEuOTU2LDI0LjczNy0yMS44OTNaXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkIHJlbGF0aXZlIHB4LTE2IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ3JpZC1yb3dzLTFmcic6IGV4cGFuZGVkKGl0ZW0pLCAnZ3JpZC1yb3dzLTBmcic6ICFleHBhbmRlZChpdGVtKX1cIlxuICAgICAgICAgICBbaWRdPVwiJ2FjY29yZGlvbi1jb250ZW50LScgKyBpKzFcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCIhZXhwYW5kZWQoaXRlbSlcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2FjY29yZGlvbi1xdWVzdGlvbi0nICsgaSsxXCI+XG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wJzogZXhwYW5kZWQoaXRlbSksICdvcGFjaXR5LTAgLXRyYW5zbGF0ZS15LTEyJzogIWV4cGFuZGVkKGl0ZW0pfVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4gdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWItMjhcIlxuICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5jb250ZW50LmNvbnRlbnRUZXh0XCI+XG4gICAgICAgICAgICB7e2l0ZW0uY29udGVudC5jb250ZW50VGV4dH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmNvbnRlbnQuY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudC5jb250ZW50VGVtcGxhdGVcIj5cblxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L2Rpdj4iXX0=