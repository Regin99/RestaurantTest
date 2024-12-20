import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {FieldError} from 'react-hook-form';
import {TextInputProps} from 'react-native';

type CustomInputProps = {
  label?: string;
  error?: FieldError;
} & TextInputProps;

export const CustomInput = ({
  label,
  error,
  style,
  ...props
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]} // Объединяем переданные стили с дефолтными
        placeholderTextColor="#999999"
        {...props}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#57555533',
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
  },
});
