import React, {Component} from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import ContactDetail from '../ContactDetail';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: 'Mark Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'MD',
        },
        {
          id: 2,
          name: 'Clark Man',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 3,
          name: 'Jaden Boor',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
          id: 4,
          name: 'Srick Tree',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 5,
          name: 'Erick Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
          id: 6,
          name: 'Francis Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
          id: 8,
          name: 'Matilde Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 9,
          name: 'John Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 10,
          name: 'Fermod Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 11,
          name: 'Danny Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 12,
          name: 'Erick Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
          id: 13,
          name: 'Francis Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
          id: 14,
          name: 'Matilde Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 15,
          name: 'John Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 16,
          name: 'Fermod Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 17,
          name: 'Danny Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 18,
          name: 'Erick Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
          id: 19,
          name: 'Francis Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
          id: 20,
          name: 'Matilde Doe',
          status: 'active',
          HP: 99454594545459,
          image: 'M',
        },
      ],
      status: false,
      contactDetail: {},
    };
  }

  statusHandle = () => {
    this.setState({contactDetail: false});
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          //   Alert.alert(l.nama,"asd");
          this.setState({
            status: true,
            contactDetail: item,
          });
        }}>
        <View style={styles.row}>
          <Image source={{uri: item.image}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.mblTxt}>Mobile</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.state.status) {
      return (
        <ContactDetail
          contactList={this.state.contactDetail}
          status={this.statusHandle}
          renderItem={this.renderItem}
        />
      );
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
        <TouchableOpacity>
          <Text onPress={() => console.warn('joko')}>PENCET INI</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
