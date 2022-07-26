import counterReducer from "../features/Counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
export default store;
