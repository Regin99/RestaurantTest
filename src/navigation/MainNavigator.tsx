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
import {RootStack} from './RootStack';

export const MainNavigator = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      headerTitleStyle: {fontWeight: 500, color: COLORS.black},
      headerBackTitle: 'Back',
      headerTintColor: COLORS.green,
      headerBackTitleStyle: {color: COLORS.green},
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
