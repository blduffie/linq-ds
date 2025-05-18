import { BannerType, BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Base class for Banners
 *
 * @export
 * @class BannerBase
 * @typedef {BannerBase}
 * @extends {BaseInputs}
 */
export declare class BannerBase extends BaseInputs {
    /**
     * Link URL / Route
     *
     * @type {string}
     */
    link: string;
    /**
     * Link text to be displayed
     *
     * @type {string}
     */
    linkText: string;
    /**
     * Determines what banner is shown
     *
     * @type {BannerType}
     */
    set status(status: BannerType);
    /**
     * @private
     * @type {string}
     */
    private _icon;
    /**
     * @private
     * @type {string}
     */
    private _color;
    /**
     * @private
     * @type {string}
     */
    private _borderColor;
    /**
     * @readonly
     * @type {string}
     */
    get icon(): string;
    /**
     * @readonly
     * @type {string}
     */
    get color(): string;
    /**
     * @readonly
     * @type {string}
     */
    get borderColor(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BannerBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BannerBase, never, never, { "link": { "alias": "link"; "required": false; }; "linkText": { "alias": "linkText"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}
