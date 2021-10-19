import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {MagnifyIcon} from '../../../assets/icons';

type ISearchInputProps = {style?: StyleProp<ViewStyle>};

const Container = styled.View`
  width: 343px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #cad5e0;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const TextInput = styled.TextInput`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #91a4b7;
  width: 90%;
`;

export function SearchInput(props: ISearchInputProps) {
  const {style} = props;

  return (
    <Container style={style}>
      <MagnifyIcon />
      <TextInput placeholder="Search for Students..." />
    </Container>
  );
}
