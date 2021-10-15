import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import {SchoolIllustration} from '../../../assets/illustrations';
import {sizes} from '../../../constants/theme/theme';

interface IAuthHeaderProps {
  width?: string;
  style?: StyleProp<ViewStyle>;
}

interface IImageContainerProps {
  width: string;
}
const ImageContainer = styled(LinearGradient)<IImageContainerProps>`
  height: 290px;
  width: ${p => (p.width ? p.width : `${sizes.width}px`)};
  align-items: center;
  justify-content: flex-end;
`;

export function AuthHeader(props: IAuthHeaderProps) {
  const {width = '100%', style} = props;

  return (
    <ImageContainer
      style={style}
      width={width}
      colors={['rgba(43, 213, 224, 0)', '#2BD5E0']}>
      <SchoolIllustration />
    </ImageContainer>
  );
}
