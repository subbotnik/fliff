import {COLORS} from '@constants/colors';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

export type CommonInputProps = TextInputProps & {
  label: string;
  value: string;
  loading?: boolean;
  onValueChange?: (v: string) => void;
  onChange?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const CommonInput = ({
  value,
  label,
  onValueChange,
}: CommonInputProps) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={'Your nickname'}
          placeholderTextColor={COLORS.textOpacity}
          style={styles.input}
          autoCorrect={false}
          autoComplete={'off'}
          autoCapitalize={'none'}
          spellCheck={false}
          onChangeText={onValueChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: COLORS.text,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: COLORS.text,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    color: COLORS.text,
    textTransform: 'uppercase',
  },
});
