import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { ToastService } from '../toast';

@Injectable()
export class ExceptionService {
    constructor(
        private toastService: ToastService
    ) { }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.toastService.activate(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
