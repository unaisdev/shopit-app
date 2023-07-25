import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation';

const Settings = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>(); // Get the route object using useRoute hook

  console.log(route.params.itemId);

  return (
    <View>
      <Text>Setings</Text>
    </View>
  );
};

export default Settings;
