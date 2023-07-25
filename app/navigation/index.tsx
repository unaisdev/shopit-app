import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/settings';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

export type MainTabParamList = {
  Home: undefined;
  Settings: { itemId: number };
};

export type RootNavigationProp = NavigationProp<MainTabParamList>;

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<MainTabParamList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
