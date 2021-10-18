import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {HistoryIcon, MenuIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {Title3} from '../../text';

interface IMenuHeaderProps {
  title: string;
  iconRight?: JSX.Element;
}

export function MenuHeader(props: IMenuHeaderProps) {
  const {title, iconRight} = props;

  const navigation = useNavigation();

  return (
    <FlexContainer
      justifyContent={iconRight ? 'space-between' : 'flex-start'}
      style={{marginTop: 40}}>
      <MenuIcon onPress={() => navigation.openDrawer()} />
      <Title3 style={{marginLeft: iconRight ? 0 : '30%'}}>{title}</Title3>
      {iconRight && iconRight}
    </FlexContainer>
  );
}
