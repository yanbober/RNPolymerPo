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
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

let {height, width} = Dimensions.get('window');

export default class ItemWeiXinNewsView extends Component {
  static propTypes = {
      bean: React.PropTypes.object.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={this.props.itemClicked}>
        <View style={Styles.templateItemContainer}>
          <Image style={Styles.templateItemIcon} 
            source={{uri: this.props.bean.picUrl}}/>
          <View style={Styles.templateItemDescription}>
            <View style={Styles.templateItemRow1}>
              <Text style={Styles.templateItemTitle} 
                  numberOfLines={1}>
                  {this.props.bean.title}
              </Text>
            </View>
            <View style={Styles.templateItemRow2Container}>
              <Text style={Styles.templateItemTitle} 
                  numberOfLines={1}>
                  {this.props.bean.description} {this.props.bean.ctime}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

const Styles = StyleSheet.create({
  templateItemContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    width: 164,
    marginLeft: (width - 164 * 2) / 4, //(屏幕宽度-两个item宽度)/4=边缘margin
    marginRight: (width - 164 * 2) / 4,
  },

  templateItemIcon: {
    width: 163.5,
    height: 113,
    backgroundColor: '#e9e9e9',
  },

  templateItemDescription: {
    flex: 1,
    marginLeft: 8,
    marginTop: 12,
    marginRight: 8,
    marginBottom: 8,
  },

  templateItemRow1: {
    flexDirection: 'row',
    padding: 0,
  },

  templateItemRow2Container: {
    padding: 0,
    marginTop: 10,
  },

  templateItemRowIcon: {
    width: 12,
    height: 12,
  },

  templateItemTitle: {
    marginTop: -4,
    marginLeft: 5,
    color: '#535252',
    fontSize: 14,
    width: 135,
  },

  priceContainer: {
    flexDirection: 'row',
    padding: 0,
  },

  priceFreeContainer: {
    backgroundColor: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    borderColor: '#6fd177',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    width: 23,
  },

  priceFreeText: {
    fontSize: 9,
    color: '#6fd177',
  },

  priceDiscount: {
    marginTop: -4,
    marginLeft: 5,
    color: '#535252',
    fontSize: 14,
  },

  priceRealNormal: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
    color: '#9b9b9b',
    fontSize: 10,
  },
});
