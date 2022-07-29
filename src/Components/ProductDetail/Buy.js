import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, reset2 } from "../../features/Counter/CounterSlice";
import StarRatings from "react-star-ratings";
import { faMailBulk, faPhone, faHeart, faUser, faBars, faX, faAngleLeft, faToggleOff, faToggleOn, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from "uuid";
import { addCart } from "../../features/CartAdd/CartAddSlice";
import { addWishlist } from "../../features/wishlist/wishlistSlice";
import { toast } from 'react-toastify';


const Buy = () => {
    const count = useSelector((state) => state.counter.count);
    const price = useSelector((state) => state.price.price);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const carts = { id: uuidv4(), img: "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/15_012e2b88-7e74-4204-a1f3-0ee1c76ed85f_1080x1080.jpg?v=1652417683", name: "Twin Hoops", price: "60" };
        dispatch(addCart(carts));
        toast.success("The product has been added to cart successfully!");

    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        const wishlist = { id: uuidv4(), img: "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/15_012e2b88-7e74-4204-a1f3-0ee1c76ed85f_1080x1080.jpg?v=1652417683", name: "Twin Hoops", price: "60" };
        dispatch(addWishlist(wishlist));
        toast.success("The product has been added to wish list successfully!");

    };
    const handleDecrement = () => {

        if (count <= 0) {

            dispatch(reset());
            toast.error("You can not buy less than 0");
        }
        else {
            dispatch(decrement());

        }
    };
    const handleIncrement = () => {

        if (count < 50 && count >= 0) {

            dispatch(increment());
        }
        else {
            dispatch(reset2());
            toast.error("You can not buy more than stock");

        }
    };

    return (
        <div className='lg:px-10 px-10'>
            <div class="hero min-h-screen bg-white">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 w-full'>
                        <img src="https://cdn.shopify.com/s/files/1/0013/2661/2531/products/15_012e2b88-7e74-4204-a1f3-0ee1c76ed85f_1080x1080.jpg?v=1652417683" class="w-full rounded-lg shadow-2xl" />

                    </div>
                    <div className='lg:w-1/2  w-full lg:ml-10 ml-0 text-left'>
                        <StarRatings
                            rating={4}
                            starRatedColor="#edc128"
                            starDimension='20px'
                            numberOfStars={5}
                            name='rating'
                        />
                        <h1 class="text-3xl font-[500]">Twin Hoops</h1>
                        <p className='text-primary text-[28px] font-[400] pt-2'> <span className='text-[#868686]'><del>$100.00</del></span>  $60.00</p>
                        <p class="pt-10 pb-5 text-[#868686] text-[14px]">Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci
                        </p>
                        <p className='pb-5 text-[#868686] text-[14px]'>Stock 50</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center border-[2px] border-[#868686] bg-white w-[129px]'>
                                <button onClick={handleIncrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>+</button>
                                <input type="text" className='border-none w-[50px] text-[24px] font-[500] px-3 focus-within:border-none' min={0} value={count} />
                                <button onClick={handleDecrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>-</button>
                            </div>
                            <div><button className='bg-[rgba(0,0,0,.75)] uppercase lg:px-20 md:px-5 px-5 py-3 text-white hover:bg-primary' onClick={handleSubmit}>Add to cart</button></div>
                            <div className='group'><button onClick={handleSubmit2} className='group-hover:text-primary border-[2px] border-[#868686] px-10 py-2'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-[rgba(0,0,0,.75)] text-[1.5rem] font-[300]' /></button></div>
                        </div>
                        <div>
                            <button className='uppercase text-white w-full py-3 bg-primary hover:bg-black my-7'>buy it now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;