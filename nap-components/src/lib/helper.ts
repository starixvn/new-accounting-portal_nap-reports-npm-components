import { Response } from '@angular/http';
import * as moment from 'moment';
import * as _ from 'lodash';

export let Helper = {
    resolveUrl: resolveUrl,
    redirectToHomePage: redirectToHomePage,
    redirectToUrl: redirectToUrl,
    inArray: inArray,
    saveExcel: saveExcel,
    extend: extend
};

function extend<T, U>(obj: T, extension: U) {
    Object.keys(obj).forEach((key) => {
        extension[key] = obj[key];
    });

    return extension as T & U;
}

function inArray<T>(list: T[], item: T): boolean {
    for (const x of list) {
        if (x === item) {
            return true;
        }
    }

    return false;
}

function saveExcel(response: Response, fileName: string) {
    const contentType = 'application/vnd.ms-excel';
    const blob = response.blob();
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, fileName);
    } else {
        const e = document.createEvent('MouseEvents');
        const a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        (<any>a.dataset).downloadurl = [contentType, a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window,
            0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }
}

function resolveUrl(relativeUrl: string): string {
    return document.baseURI + relativeUrl;
}

function redirectToUrl(relativeUrl: string) {
    const absoluteUrl = resolveUrl(relativeUrl);
    window.location.href = absoluteUrl + '?' + new Date().getMilliseconds();
}

function redirectToHomePage() {
    window.location.href = document.baseURI + '?' + new Date().getMilliseconds();
}
