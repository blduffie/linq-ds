import { TemplateRef } from '@angular/core';
/**
 * Accordion content model
 *
 * @export
 * @typedef {ContentModel}
 */
export type ContentModel = {
    title: string;
    contentText?: string;
    contentTemplate?: TemplateRef<any>;
};
