import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CustomButton, CustomInput, Screen} from '../components';
import {useForm, Controller} from 'react-hook-form';
import {RootStackScreenProps} from '../navigation/types';

export const ReservationScreen = ({
  navigation,
}: RootStackScreenProps<'Reservation'>) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      table: '',
    },
  });

  const onSubmit = () =>
    navigation.navigate('Order', {
      text: 'The reservation is successful!',
    });

  return (
    <Screen containerStyle={styles.screenContainer}>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="First name"
              placeholder="Enter your first name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Phone number"
              placeholder="Enter your phone number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.phone}
            />
          )}
          name="phone"
        />
        <Controller
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Table №"
              placeholder="Enter your table"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.table}
            />
          )}
          name="table"
        />
      </View>
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
  formContainer: {
    gap: 16,
  },
});
