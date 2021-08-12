import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 30,
    resizeMode: 'contain',
  },
});

export default styles;
