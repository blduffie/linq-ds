import { EventEmitter } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Site Banner Base
 *
 * @export
 * @class SiteBannerBase
 * @typedef {SiteBannerBase}
 * @extends {BaseInputs}
 */
export declare class SiteBannerBase extends BaseInputs {
    /**
     * Hidden Details Text
     *
     * @type {string}
     * */
    hiddenDetails: string;
    /**
     * Identifies if details are shown or not
     *
     * @type {boolean}
     */
    showDetails: boolean;
    /**
     * Identifies if banner is closed on click
     *
     * @type {boolean}
     */
    close: boolean;
    /**
     * Banner Title
     *
     * @type {string}
     *
     */
    title: string;
    /**
     * Banner Main Text
     *
     * @type {string}
     */
    mainText: string;
    /**
     * Banner Details Text
     * Can be optional to use "Read More" or "Learn More" text
     *
     * @type {string}
     */
    details: string;
    /**
     * Exiting the banner on click
     *
     * @type {*}
     *
     */
    bannerClosed: any;
    /**
     * Emits boolean as to whether the details are shown or not
     *
     * @type {EventEmitter<boolean>}
     */
    showDetailsChanged: EventEmitter<boolean>;
    /**
     * When Show Details is clicked
     *
     * @public
     */
    handleDetailsClicked(): void;
    /**
     * @public
     */
    handleCloseButton(): void;
    /**
     * @private
     */
    private delete;
    static ɵfac: i0.ɵɵFactoryDeclaration<SiteBannerBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SiteBannerBase, never, never, { "hiddenDetails": { "alias": "hiddenDetails"; "required": false; }; "showDetails": { "alias": "showDetails"; "required": false; }; "close": { "alias": "close"; "required": false; }; "title": { "alias": "title"; "required": false; }; "mainText": { "alias": "mainText"; "required": false; }; "details": { "alias": "details"; "required": false; }; }, { "bannerClosed": "bannerClosed"; "showDetailsChanged": "showDetailsChanged"; }, never, never, false, never>;
}
