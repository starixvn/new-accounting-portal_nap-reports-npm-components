import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { SelectItem } from '../../lib/dropdown-select';
import { NgbDateStruct, NgbDate } from '../../lib/date';
import { ToastService, MessageType } from '../../lib/toast';
import { ConfirmationService } from '../../lib/confirmation';
import { FilterService } from './filter.service';
import { Product, Currency, ReachedLimitLevel, FilterModel } from './filter.model';

@Component({
    selector: 'nap-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    providers: [
        FilterService
    ]
})
export class FilterComponent implements OnInit {
    @Output() generate = new EventEmitter<FilterModel>();
    sites: TreeviewItem[];
    site: number;
    products: Product[];
    productId: number;
    currencies: Currency[];
    currencyId: number;
    fromDate: NgbDateStruct = NgbDate.fromToday();
    toDate: NgbDateStruct = NgbDate.fromToday();
    isExcludeTestData = true;
    reachedLimitLevels: SelectItem[];
    reachedLimitLevel: ReachedLimitLevel;
    userName = 'Leo';
    value = 12;
    private siteId = 0;

    constructor(
        private toastService: ToastService,
        private filterService: FilterService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.loadSite();
        this.filterService.queryProducts().subscribe(products => {
            this.products = products;
            this.productId = products[0].id;
        });
        this.filterService.queryCurrencies().subscribe(currencies => {
            this.currencies = currencies;
            this.currencyId = currencies[0].id;
        });
        this.filterService.queryReachedLimitLevels().subscribe(reachedLimitLevels => {
            this.reachedLimitLevels = reachedLimitLevels;
            this.reachedLimitLevel = reachedLimitLevels[0].value;
        });
    }

    loadSite() {
        this.filterService.querySites().subscribe(sites => {
            this.sites = sites;
            this.site = undefined;
        });
    }

    showConfirmation() {
        this.confirmationService.openContent(
            'This is confirmation message',
            () => this.toastService.activate('OK confirmation', MessageType.Success),
            () => this.toastService.activate('Cancel confirmation', MessageType.Danger))
    }

    search() {
        const filterModel: FilterModel = {
            fromDate: this.fromDate,
            toDate: this.toDate,
            productId: this.productId,
            reachedLimitLevel: this.reachedLimitLevel,
            userName: this.userName,
            siteId: this.siteId,
            currencyId: this.currencyId,
            isExcludeTestData: this.isExcludeTestData
        };
        this.generate.emit(filterModel);
    }
}
