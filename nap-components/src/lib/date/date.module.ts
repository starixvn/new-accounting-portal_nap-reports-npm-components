import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker';
import { DatePickerToggleDirective } from './date-picker-toggle';
import { WeekPickerComponent } from './week-picker';
import { MonthPickerComponent } from './month-picker';
import { YearPickerComponent } from './year-picker';
import { MomentFormatPipe } from './pipes/moment-format.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbDatepickerModule.forRoot()
    ],
    declarations: [
        DatePickerComponent,
        WeekPickerComponent,
        MonthPickerComponent,
        YearPickerComponent,
        DatePickerToggleDirective,
        MomentFormatPipe
    ],
    exports: [
        DatePickerComponent,
        WeekPickerComponent,
        MonthPickerComponent,
        YearPickerComponent,
        DatePickerToggleDirective,
        MomentFormatPipe
    ]
})
export class DateModule { }
