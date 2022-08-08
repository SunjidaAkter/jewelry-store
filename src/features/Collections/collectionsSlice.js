const { createSlice } = require("@reduxjs/toolkit");


const initialCollections = {
    collections: [
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 1,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 4,
            "Mname": "dafasfssssa",
            "price": "200"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 1,
            "Mname": "dafasfa",
            "price": "300"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 4,
            "Mname": "dafasfssssa",
            "price": "200"
        },
        {
            "img01": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463",
            "img02": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355",
            "img03": "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463",
            "img04": "https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020",
            "rating": 3,
            "Mname": "dafasfa",
            "price": "300"
        }
    ],
};

export const collectionsSlice = createSlice({
    name: "collections",
    initialState: initialCollections,
    reducers: {
        showCollections: (state) => state,
        addCollection: (state, action) => {
            state.collections.push(action.payload);
        },
        updateCollection: (state, action) => {
            const { id, title, author } = action.payload;
            const isCollectionExist = state.collections.filter((collection) => collection.id === id);
            if (isCollectionExist) {
                isCollectionExist[0].title = title;
                isCollectionExist[0].author = author;
            }
        },
        deleteCollection: (state, action) => {
            const id = action.payload;
            state.collections = state.collections.filter((collection) => collection.id !== id);
        },
        seleteCollection: (state, action) => {
            const id = action.payload;
            state.collections = state.collections.filter((collection) => collection.id == id);
        },
    },
});

export const { showCollections, addCollection, deleteCollection, updateCollection } =
    collectionsSlice.actions;
export default collectionsSlice.reducer;
