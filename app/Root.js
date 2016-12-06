/**
 * React Native入口主容器
 * 核心知识点：React Native Redux框架初始化及统管入口
 */
'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './ConfigureStore';
import NavigatorRoot from './containers/NavigatorRoot';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
               <NavigatorRoot/>
            </Provider>
		   )
	}
}