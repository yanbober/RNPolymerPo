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