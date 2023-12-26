import {PhotoDetails} from '@api/pexels/getPhotos';
import {PhotosResponse} from '@api/pexels/getPhotos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PhotosActions} from '@store/modules/Photos/actions';
import {produce} from 'immer';
import {persistReducer} from 'redux-persist';

export interface State {
  data: PhotosResponse | null;
  photos: PhotoDetails[];
  photosById: {
    [photoId: string]: PhotoDetails;
  };
}

type Actions = ReturnType<
  | typeof PhotosActions.LOAD_PHOTOS.SUCCESS.create
  | typeof PhotosActions.LOAD_PHOTO_DETAILS.SUCCESS.create
>;

const INITIAL_STATE: State = {
  data: null,
  photos: [],
  photosById: {},
};

export function reducer(state = INITIAL_STATE, action: Actions): State {
  return produce(state, draft => {
    switch (action.type) {
      case PhotosActions.LOAD_PHOTOS.SUCCESS.type:
        draft.data = action.payload.data;
        draft.photosById = {
          ...draft.photosById,
          ...action.payload.photosById,
        };
        if (action.payload.data.page === 1) {
          draft.photos = action.payload.data.photos;
        } else {
          draft.photos = draft.photos.concat(action.payload.data.photos);
        }
        break;
    }
  });
}

const persistConfig = {
  key: 'photos',
  storage: AsyncStorage,
};

export const photosReducer = persistReducer(persistConfig, reducer);
