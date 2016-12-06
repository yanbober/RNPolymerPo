/**
 * 主容器界面
 * 核心知识点：使用React Native Redux框架管理
 */
'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import NetUtils from './../utils/NetUtils';
import ActionBar from './../components/ActionBar';
import { connect } from 'react-redux';
import NavigatorRoute from './../common/NavigatorRoute';
import ScrollableTabView , { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import WeiXinNewsPage from './WeiXinNewsPage';
import HomePage from './HomePage';
import MinePage from './MinePage';

class MainScene extends Component {
  static propTypes = {
      navigator: React.PropTypes.object.isRequired,
      route: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {dispatch} = this.props;
  }

  render() {
    const {mainPage} = this.props;
    return (
      <View style={Styles.container}>
        <ScrollableTabView
            tabBarPosition='bottom'
            tabBarUnderlineStyle={{backgroundColor: '#f5484c', height: 2}}
            tabBarBackgroundColor='#ffffff'
            tabBarUnderlineColor='#f5484c'
            tabBarActiveTextColor='#f5484c'
            tabBarInactiveTextColor='#9b9b9b'
            scrollWithoutAnimation={false}
            tabBarTextStyle={{fontSize:14}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar/>}>
            {this._renderBtmTabPage()}
        </ScrollableTabView>
      </View>
    );
  }

  _renderBtmTabPage() {
    let pages = [];
    pages.push(
      <HomePage
        navigator={this.props.navigator}
        route={this.props.route}
        tabLabel={'主界面'}/>
    );
    pages.push(
      <WeiXinNewsPage
        navigator={this.props.navigator}
        route={this.props.route}
        tabLabel={'微信精选'}/>
    );
    pages.push(
      <MinePage
        navigator={this.props.navigator}
        route={this.props.route}
        tabLabel={'个人中心'}/>
    );
    return pages;
  }

//   renderRecommandListItem(recommandBean) {
//     return (
//       <RecommandItemView
//         bean={recommandBean}
//         itemClicked={()=>this._jumpToTemplatePreviewScene(recommandBean)}/>
//     );
//   }

//   renderHeaderView() {
//     const {mainPage} = this.props;
//     if (mainPage.mainConfigs) {
//       return (
//         <View>
//           <MainTopConfigView
//             bean={mainPage.mainConfigs}
//             subjectPressed={this._subjectPressed.bind(this)}
//             categoryPressed={this._categoryPressed.bind(this)}
//             bannerPressed={this._bannerPressed.bind(this)}/>
//             {this.renderRecommandHeaderView(mainPage.mainRecommands)}
//         </View>
//       );
//     }
//   }

//   renderRecommandHeaderView(mainRecommands) {
//     if (mainRecommands && mainRecommands.length > 0) {
//       return (
//         <View style={Styles.recommandHeader}>
//           <Text>Recommanded</Text>
//           <View style={{flex:1}}></View>
//           <TouchableNativeFeedback
//             onPress={this._viewAllRecommandPressed.bind(this)}>
//             <View><Text>More></Text></View>
//           </TouchableNativeFeedback>
//         </View>
//       );
//     }
//   }

//   renderFooterView() {
//     const {mainPage} = this.props;
//     if (mainPage.mainRecommands) {
//       return (
//         <View style={Styles.footerContainer}>
//           <TouchableNativeFeedback
//             onPress={this._viewAllRecommandPressed.bind(this)}
//             background={TouchableNativeFeedback.SelectableBackground()}>
//             <View style={Styles.footerBtn}>
//               <Text style={Styles.footerText}>View All</Text>
//             </View>
//           </TouchableNativeFeedback>
//         </View>
//       );
//     }
//   }

//   _jumpToTemplatePreviewScene(recommandBean) {
//     NavigatorRoute.pushToTemplatePreviewScene(this.props.navigator, recommandBean);
//   }

//   _subjectPressed(subject) {
//     NavigatorRoute.pushToWebViewScene(this.props.navigator, 'subject', subject);
//   }

//   _categoryPressed(category) {
//     const {mainPage} = this.props;
//     NavigatorRoute.pushToTemplateCategoryScene(this.props.navigator, mainPage.mainConfigs.categorys, category.id);
//   }

//   _bannerPressed(banner) {
//     if (banner) {
//       switch(banner.action) {
//         case 'web':
//           NavigatorRoute.pushToWebViewScene(this.props.navigator, 'banner', banner);
//           break;
//         case 'recharge':
//           NavigatorRoute.pushToTemplateChargeScene(this.props.navigator);
//           break;
//       }
//     }
//   }

//   _onIconClicked() {
//     NavigatorRoute.navigatorPopBack(this.props.navigator);
//   }

//   _onActionSelected(position) {
//     if (position == 0) {
//       NavigatorRoute.pushToTemplateMineScene(this.props.navigator);
//     }
//   }

//   _viewAllRecommandPressed() {
//     NavigatorRoute.pushToTemplateRecommandListScene(this.props.navigator);
//   }
}

function mapStateToProps(state) {
  const { mainPage } = state;
  return {
    mainPage,
  }
}
export default connect(mapStateToProps)(MainScene);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  mainListview: {
    flex: 1,
  },

  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },

  footerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 200,
    backgroundColor: '#f5484c',
    borderColor: '#f5484c',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 18,
  },

  footerText: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recommandHeader: {
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  }
});