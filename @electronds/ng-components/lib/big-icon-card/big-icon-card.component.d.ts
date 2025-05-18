import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
/**
 * Big Icon Card
 *
 * @export
 * @class BigIconCardComponent
 * @typedef {BigIconCardComponent}
 * @extends {BaseInputs}
 */
export declare class BigIconCardComponent extends BaseInputs {
    /**
     * Main title of the card (header)
     *
     * @type {string}
     */
    cardTitle: string;
    /**
     * Subtext for card
     *
     * @type {string}
     */
    description: string;
    /**
     * Path to icon
     *
     * @type {string}
     */
    iconSrc: string;
    /**
     * URL / Route
     *
     * @type {string}
     */
    href: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BigIconCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BigIconCardComponent, "eds-big-icon-card", never, { "cardTitle": { "alias": "cardTitle"; "required": false; }; "description": { "alias": "description"; "required": false; }; "iconSrc": { "alias": "iconSrc"; "required": false; }; "href": { "alias": "href"; "required": false; }; }, {}, never, never, false, never>;
}
