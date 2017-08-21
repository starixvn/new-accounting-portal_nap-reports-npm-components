import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';
import { NumberFormatHelper } from './number-format-helper';
import { NumberFormatType } from './number-format.model';
import { renderClass } from './helper';

@Directive({
  selector: '[napIntegerFormat]'
})
export class IntegerFormatDirective implements OnChanges {
  @Input('napIntegerFormat') value: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnChanges() {
    renderClass(this.renderer, this.value, this.elementRef);
    const innerHTML = NumberFormatHelper.format(this.value, NumberFormatType.Integer);
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
  }
}
