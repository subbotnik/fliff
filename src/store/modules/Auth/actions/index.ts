import {createAction} from '@store/utils/actions/createAction';

const LOG_IN = createAction('LOG_IN', {
  STATE: (username: string) => ({username}),
});

const LOG_OUT = createAction('LOG_OUT', {
  STATE: true,
});

export const AuthActions = Object.freeze({
  LOG_IN,
  LOG_OUT,
});
