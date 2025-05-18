import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { BaseInputs } from '../common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../buttons/button/button.component";
class ButtonGroupComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        this.isPrimaryFirst = false;
        this.primaryText = '';
        this.primaryExtraTwClasses = '';
        this.isPrimaryDisabled = false;
        this.secondaryText = '';
        this.secondaryExtraTwClasses = '';
        this.isSecondaryDisabled = false;
        this.tertiaryText = '';
        this.tertiaryExtraTwClasses = '';
        this.helperText = '';
        this.helperExtraTwClasses = '';
        this.size = '2xs';
        this.primaryClick = new EventEmitter();
        this.secondaryClick = new EventEmitter();
        this.tertiaryClick = new EventEmitter();
    }
    handlePrimaryClick(event) {
        this.primaryClick.emit(event);
    }
    handleSecondaryClick(event) {
        this.secondaryClick.emit(event);
    }
    handleTertiaryClick(event) {
        this.tertiaryClick.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonGroupComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ButtonGroupComponent, selector: "eds-button-group", inputs: { isPrimaryFirst: "isPrimaryFirst", primaryText: "primaryText", primaryExtraTwClasses: "primaryExtraTwClasses", isPrimaryDisabled: "isPrimaryDisabled", secondaryText: "secondaryText", secondaryExtraTwClasses: "secondaryExtraTwClasses", isSecondaryDisabled: "isSecondaryDisabled", tertiaryText: "tertiaryText", tertiaryExtraTwClasses: "tertiaryExtraTwClasses", helperText: "helperText", helperExtraTwClasses: "helperExtraTwClasses", size: "size" }, outputs: { primaryClick: "primaryClick", secondaryClick: "secondaryClick", tertiaryClick: "tertiaryClick" }, usesInheritance: true, ngImport: i0, template: "<div class=\"flex flex-col items-center w-full max-w-xs mx-auto {{extraTwClasses}}\"\n\t [ngClass]=\"{'': isDisabled}\"\n\t role=\"group\"\n\t aria-labelledby=\"button-group\">\n\n\t<div class=\"flex justify-center gap-12 w-full {{isPrimaryFirst ? 'flex-row' : 'flex-row-reverse'}}\">\n\t\t<div *ngIf=\"primaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button type=\"primary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t(buttonClick)=\"handlePrimaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isPrimaryDisabled\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{primaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{primaryText}}\"></eds-button>\n\t\t</div>\n\t\t<div *ngIf=\"secondaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button (buttonClick)=\"handleSecondaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isSecondaryDisabled\"\n\t\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{secondaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{secondaryText}}\"></eds-button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"helperText\"\n\t\t class=\"text-center  mt-16 {{helperExtraTwClasses}}\">\n\t\t{{helperText}}\n\t</div>\n\t<div *ngIf=\"tertiaryText\"\n\t\t class=\"flex justify-center {{helperText ? 'mt-2' : 'mt-6'}}\">\n\t\t<eds-button type=\"flat\"\n\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t(buttonClick)=\"handleTertiaryClick($event)\"\n\t\t\t\t\textraTwClasses=\"btn-underline btn-md {{tertiaryExtraTwClasses}}\"\n\t\t\t\t\ttext=\"{{tertiaryText}}\"></eds-button>\n\t</div>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.ButtonComponent, selector: "eds-button" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { ButtonGroupComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-button-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-col items-center w-full max-w-xs mx-auto {{extraTwClasses}}\"\n\t [ngClass]=\"{'': isDisabled}\"\n\t role=\"group\"\n\t aria-labelledby=\"button-group\">\n\n\t<div class=\"flex justify-center gap-12 w-full {{isPrimaryFirst ? 'flex-row' : 'flex-row-reverse'}}\">\n\t\t<div *ngIf=\"primaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button type=\"primary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\t(buttonClick)=\"handlePrimaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isPrimaryDisabled\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{primaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{primaryText}}\"></eds-button>\n\t\t</div>\n\t\t<div *ngIf=\"secondaryText\"\n\t\t\t class=\"w-full max-w-1/2\">\n\t\t\t<eds-button (buttonClick)=\"handleSecondaryClick($event)\"\n\t\t\t\t\t\t[isDisabled]=\"isSecondaryDisabled\"\n\t\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t\textraTwClasses=\"btn-md btn-full {{secondaryExtraTwClasses}}\"\n\t\t\t\t\t\ttext=\"{{secondaryText}}\"></eds-button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"helperText\"\n\t\t class=\"text-center  mt-16 {{helperExtraTwClasses}}\">\n\t\t{{helperText}}\n\t</div>\n\t<div *ngIf=\"tertiaryText\"\n\t\t class=\"flex justify-center {{helperText ? 'mt-2' : 'mt-6'}}\">\n\t\t<eds-button type=\"flat\"\n\t\t\t\t\t[size]=\"size\"\n\t\t\t\t\t(buttonClick)=\"handleTertiaryClick($event)\"\n\t\t\t\t\textraTwClasses=\"btn-underline btn-md {{tertiaryExtraTwClasses}}\"\n\t\t\t\t\ttext=\"{{tertiaryText}}\"></eds-button>\n\t</div>\n</div>" }]
        }], propDecorators: { isPrimaryFirst: [{
                type: Input
            }], primaryText: [{
                type: Input
            }], primaryExtraTwClasses: [{
                type: Input
            }], isPrimaryDisabled: [{
                type: Input
            }], secondaryText: [{
                type: Input
            }], secondaryExtraTwClasses: [{
                type: Input
            }], isSecondaryDisabled: [{
                type: Input
            }], tertiaryText: [{
                type: Input
            }], tertiaryExtraTwClasses: [{
                type: Input
            }], helperText: [{
                type: Input
            }], helperExtraTwClasses: [{
                type: Input
            }], size: [{
                type: Input
            }], primaryClick: [{
                type: Output
            }], secondaryClick: [{
                type: Output
            }], tertiaryClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxXQUFXLENBQUM7Ozs7QUFFN0MsTUFLYSxvQkFBcUIsU0FBUSxVQUFVO0lBTHBEOztRQU1XLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFTLEtBQUssQ0FBQztRQUVsQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQzNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztLQWFyRDtJQVhRLGtCQUFrQixDQUFDLEtBQVk7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLG9CQUFvQixDQUFDLEtBQVk7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEtBQVk7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs4R0E1QlUsb0JBQW9CO2tHQUFwQixvQkFBb0Isb29CQ2RqQyx5Z0RBcUNNOztTRHZCTyxvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyx1QkFBdUI7c0JBQS9CLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFSSxZQUFZO3NCQUFyQixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlSW5wdXRzLCBTaXplIH0gZnJvbSAnLi4vY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRzLWJ1dHRvbi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlSW5wdXRzIHtcbiAgQElucHV0KCkgaXNQcmltYXJ5Rmlyc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJpbWFyeVRleHQgPSAnJztcbiAgQElucHV0KCkgcHJpbWFyeUV4dHJhVHdDbGFzc2VzID0gJyc7XG4gIEBJbnB1dCgpIGlzUHJpbWFyeURpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlY29uZGFyeVRleHQgPSAnJztcbiAgQElucHV0KCkgc2Vjb25kYXJ5RXh0cmFUd0NsYXNzZXMgPSAnJztcbiAgQElucHV0KCkgaXNTZWNvbmRhcnlEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZXJ0aWFyeVRleHQgPSAnJztcbiAgQElucHV0KCkgdGVydGlhcnlFeHRyYVR3Q2xhc3NlcyA9ICcnO1xuICBASW5wdXQoKSBoZWxwZXJUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGhlbHBlckV4dHJhVHdDbGFzc2VzID0gJyc7XG4gIEBJbnB1dCgpIHNpemU6IFNpemUgPSAnMnhzJztcblxuICBAT3V0cHV0KCkgcHJpbWFyeUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHNlY29uZGFyeUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHRlcnRpYXJ5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIHB1YmxpYyBoYW5kbGVQcmltYXJ5Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5wcmltYXJ5Q2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2Vjb25kYXJ5Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRhcnlDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUZXJ0aWFyeUNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMudGVydGlhcnlDbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy14cyBteC1hdXRvIHt7ZXh0cmFUd0NsYXNzZXN9fVwiXG5cdCBbbmdDbGFzc109XCJ7Jyc6IGlzRGlzYWJsZWR9XCJcblx0IHJvbGU9XCJncm91cFwiXG5cdCBhcmlhLWxhYmVsbGVkYnk9XCJidXR0b24tZ3JvdXBcIj5cblxuXHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMTIgdy1mdWxsIHt7aXNQcmltYXJ5Rmlyc3QgPyAnZmxleC1yb3cnIDogJ2ZsZXgtcm93LXJldmVyc2UnfX1cIj5cblx0XHQ8ZGl2ICpuZ0lmPVwicHJpbWFyeVRleHRcIlxuXHRcdFx0IGNsYXNzPVwidy1mdWxsIG1heC13LTEvMlwiPlxuXHRcdFx0PGVkcy1idXR0b24gdHlwZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0W3NpemVdPVwic2l6ZVwiXG5cdFx0XHRcdFx0XHQoYnV0dG9uQ2xpY2spPVwiaGFuZGxlUHJpbWFyeUNsaWNrKCRldmVudClcIlxuXHRcdFx0XHRcdFx0W2lzRGlzYWJsZWRdPVwiaXNQcmltYXJ5RGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0ZXh0cmFUd0NsYXNzZXM9XCJidG4tbWQgYnRuLWZ1bGwge3twcmltYXJ5RXh0cmFUd0NsYXNzZXN9fVwiXG5cdFx0XHRcdFx0XHR0ZXh0PVwie3twcmltYXJ5VGV4dH19XCI+PC9lZHMtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgKm5nSWY9XCJzZWNvbmRhcnlUZXh0XCJcblx0XHRcdCBjbGFzcz1cInctZnVsbCBtYXgtdy0xLzJcIj5cblx0XHRcdDxlZHMtYnV0dG9uIChidXR0b25DbGljayk9XCJoYW5kbGVTZWNvbmRhcnlDbGljaygkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFtpc0Rpc2FibGVkXT1cImlzU2Vjb25kYXJ5RGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRbc2l6ZV09XCJzaXplXCJcblx0XHRcdFx0XHRcdGV4dHJhVHdDbGFzc2VzPVwiYnRuLW1kIGJ0bi1mdWxsIHt7c2Vjb25kYXJ5RXh0cmFUd0NsYXNzZXN9fVwiXG5cdFx0XHRcdFx0XHR0ZXh0PVwie3tzZWNvbmRhcnlUZXh0fX1cIj48L2Vkcy1idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dFwiXG5cdFx0IGNsYXNzPVwidGV4dC1jZW50ZXIgIG10LTE2IHt7aGVscGVyRXh0cmFUd0NsYXNzZXN9fVwiPlxuXHRcdHt7aGVscGVyVGV4dH19XG5cdDwvZGl2PlxuXHQ8ZGl2ICpuZ0lmPVwidGVydGlhcnlUZXh0XCJcblx0XHQgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHt7aGVscGVyVGV4dCA/ICdtdC0yJyA6ICdtdC02J319XCI+XG5cdFx0PGVkcy1idXR0b24gdHlwZT1cImZsYXRcIlxuXHRcdFx0XHRcdFtzaXplXT1cInNpemVcIlxuXHRcdFx0XHRcdChidXR0b25DbGljayk9XCJoYW5kbGVUZXJ0aWFyeUNsaWNrKCRldmVudClcIlxuXHRcdFx0XHRcdGV4dHJhVHdDbGFzc2VzPVwiYnRuLXVuZGVybGluZSBidG4tbWQge3t0ZXJ0aWFyeUV4dHJhVHdDbGFzc2VzfX1cIlxuXHRcdFx0XHRcdHRleHQ9XCJ7e3RlcnRpYXJ5VGV4dH19XCI+PC9lZHMtYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvZGl2PiJdfQ==