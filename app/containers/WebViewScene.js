/**
 * 模板商城WebView界面
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
            case 'subject':
                this.linkUrl = params.click_url;
                this.titleName = params.title;
                break;
            case 'banner':
                this.linkUrl = params.click_url;
                break;
            case 'wxNews':
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
