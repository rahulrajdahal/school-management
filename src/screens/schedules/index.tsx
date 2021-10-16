import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {ArrowRightIcon, ChevronDownIcon} from '../../assets/icons';
import {Accordion} from '../../components/accordion';
import {Button} from '../../components/buttons/button';
import {RadioButton} from '../../components/buttons/radio';
import {RadioGroup} from '../../components/buttons/radio/group';
import {Banner} from '../../components/cards/banner';
import {SchedulesCard} from '../../components/cards/schedule';
import {FlexContainer} from '../../components/containers/flex';
import {ScreenContainer} from '../../components/containers/screen';
import {MenuHeader} from '../../components/headers/menu';
import {Body3, Title3, Title4} from '../../components/text';

export function SchedulesScreen() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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

  const radioItems = [
    {id: 1, option: 'School Closed'},
    {id: 2, option: 'School Event'},
    {id: 3, option: 'Couldn’t get on time'},
  ];
  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <ScreenContainer
          style={{
            paddingHorizontal: 16,
            backgroundColor: bottomSheetOpen ? 'rgba(3, 9, 19, 0.3)' : '#fff',
            opacity: bottomSheetOpen ? 0.3 : 1,
          }}>
          <MenuHeader title="Schedules" />

          <Accordion
            title="Today"
            data={today}
            bottomSheet={handlePresentModalPress}
          />
          <Accordion
            title="Tomorrow"
            data={today}
            bottomSheet={handlePresentModalPress}
          />

          <Banner marginTop={32} marginBottom={32} />

          <Accordion
            title="Dec 25th 2016, Tue"
            data={today}
            bottomSheet={handlePresentModalPress}
          />

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 16,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              }}>
              <Title3>Cancel Class</Title3>
              <Body3>
                Why was your class cancelled? Please select any from the list or
                add your own reason.
              </Body3>

              <RadioGroup
                data={radioItems}
                placeholder="other... type here"
                other
              />

              <Button
                text="Send Report"
                icon={<ArrowRightIcon />}
                iconPosition="end"
                style={{marginTop: 24}}
              />
            </View>
          </BottomSheetModal>
        </ScreenContainer>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}
