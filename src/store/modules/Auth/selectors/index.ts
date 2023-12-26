import {RootState} from '@store/rootReducer';

const rootSelector = (state: RootState) => state.auth;

export const isLoggedInSelector = (state: RootState) =>
  rootSelector(state).isLoggedIn;

export const usernameSelector = (state: RootState) =>
  rootSelector(state).username;
