import * as moment from 'moment';
import * as _ from 'lodash';
import { NapDateStruct, DateRange, DateFormat } from './date-model';

export let DateHelper = {
    getWeekRangeOfDate: getWeekRangeOfDate,
    getFirstDayOfWeek: getFirstDayOfWeek,
    getLastDayOfWeek: getLastDayOfWeek,
    convertDateStructToDate: convertDateStructToDate,
    convertDateToDateStruct: convertDateToDateStruct,
    convertStringToDateStruct: convertStringToDateStruct,
    convertDateStructToString: convertDateStructToString,
    convertDateStructToMoment: convertDateStructToMoment,
    convertMomentToDateStruct: convertMomentToDateStruct,
    convertStringToMomentDate: convertStringToMomentDate,
    formatMomentDate: formatMomentDate,
    sameMomentDate: sameMomentDate
};

function getWeekRangeOfDate(dateStruct: NapDateStruct): DateRange {
    return {
        fromDate: getFirstDayOfWeek(dateStruct),
        toDate: getLastDayOfWeek(dateStruct)
    };
}

function getFirstDayOfWeek(dateStruct: NapDateStruct): NapDateStruct {
    const date = convertDateStructToDate(dateStruct);
    const day = date.getDay();
    if (day === 0) {
        date.setDate(dateStruct.day - 6);
    } else {
        date.setDate(dateStruct.day - day + 1);
    }

    return convertDateToDateStruct(date);
}

function getLastDayOfWeek(dateStruct: NapDateStruct): NapDateStruct {
    const date = convertDateStructToDate(dateStruct);
    const day = date.getDay();
    if (day === 0) {
        date.setDate(dateStruct.day);
    } else {
        date.setDate(dateStruct.day + 7 - day);
    }

    return convertDateToDateStruct(date);
}

function convertDateStructToDate(dateStruct: NapDateStruct): Date {
    return new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
}

function convertDateToDateStruct(date: Date): NapDateStruct {
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
}

/// example input: '2016-11-02T00:00:00'
function convertStringToDateStruct(dateString: string): NapDateStruct {
    return convertDateToDateStruct(new Date(dateString));
}

/// example output: '2016-11-02T00:00:00'
function convertDateStructToString(dateStruct: NapDateStruct): string {
    const yearString = dateStruct.year.toString();
    const monthString = ('0' + dateStruct.month).slice(-2);
    const dayString = ('0' + dateStruct.day).slice(-2);
    return `${yearString}-${monthString}-${dayString}T00:00:00`;
}

function convertDateStructToMoment(dateStruct: NapDateStruct): moment.Moment {
    return moment.utc([dateStruct.year, dateStruct.month - 1, dateStruct.day]);
}

function convertMomentToDateStruct(date: moment.Moment): NapDateStruct {
    return { year: date.year(), month: date.month() + 1, day: date.date() };
}

function formatMomentDate(momentDate: moment.Moment, dateFormat: DateFormat): string {
    switch (dateFormat) {
        case DateFormat.Date:
            return momentDate.format('MMM DD, YYYY');
        case DateFormat.Week:
            return momentDate.format('MM/YYYY') + ' - Week ' + momentDate.format('W');
        case DateFormat.Month:
            return momentDate.format('MMM YYYY');
        case DateFormat.Year:
            return momentDate.format('YYYY');
    }
}

function convertStringToMomentDate(dateText: string, formatString: string): moment.Moment {
    return moment.utc(dateText, formatString);
}

function sameMomentDate(date1: moment.Moment, date2: moment.Moment): boolean {
    if (date1 === date2) {
        return true;
    }

    if (_.isNil(date1) || _.isNil(date2)) {
        return false;
    }

    return date1.year() === date2.year() && date1.month() === date2.month() && date1.date() === date2.date();
}
