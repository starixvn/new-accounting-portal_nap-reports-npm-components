import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ToastService } from '../toast';

@Injectable()
export class ExceptionService {
    constructor(
        private toastService: ToastService
    ) { }

    catchBadResponse(response: Response, noToast = false): Observable<any> {
        this.handleError(response, noToast);
        return Observable.of();
    }

    private handleError(response: Response, noToast: boolean) {
        const defaultMessage = 'Sorry, an error occurred while processing your request, please notify the administrators.';
        let errorMessage = '';
        const contentType = response.headers.get('content-type');
        if (contentType === 'text/html; charset=utf-8') {
            errorMessage = defaultMessage;
        } else {
            errorMessage = response.statusText;
            if (!errorMessage) {
                const error = response.json();
                errorMessage = error.errorMessage || defaultMessage;
            }
        }

        if (!noToast) {
            this.toastService.activate(errorMessage);
        }
    }
}
