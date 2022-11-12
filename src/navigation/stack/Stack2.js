import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as screens from '../../screens';

const Stack = createNativeStackNavigator();

const Stack2 = props => {
  return (
    <Stack.Navigator
      initialRouteName="Screen3"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen4" component={screens.Screen4} />
      <Stack.Screen name="Screen5" component={screens.Screen5} />
    </Stack.Navigator>
  );
};

export {Stack2};
