import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Components/Shared/Loading';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });

    }

    if (error) {
        errorElement = <p className='text-red-900 text-left my-2'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);


    }

    const navigateSignUp = event => {
        navigate('/signUp');
    }
    return (
        <div>
            <div className='bg-[#f8f8f8] dark:bg-[#232323]'>
                <div className='px-16 py-[40px] flex justify-between w-full'>
                    <p className='uppercase text-[18px] text-[#212529] dark:text-[#cfd4da] font-[500] '>login</p>
                    <p className='uppercase text-[18px] text-[#212529] dark:text-[#cfd4da] font-[500] '>home / login</p>
                </div>
            </div>
            <div className='px-16 flex flex-col dark:bg-[#2b2b2b] lg:flex-row justify-between '>
                <div className='lg:w-[48%] w-full'>
                    <p className='text-[30px] text-[#222222] dark:text-[#cfd4da] font-[700] uppercase text-left my-7'>login</p>
                    <div className='border-[2px] border-[#868686] dark:border dark:border-gray-400 p-[30px] mb-10'>
                        <form onSubmit={handleSubmit}>
                            <div class="form-control w-full mb-[30px]">
                                <label class="label">
                                    <span class="text-[18px] dark:text-[#cfd4da] text-left text-[#333] font-[500]">Email</span>
                                </label>
                                <input ref={emailRef} type="email" name="email" required placeholder="Enter your email" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full rounded-none " />
                            </div>
                            <div class="form-control w-full mb-[30px]">
                                <label class="label">
                                    <span class="text-[18px] dark:text-[#cfd4da] text-left text-[#333] font-[500]">Password</span>
                                </label>
                                <input ref={passwordRef} type="password" name="password" required placeholder="Enter your password" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full rounded-none " />
                            </div>
                            <div className='w-full flex justify-start'>
                                <button type='submit' className='bg-primary text-white uppercase py-[13px] px-[29px] font-[500] text-[18px]'>login</button>
                            </div>
                        </form>
                        {errorElement}
                    </div>
                </div>
                <div className='lg:w-[48%] w-full'>
                    <p className='dark:text-[#cfd4da] text-[30px] text-[#222222] font-[700] uppercase text-left my-7'>new customer</p>
                    <div className='border-[2px] border-[#868686] dark:border-gray-400 p-[30px] mb-10'>
                        <p className=' dark:text-[#cfd4da] text-[20px] text-[#333333] mb-[35px] font-[500] text-left'>CREATE A ACCOUNT</p>
                        <p className='dark:text-[#cfd4da] text-[18px] leading-loose text-[#555555] mb-[35px] font-[500] text-left'>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.

                        </p>
                        <div className='w-full flex justify-start'>
                            <Link to='/register'><button className='bg-primary text-white uppercase py-[13px] px-[29px] font-[500] text-[18px] mb-10'>create an account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Login;