import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import * as numeral from 'numeral';
import { renderClass, isValidNumber } from './helper';

@Directive({
    selector: '[napNumberFormat]'
})
export class NumberFormatDirective implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('napNumberFormat') value: number;
    @Input() format: string;

    constructor(
        private elementRef: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngOnChanges() {
        renderClass(this.renderer2, this.value, this.elementRef);
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

        this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
    }
}
