import * as React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import Contacts from './screens/Contact';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactDetail from './screens/ContactDetail';
import {Button} from 'react-native';
// import ApiFetch from './screens/API';
// import ListFetch from './screens/UserList';
import MainContainer from './Navigation/MainContainer';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
function ContactList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact List</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="MainApp" component={MainContainer} />
    //     {/* <Stack.Screen name="ApiFetch" component={ApiFetch} /> */}
    //     <Stack.Screen name="ContactList" component={ContactList} />
    //     <Stack.Screen name="Contact" component={Contacts} />
    //     <Stack.Screen name="ContactDetail" component={ContactDetail} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MainContainer></MainContainer>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  foto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default App;
