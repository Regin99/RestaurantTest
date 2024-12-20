import {FlatList} from 'react-native';
import {MainButton} from '../components/main';
import {
  CalendarIcon,
  CartIconSmall,
  PhoneIcon,
  PresentIcon,
  ShopIcon,
  TableIcon,
} from '../components/icons';
import {RootStackParamList} from '../navigation/types';
import {Screen, StickyButton} from '../components';
import {useSelector} from 'react-redux';
import {selectTotalPrice} from '../store/slices/cartSlice';

export const MainScreen = ({navigation}) => {
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
        style={{flex: 1}}
        contentContainerStyle={{gap: 24, paddingBottom: 64}}
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
