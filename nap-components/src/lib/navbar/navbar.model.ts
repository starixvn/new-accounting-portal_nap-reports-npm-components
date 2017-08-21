export interface UserMenu {
    name: string;
    link: string;
}

export interface Menu {
    id: number;
    name: string;
    link: string;
    hasChildren: boolean;
    children: Menu[];
}

export interface Navbar {
    username: string;
    menus: Menu[];
}
