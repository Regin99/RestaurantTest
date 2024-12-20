import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  addItem,
  removeItem,
  selectItemById,
} from '../../store/slices/cartSlice';
import {ShopItemType} from '../../types/data';

import {RemoveAddSection} from '../RemoveAddSection';
import {CustomButton} from '../CustomButton';
import {COLORS} from '../../constants/colors';

type ShopCardProps = ShopItemType;

export const ShopCard = ({
  id,
  image,
  priceDiscount,
  price,
  title,
  info,
}: ShopCardProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectItemById(id));

  const handleAdd = () => dispatch(addItem({id, price}));
  const handleRemove = () => dispatch(removeItem({id, price}));

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: image}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceDiscount}>{priceDiscount}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text numberOfLines={2}>{title}</Text>
        <Text>{info}</Text>
      </View>
      {cartItem ? (
        <RemoveAddSection
          quantity={cartItem.quantity}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      ) : (
        <CustomButton label="Add to cart" secondary onPress={handleAdd} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  cardImage: {
    height: 174,
    width: 171,
    borderRadius: 12,
    transform: [{rotate: '270deg'}],
    resizeMode: 'contain',
  },
  cardContent: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  priceDiscount: {
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.black,
    textDecorationLine: 'line-through',
  },
});
