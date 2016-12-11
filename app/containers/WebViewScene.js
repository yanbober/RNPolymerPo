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
  View,
  WebView,
  StyleSheet,
  BackAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import NavigatorRoute from './../common/NavigatorRoute';
/**
 * 通用WebView页面
 * 核心知识点：WebView的使用
 *           ref的使用
 *           学会查看源码Libraries目录下WebView.android.js的onNavigationStateChange方法参数
 */
class WebViewScene extends Component {
    static propTypes = {
        navigator: React.PropTypes.object.isRequired,
        route: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.linkUrl;
        this.titleName = '';
        this.pushFrom = '';

        this._parsePropsParams();

        this.state = {
            progress: 0,
            url: this.linkUrl,  //Default
            title: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
        };
    }

    _parsePropsParams() {
        const {route} = this.props;
        let params = route.paramers;
        this.pushFrom = route.pushFrom;
        switch(this.pushFrom) {
            case 'weixinNews':
            case 'onLineNews':
                this.linkUrl = params.url;
                this.titleName = params.title;
                break;
            case 'MinePage':
                this.linkUrl = params.url;
                this.titleName = params.name;
                break;
            case 'buyMovies':
                this.linkUrl = params.url;
                this.titleName = params.title;
                break;
            case 'homeBanner':
                this.linkUrl = params.click_url;
                this.titleName = params.title;
                break;
            case 'onLineMovie':
                this.linkUrl = params.url;
                this.titleName = params.name;
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <ActionBar
                    title={this.titleName}
                    navigator={this.props.navigator}
                    onIconClicked={this._onIconClicked.bind(this)}/>
                <WebView
                    ref='_webView'
                    automaticallyAdjustContentInsets={true}
                    style={Styles.webView}
                    source={{uri: this.linkUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onNavigationStateChange={this._onNavigationStateChange.bind(this)}/>
            </View>
        );
    }

    _onNavigationStateChange(navState) {
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            title: navState.title,
            loading: navState.loading,
        });
    }

    componentDidMount() {
        BackAndroid.addEventListener('webHardwareBackPress', () => {
            if (this.state.backButtonEnabled) { 
                this.refs._webView.goBack();
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('webHardwareBackPress');
    }

    _onIconClicked() {
      NavigatorRoute.navigatorPopBack(this.props.navigator);
    }
}

function mapStateToProps(state) {
  const { routesStack } = state;
  return {
    routesStack,
  }
}
export default connect(mapStateToProps)(WebViewScene);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  webView: {
    flex: 1,
  },
});
