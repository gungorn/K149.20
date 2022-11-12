import React from 'react';
import {View, Text} from 'react-native';
import {Buttons} from '../../components';
import {MainTabs} from '../../navigation/tabs/MainTabs';

const Screen2 = props => {
  const {navigation, route} = props;
  console.log('Screen2', navigation.getState().routes);
  console.log('Screen2', route);

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{fontWeight: 'bold', fontSize: 24}}>
        Screen2 - {route.params.test}
      </Text>
      {route.params.TestC()} */}
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Screen2</Text>
      <Buttons navigation={navigation} />

      <View style={{flex: 0.8, width: '80%'}}>
        <MainTabs />
      </View>

    </View>
  );
};

export {Screen2};
