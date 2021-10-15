import React from 'react';

import {HistoryIcon, MenuIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {Title3} from '../../text';

interface IMenuHeaderProps {
  title: string;
}

export function MenuHeader(props: IMenuHeaderProps) {
  const {title} = props;

  return (
    <FlexContainer style={{marginTop: 40}}>
      <MenuIcon />
      <Title3>{title}</Title3>
      <HistoryIcon />
    </FlexContainer>
  );
}
