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
/**
 * 进行定义请求Action类型
 */

//在线新闻
export const ACTION_ONLINE_NEWS_PRE_FETCH = 'ACTION_ONLINE_NEWS_PRE_FETCH';
export const ACTION_ONLINE_NEWS_FETCH_OK = 'ACTION_ONLINE_NEWS_FETCH_OK';
export const ACTION_ONLINE_NEWS_FETCH_ERROR = 'ACTION_ONLINE_NEWS_FETCH_ERROR';

//微信精选（分页加载）
export const ACTION_WEIXIN_NEWS_PRE_FETCH = 'ACTION_WEIXIN_NEWS_PRE_FETCH';
export const ACTION_WEIXIN_NEWS_FETCH_OK = 'ACTION_WEIXIN_NEWS_FETCH_OK';
export const ACTION_WEIXIN_NEWS_FETCH_ERROR = 'ACTION_WEIXIN_NEWS_FETCH_ERROR';

//Home页top banner
export const ACTION_HOME_BANNER_FETCHED = 'ACTION_HOME_BANNER_FETCHED';

//Home页news分类
export const ACTION_HOME_NEWS_CATEGORY_FETCHED = 'ACTION_HOME_NEWS_CATEGORY_FETCHED';

//Home万年历
export const ACTION_WNL_FETCHED = 'ACTION_WNL_FETCHED';

//Home页最近影讯
export const ACTION_RECENT_MOVIES_FETCHED = 'ACTION_RECENT_MOVIES_FETCHED';

//问答机器人
export const ACTION_CHART_ROBOT_PRE_FETCH = 'ACTION_CHART_ROBOT_PRE_FETCH';
export const ACTION_CHART_ROBOT_FETCH_OK = 'ACTION_CHART_ROBOT_FETCH_OK';
export const ACTION_CHART_ROBOT_FETCH_ERROR = 'ACTION_CHART_ROBOT_FETCH_ERROR';