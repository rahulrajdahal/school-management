import styled from 'styled-components';

interface ITextProps {
  marginTop: number;
  marginBottom: number;
  lineHeight: number;
  color: string;
  fontWeight: number;
}

export const Title3 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${p => (p.color ? p.color : '#030913')};

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Title4 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${p => (p.fontWeight ? p.fontWeight : 300)};
  font-size: 20px;
  color: ${p => (p.color ? p.color : '#030913')};
  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Title5 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${p => (p.color ? p.color : '#1c2a3a')};
  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body2 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: ${p => (p.color ? p.color : '#445668')};
  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body3 = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #445668;

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const CaptionText = styled.Text<ITextProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${p => (p.color ? p.color : '#91a4b7')};

  margin-top: ${p => (p.marginTop ? p.marginTop : 0)}px;
  margin-bottom: ${p => (p.marginBottom ? p.marginBottom : 0)}px;
`;
