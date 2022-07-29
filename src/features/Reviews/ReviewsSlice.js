const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");


const initialReviews = {
    reviews: [
        {
            id: uuidv4(),
            img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-2_373bef82-176b-4e10-b221-87c2d6d3f8c5.jpg?v=1652412428',
            des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
            name: 'sara colinton',
            title: '“Stunning Design”',
            rating: 4
        },
        {
            id: uuidv4(),
            img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-1_31477302-a9a6-48b4-951c-f5a495082f79.jpg?v=1652412423',
            des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
            name: 'sara colinton',
            title: '“Stunning Design”',
            rating: 5
        },
        {
            id: uuidv4(),
            img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tes-4.jpg?v=1646898224',
            des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
            name: 'sara colinton',
            title: '“Stunning Design”',
            rating: 4.5
        },
        {
            id: uuidv4(),
            img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-3_5833bf40-f2bf-48cb-ac64-2f9249132983.jpg?v=1652412434',
            des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
            name: 'sara colinton',
            title: '“Stunning Design”',
            rating: 4
        }

    ],
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: initialReviews,
    reducers: {
        showReviews: (state) => state,
        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },
        updateReview: (state, action) => {
            const { id, name, title, rating, des, img } = action.payload;
            const isReviewExist = state.reviews.filter((review) => review.id === id);
            if (isReviewExist) {
                isReviewExist[0].title = title;
                isReviewExist[0].name = name;
                isReviewExist[0].img = img;
                isReviewExist[0].rating = rating;
                isReviewExist[0].des = des;
            }
        },
        deleteReview: (state, action) => {
            const id = action.payload;
            state.reviews = state.reviews.filter((review) => review.id !== id);
        },
    },
});

export const { showReviews, addReview, deleteReview, updateReview } =
    reviewsSlice.actions;
export default reviewsSlice.reducer;
