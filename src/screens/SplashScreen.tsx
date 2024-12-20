import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../constants/colors';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo or name</Text>
      <ActivityIndicator color={COLORS.mainGreen} />
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 130,
    textAlign: 'center',
  },
  image: {
    height: 500,
    width: '100%',
    resizeMode: 'contain',
  },
});
