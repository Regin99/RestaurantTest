import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronRightIcon} from '../icons';
import {useNavigation} from '@react-navigation/native';
import {EventType} from '../../types/data';

export const EventCard = ({name, description, date, time, id}: EventType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Event', {id});
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventName}>{name}</Text>
        <ChevronRightIcon />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footerContainer}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 16,
    borderRadius: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  eventName: {
    fontSize: 16,
    fontWeight: '800',
  },
  description: {
    fontSize: 12,
    marginBottom: 12,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 12,
    color: '#999999',
  },
  timeText: {
    fontSize: 12,
    color: '#999999',
  },
});
