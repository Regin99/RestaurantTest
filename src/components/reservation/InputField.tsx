import {
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {CustomInput} from '../CustomInput';

type CustomInputProps = {
  label?: string;
  errorMessage?: FieldError;
  name: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  control: any;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

export const InputField = ({
  label,
  placeholder,
  name,
  control,
  rules,
  errorMessage,
}: CustomInputProps) => (
  <Controller
    control={control}
    rules={rules}
    render={({field: {onChange, onBlur, value}}) => (
      <CustomInput
        label={label}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        error={errorMessage}
      />
    )}
    name={name}
  />
);
