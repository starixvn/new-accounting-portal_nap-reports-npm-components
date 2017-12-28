import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { PaginationService as NgxPaginationService, PaginatePipe } from 'ngx-pagination';
import { PaginationInstance, PaginationService } from '../../lib/pagination';
import { ToastService, MessageType } from '../../lib/toast';
import { CountdownTimerComponent } from '../../lib/countdown-timer';
import { SpinnerService } from '../../lib/spinner';
import { GridService } from './grid.service';
import { ProductSetting } from './grid.model';

@Component({
    selector: 'nap-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    providers: [
        GridService
    ]
})
export class GridComponent implements OnInit {
    @ViewChild(CountdownTimerComponent) countdownTimerComponent: CountdownTimerComponent;
    breadcrumbItems = ['Win Limit Control', 'Win Limit Monitor'];
    paginationInstance: PaginationInstance;
    orangeWinLimit: number;
    yellowWinLimit: number;
    redWinLimit: number;
    isBlockedPlacebetRedLevel = false;
    isBlockedTransferRedLevel = false;
    productSettings: ProductSetting[];
    displayedProductSettings: ProductSetting[];
    private paginatePipe: PaginatePipe;

    constructor(
        private ngxPaginationService: NgxPaginationService,
        private paginationService: PaginationService,
        private toastService: ToastService,
        private spinnerService: SpinnerService,
        private gridService: GridService
    ) { }

    ngOnInit() {
        this.paginatePipe = new PaginatePipe(this.ngxPaginationService);
        this.search();
    }

    exportExcel() {
        this.toastService.activate('exportExcel', MessageType.Info);
    }

    countdownCallback() {
        this.toastService.activate('countdownCallback', MessageType.Info);
    }

    addPlayer() {
        this.toastService.activate('addPlayer', MessageType.Info);
    }

    onBreadcrumbItemClick(index: number) {
        this.toastService.activate(`Breadcrumb index ${index} clicked!`, MessageType.Info);
    }

    applyOrangeWinLimit() { }

    applyYellowWinLimit() { }

    applyRedWinLimit() { }

    applyRedBlockPlacebet() { }

    applyRedBlockTransfer() { }

    onPageChange() { }

    save() { }

    cancel() { }

    showGroupSetting() { }

    onIsBlockedPlacebetRedLevelChange() { }

    onIsBlockedTransferRedLevelChange() { }

    private search() {
        if (this.countdownTimerComponent && this.countdownTimerComponent.isRunning) {
            this.countdownTimerComponent.start();
        }

        this.spinnerService.show();
        this.toastService.deactivate();
        this.gridService.search().subscribe(productSettings => {
            this.toastService.activate('Searching completed', MessageType.Success);
            this.spinnerService.hide();
            this.productSettings = productSettings;
            this.paginationInstance = this.paginationService.createPaginationInstance(this.productSettings.length);
            this.generateDisplayedProductSettings();
        });
    }

    private generateDisplayedProductSettings() {
        const paginateProductSettings = this.paginatePipe.transform(this.productSettings, this.paginationInstance);
        this.displayedProductSettings = _.cloneDeep(paginateProductSettings);
    }
}
