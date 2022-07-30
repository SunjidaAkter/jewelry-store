import React from 'react';
import { useDispatch, useSelector } from "react-redux";


const Orders = () => {
    const price = useSelector((state) => state.counter.price);
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.ordersReducer.orders);
    return (
        <div>
            <p className='text-7xl py-7 text-primary font-bold'>MY ORDERS</p>
            {orders && orders.map(p => <div className='p-7'>
                <div className='flex justify-center items-center bg-opacity-20 bg-[#8f8f8f]'>
                    {/* <img className='w-[30%]' src={p.img} alt="" /> */}

                    <div class="avatar indicator  m-7">
                        <span class="indicator-item badge badge-primary text-white font-bold text-xl p-3">{count}</span>
                        <div class="w-36 ml-16 rounded-xl">
                            <img className=' border-white border-2' src={p.img} />
                        </div>
                    </div>
                    <div className=' flex justify-start w-[100%] ml-10'>
                        <div>
                            <p className='lato font-[600] text-[44px] text-left hover:text-primary ml-2 text-[#868686]'>{p.name}</p>
                            <p className='text-[30px] font-[500] hover:text-primary text-left ml-2 text-[#868686]'>${price}</p>

                        </div>
                    </div>

                </div>
            </div>)}
        </div>
    );
};

export default Orders;