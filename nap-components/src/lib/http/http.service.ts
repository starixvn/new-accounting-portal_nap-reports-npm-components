import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, ResponseContentType, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { SpinnerService } from '../spinner';
import { ToastService } from '../toast';
import { ExceptionService } from './exception.service';
import { HttpOptions, DefaultHttpOptions } from './http.model';

@Injectable()
export class HttpService {
    constructor(
        private http: Http,
        private exceptionService: ExceptionService,
        private spinnerService: SpinnerService,
        private toastService: ToastService
    ) { }

    get<T>(url: string, options?: RequestOptionsArgs, httpOptions = DefaultHttpOptions): Observable<T> {
        this.beforeRequest(httpOptions);
        const observable = this.http.get(url, options).map(response => response.json());
        return this.afterRequest<T>(observable, httpOptions);
    }

    post<T>(url: string, body = {}, httpOptions = DefaultHttpOptions): Observable<T> {
        this.beforeRequest(httpOptions);
        const observable = this.http.post(url, body).map(response => response.json());
        return this.afterRequest<T>(observable, httpOptions);
    }

    download(url: string, body = {}, httpOptions = DefaultHttpOptions): Observable<Response> {
        this.beforeRequest(httpOptions);
        const observable = this.http.post(url, body, new RequestOptions({
            responseType: ResponseContentType.ArrayBuffer
        }));
        return this.afterRequest<Response>(observable, httpOptions);
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
        const noToast = httpOptions ? httpOptions.noToast : false;
        observable = observable.catch(response => this.exceptionService.catchBadResponse(response, noToast));
        if (httpOptions && !httpOptions.noSpinner) {
            observable = observable.finally(() => this.spinnerService.hide());
        }
        return observable;
    }
}
