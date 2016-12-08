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
  ActivityIndicator,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import ItemWeiXinNewsView from './../components/ItemWeiXinNewsView';
import { fetchNewsListByPage } from '../actions/WeiXinNewsAction';
import NavigatorRoute from './../common/NavigatorRoute';
/**
 * 微信精选列表（上拉分页加载）
 * 核心知识点：上拉分页加载更多的ListView
 * http://apistore.baidu.com/apiworks/servicedetail/632.html
 */
const pageLimit = 10;

class WeiXinNewsPage extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

	componentDidMount() {
	  this.props.dispatch(fetchNewsListByPage(1, pageLimit));		
	}

  render() {
      const { wxNews } = this.props;
      return (
          <View style={styles.container}>
              <ActionBar
                title={"微信精选"}
                actions={[{title: 'Mine', icon: require('./../res/icon_my_template.png'), show: 'always'}]}
                onIconClicked={this._onIconClicked.bind(this)}
              />
              <ListView
                style={styles.listview}
                dataSource={this.dataSource.cloneWithRows(Array.from(wxNews.newsList))}
                renderRow={this._renderListItemView.bind(this)}
                onEndReached={ this._onEndReached.bind(this) }
                renderFooter={ this._renderFooterView.bind(this) }
                initialListSize={1}
              />
          </View>
      );
  }

  _renderListItemView(item) {
    if (item) {
      return (
        <ItemWeiXinNewsView
          key={item.id}
          bean={item}
          itemClicked={this._itemPressed.bind(this, item)}/>
      );
    }
  }

  _renderFooterView() {
    const { wxNews } = this.props;
    if (wxNews.newsList <= 0 || !wxNews.haveMore || !wxNews.isLoadingMore) {
      return null;
    } 
    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator
          animating ={true}
          size='large'
          color='#f5484c'/>
        <Text style={{fontSize: 16}}>正在加载更多...</Text>
      </View>
    );
  }

  _onEndReached() {
    const { wxNews } = this.props;
    if (!wxNews.isLoadingMore) {
      let start = parseInt(wxNews.newsList.length / pageLimit) + 1;
      this.props.dispatch(fetchNewsListByPage(start, pageLimit));
    }
  }

  _itemPressed(wxNewsBean) {
    NavigatorRoute.pushToWebViewScene(this.props.navigator, 'wxNews', wxNewsBean);
  }

  _onIconClicked() {
      NavigatorRoute.navigatorPopBack(this.props.navigator);
  }
}

function mapStateToProps(state) {
  const { wxNews } = state;
  return {
    wxNews,
  }
}
export default connect(mapStateToProps)(WeiXinNewsPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  listview: {
    flex: 1,
    padding: 5,
  },

  footerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});