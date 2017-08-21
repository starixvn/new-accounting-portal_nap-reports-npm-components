import { Injectable } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { PaginationConfig } from './pagination.model';

@Injectable()
export class PaginationService {
    constructor(
        private paginationConfig: PaginationConfig
    ) { }

    createPaginationInstance(totalItems: number, id = 'customPaginationId'): PaginationInstance {
        return {
            id: id,
            itemsPerPage: this.paginationConfig.itemsPerPage,
            currentPage: 1,
            totalItems: totalItems
        };
    }
}
