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
    Animated,
    PropTypes,
} from 'react-native';
/**
 * 支持设置淡入淡出渐变动画的Image组件
 */
export default class FadeAnimedImage extends Component {
    static propTypes = {
        source: React.PropTypes.string.isRequired,
        inputRange: React.PropTypes.array.isRequired,
        outputRange: React.PropTypes.array.isRequired,
    };

    render() {
        this._animatedValue = new Animated.Value(0);
        let interpolatedColorAnimation = this._animatedValue.interpolate({
            inputRange: this.props.inputRange,
            outputRange: this.props.outputRange
        });

        return (
            <Animated.Image
                onLoadEnd={() => {
                    Animated.timing(this._animatedValue, {
                        toValue: 100,
                        duration: 500
                    }).start();
                }}
                onLoad={this.props.onLoad ? this.props.onLoad : ()=>{}}
                source={{uri: this.props.source}}
                style={[this.props.style, {opacity: interpolatedColorAnimation}]} />
        );
    }
}