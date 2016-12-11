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
import { fetchRobotResponse, resetRobotResponseState } from '../actions/FeedChartAction';
import ItemIMChartView from './../components/ItemIMChartView';
/**
 * 反馈聊天界面（接入图灵机器人部分功能）
 * 核心知识点：React Native 混合布局及交互的处理技巧
 *            Style属性动态修改等
 *            使用ListView高级属性实现需求
 *            大量数据优化state状态存储，只用来做标记思维
 */
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
    this.chartList = [];
    this.state = {
      inputContentText: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchRobotResponse('你是谁？'));
  }

  componentWillUnmount() {
    this.props.dispatch(resetRobotResponseState());
    this.chartList.length = 0;
  }

  render() {
    const { robotChart } = this.props;
    if (robotChart.data != undefined && robotChart.data.length > 0) {
      this.chartList.push(
        {
          isUser: robotChart.isUser,
          text: robotChart.data
        }
      );
    }

    return (
      <View style={styles.container}>
        <ActionBar
          title={"在线客服意见反馈"}
          onIconClicked={this._onIconClicked.bind(this)} />
        <ListView
          style={{ padding: 5}}
          ref='_listView'
          enableEmptySections={true}
          onLayout={(e)=>{this.listHeight = e.nativeEvent.layout.height;}}
          dataSource={this.dataSource.cloneWithRows(this.chartList)}
          renderRow={(bean)=>{return <ItemIMChartView bean={bean}/>}}
          renderFooter={this._renderFooterView.bind(this)}/>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              ref='_textInput'
              multiline={true}
              maxLength={30}
              placeholder='请输入想对客服说的话'
              placeholderTextColor='#e9e9e9'
              underlineColorAndroid='transparent'
              onChangeText={(text)=>{this.state.inputContentText=text}}
              returnKeyType='done'
              style={styles.inputText}
            />
          </View>
          <TouchableHighlight
            underlayColor={'#aaaaaa'}
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

  _renderFooterView() {
    return <View onLayout={(e)=> {
      this.footerY= e.nativeEvent.layout.y;
      if (this.listHeight && this.footerY &&this.footerY>this.listHeight) {
        var scrollDistance = this.listHeight - this.footerY;
        this.refs._listView.scrollTo({y:-scrollDistance});
      }
    }}/>
  }

  _onIconClicked() {
    NavigatorRoute.navigatorPopBack(this.props.navigator);
  }

  _pressedSendBtn() {
    if(this.state.inputContentText.trim().length <= 0){
      ToastAndroid.show('输入的内容不能为空！', ToastAndroid.SHORT);
      return;
    }
    this.props.dispatch(fetchRobotResponse(this.state.inputContentText));
    this.setState({inputContentText: ''});
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
    backgroundColor: '#f7f7f7',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbdbdb',
    padding:5,
    marginBottom: 0.5,
  },

  inputContainer: {
    flexDirection: 'row',
    flex:1,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5,
  },

  inputText: {
    flex:1,
    backgroundColor: 'transparent',
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },

  sendBtn: {
    alignItems: 'center',
    backgroundColor: '#03a9f4',
    padding: 10,
    borderRadius:5,
    height:40,
  },

  bottomBtnText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});