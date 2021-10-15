import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LockedoutScreen} from './src/screens/auth/locked';
import {LoginScreen} from './src/screens/auth/login';
import {ForgotPasswordScreen} from './src/screens/auth/login/forgot';
import {ResetPasswordScreen} from './src/screens/auth/reset';
import {WelcomebackScreen} from './src/screens/auth/welcome';
import {DrawerNavigation} from './src/navigations/drawer';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, border: 'transparent'},
};

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen name="WelcomebackScreen" component={WelcomebackScreen} />
        <Stack.Screen name="LockedoutScreen" component={LockedoutScreen} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
