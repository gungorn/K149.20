import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Stack1} from './stack/Stack1';
import {Stack2} from './stack/Stack2';

const Navigation = props => {
  const {stack1, stack2} = props;

  return (
    <View style={{flex: 1, borderWidth: 2, borderColor: 'red'}}>
      <NavigationContainer>
        {stack1 && <Stack1 />}
        {stack2 && <Stack2 />}
      </NavigationContainer>
    </View>
  );
};

export {Navigation};
