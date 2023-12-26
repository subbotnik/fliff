import {PhotoDetails} from '@api/pexels/getPhotos';
import {COLORS} from '@constants/colors';
import {MainNavigatorParamList} from '@navigation/MainNavigator';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useFetchPhotos} from './hooks/useFetchPhotos';

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigatorParamList>>();

  const {fetch, loadNext, photos, refresh, refreshing} = useFetchPhotos();

  useEffect(() => {
    if (!photos.length) {
      fetch({pageNum: 1});
    }
  }, [fetch, photos.length]);

  const onPress = useCallback(
    (photoId: number) => {
      navigation.navigate('Details', {photoId: photoId.toString()});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: PhotoDetails}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onPress(item.id)}
          key={item.id}
          style={styles.button}>
          <View style={styles.imageContainer}>
            <FastImage source={{uri: item.src.medium}} style={styles.image} />
            <Text style={styles.photographer}>{item.photographer}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [onPress],
  );

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.wrapper}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={loadNext}
        onRefresh={refresh}
        refreshing={refreshing}
        ListEmptyComponent={<ActivityIndicator color={COLORS.secondary} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.text,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imageContainer: {
    width: '100%',
    borderRadius: 20,
    shadowColor: COLORS.shadow,
    shadowRadius: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.7,
    elevation: 4,
    backgroundColor: COLORS.main,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  photographer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: COLORS.text,
  },
});
