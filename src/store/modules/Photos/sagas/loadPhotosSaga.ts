import {API} from '@api/index';
import {PhotoDetails} from '@api/pexels/getPhotos';
import {PhotosActions} from '@store/modules/Photos/actions';
import {getErrorMessage} from '@utils/error';
import {call, put, SagaReturnType} from 'redux-saga/effects';

export function* loadPhotosSaga(
  action: ReturnType<typeof PhotosActions.LOAD_PHOTOS.START.create>,
) {
  const {page} = action.payload;
  try {
    const {data}: SagaReturnType<typeof API.getPhotos> = yield call(
      API.getPhotos,
      {page},
    );

    if (data) {
      const photosById: {[photoId: number]: PhotoDetails} = {};
      data.photos.forEach(photo => {
        if (!photosById[photo.id]) {
          photosById[photo.id] = photo;
        }
      });

      yield put(PhotosActions.LOAD_PHOTOS.SUCCESS.create(data, photosById));
    }
  } catch (error) {
    yield put(PhotosActions.LOAD_PHOTOS.FAILED.create(getErrorMessage(error)));
  }
}
