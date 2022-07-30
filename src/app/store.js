import counterReducer from "../features/Counter/CounterSlice";
import priceReducer from "../features/price/priceSlice";
import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from '../features/Collections/collectionsSlice';
import reviewsReducer from '../features/Reviews/ReviewsSlice';
import cartsReducer from '../features/CartAdd/CartAddSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import ordersReducer from '../features/Orders/OrdersSlice';
// import postsReducer from '../features/postsSlice';

const store = configureStore({
    reducer: {
        price: priceReducer,
        counter: counterReducer,
        collectionsReducer: collectionsReducer,
        reviewsReducer: reviewsReducer,
        cartsReducer: cartsReducer,
        wishlistReducer: wishlistReducer,
        // posts: postsReducer,
        ordersReducer: ordersReducer
    },

});
export default store;
