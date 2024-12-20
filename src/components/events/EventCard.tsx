import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {EventType} from '../../types/data';
import {COLORS} from '../../constants/colors';

import {ChevronRightIcon} from '../icons';

export const EventCard = ({name, description, date, time, id}: EventType) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Event', {id});
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <ChevronRightIcon />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{date}</Text>
        <Text style={styles.infoText}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 16,
    borderRadius: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
  },
  description: {
    fontSize: 12,
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    color: COLORS.gray,
  },
});
