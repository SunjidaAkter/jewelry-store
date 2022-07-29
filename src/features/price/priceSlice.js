// state: count:0
// increment, decrement, reset

import { createSlice } from "@reduxjs/toolkit";

// const incrementCounter = () => {
//   return { type: "INCREMENT" };
// };

export const priceSlice = createSlice({
    name: "price",
    initialState: { price: 60 },
    reducers: {
        increment: (state) => {
            state.price = state.price + 60;
        },
        decrement: (state) => {
            state.price = state.price - 60;
        }
    },
});

// export reducer and action createor
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, increaseByAmount } =
    priceSlice.actions;

export default priceSlice.reducer;

