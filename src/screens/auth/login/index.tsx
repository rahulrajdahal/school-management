import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {EmailIcon, GoogleIcon, LockIcon} from '../../../assets/icons';
import {SchoolIllustration} from '../../../assets/illustrations';
import {Button} from '../../../components/buttons/button';
import {TextButton} from '../../../components/buttons/text';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {AuthHeader} from '../../../components/headers/auth';
import Input from '../../../components/inputs/input';
import {Body3, CaptionText, Title3} from '../../../components/text';
import * as ROUTES from '../../../constants/routes';

export function LoginScreen({navigation}: any) {
  return (
    <ScreenContainer>
      <AuthHeader />

      <FlexContainer
        direction="column"
        justifyContent="flex-start"
        style={{width: '100%', paddingHorizontal: 24}}>
        <Title3 marginTop={32} marginBottom={12}>
          Log In
        </Title3>
        <Body3>
          Gain access to your account by entering the email and password
          provided to you.
        </Body3>

        <Input icon={<EmailIcon />} placeholder="Email Address" />
        <Input icon={<LockIcon />} placeholder="Password" />

        <TextButton
          text="Forgot Password?"
          style={{marginTop: 8, marginBottom: 24, alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate(ROUTES.ForgotPasswordScreen)}
        />
        <Button
          text="Log In to Karkhana"
          onPress={() => navigation.navigate(ROUTES.DrawerNavigation)}
        />

        <CaptionText marginTop={35} marginBottom={35}>
          OR
        </CaptionText>

        <Button
          icon={<GoogleIcon />}
          iconPosition="start"
          text="Use Google Workspace"
          textColor="#445668"
          backgroundColor="#FFFFFF"
        />
      </FlexContainer>
    </ScreenContainer>
  );
}
