const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");


const initialOrders = {
    orders: [],
};

export const OrderSlice = createSlice({
    name: "orders",
    initialState: initialOrders,
    reducers: {
        showOrders: (state) => state,
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrder: (state, action) => {
            const { id, name, price, img } = action.payload;
            const isOrderExist = state.Orders.filter((Order) => Order.id === id);
            if (isOrderExist) {
                isOrderExist[0].name = name;
                isOrderExist[0].img = img;
                isOrderExist[0].price = price;
            }
        },
        deleteReview: (state, action) => {
            const id = action.payload;
            state.reviews = state.reviews.filter((review) => review.id !== id);
        },
    },
});

export const { showOrders, addOrder, deleteReview, updateOrder } =
    OrderSlice.actions;
export default OrderSlice.reducer;
