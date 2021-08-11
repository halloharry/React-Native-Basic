import React from 'react';
import styles from './style';
import StyleButton from '../StyleButton';
import {View, Text, ImageBackground} from 'react-native';

const Caritem = props => {
  const {name, tagline, taglineLink, img} = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={img} style={styles.img} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subLink}>{taglineLink}</Text>
        </Text>
      </View>

      <View style={styles.btnCon}>
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
    </View>
  );
};
export default Caritem;
