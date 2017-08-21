import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '../http';
import { LegendComponent } from './legend.component';
import { LegendService } from './legend.service';
import { LegendModalComponent } from './legend-modal.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModalModule.forRoot(),
        HttpModule.forRoot()
    ],
    declarations: [
        LegendComponent,
        LegendModalComponent
    ],
    entryComponents: [
        LegendModalComponent
    ],
    exports: [
        LegendComponent
    ]
})
export class LegendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LegendModule,
            providers: [
                LegendService
            ]
        };
    }
}
