import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import * as ROUTES from '../../constants/routes';
import {SchedulesScreen} from '../../screens/home/schedules';
import {ClassScreen} from '../../screens/home/schedules/class';

const Stack = createStackNavigator();

export function SchedulesNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SchedulesScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SchedulesScreen} component={SchedulesScreen} />
      <Stack.Screen name={ROUTES.ClassScreen} component={ClassScreen} />
    </Stack.Navigator>
  );
}
