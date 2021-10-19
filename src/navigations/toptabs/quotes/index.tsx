import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {sizes} from '../../../constants/theme/theme';
import * as ROUTES from '../../../constants/routes';
import {AllQuotesScreen} from '../../../screens/quotes/all';
import {FavoriteQuotesScreen} from '../../../screens/quotes/favorites';
import {CaptionText} from '../../../components/text';

const Tab = createMaterialTopTabNavigator();

export function QuotesTopTab() {
  const screenOptions = {
    tabBarStyle: {
      width: sizes.width,
      elevation: 0,
    },
    tabBarIndicatorStyle: {
      backgroundColor: '#fff',
    },
    tabBarActiveTintColor: '#1C2A3A',
    tabBarInactiveTintColor: '#91A4B7',
    tabBarContentContainerStyle: {
      paddingHorizontal: '20%',
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={ROUTES.AllQuotesScreen}
        component={AllQuotesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <CaptionText color={focused ? '#1C2A3A' : '#91A4B7'}>
              ALL QUOTES
            </CaptionText>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FavoriteQuotesScreen}
        component={FavoriteQuotesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <CaptionText color={focused ? '#1C2A3A' : '#91A4B7'}>
              FAVORITES
            </CaptionText>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
