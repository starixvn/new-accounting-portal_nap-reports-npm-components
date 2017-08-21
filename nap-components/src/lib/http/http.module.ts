import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule as AngularHttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ToastModule } from '../toast';
import { SpinnerModule } from '../spinner';
import { ExceptionService } from './exception.service';
import { HttpService } from './http.service';

@NgModule({
    imports: [
        CommonModule,
        AngularHttpModule,
        ToastModule.forRoot(),
        SpinnerModule.forRoot()
    ]
})
export class HttpModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: [
                ExceptionService,
                HttpService
            ]
        };
    }
}
