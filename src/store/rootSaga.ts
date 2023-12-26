import {rootPhotosSaga} from '@store/modules/Photos/sagas';
import {SagaIterator} from 'redux-saga';
import {all, call} from 'redux-saga/effects';

export function* rootSaga(): SagaIterator {
  yield all([call(rootPhotosSaga)]);
}
