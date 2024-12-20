import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {COLORS} from '../../constants/colors';

type DateTimePickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  mode: 'date' | 'time';
  IconComponent: any;
  defaultText: string;
  errorMessage?: string;
};

export const DateTimePicker = ({
  label,
  value,
  onChange,
  openModal,
  setOpenModal,
  mode,
  IconComponent,
  defaultText,
  errorMessage,
}: DateTimePickerProps) => (
  <View style={styles.dateTimePickerContainer}>
    <Text style={styles.datetimeLabel}>{label}</Text>
    <TouchableOpacity
      style={styles.datetimeContainer}
      onPress={() => setOpenModal(true)}>
      <IconComponent />
      <Text style={[styles.datetimeLabel, !value && {color: COLORS.gray}]}>
        {value || defaultText}
      </Text>
    </TouchableOpacity>
    {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    <DatePicker
      modal
      open={openModal}
      date={new Date()}
      mode={mode}
      onConfirm={date => {
        const formattedValue =
          mode === 'time'
            ? `${date.getHours()}:${date.getMinutes()}`
            : `${('0' + date.getDate()).slice(-2)}.${(
                '0' +
                (date.getMonth() + 1)
              ).slice(-2)}.${date.getFullYear() % 100}`;
        setOpenModal(false);
        onChange(formattedValue);
      }}
      onCancel={() => setOpenModal(false)}
    />
  </View>
);

const styles = StyleSheet.create({
  dateTimePickerContainer: {
    flex: 1,
    gap: 8,
  },
  datetimeContainer: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.graySecondary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  datetimeLabel: {
    fontSize: 16,
    color: COLORS.black,
  },
  errorText: {
    color: 'red',
  },
});
