import React from 'react';

const Register = () => {
    return (
        <div>
            <div className='bg-[#f8f8f8] dark:bg-[#232323]'>
                <div className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] px-16 py-[40px] flex dark:text-[#cfd4da] dark:bg-[#232323] justify-between w-full'>
                    <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] uppercase text-[18px] text-[#212529] font-[500] '>register</p>
                    <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b]  text-[18px] text-[#212529] font-[500] '>home / register</p>
                </div>
            </div>
            <div className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] px-16 flex justify-between '>
                <div className='w-[100%]'>
                    <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[30px] text-[#222222] font-[700] uppercase text-left my-7'>create account</p>
                    <div className='dark:border dark:border-gray-400 border-[2px] border-[#868686] p-[30px] mb-10'>
                        <div className='flex-col lg:flex-row flex justify-between items-center '>
                            <div className='lg:w-[48%] w-full'>
                                <div class="form-control w-full mb-[30px]">
                                    <label class="label">
                                        <span class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[18px] text-left text-[#333] font-[500]">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full rounded-none h-[54px] text-black" />
                                </div>
                                <div class="form-control w-full mb-[30px]">
                                    <label class="label">
                                        <span class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[18px] text-left text-[#333] font-[500]">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full rounded-none h-[54px]" />
                                </div>
                            </div>
                            <div className='lg:w-[48%] w-full'>
                                <div class="form-control w-full mb-[30px]">
                                    <label class="label">
                                        <span class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[18px] text-left text-[#333] font-[500]">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full rounded-none h-[54px]" />
                                </div>
                                <div class="form-control w-full mb-[30px]">
                                    <label class="label">
                                        <span class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[18px] text-left text-[#333] font-[500]">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" class="dark:border dark:border-gray-400 dark:text-[#cfd4da] dark:bg-[#2b2b2b] input input-bordered w-full h-[54px] rounded-none " />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-start'>
                            <button className='bg-primary text-white uppercase py-[13px] px-[29px] font-[500] text-[18px]'>create account</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;