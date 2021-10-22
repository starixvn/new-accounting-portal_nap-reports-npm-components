import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { NavbarModule, NavbarService } from '../lib/navbar';
import { HttpModule } from '../lib/http';
import { SpinnerModule } from '../lib/spinner';
import { ToastModule } from '../lib/toast';
import { NoteModule } from '../lib/note';
import { AuthenticationModule, RecheckinConfig } from '../lib/authentication';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavbarService } from './custom-navbar.service';
import { NumberFormatModule } from './number-format';
import { FilterModule } from './filter';
import { GridModule } from './grid';

@Injectable()
export class CustomRecheckinConfig extends RecheckinConfig {
    checkinUrl = 'Checkin';
    logoutUrl = 'Logout';
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        NavbarModule.forRoot(),
        SpinnerModule.forRoot(),
        ToastModule.forRoot(),
        NoteModule,
        NumberFormatModule,
        AuthenticationModule,
        AppRoutingModule,
        FilterModule,
        GridModule
    ],
    providers: [
        { provide: NavbarService, useClass: CustomNavbarService },
        { provide: RecheckinConfig, useClass: CustomRecheckinConfig }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
