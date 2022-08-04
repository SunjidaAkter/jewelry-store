import React, { useState } from 'react';
import { faMailBulk, faPhone, faHeart, faUser, faBars, faX, faAngleLeft, faToggleOff, faToggleOn, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../Pages/Home.css'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Cart from '../ProductDetail/Cart';
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
    const price = useSelector((state) => state.counter.price);
    const count = useSelector((state) => state.counter.count);
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
    }
    const dispatch = useDispatch();
    const wishlists = useSelector((state) => state.wishlistReducer.wishlist);
    const carts = useSelector((state) => state.cartsReducer.carts);

    return (
        <div>
            <div className='bg-[#F8F8F8] dark:bg-[#232323]'>
                <div className='px-16 py-[15px] flex lg:justify-between md:justify-end justify-end items-center'>
                    <div className='hidden lg:inline-flex gap-x-7'>
                        <Link to="/dashboard/profile" className='text-[.9rem] text-[#999999] dark:text-[#cfd4da] mb-0'><FontAwesomeIcon icon={faMailBulk} className='text-primary text-[.7rem] font-[300]' />{" "}multicart@gmail.com</Link>
                        <p className='text-[.9rem] text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faPhone} className='text-primary text-[.7rem] font-[300]' />{" "}Call Us: 123 - 456 - 7890</p>
                    </div>
                    <div className='inline-flex gap-x-7 items-center'>

                        {/* <div className='group'><p className='group-hover:text-primary text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-primary'></FontAwesomeIcon> Wishlist</p></div> */}
                        <div onClick={() => setOpen1(!open1)} >
                            {open1 ? <div className='group'><p className='group-hover:text-primary text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-primary'></FontAwesomeIcon> Wishlist</p></div> : <div className='group'><p className='group-hover:text-primary text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faHeart} className='group-hover:text-primary text-primary'></FontAwesomeIcon> Wishlist</p></div>}
                        </div>
                        {open1 && <div className={` z-40 h-[100vh] w-[70%] absolute`}>

                            <div className={`top-32 z-20 right-0 dark:text-[#cfd4da] dark:bg-[#2b2b2b]  bg-white duration-1000 ease-in-out transition w-[30%]  h-full ${open1 ? 'right-0 top-[0px] fixed' : 'right-[-50px] '}`}>
                                <ul class="menu p-0">
                                    <li tabindex="0">
                                        <div className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] hover:bg-white focus:bg-white my-6' onClick={() => setOpen1(!open1)} >
                                            {open1 ? <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[24px]  text-left ml-3 text-black font-[600] uppercase'><FontAwesomeIcon icon={faAngleLeft} className='' /> Back</p> : <FontAwesomeIcon icon={faBars} className='mr-3 text-[24px] font-[900] pr-[40px] text-[#222]'></FontAwesomeIcon>}
                                        </div>
                                        <hr className='mb-0 pb-0 hover:bg-white' />
                                        <div className='flex justify-center'>
                                            <p className='my-5 lato text-center font-[600] text-[24px] text-primary uppercase'>wish list</p>

                                        </div>
                                    </li>

                                    {wishlists && wishlists.map(p => <div className='px-7'>
                                        <div className='flex'>
                                            <img className='w-[30%]' src={p.img} alt="" />
                                            <div className='w-[70%]'>
                                                <p className='lato font-[600] text-[24px] text-left ml-2 hover:text-primary'>{p.name}</p>
                                                <p className='text-[20px] font-[500] text-left ml-2 hover:text-primary'>$60.00</p>

                                            </div>
                                        </div>
                                    </div>)}
                                </ul>
                            </div>
                        </div>}
                        <div class="dropdown dropdown-end dropdown-hover group ">
                            <label tabindex="0" class=""><p className='group-hover:text-primary text-[#999999] dark:text-[#cfd4da]'><FontAwesomeIcon icon={faUser} className='group-hover:text-primary text-primary'></FontAwesomeIcon> My Account</p></label>
                            <ul tabindex="0" class="dropdown-content menu dark:text-[#cfd4da] dark:bg-[#2b2b2b]   bg-base-100 w-52">
                                <div className='dark:text-[#cfd4da] dark:bg-[#232323] bg-[#f8f8f8] h-[15px]'></div>
                                <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] hover:bg-white text-left p-2 shadow ml-3 text-zinc-600'><Link to="/login">Login</Link><br /><Link to="/register">Register</Link><br />{user ? <p className='btn btn-ghost p-0 m-0' onClick={handleSignOut}>Logout</p> : <p className='text-[1px] p-0 m-0'></p>}</p>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="navbar border-b border-[#e7e7e7] px-10 bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li tabindex="0">
                                <a class="justify-between lato text-[24px] font-[500]">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2  z-50 bg-white">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between lato text-[24px] font-[500]">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between lato text-[24px] font-[500]">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between lato text-[24px] font-[500]">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between lato text-[24px] font-[500]">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl"><img className='w-[130px]' src="https://cdn.shopify.com/s/files/1/0013/2661/2531/files/logo_6c2c83c7-d9df-4e56-bdfb-2f8cda3894ce.png?v=1639992464" alt="" /></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">

                        <li tabindex="0">
                            <Link to='/' className='lato text-[16px] font-[500] hover:text-primary'>
                                HOME
                            </Link>

                        </li>
                        <li tabindex="0">
                            <a className='lato text-[16px] font-[500] hover:text-primary'>
                                SHOP
                            </a>
                        </li>
                        <li tabindex="0">
                            <Link to='/dashboard' className='lato text-[16px] font-[500] hover:text-primary'>
                                DASHBOARD
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul class="py-2 px-4 z-50 bg-white ">
                                <Link to='/dashboard' className='text-left my-1 hover:text-primary hover:bg-base-200 px-3 py-2 rounded-md'><a>B. Summary</a></Link>
                                <Link to="/dashboard/profile" className='text-left my-1 hover:text-primary hover:bg-base-200 px-3 py-2 rounded-md'><a>Profil</a></Link>
                                <Link to="/dashboard/review" className='text-left my-1 hover:text-primary hover:bg-base-200 px-3 py-2 rounded-md'><a>Add Review</a></Link>
                                <Link to="/dashboard/orders" className='text-left my-1 hover:text-primary hover:bg-base-200 px-3 py-2 rounded-md'><a>Orders</a></Link>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a className='lato text-[16px] font-[500] hover:text-primary'>
                                BLOG
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2  z-50 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a className='lato text-[16px] font-[500] hover:text-primary'>
                                PAGE
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2  z-50 bg-white">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div class="navbar-end">
                    <div className='inline-flex gap-x-7 items-center'>

                        <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg==" alt="" />
                        <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII=" alt="" />
                        <div className='indicator'>
                            <span class="indicator-item badge badge-sm bg-primary border-0 mt-[-5px] py-[7px] px-[5px] text-white ">{count}</span>

                            <div onClick={() => setOpen(!open)} >
                                {open ? <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII=" alt="" /> : <img className=' dark:invert' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII=" alt="" />}
                            </div>
                            {open && <div className={` z-40 h-[100vh] w-[80%] absolute`}>

                                <div className={`top-32 z-20 right-0 dark:text-[#cfd4da] dark:bg-[#2b2b2b]  bg-white duration-1000 ease-in-out transition w-1/5  h-full ${open ? 'right-0 top-[0px] fixed' : 'right-[-50px] '}`}>
                                    <ul class="menu p-0">
                                        <li tabindex="0">
                                            <div className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] hover:bg-white focus:bg-white my-6' onClick={() => setOpen(!open)} >
                                                {open ? <p className='dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-[24px]  text-left ml-3 text-black font-[600] uppercase'><FontAwesomeIcon icon={faAngleLeft} className='' /> Back</p> : <FontAwesomeIcon icon={faBars} className='mr-3 text-[24px] font-[900] pr-[40px] text-[#222]'></FontAwesomeIcon>}
                                            </div>
                                            <hr className='mb-0 pb-0 hover:bg-white' />
                                            <div className='flex justify-center'>

                                                <p className='my-5 uppercase lato font-[600] text-[24px] text-center text-primary'>Cart</p>
                                            </div>
                                        </li>

                                        {carts && carts.map(p => <div className='px-7'>
                                            <div className='flex'>
                                                <img className='w-[30%]' src={p.img} alt="" />
                                                <div className='w-[70%]'>
                                                    <p className='lato font-[600] text-[24px] text-left ml-2 hover:text-primary'>{p.name}</p>
                                                    <p className='text-[20px] font-[500] text-left ml-2 hover:text-primary'>${price}  <span className='text-primary'>({count})</span></p>

                                                </div>
                                            </div>
                                        </div>)}

                                    </ul>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
{/*<li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                clothing
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                bags
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                footwear
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] text-left ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                watches
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                accessories
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                house of design
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                beauty
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                personal care
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2 z-20">
                                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li tabindex="0">
                                                        <a class="justify-between">
                                                            Parent
                                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                                        </a>
                                                        <ul class="p-2">
                                                            <li><a>Submenu 1</a></li>
                                                            <li><a>Submenu 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Item 3</a></li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                home and decor
                                            </a>
                                        </li>
                                        <li tabindex="0">
                                            <a class="dark:text-[#cfd4da] dark:bg-[#2b2b2b] ml-6 mt-0 pt-0 pb-5 justify-between text-[19px] hover:bg-white hover:text-[#ff4c3b] text-[#222222] font-[400] uppercase">
                                                kitchen
                                            </a>
                                        </li> */}