import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components';
import {sizes} from '../../../constants/theme/theme';

interface IButtonProps {
  text: string;
  iconPosition?: 'start' | 'end';
  width?: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
  icon?: JSX.Element;
  onPress?(): any;
  borderRadius?: number;
}

interface IContainerProps {
  width: string;
  backgroundColor: string;
  borderRadius: number;
}

const Container = styled.TouchableOpacity<IContainerProps>`
  width: ${p => (p.width ? p.width : '100%')};
  height: 48px;

  background: ${p => (p.backgroundColor ? p.backgroundColor : '#2051e5')};
  border-radius: ${p => (p.borderRadius ? p.borderRadius : 8)}px;
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
  const {
    icon,
    width,
    style,
    text,
    backgroundColor,
    textColor,
    onPress,
    iconPosition,
    borderRadius,
  } = props;

  return (
    <Container
      width={width}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      style={style}
      onPress={onPress}>
      {iconPosition === 'start' && icon}
      <Text
        textColor={textColor}
        style={{
          marginLeft: iconPosition === 'start' ? 8 : 0,
          marginRight: iconPosition === 'end' ? 6 : 0,
        }}>
        {text}
      </Text>
      {iconPosition === 'end' && icon}
    </Container>
  );
}
