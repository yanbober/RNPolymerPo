/**
 * splash页面（简单模拟闪屏广告）
 * 核心知识点：使用React Native的传统state传递倒计时
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

export default class SplashScene extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      adSecondsCount: 5,
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
      },
    1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
      const { homeTopBanner } = this.props;
      return (
          <View style={styles.container}>
            <StatusBar  hidden={true}/>
            <Image style={styles.adImg}
                source={{uri: 'http://img.zcool.cn/community/018f5255f959116ac7251df8af2a4d.jpg'}}/>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  adImg: {
    flex: 1,
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