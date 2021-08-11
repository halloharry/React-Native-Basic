import React from 'react';
import styles from './style';
import StyleButton from '../StyleButton';
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

      <StyleButton
        type="primary"
        content={'Custom Order'}
        onPress={() => console.warn('clicked')}
      />

      <StyleButton
        type="secondary"
        content={'Existing inventory'}
        onPress={() => console.warn('clicked')}
      />
    </View>
  );
};
export default Caritem;
