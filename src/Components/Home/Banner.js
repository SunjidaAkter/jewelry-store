import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="hero min-h-screen" style={{ "background-image": "url(https://cdn.shopify.com/s/files/1/0013/2661/2531/files/slider-3_a9a5b086-24a1-45a6-96a9-da21ef0c9287.jpg?v=1652416682)" }}>

                        <div class="ml-[10px] px=0 text-left text-white">
                            <div class="w-1/2">
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div class="hero min-h-screen" style={{ "background-image": "url(https://cdn.shopify.com/s/files/1/0013/2661/2531/files/7.jpg?v=1650699101)" }}>

                        <div class="hero-overlay bg-opacity-40"></div>
                        <div class="ml-[10px] flex justify-end px=0 text-right text-white">
                            <div class="w-1/2">
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <div class="hero min-h-screen" style={{ "background-image": "url(https://cdn.shopify.com/s/files/1/0013/2661/2531/files/slider-1_ec47c9ab-a301-48cf-8aef-9c9b4fef2946.jpg?v=1652416846)" }}>
                        <div class="hero-overlay bg-opacity-40"></div>
                        <div class="ml-[10px] px=0 text-left text-white">
                            <div class="w-1/2">
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;