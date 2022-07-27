import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import StarRatings from "react-star-ratings";
import '../../Pages/Home.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";






const Reviews = () => {
    const reviews = useSelector((state) => state.reviewsReducer.reviews);

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
                        reviews && reviews.map(review =>
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