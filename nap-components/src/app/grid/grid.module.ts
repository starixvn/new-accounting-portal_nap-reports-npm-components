import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumericTextboxModule } from 'ngx-numeric-textbox';
import { PaginationModule } from '../../lib/pagination';
import { NoteModule } from '../../lib/note';
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
        NoteModule,
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
