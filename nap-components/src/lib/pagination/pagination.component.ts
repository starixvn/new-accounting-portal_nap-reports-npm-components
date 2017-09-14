import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance, PaginationControlsDirective } from 'ngx-pagination';
import { NumberFormatType, NumberFormatHelper } from '../number-format';
import { PaginationConfig } from './pagination.model';
import { PaginationService } from './pagination.service';

@Component({
    selector: 'nap-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    @Input() config: PaginationInstance;
    @Output() pageChange = new EventEmitter();
    paginationApi: PaginationControlsDirective;
    pageSizes: number[];

    constructor(
        private paginationConfig: PaginationConfig,
        private paginationService: PaginationService
    ) {
        this.pageSizes = this.paginationConfig.pageSizes;
        this.config = this.paginationService.createPaginationInstance(0);
    }

    get startIndex(): number {
        return (this.config.currentPage - 1) * this.config.itemsPerPage + 1;
    }

    get endIndex(): number {
        return Math.min(this.config.currentPage * this.config.itemsPerPage, this.config.totalItems);
    }

    formatNumber(value: number) {
        return NumberFormatHelper.format(value, NumberFormatType.Integer);
    }

    raisePageChange() {
        this.pageChange.emit();
    }
}
