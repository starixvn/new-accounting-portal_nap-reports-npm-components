import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomHttp extends Http {

    constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                console.log('The authentication session expires or the user is not authorised');
                this.refresh();
            } else if (error.status === 503) {
                console.log('Server is under maintenance');
                this.refresh();
            }

            return Observable.throw(error);
        });
    }

    private refresh() {
        if ((window.location.href.match(/\?/g) || []).length < 2) {
            window.location.href = window.location.href + '?' + new Date().getMilliseconds();
        }
    }
}
