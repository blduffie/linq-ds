// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { Directive, Input, EventEmitter, Output } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Site Banner Base
 *
 * @export
 * @class SiteBannerBase
 * @typedef {SiteBannerBase}
 * @extends {BaseInputs}
 */
class SiteBannerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Hidden Details Text
         *
         * @type {string}
         * */
        this.hiddenDetails = '';
        /**
         * Identifies if details are shown or not
         *
         * @type {boolean}
         */
        this.showDetails = false;
        /**
         * Identifies if banner is closed on click
         *
         * @type {boolean}
         */
        this.close = false;
        /**
         * Banner Title
         *
         * @type {string}
         *
         */
        this.title = '';
        /**
         * Banner Main Text
         *
         * @type {string}
         */
        this.mainText = '';
        /**
         * Banner Details Text
         * Can be optional to use "Read More" or "Learn More" text
         *
         * @type {string}
         */
        this.details = 'Show Details';
        /**
         * Exiting the banner on click
         *
         * @type {*}
         *
         */
        this.bannerClosed = new EventEmitter();
        /**
         * Emits boolean as to whether the details are shown or not
         *
         * @type {EventEmitter<boolean>}
         */
        this.showDetailsChanged = new EventEmitter();
    }
    /**
     * When Show Details is clicked
     *
     * @public
     */
    handleDetailsClicked() {
        this.showDetails = !this.showDetails;
        this.details = this.showDetails ? 'Hide Details' : 'Show Details';
        this.showDetailsChanged.emit(this.showDetails);
    }
    /**
     * @public
     */
    handleCloseButton() {
        this.delete();
    }
    /**
     * @private
     */
    delete() {
        this.close = !this.close;
        setTimeout(this.bannerClosed, 1000);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: SiteBannerBase, inputs: { hiddenDetails: "hiddenDetails", showDetails: "showDetails", close: "close", title: "title", mainText: "mainText", details: "details" }, outputs: { bannerClosed: "bannerClosed", showDetailsChanged: "showDetailsChanged" }, usesInheritance: true, ngImport: i0 }); }
}
export { SiteBannerBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SiteBannerBase, decorators: [{
            type: Directive
        }], propDecorators: { hiddenDetails: [{
                type: Input
            }], showDetails: [{
                type: Input
            }], close: [{
                type: Input
            }], title: [{
                type: Input
            }], mainText: [{
                type: Input
            }], details: [{
                type: Input
            }], bannerClosed: [{
                type: Output
            }], showDetailsChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1iYW5uZXIuYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9zaXRlLWJhbm5lci9faGVscGVycy9zaXRlLWJhbm5lci5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDtBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRTFDOzs7Ozs7O0dBT0c7QUFDSCxNQUNhLGNBQWUsU0FBUSxVQUFVO0lBRDlDOztRQUVFOzs7O2FBSUs7UUFDSSxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUVwQzs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFdEM7Ozs7V0FJRztRQUNNLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFaEM7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRTVCOzs7O1dBSUc7UUFDTSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRS9COzs7OztXQUtHO1FBQ00sWUFBTyxHQUFXLGNBQWMsQ0FBQztRQUMxQzs7Ozs7V0FLRztRQUNPLGlCQUFZLEdBQVEsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRDs7OztXQUlHO1FBQ08sdUJBQWtCLEdBQzFCLElBQUksWUFBWSxFQUFXLENBQUM7S0EwQi9CO0lBeEJDOzs7O09BSUc7SUFDSSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNsRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzhHQW5GVSxjQUFjO2tHQUFkLGNBQWM7O1NBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixTQUFTOzhCQU9DLGFBQWE7c0JBQXJCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsS0FBSztzQkFBYixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsT0FBTztzQkFBZixLQUFLO2dCQU9JLFlBQVk7c0JBQXJCLE1BQU07Z0JBT0csa0JBQWtCO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlSW5wdXRzIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyoqXG4gKiBTaXRlIEJhbm5lciBCYXNlXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFNpdGVCYW5uZXJCYXNlXG4gKiBAdHlwZWRlZiB7U2l0ZUJhbm5lckJhc2V9XG4gKiBAZXh0ZW5kcyB7QmFzZUlucHV0c31cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUJhbm5lckJhc2UgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIEhpZGRlbiBEZXRhaWxzIFRleHRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogKi9cbiAgQElucHV0KCkgaGlkZGVuRGV0YWlsczogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIElkZW50aWZpZXMgaWYgZGV0YWlscyBhcmUgc2hvd24gb3Igbm90XG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgc2hvd0RldGFpbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWRlbnRpZmllcyBpZiBiYW5uZXIgaXMgY2xvc2VkIG9uIGNsaWNrXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgY2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQmFubmVyIFRpdGxlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEJhbm5lciBNYWluIFRleHRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIG1haW5UZXh0OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQmFubmVyIERldGFpbHMgVGV4dFxuICAgKiBDYW4gYmUgb3B0aW9uYWwgdG8gdXNlIFwiUmVhZCBNb3JlXCIgb3IgXCJMZWFybiBNb3JlXCIgdGV4dFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZGV0YWlsczogc3RyaW5nID0gJ1Nob3cgRGV0YWlscyc7XG4gIC8qKlxuICAgKiBFeGl0aW5nIHRoZSBiYW5uZXIgb24gY2xpY2tcbiAgICpcbiAgICogQHR5cGUgeyp9XG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCkgYmFubmVyQ2xvc2VkOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGJvb2xlYW4gYXMgdG8gd2hldGhlciB0aGUgZGV0YWlscyBhcmUgc2hvd24gb3Igbm90XG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8Ym9vbGVhbj59XG4gICAqL1xuICBAT3V0cHV0KCkgc2hvd0RldGFpbHNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogV2hlbiBTaG93IERldGFpbHMgaXMgY2xpY2tlZFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlRGV0YWlsc0NsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RGV0YWlscyA9ICF0aGlzLnNob3dEZXRhaWxzO1xuICAgIHRoaXMuZGV0YWlscyA9IHRoaXMuc2hvd0RldGFpbHMgPyAnSGlkZSBEZXRhaWxzJyA6ICdTaG93IERldGFpbHMnO1xuICAgIHRoaXMuc2hvd0RldGFpbHNDaGFuZ2VkLmVtaXQodGhpcy5zaG93RGV0YWlscyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVDbG9zZUJ1dHRvbigpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlID0gIXRoaXMuY2xvc2U7XG4gICAgc2V0VGltZW91dCh0aGlzLmJhbm5lckNsb3NlZCwgMTAwMCk7XG4gIH1cbn1cblxuIl19