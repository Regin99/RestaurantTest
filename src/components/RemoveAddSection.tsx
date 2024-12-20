import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

import {MinusIcon, PlusIcon} from './icons';

type RemoveAddSectionProps = {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

export const RemoveAddSection = ({
  quantity,
  onAdd,
  onRemove,
}: RemoveAddSectionProps) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onRemove}>
      <MinusIcon />
    </TouchableOpacity>
    <Text style={styles.quantity}>{quantity}</Text>
    <TouchableOpacity style={styles.button} onPress={onAdd}>
      <PlusIcon />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    height: 38,
    flex: 1,
    gap: 12,
    backgroundColor: COLORS.whiteSecondary,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
