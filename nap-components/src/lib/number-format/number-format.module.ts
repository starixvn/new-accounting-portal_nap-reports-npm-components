import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalFormatDirective } from './decimal-format.directive';
import { IntegerFormatDirective } from './integer-format.directive';
import { PercentFormatDirective } from './percent-format.directive';
import { NumberFormatDirective } from './number-format.directive';
import { NumberStyleDirective } from './number-style.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DecimalFormatDirective,
        IntegerFormatDirective,
        PercentFormatDirective,
        NumberFormatDirective,
        NumberStyleDirective
    ],
    exports: [
        DecimalFormatDirective,
        IntegerFormatDirective,
        PercentFormatDirective,
        NumberFormatDirective,
        NumberStyleDirective
    ]
})
export class NumberFormatModule { }
