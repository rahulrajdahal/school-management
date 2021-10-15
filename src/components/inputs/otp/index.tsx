import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

interface IOtpInputProps {
  autofocus?: boolean;
  inputRef?: any;
  onChangeText?(): () => {};
}

const TextInput = styled.TextInput`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #cad5e0;
  text-align: center;
`;

export function OtpInput(props: IOtpInputProps) {
  const {onChangeText, inputRef, autofocus = false} = props;

  return (
    <TextInput
      autofocus={autofocus}
      ref={inputRef}
      maxLength={1}
      onChangeText={onChangeText}
      selectTextOnFocus
      keyboardType="decimal-pad"
    />
  );
}
