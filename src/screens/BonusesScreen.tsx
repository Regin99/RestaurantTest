import {FlatList, StyleSheet, Text, View} from 'react-native';

import {BONUSES} from '../mocks/data';
import {COLORS} from '../constants/colors';
import {BonusType} from '../types/data';

import {CheckmarkIcon, FileIcon} from '../components/icons';
import {Screen} from '../components';

export const BonusesScreen = () => {
  const renderItem = ({item}: {item: BonusType}) => (
    <View style={[styles.orderBox, item.completed && styles.completedOrder]}>
      {item.completed && <FileIcon />}
      {item.completed && (
        <View style={styles.checkmarkIcon}>
          <CheckmarkIcon />
        </View>
      )}
    </View>
  );

  return (
    <Screen>
      <Text style={styles.title}>Bonuses</Text>
      <Text style={styles.description}>
        Make 8 orders at our restaurant and get the next one completely free or
        with a 50% discount! Gather your friends and enjoy delicious food!
      </Text>
      <FlatList
        data={BONUSES}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  orderBox: {
    flex: 1,
    height: 132,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.graySecondary,
  },
  completedOrder: {
    backgroundColor: COLORS.green,
  },
  checkmarkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  flatListContainer: {
    gap: 16,
  },
  columnWrapper: {
    gap: 16,
  },
});
