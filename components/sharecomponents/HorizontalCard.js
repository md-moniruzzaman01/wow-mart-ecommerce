import Link from 'next/link';
import React from 'react';
import {  BsStarHalf, BsStarFill } from 'react-icons/bs';
const HorizontalCard = ({bestsell}) => {

    const { picture, title, sells, star,price,_id } = bestsell;
    const starCount = star || 3.6
    const startsNumer = Math.floor(starCount)
    const halfstart = Math.ceil(starCount - startsNumer)
    let starts = []
    for (var index = 0; index < startsNumer; index++) {
        starts.push(<BsStarFill />)
    }
    let half = []
    for (var i = 0; index < halfstart; i++) {
        starts.push(<BsStarHalf />)
    }


    return (
        <>
                   <div className="bg-base-100 rounded flex justify-between items-center ">
            <div className='w-5/12 flex justify-start items-center mx-auto py-2'>
                 <img src={picture} alt=""  className='h-40 rounded m-2' />
                  </div>
            <div className='w-7/12 space-y-4'>
            <Link href={`product/${_id}`}><a ><p className='font-semibold text-neutral hover:text-blue-800 hover:underline'>{title}</p></a></Link>
                <div className='flex justify-between items-center'>
                    <p className="flex text-amber-500">
                        <span className="flex">
                            {
                                starts.map((start, index) => <span key={index}>{start}</span>)
                            }
                        </span>
                        <span className="flex">
                            {
                                half.map((hf, index) => <span key={index}>{hf}</span>)
                            }
                        </span>
                    </p>

                    <p >{sells} Sold</p>
                </div>
                <div className='flex justify-between items-center mt-3 '>
                    <p className='text-xl'>${price}</p>
                    <button className='bg-[#fcb941] px-5 py-1.5 text-gray-800 font-semibold'>Add to Card</button>
                </div>
            </div>


        </div>
        </>
    );
};

export default HorizontalCard;