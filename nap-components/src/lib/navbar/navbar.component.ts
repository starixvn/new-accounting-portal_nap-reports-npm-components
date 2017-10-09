import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Menu, UserMenu } from './navbar.model';

@Component({
    selector: 'nap-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    menus: Menu[];
    username: string;
    userMenus: UserMenu[];

    constructor(
        private navbarService: NavbarService
    ) { }

    ngOnInit() {
        this.navbarService.query().subscribe(navbar => {
            this.menus = this.navbarService.compileMenus(navbar.menus);
            this.username = navbar.username || 'user';
            this.userMenus = this.navbarService.userMenus;
        });
    }
}
