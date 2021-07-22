import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const MenuItem = ({menu, item, handleButton}) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 18, right: 18, left: 18, right: 18}}
      onPress={handleButton}
      style={{flexDirection: 'row'}}>
      {menu && <View style={styles.ball} />}
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
