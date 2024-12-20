import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  addItem,
  removeItem,
  selectItemById,
} from '../../store/slices/cartSlice';
import {ShopItemType} from '../../types/data';
import {COLORS} from '../../constants/colors';

import {RemoveAddSection} from '../RemoveAddSection';

type CartCardProps = Pick<ShopItemType, 'id' | 'price'> & Partial<ShopItemType>;

export const CartCard = ({image, price, info, title, id}: CartCardProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectItemById(id));

  const handleAdd = () => {
    dispatch(addItem({id, price}));
  };

  const handleRemove = () => {
    dispatch(removeItem({id, price}));
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text>{title}</Text>
        <View style={styles.priceInfoContainer}>
          <View style={styles.priceContainer}>
            <Text>{price}</Text>
            <Text style={styles.infoText}> • {info}</Text>
          </View>
          {cartItem && (
            <RemoveAddSection
              quantity={cartItem.quantity}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.whiteSecondary,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 68,
    height: 50,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  priceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  infoText: {
    color: COLORS.lightGray,
  },
});
