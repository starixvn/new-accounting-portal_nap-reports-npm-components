import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { HttpService } from '../http';
import { Helper } from '../helper';
import { RecheckinConfig } from './recheckin.config';

@Injectable()
export class RecheckinService {
    private timer: NodeJS.Timer;

    constructor(
        private httpService: HttpService,
        private recheckinConfig: RecheckinConfig
    ) { }

    start() {
        this.checkin();
    }

    stop() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
    }

    private checkin() {
        this.httpService.post<string>(this.recheckinConfig.checkinUrl, {}, {
            noToast: true,
            noSpinner: true
        }).subscribe(content => {
            if (content === '1') {
                alert('You have logged in from another session or your login session has expired!');
                const logoutUrl = Helper.redirectToUrl(this.recheckinConfig.logoutUrl);
                return;
            }

            this.timer = setTimeout(() => this.checkin(), 90000);
        });
    }
}
