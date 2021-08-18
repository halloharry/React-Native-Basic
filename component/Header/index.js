import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: '#17212d',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      }}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              color: '#8f969e',
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            WhatsApp
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, marginLeft: '30%'}}>
          <View style={{marginRight: 20}}>
            <Feather name="search" size={20} color="#8f969e" />
          </View>
          <View>
            <Entypo name="dots-three-vertical" size={20} color="#8f969e" />
          </View>
        </View>
      </View>
    </Appbar.Header>
  );
};

export default Header;
