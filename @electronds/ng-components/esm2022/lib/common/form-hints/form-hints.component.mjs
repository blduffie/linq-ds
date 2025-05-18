import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { FormHintsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1oaW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvY29tbW9uL2Zvcm0taGludHMvZm9ybS1oaW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvY29tbW9uL2Zvcm0taGludHMvZm9ybS1oaW50cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUU3Qzs7Ozs7O0dBTUc7QUFDSCxNQUlhLGtCQUFrQjtJQUovQjtRQUtFOzs7O1dBSUc7UUFDTSxZQUFPLEdBQTBCLFNBQVMsQ0FBQztRQUNwRDs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUNqQzs7OztXQUlHO1FBQ00sY0FBUyxHQUFZLFNBQVMsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLENBQUMsQ0FBQztRQUNoQzs7OztXQUlHO1FBQ00saUJBQVksR0FBWSxTQUFTLENBQUM7S0FDNUM7OEdBL0JZLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdNQ2QvQixpc0JBcUJlOztTRFBGLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLGdCQUFnQjs4QkFTakIsT0FBTztzQkFBZixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU1HLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIaW50cyBhbmQgZXJyb3JzIHRoYXQgYXBwZWFyIHVuZGVybmVhdGggZm9ybXMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEZvcm1IaW50c0NvbXBvbmVudFxuICogQHR5cGVkZWYge0Zvcm1IaW50c0NvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRzLWZvcm0taGludHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1oaW50cy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1IaW50c0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBGb3JtIENvbnRyb2wgZm9yIGlucHV0XG4gICAqXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbH1cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2w/OiBGb3JtQ29udHJvbDx1bmtub3duPiA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGhlbHBlciB0ZXh0IGZvciBmb3JtXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIG1heCBsZW5ndGggZmllbGRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEBJbnB1dCgpIG1heExlbmd0aD86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGN1cnJlbnQgbGVuZ3RoIGZpZWxkLiBTaG91bGQgYmUgc2V0IHRvIHdvcmsgd2l0aCBtYXggbGVuZ3RoLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQElucHV0KCkgY3Vyckxlbmd0aDogbnVtYmVyID0gMDtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2xcIj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZC1oaW50c1wiXG4gICAgICAgKm5nSWY9XCIoY29udHJvbC5pbnZhbGlkICYmICFjb250cm9sLnByaXN0aW5lKSB8fCAgaGVscGVyVGV4dCAmJiAoY29udHJvbC5zdGF0dXNDaGFuZ2VzIHwgYXN5bmMpICE9PSAnUEVORElORycgfHwgbWF4TGVuZ3RoXCI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiKGNvbnRyb2wuaW52YWxpZCAmJiAhY29udHJvbC5wcmlzdGluZSk7IGVsc2UgaGVscGVyVGV4dEZpZWxkXCJcbiAgICAgICAgIGNsYXNzPVwidGV4dC1yZWRcIj5cbiAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlICNoZWxwZXJUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWZpZWxkLWhlbHBlclwiXG4gICAgICAgICAgICAgICAgIGlkPVwiZm9ybS1maWVsZC1oZWxwZXJcIj5cbiAgICAgIHt7IGhlbHBlclRleHQgfX1cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGQtY291bnRcIlxuICAgICAgICAgKm5nSWY9XCJtYXhMZW5ndGhcIj5cbiAgICAgIDxzcGFuPnt7IGN1cnJMZW5ndGggfX08L3NwYW4+IC8gPHNwYW4+e3sgbWF4TGVuZ3RoIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPiJdfQ==