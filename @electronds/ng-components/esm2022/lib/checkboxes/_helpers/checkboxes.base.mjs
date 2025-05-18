import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
class CheckboxesBase extends BaseInputs {
    constructor() {
        super(...arguments);
        this.labelPlacement = 'left';
        this.isChecked = true;
        this.text = '';
        this.isCheckedChanged = new EventEmitter();
    }
    handleCheckedChanged($event) {
        this.isCheckedChanged.emit($event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxesBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: CheckboxesBase, inputs: { labelPlacement: "labelPlacement", isChecked: "isChecked", text: "text" }, outputs: { isCheckedChanged: "isCheckedChanged" }, usesInheritance: true, ngImport: i0 }); }
}
export { CheckboxesBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CheckboxesBase, decorators: [{
            type: Directive
        }], propDecorators: { labelPlacement: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], text: [{
                type: Input
            }], isCheckedChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hlcy5iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2NoZWNrYm94ZXMvX2hlbHBlcnMvY2hlY2tib3hlcy5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7QUFFckQsTUFDYSxjQUFlLFNBQVEsVUFBVTtJQUQ5Qzs7UUFFVyxtQkFBYyxHQUFjLE1BQU0sQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0tBS3hEO0lBSFEsb0JBQW9CLENBQUMsTUFBYTtRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OEdBVFUsY0FBYztrR0FBZCxjQUFjOztTQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsU0FBUzs4QkFFQyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VJbnB1dHMsIFBsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIENoZWNrYm94ZXNCYXNlIGV4dGVuZHMgQmFzZUlucHV0cyB7XG4gIEBJbnB1dCgpIGxhYmVsUGxhY2VtZW50OiBQbGFjZW1lbnQgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGlzQ2hlY2tlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcblxuICBAT3V0cHV0KCkgaXNDaGVja2VkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgcHVibGljIGhhbmRsZUNoZWNrZWRDaGFuZ2VkKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZENoYW5nZWQuZW1pdCgkZXZlbnQpO1xuICB9XG59XG4iXX0=