export interface ProductSettingGroup {
    ProductId: number;
    CurrencyId: number;
    SiteId: number;
    GroupId: number;
    GroupName: string;
    IsBlockedPlacebetRedLevel: boolean;
    IsBlockedTransferRedLevel: boolean;
    IsCreditSite: boolean;
    OrangeMaxWinLimit: number;
    RedMaxWinLimit: number;
    YellowMaxWinLimit: number;
}

export interface ProductSetting {
    ProductName: string;
    CurrencyName: string;
    SiteName: string;
    Groups: ProductSettingGroup[];
}
