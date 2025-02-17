import { createSlice } from "@reduxjs/toolkit";

const travelSlice = createSlice({
  name: "travel",
  initialState: {
    travels: [],
  },
  reducers: {
    addTravel: (state, action) => {
      const { weatherData, pictureUrl } = action.payload;
    
      if (weatherData && pictureUrl) {
        state.travels.push({
          land: action.payload.land,
          city: action.payload.city,
          date: action.payload.date,
          activity: action.payload.activity,
          weatherData: weatherData,
          pictureUrl: pictureUrl,
        });
      } else {
        console.error("Väderdata eller bilddata saknas i action.payload");
      }
    },

    removeTravel: (state, action) => {
      state.travels = state.travels.filter(
        (_, index) => index !== action.payload
      );
    },

    editTravel: (state, action) => {
      const { index, land, city, date, activity } = action.payload;

      state.travels[index] = {
        ...state.travels[index],
        land,
        city,
        date,
        activity,
      };
    },
  },
});

export const { addTravel, removeTravel, editTravel } = travelSlice.actions;
export default travelSlice.reducer;
