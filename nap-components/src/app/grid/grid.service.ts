import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProductSetting } from './grid.model';
const data = require('./data.json');

@Injectable()
export class GridService {
    search(): Observable<ProductSetting[]> {
        return Observable.of(data);
    }
}
