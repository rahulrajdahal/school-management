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
import Input from '../../../components/input';
import {Body3, CaptionText, Title3} from '../../../components/text';
import {sizes} from '../../../constants/theme/theme';

const ImageContainer = styled(LinearGradient)`
  height: 290px;
  width: ${sizes.width}px;
  align-items: center;
  justify-content: flex-end;
`;

export function LoginScreen() {
  return (
    <ScreenContainer>
      <ImageContainer colors={['rgba(43, 213, 224, 0)', '#2BD5E0']}>
        <SchoolIllustration />
      </ImageContainer>

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
        />
        <Button text="Log In to Karkhana" />

        <CaptionText marginTop={35} marginBottom={35}>
          OR
        </CaptionText>

        <Button
          icon={<GoogleIcon />}
          text="Use Google Workspace"
          textColor="#445668"
          backgroundColor="#FFFFFF"
        />
      </FlexContainer>
    </ScreenContainer>
  );
}
