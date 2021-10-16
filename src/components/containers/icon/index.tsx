import React from 'react';
import styled from 'styled-components';

interface IIconContainerProps {
  icon: JSX.Element;
  backgroundColor?: string;
  onPress?(): any;
}

interface IContainerProps {
  backgroundColor: string;
}

const Container = styled.TouchableOpacity<IContainerProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${p => (p.backgroundColor ? p.backgroundColor : '#f77307')};
  align-items: center;
  justify-content: center;
`;

export function IconContainer(props: IIconContainerProps) {
  const {icon, backgroundColor, onPress} = props;

  return (
    <Container onPress={onPress} backgroundColor={backgroundColor}>
      {icon}
    </Container>
  );
}
