import React from 'react';
import {StyleProp, TouchableOpacity, ViewProps, ViewStyle} from 'react-native';
import styled from 'styled-components';

interface ITextButtonProps {
  text: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

interface ITextProps {
  color: string;
}

const Text = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: ${p => (p.color ? p.color : '#2051e5')};
`;

export function TextButton(props: ITextButtonProps) {
  const {text, color, style} = props;

  return (
    <TouchableOpacity style={style}>
      <Text color={color}>{text}</Text>
    </TouchableOpacity>
  );
}
