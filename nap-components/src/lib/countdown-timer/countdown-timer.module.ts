import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CountdownTimerComponent
    ],
    exports: [
        CountdownTimerComponent
    ]
})
export class CountdownTimerModule { }
