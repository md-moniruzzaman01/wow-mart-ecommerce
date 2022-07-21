import React from 'react';
import {BsStarHalf, BsStarFill } from 'react-icons/bs';
import Link from 'next/link';
const Card = ({cardProduct}) => {
    const { picture, title,_id,sells,price,star} = cardProduct;
    const starCount = star || 3.6
    const startsNumer = Math.floor(starCount)
    const halfstart = Math.ceil(starCount - startsNumer)
    let starts = []
    for (var index = 0; index < startsNumer; index++) {
        starts.push(<BsStarFill />)
    }
    let half = []
    for (var i= 0; index < halfstart; i++) {
        starts.push(<BsStarHalf />)
    }

    return (
        <div className="bg-gray-100 p-2 rounded">
        <div className='w-full flex justify-center items-center mx-auto'> <img src={picture} alt="" className='h-52 w-full rounded' /> </div>
        <Link href={`product/${_id}`}><a ><p className='font-semibold h-16 hover:text-blue-800 hover:underline'>{title}</p></a></Link>
        <div className='flex justify-between items-center'>
            <p className="flex text-amber-500">
                <span className="flex">{starts.map((start, index) => <span key={index}>{start}</span>)}</span>
                <span className="flex">{half.map((hf, index) => <span key={index}>{hf}</span>)}</span>
            </p>

            <p >{sells} Sold</p>
        </div>
       <div className='flex justify-between items-center mt-3 '>
       <p className='text-xl'>${price}</p>
       <button className='bg-[#fcb941] px-5 py-1.5 text-gray-800 font-semibold'>Add to Card</button>
       </div>


    </div>
    );
};

export default Card;