import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

class ApiFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      email: '',
      first_name: '',
      last_name: '',
    };
  }

  //   getData = () => {
  //     fetch('https://reqres.in/api/users/2')
  //       .then(res => res.json())
  //       .then(json => console.log(json));
  //   };

  render() {
    return (
      <View>
        <Text>CALL API</Text>
        <Text>RESPONSE GET DATA</Text>
        <Text>FIRST NAME LAST NAME</Text>
        <Text>EMAIL</Text>
        <Text>RESPONSE POST DATA </Text>
      </View>
    );
  }
}

export default ApiFetch;
