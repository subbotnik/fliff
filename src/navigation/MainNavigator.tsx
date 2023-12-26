import {COLORS} from '@constants/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '@screens/Details';
import {HomeScreen} from '@screens/Home';
import {SettingsScreen} from '@screens/Settings';
import React from 'react';

import {HomeTabIcon} from './components/HomeTabIcon';
import {SettingsTabIcon} from './components/SettingsTabIcon';

export type MainNavigatorParamList = {
  Main: TabNavigatorParamList;
  Details: {photoId: string};
};

export type TabNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HomeTabIcon,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: SettingsTabIcon,
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
