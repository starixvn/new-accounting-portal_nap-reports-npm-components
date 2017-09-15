import { Directive, ElementRef, Input, Renderer, OnChanges } from '@angular/core';
import { renderClass } from './helper';

@Directive({
    selector: '[napNumberStyle]'
})
export class NumberStyleDirective implements OnChanges {
    @Input('napNumberStyle') value: number;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnChanges() {
        renderClass(this.renderer, this.value, this.elementRef);
    }
}
