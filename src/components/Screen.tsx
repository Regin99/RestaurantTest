import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

type ScreenProps = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({children, containerStyle}: ScreenProps) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
