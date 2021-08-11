import React from 'react';
import styles from './style';
import {View, Text, Pressable} from 'react-native';

const StyleButton = props => {
  //   const type = props.type;
  //   const content = props.content;
  //   const onPress = props.onPress;

  const {type, content, onPress} = props;

  const backgroundColor = type === 'primary' ? 'grey' : 'white';
  const textColor = type === 'primary' ? 'white' : 'grey';

  //   console.warn(type);
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default StyleButton;
