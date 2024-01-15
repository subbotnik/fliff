import {COLORS} from '@constants/colors';
import {MainNavigatorParamList} from '@navigation/MainNavigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import {selectPhotoByID} from '@store/modules/Photos/selectors';
import {screenWidth} from '@utils/screen';
import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

export const DetailsScreen = () => {
  const {
    params: {photoId},
  } = useRoute<RouteProp<MainNavigatorParamList, 'Details'>>();

  const photoDetails = useSelector(selectPhotoByID(photoId));

  const imageSize = useMemo(() => {
    const height = photoDetails.height / (photoDetails.width / screenWidth);
    return {
      height,
      width: screenWidth,
    };
  }, [photoDetails.height, photoDetails.width]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.wrapper}>
      <FastImage source={{uri: photoDetails.src.original}} style={imageSize} />
      <Text style={styles.description}>{photoDetails.alt}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.white,
  },
});
