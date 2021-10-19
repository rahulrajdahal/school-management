import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styled from 'styled-components';
import {BarChartIcon} from '../../../assets/icons';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {MenuHeader} from '../../../components/headers/menu';
import {SearchInput} from '../../../components/inputs/search';

const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;

export function AttendanceScreen() {
  const data = [
    {id: 1, name: 'Aakash Raj Dahal', presence: '4/6'},
    {id: 2, name: 'Animesh Pandey', presence: '6/6'},
    {id: 3, name: 'Bibek Acharya', presence: '5/6'},
    {id: 4, name: 'Chandra Rokka', presence: '6/6'},
    {id: 5, name: 'Icchya Chaudhary', presence: '6/6'},
    {id: 6, name: 'Kazol RajyaLaxmi Shah', presence: '4/6'},
    {id: 7, name: 'Pranish Shrestha', presence: '3/6'},
    {id: 8, name: 'Prayush Bijukchchhe', presence: '4/6'},
  ];

  const renderItem = ({item}: any) => <FlexContainer></FlexContainer>;

  return (
    <ScreenContainer alignItems="flex-start" style={{paddingHorizontal: 16}}>
      <MenuHeader title="Attendance" iconRight={<BarChartIcon />} />

      <SearchInput style={{marginTop: 32, marginBottom: 24}} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScreenContainer>
  );
}
