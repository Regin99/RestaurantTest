import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';
type SegmentedControl = {
  active: string;
  setActive: (active: string) => void;
  options: string[];
};

export const SegmentedControl = ({
  active,
  setActive,
  options,
}: SegmentedControl) => (
  <View style={styles.controlContainer}>
    {options.map((option, index) => (
      <View style={styles.optionWrapper} key={index}>
        <TouchableOpacity
          style={[styles.option, active === option && styles.activeOption]}
          onPress={() => setActive(option)}>
          <Text
            style={[styles.optionText, active === option && styles.activeText]}>
            {option}
          </Text>
        </TouchableOpacity>

        {index < options.length - 1 && active !== option && (
          <View style={styles.separator} />
        )}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.graySecondary,
    padding: 2,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  option: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 12,
    alignItems: 'center',
  },
  activeOption: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000020',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
  },
  activeText: {
    fontWeight: '600',
    color: '#000',
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: COLORS.lightGray,
  },
});
