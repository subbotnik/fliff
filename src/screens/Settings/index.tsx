import {CommonButton} from '@components/Button';
import {COLORS} from '@constants/colors';
import {AuthActions} from '@store/modules/Auth/actions';
import {usernameSelector} from '@store/modules/Auth/selectors';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const [uniqueId, setId] = useState('');

  const logout = useCallback(() => {
    dispatch(AuthActions.LOG_OUT.STATE.create());
  }, [dispatch]);

  const getId = useCallback(async () => {
    const id = await getUniqueId();
    setId(id);
  }, []);

  useEffect(() => {
    getId();
  }, [getId]);

  const username = useSelector(usernameSelector);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.deviceId}>{`Username: ${username}`}</Text>
      <Text style={styles.deviceId}>{`Device ID: ${uniqueId}`}</Text>
      <CommonButton text={'logout'} onPress={logout} />
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
  deviceId: {
    color: COLORS.text,
  },
});
