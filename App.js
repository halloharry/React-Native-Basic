import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Login from './screen/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, ListItem, Icon} from 'react-native-elements';
import Chat from './screen/Chat/Chat';

const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      userLogin: '',
    };
  }

  loginHandler = obj => {
    this.setState({
      userLogin: obj.username,
    });
  };

  logoutHandler = () => {
    this.setState({
      userLogin: '',
    });
  };

  render() {
    const {userLogin} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {userLogin === '' ? (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Login"
                children={props => (
                  <Login {...props} loginHandler={this.loginHandler} />
                )}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Chat"
                children={props => (
                  <Chat {...props} logoutHandler={this.logoutHandler} />
                )}></Stack.Screen>
              {/* <Stack.Screen
                name="ContactDetail"
                children={props => (
                  <ContactDetail
                    {...props}
                    logoutHandler={this.logoutHandler}
                  />
                )}
              />
              <Stack.Screen
                name="AddNew"
                children={props => (
                  <AddNew {...props} logoutHandler={this.logoutHandler} />
                )}
              /> */}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      // <MainContainer />
    );
  }
}

function HomeScreen({navigation}) {
  return (
    <>
      <ListItem.Swipeable
        leftContent={
          <Button
            title="LOGIN"
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
            onPress={() => navigation.navigate('Login')}
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{name: 'delete', color: 'white'}}
            buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
          />
        }>
        <Icon name="add-to-home-screen" />
        <ListItem.Content>
          <ListItem.Title>Hello Swiper</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </>
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
