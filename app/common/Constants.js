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
 * 常量
 */

//微信精选
export const APP_KEY_WEIXIN_NEWS = '0a2428e615fbf9040125cb135cc5987b';  
export const URL_WEIXIN_NEWS = 'http://v.juhe.cn/weixin/query';

//万年历
export const APP_KEY_WAN_NIAN_LI = '5a9a1cd663013c456120fd6fdc9883cb';
export const URL_WAN_NIAN_LI = 'http://japi.juhe.cn/calendar/day';

//Home页top banner数据（网络没有接口，只能本地模拟造假）
export const FAKE_BANNER_NET_DATA =[{
        id: 1234567890,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7976502.jpg/640',
        title: '你不知道的iPhone的隐藏功能',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        id: 1234567891,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7968791.jpg/640',
        title: '青春就是一场旅行',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905046499'
    },
    {
        id: 1234567892,
        img_url: 'http://zxpic.gtimg.com/infonew/0/wechat_pics_-7968826.jpg/640',
        title: '绝世限量版跑车',
        click_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905046549'
    },
];

//Home页news分类列表（网络没有接口，只能本地模拟造假）
export const FAKE_NEWS_CATEGORY_NET_DATA =[{
        key: 'top',
        title: '头条',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'shehui',
        title: '社会',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'guonei',
        title: '国内',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'guoji',
        title: '国际',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'yule',
        title: '娱乐',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'tiyu',
        title: '体育',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'junshi',
        title: '军事',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'keji',
        title: '科技',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'caijing',
        title: '财经',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
    {
        key: 'shishang',
        title: '时尚',
        icon_url: 'http://v.juhe.cn/weixin/redirect?wid=wechat_20160905052928'
    },
];
