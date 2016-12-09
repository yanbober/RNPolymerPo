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

const initBannerState = {
    bannerList: [],
}

export function homeTopBanner(state = initBannerState, action) {
    switch (action.type) {
        case types.ACTION_HOME_BANNER_FETCHED:
            return Object.assign({}, state, {
                    bannerList: action.bannerList
                });
        default:
            return state;
    }
}

const initCategoryState = {
    newsCategoryList: [],
}

export function homeNewsCategory(state = initCategoryState, action) {
    switch (action.type) {
        case types.ACTION_HOME_NEWS_CATEGORY_FETCHED:
            return Object.assign({}, state, {
                    newsCategoryList: action.newsCategoryList
                });
        default:
            return state;
    }
}

const initWnlState = {
    wnlData: undefined,
}

export function homeWanNianLi(state = initWnlState, action) {
    switch (action.type) {
        case types.ACTION_WNL_FETCHED:
            return Object.assign({}, state, {
                    wnlData: action.wnlData
                });
        default:
            return state;
    }
}

const initMoviesState = {
    moviesResult: undefined,
}

export function homeRecentMovies(state = initMoviesState, action) {
    switch (action.type) {
        case types.ACTION_RECENT_MOVIES_FETCHED:
            return Object.assign({}, state, {
                    moviesResult: action.moviesResult
                });
        default:
            return state;
    }
}