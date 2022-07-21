import Link from 'next/link';
import React from 'react';

import { IoDiamondOutline } from "react-icons/io5";
const Navtop = () => {
    return (
        <>
        <div className="container hidden   lg:flex items-center mx-auto gap-x-4  font-semibold text-xl border-b border-slate-200 ">
        <ul className="menu  w-3/12">
            <li>
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                   Browse Cetagories
                </a>
            </li>
        </ul>
        <ul className="menu menu-horizontal  w-6/12">


            <li> <Link href="/"><a>Home</a></Link> </li>
            <li><Link href="/shop"><a>Shop</a></Link></li>
            <li><Link href="/products"><a>Products</a></Link></li>
            <li><Link href="/blog"><a>Blogs</a></Link></li>
            <li><Link href="/contact"><a>Contact us</a></Link></li>
            <li><Link href="/about"><a>About us</a></Link></li>
        </ul>
        <ul className="menu  w-3/12">
            <li><a > <span><IoDiamondOutline/></span> Clearance Up to 30% Off</a></li>
        </ul>
    </div>

<div className='flex justify-center h-16 mx-auto md:hidden py-2 bg-secondary '>
<input className='bg-gray-100 px-7 rounded-l-md w-8/12' type="search" name="search" id="" placeholder='Search here....' />
<button className='flex  justify-center items-center px-0.5 bg-slate-200 rounded-r-md pr-2'>Search</button>
</div>
</>
    );
};

export default Navtop;