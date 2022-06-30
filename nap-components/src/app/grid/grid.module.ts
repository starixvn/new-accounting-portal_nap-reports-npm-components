import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumericTextboxModule } from '../../lib/numeric-textbox';
import { PaginationModule } from '../../lib/pagination';
import { NumberFormatModule } from '../../lib/number-format';
import { BreadcrumbModule } from '../../lib/breadcrumb';
import { CountdownTimerModule } from '../../lib/countdown-timer';
import { GridComponent } from './grid.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BreadcrumbModule,
        CountdownTimerModule,
        NumberFormatModule,
        NumericTextboxModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        GridComponent
    ],
    exports: [
        GridComponent
    ]
})
export class GridModule { }
