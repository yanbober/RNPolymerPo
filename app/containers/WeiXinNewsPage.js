/**
 * 微信精选列表（上拉分页加载）
 * https://www.juhe.cn/docs/api/id/147
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
      console.log("----------------"+Array.from(wxNews.newsList).length);
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