import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../constants/colors';

type ButtonProps = {
  onPress?: () => void;
  label: string;
  subLabel?: string;
  secondary?: boolean;
  icon?: () => JSX.Element;
};

export const CustomButton = ({
  onPress,
  label,
  secondary,
  subLabel,
}: ButtonProps) => (
  <TouchableOpacity
    style={[
      styles.button,
      secondary && styles.secondaryButton,
      !onPress && styles.disabled,
    ]}
    onPress={onPress}
    disabled={!onPress}>
    <View style={styles.buttonContent}>
      <Text style={[styles.label, secondary && styles.secondaryLabel]}>
        {label}
      </Text>
      {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
    </View>
  </TouchableOpacity>
);

export const StickyButton = ({
  onPress,
  label,
  secondary,
  icon,
}: ButtonProps) => (
  <TouchableOpacity
    style={[
      styles.stickyButton,
      secondary && styles.secondaryButton,
      !onPress && styles.disabled,
    ]}
    onPress={onPress}
    disabled={!onPress}>
    {icon && icon()}
    <Text style={[styles.label, secondary && styles.secondaryLabel]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    borderRadius: 16,
    height: 48,
    gap: 12,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  stickyButton: {
    backgroundColor: COLORS.green,
    borderRadius: 16,
    height: 38,
    position: 'absolute',
    bottom: 58,
    alignSelf: 'center',
    paddingHorizontal: 44,
    gap: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: COLORS.graySecondary,
    height: 38,
  },
  label: {
    color: COLORS.white,
  },
  secondaryLabel: {
    color: COLORS.black,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 24,
  },
  subLabel: {
    color: COLORS.white,
    flex: 1,
    textAlign: 'right',
  },
});
