import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {QuotesCard} from '../../../components/cards/quote';
import {ScreenContainer} from '../../../components/containers/screen';

export function AllQuotesScreen() {
  const quotes = [
    {
      id: 1,
      date: 'YESTERDAY',
      quote:
        'Teaching kids to count is fine, but teaching them what counts is best',
      author: 'Bob Talbert',
    },
    {
      id: 2,
      date: '10 OCT 2021',
      quote: 'Nine-Tenths of education is encouragement',
      author: 'Anatole France',
    },
    {
      id: 3,
      date: '09 OCT 2021',
      quote: 'I am not a teacher but an awakener',
      author: 'Robert Frost',
    },
    {
      id: 4,
      date: '09 OCT 2021',
      quote: 'The Art of Teaching is The Art of Assisting Discovery',
      author: 'Mark Van Doren',
    },
    {
      id: 5,
      date: '07 OCT 2021',
      quote:
        'A teacher affects eternity; he can never tell where his influence stops',
      author: 'Anatole France',
    },
    {
      id: 6,
      date: '06 OCT 2021',
      quote:
        'Education is not the filling of a pail, but the lighting of a fire',
      author: 'William Butler Yates',
    },
  ];

  const renderItem = ({item}: any) => <QuotesCard item={item} />;

  return (
    <ScreenContainer>
      <FlatList
        data={quotes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
      />
    </ScreenContainer>
  );
}
