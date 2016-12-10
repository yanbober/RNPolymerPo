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
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import NavigatorRoute from './../common/NavigatorRoute';
import ItemMineView from './../components/ItemMineView';
/**
 * 个人中心界面
 */
class MinePage extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

  render() {
      const { homeTopBanner } = this.props;
      return (
          <View style={styles.container}>
            <ActionBar
            title={"个人中心"}
            onIconClicked={this._onIconClicked.bind(this)}
            />
            <ScrollView>
                <View style={styles.iconContainer}>
                    <Image style={styles.iconImg}
                        source={require('./../res/icon_auther.jpg')}/>
                    <Text style={styles.iconText}>工匠若水</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.divLine}/>
                    <Text style={styles.itemGroupNmae}>通用</Text>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'在线客服意见反馈'}
                        itemClicked={this._pressedFeedChart.bind(this)}/>
                    <View style={styles.divLine}/>
                    <Text style={styles.itemGroupNmae}>React Native 学习资源推荐</Text>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'本项目开源代码'}
                        itemClicked={this._pressedWebItem.bind(this, 'thisSource')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'React Native 开源代码'}
                        itemClicked={this._pressedWebItem.bind(this, 'RNSource')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'微软 CodePush 热更新开源代码'}
                        itemClicked={this._pressedWebItem.bind(this, 'CodePushSource')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'React Native 官方文档'}
                        itemClicked={this._pressedWebItem.bind(this, 'RNDocument')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'React Native 官方文档中文翻译版'}
                        itemClicked={this._pressedWebItem.bind(this, 'RNDocumentCN')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'[React] Redux 中文翻译文档'}
                        itemClicked={this._pressedWebItem.bind(this, 'ReduxDocument')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'稀土掘金 React Native 专栏'}
                        itemClicked={this._pressedWebItem.bind(this, 'xiTuJueJinRN')}/>
                    <View style={styles.divLine}/>
                    <Text style={styles.itemGroupNmae}>React Native 开发常见问题官方根据地</Text>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'StackOverflow RN 问题专版'}
                        itemClicked={this._pressedWebItem.bind(this, 'StackOverFlowRN')}/>
                    <View style={styles.divLine}/>
                    <ItemMineView
                        name={'Github RN 问题专版'}
                        itemClicked={this._pressedWebItem.bind(this, 'GithubRNIssues')}/>
                    <View style={styles.divLine}/>
                    <View style={{height: 5,}}/>
                </View>
            </ScrollView>
          </View>
      );
  }


  _pressedWebItem(from) {
    let params = undefined;
    switch(from) {
        case 'thisSource':
            params = {name: '本项目开源代码', url: 'https://github.com/yanbober/RNPolymerPo'};
        break;
        case 'RNSource':
            params = {name: 'React Native 开源代码', url: 'https://github.com/facebook/react-native'};
        break;
        case 'RNDocument':
            params = {name: 'React Native 官方文档', url: 'https://facebook.github.io/react-native/'};
        break;
        case 'RNDocumentCN':
            params = {name: 'React Native 官方文档中文翻译版', url: 'http://reactnative.cn/'};
        break;
        case 'ReduxDocument':
            params = {name: '[React] Redux 中文翻译文档', url: 'http://cn.redux.js.org/index.html'};
        break;
        case 'xiTuJueJinRN':
            params = {name: '稀土掘金 React Native 专栏', url: 'https://gold.xitu.io/tag/React%2520Native'};
        break;
        case 'CodePushSource':
            params = {name: '微软 CodePush 热更新开源代码', url: 'https://github.com/Microsoft/react-native-code-push'};
        break;
        case 'StackOverFlowRN':
            params = {name: 'StackOverflow RN 问题专版', url: 'http://stackoverflow.com/questions/tagged/react-native'};
        break;
        case 'GithubRNIssues':
            params = {name: 'Github RN 问题专版', url: 'https://github.com/facebook/react-native/issues'};
        break;
    }
    if (params) {
        NavigatorRoute.pushToWebViewScene(this.props.navigator, 'MinePage', params);
    }
  }

  _pressedFeedChart() {
    NavigatorRoute.pushToFeedChartScene(this.props.navigator);
  }

  _itemPressed(wxNewsBean) {
    NavigatorRoute.pushToWebViewScene(this.props.navigator, 'wxNews', wxNewsBean);
  }

  _onIconClicked() {
      NavigatorRoute.navigatorPopBack(this.props.navigator);
  }
}

function mapStateToProps(state) {
  const { homeTopBanner } = state;
  return {
    homeTopBanner,
  }
}
export default connect(mapStateToProps)(MinePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  iconContainer: {
    marginTop: 20,
    alignItems:'center',
  },

  iconImg: {
    width: 90,
    height: 90,
  },

  iconText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
  },

  itemContainer: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },

  divLine: {
    backgroundColor: '#dddddd',
    height: 0.5,
  },

  itemGroupNmae: {
    fontSize: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});