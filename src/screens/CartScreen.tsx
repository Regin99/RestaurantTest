import {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {COLORS} from '../constants/colors';
import {SHOP_ITEMS} from '../mocks/data';
import {selectCartItems, selectTotalPrice} from '../store/slices/cartSlice';

import {CustomButton, Screen} from '../components';
import {CartCard, CartEmptyComponent} from '../components/cart';

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

  const renderItem = useCallback(
    ({item}: {item: (typeof filteredData)[0]}) => (
      <CartCard
        image={item.image}
        title={item.title}
        price={item.price}
        info={item.info}
        id={item.id}
      />
    ),
    [],
  );

  const handleAddProducts = () => {
    totalPrice
      ? navigation.navigate('Order', {
          text: 'Your order has been successfully placed!',
        })
      : navigation.goBack();
  };

  return (
    <Screen containerStyle={styles.screenContainer}>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
        ListEmptyComponent={CartEmptyComponent}
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

  addButton: {
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 12,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
