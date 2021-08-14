import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Contacts from './Contact';

export default class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  handleClick = () => {
    this.setState({
      status: true,
    });
    if (this.state.status) return <Contacts />;
  };

  render() {
    const {contactList} = this.props;
    console.log(contactList.name);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{uri: `${contactList.image}`}}
            />
            <Text style={styles.name}>{contactList.name}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.box}>
            <Text style={styles.title}>Phone Number : {contactList.HP}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Status : {contactList.status}</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={this.handleClick}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FF6347',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginLeft: 4,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

// import * as React from 'react';
// import {View, Text} from 'react-native';

// export default function ContactDetail({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text
//         onPress={() => navigation.navigate('Login')}
//         style={{fontSize: 26, fontWeight: 'bold'}}>
//         Home Screen
//       </Text>
//     </View>
//   );
// }
