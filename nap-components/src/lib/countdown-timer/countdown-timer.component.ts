import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'nap-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: [
        './countdown-timer.component.scss'
    ]
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    @Input() intervals = [90, 120, 150, 180];
    @Input() selectedInterval = this.intervals[0];
    @Output() callback = new EventEmitter();
    isShowIntervals = false;
    message: string;
    notRefreshMessage = 'Not Refresh';
    private seconds = 0;
    private intervalId = 0;
    get isRunning(): boolean {
        return this.intervalId !== -1;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.isShowIntervals = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.isShowIntervals = false;
    }

    ngOnInit() {
        this.start();
    }

    ngOnDestroy() {
        this.stop();
    }

    start() {
        this.clearTimer();
        this.seconds = this.selectedInterval;
        this.startTimer();
    }

    stop() {
        this.clearTimer();
        this.message = this.notRefreshMessage;
    }

    pause() {
        this.clearTimer();
    }

    continue() {
        this.clearTimer();
        if (this.seconds <= 0) {
            this.seconds = this.selectedInterval;
        }

        this.startTimer();
    }

    refresh() {
        this.callback.emit();
        this.select(this.selectedInterval);
    }

    select(interval: number) {
        this.selectedInterval = interval;
        if (this.selectedInterval === 0) {
            this.stop();
        } else {
            this.start();
        }
    }

    private startTimer() {
        this.message = this.seconds.toString();
        this.intervalId = window.setInterval(() => {
            this.seconds--;
            if (this.seconds === 0) {
                this.callback.emit();
                this.seconds = this.selectedInterval;
            }
            this.message = this.seconds.toString();
        }, 1000);
    }

    private clearTimer() {
        clearInterval(this.intervalId);
        this.intervalId = -1;
    }

    private countDown() {
        this.seconds = this.selectedInterval;
        this.startTimer();
    }
}
