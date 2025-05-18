import { AfterViewInit } from '@angular/core';
import { Tab } from './_helpers';
import { SvgAttributes } from '../svg';
import * as i0 from "@angular/core";
export declare class TabsComponent implements AfterViewInit {
    /**
     * An array of tabs to display.
     *
     * @type {Tab[]}
     */
    tabs: Tab[];
    /**
     * Description of purpose for tabs.
     *
     * @type {string}
     */
    tabsAriaLabel: string;
    readonly svgClassList: string[];
    readonly svgAttributes: SvgAttributes;
    private _dynamicComponent;
    private _svgComponent;
    private _selectedIndex;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    ngAfterViewInit(): void;
    private setAnimations;
    private loadComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "eds-tabs", never, { "tabs": { "alias": "tabs"; "required": false; }; "tabsAriaLabel": { "alias": "tabsAriaLabel"; "required": false; }; }, {}, never, never, false, never>;
}
