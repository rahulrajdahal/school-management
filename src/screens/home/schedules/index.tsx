import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  HistoryIcon,
  StarFillIcon,
  StarIcon,
} from '../../../assets/icons';
import {Accordion} from '../../../components/accordion';
import {Button} from '../../../components/buttons/button';
import {RadioButton} from '../../../components/buttons/radio';
import {RadioGroup} from '../../../components/buttons/radio/group';
import {Banner} from '../../../components/cards/banner';
import {SchedulesCard} from '../../../components/cards/schedule';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {MenuHeader} from '../../../components/headers/menu';
import {Body3, Title3, Title4} from '../../../components/text';

export function SchedulesScreen() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);

  const bottomSheetCancelModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetReportModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const snapReportPoints = useMemo(() => ['25%', '33%'], []);

  // callbacks
  const handlePresentCancelModalPress = useCallback(() => {
    bottomSheetCancelModalRef.current?.present();
  }, []);

  const handleCancelSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentReportModalPress = useCallback(() => {
    bottomSheetReportModalRef.current?.present();
  }, []);

  const handleReportSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const today = [
    {
      id: 1,
      title: 'Paragon School',
      body1: 'Introduction to Gravity',
      body2: '7A',
      time: '09:00 - 09:30',
    },
    {
      id: 2,
      title: 'Kastamandap School',
      body1: 'Light and Reflections',
      body2: '8C',
      time: '11:00 - 12:00',
      backgroundColor: '#FDF6F3',
      borderColor: '#D3560E',
    },
    {
      id: 3,
      title: 'Paragon School',
      body1: 'Advanced Physics',
      body2: '6B',
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

  const [rating, setRating] = useState<number>(-1);

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <ScreenContainer
          style={{
            paddingHorizontal: 16,
            backgroundColor: bottomSheetOpen ? 'rgba(3, 9, 19, 0.3)' : '#fff',
            opacity: bottomSheetOpen ? 0.3 : 1,
          }}>
          <MenuHeader title="Schedules" iconRight={<HistoryIcon />} />

          <Accordion
            title="Today"
            data={today}
            reportSheet={handlePresentReportModalPress}
            cancelSheet={handlePresentCancelModalPress}
          />
          <Accordion
            title="Tomorrow"
            data={today}
            reportSheet={handlePresentReportModalPress}
            cancelSheet={handlePresentCancelModalPress}
          />

          <Banner marginTop={32} marginBottom={32} />

          <Accordion
            title="Dec 25th 2016, Tue"
            data={today}
            reportSheet={handlePresentReportModalPress}
            cancelSheet={handlePresentCancelModalPress}
          />

          <BottomSheetModal
            ref={bottomSheetCancelModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleCancelSheetChanges}>
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

          <BottomSheetModal
            ref={bottomSheetReportModalRef}
            index={1}
            snapPoints={snapReportPoints}
            onChange={handleReportSheetChanges}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 16,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              }}>
              <Title3>Delivery Report</Title3>
              <Body3>
                How did the class go? Please rate it from a scale of 1 - 5 stars
                with 5 being the highest.
              </Body3>

              <FlexContainer
                width="100%"
                style={{paddingHorizontal: 46, marginVertical: 24}}>
                {Array(5)
                  .fill()
                  .map((_, i) =>
                    rating >= i ? (
                      <StarFillIcon
                        key={i}
                        onPress={() => setRating(i)}
                        width={26}
                        height={26}
                        style={{color: '#F77307'}}
                      />
                    ) : (
                      <StarIcon
                        key={i}
                        onPress={() => setRating(i)}
                        style={{color: '#CAD5E0'}}
                        width={26}
                        height={26}
                      />
                    ),
                  )}
              </FlexContainer>

              <Button
                text="Send Delivery Report"
                icon={<ArrowRightIcon />}
                iconPosition="end"
              />
            </View>
          </BottomSheetModal>
        </ScreenContainer>
      </ScrollView>
    </BottomSheetModalProvider>
  );
}
