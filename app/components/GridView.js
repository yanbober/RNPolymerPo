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

import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ListView
} from 'react-native';

const propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
  style: PropTypes.func,
  itemsPerRow: PropTypes.number,
  onEndReached: PropTypes.func,
  renderFooter: PropTypes.func,
};

const GridView = ({
  items,
  renderItem,
  style,
  itemsPerRow,
  onEndReached,
  renderFooter,
  scrollEnabled,
  pageSize
}) => {
  const groupItems = (renderItems, renderItemsPerRow) => {
    const itemsGroups = [];
    let group = [];
    renderItems.forEach((item) => {
      if (group.length === renderItemsPerRow) {
        itemsGroups.push(group);
        group = [item];
      } else {
        group.push(item);
      }
    });
    if (group.length > 0) {
      itemsGroups.push(group);
    }
    return itemsGroups;
  };

  const renderGroup = (group) => {
    let itemViews = group.map((item) => {
      const i = renderItem(item);
      return i;
    });
    return (
      <View style={styles.group}>
        {itemViews}
      </View>
    );
  };

  const groups = groupItems(items, itemsPerRow);

  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  return (
    <ListView
      initialListSize={1}
      dataSource={ds.cloneWithRows(groups)}
      renderRow={renderGroup}
      style={style}
      onEndReached={onEndReached}
      renderFooter={renderFooter}
      scrollEnabled={scrollEnabled}
      pageSize={pageSize | 1}
      enableEmptySections={true}
      onEndReachedThreshold={20}
    />
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

GridView.propTypes = propTypes;

GridView.defaultProps = {
  items: [],
  renderItem: null,
  style: undefined,
  itemsPerRow: 1,
  onEndReached: undefined,
  renderFooter: undefined,
};

export default GridView;