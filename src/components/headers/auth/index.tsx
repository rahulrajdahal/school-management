import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import {SchoolIllustration} from '../../../assets/illustrations';
import { sizes } from '../../../constants/theme/theme';

const ImageContainer = styled(LinearGradient)`
  height: 290px;
  width: ${sizes.width}px;
  align-items: center;
  justify-content: flex-end;
`;

export function AuthHeader() {
  return (
    <ImageContainer colors={['rgba(43, 213, 224, 0)', '#2BD5E0']}>
      <SchoolIllustration />
    </ImageContainer>
  );
}
