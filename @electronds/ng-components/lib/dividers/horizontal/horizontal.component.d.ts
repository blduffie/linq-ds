import { HorizontalPlacement } from '../../common';
import { DividerBase } from '../_helpers/divider.base';
import * as i0 from "@angular/core";
/**
 * Horizontal Divider
 *
 * @export
 * @class HorizontalDividerComponent
 * @typedef {HorizontalDividerComponent}
 * @extends {DividerBase}
 */
export declare class HorizontalDividerComponent extends DividerBase {
    /**
     * Text placement within divider
     *
     * @type {HorizontalPlacement}
     */
    textAlign: HorizontalPlacement;
    /**
     * @readonly
     * @type {string}
     */
    get horizontalClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<HorizontalDividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HorizontalDividerComponent, "eds-horizontal-divider", never, { "textAlign": { "alias": "textAlign"; "required": false; }; }, {}, never, never, false, never>;
}
