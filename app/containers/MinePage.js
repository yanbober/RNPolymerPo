/**
 * 个人中心界面
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import NavigatorRoute from './../common/NavigatorRoute';

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
                actions={[{title: 'Mine', icon: require('./../res/icon_my_template.png'), show: 'always'}]}
                onIconClicked={this._onIconClicked.bind(this)}
              />
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props._itemPressed}>
                <View>
                    <Text>本项目开源主页</Text>
                    <Image/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props._itemPressed}>
                <View>
                    <Text>意见与反馈</Text>
                    <Image/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props._itemPressed}>
                <View>
                    <Text>版本</Text>
                    <Image/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props._itemPressed}>
                <View>
                    <Text>RN文档主页</Text>
                    <Image/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
                onPress={this.props._itemPressed}>
                <View>
                    <Text>RN源码主页</Text>
                    <Image/>
                </View>
            </TouchableNativeFeedback>
          </View>
      );
  }


  _bannerPressed(bannerBean) {

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
    backgroundColor: '#ffffff',
  },

  listview: {
    flex: 1,
    padding: 5,
  },

  bannerImg: {
    width: 700, 
    height: 150,
    backgroundColor: '#e9e9e9',
  }
});