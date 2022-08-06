import { lazy } from 'react';

export const createAsyncPage = componentName => {
  return lazy(() => {
    return import(`../../page/${componentName}`);
  });
};
