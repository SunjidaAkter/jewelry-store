import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';






const clientCollection = [
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/4.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/5.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/6.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/7.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/8.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/1.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/2.png'

    },
    {
        img: 'https://multikart-react.vercel.app/assets/images/logos/3.png'

    }

]


const Clients = () => {


    return (
        <div>

            <div class="flex flex-col lg:flex-row w-full py-10 px-12">
                <Swiper

                    spaceBetween={100}
                    breakpoints={{
                        920: {
                            slidesPerView: 5
                        },

                        720: {
                            slidesPerView: 4
                        },

                        450: {
                            slidesPerView: 3
                        }
                    }}

                    className="mySwiper"
                >
                    {
                        clientCollection.map(client =>
                            <SwiperSlide className='dark:bg-[#2b2b2b]'>
                                <div class="opacity-70 duration-1000 dark:bg-[#2b2b2b] hover:opacity-100  w-[100%] responsive_swiper">
                                    <><img src={client.img} className="w-[100%] dark:invert " alt="Shoes" /></>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>




            </div>
        </div>
    )
}

export default Clients


