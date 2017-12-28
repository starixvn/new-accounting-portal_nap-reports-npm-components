import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';
import { DateModule } from '../../lib/date';
import { DropdownSelectModule } from '../../lib/dropdown-select';
import { ConfirmationModule } from '../../lib/confirmation';
import { DropdownTreeviewSelectModule } from '../../lib/dropdown-treeview-select';
import { FilterComponent } from './filter.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        DateModule,
        TreeviewModule.forRoot(),
        DropdownTreeviewSelectModule,
        DropdownSelectModule,
        ConfirmationModule.forRoot()
    ],
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }
