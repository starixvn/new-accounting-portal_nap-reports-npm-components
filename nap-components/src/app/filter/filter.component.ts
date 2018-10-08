import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { SelectItem } from '../../lib/dropdown-select';
import { NapDateStruct, NapDate } from '../../lib/date';
import { ToastService, MessageType } from '../../lib/toast';
import { ConfirmationService } from '../../lib/confirmation';
import { FilterService } from './filter.service';
import { Product, ReachedLimitLevel, FilterModel } from './filter.model';

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
    sites: TreeviewItem[] = [];
    siteId: number;
    products: Product[];
    productId: number;
    minDate: NapDateStruct = this.generateMinDate();
    maxDate: NapDateStruct = this.generateMaxDate();
    date: NapDateStruct = NapDate.fromToday();
    fromDate: NapDateStruct = NapDate.fromToday();
    toDate: NapDateStruct = NapDate.fromToday();
    isExcludeTestData = true;
    reachedLimitLevels: SelectItem[];
    reachedLimitLevel: ReachedLimitLevel;
    devices: TreeviewItem[] = [];
    selectedDevices: string[];
    userName = 'Leo';
    value = 12;
    treeviewConfig = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasCollapseExpand: true,
        hasFilter: true
    });

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
        this.filterService.queryReachedLimitLevels().subscribe(reachedLimitLevels => {
            this.reachedLimitLevels = reachedLimitLevels;
            this.reachedLimitLevel = reachedLimitLevels[0].value;
        });
        this.filterService.queryDevices().subscribe(devices => {
            this.devices = devices;
        });
    }

    loadSite() {
        this.filterService.querySites().subscribe(sites => {
            this.sites = sites;
            this.siteId = undefined;
        });
    }

    showConfirmation() {
        this.confirmationService.openContent(
            'This is confirmation message',
            () => this.toastService.activate('OK confirmation', MessageType.Success),
            () => this.toastService.activate('Cancel confirmation', MessageType.Danger));
    }

    search() {
        this.generate.emit(this.model);
    }

    get model(): FilterModel {
        return {
            fromDate: this.fromDate,
            toDate: this.toDate,
            productId: this.productId,
            reachedLimitLevel: this.reachedLimitLevel,
            userName: this.userName,
            siteId: this.siteId,
            devices: this.selectedDevices,
            isExcludeTestData: this.isExcludeTestData
        };
    }

    private generateMinDate(): NapDate {
        const today = NapDate.fromToday();
        return new NapDate(today.year - 1, 1, 1);
    }

    private generateMaxDate(): NapDate {
        const today = NapDate.fromToday();
        return new NapDate(today.year + 1, 12, 31);
    }
}
