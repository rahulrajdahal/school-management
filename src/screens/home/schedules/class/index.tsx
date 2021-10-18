import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import {ClassCard} from '../../../../components/cards/class';
import {SchedulesCard} from '../../../../components/cards/schedule';
import {ScreenContainer} from '../../../../components/containers/screen';
import {MenuHeader} from '../../../../components/headers/menu';

export function ClassScreen({navigation, route}: any) {
  const item = route.params;

  const ref = useRef();

  const transition = (
    <Transition.Together>
      <Transition.In type="slide-left" durationMs={600} />
      <Transition.Change />
      <Transition.Out type="slide-top" durationMs={6000} />
    </Transition.Together>
  );

  return (
    <ScreenContainer alignItems="flex-start" style={{paddingHorizontal: 16}}>
      <MenuHeader title="Dashboard" />

      <View style={{marginBottom: 20}} />

      <ClassCard item={item} />
    </ScreenContainer>
  );
}
