import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * To display money
 *
 * @export
 * @class FeaturedMoneyComponent
 * @typedef {FeaturedMoneyComponent}
 * @extends {BaseInputs}
 */
class FeaturedMoneyComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Text color
         *
         * @type {string}
         */
        this.twTextColor = 'text-blue';
        /**
         * Text sizes
         *
         * @type {TextSize}
         */
        this.textSize = '2xl';
        /**
         * Description placeholder
         *
         * @private
         * @type {string}
         */
        this._dollarAmount = '0';
        /**
         * Description placeholder
         *
         * @private
         * @type {string}
         */
        this._centsAmount = '00';
    }
    /**
     * Amount to display
     *
     * @type {string}
     */
    set amount(amount) {
        const textArray = amount.split('.');
        if (textArray.length > 1) {
            this._dollarAmount = textArray[0];
            const cents = textArray[1];
            this._centsAmount = cents.length > 1 ? cents : `${cents}0`;
        }
        else {
            const nMoney = amount;
            if (+nMoney > 0) {
                this._dollarAmount = nMoney;
                this._centsAmount = '00';
            }
        }
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get ariaLabel() {
        return `${this.dollarAmount} dollars and ${this.centsAmount} cents`;
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get dollarAmount() {
        return this._dollarAmount;
    }
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get centsAmount() {
        return this._centsAmount;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FeaturedMoneyComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: FeaturedMoneyComponent, selector: "eds-featured-money", inputs: { twTextColor: "twTextColor", textSize: "textSize", amount: "amount" }, usesInheritance: true, ngImport: i0, template: "<span class=\"block text-{{textSize}}-fixed {{twTextColor}} {{extraTwClasses}}\"\n      [attr.aria-label]=\"ariaLabel\">\n  <sup>$</sup>{{dollarAmount | number}}<sup>.{{centsAmount}}</sup>\n</span>", dependencies: [{ kind: "pipe", type: i1.DecimalPipe, name: "number" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { FeaturedMoneyComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: FeaturedMoneyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-featured-money', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"block text-{{textSize}}-fixed {{twTextColor}} {{extraTwClasses}}\"\n      [attr.aria-label]=\"ariaLabel\">\n  <sup>$</sup>{{dollarAmount | number}}<sup>.{{centsAmount}}</sup>\n</span>" }]
        }], propDecorators: { twTextColor: [{
                type: Input
            }], textSize: [{
                type: Input
            }], amount: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtbW9uZXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2ZlYXR1cmVkLW1vbmV5L2ZlYXR1cmVkLW1vbmV5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9mZWF0dXJlZC1tb25leS9mZWF0dXJlZC1tb25leS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLFdBQVcsQ0FBQzs7O0FBRWpEOzs7Ozs7O0dBT0c7QUFDSCxNQUthLHNCQUF1QixTQUFRLFVBQVU7SUFMdEQ7O1FBTUU7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQVcsV0FBVyxDQUFDO1FBRTNDOzs7O1dBSUc7UUFDTSxhQUFRLEdBQWEsS0FBSyxDQUFDO1FBc0JwQzs7Ozs7V0FLRztRQUNLLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBQ3BDOzs7OztXQUtHO1FBQ0ssaUJBQVksR0FBVyxJQUFJLENBQUM7S0ErQnJDO0lBaEVDOzs7O09BSUc7SUFDSCxJQUFhLE1BQU0sQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO1NBQzVEO2FBQU07WUFDTCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBaUJEOzs7OztPQUtHO0lBQ0gsSUFBSSxTQUFTO1FBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLGdCQUFnQixJQUFJLENBQUMsV0FBVyxRQUFRLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzhHQTlFVSxzQkFBc0I7a0dBQXRCLHNCQUFzQixpS0NwQm5DLHVNQUdPOztTRGlCTSxzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0IsbUJBRWIsdUJBQXVCLENBQUMsTUFBTTs4QkFRdEMsV0FBVztzQkFBbkIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9PLE1BQU07c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlSW5wdXRzLCBUZXh0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5cbi8qKlxuICogVG8gZGlzcGxheSBtb25leVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBGZWF0dXJlZE1vbmV5Q29tcG9uZW50XG4gKiBAdHlwZWRlZiB7RmVhdHVyZWRNb25leUNvbXBvbmVudH1cbiAqIEBleHRlbmRzIHtCYXNlSW5wdXRzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtZmVhdHVyZWQtbW9uZXknLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtbW9uZXkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRNb25leUNvbXBvbmVudCBleHRlbmRzIEJhc2VJbnB1dHMge1xuICAvKipcbiAgICogVGV4dCBjb2xvclxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdHdUZXh0Q29sb3I6IHN0cmluZyA9ICd0ZXh0LWJsdWUnO1xuXG4gIC8qKlxuICAgKiBUZXh0IHNpemVzXG4gICAqXG4gICAqIEB0eXBlIHtUZXh0U2l6ZX1cbiAgICovXG4gIEBJbnB1dCgpIHRleHRTaXplOiBUZXh0U2l6ZSA9ICcyeGwnO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgdG8gZGlzcGxheVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgc2V0IGFtb3VudChhbW91bnQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRleHRBcnJheSA9IGFtb3VudC5zcGxpdCgnLicpO1xuICAgIGlmICh0ZXh0QXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5fZG9sbGFyQW1vdW50ID0gdGV4dEFycmF5WzBdO1xuICAgICAgY29uc3QgY2VudHMgPSB0ZXh0QXJyYXlbMV07XG4gICAgICB0aGlzLl9jZW50c0Ftb3VudCA9IGNlbnRzLmxlbmd0aCA+IDEgPyBjZW50cyA6IGAke2NlbnRzfTBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuTW9uZXkgPSBhbW91bnQ7XG4gICAgICBpZiAoK25Nb25leSA+IDApIHtcbiAgICAgICAgdGhpcy5fZG9sbGFyQW1vdW50ID0gbk1vbmV5O1xuICAgICAgICB0aGlzLl9jZW50c0Ftb3VudCA9ICcwMCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF9kb2xsYXJBbW91bnQ6IHN0cmluZyA9ICcwJztcbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF9jZW50c0Ftb3VudDogc3RyaW5nID0gJzAwJztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gcGxhY2Vob2xkZXJcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYXJpYUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZG9sbGFyQW1vdW50fSBkb2xsYXJzIGFuZCAke3RoaXMuY2VudHNBbW91bnR9IGNlbnRzYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBwbGFjZWhvbGRlclxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBkb2xsYXJBbW91bnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZG9sbGFyQW1vdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHBsYWNlaG9sZGVyXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGNlbnRzQW1vdW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbnRzQW1vdW50O1xuICB9XG59XG4iLCI8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQte3t0ZXh0U2l6ZX19LWZpeGVkIHt7dHdUZXh0Q29sb3J9fSB7e2V4dHJhVHdDbGFzc2VzfX1cIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIj5cbiAgPHN1cD4kPC9zdXA+e3tkb2xsYXJBbW91bnQgfCBudW1iZXJ9fTxzdXA+Lnt7Y2VudHNBbW91bnR9fTwvc3VwPlxuPC9zcGFuPiJdfQ==