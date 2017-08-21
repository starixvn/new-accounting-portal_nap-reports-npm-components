import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TreeviewItem } from 'ngx-treeview';
import { SelectItem } from '../../lib/dropdown-select';
import { Product, Currency, ReachedLimitLevel } from './filter.model';

@Injectable()
export class FilterService {
    querySites(): Observable<TreeviewItem[]> {
        const sites: TreeviewItem[] = [
            new TreeviewItem({
                text: 'Boping Licensees',
                value: 1,
                children: [
                    { text: '9bet', value: 11 },
                    { text: 'Aoncash', value: 12 }
                ]
            }),
            new TreeviewItem({
                text: 'Credit Sites',
                value: 2,
                children: [
                    { text: '033333', value: 21 },
                    { text: '222223', value: 22 }
                ]
            })
        ];
        return Observable.of(sites);
    }

    queryProducts(): Observable<Product[]> {
        const products: Product[] = [
            {
                id: 1,
                name: 'Keno'
            },
            {
                id: 2,
                name: 'Virtual Sports'
            }
        ];
        return Observable.of(products);
    }

    queryCurrencies(): Observable<Currency[]> {
        const currencies: Currency[] = [
            {
                id: 1,
                name: 'USD'
            },
            {
                id: 2,
                name: 'VND'
            }
        ];
        return Observable.of(currencies);
    }

    queryReachedLimitLevels(): Observable<SelectItem[]> {
        const levels: SelectItem[] = [
            {
                text: 'All',
                value: ReachedLimitLevel.All
            },
            {
                text: 'Orange',
                value: ReachedLimitLevel.Orange
            },
            {
                text: 'Yellow',
                value: ReachedLimitLevel.Yellow
            },
            {
                text: 'Red',
                value: ReachedLimitLevel.Red
            }
        ];
        return Observable.of(levels);
    }
}
