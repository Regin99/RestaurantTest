import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Screen, StickyButton} from '../components';
import {SegmentedControl, ShopCard} from '../components/shop';
import {useSelector} from 'react-redux';
import {selectTotalPrice} from '../store/slices/cartSlice';
import {CATEGORIES, SHOP_ITEMS} from '../mocks/data';
import {CartIconSmall} from '../components/icons';
import {RootStackScreenProps} from '../navigation/types';
import {ShopItemType} from '../types/data';

type ShopScreenProps = RootStackScreenProps<'Shop'>;

export const ShopScreen = ({navigation}: ShopScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0],
  );
  const totalPrice = useSelector(selectTotalPrice);

  const getCategoryData = () => {
    if (selectedCategory === 'All') {
      return SHOP_ITEMS;
    }
    return SHOP_ITEMS.filter(item => item.category === selectedCategory);
  };

  const renderItem = useCallback(
    ({item}: {item: ShopItemType}) => <ShopCard {...item} />,
    [],
  );

  return (
    <Screen containerStyle={styles.screenContainer}>
      <SegmentedControl
        options={[...CATEGORIES, 'All']}
        active={selectedCategory}
        setActive={setSelectedCategory}
      />
      <FlatList
        style={styles.flatList}
        data={getCategoryData()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
      />
      {!!totalPrice && (
        <StickyButton
          label={`${totalPrice} $`}
          icon={CartIconSmall}
          onPress={() => navigation.navigate('Cart')}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 0,
  },
  flatList: {
    marginTop: 16,
  },
  flatListContent: {
    gap: 16,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  columnWrapper: {
    gap: 16,
  },
});
