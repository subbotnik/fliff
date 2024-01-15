import {CommonButton} from '@components/Button';
import {CommonInput} from '@components/Input';
import {COLORS} from '@constants/colors';
import {AuthActions} from '@store/modules/Auth/actions';
import {validTwitterUser} from '@utils/nickname';
import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

export const LoginScreen = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const login = useCallback(() => {
    if (validTwitterUser(value)) {
      dispatch(AuthActions.LOG_IN.STATE.create(value));
    }
  }, [dispatch, value]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CommonInput label={'nickname'} value={value} onChangeText={setValue} />
      <CommonButton text={'login'} onPress={login} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
    padding: 20,
    justifyContent: 'center',
  },
});
