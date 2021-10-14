import styled from 'styled-components';

interface ITextProps {
  marginTop: number;
  marginBottom: number;
}

export const Title3 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #030913;

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body3 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #445668;

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const CaptionText = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #91a4b7;

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;
