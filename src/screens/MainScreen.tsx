import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {selectTotalPrice} from '../store/slices/cartSlice';
import {RootStackParamList, RootStackScreenProps} from '../navigation/types';

import {MainButton} from '../components/main';
import {
  CalendarIcon,
  CartIconSmall,
  PhoneIcon,
  PresentIcon,
  ShopIcon,
  TableIcon,
} from '../components/icons';
import {Screen, StickyButton} from '../components';

export const MainScreen = ({navigation}: RootStackScreenProps<'Main'>) => {
  const totalPrice = useSelector(selectTotalPrice);

  const data = [
    {label: 'Shop', icon: ShopIcon, route: 'Shop' as keyof RootStackParamList},
    {
      label: 'Reservation',
      icon: TableIcon,
      route: 'Reservation' as keyof RootStackParamList,
    },
    {
      label: 'Contacts',
      icon: PhoneIcon,
      route: 'Contacts' as keyof RootStackParamList,
    },
    {
      label: 'Restaurant events',
      icon: CalendarIcon,
      route: 'Events' as keyof RootStackParamList,
    },
    {
      label: 'Bonuses',
      icon: PresentIcon,
      route: 'Bonuses' as keyof RootStackParamList,
    },
  ];

  return (
    <Screen>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={({item}) => (
          <MainButton label={item.label} icon={item.icon} route={item.route} />
        )}
      />
      {!!totalPrice && (
        <StickyButton
          label={totalPrice + ' $'}
          icon={CartIconSmall}
          onPress={() => navigation.navigate('Cart')}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    gap: 24,
    paddingBottom: 64,
  },
});
