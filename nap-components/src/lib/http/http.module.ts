import { NgModule, ModuleWithProviders } from '@angular/core';
import { Http, HttpModule as AngularHttpModule } from '@angular/http';
import { ToastModule } from '../toast';
import { SpinnerModule } from '../spinner';
import { ExceptionService } from './exception.service';
import { HttpService } from './http.service';
import { CustomHttp } from './custom-http';

@NgModule({
    imports: [
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
                HttpService,
                { provide: Http, useClass: CustomHttp }
            ]
        };
    }
}
