import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {QuotesCard} from '../../../components/cards/quote';
import {ScreenContainer} from '../../../components/containers/screen';

export function FavoriteQuotesScreen() {
  const favoritequotes = [
    {
      id: 1,
      date: 'YESTERDAY',
      quote:
        'Teaching kids to count is fine, but teaching them what counts is best',
      author: 'Bob Talbert',
      favorite: true,
    },
    {
      id: 2,
      date: '10 OCT 2021',
      quote: 'Nine-Tenths of education is encouragement',
      author: 'Anatole France',
      favorite: true,
    },
  ];

  const renderItem = ({item}: any) => <QuotesCard item={item} />;

  return (
    <ScreenContainer>
      <FlatList
        data={favoritequotes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
      />
    </ScreenContainer>
  );
}
