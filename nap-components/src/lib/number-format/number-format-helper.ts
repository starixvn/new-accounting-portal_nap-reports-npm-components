import * as _ from 'lodash';
import { NumberFormatType } from './number-format.model';

export let NumberFormatHelper = {
    format: format
};

const decimalFormat = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const integerFormat = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const percentFormat = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function format(input: number, type: NumberFormatType) {
    if (_.isNil(input)) {
        return 'N/A';
    }

    switch (type) {
        case NumberFormatType.Integer:
            return integerFormat.format(input);
        case NumberFormatType.Decimal:
            return decimalFormat.format(input);
        case NumberFormatType.Percent:
            return percentFormat.format(input);
    }
}
