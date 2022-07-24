import React from 'react';
import Banner from '../Components/Home/Banner';
import Clients from '../Components/Home/Clients';
import ShopProducts from '../Components/Home/ShopProducts';
import Navbar from '../Components/Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Banner />
            <ShopProducts />
            <Clients />
        </div>
    );
};

export default Home;