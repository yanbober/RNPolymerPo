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
} from 'react-native';
import { connect } from 'react-redux';

import ActionBar from './../components/ActionBar';

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
    }

    render() {
        const {route} = this.props;
        let params = route.paramers;
        this.pushFrom = route.pushFrom;
        switch(this.pushFrom) {
            case 'wxNews':
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
            default:
                return;
        }
        console.log("WebViewScene---title="+this.titleName+", pushFrom="+this.pushFrom+", url="+this.linkUrl);
        return (
            <View style={Styles.container}>
                <ActionBar
                    title={this.titleName}
                    navigator={this.props.navigator}/>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={Styles.webView}
                    source={{uri: this.linkUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        );
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
    backgroundColor: '#ffffff',
  },

  webView: {
    flex: 1,
  },
});
