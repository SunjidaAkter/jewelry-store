import { useSelector } from "react-redux";
import { selectAllProducts, getProductsStatus, getProductsError } from "../../features/Products/productsSlice";
import TopCollection from "./TopCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
import StarRatings from "react-star-ratings";
import { Link } from 'react-router-dom';


const TopCollections = () => {

    const products = useSelector(selectAllProducts);
    const productStatus = useSelector(getProductsStatus);
    const error = useSelector(getProductsError);

    let content;
    if (productStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (productStatus === 'succeeded') {
        const orderedProducts = products
        console.log(products.slice())
        content =
            <div>
                <div className='mx-auto w-1/2 py-10 '>

                    {/* <p className='text-red-500 text-xl pb-4'>Special Offer</p> */}
                    <h1 className=' text-5xl font-bold py-4'>TOP COLLECTION</h1>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui nemo itaque repellendus vel pariatur totam aspernatur. Numquam aut qui quam dolorum dicta asperiores in iste? Sapiente debitis natus ipsa.</p>
                </div>

                <div class="flex w-full  px-14">
                    <Swiper

                        spaceBetween={30}
                        breakpoints={{
                            920: {
                                slidesPerView: 4
                            },

                            720: {
                                slidesPerView: 3
                            },

                            450: {
                                slidesPerView: 2
                            }
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            products && products.map(p =>
                                <SwiperSlide className=''>
                                    <div class=" rounded-none bg-base-100  responsive_swiper">
                                        <Link to={`/products/${p._id}`}><img src={p.image} width='100%' alt="Shoes" /></Link>
                                        <div class="card-body">
                                            <h2 class="text-center">
                                                {p.Mname}
                                            </h2>
                                            {/* <div class="badge badge-primary  text-center">NEW</div> */}
                                            <p>price ${p.price}</p>


                                            <StarRatings
                                                rating={4}
                                                starRatedColor="#edc128"
                                                starDimension='20px'
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </Swiper>





                </div>
            </div>

    } else if (productStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default TopCollections