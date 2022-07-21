import Link from 'next/link';
import React from 'react';
import Card from '../Card';

const Recomendetion = ({recommend}) => {
    
    return (
        <>
       


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
        {
                recommend.map(fd=> <Card key={fd._id} cardProduct={fd}></Card>)
            }
        </div>
        <div className="flex justify-center my-5 pb-4">
        <Link href="/products"><a><button className=' px-11 py-2 font-semibold bg-gray-800 text-white  text-xl'>View All</button></a></Link> 

        
        </div>
    </>
    );
};

export default Recomendetion;