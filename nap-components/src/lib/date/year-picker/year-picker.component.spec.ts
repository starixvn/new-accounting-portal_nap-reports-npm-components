import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { eventHelper } from '../../../testing';
import { NgbDateStruct } from '../date-model';
import { YearPickerComponent } from './year-picker.component';

@Component({
    template: `
        <nap-year-picker [(date)]="date" [minDate]="minDate" [maxDate]="maxDate" (dateChange)="onDateChange($event)"></nap-year-picker>
    `
})
class TestComponent {
    selectedDate: NgbDateStruct;
    date: NgbDateStruct = { year: 2016, month: 11, day: 2 };
    minDate: NgbDateStruct = { year: 2016, month: 2, day: 2 };
    maxDate: NgbDateStruct = { year: 2017, month: 3, day: 31 };
    onDateChange(date: NgbDateStruct) {
        this.selectedDate = date;
    }
}

describe('YearPickerComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                YearPickerComponent,
                TestComponent
            ]
        }).compileComponents();
    }));

    beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        tick();
    }));

    it('should display and year "2016"', () => {
        const yearDebugEl = fixture.debugElement.query(By.css('select'));
        expect(yearDebugEl.nativeElement.value).toBe('2016');
    });

    it('should change year of selectedDate when change year dropdown', () => {
        const yearDebugEl = fixture.debugElement.query(By.css('select'));
        yearDebugEl.triggerEventHandler('change', { target: { value: '2017' } });
        fixture.detectChanges();
        const date = component.selectedDate;
        const expectedDate: NgbDateStruct = { year: 2017, month: 11, day: 2 };
        expect(date).toEqual(expectedDate);
    });
});
