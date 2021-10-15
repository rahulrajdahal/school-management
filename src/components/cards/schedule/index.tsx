import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

interface ISchedulesCardProps {
  title: string;
  body1: string;
  body2: string;
  time: string;
  backgroundColor?: string;
  borderColor?: string;
}

interface IContainerProps {
  backgroundColor: string;
  borderColor: string;
}
const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 86px;
  background: ${p => (p.backgroundColor ? p.backgroundColor : '#f5fafb')};
  border-radius: 4px;
  border-left-width: 4px;
  border-left-color: ${p => (p.borderColor ? p.borderColor : '#41a7b3')};

  flex-direction: row;
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

export function SchedulesCard(props: ISchedulesCardProps) {
  const {title, body1, body2, time, backgroundColor, borderColor} = props;

  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      <View>
        <Title>{title}</Title>
        <Body>{body1}</Body>
        <Body>Class {body2}</Body>
      </View>
      <Time>{time}</Time>
    </Container>
  );
}
