import {TApiError} from '@api/httpClient';

type TMobileError = {
  type: 'mobile';
  message?: string;
  name?: string;
};

export type TErrorType = TApiError | TMobileError;

export const getErrorMessage = (
  error: unknown,
): {type: 'mobile'; message?: string; name?: string} => {
  if (
    error instanceof TypeError ||
    error instanceof SyntaxError ||
    error instanceof ReferenceError ||
    error instanceof Error
  ) {
    return {message: error.message, name: error.name, type: 'mobile'};
  }
  return {message: undefined, name: undefined, type: 'mobile'};
};
