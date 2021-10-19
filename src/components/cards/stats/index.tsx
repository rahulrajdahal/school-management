import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {FlexContainer} from '../../containers/flex';
import {Body3, Title4} from '../../text';

type IStatCardProps = {
  icon: JSX.Element;
  count: number | string;
  desc: string;
};

const Container = styled.View`
  width: 48%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #f0f5f9;
  border-radius: 4px;
  padding: 0 12px;
`;

export function StatCard(props: IStatCardProps) {
  const {icon, count, desc} = props;

  return (
    <Container>
      {icon}
      <FlexContainer direction="column" alignItems="flex-start" width="70%">
        <Title4 fontWeight="600">{count}</Title4>
        <Body3 color="#304254">{desc}</Body3>
      </FlexContainer>
    </Container>
  );
}
