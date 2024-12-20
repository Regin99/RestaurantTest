import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../navigation/types';

export const MainButton = ({
  label,
  icon,
  route,
}: {
  label: string;
  icon?: () => JSX.Element;
  route?: keyof RootStackParamList;
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => route && navigation.navigate(route as any)}
      disabled={!route}>
      <Text style={styles.buttonLabel}>{label}</Text>
      {icon && icon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 23,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '800',
  },
});