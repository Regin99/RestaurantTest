import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

import {EVENTS} from '../mocks/data';

import {EventCard} from '../components/events/EventCard';
import {Screen} from '../components';

export const EventsScreen = () => {
  return (
    <Screen>
      <FlatList
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        data={EVENTS}
        renderItem={({item}) => <EventCard {...item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContent: {
    gap: 16,
  },
});
