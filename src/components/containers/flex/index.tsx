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
  width?: string | number;
}

interface IContainerProps {
  alignItems: string;
  justifyContent: string;
  width: string | number;
}
const Container = styled.View<IContainerProps>`
  flex-direction:${p => (p.direction ? p.direction : 'row')}
  align-items: ${p => (p.alignItems ? p.alignItems : 'center')};
  justify-content: ${p =>
    p.justifyContent ? p.justifyContent : 'space-between'};
    width:${p => (p.width ? p.width : '100%')};
`;

export function FlexContainer(props: IFlexContainerProps) {
  const {children, direction, alignItems, justifyContent, style, width} = props;

  return (
    <Container
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      style={style}>
      {children}
    </Container>
  );
}
