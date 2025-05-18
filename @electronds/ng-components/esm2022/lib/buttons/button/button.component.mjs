import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonBase } from '../_helpers';
import * as i0 from "@angular/core";
/**
 * Button Component with various states
 *
 * @export
 * @class ButtonComponent
 * @typedef {ButtonComponent}
 * @extends {ButtonBase}
 */
class ButtonComponent extends ButtonBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: ButtonComponent, selector: "eds-button", usesInheritance: true, ngImport: i0, template: "<button class=\"btn {{twClassesBasedOnInputs}}\"\n        type=\"{{type === 'primary' ? 'submit' : 'button'}}\"\n        [disabled]=\"isDisabled\"\n        (click)=\"handleButtonClick($event)\">\n        {{text}}\n</button>", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { ButtonComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button class=\"btn {{twClassesBasedOnInputs}}\"\n        type=\"{{type === 'primary' ? 'submit' : 'button'}}\"\n        [disabled]=\"isDisabled\"\n        (click)=\"handleButtonClick($event)\">\n        {{text}}\n</button>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9idXR0b25zL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDOzs7Ozs7O0dBT0c7QUFDSCxNQUthLGVBQWdCLFNBQVEsVUFBVTs4R0FBbEMsZUFBZTtrR0FBZixlQUFlLHlFQ2pCNUIsaU9BS1M7O1NEWUksZUFBZTsyRkFBZixlQUFlO2tCQUwzQixTQUFTOytCQUNFLFlBQVksbUJBRUwsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQmFzZSB9IGZyb20gJy4uL19oZWxwZXJzJztcblxuLyoqXG4gKiBCdXR0b24gQ29tcG9uZW50IHdpdGggdmFyaW91cyBzdGF0ZXNcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQnV0dG9uQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7QnV0dG9uQ29tcG9uZW50fVxuICogQGV4dGVuZHMge0J1dHRvbkJhc2V9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vkcy1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJ1dHRvbkJhc2Uge31cbiIsIjxidXR0b24gY2xhc3M9XCJidG4ge3t0d0NsYXNzZXNCYXNlZE9uSW5wdXRzfX1cIlxuICAgICAgICB0eXBlPVwie3t0eXBlID09PSAncHJpbWFyeScgPyAnc3VibWl0JyA6ICdidXR0b24nfX1cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVCdXR0b25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgIHt7dGV4dH19XG48L2J1dHRvbj4iXX0=