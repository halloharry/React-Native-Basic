import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

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

  Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={loginScreen}
            option={{headerShown: false}}
            children={props => (
              <Login {...props} loginHandler={this.loginHandler} />
            )}></Stack.Screen>
          <Stack.Screen
            name="login"
            component={loginScreen}
            option={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  render() {
    return (
      <>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor="green" />
          <View style={styles.container}>
            <Navigation />
          </View>
        </PaperProvider>
      </>
    );
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
