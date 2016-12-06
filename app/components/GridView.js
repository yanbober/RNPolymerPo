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