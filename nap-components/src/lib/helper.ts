import * as moment from 'moment';
import * as _ from 'lodash';

export let Helper = {
    resolveUrl: resolveUrl,
    redirectToHomePage: redirectToHomePage,
    redirectToUrl: redirectToUrl,
    inArray: inArray,
    downloadFile: downloadFile,
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

function downloadFile(blob: any, fileName: string) {
    if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, fileName);
    } else {
        const url = window.URL.createObjectURL(blob); // <-- work with blob directly

        // create hidden dom element (so it works in all browsers)
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);

        // create file, attach to hidden element and open hidden element
        a.href = url;
        a.download = fileName;
        a.click();
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
