import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
class SvgComponent {
    constructor(http, renderer, sanitizer) {
        this.http = http;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        /**
         * Path to the svg
         *
         * @type {string}
         */
        this.svgPath = '';
        /**
         * Initial list of classes to apply to the svg
         *
         * @type {string[]}
         */
        this.twClassList = [];
        /**
         * Initial list of attributes to apply to the svg
         *
         * @type {SvgAttributes}
         */
        this.attributes = {};
        /**
         * Initialize size class for SVG. Must include size and width.
         *
         * @type {string}
         */
        this.svgSizeClass = 'icon-28';
    }
    ngOnInit() {
        this.http.get(this.svgPath, { responseType: 'text' }).subscribe((svg) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(svg, 'image/svg+xml');
            const svgElement = doc.querySelector('svg');
            // Add class and attributes
            svgElement?.classList.add(...this.twClassList, this.svgSizeClass);
            for (const attribute in this.attributes) {
                svgElement?.setAttribute(attribute, this.attributes[attribute]);
            }
            // Serialize back to string and sanitize
            if (svgElement) {
                const serializer = new XMLSerializer();
                const serializedSvg = serializer.serializeToString(svgElement);
                this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(serializedSvg);
            }
        });
    }
    swapClass(addClass, removeClass) {
        this.addClass(addClass);
        this.removeClass(removeClass);
    }
    addClass(className) {
        this.renderer.addClass(this.getSvgElement(), className);
    }
    removeClass(className) {
        this.renderer.removeClass(this.getSvgElement(), className);
    }
    getSvgElement() {
        return this._svgContainer.nativeElement.firstElementChild;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgComponent, deps: [{ token: i1.HttpClient }, { token: i0.Renderer2 }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: SvgComponent, selector: "eds-svg", inputs: { svgPath: "svgPath", twClassList: "twClassList", attributes: "attributes", svgSizeClass: "svgSizeClass" }, viewQueries: [{ propertyName: "_svgContainer", first: true, predicate: ["svgContainer"], descendants: true }], ngImport: i0, template: "<div #svgContainer\n     *ngIf=\"safeSvg\"\n     [innerHTML]=\"safeSvg\"></div>", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
export { SvgComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: SvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-svg', template: "<div #svgContainer\n     *ngIf=\"safeSvg\"\n     [innerHTML]=\"safeSvg\"></div>" }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i0.Renderer2 }, { type: i2.DomSanitizer }]; }, propDecorators: { svgPath: [{
                type: Input
            }], twClassList: [{
                type: Input
            }], attributes: [{
                type: Input
            }], svgSizeClass: [{
                type: Input
            }], _svgContainer: [{
                type: ViewChild,
                args: ['svgContainer', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9zdmcvc3ZnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9zdmcvc3ZnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBR25FLE1BSWEsWUFBWTtJQWtDdkIsWUFDVSxJQUFnQixFQUNoQixRQUFtQixFQUNuQixTQUF1QjtRQUZ2QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXBDakM7Ozs7V0FJRztRQUNNLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFOUI7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBRXBDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUV4Qzs7OztXQUlHO1FBQ00saUJBQVksR0FBVyxTQUFTLENBQUM7SUFXdkMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMvQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN6RCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTVDLDJCQUEyQjtZQUMzQixVQUFVLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xFLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsd0NBQXdDO1lBQ3hDLElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU0sVUFBVSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3RFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFDLFFBQWdCLEVBQUUsV0FBbUI7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxRQUFRLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxXQUFXLENBQUMsU0FBaUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxhQUFhO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQStCLENBQUM7SUFDMUUsQ0FBQzs4R0E1RVUsWUFBWTtrR0FBWixZQUFZLGtSQ2hCekIsaUZBRWlDOztTRGNwQixZQUFZOzJGQUFaLFlBQVk7a0JBSnhCLFNBQVM7K0JBQ0UsU0FBUztvSkFTVixPQUFPO3NCQUFmLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS0UsYUFBYTtzQkFEcEIsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3ZnQXR0cmlidXRlcyB9IGZyb20gJy4vX2hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtc3ZnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Zy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBQYXRoIHRvIHRoZSBzdmdcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHN2Z1BhdGg6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIGxpc3Qgb2YgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgc3ZnXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICovXG4gIEBJbnB1dCgpIHR3Q2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIGxpc3Qgb2YgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgc3ZnXG4gICAqXG4gICAqIEB0eXBlIHtTdmdBdHRyaWJ1dGVzfVxuICAgKi9cbiAgQElucHV0KCkgYXR0cmlidXRlczogU3ZnQXR0cmlidXRlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHNpemUgY2xhc3MgZm9yIFNWRy4gTXVzdCBpbmNsdWRlIHNpemUgYW5kIHdpZHRoLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgc3ZnU2l6ZUNsYXNzOiBzdHJpbmcgPSAnaWNvbi0yOCc7XG5cbiAgcHVibGljIHNhZmVTdmc/OiBTYWZlSHRtbDtcblxuICBAVmlld0NoaWxkKCdzdmdDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBfc3ZnQ29udGFpbmVyITogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zdmdQYXRoLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pLnN1YnNjcmliZSgoc3ZnKSA9PiB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2ZywgJ2ltYWdlL3N2Zyt4bWwnKTtcbiAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgICAgIC8vIEFkZCBjbGFzcyBhbmQgYXR0cmlidXRlc1xuICAgICAgc3ZnRWxlbWVudD8uY2xhc3NMaXN0LmFkZCguLi50aGlzLnR3Q2xhc3NMaXN0LCB0aGlzLnN2Z1NpemVDbGFzcyk7XG4gICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3ZnRWxlbWVudD8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJpYWxpemUgYmFjayB0byBzdHJpbmcgYW5kIHNhbml0aXplXG4gICAgICBpZiAoc3ZnRWxlbWVudCkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN2ZyA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplVG9TdHJpbmcoc3ZnRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2FmZVN2ZyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHNlcmlhbGl6ZWRTdmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN3YXBDbGFzcyhhZGRDbGFzczogc3RyaW5nLCByZW1vdmVDbGFzczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hZGRDbGFzcyhhZGRDbGFzcyk7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhyZW1vdmVDbGFzcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZ2V0U3ZnRWxlbWVudCgpLCBjbGFzc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdldFN2Z0VsZW1lbnQoKSwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3ZnRWxlbWVudCgpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fc3ZnQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgU1ZHRWxlbWVudDtcbiAgfVxufVxuIiwiPGRpdiAjc3ZnQ29udGFpbmVyXG4gICAgICpuZ0lmPVwic2FmZVN2Z1wiXG4gICAgIFtpbm5lckhUTUxdPVwic2FmZVN2Z1wiPjwvZGl2PiJdfQ==