import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import * as numeral from 'numeral';
import { renderClass, isValidNumber } from './helper';

@Directive({
    selector: '[napNumberFormat]'
})
export class NumberFormatDirective implements OnChanges {
    @Input('napNumberFormat') value: number;
    @Input() format: string;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnChanges() {
        renderClass(this.renderer, this.value, this.elementRef);
        let innerHTML = '';
        if (isValidNumber(this.value)) {
            if (this.format) {
                innerHTML = numeral(this.value).format(this.format);
            } else {
                innerHTML = this.value.toString();
            }
        } else {
            innerHTML = 'N/A';
        }
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
    }
}
