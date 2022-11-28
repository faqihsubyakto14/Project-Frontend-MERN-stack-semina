import {
    START_FETCHING_PAYMENTS,
    SUCCESS_FETCHING_PAYMENTS,
    ERROR_FETCHING_PAYMENTS,
} from './constant';
import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';

let debouncedFetchPayments = debounce(getData, 1000);

export const startFetchingPayments = () => {
    return {
        type: START_FETCHING_PAYMENTS,
    };
};

export const successFetchingPayments = ({ payments }) => {
    return {
        type: SUCCESS_FETCHING_PAYMENTS,
        payments,
    };
};

export const errorFetchingPayments = () => {
    return {
        type: ERROR_FETCHING_PAYMENTS,
    };
};

export const fetchPayments = () => {
    return async (dispatch) => {
        dispatch(startFetchingPayments());

        try {
            setTimeout(() => {
                dispatch(clearNotif());
            }, 5000);

            let res = await debouncedFetchPayments('/cms/payments');
            console.log(res);

            dispatch(
                successFetchingPayments({
                    payments: res.data.data,
                })
            );

            res.data.data.forEach((res) => {
                res.avatar = res.image.name;
            });


        } catch (error) {
            dispatch(errorFetchingPayments());
        }
    };
};