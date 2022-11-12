import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as screens from '../../screens';

const Stack = createNativeStackNavigator();

const beforeLogin = true;

const Stack1 = props => {
  return (
    <Stack.Navigator
      initialRouteName={beforeLogin ? 'Screen1' : 'Screen3'}
      screenOptions={{headerShown: false}}>
      {beforeLogin && (
        <Stack.Screen name="Screen1" component={screens.Screen1} />
      )}
      {beforeLogin && (
        <Stack.Screen name="Screen2" component={screens.Screen2} />
      )}
      <Stack.Screen name="Screen3" component={screens.Screen3} />
    </Stack.Navigator>
  );
};

export {Stack1};
