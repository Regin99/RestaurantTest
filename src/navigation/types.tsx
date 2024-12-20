import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Main: undefined;
  Shop: undefined;
  Reservation: undefined;
  Contacts: undefined;
  Events: undefined;
  Bonuses: undefined;
  Cart: undefined;
  Order: {text: string};
  Event: {
    id: number;
  };
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
