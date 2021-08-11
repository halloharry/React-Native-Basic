import React from 'react';
import styles from './style';
import {View, FlatList} from 'react-native';
import cars from './cars';
import Caritem from '../CarItem';

const CarList = props => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={({item}) => <Caritem car={item} />} />
    </View>
  );
};
export default CarList;
