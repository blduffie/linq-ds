import * as i0 from "@angular/core";
/**
 * Page Header with optional description
 *
 * @export
 * @class PageHeaderComponent
 * @typedef {PageHeaderComponent}
 * @extends {BaseInputs}
 */
export declare class PageHeaderComponent {
    /**
     * Title to display at top
     *
     * @type {string}
     */
    title: string;
    /**
     * Description to display underneath title
     *
     * @type {string}
     */
    description: string;
    /**
     * Tailwind classes to customize main container
     *
     * @type {string}
     */
    extraTwClasses: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageHeaderComponent, "eds-page-header", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "extraTwClasses": { "alias": "extraTwClasses"; "required": false; }; }, {}, never, never, false, never>;
}
