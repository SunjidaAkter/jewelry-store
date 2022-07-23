import React from 'react';

const ShopProducts = () => {
    return (
        <div className='px-14 mt-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-17.jpg?v=1651114908" alt="" />
                <div className='grid grid-rows-1 lg:grid-rows-2 lg:gap-0 my-0'>
                    <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-18.jpg?v=1651114981" alt="" />
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355" alt="" />
                    </div>
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-21.jpg?v=1651115377" alt="" />
            </div>

        </div>
    );
};

export default ShopProducts;