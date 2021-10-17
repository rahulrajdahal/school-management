import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LockedoutScreen} from './src/screens/auth/locked';
import {LoginScreen} from './src/screens/auth/login';
import {ForgotPasswordScreen} from './src/screens/auth/login/forgot';
import {ResetPasswordScreen} from './src/screens/auth/reset';
import {WelcomebackScreen} from './src/screens/auth/welcome';
import {DrawerNavigation} from './src/navigations/drawer';
import * as ROUTES from './src/constants/routes';
import {BottomNavigation} from './src/navigations/bottom';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, border: 'transparent'},
};

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={ROUTES.ForgotPasswordScreen}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name={ROUTES.ResetPasswordScreen}
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name={ROUTES.WelcomebackScreen}
          component={WelcomebackScreen}
        />
        <Stack.Screen
          name={ROUTES.LockedoutScreen}
          component={LockedoutScreen}
        />
        <Stack.Screen
          name={ROUTES.DrawerNavigation}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name={ROUTES.BottomNavigation}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
