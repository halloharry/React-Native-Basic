import React, {Component} from 'react';
// import CarItem from './component/CarItem';
import {View, StyleSheet, StatusBar} from 'react-native';
import CarList from './component/CarsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <CarItem
          name={'Model 3'}
          tagline={'Order Online For'}
          taglineLink={'Touchless Delivery'}
          img={require('./asset/images/Model3.jpeg')}
        /> */}

        <CarList />
        <StatusBar style="auto" />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  carContainer: {
    height: '100%',
    width: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 10,
    color: '#5c5e62',
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
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default App;
