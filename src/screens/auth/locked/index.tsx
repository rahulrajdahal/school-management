import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import {ArrowRightIcon} from '../../../assets/icons';
import {user} from '../../../assets/images';
import {Button} from '../../../components/buttons/button';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {OtpInput} from '../../../components/inputs/otp';
import {Body3, Title3} from '../../../components/text';
import * as ROUTES from '../../../constants/routes';

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-top: 16px;
`;

export function LockedoutScreen({navigation}: any) {
  const input0 = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();

  const [code0, setCode0] = useState<string>('');
  const [code1, setCode1] = useState<string>('');
  const [code2, setCode2] = useState<string>('');
  const [code3, setCode3] = useState<string>('');
  const [code4, setCode4] = useState<string>('');
  const [code5, setCode5] = useState<string>('');

  return (
    <ScreenContainer justifyContent="center" style={{paddingHorizontal: 28}}>
      <Image source={user} />
      <Title3 marginTop={20} marginBottom={8} lineHeight={32}>
        Good Afternoon, Tamanna
      </Title3>
      <Body3 marginBottom={48}>
        You’ve been locked out during class hours for security reasons. Please
        enter your access code to enter.
      </Body3>

      <FlexContainer>
        <OtpInput
          autofocus={true}
          onChangeText={text => {
            setCode0(text);
            if (text !== '') {
              input1.current.focus();
            }
          }}
        />
        <OtpInput
          inputRef={input1}
          onChangeText={text => {
            setCode1(text);
            if (text !== '') {
              input2.current.focus();
            }
          }}
        />

        <OtpInput
          inputRef={input2}
          onChangeText={text => {
            setCode2(text);
            if (text !== '') {
              input3.current.focus();
            }
          }}
        />
        <OtpInput
          inputRef={input3}
          onChangeText={text => {
            setCode3(text);
            if (text !== '') {
              input4.current.focus();
            }
          }}
        />

        <OtpInput
          inputRef={input4}
          onChangeText={text => {
            setCode4(text);
            if (text !== '') {
              input5.current.focus();
            }
          }}
        />
        <OtpInput inputRef={input5} onChangeText={text => setCode5(text)} />
      </FlexContainer>

      <Button
        text="Sign In"
        icon={<ArrowRightIcon />}
        iconPosition="end"
        borderRadius={11}
        onPress={() => navigation.navigate(ROUTES.SchedulesScreen)}
        style={{marginTop: 24}}
      />
    </ScreenContainer>
  );
}
