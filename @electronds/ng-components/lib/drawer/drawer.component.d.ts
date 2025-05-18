import { EventEmitter, TemplateRef } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
type OpensFromDirection = 'right' | 'left';
/**
 * The Drawer flies out from the 'right' or 'left' side of the screen, with a masked
 * background. The body content can be any TemplateRef you want, but the body container
 * is y-scrollable (not x-scrollable) and padded. Footer buttons are experimental and
 * subject to change.
 *
 * @example
 *```
 * <ng-template #drawerContent>
 *     <div>This goes into the drawer body</div>
 * </ng-template>
 *
 * <eds-drawer
 *     [isDrawerOpen]="isDrawerOpen"
 *     [openFrom]="openDirection"
 *     [title]="Drawer Title"
 *     [body]="drawerContent"
 *     [footerButtons]="[{label: 'Cancel', type: 'secondary'}, {label: 'OK', type: 'primary'}]"
 *     (dismiss)="drawerClosed($event)"
 * ></eds-drawer>
 *```
 */
export declare class DrawerComponent<T> extends BaseInputs {
    /**
     * Which side will the drawer open from? Default is 'right'
     * @param opensFrom
     */
    set openFrom(opensFrom: OpensFromDirection);
    set isDrawerOpen(isOpen: boolean);
    /**
     * Displayed in the drawer header, as-is. Should limit to two short words.
     * @default 'Drawer Title'
     */
    title: string;
    /**
     * Custom body to be displayed between header and footer (container being y-scrollable and padded)
     */
    body: TemplateRef<T> | undefined;
    /**
     * <b>experimental</b> - Only up to 2 buttons currently supported. Further buttons ignored.
     * @see dismiss
     */
    footerButtons: {
        label: string;
        type: 'primary' | 'secondary';
    }[];
    /**
     * Close event with a 0-indexed number indicating footer button # pressed to dismiss.
     * -1 to be returned if dismissed without pressing footer button.
     */
    dismiss: EventEmitter<number>;
    protected opensFrom: OpensFromDirection;
    protected changingSides: boolean;
    protected isOpen: boolean;
    protected closeDrawer(footerButtonNum?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawerComponent<any>, "eds-drawer", never, { "openFrom": { "alias": "openFrom"; "required": false; }; "isDrawerOpen": { "alias": "isDrawerOpen"; "required": false; }; "title": { "alias": "title"; "required": false; }; "body": { "alias": "body"; "required": false; }; "footerButtons": { "alias": "footerButtons"; "required": false; }; }, { "dismiss": "dismiss"; }, never, never, false, never>;
}
export {};
