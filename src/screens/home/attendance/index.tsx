import React, {useState} from 'react';
import {View, Text, FlatList, Switch, ViewProps} from 'react-native';
import styled from 'styled-components';
import {BarChartIcon} from '../../../assets/icons';
import {
  attendance1,
  attendance2,
  attendance3,
  attendance4,
  attendance5,
  attendance6,
  attendance7,
  attendance8,
} from '../../../assets/images';
import {FlexContainer} from '../../../components/containers/flex';
import {ScreenContainer} from '../../../components/containers/screen';
import {MenuHeader} from '../../../components/headers/menu';
import {SearchInput} from '../../../components/inputs/search';
import {Body3, Title5} from '../../../components/text';
import {sizes} from '../../../constants/theme/theme';

const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;

const Divider = styled.View`
  width: 100%;
  background: #e1e8f0;
  height: 1px;
`;

export function AttendanceScreen() {
  const [value, setValue] = useState<boolean>(false);

  const data = [
    {
      id: 1,
      avatar: attendance1,
      name: 'Aakash Raj Dahal',
      presence: '4/6',
      value: false,
    },
    {
      id: 2,
      avatar: attendance2,
      name: 'Animesh Pandey',
      presence: '6/6',
      value: false,
    },
    {
      id: 3,
      avatar: attendance3,
      name: 'Bibek Acharya',
      presence: '5/6',
      value: false,
    },
    {
      id: 4,
      avatar: attendance4,
      name: 'Chandra Rokka',
      presence: '6/6',
      value: false,
    },
    {
      id: 5,
      avatar: attendance5,
      name: 'Icchya Chaudhary',
      presence: '6/6',
      value: false,
    },
    {
      id: 6,
      avatar: attendance6,
      name: 'Kazol RajyaLaxmi Shah',
      presence: '4/6',
      value: true,
    },
    {
      id: 7,
      avatar: attendance7,
      name: 'Pranish Shrestha',
      presence: '3/6',
      value: true,
    },
    {
      id: 8,
      avatar: attendance8,
      name: 'Prayush Bijukchchhe',
      presence: '4/6',
      value: false,
    },
  ];

  const renderItem = ({item}: any) => (
    <FlexContainer style={{paddingVertical: 12}}>
      <FlexContainer width="70%" justifyContent="flex-start">
        <Avatar source={item.avatar} />
        <View style={{marginLeft: 12}}>
          <Title5 color="#1C2A3A">{item.name}</Title5>
          <Body3>{item.presence} sessions present </Body3>
        </View>
      </FlexContainer>

      <Switch
        value={item.value}
        onValueChange={() => setValue(prev => !prev)}
        thumbColor={item.value ? '#DB025B' : '#16AD4D'}
        trackColor={{true: '#E1E8F0', false: '#E1E8F0'}}
      />
    </FlexContainer>
  );

  return (
    <ScreenContainer alignItems="flex-start" style={{paddingHorizontal: 16}}>
      <MenuHeader title="Attendance" iconRight={<BarChartIcon />} />

      <SearchInput style={{marginTop: 32, marginBottom: 24}} />

      <FlatList
        style={{width: '100%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
}
