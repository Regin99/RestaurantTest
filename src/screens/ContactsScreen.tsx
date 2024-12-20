import {StyleSheet} from 'react-native';

import {CustomInput, Screen} from '../components';

export const ContactsScreen = () => {
  return (
    <Screen containerStyle={styles.container}>
      <CustomInput
        label={'Phone number'}
        value="+7 (777) 777-77-77"
        editable={false}
      />
      <CustomInput label={'Address'} value="California, USA" editable={false} />
      <CustomInput label={'Comments'} value="Comments" editable={false} />
      <CustomInput label={'Index'} value="000" editable={false} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
