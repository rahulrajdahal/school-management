import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <TouchableOpacity
      onPress={() => setIsOpen(prev => !prev)}
      style={{width: '100%'}}>
      <FlexContainer
        width="100%"
        justifyContent="flex-start"
        style={{alignSelf: 'flex-start', marginTop: 32, marginBottom: 12}}>
        <Title4 style={{marginRight: 13}}>{title}</Title4>
        <ChevronDownIcon />
      </FlexContainer>

      {isOpen &&
        data.map((item: any) => (
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
    </TouchableOpacity>
  );
}
