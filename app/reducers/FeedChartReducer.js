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
import * as types from './../actions/ActionTypes';

const initialState = {
    isUser: false,
    data: undefined,
}

export function robotChart(state = initialState, action) {
    switch (action.type) {
        case types.ACTION_CHART_ROBOT_PRE_FETCH:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        case types.ACTION_CHART_ROBOT_FETCH_OK:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        case types.ACTION_CHART_ROBOT_FETCH_ERROR:
            return Object.assign({}, state, {
                isUser: action.isUser,
                data: action.data
            });
        default:
            return state;
    }
}