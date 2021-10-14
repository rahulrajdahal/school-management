import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components';

interface IFlexContainerProps {
  children?: JSX.Element | JSX.Element[];
  direction?: 'row' | 'column';
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
  flex-direction:${p => (p.direction ? p.direction : 'row')}
  align-items: ${p => (p.alignItems ? p.alignItems : 'center')};
  justify-content: ${p =>
    p.justifyContent ? p.justifyContent : 'space-between'};
`;

export function FlexContainer(props: IFlexContainerProps) {
  const {children, direction, alignItems, justifyContent, style} = props;

  return (
    <Container
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      style={style}>
      {children}
    </Container>
  );
}
