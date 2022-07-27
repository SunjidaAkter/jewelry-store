import React from 'react';
import { BadgeCheckIcon, ChatIcon, ClipboardCheckIcon, ClipboardIcon, UserAddIcon, UserIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { Link, Outlet } from "react-router-dom";


const Dashboard = ({ children }) => {
    return (
        <div class='drawer drawer-mobile mt-16 bg-white'>
            <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col '>
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>
            </div>
            <div class='drawer-side '>
                <label for='my-drawer-2' class='drawer-overlay'></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content shadow-inner">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard"><UserIcon className="w-4 h-4 mr-1"></UserIcon> My Profile</Link></li>
                    <li><Link className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/profile"><UserIcon className="w-4 h-4 mr-1"></UserIcon> My Profile</Link></li>

                    <li><Link className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/review"><ChatIcon className="w-4 h-4 mr-1"></ChatIcon> Add Review</Link></li>
                    <li><Link className="font-normal mt-2 flex text-[15px]  items-center" to="/dashboard/orders"><BadgeCheckIcon className="w-4 h-4 mr-1"></BadgeCheckIcon> My Orders</Link></li>


                </ul>
            </div>
        </div>
    );
};

export default Dashboard;