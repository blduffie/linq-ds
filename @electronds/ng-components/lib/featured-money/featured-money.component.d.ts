import { BaseInputs, TextSize } from '../common';
import * as i0 from "@angular/core";
/**
 * To display money
 *
 * @export
 * @class FeaturedMoneyComponent
 * @typedef {FeaturedMoneyComponent}
 * @extends {BaseInputs}
 */
export declare class FeaturedMoneyComponent extends BaseInputs {
    /**
     * Text color
     *
     * @type {string}
     */
    twTextColor: string;
    /**
     * Text sizes
     *
     * @type {TextSize}
     */
    textSize: TextSize;
    /**
     * Amount to display
     *
     * @type {string}
     */
    set amount(amount: string);
    /**
     * Description placeholder
     *
     * @private
     * @type {string}
     */
    private _dollarAmount;
    /**
     * Description placeholder
     *
     * @private
     * @type {string}
     */
    private _centsAmount;
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get ariaLabel(): string;
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get dollarAmount(): string;
    /**
     * Description placeholder
     *
     * @readonly
     * @type {string}
     */
    get centsAmount(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturedMoneyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturedMoneyComponent, "eds-featured-money", never, { "twTextColor": { "alias": "twTextColor"; "required": false; }; "textSize": { "alias": "textSize"; "required": false; }; "amount": { "alias": "amount"; "required": false; }; }, {}, never, never, false, never>;
}
