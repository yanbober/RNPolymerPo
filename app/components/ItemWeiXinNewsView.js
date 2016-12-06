/**
 * 微信精选Item View
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

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
        <View style={styles.itemContainer}>
          <Image style={styles.itemIcon} 
            source={{uri: (this.props.bean.firstImg=='' ? 'defaults' : this.props.bean.firstImg)}}/>
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle} 
              numberOfLines={4}>
              {this.props.bean.title}
            </Text>
            <Text style={styles.fromText} 
              numberOfLines={1}>
              {this.props.bean.source}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    height: 113,
    flexDirection: 'row'
  },

  itemIcon: {
    width: 163,
    height: 113,
    backgroundColor: '#e9e9e9',
  },

  itemDescription: {
    flex: 1,
    marginLeft: 8,
    marginTop: 12,
    marginRight: 8,
    marginBottom: 8,
  },

  itemTitle: {
    flex: 5,
    color: '#535252',
    fontSize: 14,
  },

  fromText: {
    flex: 1,
    fontSize: 9,
    color: '#ff9800',
    alignSelf: 'flex-end',
  },
});
