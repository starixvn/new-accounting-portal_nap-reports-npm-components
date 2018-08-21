import { Component, Renderer2, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbDateParserFormatter, NgbInputDatepicker, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerToggleDirective } from '../date-picker-toggle';
import { NapDate, NapDateStruct, DateRange, DateFormat } from '../date-model';
import { DateHelper } from '../date-helper';
import { WeekParserFormatter } from './week-parser-formatter';

@Component({
    selector: 'nap-week-picker',
    templateUrl: './week-picker.component.html',
    styleUrls: ['./week-picker.component.scss'],
    providers: [{
        provide: NgbDateParserFormatter,
        useFactory: weekParserFormatterFactory
    }]
})
export class WeekPickerComponent implements OnChanges {
    @Input() minDate: NapDateStruct;
    @Input() maxDate: NapDateStruct;
    @Input() date: NapDateStruct;
    @Output() dateChange = new EventEmitter<NapDateStruct>();
    datePickerToggle: DatePickerToggleDirective;
    datePicker: NgbDatepicker;
    private currentWeekElement: HTMLElement;
    private weekRange: DateRange;

    constructor(
        private renderer2: Renderer2
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        const dateChange = changes['date'];
        if (dateChange && dateChange.isFirstChange()) {
            this.weekRange = DateHelper.getWeekRangeOfDate(this.date);
            const day = this.weekRange.fromDate.day;
            if (this.minDate) {
                const minNgbDate = NapDate.fromDateStruct(this.minDate);
                const fromNgbDate = NapDate.fromDateStruct(this.weekRange.fromDate);
                if (minNgbDate.after(fromNgbDate)) {
                    this.updateDate(this.minDate);
                } else {
                    this.updateDate(this.weekRange.fromDate);
                }
            } else {
                this.updateDate(this.weekRange.fromDate);
            }
        }
    }

    onClick(event: MouseEvent, disabled: boolean) {
        if (disabled) {
            return;
        }

        console.log(this.datePicker);
        console.log(this.datePickerToggle);
        const weekElement = this.getWeekElement(event.target);
        if (weekElement) {
            const firstActiveDayElement = this.getFirstActiveDayElement(weekElement);
            if (firstActiveDayElement && firstActiveDayElement.children[0] !== event.target) {
                event.stopPropagation();
                firstActiveDayElement.click();
            }
        }
    }

    onMouseEnter(event: MouseEvent, disabled: boolean) {
        const weekElement = this.getWeekElement(event.target);
        if (weekElement && weekElement !== this.currentWeekElement) {
            if (this.currentWeekElement) {
                this.renderer2.removeClass(this.currentWeekElement, 'week-hover');
                this.currentWeekElement = undefined;
            }

            if (!disabled) {
                this.currentWeekElement = weekElement;
                this.renderer2.addClass(this.currentWeekElement, 'week-hover');
            }
        }
    }

    onMouseLeave(event: MouseEvent, disabled: boolean) {
        if (this.currentWeekElement) {
            const weekElement = this.getWeekElement(event.relatedTarget);
            if (!weekElement || !disabled) {
                this.renderer2.removeClass(this.currentWeekElement, 'week-hover');
                this.currentWeekElement = undefined;
            }
        }
    }

    onModelChange() {
        this.dateChange.emit(this.date);
    }

    isSelected(dateStruct: NapDateStruct) {
        const ngbDate = NapDate.fromDateStruct(dateStruct);
        const firstDayOfWeek = DateHelper.getFirstDayOfWeek(this.date);
        const firstNgbDateOfWeek = NapDate.fromDateStruct(firstDayOfWeek);
        const lastDayOfWeek = DateHelper.getLastDayOfWeek(this.date);
        const lastNgbDateOfWeek = NapDate.fromDateStruct(lastDayOfWeek);
        return (ngbDate.equals(firstNgbDateOfWeek) || ngbDate.after(firstNgbDateOfWeek)) &&
            (ngbDate.equals(lastNgbDateOfWeek) || ngbDate.before(lastNgbDateOfWeek));
    }

    private updateDate(date: NapDateStruct) {
        const ngbDate = NapDate.fromDateStruct(date);
        const currentNgbDate = NapDate.fromDateStruct(this.date);
        if (!ngbDate.equals(currentNgbDate)) {
            this.date = date;
            this.dateChange.emit(date);
        }
    }

    private getWeekElement(eventTarget: EventTarget): HTMLElement {
        const element = eventTarget as HTMLElement;
        const dayElement = element.parentElement;
        if (dayElement !== null && dayElement.classList.contains('ngb-dp-day')) {
            return dayElement.parentElement;
        }

        return undefined;
    }

    private getFirstActiveDayElement(weekElement: HTMLElement): HTMLElement {
        for (let i = 1; i < weekElement.children.length; i++) {
            const dayElement = weekElement.children[i] as HTMLElement;
            if (dayElement.children[0].classList.contains('btn-light')) {
                return dayElement;
            }
        }

        return null;
    }
}

export function weekParserFormatterFactory() {
    return new WeekParserFormatter('mediumDate');
}
