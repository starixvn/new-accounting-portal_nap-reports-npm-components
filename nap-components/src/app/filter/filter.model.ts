import { NgbDateStruct } from '../../lib/date';

export interface Product {
    id: number;
    name: string;
}

export interface Currency {
    id: number;
    name: string;
}

export enum ReachedLimitLevel {
    All,
    Orange,
    Yellow,
    Red
}

export interface FilterModel {
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;
    productId: number;
    reachedLimitLevel: ReachedLimitLevel;
    userName: string;
    siteId: number;
    currencyId: number;
    isExcludeTestData: boolean;
}
