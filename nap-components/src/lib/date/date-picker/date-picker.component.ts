import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerToggleDirective } from '../date-picker-toggle';
import { NapDateStruct } from '../date-model';
import { DateParserFormatter } from './date-parser-formatter';

@Component({
    selector: 'nap-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    providers: [{
        provide: NgbDateParserFormatter,
        useFactory: dateParserFormatterFactory
    }]
})
export class DatePickerComponent {
    @Input() minDate: NapDateStruct;
    @Input() maxDate: NapDateStruct;
    @Input() date: NapDateStruct;
    @Output() dateChange = new EventEmitter<NapDateStruct>();
    datePickerToggle: DatePickerToggleDirective;

    constructor(
        private ngbDateParserFormatter: NgbDateParserFormatter
    ) { }

    onModelChange() {
        this.dateChange.emit(this.date);
    }
}

export function dateParserFormatterFactory() {
    const formatter =  new DateParserFormatter();
    formatter.setDateFormat('mediumDate');

    return formatter;
}
