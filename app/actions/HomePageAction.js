/*
 * MIT License
 *
 * Copyright (c) 2016 yanbo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

import * as types from './ActionTypes';
import { 
    FAKE_BANNER_NET_DATA,
    FAKE_NEWS_CATEGORY_NET_DATA,
    APP_KEY_WAN_NIAN_LI,
    URL_WAN_NIAN_LI,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';
import CommonUtils from './../utils/CommonUtils';

export function fetchHomeTopBannerList() {
    return dispatch => {
        dispatch({
            type: types.ACTION_HOME_BANNER_FETCHED,
            bannerList: FAKE_BANNER_NET_DATA
        });
    };
}

export function fetchHomeNewsCategoryList() {
    return dispatch => {
        dispatch({
            type: types.ACTION_HOME_NEWS_CATEGORY_FETCHED,
            newsCategoryList: FAKE_NEWS_CATEGORY_NET_DATA
        });
    };
}

export function fetchWanNianLiInfo() {
    return dispatch => {
        NetUtils.get(URL_WAN_NIAN_LI+'?key='+APP_KEY_WAN_NIAN_LI+'&date='+CommonUtils.dateFormat(new Date(), 'yyyy-M-d'))
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_WNL_FETCHED,
                    wnlData: result.result.data,
                });
            }
            
        }, function () {})
    };
}