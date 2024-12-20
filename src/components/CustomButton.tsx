import React from 'react';
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
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        secondary && styles.secondaryButton,
        !onPress && styles.disabled,
      ]}
      onPress={onPress}
      disabled={!onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 24,
        }}>
        <Text style={[styles.label, secondary && styles.secondaryLabel]}>
          {label}
        </Text>
        {subLabel && (
          <Text
            style={{
              color: COLORS.white,
              flex: 1,
              textAlign: 'right',
            }}>
            {subLabel}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

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
    backgroundColor: COLORS.mainGreen,
    borderRadius: 16,
    height: 48,
    gap: 12,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  stickyButton: {
    backgroundColor: COLORS.mainGreen,
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
    backgroundColor: COLORS.secondaryGray,
    height: 38,
  },
  label: {
    color: COLORS.white,
  },
  secondaryLabel: {
    color: COLORS.darkGray,
  },
  disabled: {
    opacity: 0.5,
  },
});
