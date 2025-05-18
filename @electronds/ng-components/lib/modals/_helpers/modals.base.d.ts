import { TemplateRef } from '@angular/core';
import { BaseInputs, ModalPlacement } from '../../common';
import * as i0 from "@angular/core";
/**
 * Modals Base
 *
 * @export
 * @class ModalsBase
 * @typedef {ModalsBase}
 * @extends {BaseInputs}
 */
export declare class ModalsBase extends BaseInputs {
    /**
     * Determines if modal is open or not (can manually opened/closed if needed)
     *
     * @type {boolean}
     */
    isOpen: boolean;
    /**
     * Determines if modal can be dismissed without interaction
     *
     * @type {boolean}
     */
    allowClose: boolean;
    /**
     * Modals title in <h2>
     *
     * @type {string}
     */
    title: string;
    /**
     * Content/description text to be displayed to user
     * @optional
     * @type {string}
     */
    content?: string;
    /**
     * Content in the form of a template defined by user (optional)
     * @optional
     * @type {?TemplateRef<any>}
     */
    contentTemplate?: TemplateRef<any>;
    /**
     * Text for primary button
     *
     * @type {string}
     */
    primaryBtnText: string;
    /**
     * Tailwind classes to further style the primary button
     *
     * @type {string}
     */
    primaryBtnTwClasses: string;
    /**
     * Text for secondary button
     *
     * @type {string}
     */
    secondaryBtnText: string;
    /**
     * Tailwind classes to further style the secondary button
     *
     * @type {string}
     */
    secondaryBtnTwClasses: string;
    /**
     * Where modal will open on the screen
     *
     * @type {ModalPlacement}
     */
    alignment: ModalPlacement;
    /**
     * Event for primary button clicked
     *
     * @type {*}
     */
    primaryBtnClicked: any;
    /**
     * Event for secondary button clicked
     *
     * @type {*}
     */
    secondaryBtnClicked: any;
    /**
     * On Modal close
     *
     * @type {*}
     */
    modalClosed: any;
    /**
     * Gets classes for modal when open/closed
     *
     * @readonly
     * @type {string}
     */
    get modalOpenCloseClasses(): string;
    /**
     * Gets classes for overlay background
     *
     * @readonly
     * @type {string}
     */
    get overlayBackgroundOpenCloseClasses(): string;
    /**
     * Gets classes for overlay
     *
     * @readonly
     * @type {string}
     */
    get overlayOpenCloseClasses(): string;
    /**
     * @public
     */
    handleSecondaryBtnClicked(): void;
    /**
     * @public
     */
    handlePrimaryBtnClicked(): void;
    /**
     * @public
     */
    handleCloseBtnClicked(): void;
    /**
     * @private
     */
    private toggleModal;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalsBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalsBase, never, never, { "isOpen": { "alias": "isOpen"; "required": false; }; "allowClose": { "alias": "allowClose"; "required": false; }; "title": { "alias": "title"; "required": false; }; "content": { "alias": "content"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "primaryBtnText": { "alias": "primaryBtnText"; "required": false; }; "primaryBtnTwClasses": { "alias": "primaryBtnTwClasses"; "required": false; }; "secondaryBtnText": { "alias": "secondaryBtnText"; "required": false; }; "secondaryBtnTwClasses": { "alias": "secondaryBtnTwClasses"; "required": false; }; "alignment": { "alias": "alignment"; "required": false; }; }, { "primaryBtnClicked": "primaryBtnClicked"; "secondaryBtnClicked": "secondaryBtnClicked"; "modalClosed": "modalClosed"; }, never, never, false, never>;
}
