import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';

class ListFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      refresh: false,
      limit: 15,
      page: 1,
    };
  }

  getData = (page = 1) => {
    console.log('page:', page);
    this.setState({
      refresh: true,
    });
    const {limit} = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`,
    )
      .then(response => response.json())
      .then(users => {
        let newData = [];
        if (page === 1) newData = users;
        else newData = [...this.state.users, ...users];

        this.setState({
          users: newData,
          page,
          refresh: false,
        });
      });
  };

  renderData = ({item}) => {
    return (
      <ListItem
        bottomDivider={true}
        onPress={() => Alert.alert('Warning', item.name + ' clicked!!')}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderData}
          onRefresh={() => this.getData(1)}
          refreshing={this.state.refresh}
          onEndReached={() => this.getData(this.state.page + 1)}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
});

export default ListFetch;
