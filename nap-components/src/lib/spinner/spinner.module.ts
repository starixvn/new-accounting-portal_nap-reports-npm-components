import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ]
})
export class SpinnerModule {
    static forRoot(): ModuleWithProviders<SpinnerModule> {
        return {
            ngModule: SpinnerModule,
            providers: [
                SpinnerService
            ]
        };
    }
}
