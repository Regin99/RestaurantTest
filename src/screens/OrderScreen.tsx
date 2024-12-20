import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {CustomButton, Screen} from '../components';
import {QRIcon} from '../components/icons';

import {RootStackScreenProps} from '../navigation/types';
import {clearCart} from '../store/slices/cartSlice';

export const OrderScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'Order'>) => {
  const {text} = route.params;
  const dispatch = useDispatch();
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>{text && text}</Text>
        <QRIcon />
      </View>
      <CustomButton
        label="Main page"
        onPress={() => {
          navigation.popTo('Main');
          dispatch(clearCart());
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 44,
    marginBottom: 44,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});
