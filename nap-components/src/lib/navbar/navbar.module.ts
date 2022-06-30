import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '../http';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule.forRoot()
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
    static forRoot(): ModuleWithProviders<NavbarModule> {
        return {
            ngModule: NavbarModule,
            providers: [
                NavbarService
            ]
        };
    }
}
