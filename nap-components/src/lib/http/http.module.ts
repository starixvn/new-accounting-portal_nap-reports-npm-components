import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from '../toast';
import { SpinnerModule } from '../spinner';
import { ExceptionService } from './exception.service';
import { HttpService } from './http.service';

@NgModule({
    imports: [
        HttpClientModule,
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
