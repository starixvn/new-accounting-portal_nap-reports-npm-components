import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationService as NgxPaginationService, PaginatePipe } from 'ngx-pagination';
import { PaginationComponent } from './pagination.component';
import { PaginationConfig } from './pagination.model';
import { PaginationService } from './pagination.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule
    ],
    declarations: [
        PaginationComponent
    ],
    exports: [
        NgxPaginationModule,
        PaginationComponent
    ]
})
export class PaginationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PaginationModule,
            providers: [
                PaginationConfig,
                PaginationService
            ]
        };
    }
}
