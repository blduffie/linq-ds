import { Directive, Input } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Base class for Banners
 *
 * @export
 * @class BannerBase
 * @typedef {BannerBase}
 * @extends {BaseInputs}
 */
class BannerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Link URL / Route
         *
         * @type {string}
         */
        this.link = '';
        /**
         * Link text to be displayed
         *
         * @type {string}
         */
        this.linkText = '';
        /**
         * @private
         * @type {string}
         */
        this._icon = '';
        /**
         * @private
         * @type {string}
         */
        this._color = '';
        /**
         * @private
         * @type {string}
         */
        this._borderColor = '';
    }
    /**
     * Determines what banner is shown
     *
     * @type {BannerType}
     */
    set status(status) {
        {
            switch (status) {
                case 'error':
                    this._icon = 'components/assets/icons/error-solid.svg';
                    this._color = 'red';
                    this._borderColor = 'border-red';
                    break;
                case 'success':
                    this._icon = 'components/assets/icons/success-solid.svg';
                    this._color = 'green-dark';
                    this._borderColor = 'border-green-dark';
                    break;
                case 'warn':
                    this._icon = 'components/assets/icons/warning-solid.svg';
                    this._color = 'yellow-dark';
                    this._borderColor = 'border-yellow-dark';
                    break;
                case 'info':
                default:
                    this._icon = 'components/assets/icons/information-solid.svg';
                    this._color = 'gray-darker';
                    this._borderColor = 'border-gray-darker';
            }
        }
    }
    /**
     * @readonly
     * @type {string}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @readonly
     * @type {string}
     */
    get color() {
        return this._color;
    }
    /**
     * @readonly
     * @type {string}
     */
    get borderColor() {
        return this._borderColor;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BannerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: BannerBase, inputs: { link: "link", linkText: "linkText", status: "status" }, usesInheritance: true, ngImport: i0 }); }
}
export { BannerBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: BannerBase, decorators: [{
            type: Directive
        }], propDecorators: { link: [{
                type: Input
            }], linkText: [{
                type: Input
            }], status: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWJhbm5lci1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2lubGluZS1iYW5uZXJzL19oZWxwZXJzL2lubGluZS1iYW5uZXItYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUV0RDs7Ozs7OztHQU9HO0FBQ0gsTUFDYSxVQUFXLFNBQVEsVUFBVTtJQUQxQzs7UUFFRTs7OztXQUlHO1FBQ00sU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUUzQjs7OztXQUlHO1FBQ00sYUFBUSxHQUFXLEVBQUUsQ0FBQztRQWtDL0I7OztXQUdHO1FBQ0ssVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQzVCOzs7V0FHRztRQUNLLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0tBc0JuQztJQXBFQzs7OztPQUlHO0lBQ0gsSUFBYSxNQUFNLENBQUMsTUFBa0I7UUFDcEM7WUFDRSxRQUFRLE1BQU0sRUFBRTtnQkFDZCxLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLDJDQUEyQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztvQkFDeEMsTUFBTTtnQkFDUixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRywyQ0FBMkMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1IsS0FBSyxNQUFNLENBQUM7Z0JBQ1o7b0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRywrQ0FBK0MsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7YUFDNUM7U0FDRjtJQUNILENBQUM7SUFpQkQ7OztPQUdHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNEOzs7T0FHRztJQUNILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzhHQWxGVSxVQUFVO2tHQUFWLFVBQVU7O1NBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUR0QixTQUFTOzhCQU9DLElBQUk7c0JBQVosS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9PLE1BQU07c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYW5uZXJUeXBlLCBCYXNlSW5wdXRzIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBCYW5uZXJzXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJhbm5lckJhc2VcbiAqIEB0eXBlZGVmIHtCYW5uZXJCYXNlfVxuICogQGV4dGVuZHMge0Jhc2VJbnB1dHN9XG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEJhbm5lckJhc2UgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgLyoqXG4gICAqIExpbmsgVVJMIC8gUm91dGVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGxpbms6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBMaW5rIHRleHQgdG8gYmUgZGlzcGxheWVkXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBsaW5rVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBiYW5uZXIgaXMgc2hvd25cbiAgICpcbiAgICogQHR5cGUge0Jhbm5lclR5cGV9XG4gICAqL1xuICBASW5wdXQoKSBzZXQgc3RhdHVzKHN0YXR1czogQmFubmVyVHlwZSkge1xuICAgIHtcbiAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICB0aGlzLl9pY29uID0gJ2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL2Vycm9yLXNvbGlkLnN2Zyc7XG4gICAgICAgICAgdGhpcy5fY29sb3IgPSAncmVkJztcbiAgICAgICAgICB0aGlzLl9ib3JkZXJDb2xvciA9ICdib3JkZXItcmVkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgdGhpcy5faWNvbiA9ICdjb21wb25lbnRzL2Fzc2V0cy9pY29ucy9zdWNjZXNzLXNvbGlkLnN2Zyc7XG4gICAgICAgICAgdGhpcy5fY29sb3IgPSAnZ3JlZW4tZGFyayc7XG4gICAgICAgICAgdGhpcy5fYm9yZGVyQ29sb3IgPSAnYm9yZGVyLWdyZWVuLWRhcmsnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICB0aGlzLl9pY29uID0gJ2NvbXBvbmVudHMvYXNzZXRzL2ljb25zL3dhcm5pbmctc29saWQuc3ZnJztcbiAgICAgICAgICB0aGlzLl9jb2xvciA9ICd5ZWxsb3ctZGFyayc7XG4gICAgICAgICAgdGhpcy5fYm9yZGVyQ29sb3IgPSAnYm9yZGVyLXllbGxvdy1kYXJrJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5faWNvbiA9ICdjb21wb25lbnRzL2Fzc2V0cy9pY29ucy9pbmZvcm1hdGlvbi1zb2xpZC5zdmcnO1xuICAgICAgICAgIHRoaXMuX2NvbG9yID0gJ2dyYXktZGFya2VyJztcbiAgICAgICAgICB0aGlzLl9ib3JkZXJDb2xvciA9ICdib3JkZXItZ3JheS1kYXJrZXInO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX2JvcmRlckNvbG9yOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgLyoqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGJvcmRlckNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlckNvbG9yO1xuICB9XG59XG4iXX0=