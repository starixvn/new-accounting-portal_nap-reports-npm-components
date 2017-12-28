import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';
import { NumberFormatHelper } from './number-format-helper';
import { NumberFormatType } from './number-format.model';
import { renderClass } from './helper';

@Directive({
    selector: '[napDecimalFormat]'
})
export class DecimalFormatDirective implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('napDecimalFormat') value: number;

    constructor(
        private elementRef: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngOnChanges() {
        renderClass(this.renderer2, this.value, this.elementRef);
        const innerHTML = NumberFormatHelper.format(this.value, NumberFormatType.Decimal);
        this.renderer2.setProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
    }
}
