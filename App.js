import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./foto/logo2.jpg')}
          style={styles.foto}>
          <Text style={styles.judul}>LOGIN</Text>
          {/* <Text style={styles.instruction}> GET START</Text> */}
          <TextInput style={styles.input} placeholder="USERNAME" />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry
          />

          <View style={styles.contentBtn}>
            <TouchableOpacity
              style={styles.btnCon}
              onPress={() => alert('ceritanya login berhasil')}>
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
          <TouchableOpacity style={styles.btngoogle}></TouchableOpacity>
        </ImageBackground>
      </View>
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

export default App;
