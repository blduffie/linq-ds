import { BaseInputs, HorizontalPlacement, VerticalPlacement } from '../../common';
import * as i0 from "@angular/core";
/**
 * Base class for divider components
 *
 * @export
 * @class DividerBase
 * @typedef {DividerBase}
 */
export declare class DividerBase extends BaseInputs {
    /**
     * Text to be displayed within the divider
     *
     * @type {(string)}
     */
    text: string;
    /**
     * Builds tw classes based on textAlignment
     *
     * @public
     * @param {(HorizontalPlacement | VerticalPlacement)} textAlign
     * @returns {string}
     */
    twClasses(textAlign: HorizontalPlacement | VerticalPlacement): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DividerBase, never, never, { "text": { "alias": "text"; "required": false; }; }, {}, never, never, false, never>;
}
