import {StyleSheet, Text, View} from 'react-native';

import {CartIcon} from '../icons';

export const CartEmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <CartIcon />
    <Text style={styles.emptyTitle}>Your basket is currently empty</Text>
    <Text style={styles.emptySubtitle}>
      Add items from the catalogue and they will appear here.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 44,
  },
  emptySubtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
