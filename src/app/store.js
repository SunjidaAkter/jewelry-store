import counterReducer from "../features/Counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from '../features/Collections/collectionsSlice'
import reviewsReducer from '../features/Reviews/ReviewsSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        collectionsReducer: collectionsReducer,
        reviewsReducer: reviewsReducer,
    },

});
export default store;
