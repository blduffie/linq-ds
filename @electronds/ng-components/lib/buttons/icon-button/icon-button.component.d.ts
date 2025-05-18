import { IconMeta, Placement, SvgMeta } from '../../common';
import { ButtonBase } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Icon Button
 *
 * @export
 * @class IconButtonComponent
 * @typedef {IconButtonComponent}
 * @extends {ButtonBase}
 */
export declare class IconButtonComponent extends ButtonBase {
    /**
     * Where on the button the icon is displayed
     *
     * @type {Placement}
     */
    iconPlacement: Placement;
    /**
     * Icon data
     *
     * @type {IconMeta}
     */
    imageData: IconMeta;
    /**
     * Svg Data
     *
     * @type {SvgMeta}
     */
    svgData: SvgMeta;
    /**
     * @readonly
     * @type {string}
     */
    get iconButtonClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get iconClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconButtonComponent, "eds-icon-button", never, { "iconPlacement": { "alias": "iconPlacement"; "required": false; }; "imageData": { "alias": "imageData"; "required": false; }; "svgData": { "alias": "svgData"; "required": false; }; }, {}, never, never, false, never>;
}
