import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { DateHelper } from '../date-helper';
import { DateFormat } from '../date-model';

@Pipe({
    name: 'napMomentFormat'
})
export class MomentFormatPipe implements PipeTransform {
    transform(date: moment.Moment): string {
        if (_.isNil(date)) {
            return '';
        }

        return DateHelper.formatMomentDate(date, DateFormat.Date);
    }
}
