import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumericTextboxModule } from '../../lib/numeric-textbox';
import { NumberFormatModule as NumberFormatModuleLib } from '../../lib/number-format';
import { NumberFormatComponent } from './number-format.component';

@NgModule({
    imports: [
        FormsModule,
        NumericTextboxModule,
        NumberFormatModuleLib
    ],
    exports: [
        NumberFormatComponent
    ],
    declarations: [
        NumberFormatComponent
    ]
})
export class NumberFormatModule {
    value: number;
}
