import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonBase } from '../_helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { IconButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRXpDOzs7Ozs7O0dBT0c7QUFDSCxNQUthLG1CQUFvQixTQUFRLFVBQVU7SUFMbkQ7O1FBTUU7Ozs7V0FJRztRQUNNLGtCQUFhLEdBQWMsTUFBTSxDQUFDO1FBRTNDOzs7O1dBSUc7UUFDTSxjQUFTLEdBQWE7WUFDN0IsR0FBRyxFQUFFLEVBQUU7WUFDUCxTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO1FBRUY7Ozs7V0FJRztRQUNNLFlBQU8sR0FBWTtZQUMxQixDQUFDLEVBQUUsRUFBRTtZQUNMLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7S0F1Qkg7SUFyQkM7OztPQUdHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FDN0MsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLHNCQUFzQixDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ3ZDLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUN6QixDQUFDO0lBQ0osQ0FBQzs4R0FsRFUsbUJBQW1CO2tHQUFuQixtQkFBbUIsc0tDakJoQyxta0JBZ0JTOztTRENJLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQixtQkFFVix1QkFBdUIsQ0FBQyxNQUFNOzhCQVF0QyxhQUFhO3NCQUFyQixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBV0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25NZXRhLCBQbGFjZW1lbnQsIFN2Z01ldGEgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uQmFzZSB9IGZyb20gJy4uL19oZWxwZXJzJztcblxuLyoqXG4gKiBJY29uIEJ1dHRvblxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBJY29uQnV0dG9uQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7SWNvbkJ1dHRvbkNvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtCdXR0b25CYXNlfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtaWNvbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJ1dHRvbkJhc2Uge1xuICAvKipcbiAgICogV2hlcmUgb24gdGhlIGJ1dHRvbiB0aGUgaWNvbiBpcyBkaXNwbGF5ZWRcbiAgICpcbiAgICogQHR5cGUge1BsYWNlbWVudH1cbiAgICovXG4gIEBJbnB1dCgpIGljb25QbGFjZW1lbnQ6IFBsYWNlbWVudCA9ICdsZWZ0JztcblxuICAvKipcbiAgICogSWNvbiBkYXRhXG4gICAqXG4gICAqIEB0eXBlIHtJY29uTWV0YX1cbiAgICovXG4gIEBJbnB1dCgpIGltYWdlRGF0YTogSWNvbk1ldGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBpY29uQ2xhc3M6ICdpY29uLTI0JyxcbiAgICBhbHRUZXh0OiAnaW1hZ2UnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBTdmcgRGF0YVxuICAgKlxuICAgKiBAdHlwZSB7U3ZnTWV0YX1cbiAgICovXG4gIEBJbnB1dCgpIHN2Z0RhdGE6IFN2Z01ldGEgPSB7XG4gICAgZDogJycsXG4gICAgdmlld0JveDogJzAgMCA2NCA2NCcsXG4gICAgaWNvbkNsYXNzOiAnaWNvbi0xNicsXG4gIH07XG5cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGljb25CdXR0b25DbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLlR3Q2xhc3NIZWxwZXJzLmJ1aWxkSWNvbkJ1dHRvbkNsYXNzKFxuICAgICAgdGhpcy5pY29uUGxhY2VtZW50LFxuICAgICAgdGhpcy50d0NsYXNzZXNCYXNlZE9uSW5wdXRzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpY29uQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5Ud0NsYXNzSGVscGVycy5idWlsZEljb25DbGFzcyhcbiAgICAgIHRoaXMuaWNvblBsYWNlbWVudCxcbiAgICAgIHRoaXMuaW1hZ2VEYXRhLmljb25DbGFzc1xuICAgICk7XG4gIH1cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJidG4ge3tpY29uQnV0dG9uQ2xhc3N9fVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlQnV0dG9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICA8aW1nICpuZ0lmPVwiaW1hZ2VEYXRhLnNyYyAhPT0gJydcIlxuICAgICAgICAgIGNsYXNzPVwie3tpY29uQ2xhc3N9fVwiXG4gICAgICAgICAgc3JjPVwie3tpbWFnZURhdGEuc3JjfX1cIiAvPlxuXG4gICAgIDxzdmcgKm5nSWY9XCJzdmdEYXRhLmQgIT09ICcnXCJcbiAgICAgICAgICBjbGFzcz1cImZpbGwtY3VycmVudCB0ZXh0LWJsdWUge3tzdmdEYXRhLmljb25DbGFzc319XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBbYXR0ci52aWV3Qm94XT1cInN2Z0RhdGEudmlld0JveFwiXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgIDxwYXRoIFthdHRyLmRdPVwic3ZnRGF0YS5kXCIgLz5cbiAgICAgPC9zdmc+XG4gICAgIHt7dGV4dH19XG48L2J1dHRvbj4iXX0=