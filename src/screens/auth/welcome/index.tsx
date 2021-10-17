import React from 'react';
import styled from 'styled-components';
import {ArrowRightIcon} from '../../../assets/icons';
import {ConfettiIllustration} from '../../../assets/illustrations';
import {user} from '../../../assets/images';
import {Button} from '../../../components/buttons/button';
import {ScreenContainer} from '../../../components/containers/screen';
import {Body3, Title3} from '../../../components/text';
import * as ROUTES from '../../../constants/routes';

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-top: 16px;
`;

export function WelcomebackScreen({navigation}: any) {
  return (
    <ScreenContainer justifyContent="center" style={{paddingHorizontal: 32}}>
      <ConfettiIllustration />
      <Image source={user} />
      <Title3 marginTop={20} marginBottom={8} lineHeight={32}>
        Welcome back, Tamanna
      </Title3>
      <Body3 marginBottom={48}>
        You have 14 classes in 3 schools today. All the best!
      </Body3>

      <Button
        text="Go to My Schedules"
        icon={<ArrowRightIcon />}
        iconPosition="end"
        onPress={() => navigation.navigate(ROUTES.LockedoutScreen)}
      />
    </ScreenContainer>
  );
}
