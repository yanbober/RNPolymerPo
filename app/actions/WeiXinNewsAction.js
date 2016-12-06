'use strict';

import * as types from './ActionTypes';
import { 
    APP_KEY_WEIXIN_NEWS,
    URL_WEIXIN_NEWS,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function fetchNewsListByPage(start, pageLimit) {
    return dispatch => {
        dispatch({
            type: types.ACTION_WX_NEWS_PRE_FETCH,
            isLoadingMore: true
        });
        NetUtils.get(URL_WEIXIN_NEWS+'?dtype=json&key='+APP_KEY_WEIXIN_NEWS+'&ps='+pageLimit+'&pno='+start)
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_WX_NEWS_FETCH_OK,
                    newsList: result.result.list,
                    start: start,
                    pageLimit: pageLimit,
                    isLoadingMore: false
                });
            }
            
        }, function () {
            dispatch({
                type: types.ACTION_WX_NEWS_FETCH_ERROR,
                isLoadingMore: false
            });
        })
    };
}