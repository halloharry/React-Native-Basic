import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Input} from 'react-native-elements/dist/input/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
    };
  }

  handleClick = () => {
    const {username, password} = this.state;
    console.warn('login');
    if (username != 'admin')
      return this.setState({
        errorUsername: 'salah usernam',
      });
    this.props.navigation.navigate('Contact');
    // return this.props.login({username});
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../foto/logo2.jpg')}
            style={styles.foto}>
            <Text style={styles.judul}>LOGIN PAGE</Text>
            <Input
              style={styles.input}
              placeholder="USERNAME"
              onChangeText={value => this.setState({username: value})}
            />
            <Input
              style={styles.input}
              placeholder="PASSWORD"
              secureTextEntry
              onChangeText={value => this.setState({password: value})}
            />
            <View style={styles.contentBtn}>
              <TouchableOpacity
                style={styles.btnCon}
                onPress={this.handleClick}>
                <Text style={styles.btn}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCon}>
                <Text
                  style={styles.btn}
                  onPress={() => alert('ceritanya oindah page')}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </>
    );
  }
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

  judul: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'DancingScript-Bold',
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 50,
  },
  contentBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  btnCon: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: 15,
    width: '45%',
    borderRadius: 50,
  },
  btn: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default Login;

// import * as React from 'react';
// import {View, Text} from 'react-native';

// export default function Login({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text
//         onPress={() => alert('This is the "Login" screen.')}
//         style={{fontSize: 26, fontWeight: 'bold'}}>
//         Details Screen
//       </Text>
//     </View>
//   );
// }
