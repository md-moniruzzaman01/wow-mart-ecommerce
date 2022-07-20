import React from 'react';
import Link from 'next/link';
const Card = ({cardProduct}) => {
    const { picture, title,_id,sells,price} = cardProduct;
    return (
        <div className="bg-base-100 p-2 rounded">
        <div className='w-full flex justify-center items-center mx-auto'> <img src={picture} alt="" className='h-11s w-full rounded' /> </div>
        <Link href={`product/${_id}`}><a ><p className='font-semibold  hover:text-blue-800 hover:underline'>{title}</p></a></Link>
        <div className='flex justify-between items-center'>
            <p className="flex text-amber-500">
                <span className="flex">{starts.map((start, index) => <span key={index}>{start}</span>)}</span>
                <span className="flex">{half.map((hf, index) => <span key={index}>{hf}</span>)}</span>
            </p>

            <p >{sells} Sold</p>
        </div>
       <div className='flex justify-between items-center mt-3 '>
       <p className='text-xl'>${price}</p>
       <button className='bg-yellow-600 px-5 py-1.5 text-gray-800 font-semibold'>Add to Card</button>
       </div>


    </div>
    );
};

export default Card;