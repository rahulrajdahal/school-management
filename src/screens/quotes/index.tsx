import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {HistoryIcon} from '../../assets/icons';
import {Banner} from '../../components/cards/banner';
import {ScreenContainer} from '../../components/containers/screen';
import {MenuHeader} from '../../components/headers/menu';
import {QuotesTopTab} from '../../navigations/toptabs/quotes';

export default function QuotesScreeen() {
  return (
    <ScreenContainer style={{paddingHorizontal: 16}}>
      <MenuHeader title="Quotes" iconRight={<HistoryIcon />} />
      <Banner marginTop={32} marginBottom={20} />
      <QuotesTopTab />
    </ScreenContainer>
  );
}
