import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens/Login';
import React from 'react';

export type AuthNavigatorParamList = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
