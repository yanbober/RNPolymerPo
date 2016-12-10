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
  StyleSheet,
} from 'react-native';
/**
 * IM 对话机器人聊天Item View
 */
export default class ItemIMChartView extends Component {
  static propTypes = {
      bean: React.PropTypes.object.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={this.props.bean.isUser == true ? null : require('./../res/customer_service.png')}
          style={this.props.bean.isUser == true ? null : styles.robotImg}
        />
        <View style={this.props.bean.isUser == true ? styles.userContentContainer : styles.robotContentContainer}>
          <Text style={ styles.contentText }>
              {this.props.bean.text}
          </Text>
        </View>
        <Image
          source={this.props.bean.isUser == true ? require('./../res/icon_auther.jpg') : null}
          style={this.props.bean.isUser ==true ? styles.userImg : null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  },

  robotImg: {
    height: 40,
    width: 40,
    marginLeft:10,
    marginBottom:10
  },

  userImg: {
    height: 40,
    width: 40,
    marginRight:10,
    marginBottom:10
  },

  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  robotContentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c8e6c9',
    flexDirection: 'row',
    padding: 10,
    borderRadius:10,
    marginLeft:5,
    marginRight:55,
    marginBottom:10
  },

  userContentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b2ebf2',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius:10,
    marginLeft:55,
    marginRight:5,
    marginBottom:10
  },
});
