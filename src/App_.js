import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import {Screen1, Screen2, Screen3 as ekran3} from './screens';
import * as screens from './screens';

const Stack1 = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();

const App = props => {
  const {} = props;

  const [screen, setScreen] = useState('Screen1');

  const buttonStyle = {
    backgroundColor: 'orange',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={{flex: 1, borderWidth: 2, borderColor: 'red'}}>
      <View>
        <TouchableOpacity
          onPress={() => setScreen('Screen1')}
          style={buttonStyle}>
          <Text>Screen 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('Screen2')}
          style={buttonStyle}>
          <Text>Screen 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('Screen3')}
          style={buttonStyle}>
          <Text>Screen 3</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '50%', height: '50%'}}>
        <NavigationContainer>
          <Stack1.Navigator screenOptions={{headerShown: false}}>
            <Stack1.Screen name="Screen1" component={screens.Screen1} />
            <Stack1.Screen name="Screen2" component={screens.Screen2} />
            <Stack1.Screen name="Screen3" component={screens.Screen3} />
          </Stack1.Navigator>
        </NavigationContainer>
      </View>

      <View style={{width: '50%', height: '50%'}}>
        <NavigationContainer>
          <Stack1.Navigator screenOptions={{headerShown: false}}>
            <Stack1.Screen name="Screen1" component={screens[screen]} />
          </Stack1.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export {App};
