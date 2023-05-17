import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0
}

export const calculaterSlice = createSlice({

    name: 'calculater',
    initialState,
    reducers: {

        add: (state, action) => {
            state.value += action.payload;
        },
        sub: (state, action) => {
            state.value -= action.payload;
        },
        mul: (state, action) => {
            state.value = state.value * action.payload;
        },
        div: (state, action) => {
            state.value = state.value / action.payload;
        }
    }

})

export const { add, sub, mul, div } = calculaterSlice.actions;

export const selectCalculater = (state) => state.calculater.value;

export default calculaterSlice.reducer;