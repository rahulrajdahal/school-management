import React from 'react';
import {View, Text} from 'react-native';
import {EmailIcon} from '../../../../assets/icons';
import {Button} from '../../../../components/buttons/button';
import {TextButton} from '../../../../components/buttons/text';
import {FlexContainer} from '../../../../components/containers/flex';
import {ScreenContainer} from '../../../../components/containers/screen';
import {AuthHeader} from '../../../../components/headers/auth';
import Input from '../../../../components/inputs/input';
import {Body3, Title3} from '../../../../components/text';

export function ForgotPasswordScreen({navigation}: any) {
  return (
    <ScreenContainer>
      <AuthHeader />

      <FlexContainer
        direction="column"
        justifyContent="flex-start"
        style={{width: '100%', paddingHorizontal: 24}}>
        <Title3 marginTop={32} marginBottom={12}>
          Forgot Password
        </Title3>
        <Body3>
          Don’t worry! Enter your email address that you registered with and
          we’ll proceed further.
        </Body3>

        <Input icon={<EmailIcon />} placeholder="Email Address" />

        <Button
          text="Send Password Reset Link"
          onPress={() => navigation.navigate('ResetPasswordScreen')}
          style={{marginTop: 24}}
        />
      </FlexContainer>
    </ScreenContainer>
  );
}
