import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Buttons} from '../../components';

const Screen1 = props => {
  // const {route} = props;
  // const navigation = useNavigation();
  // console.log('Screen1', navigation.getState().routes);
  // console.log('Screen1', route);

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Screen1</Text>
      <Buttons />
    </View>
  );
};

export {Screen1};
