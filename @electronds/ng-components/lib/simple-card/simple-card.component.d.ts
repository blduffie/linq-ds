import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
/**
 * Simple Card
 *
 * @export
 * @class SimpleCardComponent
 * @typedef {SimpleCardComponent}
 * @extends {BasesInputs}
 */
export declare class SimpleCardComponent extends BaseInputs {
    /**
     * Main title for card
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
     * Icon path
     *
     * @type {string}
     */
    cardIcon: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleCardComponent, "eds-simple-card", never, { "cardTitle": { "alias": "cardTitle"; "required": false; }; "description": { "alias": "description"; "required": false; }; "cardIcon": { "alias": "cardIcon"; "required": false; }; }, {}, never, never, false, never>;
}
