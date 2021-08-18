import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <View style={styles.head}>
          <Text style={styles.headTitle}>WhatsApp</Text>
          <View style={styles.headIcons}>
            <View style={styles.search}>
              <FontAwesome5 name="search" size={15} color="white" />
            </View>
            <View style={styles.ellipsis}>
              <FontAwesome5 name="ellipsis-v" size={15} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.navbar}>
          <FontAwesome5 name="camera" size={15} color="white" />
          <View style={styles.navTexts}>
            <View style={styles.navSelect}>
              <Text style={styles.navActive}>Chats</Text>
            </View>
            <Text style={styles.navText1}>Status</Text>
            <Text style={styles.navText}>Calls</Text>
          </View>
        </View>
      </View>

      <View style={styles.chats}>
        <View style={styles.chat}>
          <View style={styles.pic} />
          <View style={styles.col}>
            <View style={styles.chatTitle}>
              <Text style={{fontWeight: 500}}>Elon Musk</Text>
            </View>
            <View style={styles.message}>
              <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <Text style={{color: 'white', fontSize: 13}}>10</Text>
          </View>
        </View>

        <View style={styles.chat}>
          <View style={styles.pic} />
          <View style={styles.col}>
            <View style={styles.chatTitle}>
              <Text style={{fontWeight: 500}}>Mark Zuckerberg</Text>
            </View>
            <View style={styles.message}>
              <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <Text style={{color: 'white', fontSize: 13}}>2</Text>
          </View>
        </View>

        <View style={styles.chat}>
          <View style={styles.pic} />
          <View style={styles.col}>
            <View style={styles.chatTitle}>
              <Text style={{fontWeight: 500}}>Jeff Bezos</Text>
            </View>
            <View style={styles.message}>
              <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <Text style={{color: 'white', fontSize: 13}}>5</Text>
          </View>
        </View>
      </View>

      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Lucifer25x</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
        <View style={styles.notification}>
          <Text style={{color: 'white', fontSize: 13}}>1</Text>
        </View>
      </View>

      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>

      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>
      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>
      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>
      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>
      <View style={styles.chat}>
        <View style={styles.pic} />
        <View style={styles.col}>
          <View style={styles.chatTitle}>
            <Text style={{fontWeight: 500}}>Elon Musk</Text>
          </View>
          <View style={styles.message}>
            <Text style={{fontSize: 12, fontWeight: 300}}>Message</Text>
          </View>
        </View>
      </View>

      <View style={styles.box}>
        <FontAwesome5 name="envelope" size={15} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#128C7E',
    height: 80,
    display: 'flex',
    flexDirection: 'column',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  headTitle: {
    color: 'white',
    fontWeight: 500,
  },
  headIcons: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  search: {
    marginRight: 10,
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
  navTexts: {
    display: 'flex',
    flexDirection: 'row',
  },
  navSelect: {
    width: 80,
    marginLeft: 30,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  navActive: {
    marginLeft: 0,
    color: 'white',
    paddingBottom: 9,
  },
  navText1: {
    marginLeft: 30,
    color: '#ccc',
  },
  navText: {
    marginLeft: 50,
    color: '#ccc',
  },
  chat: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  pic: {
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
  },
  col: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  notification: {
    width: 20,
    height: 20,
    backgroundColor: '#25D366',
    borderRadius: 20,
    textAlign: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  box: {
    position: 'fixed',
    padding: 10,
    backgroundColor: '#25D366',
    borderRadius: 20,
    bottom: 20,
    right: 10,
  },
});
