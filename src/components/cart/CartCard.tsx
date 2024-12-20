import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItem,
  removeItem,
  selectItemById,
} from '../../store/slices/cartSlice';
import {RemoveAddSection} from '../RemoveAddSection';
import {ShopItemType} from '../../types/data';

type CartCardProps = {
  id: number;
  price: string;
} & Partial<ShopItemType>;

export const CartCard = ({image, price, info, title, id}: CartCardProps) => {
  const cartItem = useSelector(selectItemById(id));
  const dispatch = useDispatch();

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
    backgroundColor: '#F1F1F1',
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
  },
  priceContainer: {
    flexDirection: 'row',
  },
  infoText: {
    color: 'gray',
  },
});
