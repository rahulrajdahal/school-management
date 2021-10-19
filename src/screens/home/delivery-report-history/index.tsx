import {isTemplateElement} from '@babel/types';
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styled from 'styled-components';
import {ArrowRightIcon, StarFillIcon, StarIcon} from '../../../assets/icons';
import {Button} from '../../../components/buttons/button';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {MenuHeader} from '../../../components/headers/menu';
import {Body2, Body3, Title3, Title4, Title5} from '../../../components/text';

const CurrentContainer = styled.View`
  width: 343px;
  height: 160px;
  background: #f4f6fd;
  border: 1px solid #2051e5;
  border-radius: 8px;
  align-items: center;
  padding: 16px;
`;

export function DeliveryreporthistoryScreen() {
  const [rating, setRating] = useState();

  const reports = [
    {
      id: 1,
      date: '21st Aug 2016',
      chapter: 'Mon, Introduction to Gravity',
      rating: 4,
    },

    {
      id: 2,
      date: '18th Aug 2016',
      chapter: 'Fri, Introduction to Gravity',
      rating: 4,
    },

    {
      id: 3,
      date: '17th Aug 2016',
      chapter: 'Thu, Introduction to Gravity',
      rating: 4,
    },
    {
      id: 4,
      date: '12th Aug 2016',
      chapter: 'Sun, Introduction to Gravity',
      rating: 4,
    },
    {
      id: 5,
      date: '10th Aug 2016',
      chapter: 'Fri, Introduction to Gravity',
      rating: 4,
    },
    {
      id: 6,
      date: '09th Aug 2016',
      chapter: 'Thu, Introduction to Gravity',
      rating: 4,
    },
    {
      id: 7,
      date: '09th Aug 2016',
      chapter: 'Thu, Introduction to Gravity',
      rating: 4,
    },
  ];

  const renderItem = ({item}: any) => (
    <FlexContainer
      alignItems="flex-end"
      style={{
        paddingVertical: 12,
        borderBottomColor: '#E1E8F0',
        borderBottomWidth: 1,
      }}>
      <View>
        <Body2>{item.date}</Body2>
        <Body3>{item.chapter}</Body3>
      </View>
      <FlexContainer width="30%">
        {Array(5)
          .fill()
          .map((_, i) =>
            item.rating > i ? (
              <StarFillIcon
                key={i}
                width={11.67}
                height={11.67}
                style={{color: '#F77307'}}
              />
            ) : (
              <StarIcon
                key={i}
                style={{color: '#CAD5E0'}}
                width={11.67}
                height={11.67}
              />
            ),
          )}
      </FlexContainer>
    </FlexContainer>
  );

  return (
    <ScreenContainer alignItems="flex-start" style={{paddingHorizontal: 16}}>
      <MenuHeader title="Delivery Report" />
      <CurrentContainer>
        <Body3>
          How did the class go? Please rate it from a scale of 1 - 5 stars with
          5 being the highest.
        </Body3>

        <FlexContainer
          style={{paddingHorizontal: 27, marginTop: 16, marginBottom: 35}}>
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
      </CurrentContainer>

      <Title4 marginTop={48}>Delivery History</Title4>

      <FlatList
        style={{width: '100%'}}
        data={reports}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScreenContainer>
  );
}
