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

import React, { Component } from 'react';
import {
  BackAndroid,
  Alert,
} from 'react-native';
import WebViewScene from './../containers/WebViewScene';
import MainScene from './../containers/MainScene';
import FeedChartScene from './../containers/FeedChartScene';
import NewsCategoryListScene from './../containers/NewsCategoryListScene';

export default class NavigatorRoute extends Component {

    static navigatorPopBack(navigator) {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            console.log('----------navigatorPopBack-1');
            navigator.pop();
            return true;
        }
        
        Alert.alert(
            '退出应用',
            '亲，您真的不再需要奴婢做牛做马了吗？',
            [
            { text: '需要', onPress: () => {} },
            { text: '不需要', onPress: () => {BackAndroid.exitApp()}},
            ]
        );
        return true;
    }

    static replaceToMainScene(navigator) {
        navigator.replace({
            component: MainScene,
        });
    }

    static pushToFeedChartScene(navigator) {
        navigator.push({
            component: FeedChartScene,
        });
    }

    static pushToNewsCategoryListScene(navigator, categories, curKey) {
        navigator.push({
            component: NewsCategoryListScene,
            curKey: curKey,
            categories: categories,
        });
    }

    static pushToWebViewScene(navigator, pushFrom, paramers) {
        navigator.push({
            component: WebViewScene,
            pushFrom: pushFrom,
            paramers: paramers,
        });
    }
}