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
      isReady: false,
    };
  }

  handleClick = () => {
    const {username} = this.state;
    // console.warn('login');
    if (username === '')
      return this.setState({
        errorUsername: 'salah usernam',
      });
    // this.props.navigation.navigate('ContactList');
    return this.props.loginHandler({username});
  };

  render() {
    const image = {uri: 'https://cloudfront.timesnownews.com/media/waaaa.jpeg'};
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../foto/wa.jpeg')}
            style={styles.foto}>
            <Text style={styles.judul}></Text>
            <Input
              style={styles.input}
              placeholder="USERNAME"
              errorMessage={this.state.errorUsername}
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
    width: '100%',
    paddingTop: 280,
  },

  judul: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'DancingScript-Bold',
  },
  input: {
    width: '70%',
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
    backgroundColor: 'lightgreen',
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
