import { BaseInputs, Placement } from '../common';
import * as i0 from "@angular/core";
/**
 * Tooltip for additional information
 *
 * @export
 * @class TooltipComponent
 * @typedef {TooltipComponent}
 * @extends {BaseInputs}
 */
export declare class TooltipComponent extends BaseInputs {
    /**
     * Title (optional, if not supplied will be icon only)
     *
     * @type {string}
     */
    title: string;
    /**
     * Text to display when tooltip opens
     *
     * @type {string}
     */
    tooltipText: string;
    /**
     * Whether the tooltip is on a darkbackground, will change the font color
     *
     * @type {boolean}
     */
    set onDarkBackground(darkBg: boolean);
    /**
     * Direction to open tooltip text
     *
     * @type {OpenDirections}
     */
    set openDirection(direction: Placement);
    /**
     * @private
     * @type {string}
     */
    private _titleColor;
    /**
     * @private
     * @type {string}
     */
    private _ttTextClass;
    /**
     * @private
     * @type {string}
     */
    private _svgClass;
    /**
     * @private
     * @type {string}
     */
    private _ttSvgFill;
    /**
     * @private
     * @type {string}
     */
    private _buttonClass;
    /**
     * @private
     * @type {string}
     */
    private _ttClass;
    /**
     * @private
     * @type {string}
     */
    private _ttSvgClass;
    /**
     * @private
     * @type {string}
     */
    private _ttSvgDPath;
    /**
     * @private
     * @type {string}
     */
    private _ttSvgViewBox;
    /**
     * @readonly
     * @type {string}
     */
    get titleColor(): string;
    /**
     * @readonly
     * @type {string}
     */
    get buttonClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get svgClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgFill(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipTextClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgClass(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgDPath(): string;
    /**
     * @readonly
     * @type {string}
     */
    get tooltipSvgViewBox(): string;
    /**
     * @readonly
     * @type {string}
     */
    get pathData(): string;
    /**
     * @private
     * @param {boolean} darkBg
     */
    private makeColors;
    /**
     * @private
     * @param {Placement} direction
     */
    private makeClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "eds-tooltip", never, { "title": { "alias": "title"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "onDarkBackground": { "alias": "onDarkBackground"; "required": false; }; "openDirection": { "alias": "openDirection"; "required": false; }; }, {}, never, never, false, never>;
}
