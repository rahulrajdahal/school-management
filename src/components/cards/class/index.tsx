import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {FemaleIcon, MaleIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {Body3, Title3, Title4} from '../../text';

interface IClassCardProps {
  item: any;
}

interface IContainerProps {
  backgroundColor: string;
  borderColor: string;
}
const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;
  background: ${p => (p.backgroundColor ? p.backgroundColor : '#f5fafb')};
  border-radius: 4px;
  border-left-width: 4px;
  border-left-color: ${p => (p.borderColor ? p.borderColor : '#41a7b3')};

  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #0d1829;
`;

const Body = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #445668;
`;

const Time = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-align: right;
  color: #304254;
`;

export function ClassCard(props: IClassCardProps) {
  const {item} = props;

  const {title, body1, body2, time, backgroundColor, borderColor} = item;

  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <FlexContainer alignItems="flex-start">
        <View>
          <Title>{title}</Title>
          <Body>{body1}</Body>
          <Body>Class {body2}</Body>
        </View>
        <Time>{time}</Time>
      </FlexContainer>

      <FlexContainer width="50%">
        <View style={{marginTop: 20}}>
          <Title3>22</Title3>
          <FlexContainer justifyContent="flex-start">
            <Body3 style={{marginRight: 7}}>boys</Body3>
            <MaleIcon />
          </FlexContainer>
        </View>
        <View style={{marginTop: 20}}>
          <Title3>18</Title3>
          <FlexContainer justifyContent="flex-start">
            <Body3>girls</Body3>
            <FemaleIcon />
          </FlexContainer>
        </View>
      </FlexContainer>
    </Container>
  );
}
