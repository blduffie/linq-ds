import { BannerBase } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Banner to display with list of items (cannot be dismissed by user)
 *
 * @export
 * @class InlineListBannerComponent
 * @typedef {InlineListBannerComponent}
 * @extends {BannerBase}
 */
export declare class InlineListBannerComponent extends BannerBase {
    /**
     * Main title of the banner
     *
     * @type {string}
     */
    title: string;
    /**
     * List of messages/texts to display
     *
     * @type {string[]}
     */
    messages: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineListBannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InlineListBannerComponent, "eds-inline-list-banner", never, { "title": { "alias": "title"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; }, {}, never, never, false, never>;
}
