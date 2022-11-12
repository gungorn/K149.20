import React from 'react';
import {View} from 'react-native';

import {Navigation} from './navigation';

const App = props => {
  const {} = props;

  return (
    <View style={{flex: 1, borderWidth: 2, borderColor: 'red'}}>
      <Navigation stack1 />
    </View>
  );
};

export {App};
