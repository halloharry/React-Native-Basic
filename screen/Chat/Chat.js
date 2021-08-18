import axios from 'axios';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ListItem, Button, Avatar} from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import {Icon} from 'react-native-elements';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // calls: [
      //   {
      //     id: 1,
      //     name: 'Mark Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'MD',
      //   },
      //   {
      //     id: 2,
      //     name: 'Clark Man',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      //   },
      //   {
      //     id: 3,
      //     name: 'Jaden Boor',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      //   },
      //   {
      //     id: 4,
      //     name: 'Srick Tree',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      //   },
      //   {
      //     id: 5,
      //     name: 'Erick Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      //   },
      //   {
      //     id: 6,
      //     name: 'Francis Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      //   },
      //   {
      //     id: 8,
      //     name: 'Matilde Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      //   },
      //   {
      //     id: 9,
      //     name: 'John Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      //   },
      //   {
      //     id: 10,
      //     name: 'Fermod Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      //   },
      //   {
      //     id: 11,
      //     name: 'Danny Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      //   },
      //   {
      //     id: 12,
      //     name: 'Erick Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      //   },
      //   {
      //     id: 13,
      //     name: 'Francis Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      //   },
      //   {
      //     id: 14,
      //     name: 'Matilde Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      //   },
      //   {
      //     id: 15,
      //     name: 'John Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      //   },
      //   {
      //     id: 16,
      //     name: 'Fermod Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      //   },
      //   {
      //     id: 17,
      //     name: 'Danny Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      //   },
      //   {
      //     id: 18,
      //     name: 'Erick Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      //   },
      //   {
      //     id: 19,
      //     name: 'Francis Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      //   },
      //   {
      //     id: 20,
      //     name: 'Matilde Doe',
      //     status: 'active',
      //     HP: 99454594545459,
      //     image: 'MD',
      //   },
      // ],
      users: [],
      refresh: false,
      limit: 90,
      page: 1,
      id: '',
    };
  }

  // fetching data from fake api
  getData = (page = 1) => {
    console.log('page:', page);
    // this.setState({
    //   refresh: true,
    // });
    const {limit} = this.state;
    axios
      .get(`http://192.168.43.49:3000/users?_limit=${limit}&_page=${page}`)
      .then(res => {
        const users = res.data;
        this.setState({
          users: users,
          page,
          refresh: false,
        });
      });
  };

  delete = id => {
    let copyUser = this.state.users;

    let index = copyUser.findIndex(item => item.id === id);
    copyUser.splice(index, 1);

    this.setState(() => ({
      users: copyUser,
    }));
    console.log('delktewwss', id);
  };

  sendDataUser = item => {
    this.props.navigation.navigate('ContactDetail', item);
  };

  addNew = item => {
    this.props.navigation.navigate('AddNew');
  };

  renderItem = ({item}) => {
    return (
      <ListItem.Swipeable
        onPress={() => {
          this.sendDataUser(item);
        }}
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
            // onPress={() => console.log(item)}
            onPress={() => this.delete(item.id)}
          />
        }>
        <ListItem.Content>
          <View style={styles.row}>
            <Avatar
              rounded
              source={{uri: item.image}}
              style={styles.pic}
              title={item.name.substr(0, 1)}
              titleStyle={{color: 'red'}}
            />
            <View>
              <View style={styles.nameContainer}>
                <ListItem.Title
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.name}
                </ListItem.Title>
                <ListItem.Title style={styles.mblTxt}>Mobile</ListItem.Title>
              </View>
              <View style={styles.msgContainer}>
                <ListItem.Subtitle style={styles.msgTxt}>
                  {item.email}
                </ListItem.Subtitle>
              </View>
            </View>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    // console.log(this.state.users);
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.users}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderItem}
          onRefresh={() => this.getData(1)}
          refreshing={this.state.refresh}
          onEndReached={() => this.getData(this.state.page + 1)}
          onEndReachedThreshold={0.6}
        />
        <TouchableOpacity style={styles.row}>
          <Text style={styles.nameTxt} onPress={this.props.logoutHandler}>
            <Icon name="logout" />
          </Text>
          <Text style={styles.nameTxt} onPress={this.addNew}>
            <Icon name="rowing" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
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
