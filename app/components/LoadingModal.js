/**
 * WPS通用Loading居中转圈等待进度条
 */
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    PropTypes,
    View,
    Modal,
    ActivityIndicator,
} from 'react-native';

export default class LoadingModal extends Component {
    static propTypes = {
        visible: React.PropTypes.bool.isRequired,
    };

    render() {
        return (
            <Modal
                animationType='none'
                transparent={true}
                visible={this.props.visible}>
                <View style={styles.container}>
                    <ActivityIndicator
                        animating ={true}
                        size='large'
                        color='#f5484c'/>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
    },
});