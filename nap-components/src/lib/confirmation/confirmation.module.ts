import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { ConfirmationService } from './confirmation.service';

@NgModule({
    imports: [
        CommonModule,
        NgbModalModule
    ],
    declarations: [
        ConfirmationModalComponent
    ],
    exports: [
        ConfirmationModalComponent
    ],
    entryComponents: [
        ConfirmationModalComponent
    ]
})
export class ConfirmationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ConfirmationModule,
            providers: [
                ConfirmationService
            ]
        };
    }
}
