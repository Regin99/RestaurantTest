import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {EventCard} from '../components/events/EventCard';
import {Screen} from '../components';
import {EVENTS} from '../mocks/data';

export const EventsScreen = () => {
  return (
    <Screen>
      <FlatList
        contentContainerStyle={styles.listContent}
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
