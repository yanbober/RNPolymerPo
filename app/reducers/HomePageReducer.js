'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
    bannerList: [],
}

export function homeTopBanner(state = initialState, action) {
    switch (action.type) {
        case types.ACTION_HOME_BANNER_FETCHED:
            return Object.assign({}, state, {
                    bannerList: action.bannerList
                });
        default:
            return state;
    }
}