'use strict';

import { combineReducers } from 'redux';
import { wxNews } from './WeiXinNewsReducer';
import { homeTopBanner, } from './HomePageReducer';

const rootReducer = combineReducers({
      wxNews,
      homeTopBanner,
});
export default rootReducer;