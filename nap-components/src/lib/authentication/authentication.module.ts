import { NgModule } from '@angular/core';
import { RecheckinDirective } from './recheckin.directive';
import { RecheckinConfig } from './recheckin.config';

@NgModule({
    declarations: [
        RecheckinDirective
    ],
    exports: [
        RecheckinDirective
    ],
    providers: [
        RecheckinConfig
    ]
})
export class AuthenticationModule { }
