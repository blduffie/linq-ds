import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
class DrawerComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Displayed in the drawer header, as-is. Should limit to two short words.
         * @default 'Drawer Title'
         */
        this.title = 'Drawer Title';
        /**
         * Custom body to be displayed between header and footer (container being y-scrollable and padded)
         */
        this.body = undefined;
        /**
         * <b>experimental</b> - Only up to 2 buttons currently supported. Further buttons ignored.
         * @see dismiss
         */
        this.footerButtons = [];
        /**
         * Close event with a 0-indexed number indicating footer button # pressed to dismiss.
         * -1 to be returned if dismissed without pressing footer button.
         */
        this.dismiss = new EventEmitter();
        this.opensFrom = 'right';
        // Helps with slide-in/out transitions when changing sides
        this.changingSides = false;
        this.isOpen = false;
    }
    /**
     * Which side will the drawer open from? Default is 'right'
     * @param opensFrom
     */
    set openFrom(opensFrom) {
        // Just in case
        if (!opensFrom) {
            opensFrom = 'right';
        }
        if (opensFrom !== this.opensFrom) {
            this.changingSides = true;
        }
        this.opensFrom = opensFrom;
        // changingSides animation helper
        setTimeout(() => {
            this.changingSides = false;
        });
    }
    set isDrawerOpen(isOpen) {
        // changingSides animation helper
        setTimeout(() => {
            this.isOpen = isOpen;
            // isOpen has to be guaranteed to update AFTER changingSides is set to false
        }, 2);
    }
    closeDrawer(footerButtonNum = -1) {
        this.dismiss.emit(footerButtonNum);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DrawerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: DrawerComponent, selector: "eds-drawer", inputs: { openFrom: "openFrom", isDrawerOpen: "isDrawerOpen", title: "title", body: "body", footerButtons: "footerButtons" }, outputs: { dismiss: "dismiss" }, usesInheritance: true, ngImport: i0, template: "<div class=\"eds-drawer__mask fixed z-[4] inset-0 flex bg-black\"\n     [ngClass]=\"{\n     'flex-row-reverse': opensFrom === 'right',\n     'flex-row': opensFrom === 'left',\n     'visible bg-opacity-60 ease-out duration-300': isOpen,\n     'invisible bg-opacity-0 ease-in duration-200': !isOpen,\n     }\"\n     (click)=\"closeDrawer()\">\n  <div class=\"eds-drawer__container w-full max-w-sm bg-white flex flex-col justify-between\"\n       [ngClass]=\"{\n         'ease-out duration-300 delay-100': isOpen && !changingSides,\n         'ease-in duration-100': !isOpen && !changingSides,\n         'rounded-l-lg': opensFrom === 'right',\n         'rounded-r-lg': opensFrom === 'left',\n         'translate-x-full': !isOpen && opensFrom === 'right',\n         '-translate-x-full': !isOpen && opensFrom === 'left',\n         }\"\n       (click)=\"$event.stopPropagation()\">\n\n    <div\n         class=\"eds-drawer__header px-24 pt-24 pb-16 text-left shadow-md text-xl leading-sm text-gray-darker flex justify-between\">\n      <h2>\n        {{title}}\n      </h2>\n      <!-- Blue X button -->\n\n      <button class=\"-m-12 btn btn-tertiary btn-xs btn-icon-only\"\n              (click)=\"closeDrawer()\">\n        <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 24 24\"\n             aria-hidden=\"true\">\n          <path\n                d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n        </svg>\n      </button>\n    </div>\n\n\n    <div *ngIf=\"body\"\n         class=\"eds-drawer__body flex-grow p-16 sm:p-24 h-full overflow-y-auto\">\n      <!-- Custom user body content -->\n      <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n    </div>\n\n\n    <div *ngIf=\"footerButtons.length > 0\"\n         class=\"eds-drawer__footer flex-shrink-0 flex flex-wrap gap-8 px-16 pb-16 pt-12 dark:pt-12 border-t border-gray sm:px-24 sm:pt-16 sm:pb-24\">\n      <button class=\"btn btn-{{footerButtons[0].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(0)\">\n        {{footerButtons[0].label}}\n      </button>\n      <button *ngIf=\"footerButtons.length > 1\"\n              class=\"btn btn-{{footerButtons[1].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(1)\">\n        {{footerButtons[1].label}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: aria-labelled-by, role, dark:mode, general ADA compliance -->", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
export { DrawerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-drawer', template: "<div class=\"eds-drawer__mask fixed z-[4] inset-0 flex bg-black\"\n     [ngClass]=\"{\n     'flex-row-reverse': opensFrom === 'right',\n     'flex-row': opensFrom === 'left',\n     'visible bg-opacity-60 ease-out duration-300': isOpen,\n     'invisible bg-opacity-0 ease-in duration-200': !isOpen,\n     }\"\n     (click)=\"closeDrawer()\">\n  <div class=\"eds-drawer__container w-full max-w-sm bg-white flex flex-col justify-between\"\n       [ngClass]=\"{\n         'ease-out duration-300 delay-100': isOpen && !changingSides,\n         'ease-in duration-100': !isOpen && !changingSides,\n         'rounded-l-lg': opensFrom === 'right',\n         'rounded-r-lg': opensFrom === 'left',\n         'translate-x-full': !isOpen && opensFrom === 'right',\n         '-translate-x-full': !isOpen && opensFrom === 'left',\n         }\"\n       (click)=\"$event.stopPropagation()\">\n\n    <div\n         class=\"eds-drawer__header px-24 pt-24 pb-16 text-left shadow-md text-xl leading-sm text-gray-darker flex justify-between\">\n      <h2>\n        {{title}}\n      </h2>\n      <!-- Blue X button -->\n\n      <button class=\"-m-12 btn btn-tertiary btn-xs btn-icon-only\"\n              (click)=\"closeDrawer()\">\n        <svg class=\"fill-current text-teal-darker icon-16 md:icon-20\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             viewBox=\"0 0 24 24\"\n             aria-hidden=\"true\">\n          <path\n                d=\"M2.782.477,12,9.7,21.218.477a1.63,1.63,0,0,1,2.3,2.305L14.305,12l9.218,9.218a1.63,1.63,0,0,1-2.3,2.3L12,14.305,2.782,23.523a1.63,1.63,0,0,1-2.305-2.3L9.7,12,.477,2.782A1.63,1.63,0,0,1,2.782.477Z\" />\n        </svg>\n      </button>\n    </div>\n\n\n    <div *ngIf=\"body\"\n         class=\"eds-drawer__body flex-grow p-16 sm:p-24 h-full overflow-y-auto\">\n      <!-- Custom user body content -->\n      <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n    </div>\n\n\n    <div *ngIf=\"footerButtons.length > 0\"\n         class=\"eds-drawer__footer flex-shrink-0 flex flex-wrap gap-8 px-16 pb-16 pt-12 dark:pt-12 border-t border-gray sm:px-24 sm:pt-16 sm:pb-24\">\n      <button class=\"btn btn-{{footerButtons[0].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(0)\">\n        {{footerButtons[0].label}}\n      </button>\n      <button *ngIf=\"footerButtons.length > 1\"\n              class=\"btn btn-{{footerButtons[1].type}} flex-grow sm:m-0\"\n              (click)=\"closeDrawer(1)\">\n        {{footerButtons[1].label}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: aria-labelled-by, role, dark:mode, general ADA compliance -->" }]
        }], propDecorators: { openFrom: [{
                type: Input
            }], isDrawerOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], body: [{
                type: Input
            }], footerButtons: [{
                type: Input
            }], dismiss: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBSXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxNQUlhLGVBQW1CLFNBQVEsVUFBVTtJQUpsRDs7UUFrQ0U7OztXQUdHO1FBQ00sVUFBSyxHQUFHLGNBQWMsQ0FBQztRQUVoQzs7V0FFRztRQUNNLFNBQUksR0FBK0IsU0FBUyxDQUFDO1FBRXREOzs7V0FHRztRQUNNLGtCQUFhLEdBQ3BCLEVBQUUsQ0FBQztRQUVMOzs7V0FHRztRQUNPLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXJDLGNBQVMsR0FBdUIsT0FBTyxDQUFDO1FBQ2xELDBEQUEwRDtRQUNoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixXQUFNLEdBQUcsS0FBSyxDQUFDO0tBSzFCO0lBN0RDOzs7T0FHRztJQUNILElBQWEsUUFBUSxDQUFDLFNBQTZCO1FBQ2pELGVBQWU7UUFDZixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUNyQjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixpQ0FBaUM7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQWEsWUFBWSxDQUFDLE1BQWU7UUFDdkMsaUNBQWlDO1FBQ2pDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQiw0RUFBNEU7UUFDOUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQStCUyxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDOzhHQTdEVSxlQUFlO2tHQUFmLGVBQWUsd09DckM1Qiw0akZBNkR3RTs7U0R4QjNELGVBQWU7MkZBQWYsZUFBZTtrQkFKM0IsU0FBUzsrQkFDRSxZQUFZOzhCQVFULFFBQVE7c0JBQXBCLEtBQUs7Z0JBaUJPLFlBQVk7c0JBQXhCLEtBQUs7Z0JBWUcsS0FBSztzQkFBYixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFNRyxhQUFhO3NCQUFyQixLQUFLO2dCQU9JLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUlucHV0cyB9IGZyb20gJy4uL2NvbW1vbic7XG5cbnR5cGUgT3BlbnNGcm9tRGlyZWN0aW9uID0gJ3JpZ2h0JyB8ICdsZWZ0JztcblxuLyoqXG4gKiBUaGUgRHJhd2VyIGZsaWVzIG91dCBmcm9tIHRoZSAncmlnaHQnIG9yICdsZWZ0JyBzaWRlIG9mIHRoZSBzY3JlZW4sIHdpdGggYSBtYXNrZWRcbiAqIGJhY2tncm91bmQuIFRoZSBib2R5IGNvbnRlbnQgY2FuIGJlIGFueSBUZW1wbGF0ZVJlZiB5b3Ugd2FudCwgYnV0IHRoZSBib2R5IGNvbnRhaW5lclxuICogaXMgeS1zY3JvbGxhYmxlIChub3QgeC1zY3JvbGxhYmxlKSBhbmQgcGFkZGVkLiBGb290ZXIgYnV0dG9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZFxuICogc3ViamVjdCB0byBjaGFuZ2UuXG4gKlxuICogQGV4YW1wbGVcbiAqYGBgXG4gKiA8bmctdGVtcGxhdGUgI2RyYXdlckNvbnRlbnQ+XG4gKiAgICAgPGRpdj5UaGlzIGdvZXMgaW50byB0aGUgZHJhd2VyIGJvZHk8L2Rpdj5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKlxuICogPGVkcy1kcmF3ZXJcbiAqICAgICBbaXNEcmF3ZXJPcGVuXT1cImlzRHJhd2VyT3BlblwiXG4gKiAgICAgW29wZW5Gcm9tXT1cIm9wZW5EaXJlY3Rpb25cIlxuICogICAgIFt0aXRsZV09XCJEcmF3ZXIgVGl0bGVcIlxuICogICAgIFtib2R5XT1cImRyYXdlckNvbnRlbnRcIlxuICogICAgIFtmb290ZXJCdXR0b25zXT1cIlt7bGFiZWw6ICdDYW5jZWwnLCB0eXBlOiAnc2Vjb25kYXJ5J30sIHtsYWJlbDogJ09LJywgdHlwZTogJ3ByaW1hcnknfV1cIlxuICogICAgIChkaXNtaXNzKT1cImRyYXdlckNsb3NlZCgkZXZlbnQpXCJcbiAqID48L2Vkcy1kcmF3ZXI+XG4gKmBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudDxUPiBleHRlbmRzIEJhc2VJbnB1dHMge1xuICAvKipcbiAgICogV2hpY2ggc2lkZSB3aWxsIHRoZSBkcmF3ZXIgb3BlbiBmcm9tPyBEZWZhdWx0IGlzICdyaWdodCdcbiAgICogQHBhcmFtIG9wZW5zRnJvbVxuICAgKi9cbiAgQElucHV0KCkgc2V0IG9wZW5Gcm9tKG9wZW5zRnJvbTogT3BlbnNGcm9tRGlyZWN0aW9uKSB7XG4gICAgLy8gSnVzdCBpbiBjYXNlXG4gICAgaWYgKCFvcGVuc0Zyb20pIHtcbiAgICAgIG9wZW5zRnJvbSA9ICdyaWdodCc7XG4gICAgfVxuICAgIGlmIChvcGVuc0Zyb20gIT09IHRoaXMub3BlbnNGcm9tKSB7XG4gICAgICB0aGlzLmNoYW5naW5nU2lkZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMub3BlbnNGcm9tID0gb3BlbnNGcm9tO1xuXG4gICAgLy8gY2hhbmdpbmdTaWRlcyBhbmltYXRpb24gaGVscGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5naW5nU2lkZXMgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpc0RyYXdlck9wZW4oaXNPcGVuOiBib29sZWFuKSB7XG4gICAgLy8gY2hhbmdpbmdTaWRlcyBhbmltYXRpb24gaGVscGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzT3BlbiA9IGlzT3BlbjtcbiAgICAgIC8vIGlzT3BlbiBoYXMgdG8gYmUgZ3VhcmFudGVlZCB0byB1cGRhdGUgQUZURVIgY2hhbmdpbmdTaWRlcyBpcyBzZXQgdG8gZmFsc2VcbiAgICB9LCAyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5ZWQgaW4gdGhlIGRyYXdlciBoZWFkZXIsIGFzLWlzLiBTaG91bGQgbGltaXQgdG8gdHdvIHNob3J0IHdvcmRzLlxuICAgKiBAZGVmYXVsdCAnRHJhd2VyIFRpdGxlJ1xuICAgKi9cbiAgQElucHV0KCkgdGl0bGUgPSAnRHJhd2VyIFRpdGxlJztcblxuICAvKipcbiAgICogQ3VzdG9tIGJvZHkgdG8gYmUgZGlzcGxheWVkIGJldHdlZW4gaGVhZGVyIGFuZCBmb290ZXIgKGNvbnRhaW5lciBiZWluZyB5LXNjcm9sbGFibGUgYW5kIHBhZGRlZClcbiAgICovXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPFQ+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiA8Yj5leHBlcmltZW50YWw8L2I+IC0gT25seSB1cCB0byAyIGJ1dHRvbnMgY3VycmVudGx5IHN1cHBvcnRlZC4gRnVydGhlciBidXR0b25zIGlnbm9yZWQuXG4gICAqIEBzZWUgZGlzbWlzc1xuICAgKi9cbiAgQElucHV0KCkgZm9vdGVyQnV0dG9uczogeyBsYWJlbDogc3RyaW5nOyB0eXBlOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB9W10gPVxuICAgIFtdO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBldmVudCB3aXRoIGEgMC1pbmRleGVkIG51bWJlciBpbmRpY2F0aW5nIGZvb3RlciBidXR0b24gIyBwcmVzc2VkIHRvIGRpc21pc3MuXG4gICAqIC0xIHRvIGJlIHJldHVybmVkIGlmIGRpc21pc3NlZCB3aXRob3V0IHByZXNzaW5nIGZvb3RlciBidXR0b24uXG4gICAqL1xuICBAT3V0cHV0KCkgZGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByb3RlY3RlZCBvcGVuc0Zyb206IE9wZW5zRnJvbURpcmVjdGlvbiA9ICdyaWdodCc7XG4gIC8vIEhlbHBzIHdpdGggc2xpZGUtaW4vb3V0IHRyYW5zaXRpb25zIHdoZW4gY2hhbmdpbmcgc2lkZXNcbiAgcHJvdGVjdGVkIGNoYW5naW5nU2lkZXMgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGlzT3BlbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBjbG9zZURyYXdlcihmb290ZXJCdXR0b25OdW0gPSAtMSkge1xuICAgIHRoaXMuZGlzbWlzcy5lbWl0KGZvb3RlckJ1dHRvbk51bSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJlZHMtZHJhd2VyX19tYXNrIGZpeGVkIHotWzRdIGluc2V0LTAgZmxleCBiZy1ibGFja1wiXG4gICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgJ2ZsZXgtcm93LXJldmVyc2UnOiBvcGVuc0Zyb20gPT09ICdyaWdodCcsXG4gICAgICdmbGV4LXJvdyc6IG9wZW5zRnJvbSA9PT0gJ2xlZnQnLFxuICAgICAndmlzaWJsZSBiZy1vcGFjaXR5LTYwIGVhc2Utb3V0IGR1cmF0aW9uLTMwMCc6IGlzT3BlbixcbiAgICAgJ2ludmlzaWJsZSBiZy1vcGFjaXR5LTAgZWFzZS1pbiBkdXJhdGlvbi0yMDAnOiAhaXNPcGVuLFxuICAgICB9XCJcbiAgICAgKGNsaWNrKT1cImNsb3NlRHJhd2VyKClcIj5cbiAgPGRpdiBjbGFzcz1cImVkcy1kcmF3ZXJfX2NvbnRhaW5lciB3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICdlYXNlLW91dCBkdXJhdGlvbi0zMDAgZGVsYXktMTAwJzogaXNPcGVuICYmICFjaGFuZ2luZ1NpZGVzLFxuICAgICAgICAgJ2Vhc2UtaW4gZHVyYXRpb24tMTAwJzogIWlzT3BlbiAmJiAhY2hhbmdpbmdTaWRlcyxcbiAgICAgICAgICdyb3VuZGVkLWwtbGcnOiBvcGVuc0Zyb20gPT09ICdyaWdodCcsXG4gICAgICAgICAncm91bmRlZC1yLWxnJzogb3BlbnNGcm9tID09PSAnbGVmdCcsXG4gICAgICAgICAndHJhbnNsYXRlLXgtZnVsbCc6ICFpc09wZW4gJiYgb3BlbnNGcm9tID09PSAncmlnaHQnLFxuICAgICAgICAgJy10cmFuc2xhdGUteC1mdWxsJzogIWlzT3BlbiAmJiBvcGVuc0Zyb20gPT09ICdsZWZ0JyxcbiAgICAgICAgIH1cIlxuICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cblxuICAgIDxkaXZcbiAgICAgICAgIGNsYXNzPVwiZWRzLWRyYXdlcl9faGVhZGVyIHB4LTI0IHB0LTI0IHBiLTE2IHRleHQtbGVmdCBzaGFkb3ctbWQgdGV4dC14bCBsZWFkaW5nLXNtIHRleHQtZ3JheS1kYXJrZXIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxoMj5cbiAgICAgICAge3t0aXRsZX19XG4gICAgICA8L2gyPlxuICAgICAgPCEtLSBCbHVlIFggYnV0dG9uIC0tPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiLW0tMTIgYnRuIGJ0bi10ZXJ0aWFyeSBidG4teHMgYnRuLWljb24tb25seVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZURyYXdlcigpXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgdGV4dC10ZWFsLWRhcmtlciBpY29uLTE2IG1kOmljb24tMjBcIlxuICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0yLjc4Mi40NzcsMTIsOS43LDIxLjIxOC40NzdhMS42MywxLjYzLDAsMCwxLDIuMywyLjMwNUwxNC4zMDUsMTJsOS4yMTgsOS4yMThhMS42MywxLjYzLDAsMCwxLTIuMywyLjNMMTIsMTQuMzA1LDIuNzgyLDIzLjUyM2ExLjYzLDEuNjMsMCwwLDEtMi4zMDUtMi4zTDkuNywxMiwuNDc3LDIuNzgyQTEuNjMsMS42MywwLDAsMSwyLjc4Mi40NzdaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiAqbmdJZj1cImJvZHlcIlxuICAgICAgICAgY2xhc3M9XCJlZHMtZHJhd2VyX19ib2R5IGZsZXgtZ3JvdyBwLTE2IHNtOnAtMjQgaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgPCEtLSBDdXN0b20gdXNlciBib2R5IGNvbnRlbnQgLS0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYm9keVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyQnV0dG9ucy5sZW5ndGggPiAwXCJcbiAgICAgICAgIGNsYXNzPVwiZWRzLWRyYXdlcl9fZm9vdGVyIGZsZXgtc2hyaW5rLTAgZmxleCBmbGV4LXdyYXAgZ2FwLTggcHgtMTYgcGItMTYgcHQtMTIgZGFyazpwdC0xMiBib3JkZXItdCBib3JkZXItZ3JheSBzbTpweC0yNCBzbTpwdC0xNiBzbTpwYi0yNFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4te3tmb290ZXJCdXR0b25zWzBdLnR5cGV9fSBmbGV4LWdyb3cgc206bS0wXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlRHJhd2VyKDApXCI+XG4gICAgICAgIHt7Zm9vdGVyQnV0dG9uc1swXS5sYWJlbH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJmb290ZXJCdXR0b25zLmxlbmd0aCA+IDFcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4te3tmb290ZXJCdXR0b25zWzFdLnR5cGV9fSBmbGV4LWdyb3cgc206bS0wXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlRHJhd2VyKDEpXCI+XG4gICAgICAgIHt7Zm9vdGVyQnV0dG9uc1sxXS5sYWJlbH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBUT0RPOiBhcmlhLWxhYmVsbGVkLWJ5LCByb2xlLCBkYXJrOm1vZGUsIGdlbmVyYWwgQURBIGNvbXBsaWFuY2UgLS0+Il19