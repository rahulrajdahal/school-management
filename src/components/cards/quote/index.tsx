import React from 'react';
import styled from 'styled-components';

import {StarFillIcon, StarIcon} from '../../../assets/icons';
import {FlexContainer} from '../../containers/flex';
import {CaptionText, Title4} from '../../text';

type IQuotesCardProps = {item: any};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;

  width: 343px;
  height: 182px;

  background: #f0f5f9;
  border-radius: 20px;
`;

export function QuotesCard(props: IQuotesCardProps) {
  const {item} = props;

  const {date, quote, author, favorite} = item;

  return (
    <Container>
      <FlexContainer>
        <CaptionText>{date}</CaptionText>
        {favorite ? (
          <StarFillIcon width={16} height={16} style={{color: '#445668'}} />
        ) : (
          <StarIcon width={16} height={16} style={{color: '#91A4B7'}} />
        )}
      </FlexContainer>

      <Title4 marginTop={20} marginBottom={20}>
        {quote}
      </Title4>

      <CaptionText color="#445668">{author}</CaptionText>
    </Container>
  );
}
