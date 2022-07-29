import React from 'react';
import { useDispatch, useSelector } from "react-redux";



const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartsReducer.carts);
    return (
        <div className='px-7 flex '>
            <img className='w-[30%]' src={carts?.img} alt="" />
            <div className='w-[70%]'>
                <p>{carts?.name}</p>
                <p>{carts?.price}</p>
            </div>
        </div>
    );
};

export default Cart;