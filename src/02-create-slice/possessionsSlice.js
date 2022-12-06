import { createSlice } from '@reduxjs/toolkit';

export const possessionsSlice = createSlice({
  name: 'possessions',
  initialState: [],
  reducers: {
    receivedGift(state, action) {
      state.push(action.payload);
    },
  },
});

export default possessionsSlice.reducer;
