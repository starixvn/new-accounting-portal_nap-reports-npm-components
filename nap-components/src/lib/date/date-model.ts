export interface NapDateStruct {
    /**
     * The year, for example 2016
     */
    year: number;

    /**
     * The month, with default calendar we use ISO 8601: 1=Jan ... 12=Dec
     */
    month: number;

    /**
     * The day of month, starting at 1
     */
    day: number;
}

export class NapDate {
    static from(date: { year: number, month: number, day?: number }): NapDate {
        return date ? new NapDate(date.year, date.month, date.day ? date.day : 1) : null;
    }

    static fromToday(): NapDate {
        const today = new Date();
        return NapDate.fromDate(today);
    }

    static fromDateStruct(dateStruct: NapDateStruct): NapDate {
        return new NapDate(dateStruct.year, dateStruct.month, dateStruct.day);
    }

    static fromDate(date: Date): NapDate {
        const dateStruct = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        return NapDate.fromDateStruct(dateStruct);
    }

    constructor(public year: number, public month: number, public day: number) { }

    equals(other: NapDate) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }

    before(other: NapDate) {
        if (!other) {
            return false;
        }

        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            } else {
                return this.month < other.month;
            }
        } else {
            return this.year < other.year;
        }
    }

    after(other: NapDate) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            } else {
                return this.month > other.month;
            }
        } else {
            return this.year > other.year;
        }
    }

    toDateStruct(): NapDateStruct {
        return { year: this.year, month: this.month, day: this.day };
    }

    toString() {
        return `${this.year}-${this.month}-${this.day}`;
    }
}

export interface DateRange {
    fromDate: NapDateStruct;
    toDate: NapDateStruct;
}

export enum DateFormat {
    Date,
    Week,
    Month,
    Year
}
