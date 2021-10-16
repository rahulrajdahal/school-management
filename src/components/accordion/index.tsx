import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';

import {ChevronDownIcon} from '../../assets/icons';
import {SchedulesCard} from '../cards/schedule';
import {FlexContainer} from '../containers/flex';
import {Title4} from '../text';

interface IAccordionProps {
  title: string;
  data: Array<object>;
  bottomSheet?(): any;
}

export function Accordion(props: IAccordionProps) {
  const {title, data, bottomSheet} = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const ref = useRef();

  const transition = (
    <Transition.Together>
      <Transition.In type="slide-left" durationMs={500} />
      <Transition.Change />
      <Transition.Out type="scale" durationMs={500} />
    </Transition.Together>
  );

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{width: '100%', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          ref.current.animateNextTransition();
          setIsOpen(prev => !prev);
        }}
        style={{flexGrow: 1}}>
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
              bottomSheet={bottomSheet}
            />
          ))}
      </TouchableOpacity>
    </Transitioning.View>
  );
}
