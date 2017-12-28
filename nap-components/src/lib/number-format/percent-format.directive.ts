import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { NumberFormatHelper } from './number-format-helper';
import { NumberFormatType } from './number-format.model';
import { renderClass, isValidNumber } from './helper';

@Directive({
    selector: '[napPercentFormat]'
})
export class PercentFormatDirective implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('napPercentFormat') value: number;

    constructor(
        private elementRef: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngOnChanges() {
        renderClass(this.renderer2, this.value, this.elementRef);
        let innerHTML = '';
        if (isValidNumber(this.value)) {
            innerHTML = NumberFormatHelper.format(this.value, NumberFormatType.Percent);
        } else {
            innerHTML = 'N/A';
        }

        this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
    }
}
