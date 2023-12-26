import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthActions} from '@store/modules/Auth/actions';
import {produce} from 'immer';
import {persistReducer} from 'redux-persist';

export interface State {
  isLoggedIn: boolean;
  username: string | undefined;
}

type Actions = ReturnType<
  | typeof AuthActions.LOG_IN.STATE.create
  | typeof AuthActions.LOG_OUT.STATE.create
>;

const INITIAL_STATE: State = {
  isLoggedIn: false,
  username: undefined,
};

export function reducer(state = INITIAL_STATE, action: Actions): State {
  return produce(state, draft => {
    switch (action.type) {
      case AuthActions.LOG_IN.STATE.type:
        draft.isLoggedIn = true;
        draft.username = action.payload.username;
        break;
      case AuthActions.LOG_OUT.STATE.type:
        draft.isLoggedIn = false;
        break;
    }
  });
}

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export const authReducer = persistReducer(persistConfig, reducer);
