import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ProductSetting } from './grid.model';
const data = require('./data.json');

@Injectable()
export class GridService {
    search(): Observable<ProductSetting[]> {
        return of(data);
    }
}
