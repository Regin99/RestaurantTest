import {View, StyleSheet, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React, {useState} from 'react';

import {RootStackScreenProps} from '../navigation/types';

import {CustomButton, Screen} from '../components';
import {CalendarIconSmall, ClockIcon} from '../components/icons';
import {InputField} from '../components/reservation';
import {DateTimePicker} from '../components/reservation/DateTimePicker';

export const ReservationScreen = ({
  navigation,
}: RootStackScreenProps<'Reservation'>) => {
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      table: '',
      date: '',
      time: '',
    },
  });

  const onSubmit = () =>
    navigation.navigate('Order', {
      text: 'The reservation is successful!',
    });

  return (
    <Screen containerStyle={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <InputField
          label="First name"
          placeholder="Enter your first name"
          name="name"
          control={control}
          rules={{required: 'This field is required'}}
          errorMessage={errors.name}
        />
        <InputField
          label="Phone number"
          placeholder="Enter your phone number"
          name="phone"
          control={control}
          rules={{required: 'This field is required'}}
          errorMessage={errors.phone}
        />
        <InputField
          label="Table №"
          placeholder="Enter your table"
          name="table"
          control={control}
          rules={{required: 'This field is required'}}
          errorMessage={errors.table}
        />

        <View style={styles.dateTimeContainer}>
          <Controller
            control={control}
            rules={{required: 'This field is required'}}
            render={({field: {value, onChange}}) => (
              <DateTimePicker
                label="Time"
                value={value}
                onChange={onChange}
                openModal={isTimeOpen}
                setOpenModal={setIsTimeOpen}
                mode="time"
                IconComponent={ClockIcon}
                defaultText="HH:MM"
                errorMessage={errors.time?.message}
              />
            )}
            name="time"
          />
          <Controller
            control={control}
            rules={{required: 'This field is required'}}
            render={({field: {value, onChange}}) => (
              <DateTimePicker
                label="Date"
                value={value}
                onChange={onChange}
                openModal={isDateOpen}
                setOpenModal={setIsDateOpen}
                mode="date"
                IconComponent={CalendarIconSmall}
                defaultText="DD.MM.YY"
                errorMessage={errors.date?.message}
              />
            )}
            name="date"
          />
        </View>
      </ScrollView>
      <CustomButton
        label="Make a reservation"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
  },
  scrollContainer: {
    gap: 8,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
