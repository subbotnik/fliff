import {COLORS} from '@constants/colors';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type CommonInputProps = TextInputProps & {
  text: string;
  onPress: () => void;
  loading?: boolean;
  onChange?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const CommonButton = ({onPress, text}: CommonInputProps) => {
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
