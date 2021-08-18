import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chat from './Chat';
import Call from './Call';
import Header from '../component/Header';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default TopTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // style={{width:'100%'}}

        tabBarOptions={{
          labelStyle: {fontSize: 12, fontWeight: 'bold'},
          // tabStyle: { width: 120 },
          style: {backgroundColor: '#17212d'},
          activeTintColor: '#34B7F1',
          inactiveTintColor: '#8f969e',
          indicatorStyle: {backgroundColor: '#34B7F1'},
        }}>
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Status" component={Call} />
        <Tab.Screen name="Calls" component={Call} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
