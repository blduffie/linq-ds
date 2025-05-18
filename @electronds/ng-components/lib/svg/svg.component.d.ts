import { HttpClient } from '@angular/common/http';
import { OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgAttributes } from './_helpers';
import * as i0 from "@angular/core";
export declare class SvgComponent implements OnInit {
    private http;
    private renderer;
    private sanitizer;
    /**
     * Path to the svg
     *
     * @type {string}
     */
    svgPath: string;
    /**
     * Initial list of classes to apply to the svg
     *
     * @type {string[]}
     */
    twClassList: string[];
    /**
     * Initial list of attributes to apply to the svg
     *
     * @type {SvgAttributes}
     */
    attributes: SvgAttributes;
    /**
     * Initialize size class for SVG. Must include size and width.
     *
     * @type {string}
     */
    svgSizeClass: string;
    safeSvg?: SafeHtml;
    private _svgContainer;
    constructor(http: HttpClient, renderer: Renderer2, sanitizer: DomSanitizer);
    ngOnInit(): void;
    swapClass(addClass: string, removeClass: string): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    private getSvgElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SvgComponent, "eds-svg", never, { "svgPath": { "alias": "svgPath"; "required": false; }; "twClassList": { "alias": "twClassList"; "required": false; }; "attributes": { "alias": "attributes"; "required": false; }; "svgSizeClass": { "alias": "svgSizeClass"; "required": false; }; }, {}, never, never, false, never>;
}
