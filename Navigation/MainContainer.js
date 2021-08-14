import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screen
import Contacts from './screen/Contact';
import ContactDetail from './screen/ContactDetail';
import Login from './screen/Login';

// screen name
const login = 'Login';
const contact = 'Contact';
const contactDetail = 'ContactDetail';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={login}
        screenOption={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === login) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === contact) {
              iconName = focused ? 'list' : 'list-outline';
            }
            // else if (rn === contactDetail) {
            //   iconName = focused ? 'setting' : 'setting-outline';
            // }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={login} component={Login} />
        <Tab.Screen name={contact} component={Contacts} />
        {/* <Tab.Screen name={contactDetail} component={ContactDetail} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
