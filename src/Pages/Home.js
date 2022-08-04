import React from 'react';
import Banner from '../Components/Home/Banner';
import Clients from '../Components/Home/Clients';
import Reviews from '../Components/Home/Reviews';
import ShopProducts from '../Components/Home/ShopProducts';
import TopCollections from '../Components/Home/TopCollections';
// import PostsList from '../features/PostsList'

const Home = () => {
    return (
        <div>

            <Banner />
            <ShopProducts />
            <TopCollections />
            <Reviews />
            <Clients />
        </div>
    );
};

export default Home;