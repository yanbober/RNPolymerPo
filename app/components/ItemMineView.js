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
  TouchableNativeFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
/**
 * 个人中心Item View
 */
export default class ItemMineView extends Component {
  static propTypes = {
      name: React.PropTypes.string.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.itemContainer}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.props.itemClicked.bind(null)}>
            <View style={styles.pressItemContainer}>
                <Text style={styles.pressItemText}>{this.props.name}</Text>
                <Image source={require('./../res/ic_arrow_right.png')}
                    style={styles.pressItemImg}/>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },

  pressItemContainer: {
    padding: 10,
    justifyContent:'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  pressItemText: {
    fontSize: 16,
  },

  pressItemImg: {
    width: 20,
    height: 20,
  },
});
