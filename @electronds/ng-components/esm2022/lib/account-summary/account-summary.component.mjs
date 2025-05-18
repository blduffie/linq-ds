import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { BaseInputs } from '../common/base-inputs';
import * as i0 from "@angular/core";
import * as i1 from "../buttons/button/button.component";
import * as i2 from "../featured-money/featured-money.component";
class AccountSummaryComponent extends BaseInputs {
    constructor() {
        super(...arguments);
        this.date = '';
        this.amount = '';
        this.PayNowClick = new EventEmitter();
        this.ViewBillClick = new EventEmitter();
        this._accountColor = 'bg-red';
    }
    set accountStanding(standing) {
        this._accountColor = standing === 'good' ? 'bg-blue' : 'bg-red';
    }
    getAccountColor() {
        return this._accountColor;
    }
    handlePayNowClick(event) {
        this.PayNowClick.emit(event);
    }
    handleViewBillClick(event) {
        this.ViewBillClick.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccountSummaryComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: AccountSummaryComponent, selector: "eds-account-summary", inputs: { date: "date", amount: "amount", accountStanding: "accountStanding" }, outputs: { PayNowClick: "PayNowClick", ViewBillClick: "ViewBillClick" }, usesInheritance: true, ngImport: i0, template: "<div class=\"max-w-xl px-16 py-48 {{getAccountColor()}} text-center text-white {{extraTwClasses}}\">\n  <h3>\n    <eds-featured-money\n      amount=\"{{amount}}\"\n      textSize=\"3xl\"\n      twTextColor=\"text-white\"\n    ></eds-featured-money>\n  </h3>\n  <p class=\"mt-24 flex justify-center\">Due {{date}}</p>\n  <p>\n    <eds-button\n      type=\"primary\"\n      text=\"Pay Now\"\n      [isReversed]=\"true\"\n      extraTwClasses=\"btn-full mt-24\"\n      size=\"lg\"\n      (buttonClick)=\"handlePayNowClick($event)\"\n    ></eds-button>\n  </p>\n  <p>\n    <eds-button\n      text=\"View Bill\"\n      type=\"tertiary\"\n      [isUnderlined]=\"true\"\n      extraTwClasses=\"text-white hover:no-underline hover:bg-transparent hover:text-white mt-24 md:mt-32\"\n      (buttonClick)=\"handleViewBillClick($event)\"\n    ></eds-button>\n  </p>\n</div>\n", dependencies: [{ kind: "component", type: i1.ButtonComponent, selector: "eds-button" }, { kind: "component", type: i2.FeaturedMoneyComponent, selector: "eds-featured-money", inputs: ["twTextColor", "textSize", "amount"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { AccountSummaryComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: AccountSummaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'eds-account-summary', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"max-w-xl px-16 py-48 {{getAccountColor()}} text-center text-white {{extraTwClasses}}\">\n  <h3>\n    <eds-featured-money\n      amount=\"{{amount}}\"\n      textSize=\"3xl\"\n      twTextColor=\"text-white\"\n    ></eds-featured-money>\n  </h3>\n  <p class=\"mt-24 flex justify-center\">Due {{date}}</p>\n  <p>\n    <eds-button\n      type=\"primary\"\n      text=\"Pay Now\"\n      [isReversed]=\"true\"\n      extraTwClasses=\"btn-full mt-24\"\n      size=\"lg\"\n      (buttonClick)=\"handlePayNowClick($event)\"\n    ></eds-button>\n  </p>\n  <p>\n    <eds-button\n      text=\"View Bill\"\n      type=\"tertiary\"\n      [isUnderlined]=\"true\"\n      extraTwClasses=\"text-white hover:no-underline hover:bg-transparent hover:text-white mt-24 md:mt-32\"\n      (buttonClick)=\"handleViewBillClick($event)\"\n    ></eds-button>\n  </p>\n</div>\n" }]
        }], propDecorators: { date: [{
                type: Input
            }], amount: [{
                type: Input
            }], accountStanding: [{
                type: Input
            }], PayNowClick: [{
                type: Output
            }], ViewBillClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9hY2NvdW50LXN1bW1hcnkvYWNjb3VudC1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9hY2NvdW50LXN1bW1hcnkvYWNjb3VudC1zdW1tYXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRW5ELE1BS2EsdUJBQXdCLFNBQVEsVUFBVTtJQUx2RDs7UUFNVyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFLbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUU1QyxrQkFBYSxHQUFXLFFBQVEsQ0FBQztLQWMxQztJQXJCQyxJQUFhLGVBQWUsQ0FBQyxRQUFnQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2xFLENBQUM7SUFPTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBWTtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sbUJBQW1CLENBQUMsS0FBWTtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQXRCVSx1QkFBdUI7a0dBQXZCLHVCQUF1QiwyT0NUcEMsZzJCQTZCQTs7U0RwQmEsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ08sZUFBZTtzQkFBM0IsS0FBSztnQkFJSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY291bnRTdW1tYXJ5U3RhbmRpbmcgfSBmcm9tICcuL19oZWxwZXJzJztcbmltcG9ydCB7IEJhc2VJbnB1dHMgfSBmcm9tICcuLi9jb21tb24vYmFzZS1pbnB1dHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZHMtYWNjb3VudC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY291bnQtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRTdW1tYXJ5Q29tcG9uZW50IGV4dGVuZHMgQmFzZUlucHV0c3tcbiAgQElucHV0KCkgZGF0ZTogc3RyaW5nID0gJyc7IFxuICBASW5wdXQoKSBhbW91bnQ6IHN0cmluZyA9ICcnOyBcbiAgQElucHV0KCkgc2V0IGFjY291bnRTdGFuZGluZyhzdGFuZGluZzogQWNjb3VudFN1bW1hcnlTdGFuZGluZykge1xuICAgIHRoaXMuX2FjY291bnRDb2xvciA9IHN0YW5kaW5nID09PSAnZ29vZCcgPyAnYmctYmx1ZScgOiAnYmctcmVkJztcbiAgfSBcbiAgXG4gIEBPdXRwdXQoKSBQYXlOb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBWaWV3QmlsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgXG4gIHByaXZhdGUgX2FjY291bnRDb2xvcjogc3RyaW5nID0gJ2JnLXJlZCc7XG5cbiAgcHVibGljIGdldEFjY291bnRDb2xvcigpOiBzdHJpbmd7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRDb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVQYXlOb3dDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLlBheU5vd0NsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG4gIFxuICBwdWJsaWMgaGFuZGxlVmlld0JpbGxDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLlZpZXdCaWxsQ2xpY2suZW1pdChldmVudCk7XG4gIH1cbiAgXG59XG4iLCI8ZGl2IGNsYXNzPVwibWF4LXcteGwgcHgtMTYgcHktNDgge3tnZXRBY2NvdW50Q29sb3IoKX19IHRleHQtY2VudGVyIHRleHQtd2hpdGUge3tleHRyYVR3Q2xhc3Nlc319XCI+XG4gIDxoMz5cbiAgICA8ZWRzLWZlYXR1cmVkLW1vbmV5XG4gICAgICBhbW91bnQ9XCJ7e2Ftb3VudH19XCJcbiAgICAgIHRleHRTaXplPVwiM3hsXCJcbiAgICAgIHR3VGV4dENvbG9yPVwidGV4dC13aGl0ZVwiXG4gICAgPjwvZWRzLWZlYXR1cmVkLW1vbmV5PlxuICA8L2gzPlxuICA8cCBjbGFzcz1cIm10LTI0IGZsZXgganVzdGlmeS1jZW50ZXJcIj5EdWUge3tkYXRlfX08L3A+XG4gIDxwPlxuICAgIDxlZHMtYnV0dG9uXG4gICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICB0ZXh0PVwiUGF5IE5vd1wiXG4gICAgICBbaXNSZXZlcnNlZF09XCJ0cnVlXCJcbiAgICAgIGV4dHJhVHdDbGFzc2VzPVwiYnRuLWZ1bGwgbXQtMjRcIlxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIChidXR0b25DbGljayk9XCJoYW5kbGVQYXlOb3dDbGljaygkZXZlbnQpXCJcbiAgICA+PC9lZHMtYnV0dG9uPlxuICA8L3A+XG4gIDxwPlxuICAgIDxlZHMtYnV0dG9uXG4gICAgICB0ZXh0PVwiVmlldyBCaWxsXCJcbiAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICBbaXNVbmRlcmxpbmVkXT1cInRydWVcIlxuICAgICAgZXh0cmFUd0NsYXNzZXM9XCJ0ZXh0LXdoaXRlIGhvdmVyOm5vLXVuZGVybGluZSBob3ZlcjpiZy10cmFuc3BhcmVudCBob3Zlcjp0ZXh0LXdoaXRlIG10LTI0IG1kOm10LTMyXCJcbiAgICAgIChidXR0b25DbGljayk9XCJoYW5kbGVWaWV3QmlsbENsaWNrKCRldmVudClcIlxuICAgID48L2Vkcy1idXR0b24+XG4gIDwvcD5cbjwvZGl2PlxuIl19