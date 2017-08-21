import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { NumberFormatHelper } from './number-format-helper';
import { NumberFormatType } from './number-format.model';
import { renderClass, isValidNumber } from './helper';

@Directive({
  selector: '[napPercentFormat]'
})
export class PercentFormatDirective implements OnChanges {
  @Input('napPercentFormat') value: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnChanges() {
    renderClass(this.renderer, this.value, this.elementRef);
    let innerHTML = '';
    if (isValidNumber(this.value)) {
      innerHTML = NumberFormatHelper.format(this.value, NumberFormatType.Percent);
    } else {
      innerHTML = 'N/A';
    }
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', innerHTML);
  }
}
