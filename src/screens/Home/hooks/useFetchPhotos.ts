import {PhotosActions} from '@store/modules/Photos/actions';
import {selectData, selectPhotos} from '@store/modules/Photos/selectors';
import {
  failedReasonSelector,
  isLoadingSelector,
} from '@store/modules/UtilityProcessStatuses/selectors';
import {useCallback, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useFetchPhotos = () => {
  const dispatch = useDispatch();
  const photoData = useSelector(selectData);
  const photos = useSelector(selectPhotos);

  const hasNext = Boolean(photoData?.next_page) ?? false;
  const page = photoData?.page ?? 1;

  const refreshingRef = useRef(false);
  const loadNextLoadingRef = useRef(false);

  const error = useSelector(
    failedReasonSelector.bind(null, PhotosActions.LOAD_PHOTOS),
  );

  const loading = useSelector(
    isLoadingSelector.bind(null, PhotosActions.LOAD_PHOTOS),
  );

  if (refreshingRef.current && !loading) {
    refreshingRef.current = false;
  }

  if (loadNextLoadingRef.current && !loading) {
    loadNextLoadingRef.current = false;
  }

  const fetch = useCallback(
    ({pageNum}: {pageNum: number}) => {
      dispatch(PhotosActions.LOAD_PHOTOS.START.create(pageNum));
    },
    [dispatch],
  );

  const loadNext = useCallback(() => {
    if (hasNext && !loading) {
      loadNextLoadingRef.current = true;
      fetch({pageNum: page + 1});
    }
  }, [fetch, loading, hasNext, page]);

  const refresh = useCallback(() => {
    refreshingRef.current = true;
    fetch({pageNum: 1});
  }, [fetch]);

  const refreshing = loading && refreshingRef.current;
  const loadNextLoading = loading && loadNextLoadingRef.current;

  return {
    photos,
    error,
    hasNext,
    loadNext,
    loadNextLoading,
    refresh,
    refreshing,
    fetch,
    loading,
  };
};
