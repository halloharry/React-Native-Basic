import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    console.log('Params:', this.props.route.params);
  }

  handleClick = () => {
    this.props.navigation.navigate('ContactDetail', item);
  };

  render() {
    const {name, status, image, phone} = this.props.route.params;
    // console.log(contactList.name);
    contactList = {};

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={{uri: `${image}`}} />
            <Text style={styles.username}>{name}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.box}>
            <Text style={styles.title}>Phone : {phone}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Status : {status}</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
              <Text style={styles.btn} onPress={this.props.logoutHandler}>
                <Icon name="logout" />
              </Text>
              <Text style={styles.btn} onPress={this.props.logoutHandler}>
                <Icon name="edit" />
              </Text>
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
    width: 70,
    marginLeft: 'auto',
    padding: 5,
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
    color: 'black',
    fontSize: 28,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
