import React from 'react';
import {LockIcon} from '../../../assets/icons';
import {Button} from '../../../components/buttons/button';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {AuthHeader} from '../../../components/headers/auth';
import Input from '../../../components/inputs/input';
import {Body3, Title3} from '../../../components/text';

export function ResetPasswordScreen({navigation}: any) {
  return (
    <ScreenContainer>
      <AuthHeader />

      <FlexContainer
        direction="column"
        justifyContent="flex-start"
        style={{width: '100%', paddingHorizontal: 24}}>
        <Title3 marginTop={32} marginBottom={12}>
          Reset Password
        </Title3>
        <Body3>Create Your New Password below</Body3>

        <Input icon={<LockIcon />} placeholder="Create New Password" />

        <Button
          text="Create New Password"
          onPress={() => navigation.navigate('WelcomebackScreen')}
          style={{marginTop: 24}}
        />
      </FlexContainer>
    </ScreenContainer>
  );
}
