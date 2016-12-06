'use strict';

import * as types from './ActionTypes';
import { 
    ACTION_HOME_BANNER_FETCHED,
    FAKE_BANNER_NET_DATA,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function fetchHomeTopBannerList() {
    return dispatch => {
        dispatch({
            type: types.ACTION_HOME_BANNER_FETCHED,
            bannerList: FAKE_BANNER_NET_DATA
        });
    };
}