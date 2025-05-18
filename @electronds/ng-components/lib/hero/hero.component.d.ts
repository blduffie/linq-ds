import { ImageMeta } from '../common';
import * as i0 from "@angular/core";
export declare class HeroComponent {
    /**
     * Displayed Title
     *
     * @type {string}
     */
    title?: string;
    /**
     * Displayed description
     *
     * @type {string}
     */
    description?: string;
    /**
     * Url for background image
     *
     * @type {string}
     */
    /**
     * Image data
     *
     * @type {ImageMeta}
     */
    imageData: ImageMeta;
    /**
     * Label for primary button
     *
     * @type {string}
     */
    primaryBtnLabel?: string;
    /**
     * Href for primary button
     *
     * @type {string}
     */
    primaryBtnLink?: string;
    /**
     * Label for secondary button
     *
     * @type {string}
     */
    secondaryBtnLabel?: string;
    /**
     * Href for secondary button
     *
     * @type {string}
     */
    secondaryBtnLink?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroComponent, "eds-hero", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "imageData": { "alias": "imageData"; "required": false; }; "primaryBtnLabel": { "alias": "primaryBtnLabel"; "required": false; }; "primaryBtnLink": { "alias": "primaryBtnLink"; "required": false; }; "secondaryBtnLabel": { "alias": "secondaryBtnLabel"; "required": false; }; "secondaryBtnLink": { "alias": "secondaryBtnLink"; "required": false; }; }, {}, never, never, false, never>;
}
