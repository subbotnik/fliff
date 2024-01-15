import {COLORS} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type CommonButtonProps = {
  text: string;
  onPress: () => void;
};

export const CommonButton = ({onPress, text}: CommonButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.button,
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
