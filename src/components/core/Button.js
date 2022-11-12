import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{backgroundColor: 'red', padding: 8}}
      onPress={() => navigation.navigate(props.screenName)}>
      <Text>{props.screenName}</Text>
    </TouchableOpacity>
  );
};

export {Button};
