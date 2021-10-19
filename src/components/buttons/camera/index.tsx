import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {CameraIcon} from '../../../assets/icons';

const Container = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: 1.5px solid #cad5e0;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export function CameraButton() {
  return (
    <Container>
      <CameraIcon width={20} height={20} style={{color: '#304254'}} />
    </Container>
  );
}
