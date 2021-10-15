import React from 'react';
import {View, Text} from 'react-native';
import {ChevronDownIcon} from '../../assets/icons';
import {SchedulesCard} from '../cards/schedule';
import {FlexContainer} from '../containers/flex';
import {Title4} from '../text';

interface IAccordionProps {
  title: string;
  data: Array<object>;
}

export function Accordion(props: IAccordionProps) {
  const {title, data} = props;

  return (
    <>
      <FlexContainer
        width="100%"
        justifyContent="flex-start"
        style={{alignSelf: 'flex-start', marginTop: 32, marginBottom: 12}}>
        <Title4 style={{marginRight: 13}}>{title}</Title4>
        <ChevronDownIcon />
      </FlexContainer>

      {data.map((item: any) => (
        <SchedulesCard
          key={item.id}
          title={item.school}
          body1={item.chapter}
          body2={item.class}
          time={item.time}
          backgroundColor={item.backgroundColor}
          borderColor={item.borderColor}
        />
      ))}
    </>
  );
}
