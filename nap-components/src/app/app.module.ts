import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarModule, NavbarService } from '../lib/navbar';
import { HttpModule } from '../lib/http';
import { SpinnerModule } from '../lib/spinner';
import { ToastModule } from '../lib/toast';
import { AppComponent } from './app.component';
import { CustomNavbarService } from './custom-navbar.service';
import { FilterModule } from './filter';
import { GridModule } from './grid';

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
    FilterModule,
    GridModule
  ],
  providers: [
    { provide: NavbarService, useClass: CustomNavbarService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
