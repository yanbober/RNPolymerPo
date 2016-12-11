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
    APP_KEY_TULING_ROBOT,
    URL_TULING_ROBOT,
} from  '../common/Constants';
import NetUtils from './../utils/NetUtils';

export function resetRobotResponseState() {
    return dispatch => {
        dispatch({
            type: types.ACTION_CHART_ROBOT_PRE_FETCH,
            isUser: false,
            data: undefined,
        });
    };
}

export function fetchRobotResponse(inputInfo) {
    return dispatch => {
        dispatch({
            type: types.ACTION_CHART_ROBOT_PRE_FETCH,
            isUser: true,
            data: inputInfo,
        });
        NetUtils.get(URL_TULING_ROBOT+'?dtype=json&key='+APP_KEY_TULING_ROBOT+'&userid=1990&info='+encodeURI(inputInfo))
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_CHART_ROBOT_FETCH_OK,
                    isUser: false,
                    data: result.result.text,
                });
            } else {
                dispatch({
                    type: types.ACTION_CHART_ROBOT_FETCH_ERROR,
                    isUser: false,
                    data: (result.reason + '('+result.error_code+')'),
                });
            }
        }, function () {
            dispatch({
                type: types.ACTION_CHART_ROBOT_FETCH_ERROR,
                isUser: false,
                data: '工匠若水说：貌似网络请求发出后被外星人拦截了(请检查您高贵的手机网络问题)！',
            });
        })
    };
}