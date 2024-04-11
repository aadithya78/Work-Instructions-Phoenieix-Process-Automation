import { createSlice } from '@reduxjs/toolkit'; // Use createSlice from Redux Toolkit

const initialState = {
  apiLink: '',
};

const apiLinkSlice = createSlice({
  name: 'apiLink',
  initialState,
  reducers: {
    setApiLink(state, action) {
      state.apiLink = action.payload;
    },
  },
});

export const { setApiLink } = apiLinkSlice.actions;
export default apiLinkSlice.reducer;