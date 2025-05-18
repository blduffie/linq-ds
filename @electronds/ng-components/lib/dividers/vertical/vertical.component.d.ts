import { VerticalPlacement } from '../../common';
import { DividerBase } from '../_helpers/divider.base';
import * as i0 from "@angular/core";
/**
 * Vertical Divider
 *
 * @export
 * @class VerticalDividerComponent
 * @typedef {VerticalDividerComponent}
 * @extends {DividerBase}
 */
export declare class VerticalDividerComponent extends DividerBase {
    /**
     * Text placement within divider
     *
     * @type {VerticalPlacement}
     */
    textAlign: VerticalPlacement;
    /**
     * @readonly
     * @type {string}
     */
    get verticalClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalDividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VerticalDividerComponent, "eds-vertical-divider", never, { "textAlign": { "alias": "textAlign"; "required": false; }; }, {}, never, never, false, never>;
}
