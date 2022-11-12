import React from 'react';
import {View, Text} from 'react-native';
import {Buttons} from '../../components';

const Screen4 = props => {
  const {navigation} = props;

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Screen4</Text>
      <Buttons navigation={navigation} />
    </View>
  );
};

export {Screen4};
