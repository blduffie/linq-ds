import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
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
export { SimpleCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL3NpbXBsZS1jYXJkL3NpbXBsZS1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9zaW1wbGUtY2FyZC9zaW1wbGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUV2Qzs7Ozs7OztHQU9HO0FBQ0gsTUFLYSxtQkFBb0IsU0FBUSxVQUFVO0lBTG5EOztRQU1FOzs7O1dBSUc7UUFDTSxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRWhDOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUVsQzs7OztXQUlHO1FBQ00sYUFBUSxHQUFXLEVBQUUsQ0FBQztLQUNoQzs4R0FyQlksbUJBQW1CO2tHQUFuQixtQkFBbUIsb0tDaEJoQyw2MUNBK0JNOztTRGZPLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQixtQkFFVix1QkFBdUIsQ0FBQyxNQUFNOzhCQVF0QyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VJbnB1dHMgfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBDYXJkXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFNpbXBsZUNhcmRDb21wb25lbnRcclxuICogQHR5cGVkZWYge1NpbXBsZUNhcmRDb21wb25lbnR9XHJcbiAqIEBleHRlbmRzIHtCYXNlc0lucHV0c31cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWRzLXNpbXBsZS1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZENvbXBvbmVudCBleHRlbmRzIEJhc2VJbnB1dHMge1xyXG4gIC8qKlxyXG4gICAqIE1haW4gdGl0bGUgZm9yIGNhcmRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQElucHV0KCkgY2FyZFRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogU3VidGV4dCBmb3IgY2FyZFxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEljb24gcGF0aFxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBASW5wdXQoKSBjYXJkSWNvbjogc3RyaW5nID0gJyc7XHJcbn1cclxuIiwiPGRpdlxyXG4gICAgIGNsYXNzPVwiY29udGFpbmVyLW1kIHJlbGF0aXZlIGZsZXggcC0xNiByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheSBiZy13aGl0ZSBzbTpob3ZlcjpzY2FsZS0xMDIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHt7ZXh0cmFUd0NsYXNzZXN9fVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wIG1yLTEyIHNtOm1yLTE2IHNtOmZsZXggc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICA8aW1nIGNsYXNzPVwiaWNvbi0yNFwiXHJcbiAgICAgICAgIFtzcmNdPVwiY2FyZEljb25cIlxyXG4gICAgICAgICBhbHQ9XCJpY29uXCIgLz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInB0LTJcIj5cclxuICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWxnIHRleHQtdGVhbC1kYXJrZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTotaW5zZXQtcHggYmVmb3JlOnJvdW5kZWQtbWQgYmVmb3JlOnNoYWRvdy1zbSBiZWZvcmU6b3BhY2l0eS0wIHNtOmhvdmVyOmJlZm9yZTpvcGFjaXR5LTEwMCBiZWZvcmU6dHJhbnNpdGlvbi1vcGFjaXR5IGJlZm9yZTpkdXJhdGlvbi0zMDAgYmVmb3JlOmVhc2UtaW4tb3V0IFwiXHJcbiAgICAgICAgIGhyZWY9XCIjXCI+XHJcbiAgICAgICAge3tjYXJkVGl0bGV9fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3Bhbj5cclxuICAgICAge3tkZXNjcmlwdGlvbn19XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtc2hyaW5rLTAgbWwtMTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDkgMTRcIlxyXG4gICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICBoZWlnaHQ9XCIyMHB4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC42OSA2LjMybC0uMjM3LS4yMi0uMDItLjAyLS4wMTYtLjAxTDIuMDIzLjI3OEExLjEgMS4xIDAgMCAwIDEuMjg1IDBhMS4xIDEuMSAwIDAgMC0uNzM4LjI3N0wuMzEuNDlhLjkuOSAwIDAgMCAwIDEuMzZMNS45OSA3IC4zMSAxMi4xNWEuOS45IDAgMCAwIDAgMS4zNmwuMjM3LjIxM2ExLjEgMS4xIDAgMCAwIC43MzguMjc3IDEuMSAxLjEgMCAwIDAgLjczOC0uMjc3bDYuNC01LjguMDMtLjAyMy4yMzctLjIxNGEuOS45IDAgMCAwIDAtMS4zNjJ6XCJcclxuICAgICAgICAgICAgZmlsbD1cIiMwNjc3OTlcIiAvPlxyXG4gICAgPC9zdmc+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+Il19