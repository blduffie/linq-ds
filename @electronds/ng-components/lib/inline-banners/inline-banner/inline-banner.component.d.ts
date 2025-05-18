import { BannerBase } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Banner to display (cannot be dismissed by user)
 *
 * @export
 * @class InlineBannerComponent
 * @typedef {InlineBannerComponent}
 * @extends {BannerBase}
 */
export declare class InlineBannerComponent extends BannerBase {
    /**
     * Message/text to display on banner
     *
     * @type {string}
     */
    message: string;
    /**
     * Action text, look and feel of a link
     *
     * @type {string}
     */
    actionText: string;
    /**
     * Action function to execute on click event
     *
     * @type {void}
     */
    actionFn: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineBannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InlineBannerComponent, "eds-inline-banner", never, { "message": { "alias": "message"; "required": false; }; "actionText": { "alias": "actionText"; "required": false; }; "actionFn": { "alias": "actionFn"; "required": false; }; }, {}, never, never, false, never>;
}
