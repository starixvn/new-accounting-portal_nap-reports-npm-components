import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';
import { NumberFormatHelper } from './number-format-helper';
import { NumberFormatType } from './number-format.model';
import { renderClass } from './helper';

@Directive({
  selector: '[napDecimalFormat]'
})
export class DecimalFormatDirective implements OnChanges {
  @Input('napDecimalFormat') value: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnChanges() {
    renderClass(this.renderer, this.value, this.elementRef);
    const innerHTML = NumberFormatHelper.format(this.value, NumberFormatType.Decimal);
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
  }
}
