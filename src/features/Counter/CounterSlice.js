// state: count:0
// increment, decrement, reset

import { createSlice } from "@reduxjs/toolkit";

// const incrementCounter = () => {
//   return { type: "INCREMENT" };
// };

export const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        }
    },
});

// export reducer and action createor
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, increaseByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;

