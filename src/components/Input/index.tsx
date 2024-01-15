import {COLORS} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export type CommonInputProps = {
  label: string;
  onChangeText: (text: string) => void;
  value: string;
};

export const CommonInput = ({value, label, onChangeText}: CommonInputProps) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={'Your nickname'}
          placeholderTextColor={COLORS.whiteOpacity}
          style={styles.input}
          autoCorrect={false}
          autoComplete={'off'}
          autoCapitalize={'none'}
          spellCheck={false}
          onChangeText={onChangeText}
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
    color: COLORS.white,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
