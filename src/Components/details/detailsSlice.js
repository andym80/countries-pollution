import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getStats = createAsyncThunk('airstats/getStats', async () => {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=6985e2582f21a46bb1d3befb70e9b0ab',
  );
  const detailsdata = await response.json();
  return detailsdata;
});

const initialState = [];

const detailsSlice = createSlice({
  name: 'airstats',
  initialState,
  reducers: {
    joinAirStats: (state, action) => state.map((AirStats) => {
      if (AirStats.AirStats_id === action.payload) {
        return { ...AirStats, joined: !AirStats.joined };
      }
      return AirStats;
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(getStats.fulfilled, (state, action) => action.payload);
  },
});

export const { joinAirStats, leaveAirStats } = detailsSlice.actions;
export default detailsSlice.reducer;
