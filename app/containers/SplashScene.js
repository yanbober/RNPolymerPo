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
/**
 * splash页面（简单模拟闪屏广告）
 * 核心知识点：使用React Native的传统state传递倒计时
 */
export default class SplashScene extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      adSecondsCount: 3,  //广告闪屏倒计时
      showAdMark: false,  //是否展示 ad 标识
    };
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
            <StatusBar  hidden={true}/>
            <Image style={styles.adImg}
              source={{uri: 'http://img.zcool.cn/community/018f5255f959116ac7251df8af2a4d.jpg'}}
              onLoad={this._onLoadImg.bind(this)}>
              <View style={styles.adMarkContainer}>
                <Text style={styles.adMarkText}>{this.state.showAdMark ? 'AD' : ''}</Text>
              </View>
            </Image>
            <Text style={styles.secondsCounts}
              onPress={this._secondsCountsPressed.bind(this)}>
              {this.state.adSecondsCount + 'S >'}
            </Text>
            <View style={styles.releaseContainer}>
                <Image source={require('./../res/ic_launcher.png')}
                  style={styles.appIcon}/>
                <Text style={styles.appText}>
                    {'RNPolymerPo'}
                </Text>
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
  },

  adMarkContainer: {
    margin: 20,
    backgroundColor: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    borderColor: '#6fd177',
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