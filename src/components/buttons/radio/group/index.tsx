import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import {RadioButton} from '..';
import {FlexContainer} from '../../../containers/flex';

interface IRadioGroupProps {
  data: Array<object>;
  other?: boolean;
  placeholder?: string;
}

const Circle = styled.TouchableOpacity`
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

export function RadioGroup(props: IRadioGroupProps) {
  const {data, other = false, placeholder} = props;

  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      {data.map((item: any) => (
        <RadioButton key={item.id} label={item.option} />
      ))}

      {other && (
        <FlexContainer justifyContent="flex-start" style={{marginTop: 16}}>
          {active ? (
            <Circle onPress={() => setActive(prev => !prev)}>
              <ActiveCircle />
            </Circle>
          ) : (
            <Circle onPress={() => setActive(prev => !prev)} />
          )}

          <TextInput
            placeholder={placeholder}
            style={{
              width: 206,
              height: 40,
              borderWidth: 1,
              borderColor: '#CAD5E0',
              borderRadius: 4,
            }}
          />
        </FlexContainer>
      )}
    </>
  );
}
