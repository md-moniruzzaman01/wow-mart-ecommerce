import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo.png';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
const Navlogo = () => {
    return (
        <div className='flex justify-between items-center bg-secondary'>
            <div>

                <Link href="/">
                    <a className="flex-1 px-2 mx-2 text-4xl flex items-center text-base-100">

                        <Image src={logo} width={70} height={50} alt="" />

                        <p className=''>wow-mart</p>
                    </a>
                </Link>
            </div>

          





            <div className="dropdown dropdown-end block md:hidden">
                <label tabIndex="2" className="btn btn-ghost">
                    <p className="flex items-center text-base-100 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </p>
                </label>
                <ul tabIndex="2" className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-white rounded-box w-32 text-neutral">

                    <li> <Link href="/"><a>Home</a></Link> </li>
                    <li><Link href="/shop"><a>Shop</a></Link></li>
                    <li><Link href="/products"><a>Products</a></Link></li>
                    <li><Link href="/blog"><a>Blogs</a></Link></li>
                    <li><Link href="/contact"><a>Contact us</a></Link></li>
                    <li><Link href="/about"><a>About us</a></Link></li>
                </ul>
            </div>






            <div className='w-6/12 hidden lg:flex mx-auto my-4'>
                <input className='bg-gray-200 px-7 rounded-l-3xl w-11/12 h-11 text-gray-800' type="search" name="search" id="" placeholder='Search here....' />
                <button className='flex  justify-center font-semibold items-center px-5 bg-gray-300 rounded-r-3xl h-11'>Search</button>
            </div>


            <div className="flex-none  w-3/12 hidden lg:flex justify-end text-base-100">
                <ul className="menu menu-horizontal mr-5">

                    <li><a className='text-4xl'><AiOutlineUser /></a></li>
                    <li><a className='text-4xl relative'><AiOutlineShoppingCart />  <div className="badge bg-red-500 text-white absolute top-2 left-11">0</div></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navlogo;