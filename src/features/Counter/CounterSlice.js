// state: count:0
// increment, decrement, reset

import { createSlice } from "@reduxjs/toolkit";

// const incrementCounter = () => {
//   return { type: "INCREMENT" };
// };

export const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 1, price: 60.00 },
    reducers: {
        increment: (state) => {
            state.price = state.price + 60.00;
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
            state.price = state.price - 60.00;
        },
        reset: (state) => {
            state.count = 1;
            state.price = 60.00;
        },
        reset2: (state) => {
            state.count = 5;
            state.price = 300.00;
        }
    },
});

// export reducer and action createor
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, reset2, increaseByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;

