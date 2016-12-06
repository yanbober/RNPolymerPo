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
    StyleSheet,
    ToolbarAndroid,
    PropTypes,
    View,
    StatusBar,
} from 'react-native';

export default class ActionBar extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        icon: React.PropTypes.number,
        onIconClicked: React.PropTypes.func,
        actions: React.PropTypes.array,
        onActionSelected: React.PropTypes.func,
    };

    static get defaultProps() {
        return {
            title: '标题',
            icon: require('./../res/ic_arrow_back_white_24dp.png'),
            onIconClicked: undefined,
            actions: [],
            onActionSelected: undefined,
        };
    }

    render() {
        return (
            <View>
                <StatusBar  backgroundColor='#e64a19'
                    hidden={false}/>
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={this.props.icon}
                    onIconClicked={this.props.onIconClicked}
                    actions={this.props.actions}
                    onActionSelected={this.props.onActionSelected}
                    titleColor="#ffffff"
                    title={this.props.title} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#ff5722',
        height: 56,
    },
});