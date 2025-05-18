import { BaseInputs } from '../common';
import { ContentModel } from './_helpers';
import * as i0 from "@angular/core";
type AccordionItem = {
    id: number;
    isExpanded: boolean;
    content: ContentModel;
};
/**
 * Accordion component
 *
 * @export
 * @class AccordionComponent
 * @typedef {AccordionComponent}
 * @extends {BaseInputs}
 */
export declare class AccordionComponent extends BaseInputs {
    /**
     * Array of ContentModel
     *
     * @type {ContentModel[]}
     */
    set items(items: Array<ContentModel>);
    /**
     * @private
     * @type {AccordionItem[]}
     */
    private _items;
    /**
     * Returns items from input
     *
     * @public
     * @returns {AccordionItem[]}
     */
    getItems(): AccordionItem[];
    /**
     * Checks if accordion item is expanded
     *
     * @public
     * @param {AccordionItem} item
     * @returns {boolean}
     */
    expanded(item: AccordionItem): boolean;
    /**
     * Toggles expansion of accordion item
     *
     * @public
     * @param {AccordionItem} item
     */
    toggleExpansion(item: AccordionItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "eds-accordion", never, { "items": { "alias": "items"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
