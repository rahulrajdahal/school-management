import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {HistoryIcon, MenuIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {Title3} from '../../text';
import {StyleProp, ViewStyle} from 'react-native';

interface IMenuHeaderProps {
  title: string;
  iconRight?: JSX.Element;
  style?: any;
}

export function MenuHeader(props: IMenuHeaderProps) {
  const {title, iconRight, style} = props;

  const navigation = useNavigation();

  return (
    <FlexContainer
      justifyContent={iconRight ? 'space-between' : 'flex-start'}
      style={{marginTop: 40, ...style}}>
      <MenuIcon onPress={() => navigation.openDrawer()} />
      <Title3 style={{marginLeft: iconRight ? 0 : '30%'}}>{title}</Title3>
      {iconRight && iconRight}
    </FlexContainer>
  );
}
