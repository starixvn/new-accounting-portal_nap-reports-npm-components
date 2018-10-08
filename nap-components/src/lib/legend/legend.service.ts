import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http';

@Injectable()
export class LegendService {
    constructor(
        private httpService: HttpService
    ) { }

    query(id: number): Observable<string> {
        const url = this.resolveUrl(id);
        return this.httpService.get<string>(url);
    }

    resolveUrl(id: number): string {
        throw new Error('Please override this');
    }
}
