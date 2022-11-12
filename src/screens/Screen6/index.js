import React from 'react';
import {View, Text} from 'react-native';

const Screen6 = props => {
  const {} = props;

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Screen6</Text>
    </View>
  );
};

export {Screen6};
