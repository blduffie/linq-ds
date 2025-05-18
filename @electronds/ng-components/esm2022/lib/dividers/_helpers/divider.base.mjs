import { Directive, Input } from '@angular/core';
import { BaseInputs } from '../../common';
import * as i0 from "@angular/core";
/**
 * Base class for divider components
 *
 * @export
 * @class DividerBase
 * @typedef {DividerBase}
 */
class DividerBase extends BaseInputs {
    constructor() {
        super(...arguments);
        /**
         * Text to be displayed within the divider
         *
         * @type {(string)}
         */
        this.text = '';
    }
    /**
     * Builds tw classes based on textAlignment
     *
     * @public
     * @param {(HorizontalPlacement | VerticalPlacement)} textAlign
     * @returns {string}
     */
    twClasses(textAlign) {
        // default - center
        let twClass = 'before:h-2 before:w-2 after:h-2 after:w-2 before:flex-grow after:flex-grow';
        if (this.text) {
            switch (textAlign) {
                case 'top':
                case 'left':
                    twClass = 'after:h-2 after:w-2 after:flex-grow';
                    break;
                case 'bottom':
                case 'right':
                    twClass = 'before:h-2 before:w-2 before:flex-grow';
                    break;
                case 'center':
                default:
            }
        }
        return twClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DividerBase, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: DividerBase, inputs: { text: "text" }, usesInheritance: true, ngImport: i0 }); }
}
export { DividerBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DividerBase, decorators: [{
            type: Directive
        }], propDecorators: { text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zcmMvbGliL2RpdmlkZXJzL19oZWxwZXJzL2RpdmlkZXIuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUEwQyxNQUFNLGNBQWMsQ0FBQzs7QUFFbEY7Ozs7OztHQU1HO0FBQ0gsTUFDYSxXQUFZLFNBQVEsVUFBVTtJQUQzQzs7UUFFRTs7OztXQUlHO1FBQ00sU0FBSSxHQUFXLEVBQUUsQ0FBQztLQTZCNUI7SUE1QkM7Ozs7OztPQU1HO0lBQ0ksU0FBUyxDQUFDLFNBQWtEO1FBQ2pFLG1CQUFtQjtRQUNuQixJQUFJLE9BQU8sR0FDVCw0RUFBNEUsQ0FBQztRQUMvRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxNQUFNO29CQUNULE9BQU8sR0FBRyxxQ0FBcUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLFFBQVEsQ0FBQztnQkFDZCxLQUFLLE9BQU87b0JBQ1YsT0FBTyxHQUFHLHdDQUF3QyxDQUFDO29CQUNuRCxNQUFNO2dCQUNSLEtBQUssUUFBUSxDQUFDO2dCQUNkLFFBQVE7YUFDVDtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs4R0FsQ1UsV0FBVztrR0FBWCxXQUFXOztTQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsU0FBUzs4QkFPQyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlSW5wdXRzLCBIb3Jpem9udGFsUGxhY2VtZW50LCBWZXJ0aWNhbFBsYWNlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgZGl2aWRlciBjb21wb25lbnRzXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIERpdmlkZXJCYXNlXG4gKiBAdHlwZWRlZiB7RGl2aWRlckJhc2V9XG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIERpdmlkZXJCYXNlIGV4dGVuZHMgQmFzZUlucHV0cyB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGRpdmlkZXJcbiAgICpcbiAgICogQHR5cGUgeyhzdHJpbmcpfVxuICAgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBCdWlsZHMgdHcgY2xhc3NlcyBiYXNlZCBvbiB0ZXh0QWxpZ25tZW50XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHsoSG9yaXpvbnRhbFBsYWNlbWVudCB8IFZlcnRpY2FsUGxhY2VtZW50KX0gdGV4dEFsaWduXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwdWJsaWMgdHdDbGFzc2VzKHRleHRBbGlnbjogSG9yaXpvbnRhbFBsYWNlbWVudCB8IFZlcnRpY2FsUGxhY2VtZW50KTogc3RyaW5nIHtcbiAgICAvLyBkZWZhdWx0IC0gY2VudGVyXG4gICAgbGV0IHR3Q2xhc3MgPVxuICAgICAgJ2JlZm9yZTpoLTIgYmVmb3JlOnctMiBhZnRlcjpoLTIgYWZ0ZXI6dy0yIGJlZm9yZTpmbGV4LWdyb3cgYWZ0ZXI6ZmxleC1ncm93JztcbiAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICBzd2l0Y2ggKHRleHRBbGlnbikge1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICB0d0NsYXNzID0gJ2FmdGVyOmgtMiBhZnRlcjp3LTIgYWZ0ZXI6ZmxleC1ncm93JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIHR3Q2xhc3MgPSAnYmVmb3JlOmgtMiBiZWZvcmU6dy0yIGJlZm9yZTpmbGV4LWdyb3cnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0d0NsYXNzO1xuICB9XG59XG4iXX0=