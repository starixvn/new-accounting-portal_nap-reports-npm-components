import { Injectable } from '@angular/core';

@Injectable()
export class PaginationConfig {
    pageSizes = [50, 100, 200, 500];
    itemsPerPage = 100;
}
