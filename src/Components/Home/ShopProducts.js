import React from 'react';

const ShopProducts = () => {
    return (
        <div className='px-14 mt-10'>
            <div className='flex flex-col lg:flex-row gap-x-7'>
                <img className='w-[30%]' src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-17.jpg?v=1651114908" alt="" />
                <div className='w-[35%] flex flex-col items-between justify-between gap-y-7 my-0'>
                    <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-18.jpg?v=1651114981" alt="" />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-7'>
                        <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-19.jpg?v=1651115020" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-20.jpg?v=1651115355" alt="" />
                    </div>
                </div>
                <img className='w-[30%]' src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/banner-21.jpg?v=1651115377" alt="" />
            </div>

        </div>
    );
};

export default ShopProducts;