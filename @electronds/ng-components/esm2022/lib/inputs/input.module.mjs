import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgModule } from '../svg';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormHintsModule } from '../common';
import { InputComponent } from './input';
import * as i0 from "@angular/core";
const ngxMask = [NgxMaskDirective, NgxMaskPipe];
class EdsInputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, declarations: [InputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            SvgModule,
            FormHintsModule, NgxMaskDirective, NgxMaskPipe], exports: [InputComponent, NgxMaskDirective, NgxMaskPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, providers: [provideNgxMask()], imports: [CommonModule,
            ReactiveFormsModule,
            SvgModule,
            FormHintsModule] }); }
}
export { EdsInputModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: EdsInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InputComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        SvgModule,
                        FormHintsModule,
                        ...ngxMask,
                    ],
                    exports: [InputComponent, ...ngxMask],
                    providers: [provideNgxMask()],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2lucHV0cy9pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRXpDLE1BQU0sT0FBTyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFaEQsTUFZYSxjQUFjOzhHQUFkLGNBQWM7K0dBQWQsY0FBYyxpQkFYVixjQUFjLGFBRTNCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGVBQWUsRUFSRixnQkFBZ0IsRUFBRSxXQUFXLGFBV2xDLGNBQWMsRUFYVCxnQkFBZ0IsRUFBRSxXQUFXOytHQWNqQyxjQUFjLGFBRmQsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxZQVAzQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxlQUFlOztTQU1OLGNBQWM7MkZBQWQsY0FBYztrQkFaMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLEdBQUcsT0FBTztxQkFDWDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ZnTW9kdWxlIH0gZnJvbSAnLi4vc3ZnJztcbmltcG9ydCB7IE5neE1hc2tEaXJlY3RpdmUsIE5neE1hc2tQaXBlLCBwcm92aWRlTmd4TWFzayB9IGZyb20gJ25neC1tYXNrJztcbmltcG9ydCB7IEZvcm1IaW50c01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQnO1xuXG5jb25zdCBuZ3hNYXNrID0gW05neE1hc2tEaXJlY3RpdmUsIE5neE1hc2tQaXBlXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU3ZnTW9kdWxlLFxuICAgIEZvcm1IaW50c01vZHVsZSxcbiAgICAuLi5uZ3hNYXNrLFxuICBdLFxuICBleHBvcnRzOiBbSW5wdXRDb21wb25lbnQsIC4uLm5neE1hc2tdLFxuICBwcm92aWRlcnM6IFtwcm92aWRlTmd4TWFzaygpXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRzSW5wdXRNb2R1bGUge31cbiJdfQ==