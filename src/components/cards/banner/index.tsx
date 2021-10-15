import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {StarIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {Body3, CaptionText, Title4} from '../../text';

interface IBannerProps {
  marginTop?: number;
  marginBottom?: number;
}

interface IContainerProps {
  marginTop: number;
  marginBottom: number;
}

const Container = styled.View<IContainerProps>`
  width: 339px;
  height: 240px;
  background: #2051e5;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export function Banner(props: IBannerProps) {
  const {marginTop, marginBottom} = props;

  return (
    <Container marginTop={marginTop} marginBottom={marginBottom}>
      <FlexContainer>
        <CaptionText color="#CAD5E0">QUOTE OF THE DAY</CaptionText>
        <StarIcon />
      </FlexContainer>

      <Title4 marginTop={18} marginBottom={20} color="#F8FAFC" fontWeight={600}>
        A mediocre teacher tells. A good teacher explains. A superior teacher
        shows. The great teacher inspires.
      </Title4>

      <CaptionText color="#CAD5E0" style={{alignSelf: 'flex-start'}}>
        William Arthur Ward
      </CaptionText>
    </Container>
  );
}
