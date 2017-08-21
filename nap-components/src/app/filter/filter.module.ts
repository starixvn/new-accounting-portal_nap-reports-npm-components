import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NumberFormatModule } from '../../lib/number-format';
import { DateModule } from '../../lib/date';
import { DropdownSelectModule } from '../../lib/dropdown-select';
import { ConfirmationModule } from '../../lib/confirmation';
import { DropdownTreeviewSelectModule } from '../../lib/dropdown-treeview-select';
import { FilterComponent } from './filter.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DateModule,
        DropdownTreeviewSelectModule,
        DropdownSelectModule,
        NumberFormatModule,
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
