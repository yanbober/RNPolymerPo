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
} from 'react-native';
import { connect } from 'react-redux';
import ActionBar from './../components/ActionBar';
import { fetchHomeTopBannerList } from '../actions/HomePageAction';
import NavigatorRoute from './../common/NavigatorRoute';

//import Swiper from 'react-native-swiper';
/**
 * 主界面
 */
class HomePage extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

    componentDidMount() {
        this.props.dispatch(fetchHomeTopBannerList());		
    }
/**
 
<Swiper
                height={200}
                index={0}
                autoplay={homeTopBanner.bannerList.length > 1}
                autoplayTimeout={3}
                horizontal={true}
                paginationStyle={{bottom: 5, left: null, right: 10,}}>
                {this._renderSwiperItemView.bind(this, homeTopBanner.bannerList)}
            </Swiper>

 */
  render() {
      const { homeTopBanner } = this.props;
      return (
          <View style={styles.container}>
              <ActionBar
                title={"RN聚合宝"}
                actions={[{title: 'Mine', icon: require('./../res/icon_my_template.png'), show: 'always'}]}
                onIconClicked={this._onIconClicked.bind(this)}
              />
            
          </View>
      );
  }

  _renderSwiperItemView(bannerList) {
    let bannerItems = [];
    if (bannerList) {
        for (let index=0; index<bannerList.length; index++) {
            let bannerBean = bannerList[index];
            if (bannerBean) {
                bannerItems.push(
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={this._bannerPressed.bind(null, bannerBean)}>
                        <Image style={Styles.bannerImg}
                        source={{uri: bannerBean.img_url}}/>
                    </TouchableOpacity>
                );
            }
        }
    }
    return bannerItems;
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
export default connect(mapStateToProps)(HomePage);

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