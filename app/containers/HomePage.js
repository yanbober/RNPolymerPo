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
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import { 
  fetchHomeTopBannerList,
  fetchHomeNewsCategoryList,
  fetchWanNianLiInfo,
} from '../actions/HomePageAction';
import NavigatorRoute from './../common/NavigatorRoute';
import Swiper from 'react-native-swiper';
import GridView from './../components/GridView';
/**
 * 主界面
 * 核心知识点：react-native-swiper第三方底部导航栏的使用及封装学习
 *            以源码形式引入的GridView学习
 *            使用React Native Redux框架进行交互封装
 *            Dimensions的灵活使用
 */
const { width, height } = Dimensions.get('window');

class HomePage extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };
  
  componentDidMount() {
    this.props.dispatch(fetchHomeTopBannerList());
    this.props.dispatch(fetchHomeNewsCategoryList());
    this.props.dispatch(fetchWanNianLiInfo());
  }

  render() {
    const { homeTopBanner, homeNewsCategory, homeWanNianLi } = this.props;
    return (
      <View style={styles.container}>
        <ActionBar
          title={"RN聚合宝"}
          actions={[{title: 'Mine', icon: require('./../res/icon_my_template.png'), show: 'always'}]}
          onIconClicked={this._onIconClicked.bind(this)}/>
        <Swiper
          height={150}
          autoplay={true}
          autoplayTimeout={3}
          horizontal={true}
          paginationStyle={{bottom: 5, left: null, right: 10,}}>
          {
            homeTopBanner.bannerList.map((banner, i) => <View key={i} style={{flex: 1}}>
              <TouchableNativeFeedback>
                <Image style={styles.bannerImg} source={{ uri: banner.img_url}} />
              </TouchableNativeFeedback>
            </View>)
          }
        </Swiper>
        <View style={styles.newsCategoryContainer}> 
          <GridView
            items={Array.from(homeNewsCategory.newsCategoryList)}
            itemsPerRow={5}
            renderItem={this._renderNewsCategoryItem.bind(this)}/>
       </View>
       {this._renderWanNianLiInfo(homeWanNianLi.wnlData)}
      </View>
    );
  }

  _renderNewsCategoryItem(category) {
    return (
      <TouchableNativeFeedback
        key={category.key}
        onPress={this._categoryItemPressed.bind(null, category.key)}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.categoryGridItem}>
          <Image style={{width: 32, height: 32,}}
            source={{uri: category.icon_url}}/>
          <Text style={{color: '#898989', fontSize: 12,}}>{category.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  _renderWanNianLiInfo(wanNianLiInfo) {
    if (wanNianLiInfo) {
      return (
        <View style={styles.wanNianLiContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {wanNianLiInfo.date} {wanNianLiInfo.weekday}
            </Text>
            <Text style={styles.dateText}>
              {wanNianLiInfo.lunarYear} {wanNianLiInfo.lunar} ({wanNianLiInfo.animalsYear})
            </Text>
          </View>
          <Text>忌：{wanNianLiInfo.avoid}</Text>
          <Text>宜：{wanNianLiInfo.suit}</Text>
          <Text>{wanNianLiInfo.desc}</Text>
        </View>
      );
    }
  }

  _categoryItemPressed(key) {

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
  const { homeTopBanner, homeNewsCategory, homeWanNianLi } = state;
  return {
    homeTopBanner,
    homeNewsCategory,
    homeWanNianLi,
  }
}
export default connect(mapStateToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  bannerImg: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },

  newsCategoryContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
  },

  categoryGridItem: {
    width: (width - 5 * 2) / 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },

  wanNianLiContainer: {
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    margin: 5,
    padding: 5,
  },

  dateContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },

  dateText: {
    fontSize: 15,
  },
});