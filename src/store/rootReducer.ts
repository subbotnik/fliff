import {authReducer} from '@store/modules/Auth/reducer';
import {photosReducer} from '@store/modules/Photos/reducer';
import {processStatusesReducer} from '@store/modules/UtilityProcessStatuses/reducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  photos: photosReducer,
  utilityProcessStatuses: processStatusesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
