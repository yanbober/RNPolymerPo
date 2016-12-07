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

// import TemplatePreviewScene from './../containers/TemplatePreviewScene';
import WebViewScene from './../containers/WebViewScene';
import MainScene from './../containers/MainScene';
import FeedChartScene from './../containers/FeedChartScene';
// import TemplateRecommandListScene from './../containers/TemplateRecommandListScene';
// import TemplateMineScene from './../containers/TemplateMineScene';
// import TemplateChargeScene from './../containers/TemplateChargeScene';
// import TemplateCategoryScene from './../containers/TemplateCategoryScene';

export default class NavigatorRoute extends Component {

    static navigatorPopBack(navigator) {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
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

    // static pushToTemplatePreviewScene(navigator, recommandBean) {
    //     navigator.push({
    //         component: TemplatePreviewScene,
    //         templateBean: recommandBean,
    //     });
    // }

    /**
     *  pushFrom: wxNews, 'subject', 'banner'
     */
    static pushToWebViewScene(navigator, pushFrom, paramers) {
        navigator.push({
            component: WebViewScene,
            pushFrom: pushFrom,
            paramers: paramers,
        });
    }

    // static pushToTemplateCategoryScene(navigator, categorys, curCategoryId) {
    //     navigator.push({
    //         component: TemplateCategoryScene,
    //         categorys: categorys,
    //         curCategoryId: curCategoryId,
    //     });
    // }

    // static pushToTemplateChargeScene(navigator) {
    //     navigator.push({
    //         component: TemplateChargeScene,
    //     });
    // }

    // static pushToTemplateMineScene(navigator) {
    //     navigator.push({
    //         component: TemplateMineScene,
    //     });
    // }

    // static pushToTemplateRecommandListScene(navigator) {
    //     navigator.push({
    //         component: TemplateRecommandListScene,
    //     });
    // }

    // static pushToTemplateChargeSuccessScene(navigator) {
    //     navigator.push({
    //         component: TemplateChargeSuccessScene,
    //     });
    // }
}