import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { SpinnerService } from '../spinner';
import { ToastService } from '../toast';
import { ExceptionService } from './exception.service';
import { HttpOptions, DefaultHttpOptions } from './http.model';

@Injectable()
export class HttpService {
    constructor(
        private httpClient: HttpClient,
        private exceptionService: ExceptionService,
        private spinnerService: SpinnerService,
        private toastService: ToastService
    ) { }

    get<T>(url: string, body = {}, httpOptions = DefaultHttpOptions): Observable<T> {
        this.beforeRequest(httpOptions);
        const observable = this.httpClient.get<T>(url, body);
        return this.afterRequest<T>(observable, httpOptions);
    }

    post<T>(url: string, body = {}, httpOptions = DefaultHttpOptions): Observable<T> {
        this.beforeRequest(httpOptions);
        const observable = this.httpClient.post<T>(url, body)

        return this.afterRequest<T>(observable, httpOptions);
    }

    download(url: string, body: any | {}, httpOptions = DefaultHttpOptions): Observable<Blob> {
        this.beforeRequest(httpOptions);
        const observable = this.httpClient
            .post(url, body, { responseType: 'blob' });

        return this.afterRequest<Blob>(observable, httpOptions);
    }

    private beforeRequest(httpOptions: HttpOptions) {
        if (httpOptions && !httpOptions.noToast) {
            this.toastService.deactivate();
        }
        if (httpOptions && !httpOptions.noSpinner) {
            this.spinnerService.show();
        }
    }

    private afterRequest<T>(observable: Observable<T>, httpOptions: HttpOptions): Observable<T> {

        return observable
            .pipe(
                tap(
                    () => {
                        if (httpOptions && !httpOptions.noSpinner) {
                            this.spinnerService.hide();
                        }
                    },
                    error => this.exceptionService.handleError('', error)
                ));
    }

    private
}
