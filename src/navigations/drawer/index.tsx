import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View} from 'react-native';
import styled, {css} from 'styled-components';

import {
  BookBookmarkIcon,
  CalendarIcon,
  ChalkboardIcon,
  CloseIcon,
  CogIcon,
  ExitOutlinedIcon,
  InfoOutlinedIcon,
  QuestionOutlinedIcon,
  QuoteLeftIcon,
} from '../../assets/icons';
import {user} from '../../assets/images';
import {TextButton} from '../../components/buttons/text';
import {FlexContainer} from '../../components/containers/flex';
import {ScreenContainer} from '../../components/containers/screen';
import {AuthHeader} from '../../components/headers/auth';
import {Body2, Title5} from '../../components/text';
import * as ROUTES from '../../constants/routes';
import {sizes} from '../../constants/theme/theme';
import {ClassScreen} from '../../screens/home/schedules/class';
import {SchedulesScreen} from '../../screens/home/schedules';
import {BottomNavigation} from '../bottom';
import QuotesScreeen from '../../screens/quotes';

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const CountContainer = styled.View`
  width: 36px;
  height: 36px;
  background: #102da4;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

const MenuItemContainer = styled.TouchableOpacity`
  width: 85%;
  height: 52px;
  background: #ffffff;
  border-radius: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 18px;
  align-self: flex-start;

  ${({active}: any) =>
    active &&
    css`
      background: #2051e5;
    `}
`;

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  const [isActive, setIsActive] = useState<string>('Schedules');

  const menuItems = [
    {
      id: 1,
      icon: (
        <CalendarIcon
          style={{color: isActive === 'Schedules' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Schedules',
    },
    {
      id: 2,
      icon: (
        <ChalkboardIcon
          style={{color: isActive === 'My Classes' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'My Classes',
    },
    {
      id: 3,
      icon: (
        <BookBookmarkIcon
          style={{color: isActive === 'Contents' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Contents',
    },
    {
      id: 4,
      icon: (
        <QuoteLeftIcon
          style={{color: isActive === 'Quotes' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Quotes',
      navigateTo: ROUTES.QuotesScreeen,
    },
    {
      id: 5,
      icon: (
        <CogIcon
          style={{color: isActive === 'Settings' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Settings',
    },
    {
      id: 6,
      icon: (
        <QuestionOutlinedIcon
          style={{color: isActive === 'Help Center' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Help Center',
    },
    {
      id: 7,
      icon: (
        <InfoOutlinedIcon
          style={{color: isActive === 'About App' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'About App',
    },
    {
      id: 8,
      icon: (
        <ExitOutlinedIcon
          style={{color: isActive === 'Log Out' ? '#F8FAFC' : '#61758A'}}
        />
      ),
      menu: 'Log Out',
    },
  ];

  const getDrawerContent = (navigation: any) => {
    return (
      <DrawerContentScrollView>
        <ScreenContainer style={{paddingHorizontal: 16}}>
          <FlexContainer
            width="100%"
            alignItems="flex-start"
            justifyContent="flex-start"
            style={{marginTop: 40}}>
            <CloseIcon onPress={() => navigation.closeDrawer()} />

            <FlexContainer
              direction="column"
              width="50%"
              style={{marginLeft: 43, marginBottom: 24}}>
              <Image source={user} />
              <Title5 marginTop={12} marginBottom={6}>
                Tamanna Adhikari
              </Title5>
              <TextButton text="See Profile" />
            </FlexContainer>
          </FlexContainer>
          {menuItems.map(item => (
            <MenuItemContainer
              key={item.id}
              onPress={() => {
                setIsActive(item.menu);
                navigation.navigate(item.navigateTo);
              }}
              active={item.menu === isActive ? true : false}>
              <FlexContainer justifyContent="flex-start">
                {item.icon}
                <Body2
                  color={item.menu === isActive ? '#F8FAFC' : '#445668'}
                  style={{marginLeft: 14}}>
                  {item.menu}
                </Body2>
              </FlexContainer>
              {isActive === item.menu && (
                <CountContainer>
                  <Body2 color="#F8FAFC">03</Body2>
                </CountContainer>
              )}
            </MenuItemContainer>
          ))}
        </ScreenContainer>
        <AuthHeader style={{alignSelf: 'flex-start'}} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.BottomNavigation}
      screenOptions={{
        headerShown: false,
        drawerStyle: {flex: 1, width: '85%'},
      }}
      drawerContent={({navigation}: any) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={ROUTES.BottomNavigation}
        component={BottomNavigation}
      />
      <Drawer.Screen
        name={ROUTES.SchedulesScreen}
        component={SchedulesScreen}
      />
      <Drawer.Screen name={ROUTES.QuotesScreeen} component={QuotesScreeen} />
    </Drawer.Navigator>
  );
}
