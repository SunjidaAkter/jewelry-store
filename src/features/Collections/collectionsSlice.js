const { createSlice } = require("@reduxjs/toolkit");


const initialCollections = {
    collections: [
        {
            id: 1,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 2,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 3,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858',
            rating: 1,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 4,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026',
            rating: 4,
            Mname: 'dafasfssssa',
            price: "200"
        },
        {
            id: 5,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 6,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/2_b3590f88-23ef-4bec-a3a2-98ddd5ecbaee_600x.jpg?v=1652417683',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 7,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 8,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/12_600x.jpg?v=1647501858',
            rating: 1,
            Mname: 'dafasfa',
            price: "300"
        },
        {
            id: 9,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/18_600x.jpg?v=1647502026',
            rating: 4,
            Mname: 'dafasfssssa',
            price: "200"
        },
        {
            id: 10,
            image: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/products/7_600x.jpg?v=1647501463',
            rating: 3,
            Mname: 'dafasfa',
            price: "300"
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
    },
});

export const { showCollections, addCollection, deleteCollection, updateCollection } =
    collectionsSlice.actions;
export default collectionsSlice.reducer;
