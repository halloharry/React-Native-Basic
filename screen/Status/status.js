import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const MyCard = () => {
  return (
    <TouchableOpacity>
      <Card style={{elevation: 0, backgroundColor: '#1f211f'}}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '14%'}}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 50,
                width: 50,
                marginTop: 5,
                marginLeft: 5,
                borderRadius: 50,
              }}>
              <Image
                source={{
                  uri: 'https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/195696675_1337962656585441_5451894319572597814_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ze8fcrq2OycAX-GCN5K&_nc_ht=scontent.fdac27-1.fna&oh=1b5de89b4e223892f6c53ec1383301be&oe=60DC1E8A',
                }}
                style={{height: 50, width: 50, borderRadius: 50}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: '#8f969e',
              borderBottomWidth: 0.25,
              marginBottom: 30,
              width: '84%',
              marginLeft: 10,
              padding: 7,
            }}>
            <View>
              <Text
                style={{color: '#ccd2d9', fontWeight: 'bold', fontSize: 18}}>
                Maherab Hossain
              </Text>
              <Paragraph style={{color: '#8f969e'}}>Ki obostha!</Paragraph>
            </View>
            <View>
              <Text style={{color: '#8f969e', marginTop: 10, right: 15}}>
                1/2/7
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default MyCard;
