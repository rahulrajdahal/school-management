import React from 'react';
import {ScrollView} from 'react-native';
import {ChevronDownIcon} from '../../assets/icons';
import {Accordion} from '../../components/accordion';
import {Banner} from '../../components/cards/banner';
import {SchedulesCard} from '../../components/cards/schedule';
import {FlexContainer} from '../../components/containers/flex';
import {ScreenContainer} from '../../components/containers/screen';
import {MenuHeader} from '../../components/headers/menu';
import {Title4} from '../../components/text';

export function SchedulesScreen() {
  const today = [
    {
      id: 1,
      school: 'Paragon School',
      chapter: 'Introduction to Gravity',
      class: '7A',
      time: '09:00 - 09:30',
    },
    {
      id: 2,
      school: 'Kastamandap School',
      chapter: 'Light and Reflections',
      class: '8C',
      time: '11:00 - 12:00',
      backgroundColor: '#FDF6F3',
      borderColor: '#D3560E',
    },
    {
      id: 3,
      school: 'Paragon School',
      chapter: 'Advanced Physics',
      class: '6B',
      time: '14:00 - 15:00',
      backgroundColor: '#F6F3F7',
      borderColor: '#521168',
    },
  ];

  return (
    <ScrollView>
      <ScreenContainer style={{paddingHorizontal: 16}}>
        <MenuHeader title="Schedules" />

        <Accordion title="Today" data={today} />
        <Accordion title="Tomorrow" data={today} />

        <Banner marginTop={32} marginBottom={32} />

        <Accordion title="Dec 25th 2016, Tue" data={today} />
      </ScreenContainer>
    </ScrollView>
  );
}
