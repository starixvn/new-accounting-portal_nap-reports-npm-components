import { NapDateStruct } from '../../lib/date';

export interface Product {
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
    fromDate: NapDateStruct;
    toDate: NapDateStruct;
    productId: number;
    reachedLimitLevel: ReachedLimitLevel;
    userName: string;
    siteId: number;
    devices: string[];
    isExcludeTestData: boolean;
}
