import {PhotosActions} from '@store/modules/Photos/actions';
import {loadPhotosSaga} from '@store/modules/Photos/sagas/loadPhotosSaga';
import {all, takeLatest} from 'redux-saga/effects';

export function* rootPhotosSaga() {
  yield all([takeLatest(PhotosActions.LOAD_PHOTOS.START.type, loadPhotosSaga)]);
}
