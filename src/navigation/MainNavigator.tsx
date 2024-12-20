import {RootStack} from './RootStack';
import {COLORS} from '../constants/colors';
import {
  BonusesScreen,
  CartScreen,
  ContactsScreen,
  EventsScreen,
  MainScreen,
  OrderScreen,
  ReservationScreen,
  ShopScreen,
} from '../screens';
import {EventScreen} from '../screens/EventScreen';

export const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {fontWeight: 500, color: '#000'},
        headerBackTitle: 'Back',
        headerTintColor: COLORS.mainGreen,
        headerBackTitleStyle: {color: COLORS.mainGreen},
      }}>
      <RootStack.Screen
        name="Main"
        component={MainScreen}
        options={{headerTitle: 'Logo or name'}}
      />
      <RootStack.Screen name="Shop" component={ShopScreen} />
      <RootStack.Screen name="Reservation" component={ReservationScreen} />
      <RootStack.Screen name="Contacts" component={ContactsScreen} />
      <RootStack.Screen name="Events" component={EventsScreen} />
      <RootStack.Screen
        name="Bonuses"
        component={BonusesScreen}
        options={{headerTitle: ''}}
      />
      <RootStack.Screen name="Cart" component={CartScreen} />
      <RootStack.Screen name="Order" component={OrderScreen} />
      <RootStack.Screen
        name="Event"
        component={EventScreen}
        options={{headerTitle: ''}}
      />
    </RootStack.Navigator>
  );
};
