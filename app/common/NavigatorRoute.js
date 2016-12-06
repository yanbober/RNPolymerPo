'use strict';

import React, { Component } from 'react';

// import TemplatePreviewScene from './../containers/TemplatePreviewScene';
import WebViewScene from './../containers/WebViewScene';
import MainScene from './../containers/MainScene';
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