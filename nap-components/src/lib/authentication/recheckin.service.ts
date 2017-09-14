import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { HttpService } from '../http';

const defaultUrl = 'Login/ReCheckLogin';

@Injectable()
export class RecheckinService {
    private timer: NodeJS.Timer;

    constructor(
        private httpService: HttpService
    ) { }

    start(url: string) {
        if (_.isNil(url) || url === '') {
            url = defaultUrl;
        }

        this.stop();
        this.checkin(url);
    }

    stop() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
    }

    private checkin(url: string) {
        this.httpService.post<Response>(url, {}, {
            noToast: true,
            noSpinner: true
        }).subscribe(response => {
            const content = response.text();
            if (content === '1') {
                alert('You have logged in from another session or your login session has expired!');
                return;
            }

            this.timer = setTimeout(() => this.checkin(url), 90000);
        });
    }
}
