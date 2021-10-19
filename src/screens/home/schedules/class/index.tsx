import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import styled from 'styled-components';

import {
  ChalkboardIcon,
  ImagesIcon,
  StarIcon,
  TimeIcon,
} from '../../../../assets/icons';
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
} from '../../../../assets/images';
import {CameraButton} from '../../../../components/buttons/camera';
import {ClassCard} from '../../../../components/cards/class';
import {SchedulesCard} from '../../../../components/cards/schedule';
import {StatCard} from '../../../../components/cards/stats';
import {FlexContainer} from '../../../../components/containers/flex';
import {ScreenContainer} from '../../../../components/containers/screen';
import {MenuHeader} from '../../../../components/headers/menu';
import {Title4} from '../../../../components/text';

const Gallery1 = styled.Image`
  width: 48%;
  height: 167px;
  border-radius: 4px;
`;

const Gallery2 = styled.Image`
  width: 98%;
  height: 80px;
  border-radius: 4px;
`;

const Gallery3 = styled.Image`
  width: 48%;
  height: 80px;
  border-radius: 4px;
`;

const GalleryShadow = styled.View`
  position: absolute;
  width: 40%;
  height: 80px;
  right: 16px;
  background: rgba(3, 9, 19, 0.6);
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export function ClassScreen({navigation, route}: any) {
  const item = route.params;

  const stats = [
    {id: 1, icon: <TimeIcon />, count: '05', desc: 'hours taught'},
    {
      id: 2,
      icon: <ChalkboardIcon style={{color: '#61758A'}} />,
      count: 32,
      desc: 'classes taken',
    },
    {
      id: 3,
      icon: <StarIcon width={20} height={20} style={{color: '#61758A'}} />,
      count: '1.0',
      desc: 'avg rating',
    },
    {id: 4, icon: <ImagesIcon />, count: 256, desc: 'photos clicked'},
  ];

  const renderStats = ({item}: any) => (
    <StatCard icon={item.icon} count={item.count} desc={item.desc} />
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenContainer alignItems="flex-start" style={{paddingHorizontal: 16}}>
        <MenuHeader title="Dashboard" />

        <View style={{marginBottom: 20}} />

        <ClassCard item={item} />

        <Title4 marginTop={24} marginBottom={8}>
          Your Statistics
        </Title4>

        <FlatList
          data={stats}
          showsVerticalScrollIndicator={false}
          renderItem={renderStats}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          ItemSeparatorComponent={() => <View style={{height: 12}} />}
        />

        <FlexContainer style={{marginTop: 24, marginBottom: 20}}>
          <Title4>Gallery</Title4>
          <CameraButton />
        </FlexContainer>

        <FlexContainer width="100%" style={{marginBottom: 25}}>
          <Gallery1 source={gallery1} />
          <FlexContainer direction="column" width="50%">
            <Gallery2 source={gallery2} />
            <FlexContainer width="100%" style={{marginTop: 7}}>
              <Gallery3 source={gallery3} />
              <Gallery3 source={gallery4} />
              <GalleryShadow>
                <Title4 color="#F0F5F9">+36</Title4>
              </GalleryShadow>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </ScreenContainer>
    </ScrollView>
  );
}
