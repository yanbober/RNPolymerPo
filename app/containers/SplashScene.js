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
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import NavigatorRoute from './../common/NavigatorRoute';
import FadeAnimedImage from './../components/FadeAnimedImage';
/**
 * splash页面（简单模拟闪屏广告）
 * 核心知识点：使用React Native的传统state传递倒计时，不用redux框架的混乱结构学习(故意体验下没有框架的错乱)
 */
const AD_URLS = [
  'http://wanzao2.b0.upaiyun.com/system/pictures/34592918/original/1459169392_602x710.jpg',
  'http://img.zcool.cn/community/018f5255f959116ac7251df8af2a4d.jpg',
  'http://ec4.images-amazon.com/images/I/515BsYKPz0L._SY400_.jpg',
  'http://www.qlmoney.com/uploadfile/2016/1010/20161010033437141.jpg',
  'http://img4.duitang.com/uploads/item/201601/16/20160116233008_YGQCc.jpeg',
  'http://image.kejixun.com/2016/1118/20161118121413566.jpeg',
  'http://www.wedalian.com/Uploads/a/2016/02/02/ntlbueffi02.jpg',
  'http://www.wedalian.com/Uploads/a/2016/02/02/epmpwrk3rql.jpg',
  'http://easyread.ph.126.net/xWCFBUaTqiJWcnZksiGiXQ==/7916647547221380812.jpg',
  'http://wanzao2.b0.upaiyun.com/system/pictures/16123497/original/1421908034_216x224.png',
  'http://img3.duitang.com/uploads/item/201602/25/20160225174417_i8ASK.jpeg',
];

export default class SplashScene extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      adSecondsCount: 4,  //广告闪屏倒计时
      showAdMark: false,  //是否展示 ad 标识
    };
    this.curAdIndex = parseInt(10*Math.random());
  }

  componentDidMount() {
    this.timer = setInterval(
      () => {
        if (this.state.adSecondsCount <= 1) {
          this.timer && clearInterval(this.timer);
          NavigatorRoute.replaceToMainScene(this.props.navigator);
          return;
        }
        this.setState({adSecondsCount: --this.state.adSecondsCount});
      }, 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <FadeAnimedImage style={styles.adImg}
          inputRange={[0, 100]}
          outputRange={[0, 1]}
          source={AD_URLS[this.curAdIndex]}
          onLoad={this._onLoadImg.bind(this)}>
        </FadeAnimedImage>
        <Text style={styles.secondsCounts}
          onPress={this._secondsCountsPressed.bind(this)}>
          {this.state.showAdMark ? (this.state.adSecondsCount + '秒 >') : ''}
        </Text>
        <View style={styles.releaseContainer}>
          <Image source={require('./../res/ic_launcher.png')}
            style={styles.appIcon}/>
          <Text style={styles.appText}>
            {'RNPolymerPo'}
          </Text>
        </View>
        <View style={[styles.adMarkContainer, {borderColor: this.state.showAdMark ? '#6fd177' : 'white'}]}>
          <Text style={styles.adMarkText}>{this.state.showAdMark ? 'AD' : ''}</Text>
        </View>
      </View>
    );
  }

  _secondsCountsPressed() {
    NavigatorRoute.replaceToMainScene(this.props.navigator);
  }

  _onLoadImg() {
    this.setState({showAdMark: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  adImg: {
    flex: 1,
    resizeMode: 'contain', 
  },

  adMarkContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    width: 24,
  },

  adMarkText: {
    color: '#6fd177',
  },

  secondsCounts: {
    color: '#a0a0a0',
    fontSize: 18,
    marginRight: 15,
    alignSelf: 'flex-end',
  },

  releaseContainer: {
    justifyContent: 'center',
    alignItems : 'center',
    flexDirection: 'row',
    padding: 15,
  },

  appIcon: {
    width: 30,
    height: 30,
  },

  appText: {
    marginLeft: 5,
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
  }
});