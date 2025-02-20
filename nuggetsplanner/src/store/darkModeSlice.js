import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {value: false},
    reducers: {
        setLightMode: (state)=> {
            state.value = false
        },
        setDarkMode: (state)=> {
            state.value = true
        }
    }
})

export const{setLightMode, setDarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer
