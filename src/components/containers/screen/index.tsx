import React from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {sizes} from '../../../constants/theme/theme';

interface IScreenContainerProps {
  children?: JSX.Element | JSX.Element[];
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'center'
    | 'flex-start'
    | 'flex-end';
  style?: StyleProp<ViewStyle>;
}

interface IContainerProps {
  alignItems: string;
  justifyContent: string;
}
const Container = styled.View<IContainerProps>`
  flex: 1;
  width: ${sizes.width}px;
  background: #ffffff;
  align-items: ${p => (p.alignItems ? p.alignItems : 'center')};
  justify-content: ${p => (p.justifyContent ? p.justifyContent : 'flex-start')};
`;

export function ScreenContainer(props: IScreenContainerProps) {
  const {children, alignItems, justifyContent, style} = props;

  return (
    <Container
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}>
      {children}
    </Container>
  );
}
