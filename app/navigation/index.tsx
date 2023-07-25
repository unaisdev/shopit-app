import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/settings';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Settings: { itemId: number };
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Tabs = createBottomTabNavigator<MainTabParamList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
