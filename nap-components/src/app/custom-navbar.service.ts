// @ts-nocheck
import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { NavbarService, Navbar, UserMenu } from '../lib/navbar';

@Injectable()
export class CustomNavbarService extends NavbarService {
    private _userMenus: UserMenu[] = [
        {
            name: 'Profile',
            link: 'UserInfo/UserProfile'
        },
        {
            name: 'Change Password',
            link: 'UserInfo/ChangePassword'
        },
        {
            name: 'Sign Out',
            link: 'UserLogin/Login/LogOut'
        }
    ];

    get userMenus(): UserMenu[] {
        return this._userMenus;
    }

    query(): Observable<Navbar> {
        const navbar: Navbar = {
            username: 'leo',
            menus: [
                {
                    id: 1,
                    link: '',
                    name: 'Main',
                    hasChildren: true,
                    children: [
                        {
                            id: 11,
                            link: '/main/main1',
                            name: 'Main1',
                            hasChildren: false,
                            children: null
                        },
                        {
                            id: 12,
                            link: '/main/main2',
                            name: 'Main2',
                            hasChildren: false,
                            children: null
                        }
                    ]
                },
                {
                    id: 2,
                    link: '',
                    name: 'Test',
                    hasChildren: false,
                    children: null
                }
            ]
        };
        return of(navbar);
    }
}
