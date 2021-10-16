import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled, {css} from 'styled-components';
import {FlexContainer} from '../../containers/flex';
import {Body3} from '../../text';

interface IRadioButtonProps {
  label: string;
  other?: boolean;
}

const Circle = styled.View`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1.5px solid #91a4b7;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

const ActiveCircle = styled.View`
  position: relative;
  width: 16px;
  height: 16px;
  background: #2051e5;
  border-radius: 20px;
`;

export function RadioButton(props: IRadioButtonProps) {
  const {label, other = false} = props;
  const [active, setActive] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={{marginTop: 16, width: '100%'}}
      onPress={() => setActive(prev => !prev)}>
      <FlexContainer justifyContent="flex-start">
        {active ? (
          <Circle>
            <ActiveCircle />
          </Circle>
        ) : (
          <Circle />
        )}
        <Body3>{label}</Body3>
      </FlexContainer>
    </TouchableOpacity>
  );
}
