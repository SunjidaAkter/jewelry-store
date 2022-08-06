import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const ORDERS_URL = 'http://localhost:5000/orders';

const initialState = {
    orders: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get(ORDERS_URL)
    return response.data
})

export const addNewOrder = createAsyncThunk('orders/addNewOrder', async (initialOrder) => {
    const response = await axios.post(ORDERS_URL, initialOrder)
    return response.data
})

export const updateOrder = createAsyncThunk('orders/updateOrders', async (initialOrder) => {
    const { id } = initialOrder;
    try {
        const response = await axios.put(`${ORDERS_URL}/${id}`, initialOrder)
        return response.data
    } catch (err) {
        //return err.message;
        return initialOrder; // only for testing Redux!
    }
})

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (initialOrder) => {
    const { id } = initialOrder;
    try {
        const response = await axios.delete(`${ORDERS_URL}/${id}`)
        if (response?.status === 200) return initialOrder;
        return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
        return err.message;
    }
})

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded: {
            reducer(state, action) {
                state.orders.push(action.payload)
            },
            prepare(title, content,) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewOrder.fulfilled, (state, action) => {
                action.payload._id = state.orders[state.orders.length - 1]._id + 1;
                // console.log(action.payload)
                state.orders.push(action.payload)
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                action.payload.date = new Date().toISOString();
                const orders = state.orders.filter(order => order.id !== id);
                state.orders = [...orders, action.payload];
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                const orders = state.orders.filter(order => order.id !== id);
                state.orders = orders;
            })
    }
})

export const selectAllOrders = (state) => state.orders.orders;
export const getOrdersStatus = (state) => state.orders.status;
export const getOrdersError = (state) => state.orders.error;

export const selectOrderById = (state, orderId) =>
    state.orders.orders.find(order => order._id === orderId);

export const { orderAdded, reactionAdded } = ordersSlice.actions

export default ordersSlice.reducer;