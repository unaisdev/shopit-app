import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {RootNavigationProp} from '../../navigation';
import Service from '../../services';
import {useQuery} from '@tanstack/react-query';
import {getItemsList} from '../../services/list';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const {data} = useQuery({queryKey: ['list'], queryFn: getItemsList});

  return (
    <View>
      <Text>asdasd</Text>
      <Button
        title="asdasd"
        onPress={() => navigation.navigate('Settings', {itemId: 123})}
      />
    </View>
  );
};

export default Home;
