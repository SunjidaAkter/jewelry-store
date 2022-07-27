import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    BookOpenIcon,
    MailIcon,
    MapIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/solid";
import '../Home.css'

const Profile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="bg-[#f8f8f8] h-full">
            <div className="px-5 text-primary ">
                <h1 className="text-7xl font-[900] pt-16 pb-0 uppercase text-center cormorant">
                    {" "}
                    My Profile
                </h1>
                <div className="lg:px-24 px-2 bg-[#f8f8f8] pt-10 bg-opacity-90 h-full w-full mx-auto">
                    <div className='flex justify-center flex-col lg:flex-row'>
                        <div className=" pl-40 pt-5 flex-col md:flex-row ">
                            <div className="avatar online">
                                <div className="w-40 rounded-full">
                                    <img
                                        src={
                                            user?.photoURL
                                                ? user?.photoURL
                                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTbKKhH9dSn7E0cXM-WUHRCAgDbHsMUfpeQ&usqp=CAU"
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold text-primary lato mt-5 ">
                                    {user?.displayName}
                                </h1>

                            </div>
                        </div>

                        <div className="flex flex-col  justify-between  mx-auto mt-16">
                            <div className="  ">
                                <h2 className="flex text-3xl font-semibold text-primary ">
                                    Information
                                </h2>
                                <p className="mt-2 flex text-[18px] font-[600] text-[#868686] items-center">
                                    <UserIcon className="w-6 h-6 mr-3 text-primary"></UserIcon>{" "}
                                    {user?.displayName}
                                </p>
                                <p className="mt-2 flex text-[18px] font-[600] text-[#868686] items-center">
                                    <MailIcon className="w-6 h-6 mr-3  text-primary"></MailIcon>{" "}
                                    {user?.email}
                                </p>
                                <p className="mt-2 flex text-[18px] font-[600] text-[#868686] items-center">
                                    <PhoneIcon className="w-6 h-6 mr-3  text-primary"></PhoneIcon>{" "}
                                    +88-{user?.phone ? user?.phone : "Not Available"}
                                </p>
                                {/*<p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <MapIcon className="w-6 h-6 mr-3  text-primary"></MapIcon>{" "}
                                    {currentUser?.address
                                        ? currentUser.address
                                        : "No address given"}
                                </p>

                                <p className="mt-2 flex text-[15px] text-teal-200 items-center">
                                    <BookOpenIcon className="w-6 h-6 mr-3 text-primary"></BookOpenIcon>{" "}
                                    {currentUser?.study
                                        ? currentUser.study
                                        : "Study info not given"}
                                </p>
                            </div>
                            <div className=" mt-12 ">
                                <h2 className="text-2xl font-semibold text-primary ">
                                    Social Media
                                </h2>
                                <p className="mt-3 flex items-center text-teal-200">
                                    <img src={facebook} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.facebook ? currentUser.facebook
                                            : "Facebook info not given"}

                                    </span>
                                </p>
                                <p className="mt-2 flex items-center text-teal-200">
                                    <img src={insta} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.instagram
                                            ? currentUser.instagram
                                            : "Instagram info not given"}
                                    </span>
                                </p>
                                <p className="mt-2 flex items-center text-teal-200">
                                    <img src={twitter} className="w-6 mr-4 rounded-full" alt="" />
                                    <span className="text-sm italic">
                                        {currentUser?.twitter
                                            ? currentUser.twitter
                                            : "Twitter info not given"}
                                    </span>
                                </p> */}
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Profile;