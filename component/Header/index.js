import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../asset/images/logo.png')}
      />
      <Image
        style={styles.menu}
        source={require('../../asset/images/menu.png')}
      />
    </View>
  );
};

export default Header;
