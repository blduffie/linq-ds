import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "../links/nav-card-link/nav-card-link.component";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: BigIconCardComponent, selector: "eds-big-icon-card", inputs: { cardTitle: "cardTitle", description: "description", iconSrc: "iconSrc", href: "href" }, usesInheritance: true, ngImport: i0, template: "<div class='relative flex sm:flex-col sm:h-full {{extraTwClasses}}'>\n\n  <a\n    class='block h-fit mr-12 sm:mr-0 sm:mb-12 flex-shrink-0'\n    href='{{href}}'\n    tabindex='-1'\n    aria-hidden='true'\n  >\n    <img\n      class='icon-80 sm:icon-112 sm:mx-auto rounded-full'\n      src='{{iconSrc}}'\n      alt=''>\n  </a>\n\n  <div class='flex flex-col flex-grow justify-center sm:justify-start text-left sm:text-center max-w-2xs sm:mx-auto'>\n    <h3 class='text-xl'>\n      <eds-nav-card-link [text]=\"cardTitle\"\n                         [href]=\"href\"></eds-nav-card-link>\n    </h3>\n    <p class='mt-4 md:mt-6 sm:mx-auto line-clamp-6'>\n      {{description}}\n    </p>\n  </div>\n\n</div>", dependencies: [{ kind: "component", type: i1.NavCardLinkComponent, selector: "eds-nav-card-link", inputs: ["text", "href"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { BigIconCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnLWljb24tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvYmlnLWljb24tY2FyZC9iaWctaWNvbi1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9iaWctaWNvbi1jYXJkL2JpZy1pY29uLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBRXZDOzs7Ozs7O0dBT0c7QUFDSCxNQUthLG9CQUFxQixTQUFRLFVBQVU7SUFMcEQ7O1FBTUU7Ozs7V0FJRztRQUNNLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFaEM7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRWxDOzs7O1dBSUc7UUFDTSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRTlCOzs7O1dBSUc7UUFDTSxTQUFJLEdBQVcsRUFBRSxDQUFDO0tBQzVCOzhHQTVCWSxvQkFBb0I7a0dBQXBCLG9CQUFvQixrTENoQmpDLDZyQkF3Qk07O1NEUk8sb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsbUJBQW1CLG1CQUVaLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPRyxPQUFPO3NCQUFmLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJbnB1dHMgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKipcbiAqIEJpZyBJY29uIENhcmRcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmlnSWNvbkNhcmRDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtCaWdJY29uQ2FyZENvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtCYXNlSW5wdXRzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtYmlnLWljb24tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iaWctaWNvbi1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJpZ0ljb25DYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUlucHV0cyB7XG4gIC8qKlxuICAgKiBNYWluIHRpdGxlIG9mIHRoZSBjYXJkIChoZWFkZXIpXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBjYXJkVGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBTdWJ0ZXh0IGZvciBjYXJkXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFBhdGggdG8gaWNvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgaWNvblNyYzogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFVSTCAvIFJvdXRlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmcgPSAnJztcbn1cbiIsIjxkaXYgY2xhc3M9J3JlbGF0aXZlIGZsZXggc206ZmxleC1jb2wgc206aC1mdWxsIHt7ZXh0cmFUd0NsYXNzZXN9fSc+XG5cbiAgPGFcbiAgICBjbGFzcz0nYmxvY2sgaC1maXQgbXItMTIgc206bXItMCBzbTptYi0xMiBmbGV4LXNocmluay0wJ1xuICAgIGhyZWY9J3t7aHJlZn19J1xuICAgIHRhYmluZGV4PSctMSdcbiAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgPlxuICAgIDxpbWdcbiAgICAgIGNsYXNzPSdpY29uLTgwIHNtOmljb24tMTEyIHNtOm14LWF1dG8gcm91bmRlZC1mdWxsJ1xuICAgICAgc3JjPSd7e2ljb25TcmN9fSdcbiAgICAgIGFsdD0nJz5cbiAgPC9hPlxuXG4gIDxkaXYgY2xhc3M9J2ZsZXggZmxleC1jb2wgZmxleC1ncm93IGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktc3RhcnQgdGV4dC1sZWZ0IHNtOnRleHQtY2VudGVyIG1heC13LTJ4cyBzbTpteC1hdXRvJz5cbiAgICA8aDMgY2xhc3M9J3RleHQteGwnPlxuICAgICAgPGVkcy1uYXYtY2FyZC1saW5rIFt0ZXh0XT1cImNhcmRUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2hyZWZdPVwiaHJlZlwiPjwvZWRzLW5hdi1jYXJkLWxpbms+XG4gICAgPC9oMz5cbiAgICA8cCBjbGFzcz0nbXQtNCBtZDptdC02IHNtOm14LWF1dG8gbGluZS1jbGFtcC02Jz5cbiAgICAgIHt7ZGVzY3JpcHRpb259fVxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbjwvZGl2PiJdfQ==