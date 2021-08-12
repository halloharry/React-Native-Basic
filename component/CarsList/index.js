import React from 'react';
import styles from './style';
import {View, FlatList, Dimensions} from 'react-native';
import cars from './cars';
import Caritem from '../CarItem';

const CarList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <Caritem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default CarList;
