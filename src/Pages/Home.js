import React from 'react';
import Banner from '../Components/Home/Banner';
import Clients from '../Components/Home/Clients';
import Reviews from '../Components/Home/Reviews';
import ShopProducts from '../Components/Home/ShopProducts';
import TopCollection from '../Components/Home/TopCollection';
// import PostsList from '../features/PostsList'

const Home = () => {
    return (
        <div>

            <Banner />
            <ShopProducts />
            <TopCollection />
            <Reviews />
            <Clients />
        </div>
    );
};

export default Home;