import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {LoginScreen} from './src/screens/auth/login';
import {ForgotPasswordScreen} from './src/screens/auth/login/forgot';
import {ResetPasswordScreen} from './src/screens/auth/Reset';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
