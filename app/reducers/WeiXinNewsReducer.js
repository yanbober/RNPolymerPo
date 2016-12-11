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
//分页加载state填充数据的JS技巧
export function weiXinNews(state = [], action) {
    switch (action.type) {
        case types.ACTION_WEIXIN_NEWS_PRE_FETCH:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        case types.ACTION_WEIXIN_NEWS_FETCH_OK:
            //每次判断取回来的是不是够limit，不够说明没有下一页了
            let haveMore = (action.newsList.length === action.pageLimit);
            if (action.start === 1) {
                return Object.assign({}, state, {
                    newsList: action.newsList,
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore,
                });
            } else {
                return Object.assign({}, state, {
                    newsList: state.newsList.concat(action.newsList),
                    haveMore: haveMore,
                    isLoadingMore: action.isLoadingMore,
                });
            }
        case types.ACTION_WEIXIN_NEWS_FETCH_ERROR:
            return Object.assign({}, state, {
                    isLoadingMore: action.isLoadingMore
                });
        default:
            return state;
    }
}
