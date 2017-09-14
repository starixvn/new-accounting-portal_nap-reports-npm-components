import { NgModule } from '@angular/core';
import { RecheckinDirective } from './recheckin.directive';

@NgModule({
    declarations: [
        RecheckinDirective
    ],
    exports: [
        RecheckinDirective
    ]
})
export class AuthenticationModule { }
