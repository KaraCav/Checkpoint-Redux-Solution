import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBalloonsAsync = createAsyncThunk(
  'balloons/fetchBalloons',
  async () => {
    const response = await axios.get('/balloons');
    const balloons = response.data;
    return balloons;
  }
);

export const addBalloonAsync = createAsyncThunk(
  'balloons/addBalloon',
  async (color) => {
    const response = await axios.post('/balloons', { color: color });
    const newBalloon = response.data;
    return newBalloon;
  }
);

export const balloonsSlice = createSlice({
  name: 'balloons',
  initialState: {
    balloons: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBalloonsAsync.fulfilled, (state, action) => {
        state.balloons = action.payload;
      })
      .addCase(fetchBalloonsAsync.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(addBalloonAsync.fulfilled, (state, action) => {
        state.balloons.push(action.payload);
      });
  },
});

export const store = configureStore({
  reducer: {
    balloons: balloonsSlice.reducer,
  },
});
