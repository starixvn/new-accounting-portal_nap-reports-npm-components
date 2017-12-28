import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';
import { renderClass } from './helper';

@Directive({
    selector: '[napNumberStyle]'
})
export class NumberStyleDirective implements OnChanges {
    // tslint:disable-next-line:no-input-rename
    @Input('napNumberStyle') value: number;

    constructor(
        private elementRef: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngOnChanges() {
        renderClass(this.renderer2, this.value, this.elementRef);
    }
}
