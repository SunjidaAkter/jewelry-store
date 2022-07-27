import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import StarRating from "../../Components/Dashboard/StarRating";
import { v4 as uuidv4 } from "uuid";
import { addReview } from '../../features/Reviews/ReviewsSlice';


const AddReview = () => {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [des, setDes] = useState("");
    const [rating, setRating] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = { id: uuidv4(), title, name, img, des, rating };
        dispatch(addReview(review));
        toast.success("The review has been added correctly!");
        e.target.reset();
    };
    return (
        <div className="hero min-h-screen bg-[#f8f8f8] bg-opacity-20" >
            <div className="hero-overlay bg-opacity-10"></div>
            <div className='flex w-3/4 h-screen justify-center items-center'>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Give Your Review</h2>
                        <form onSubmit={handleSubmit} >
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />

                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Title</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            id="title"
                                            name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />

                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Image URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Image URL"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            id="img"
                                            name="img"
                                            value={img}
                                            onChange={(e) => setImg(e.target.value)}
                                            required
                                        />

                                    </div>

                                </div>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">How much stars do you want to give for service</span>
                                        </label>
                                        <StarRating
                                            rating={rating}
                                            setRating={setRating}
                                        ></StarRating>
                                    </div>

                                    <div className="form-control w-full max-w-xs ">
                                        <label className="label">
                                            <span className="text-neutral label-text">Give your review</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Review"
                                            className="textarea textarea-primary h-36"
                                            id="des"
                                            name="des"
                                            value={des}
                                            onChange={(e) => setDes(e.target.value)}
                                            required
                                        />

                                    </div>


                                </div>
                            </div>

                            <div className='flex w-full justify-center my-6'>
                                <input className='btn bg-primary w-full max-w-xs text-white block' type="submit" value="Add Review" />
                            </div>
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddReview;