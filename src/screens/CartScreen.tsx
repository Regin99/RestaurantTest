import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {CustomButton, Screen} from '../components';
import {CartIcon} from '../components/icons';
import {CartCard} from '../components/cart';
import {COLORS} from '../constants/colors';
import {SHOP_ITEMS} from '../mocks/data';
import {selectCartItems, selectTotalPrice} from '../store/slices/cartSlice';

export const CartScreen = () => {
  const navigation = useNavigation();
  const cartData = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const filteredData = useMemo(() => {
    return SHOP_ITEMS.filter(item =>
      cartData.some(cartItem => cartItem.id === item.id),
    ).map(item => {
      const cartItem = cartData.find(itemInCart => itemInCart.id === item.id);

      return {
        ...item,
        quantity: cartItem?.quantity || 0,
      };
    });
  }, [cartData]);

  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <CartIcon />
      <Text style={styles.emptyTitle}>Your basket is currently empty</Text>
      <Text style={styles.emptySubtitle}>
        Add items from the catalogue and they will appear here.
      </Text>
    </View>
  );

  const renderCartItem = ({item}: {item: (typeof filteredData)[0]}) => (
    <CartCard
      image={item.image}
      title={item.title}
      price={item.price}
      info={item.info}
      id={item.id}
    />
  );

  const handleAddProducts = () => {
    navigation.navigate('Order', {
      text: 'Your order has been successfully placed!',
    });
  };

  return (
    <Screen containerStyle={styles.screenContainer}>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={renderCartItem}
        ListEmptyComponent={renderEmptyCart}
        keyExtractor={item => item.id.toString()}
      />
      <CustomButton
        label={totalPrice ? 'Totally' : 'Add products'}
        subLabel={totalPrice ? totalPrice + ' $' : ''}
        onPress={handleAddProducts}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 24,
  },
  listContent: {
    flexGrow: 1,
    gap: 24,
  },
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
  addButton: {
    backgroundColor: COLORS.mainGreen,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 12,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
