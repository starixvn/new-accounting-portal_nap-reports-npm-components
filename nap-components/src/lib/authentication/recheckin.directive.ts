import { Directive, OnInit, OnDestroy } from '@angular/core';
import { RecheckinService } from './recheckin.service';

@Directive({
    selector: '[napRecheckin]',
    providers: [
        RecheckinService
    ]
})
export class RecheckinDirective implements OnInit, OnDestroy {
    constructor(
        private recheckinService: RecheckinService
    ) { }

    ngOnInit() {
        this.recheckinService.start();
    }

    ngOnDestroy() {
        this.recheckinService.stop();
    }
}
