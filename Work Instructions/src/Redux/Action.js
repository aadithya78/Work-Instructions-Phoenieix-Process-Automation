import { createAction } from '@reduxjs/toolkit'; // Use createAction from Redux Toolkit

export const setApiLink = createAction('apiLink/set', (apiLink) => ({
  payload: apiLink,
}));