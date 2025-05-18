import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
/**
 * Tooltip for additional information
 *
 * @export
 * @class TooltipComponent
 * @typedef {TooltipComponent}
 * @extends {BaseInputs}
 */
class TooltipComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Title (optional, if not supplied will be icon only)
         *
         * @type {string}
         */
        this.title = '';
        /**
         * Text to display when tooltip opens
         *
         * @type {string}
         */
        this.tooltipText = '';
        /**
         * @private
         * @type {string}
         */
        this._titleColor = 'text-gray-darker';
        /**
         * @private
         * @type {string}
         */
        this._ttTextClass = 'text-white bg-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._svgClass = 'text-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgFill = 'fill-teal-darker';
        /**
         * @private
         * @type {string}
         */
        this._buttonClass = 'flex-row items-center';
        /**
         * @private
         * @type {string}
         */
        this._ttClass = 'flex-row items-center right-0 mr-16 group-hover:mr-24 group-focus:mr-24';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgClass = 'my-16 w-12';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgDPath = 'M0 0l16 11.56L0 24V0z';
        /**
         * @private
         * @type {string}
         */
        this._ttSvgViewBox = '0 0 16 24';
    }
    /**
     * Whether the tooltip is on a darkbackground, will change the font color
     *
     * @type {boolean}
     */
    set onDarkBackground(darkBg) {
        this.makeColors(darkBg);
    }
    /**
     * Direction to open tooltip text
     *
     * @type {OpenDirections}
     */
    set openDirection(direction) {
        this.makeClasses(direction);
    }
    /**
     * @readonly
     * @type {string}
     */
    get titleColor() {
        return this._titleColor;
    }
    /**
     * @readonly
     * @type {string}
     */
    get buttonClass() {
        return this._buttonClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get svgClass() {
        return this._svgClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipClass() {
        return this._ttClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgFill() {
        return this._ttSvgFill;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipTextClass() {
        return this._ttTextClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgClass() {
        return this._ttSvgClass;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgDPath() {
        return this._ttSvgDPath;
    }
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgViewBox() {
        return this._ttSvgViewBox;
    }
    /**
     * @readonly
     * @type {string}
     */
    get pathData() {
        return 'm32,0c17.673,0,32,14.327,32,32s-14.327,32-32,32S0,49.673,0,32,14.327,0,32,0Zm0,2.526C15.722,2.526,2.526,15.722,2.526,32s13.196,29.474,29.474,29.474,29.474-13.196,29.474-29.474S48.278,2.526,32,2.526Zm1.701,22.765c2.165,0,3.921,1.755,3.921,3.921h0v19.92c0,2.165-1.756,3.92-3.921,3.921h-2.236c-2.165,0-3.92-1.756-3.921-3.921v-19.92c0-2.165,1.755-3.921,3.921-3.921h2.236Zm-1.128-13.501c2.783,0,5.039,2.256,5.039,5.039h0v.118c0,2.783-2.256,5.039-5.039,5.039s-5.039-2.256-5.039-5.039h0v-.118c0-2.783,2.256-5.039,5.039-5.039h0Z';
    }
    /**
     * @private
     * @param {boolean} darkBg
     */
    makeColors(darkBg) {
        this._titleColor = darkBg ? 'text-white' : 'text-gray-darker';
        this._svgClass = darkBg ? 'text-white' : 'text-teal-darker';
        this._ttSvgFill = darkBg ? 'fill-white ' : 'fill-teal-darker';
        this._ttTextClass = darkBg ? 'text-gray-darker bg-white' : 'text-white bg-teal-darker';
    }
    /**
     * @private
     * @param {Placement} direction
     */
    makeClasses(direction) {
        switch (direction) {
            case 'top':
                this._buttonClass = 'flex-col items-start';
                this._ttClass = 'flex-col items-start bottom-0 -mx-16 mb-16 group-hover:mb-24 group-focus:mb-24';
                this._ttSvgClass = 'mx-16 h-12';
                this._ttSvgDPath = 'M0 0l11.56 16L24 0H0z';
                this._ttSvgViewBox = '0 0 24 16';
                break;
            case 'right':
                this._buttonClass = 'flex-row items-center';
                this._ttClass = 'flex-row-reverse items-center left-0 ml-16 group-hover:ml-24 group-focus:ml-24';
                this._ttSvgClass = 'my-16 w-12';
                this._ttSvgDPath = 'M16 24L0 12.44 16 0v24z';
                this._ttSvgViewBox = '0 0 16 24';
                break;
            case 'bottom':
                this._buttonClass = 'flex-col items-center';
                this._ttClass = 'flex-col-reverse items-center top-0 -mx-16 mt-16 group-hover:mt-24 group-focus:mt-24';
                this._ttSvgClass = 'mx-16 h-12';
                this._ttSvgDPath = 'M0 16L11.56 0 24 16H0z';
                this._ttSvgViewBox = '0 0 24 16';
                break;
            case 'left':
            default:
                this._buttonClass = 'flex-row items-center';
                this._ttClass = 'flex-row items-center right-0 mr-16 group-hover:mr-24 group-focus:mr-24';
                this._ttSvgClass = 'my-16 w-12';
                this._ttSvgDPath = 'M0 0l16 11.56L0 24V0z';
                this._ttSvgViewBox = '0 0 16 24';
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TooltipComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: TooltipComponent, selector: "eds-tooltip", inputs: { title: "title", tooltipText: "tooltipText", onDarkBackground: "onDarkBackground", openDirection: "openDirection" }, usesInheritance: true, ngImport: i0, template: "<div class=\"text-center {{extraTwClasses}}\">\n    <span class=\"block text-sm {{titleColor}}\">{{title}}</span>\n    <button class=\"relative inline-flex cursor-default group -m-2 p-2 rounded-md {{svgClass}} {{buttonClass}}\"\n            type=\"button\"\n            aria-labelledby=\"\">\n\n        <svg class=\"fill-current flex-none icon-18 {{svgClass}}\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 64 64\"\n             aria-hidden=\"true\"\n             focusable=\"false\">\n            <path [attr.d]=\"pathData\" />\n        </svg>\n\n        <div class=\"absolute z-tooltip flex w-256 filter drop-shadow-md invisible \n                    group-hover:visible group-focus:visible \n                    opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all delay-200 \n                    {{tooltipClass}}\">\n            <div class=\"rich-text text-left flex-1 p-16 rounded-md {{tooltipTextClass}}\">\n                {{tooltipText}}\n            </div>\n            <svg class=\"{{tooltipSvgFill}} flex-shrink-0 {{svgClass}} {{tooltipSvgClass}}\"\n                 xmlns=\"http://www.w3.org/2000/svg\"\n                 [attr.viewBox]=\"tooltipSvgViewBox\"\n                 aria-hidden=\"true\"\n                 focusable=\"false\">\n                <path [attr.d]=\"tooltipSvgDPath\"></path>\n            </svg>\n        </div>\n    </button>\n</div>", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TooltipComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"text-center {{extraTwClasses}}\">\n    <span class=\"block text-sm {{titleColor}}\">{{title}}</span>\n    <button class=\"relative inline-flex cursor-default group -m-2 p-2 rounded-md {{svgClass}} {{buttonClass}}\"\n            type=\"button\"\n            aria-labelledby=\"\">\n\n        <svg class=\"fill-current flex-none icon-18 {{svgClass}}\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 64 64\"\n             aria-hidden=\"true\"\n             focusable=\"false\">\n            <path [attr.d]=\"pathData\" />\n        </svg>\n\n        <div class=\"absolute z-tooltip flex w-256 filter drop-shadow-md invisible \n                    group-hover:visible group-focus:visible \n                    opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all delay-200 \n                    {{tooltipClass}}\">\n            <div class=\"rich-text text-left flex-1 p-16 rounded-md {{tooltipTextClass}}\">\n                {{tooltipText}}\n            </div>\n            <svg class=\"{{tooltipSvgFill}} flex-shrink-0 {{svgClass}} {{tooltipSvgClass}}\"\n                 xmlns=\"http://www.w3.org/2000/svg\"\n                 [attr.viewBox]=\"tooltipSvgViewBox\"\n                 aria-hidden=\"true\"\n                 focusable=\"false\">\n                <path [attr.d]=\"tooltipSvgDPath\"></path>\n            </svg>\n        </div>\n    </button>\n</div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], tooltipText: [{
                type: Input
            }], onDarkBackground: [{
                type: Input
            }], openDirection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLFdBQVcsQ0FBQzs7QUFFbEQ7Ozs7Ozs7R0FPRztBQUNILE1BTWEsZ0JBQWlCLFNBQVEsVUFBVTtJQU5oRDs7UUFPRTs7OztXQUlHO1FBQ00sVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUU1Qjs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFvQmxDOzs7V0FHRztRQUNLLGdCQUFXLEdBQVcsa0JBQWtCLENBQUM7UUFDakQ7OztXQUdHO1FBQ0ssaUJBQVksR0FBVywyQkFBMkIsQ0FBQztRQUMzRDs7O1dBR0c7UUFDSyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFDL0M7OztXQUdHO1FBQ0ssZUFBVSxHQUFXLGtCQUFrQixDQUFDO1FBQ2hEOzs7V0FHRztRQUNLLGlCQUFZLEdBQVcsdUJBQXVCLENBQUM7UUFDdkQ7OztXQUdHO1FBQ0ssYUFBUSxHQUFXLHlFQUF5RSxDQUFDO1FBQ3JHOzs7V0FHRztRQUNLLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQzNDOzs7V0FHRztRQUNLLGdCQUFXLEdBQVcsdUJBQXVCLENBQUM7UUFDdEQ7OztXQUdHO1FBQ0ssa0JBQWEsR0FBVyxXQUFXLENBQUM7S0F5SDdDO0lBdkxDOzs7O09BSUc7SUFDSCxJQUFhLGdCQUFnQixDQUFDLE1BQWU7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWEsYUFBYSxDQUFDLFNBQW9CO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWdERDs7O09BR0c7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNEOzs7T0FHRztJQUNILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNEOzs7T0FHRztJQUNILElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNEOzs7T0FHRztJQUNILElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLDBnQkFBMGdCLENBQUM7SUFDcGhCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxVQUFVLENBQUMsTUFBZTtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQ3pGLENBQUM7SUFFRDs7O09BR0c7SUFDSyxXQUFXLENBQUMsU0FBb0I7UUFDdEMsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0ZBQWdGLENBQUM7Z0JBQ2pHLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsWUFBWSxHQUFHLHVCQUF1QixDQUFDO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLGdGQUFnRixDQUFDO2dCQUNqRyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxzRkFBc0YsQ0FBQztnQkFDdkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1IsS0FBSyxNQUFNLENBQUM7WUFDWjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLHVCQUF1QixDQUFDO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLHlFQUF5RSxDQUFDO2dCQUMxRixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pDLE1BQU07U0FDVDtJQUNILENBQUM7OEdBck1VLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLHdNQ2pCN0IsODRDQThCTTs7U0RiTyxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDRSxhQUFhLG1CQUdOLHVCQUF1QixDQUFDLE1BQU07OEJBUXRDLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9PLGdCQUFnQjtzQkFBNUIsS0FBSztnQkFTTyxhQUFhO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VJbnB1dHMsIFBsYWNlbWVudCB9IGZyb20gJy4uL2NvbW1vbic7XG5cbi8qKlxuICogVG9vbHRpcCBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUb29sdGlwQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7VG9vbHRpcENvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtCYXNlSW5wdXRzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBleHRlbmRzIEJhc2VJbnB1dHMge1xuICAvKipcbiAgICogVGl0bGUgKG9wdGlvbmFsLCBpZiBub3Qgc3VwcGxpZWQgd2lsbCBiZSBpY29uIG9ubHkpXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRvb2x0aXAgb3BlbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBUZXh0OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgdG9vbHRpcCBpcyBvbiBhIGRhcmtiYWNrZ3JvdW5kLCB3aWxsIGNoYW5nZSB0aGUgZm9udCBjb2xvclxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIHNldCBvbkRhcmtCYWNrZ3JvdW5kKGRhcmtCZzogYm9vbGVhbikge1xuICAgIHRoaXMubWFrZUNvbG9ycyhkYXJrQmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0byBvcGVuIHRvb2x0aXAgdGV4dFxuICAgKlxuICAgKiBAdHlwZSB7T3BlbkRpcmVjdGlvbnN9XG4gICAqL1xuICBASW5wdXQoKSBzZXQgb3BlbkRpcmVjdGlvbihkaXJlY3Rpb246IFBsYWNlbWVudCkge1xuICAgIHRoaXMubWFrZUNsYXNzZXMoZGlyZWN0aW9uKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF90aXRsZUNvbG9yOiBzdHJpbmcgPSAndGV4dC1ncmF5LWRhcmtlcic7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfdHRUZXh0Q2xhc3M6IHN0cmluZyA9ICd0ZXh0LXdoaXRlIGJnLXRlYWwtZGFya2VyJztcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF9zdmdDbGFzczogc3RyaW5nID0gJ3RleHQtdGVhbC1kYXJrZXInO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX3R0U3ZnRmlsbDogc3RyaW5nID0gJ2ZpbGwtdGVhbC1kYXJrZXInO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzOiBzdHJpbmcgPSAnZmxleC1yb3cgaXRlbXMtY2VudGVyJztcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF90dENsYXNzOiBzdHJpbmcgPSAnZmxleC1yb3cgaXRlbXMtY2VudGVyIHJpZ2h0LTAgbXItMTYgZ3JvdXAtaG92ZXI6bXItMjQgZ3JvdXAtZm9jdXM6bXItMjQnO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX3R0U3ZnQ2xhc3M6IHN0cmluZyA9ICdteS0xNiB3LTEyJztcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF90dFN2Z0RQYXRoOiBzdHJpbmcgPSAnTTAgMGwxNiAxMS41NkwwIDI0VjB6JztcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF90dFN2Z1ZpZXdCb3g6IHN0cmluZyA9ICcwIDAgMTYgMjQnO1xuXG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0aXRsZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlQ29sb3I7XG4gIH1cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGJ1dHRvbkNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzO1xuICB9XG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBzdmdDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdmdDbGFzcztcbiAgfVxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdG9vbHRpcENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R0Q2xhc3M7XG4gIH1cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRvb2x0aXBTdmdGaWxsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R0U3ZnRmlsbDtcbiAgfVxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdG9vbHRpcFRleHRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90dFRleHRDbGFzcztcbiAgfVxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdG9vbHRpcFN2Z0NsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R0U3ZnQ2xhc3M7XG4gIH1cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRvb2x0aXBTdmdEUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90dFN2Z0RQYXRoO1xuICB9XG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0b29sdGlwU3ZnVmlld0JveCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90dFN2Z1ZpZXdCb3g7XG4gIH1cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHBhdGhEYXRhKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdtMzIsMGMxNy42NzMsMCwzMiwxNC4zMjcsMzIsMzJzLTE0LjMyNywzMi0zMiwzMlMwLDQ5LjY3MywwLDMyLDE0LjMyNywwLDMyLDBabTAsMi41MjZDMTUuNzIyLDIuNTI2LDIuNTI2LDE1LjcyMiwyLjUyNiwzMnMxMy4xOTYsMjkuNDc0LDI5LjQ3NCwyOS40NzQsMjkuNDc0LTEzLjE5NiwyOS40NzQtMjkuNDc0UzQ4LjI3OCwyLjUyNiwzMiwyLjUyNlptMS43MDEsMjIuNzY1YzIuMTY1LDAsMy45MjEsMS43NTUsMy45MjEsMy45MjFoMHYxOS45MmMwLDIuMTY1LTEuNzU2LDMuOTItMy45MjEsMy45MjFoLTIuMjM2Yy0yLjE2NSwwLTMuOTItMS43NTYtMy45MjEtMy45MjF2LTE5LjkyYzAtMi4xNjUsMS43NTUtMy45MjEsMy45MjEtMy45MjFoMi4yMzZabS0xLjEyOC0xMy41MDFjMi43ODMsMCw1LjAzOSwyLjI1Niw1LjAzOSw1LjAzOWgwdi4xMThjMCwyLjc4My0yLjI1Niw1LjAzOS01LjAzOSw1LjAzOXMtNS4wMzktMi4yNTYtNS4wMzktNS4wMzloMHYtLjExOGMwLTIuNzgzLDIuMjU2LTUuMDM5LDUuMDM5LTUuMDM5aDBaJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRhcmtCZ1xuICAgKi9cbiAgcHJpdmF0ZSBtYWtlQ29sb3JzKGRhcmtCZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3RpdGxlQ29sb3IgPSBkYXJrQmcgPyAndGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LWRhcmtlcic7XG4gICAgdGhpcy5fc3ZnQ2xhc3MgPSBkYXJrQmcgPyAndGV4dC13aGl0ZScgOiAndGV4dC10ZWFsLWRhcmtlcic7XG4gICAgdGhpcy5fdHRTdmdGaWxsID0gZGFya0JnID8gJ2ZpbGwtd2hpdGUgJyA6ICdmaWxsLXRlYWwtZGFya2VyJztcbiAgICB0aGlzLl90dFRleHRDbGFzcyA9IGRhcmtCZyA/ICd0ZXh0LWdyYXktZGFya2VyIGJnLXdoaXRlJyA6ICd0ZXh0LXdoaXRlIGJnLXRlYWwtZGFya2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1BsYWNlbWVudH0gZGlyZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIG1ha2VDbGFzc2VzKGRpcmVjdGlvbjogUGxhY2VtZW50KSB7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHRoaXMuX2J1dHRvbkNsYXNzID0gJ2ZsZXgtY29sIGl0ZW1zLXN0YXJ0JztcbiAgICAgICAgdGhpcy5fdHRDbGFzcyA9ICdmbGV4LWNvbCBpdGVtcy1zdGFydCBib3R0b20tMCAtbXgtMTYgbWItMTYgZ3JvdXAtaG92ZXI6bWItMjQgZ3JvdXAtZm9jdXM6bWItMjQnO1xuICAgICAgICB0aGlzLl90dFN2Z0NsYXNzID0gJ214LTE2IGgtMTInO1xuICAgICAgICB0aGlzLl90dFN2Z0RQYXRoID0gJ00wIDBsMTEuNTYgMTZMMjQgMEgweic7XG4gICAgICAgIHRoaXMuX3R0U3ZnVmlld0JveCA9ICcwIDAgMjQgMTYnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5fYnV0dG9uQ2xhc3MgPSAnZmxleC1yb3cgaXRlbXMtY2VudGVyJztcbiAgICAgICAgdGhpcy5fdHRDbGFzcyA9ICdmbGV4LXJvdy1yZXZlcnNlIGl0ZW1zLWNlbnRlciBsZWZ0LTAgbWwtMTYgZ3JvdXAtaG92ZXI6bWwtMjQgZ3JvdXAtZm9jdXM6bWwtMjQnO1xuICAgICAgICB0aGlzLl90dFN2Z0NsYXNzID0gJ215LTE2IHctMTInO1xuICAgICAgICB0aGlzLl90dFN2Z0RQYXRoID0gJ00xNiAyNEwwIDEyLjQ0IDE2IDB2MjR6JztcbiAgICAgICAgdGhpcy5fdHRTdmdWaWV3Qm94ID0gJzAgMCAxNiAyNCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdGhpcy5fYnV0dG9uQ2xhc3MgPSAnZmxleC1jb2wgaXRlbXMtY2VudGVyJztcbiAgICAgICAgdGhpcy5fdHRDbGFzcyA9ICdmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciB0b3AtMCAtbXgtMTYgbXQtMTYgZ3JvdXAtaG92ZXI6bXQtMjQgZ3JvdXAtZm9jdXM6bXQtMjQnO1xuICAgICAgICB0aGlzLl90dFN2Z0NsYXNzID0gJ214LTE2IGgtMTInO1xuICAgICAgICB0aGlzLl90dFN2Z0RQYXRoID0gJ00wIDE2TDExLjU2IDAgMjQgMTZIMHonO1xuICAgICAgICB0aGlzLl90dFN2Z1ZpZXdCb3ggPSAnMCAwIDI0IDE2JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2J1dHRvbkNsYXNzID0gJ2ZsZXgtcm93IGl0ZW1zLWNlbnRlcic7XG4gICAgICAgIHRoaXMuX3R0Q2xhc3MgPSAnZmxleC1yb3cgaXRlbXMtY2VudGVyIHJpZ2h0LTAgbXItMTYgZ3JvdXAtaG92ZXI6bXItMjQgZ3JvdXAtZm9jdXM6bXItMjQnO1xuICAgICAgICB0aGlzLl90dFN2Z0NsYXNzID0gJ215LTE2IHctMTInO1xuICAgICAgICB0aGlzLl90dFN2Z0RQYXRoID0gJ00wIDBsMTYgMTEuNTZMMCAyNFYweic7XG4gICAgICAgIHRoaXMuX3R0U3ZnVmlld0JveCA9ICcwIDAgMTYgMjQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB7e2V4dHJhVHdDbGFzc2VzfX1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtc20ge3t0aXRsZUNvbG9yfX1cIj57e3RpdGxlfX08L3NwYW4+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbGF0aXZlIGlubGluZS1mbGV4IGN1cnNvci1kZWZhdWx0IGdyb3VwIC1tLTIgcC0yIHJvdW5kZWQtbWQge3tzdmdDbGFzc319IHt7YnV0dG9uQ2xhc3N9fVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIlwiPlxuXG4gICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgZmxleC1ub25lIGljb24tMTgge3tzdmdDbGFzc319XCJcbiAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDY0XCJcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInBhdGhEYXRhXCIgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIHotdG9vbHRpcCBmbGV4IHctMjU2IGZpbHRlciBkcm9wLXNoYWRvdy1tZCBpbnZpc2libGUgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnZpc2libGUgZ3JvdXAtZm9jdXM6dmlzaWJsZSBcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWZvY3VzOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGRlbGF5LTIwMCBcbiAgICAgICAgICAgICAgICAgICAge3t0b29sdGlwQ2xhc3N9fVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpY2gtdGV4dCB0ZXh0LWxlZnQgZmxleC0xIHAtMTYgcm91bmRlZC1tZCB7e3Rvb2x0aXBUZXh0Q2xhc3N9fVwiPlxuICAgICAgICAgICAgICAgIHt7dG9vbHRpcFRleHR9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwie3t0b29sdGlwU3ZnRmlsbH19IGZsZXgtc2hyaW5rLTAge3tzdmdDbGFzc319IHt7dG9vbHRpcFN2Z0NsYXNzfX1cIlxuICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIudmlld0JveF09XCJ0b29sdGlwU3ZnVmlld0JveFwiXG4gICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggW2F0dHIuZF09XCJ0b29sdGlwU3ZnRFBhdGhcIj48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG48L2Rpdj4iXX0=