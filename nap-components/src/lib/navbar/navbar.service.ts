import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService } from '../http';
import { Navbar, Menu, UserMenu } from './navbar.model';

@Injectable()
export class NavbarService {
    url = 'state-api/application/header';
    userMenus: UserMenu[];

    constructor(
        private httpService: HttpService
    ) { }

    query(): Observable<Navbar> {
        return this.httpService.post<Navbar>(this.url);
    }

    compileMenus(menus: Menu[]): Menu[] {
        menus.forEach(menu => {
            menu.hasChildren = menu.children !== null && menu.children.length > 0;
            menu.link = this.resolveUrl(menu.link);
            if (menu.hasChildren) {
                menu.children.forEach(childMenu => {
                    childMenu.hasChildren = false;
                    childMenu.link = this.resolveUrl(childMenu.link);
                });
            }
        });

        return menus;
    }

    private resolveUrl(url: string): string {
        if (url.startsWith('/')) {
            return url.substr(1);
        }

        return url;
    }
}
