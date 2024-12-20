import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../components';
import {EVENTS} from '../mocks/data';
import {RootStackScreenProps} from '../navigation/types';
import {ChevronRightIcon} from '../components/icons';

const InfoSection = ({title, value}: {title: string; value: string}) => (
  <View style={styles.infoSection}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.infoContainer}>
      <ChevronRightIcon />
      <Text style={styles.infoText}>{value}</Text>
    </View>
  </View>
);

export const EventScreen = ({route}: RootStackScreenProps<'Event'>) => {
  const event = EVENTS.find(item => item.id === route.params.id) || EVENTS[0];

  return (
    <Screen>
      <ScrollView>
        <Text style={styles.eventTitle}>{event.name}</Text>
        <Image source={{uri: event.image}} style={styles.eventImage} />
        <Text style={styles.eventDescription}>{event.description}</Text>
        <View style={styles.infoWrapper}>
          <InfoSection title="Time" value={event.time} />
          <InfoSection title="Date" value={event.date} />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  eventTitle: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 16,
  },
  eventImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 28,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 24,
  },
  infoWrapper: {
    gap: 16,
  },
  infoSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#57555533',
  },
  infoText: {
    fontSize: 16,
  },
});
