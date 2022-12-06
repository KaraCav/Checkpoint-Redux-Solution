import { createSlice } from '@reduxjs/toolkit';

export const cashSlice = createSlice({
  name: 'cash',
  initialState: 0,
  reducers: {
    receivedPaycheck(state, action) {
      return state + action.payload;
    },
    paidBill(state, action) {
      return state - action.payload;
    },
  },
});

export default cashSlice.reducer;
