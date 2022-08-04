import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const PRODUCTS_URL = 'http://localhost:5000/products';

const initialState = {
    products: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCTS_URL)
    return response.data
})

export const addNewProduct = createAsyncThunk('products/addNewProduct', async (initialProduct) => {
    const response = await axios.product(PRODUCTS_URL, initialProduct)
    return response.data
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (initialProduct) => {
    const { id } = initialProduct;
    try {
        const response = await axios.put(`${PRODUCTS_URL}/${id}`, initialProduct)
        return response.data
    } catch (err) {
        //return err.message;
        return initialProduct; // only for testing Redux!
    }
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (initialProduct) => {
    const { id } = initialProduct;
    try {
        const response = await axios.delete(`${PRODUCTS_URL}/${id}`)
        if (response?.status === 200) return initialProduct;
        return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
        return err.message;
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productAdded: {
            reducer(state, action) {
                state.products.push(action.payload)
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
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                // let min = 1;
                // const loadedProducts = action.payload.map(product => {
                //     product.date = sub(new Date(), { minutes: min++ }).toISOString();
                //     product.reactions = {
                //         thumbsUp: 0,
                //         wow: 0,
                //         heart: 0,
                //         rocket: 0,
                //         coffee: 0
                //     }
                //     return product;
                // });

                // Add any fetched products to the array
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewProduct.fulfilled, (state, action) => {
                action.payload.id = state.products[state.products.length - 1].id + 1;
                console.log(action.payload)
                state.products.push(action.payload)
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                action.payload.date = new Date().toISOString();
                const products = state.products.filter(product => product.id !== id);
                state.products = [...products, action.payload];
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                const products = state.products.filter(product => product.id !== id);
                state.products = products;
            })
    }
})

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export const selectProductById = (state, productId) =>
    state.products.products.find(product => product._id === productId);

export const { productAdded, reactionAdded } = productsSlice.actions

export default productsSlice.reducer
