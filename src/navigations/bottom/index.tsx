import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/home';
import {
  CameraIcon,
  DiceIcon,
  DiscoverIcon,
  HomeIcon,
  ListCheckIcon,
  NotificationIcon,
  ProfileIcon,
  QRIcon,
  StarFillIcon,
  TachometerIcon,
} from '../../assets/icons';
import {Explore} from '../../screens/explore';
import {Notifications} from '../../screens/notifications';
import {Profile} from '../../screens/profile';
import {QrScanner} from '../../screens/qrscanner';
import {HomeNavigation} from '../home';
import * as ROUTES from '../../constants/routes';
import {ClassScreen} from '../../screens/home/schedules/class';
import {SchedulesScreen} from '../../screens/home/schedules';
import styled from 'styled-components';
import {AttendanceScreen} from '../../screens/home/attendance';
import {RandomizerScreen} from '../../screens/home/randomizer';
import {DeliveryreporthistoryScreen} from '../../screens/home/delivery-report-history';
import {CameraScreen} from '../../screens/home/camera';
import {SchedulesNavigation} from '../schedules';

const ActiveContainer = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background: #2051e5;
  border-radius: 12px;

  align-items: center;
  justify-content: center;
`;

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      height: 88,
      backgroundColor: '#FFFFFF',
      paddingTop: 16,
      paddingBottom: 24,
    },
  };

  const [random, setRandom] = useState(Math.floor(Math.random() * 8 + 1));

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.SchedulesScreen}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={ROUTES.SchedulesNavigation}
        component={SchedulesNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ActiveContainer>
                <TachometerIcon style={{color: '#F8FAFC'}} />
              </ActiveContainer>
            ) : (
              <TachometerIcon style={{color: '#91A4B7'}} />
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.AttendanceScreen}
        component={AttendanceScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ActiveContainer>
                <ListCheckIcon style={{color: '#F8FAFC'}} />
              </ActiveContainer>
            ) : (
              <ListCheckIcon style={{color: '#91A4B7'}} />
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.RandomizerScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ActiveContainer>
                <DiceIcon style={{color: '#F8FAFC'}} />
              </ActiveContainer>
            ) : (
              <DiceIcon
                onPress={() => setRandom(Math.floor(Math.random() * 8 + 1))}
                style={{color: '#91A4B7'}}
              />
            ),
        }}>
        {() => <RandomizerScreen random={random} />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.DeliveryreporthistoryScreen}
        component={DeliveryreporthistoryScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ActiveContainer>
                <StarFillIcon style={{color: '#F8FAFC'}} />
              </ActiveContainer>
            ) : (
              <StarFillIcon style={{color: '#91A4B7'}} />
            ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CameraScreen}
        component={CameraScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ActiveContainer>
                <CameraIcon style={{color: '#F8FAFC'}} />
              </ActiveContainer>
            ) : (
              <CameraIcon style={{color: '#91A4B7'}} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
