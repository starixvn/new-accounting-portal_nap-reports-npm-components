import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { RecheckinService } from './recheckin.service';

@Directive({
    selector: '[napRecheckin]',
    providers: [
        RecheckinService
    ]
})
export class RecheckinDirective implements OnInit, OnDestroy {
    @Input('napRecheckin') url: string;

    constructor(
        private recheckinService: RecheckinService
    ) { }

    ngOnInit() {
        this.recheckinService.start(this.url);
    }

    ngOnDestroy() {
        this.recheckinService.stop();
    }
}
