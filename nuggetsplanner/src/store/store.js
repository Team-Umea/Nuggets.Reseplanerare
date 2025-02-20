import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "./travelSlice";
import darkModeReducer from "./darkModeSlice"

// Funktion för att läsa state från localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("travelState");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error("Could not load state from localStorage", error);
  }
  return undefined;
};

// Funktion för att spara state till localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("travelState", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

// Lägg till initial state från localStorage om den finns
const initialState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    travel: travelReducer,
    darkMode: darkModeReducer,
  },
  preloadedState: initialState, // Initial state från localStorage
});

// Lyssna på varje förändring av state och spara till localStorage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

