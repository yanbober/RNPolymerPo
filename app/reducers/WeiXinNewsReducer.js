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
    haveMore: true,
    isLoadingMore: false,
    newsList: [],
}

export function wxNews(state = initialState, action) {
    switch (action.type) {
        case types.ACTION_WX_NEWS_PRE_FETCH:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        case types.ACTION_WX_NEWS_FETCH_OK:
            let haveMore = (action.newsList.length === action.pageLimit);
            if (action.start === 0) {
                return Object.assign({}, state, {
                    newsList: action.newsList,
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore
                });
            } else {
                return Object.assign({}, state, {
                    newsList: state.newsList.concat(action.newsList),
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore
                });
            }
        case types.ACTION_WX_NEWS_FETCH_ERROR:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        default:
            return state;
    }
}