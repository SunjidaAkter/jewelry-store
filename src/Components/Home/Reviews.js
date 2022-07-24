import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import StarRatings from "react-star-ratings";
import '../../Pages/Home.css'

const reviews = [
    {
        img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-2_373bef82-176b-4e10-b221-87c2d6d3f8c5.jpg?v=1652412428',
        des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
        name: 'sara colinton',
        title: '“Stunning Design”',
        rating: 4
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-1_31477302-a9a6-48b4-951c-f5a495082f79.jpg?v=1652412423',
        des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
        name: 'sara colinton',
        title: '“Stunning Design”',
        rating: 5
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tes-4.jpg?v=1646898224',
        des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
        name: 'sara colinton',
        title: '“Stunning Design”',
        rating: 4.5
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0013/2661/2531/files/tesm-3_5833bf40-f2bf-48cb-ac64-2f9249132983.jpg?v=1652412434',
        des: 'Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...',
        name: 'sara colinton',
        title: '“Stunning Design”',
        rating: 4
    }

]



const Reviews = () => {
    return (
        <div className='bg-[#f8f8f8] p-12 my-6'>
            <div class="flex w-full py-10 px-12">
                <Swiper

                    spaceBetween={100}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        920: {
                            slidesPerView: 3
                        },

                        720: {
                            slidesPerView: 2
                        },

                        450: {
                            slidesPerView: 1
                        }
                    }}
                    // scrollbar={{
                    //     hide: false,
                    // }}
                    modules={[Scrollbar, Autoplay]}
                    loop={true}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide className='dark:bg-[#2b2b2b]'>
                                <div>
                                    <StarRatings
                                        rating={review.rating}
                                        starRatedColor="#edc128"
                                        starDimension='20px'
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                    <p className='cormorant text-[26px] my-3 font-[600]'>{review.title}</p>
                                    <p className='text-[14px] text-[#868686] mb-3 '>{review.des}</p>
                                    <div class="avatar">
                                        <div class="w-24 rounded-full">
                                            <img src={review.img} />
                                        </div>
                                    </div>

                                    <p className='text-[17px] lato uppercase'>{review.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>




            </div>
        </div>

    );
};

export default Reviews;