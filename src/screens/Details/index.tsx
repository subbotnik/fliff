import {COLORS} from '@constants/colors';
import {MainNavigatorParamList} from '@navigation/MainNavigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import {selectPhotoByID} from '@store/modules/Photos/selectors';
import {screenWidth} from '@utils/screen';
import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
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
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <FastImage
          source={{uri: photoDetails.src.original}}
          style={imageSize}
        />
        <Text style={styles.description}>{photoDetails.alt}</Text>
        <Text style={styles.photographer}>{photoDetails.photographer}</Text>
      </ScrollView>
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
  photographer: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'right',
    color: COLORS.white,
  },
});
