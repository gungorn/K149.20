import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../core/Button';

const Buttons = props => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 8}}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <Button screenName="Screen1" />
      <Button screenName="Screen2" />
      <Button screenName="Screen3" />
      <Button screenName="Screen4" />
      <Button screenName="Screen5" />
    </View>
  );
};

export {Buttons};
