import {AuthNavigator} from '@navigation/AuthNavigator';
import {MainNavigator, MainNavigatorParamList} from '@navigation/MainNavigator';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {isLoggedInSelector} from '@store/modules/Auth/selectors';
import React from 'react';
import {useSelector} from 'react-redux';

export const navigationRef =
  createNavigationContainerRef<MainNavigatorParamList>();

export function Router() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
