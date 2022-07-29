const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");


const initialCarts = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "carts",
    initialState: initialCarts,
    reducers: {
        showCarts: (state) => state,
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },
        updateCart: (state, action) => {
            const { id, name, price, img } = action.payload;
            const isCartExist = state.carts.filter((cart) => cart.id === id);
            if (isCartExist) {
                isCartExist[0].name = name;
                isCartExist[0].img = img;
                isCartExist[0].price = price;
            }
        },
        deleteReview: (state, action) => {
            const id = action.payload;
            state.reviews = state.reviews.filter((review) => review.id !== id);
        },
    },
});

export const { showCarts, addCart, deleteReview, updateCart } =
    cartSlice.actions;
export default cartSlice.reducer;
