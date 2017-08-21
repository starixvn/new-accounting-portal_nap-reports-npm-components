import { Renderer, ElementRef } from '@angular/core';
import * as _ from 'lodash';

export function renderClass(renderer: Renderer, value: number, elementRef: ElementRef) {
    if (!isValidNumber(value)) {
        return;
    }

    renderer.setElementClass(elementRef.nativeElement, 'number-positive', false);
    renderer.setElementClass(elementRef.nativeElement, 'number-negative', false);

    let className = '';
    if (value < 0) {
        className = 'number-negative';
    } else if (value > 0) {
        className = 'number-positive';
    }

    if (className !== '') {
        renderer.setElementClass(elementRef.nativeElement, className, true);
    }
}

export function isValidNumber(value: number): boolean {
    return !_.isNaN(value) && _.isFinite(value) && _.isNumber(value);
}
