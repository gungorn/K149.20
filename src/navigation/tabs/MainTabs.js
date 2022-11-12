import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import * as screens from '../../screens';

const Tabs = createMaterialBottomTabNavigator();

const MainTabs = props => {
  return (
    <View style={{width: '100%', flex: 1}}>
      <Tabs.Navigator>
        <Tabs.Screen name="Screen3" component={screens.Screen3} />
        <Tabs.Screen name="Screen4" component={screens.Screen4} />
        <Tabs.Screen name="Screen5" component={screens.Screen5} />
      </Tabs.Navigator>
    </View>
  );
};

export {MainTabs};
