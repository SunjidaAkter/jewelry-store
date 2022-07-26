import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, reset2 } from "../../features/Counter/CounterSlice";
import StarRatings from "react-star-ratings";
import { faMailBulk, faPhone, faHeart, faUser, faBars, faX, faAngleLeft, faToggleOff, faToggleOn, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from "uuid";
import { addCart } from "../../features/CartAdd/CartAddSlice";
import { addWishlist } from "../../features/wishlist/wishlistSlice";
import { addOrder } from "../../features/Orders/OrdersSlice";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../../features/Products/productsSlice'
import { getProductsStatus } from "../../features/Products/productsSlice";
import { addNewOrder } from "../../features/Order/ordersSlice";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Buy = () => {
    const count = useSelector((state) => state.counter.count);
    const price = useSelector((state) => state.counter.price);
    // const price = useSelector((state) => state.price.price);
    const dispatch = useDispatch();
    const { productId } = useParams()

    const product = useSelector((state) => selectProductById(state, productId))
    const productStatus = useSelector(getProductsStatus);
    if (productStatus === 'loading') {
        return <p>"Loading..."</p>;
    }
    if (!product) {
        return (
            <section>
                <h2>Product not found!</h2>
            </section>
        )
    }

    const [_id, setId] = useState(product._id)
    const [counts, setCounts] = useState(count)
    const [img, setImg] = useState(product.image)
    const [name, setName] = useState(product.Mname)
    const [prices, setPrices] = useState(product?.price)
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const canSave = [counts, img, name, prices].every(Boolean) && addRequestStatus === 'idle';
    console.log(_id, counts, img, name, prices)

    const handleSubmit = (e) => {
        e.preventDefault();
        const carts = { id: uuidv4(), img: "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821", name: "Twin Hoops", price: "60" };
        dispatch(addCart(carts));
        toast.success("The product has been added to cart successfully!");

    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        const wishlist = { id: uuidv4(), img: "https://cdn.shopify.com/s/files/1/0013/2661/2531/products/11_600x.jpg?v=1647501821", name: "Twin Hoops", price: "60" };
        dispatch(addWishlist(wishlist));
        toast.success("The product has been added to wish list successfully!");

    };

    const onSaveOrderClicked = (e) => {
        e.preventDefault();
        console.log(e)
        if (canSave) {
            console.log(name)
            try {
                setAddRequestStatus('pending')
                dispatch(addNewOrder({ _id, counts, img, name, prices })).unwrap()


                toast.success("The product has been added to order list successfully!");

            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    const onCountsChanged = e => setCounts(e.target.value)

    const data = [product.img01, product.img02, product.img03, product.img03]
    const handleDecrement = () => {

        if (count <= 1) {

            dispatch(reset());
            toast.error("You can not buy less than 0");
        }
        else {
            dispatch(decrement());

        }
    };
    const handleIncrement = () => {

        if (count < 5 && count >= 1) {

            dispatch(increment());
        }
        else {
            dispatch(reset2());
            toast.error("You can not buy more than stock");

        }
    };
    const settings = {
        customPaging: function (i) {
            console.log(product.img01)
            return (
                <a>
                    <div className='w-[100px] mt-[100px] z-40'>

                        <img className='w-full rounded-full' src={data[i]} />
                    </div>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots impo",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='back lg:px-10 px-10'>
            {product ? <div class="hero min-h-screen bg-white">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='lg:w-[450px] lg:h-[450px] w-full'>
                        <div className="w-full h-full rounded-lg shadow-2xl">
                            <Slider {...settings}>
                                <div>
                                    <img className='w-full' src={product.img01} alt="" />
                                </div>
                                <div>
                                    <img className='w-full' src={product.img02} alt="" />
                                </div>
                                <div>
                                    <img className='w-full' src={product.img03} alt="" />
                                </div>
                                <div>
                                    <img className='w-full' src={product.img04} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='lg:w-1/2  w-full lg:ml-10 ml-0 text-left'>
                        <StarRatings
                            rating={4}
                            starRatedColor="#edc128"
                            starDimension='20px'
                            numberOfStars={5}
                            name='rating'
                        />
                        <h1 class="text-3xl font-[500]">{product.Mname}</h1>
                        <p className='text-primary text-[28px] font-[400] pt-2'> <span className='text-[#868686]'><del>$100.00</del></span>  $60.00</p>
                        <p class="pt-10 pb-5 text-[#868686] text-[14px]">Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci
                        </p>
                        <p className='pb-5 text-[#868686] text-[14px]'>Stock 5</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center border-[2px] border-[#868686] bg-white w-[129px]'>
                                <button onClick={handleIncrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>+</button>
                                <input type="text" className='border-none w-[50px] text-[24px] font-[500] px-3 focus-within:border-none' onChange={onCountsChanged} value={count} />
                                <button onClick={handleDecrement} className='bg-white text-[#868686] text-[24px] font-[700] py-1 pr-3'>-</button>
                            </div>
                            <div><button className='bg-[rgba(0,0,0,.75)] uppercase lg:px-16 md:px-5 px-5 py-3 text-white hover:bg-primary' onClick={handleSubmit}>Add to cart</button></div>
                            <div className='group'><button onClick={handleSubmit2} className='group-hover:text-primary border-[2px] border-[#868686] px-10 py-2'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-[rgba(0,0,0,.75)] text-[1.5rem] font-[300]' /></button></div>
                        </div>
                        <div>
                            <button onClick={onSaveOrderClicked} className='uppercase text-white w-full py-3 bg-primary hover:bg-black my-7'>buy it now</button>
                        </div>
                    </div>
                </div>
            </div> : <p>Loading... </p>}
        </div>
    );
};

export default Buy;