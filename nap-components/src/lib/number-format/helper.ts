import { Renderer2, ElementRef } from '@angular/core';
import * as _ from 'lodash';

export function renderClass(renderer2: Renderer2, value: number, elementRef: ElementRef) {
    if (!isValidNumber(value)) {
        return;
    }

    renderer2.removeClass(elementRef.nativeElement, 'number-zero');
    renderer2.removeClass(elementRef.nativeElement, 'number-positive');
    renderer2.removeClass(elementRef.nativeElement, 'number-negative');

    let className = '';
    if (value === 0) {
        className = 'number-zero';
    } else if (value < 0) {
        className = 'number-negative';
    } else if (value > 0) {
        className = 'number-positive';
    }

    if (className !== '') {
        renderer2.addClass(elementRef.nativeElement, className);
    }
}

export function isValidNumber(value: number): boolean {
    return !_.isNaN(value) && _.isFinite(value) && _.isNumber(value);
}
