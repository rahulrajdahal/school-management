import React from 'react';
import {TextInput, Text} from 'react-native';
import styled from 'styled-components';

interface IInputProps {
  icon?: JSX.Element;
  placeholder: string;
}

const Container = styled.View`
  width: 343px;
  height: 48px;
  background: #f8fafc;
  border: 1px solid #cad5e0;
  border-radius: 8px;
  padding: 0 15px;

  flex-direction: row;
  align-items: center;
  margin-top: 24px;
`;

export default function Input(props: IInputProps) {
  const {placeholder, icon} = props;
  return (
    <Container>
      {icon}
      <TextInput
        style={{marginLeft: 9.5, width: '100%'}}
        placeholder={placeholder}
      />
    </Container>
  );
}
