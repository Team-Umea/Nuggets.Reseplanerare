import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  travels: [],
};

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    addTravel: (state, action) => {
      state.travels.push(action.payload);
    },
    removeTravel: (state, action) => {
      state.travels = state.travels.filter(
        (_, index) => index !== action.payload
      );
    },
    editTravel: (state, action) => {
      const { index, land, city, date, activity } = action.payload;
      state.travels[index] = { land, city, date, activity };
    },
  },
});

export const { addTravel, removeTravel, editTravel } = travelSlice.actions;
export default travelSlice.reducer;
