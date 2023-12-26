import {PhotoDetails} from '@api/pexels/getPhotos';
import {PhotosResponse} from '@api/pexels/getPhotos';
import {createAction} from '@store/utils/actions/createAction';
import {TErrorType} from '@utils/error';

const LOAD_PHOTOS = createAction('LOAD_PHOTOS', {
  START: (page: number) => ({page}),
  SUCCESS: (
    data: PhotosResponse,
    photosById: {[photoId: string]: PhotoDetails},
  ) => ({data, photosById}),
  FAILED: (error: TErrorType) => ({error}),
});

const LOAD_PHOTO_DETAILS = createAction('LOAD_PHOTO_DETAILS', {
  START: (id: number) => ({id}),
  SUCCESS: (data: PhotoDetails) => ({data}),
  FAILED: (error: TErrorType) => ({error}),
});

export const PhotosActions = Object.freeze({
  LOAD_PHOTOS,
  LOAD_PHOTO_DETAILS,
});
