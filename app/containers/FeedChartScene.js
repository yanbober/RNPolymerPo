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
  ListView,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import NavigatorRoute from './../common/NavigatorRoute';
import { fetchRobotResponse } from '../actions/FeedChartAction';
import ItemIMChartView from './../components/ItemIMChartView';
/**
 * 反馈聊天界面（接入图灵机器人部分功能）
 * 核心知识点：React Native 混合布局及交互的处理技巧
 *            Style属性动态修改等
 *            使用ListView高级属性实现需求
 *            大量数据优化state状态存储，只用来做标记思维
 */
var chartList = [];

class FeedChartScene extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.listHeight = 0;
    this.footerY = 0;

    this.state = {
      inputContentText: '',
    };
  }

  componentDidMount() {
    // this.props.dispatch(fetchRobotResponse('你好'));
    //http://blog.csdn.net/xiaominghimi/article/details/51606848
  }

  render() {
      const { robotChart } = this.props;
      if (robotChart.data) {
        chartList.push(
          {
            isUser: false,
            text: robotChart.data.text
          }
        );
      }

      return (
          <View style={styles.container}>
            <ActionBar
              title={"在线客服意见反馈"}
              onIconClicked={this._onIconClicked.bind(this)} />
            <ListView
              ref='_listView'
              onLayout={(e)=>{this.listHeight = e.nativeEvent.layout.height;}}
              dataSource={this.dataSource.cloneWithRows(chartList)}
              renderRow={(bean)=>{return <ItemIMChartView bean={bean}/>}}/>
            <View style={styles.bottomContainer}>
              <View style={styles.searchBox}>
                <TextInput
                    ref='_textInput'
                    onChangeText={(text) =>{this.state.inputContentText=text}}
                    placeholder=' 请输入对话内容'
                    returnKeyType='done'
                    style={styles.inputText}
                />
              </View>
              <TouchableHighlight
                underlayColor={'#AAAAAA'}
                activeOpacity={0.5}
                onPress={this._pressedSendBtn.bind(this)}>
                <View style={styles.sendBtn}>
                  <Text style={ styles.bottomBtnText }>
                      发送
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
      );
  }

  _onIconClicked() {
    NavigatorRoute.navigatorPopBack(this.props.navigator);
  }

  _pressedSendBtn() {
    if(this.state.inputContentText.trim().length <= 0){
      ToastAndroid.show('输入的内容不能为空！', ToastAndroid.SHORT);
      return;
    }
    chartList.push(
      {
        isUser: true,
        text: this.state.inputContentText
      }
    );
    this.props.dispatch(fetchRobotResponse(this.state.inputContentText));
    this.refs._textInput.clear();
  }
}

function mapStateToProps(state) {
  const { robotChart } = state;
  return {
    robotChart,
  }
}
export default connect(mapStateToProps)(FeedChartScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 52,
    padding:5
  },

  searchBox: {
    height: 40,
    flexDirection: 'row',
    flex:1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
    borderRadius: 5,  // 设置圆角边
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:10,
  },

  inputText: {
    flex:1,
    backgroundColor: 'transparent',
    fontSize: 20,
    marginLeft:5
  },

  sendBtn: {
    alignItems: 'center',
    backgroundColor: '#FF88C2',
    padding: 10,
    borderRadius:5,
    height:40,
  },

  bottomBtnText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});