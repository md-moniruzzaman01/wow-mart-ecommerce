import Link from 'next/link';
import React from 'react';


const Ads1 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="flex justify-center  bg-slate-300 items-center my-5 relative">
                <img src="https://i.ibb.co/mCK47H4/banner1.jpg" className='w-full' alt="" />
                <div className='absolute inset-y-1/6 md:inset-y-1/4  left-4 max-w-[15rem] md:max-w-xs space-y-0 md:space-y-5'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-white'>Meet Alpinerx Blue New Version</h2>
                    <p className='text-white'>It’s a long established fact that a reader.</p>
                    <Link  href="/products"><a> <button className='px-9 py-2 bg-white font-semibold'>Shop Now</button></a></Link>
                </div>
            </div>
            <div className="flex justify-center  bg-slate-500 items-center my-5 relative">
                <img src="https://i.ibb.co/9btBmXN/banner2.jpg" className='w-full' alt="" />
                <div className='absolute inset-y-1/6 md:inset-y-1/4  left-4 max-w-[15rem] md:max-w-xs space-y-0 md:space-y-5'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-white'>Toy Story Toons
                        Small Fry</h2>
                    <p className='text-white'>It’s a long established fact that a reader.</p>
                   <Link  href="/products"><a> <button className='px-9 py-2 bg-white font-semibold'>Shop Now</button></a></Link>
                </div>
            </div>
        </div>
    );
};

export default Ads1;