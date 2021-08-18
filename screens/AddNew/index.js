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
      name: '',
      image: '',
      phone: '',
      id: '',
    };
  }

  AddNew = newContact => {
    // console.log('data baru', newContact);
    console.log('jggj', newList);
    console.log('jggsasaasj', this.state.name);
    let newList = {
      name: this.state.name,
      image: this.state.image,
      phone: this.state.phone,
    };
    let copyWorker = newList;
    newContact.id = copyWorker.length + 1;

    copyWorker.push(newContact);

    this.props.navigation.navigate('Contact', newContact);
  };

  back = () => {
    this.props.navigation.navigate('Contact');
  };

  render() {
    console.log('namaaaa', this.state.name);
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../foto/logo2.jpg')}
            style={styles.foto}>
            <Text style={styles.judul}>ADD NEW CONTACT</Text>
            <Input
              style={styles.input}
              placeholder="NAME"
              //   errorMessage={this.state.errorUsername}
              onChangeText={value => this.setState({name: value})}
            />
            <Input
              style={styles.input}
              placeholder="PHONE"
              onChangeText={value => this.setState({phone: value})}
            />
            <Input
              style={styles.input}
              placeholder="INITIAL"
              //   secureTextEntry
              onChangeText={value => this.setState({image: value})}
            />
            <View style={styles.contentBtn}>
              <TouchableOpacity style={styles.btnCon} onPress={this.AddNew}>
                <Text style={styles.btn}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCon}>
                <Text style={styles.btn} onPress={this.back}>
                  Back
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
