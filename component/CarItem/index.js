import React from 'react';
import styles from './style';
import {View, Text, ImageBackground} from 'react-native';

const Caritem = props => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../asset/images/ModelX.jpeg')}
        style={styles.img}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $69,565</Text>
      </View>
    </View>
  );
};
export default Caritem;
