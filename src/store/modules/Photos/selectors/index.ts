import {RootState} from '@store/rootReducer';

export const selectPhotosRoot = (state: RootState) => state.photos;

export const selectDataPhotos = (state: RootState) =>
  selectPhotosRoot(state).data?.photos;
export const selectPhotos = (state: RootState) =>
  selectPhotosRoot(state).photos;

export const selectData = (state: RootState) => selectPhotosRoot(state).data;

export const selectPhotoByID = (photoId: string) => (state: RootState) =>
  selectPhotosRoot(state).photosById[photoId];
