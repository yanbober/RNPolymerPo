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
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import NetUtils from './../utils/NetUtils';
import ActionBar from './../components/ActionBar';
import { connect } from 'react-redux';
import NavigatorRoute from './../common/NavigatorRoute';
import TabNavigator from 'react-native-tab-navigator'
import WeiXinNewsPage from './WeiXinNewsPage';
import HomePage from './HomePage';
import MinePage from './MinePage';
/**
 * 主容器界面
 * 核心知识点：使用React Native Redux框架管理
 *            react-native-tab-navigator第三方底部导航栏的使用及封装学习
 */
const { width, height } = Dimensions.get('window');

class MainScene extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
  }

  render() {
    const {mainPage} = this.props;
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
          <TabNavigator.Item
            title="RN主页"
            selected={this.state.selectedTab === 'home'}
            renderIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomePage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="RN上拉更多"
            selected={this.state.selectedTab === 'profile'}
            renderIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <WeiXinNewsPage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="其他杂项"
            selected={this.state.selectedTab === 'aaaaa'}
            renderIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_arrow_back_white_24dp.png')} />}
            onPress={() => this.setState({ selectedTab: 'aaaaa' })}>
            <MinePage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
        </TabNavigator>
        <View style={styles.floatMenu}>
          <Image style={{width: 50, height: 50}} 
            source={require('./../res/ic_float_movies.png')}
            onPress={this._buyMoviesTicks.bind(this)}/>
        </View>
      </View>
    );
  }

  _buyMoviesTicks() {
    NavigatorRoute.pushToWebViewScene(this.props.navigator, 'buyMovies', {url: 'http://m.wepiao.com/', title: '我要看电影'});
  }
}

function mapStateToProps(state) {
  const { mainPage } = state;
  return {
    mainPage,
  }
}
export default connect(mapStateToProps)(MainScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  floatMenu: {
    position: 'absolute',
    left: width - 70,
    top: height - 120,
    flex: 1,
  }
});