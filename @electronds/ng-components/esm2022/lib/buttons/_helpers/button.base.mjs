import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
class ButtonBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Detemines what the button looks like (and type)
         *
         * @type {ButtonTypes}
         */
        this.type = 'primary';
        /**
         * Sizing options for button
         *
         * @type {Size}
         */
        this.size = 'sm';
        /**
         * When true triggers progress spinner. ** not functioning **
         *
         * @type {boolean}
         */
        this.isLoading = false;
        /**
         * Whether showing on dark background
         *
         * @type {boolean}
         */
        this.isReversed = false;
        /**
         * Shows underline
         *
         * @type {boolean}
         */
        this.isUnderlined = false;
        /**
         * Displayed text on button
         *
         * @type {string}
         */
        this.text = '';
        /**
         * Button click output
         *
         * @type {EventEmitter<Event>}
         */
        this.buttonClick = new EventEmitter();
    }
    /**
     * Builds tailwind classes based on user inputs
     *
     * @readonly
     * @type {string}
     */
    get twClassesBasedOnInputs() {
        return `btn-${this.size} ${this.buildTwClasses(this.type, this.isReversed, this.isUnderlined, this.extraTwClasses)}`;
    }
    /**
     * Method to broadcast button click event
     */
    handleButtonClick($event) {
        if (this.isDisabled) {
            return;
        }
        this.buttonClick.emit($event);
    }
    /**
     * @private
     * @param {ButtonTypes} type
     * @param {boolean} isReversed
     * @param {boolean} isUnderlined
     * @param {string} extras
     * @returns {string}
     */
    buildTwClasses(type, isReversed, isUnderlined, extras) {
        let twClass = `btn-${type}${isReversed ? '-reversed ' : ' '}`;
        twClass += isUnderlined ? 'btn-underline ' : '';
        return `${twClass}${extras} `;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: ButtonBase, inputs: { type: "type", size: "size", isLoading: "isLoading", isReversed: "isReversed", isUnderlined: "isUnderlined", text: "text" }, outputs: { buttonClick: "buttonClick" }, usesInheritance: true, ngImport: i0 }); }
}
export { ButtonBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonBase, decorators: [{
            type: Directive
        }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], isReversed: [{
                type: Input
            }], isUnderlined: [{
                type: Input
            }], text: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3NyYy9saWIvYnV0dG9ucy9faGVscGVycy9idXR0b24uYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQ2EsVUFBVyxTQUFRLFVBQVU7SUFEMUM7O1FBRUU7Ozs7V0FJRztRQUNNLFNBQUksR0FBZ0IsU0FBUyxDQUFDO1FBRXZDOzs7O1dBSUc7UUFDTSxTQUFJLEdBQVMsSUFBSSxDQUFDO1FBRTNCOzs7O1dBSUc7UUFDTSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRXBDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRXJDOzs7O1dBSUc7UUFDTSxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUV2Qzs7OztXQUlHO1FBQ00sU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUUzQjs7OztXQUlHO1FBQ08sZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztLQTZDeEU7SUEzQ0M7Ozs7O09BS0c7SUFDSCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUM1QyxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FDcEIsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsTUFBYTtRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxjQUFjLENBQ3BCLElBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLFlBQXFCLEVBQ3JCLE1BQWM7UUFFZCxJQUFJLE9BQU8sR0FBRyxPQUFPLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDO0lBQ2hDLENBQUM7OEdBNUZVLFVBQVU7a0dBQVYsVUFBVTs7U0FBVixVQUFVOzJGQUFWLFVBQVU7a0JBRHRCLFNBQVM7OEJBT0MsSUFBSTtzQkFBWixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csWUFBWTtzQkFBcEIsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvblR5cGVzIH0gZnJvbSAnLi9idXR0b24tdHlwZXMnO1xuaW1wb3J0IHsgQmFzZUlucHV0cywgU2l6ZSB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkJhc2UgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIERldGVtaW5lcyB3aGF0IHRoZSBidXR0b24gbG9va3MgbGlrZSAoYW5kIHR5cGUpXG4gICAqXG4gICAqIEB0eXBlIHtCdXR0b25UeXBlc31cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IEJ1dHRvblR5cGVzID0gJ3ByaW1hcnknO1xuXG4gIC8qKlxuICAgKiBTaXppbmcgb3B0aW9ucyBmb3IgYnV0dG9uXG4gICAqXG4gICAqIEB0eXBlIHtTaXplfVxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogU2l6ZSA9ICdzbSc7XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSB0cmlnZ2VycyBwcm9ncmVzcyBzcGlubmVyLiAqKiBub3QgZnVuY3Rpb25pbmcgKipcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciBzaG93aW5nIG9uIGRhcmsgYmFja2dyb3VuZFxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIGlzUmV2ZXJzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2hvd3MgdW5kZXJsaW5lXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgaXNVbmRlcmxpbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERpc3BsYXllZCB0ZXh0IG9uIGJ1dHRvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBjbGljayBvdXRwdXRcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XG4gICAqL1xuICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGFpbHdpbmQgY2xhc3NlcyBiYXNlZCBvbiB1c2VyIGlucHV0c1xuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0d0NsYXNzZXNCYXNlZE9uSW5wdXRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBidG4tJHt0aGlzLnNpemV9ICR7dGhpcy5idWlsZFR3Q2xhc3NlcyhcbiAgICAgIHRoaXMudHlwZSxcbiAgICAgIHRoaXMuaXNSZXZlcnNlZCxcbiAgICAgIHRoaXMuaXNVbmRlcmxpbmVkLFxuICAgICAgdGhpcy5leHRyYVR3Q2xhc3Nlc1xuICAgICl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYnJvYWRjYXN0IGJ1dHRvbiBjbGljayBldmVudFxuICAgKi9cbiAgcHVibGljIGhhbmRsZUJ1dHRvbkNsaWNrKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QnV0dG9uVHlwZXN9IHR5cGVcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1JldmVyc2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNVbmRlcmxpbmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRyYXNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgYnVpbGRUd0NsYXNzZXMoXG4gICAgdHlwZTogQnV0dG9uVHlwZXMsXG4gICAgaXNSZXZlcnNlZDogYm9vbGVhbixcbiAgICBpc1VuZGVybGluZWQ6IGJvb2xlYW4sXG4gICAgZXh0cmFzOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBsZXQgdHdDbGFzcyA9IGBidG4tJHt0eXBlfSR7aXNSZXZlcnNlZCA/ICctcmV2ZXJzZWQgJyA6ICcgJ31gO1xuICAgIHR3Q2xhc3MgKz0gaXNVbmRlcmxpbmVkID8gJ2J0bi11bmRlcmxpbmUgJyA6ICcnO1xuICAgIHJldHVybiBgJHt0d0NsYXNzfSR7ZXh0cmFzfSBgO1xuICB9XG59XG4iXX0=