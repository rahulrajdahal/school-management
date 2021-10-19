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
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

interface IContainerProps {
  alignItems: string;
  justifyContent: string;
  width: string | number;
  flexWrap: string;
}
const Container = styled.View<IContainerProps>`
  flex-direction:${p => (p.direction ? p.direction : 'row')}
  align-items: ${p => (p.alignItems ? p.alignItems : 'center')};
  justify-content: ${p =>
    p.justifyContent ? p.justifyContent : 'space-between'};
    width:${p => (p.width ? p.width : '100%')};
 flex-wrap:${p => (p.flexWrap ? p.flexWrap : 'wrap')};
`;

export function FlexContainer(props: IFlexContainerProps) {
  const {
    children,
    direction,
    alignItems,
    justifyContent,
    style,
    width,
    flexWrap,
  } = props;

  return (
    <Container
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      width={width}
      style={style}>
      {children}
    </Container>
  );
}
