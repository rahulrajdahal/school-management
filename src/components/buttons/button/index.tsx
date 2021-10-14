import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {sizes} from '../../../constants/theme/theme';

interface IButtonProps {
  text: string;
  width?: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
  icon?: JSX.Element;
  onPress?(): any;
}

interface IContainerProps {
  width: string;
  backgroundColor: string;
}

const Container = styled.TouchableOpacity<IContainerProps>`
  width: ${p => (p.width ? p.width : '100%')};
  height: 48px;

  background: ${p => (p.backgroundColor ? p.backgroundColor : '#2051e5')};
  border-radius: 8px;
  border: 1px solid #cad5e0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ITextProps {
  textColor: string;
}
const Text = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: ${p => (p.textColor ? p.textColor : '#f8fafc')};
`;

export function Button(props: IButtonProps) {
  const {icon, width, style, text, backgroundColor, textColor, onPress} = props;

  return (
    <Container
      width={width}
      backgroundColor={backgroundColor}
      style={style}
      onPress={onPress}>
      {icon && icon}
      <Text textColor={textColor} style={{marginLeft: icon ? 8 : 0}}>
        {text}
      </Text>
    </Container>
  );
}
