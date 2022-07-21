import Link from 'next/link';
import React from 'react';
import { AiOutlineFire } from "react-icons/ai";
import { RiComputerLine,RiEyeCloseLine } from "react-icons/ri";
import { TbLamp } from "react-icons/tb";
import { FaTshirt,FaBaby } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
const TreindingNavbar = () => {
    return (
        
             <div className='static lg:flex justify-center items-center l border-b mx-2 pb-2 mt-7'>
            <h2 className='text-xl md:text-3xl font-semibold text-secondary mr-2 text-center'>Search Trending</h2>
           <ul className='flex md:justify-between   text-neutra  font-semibold  flex-wrap '>
                <li><Link  href="/"><a className='  btn btn-sm md:btn-md btn-ghost   mt-2  flex items-center justify-center my-2 text-sm md:text-base rounded-3xl'><span className='text-xl'><AiOutlineFire/></span> Top Treinding</a></Link></li>
                <li><Link   href="/"><a className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl '><span className='text-xl mr-1'><RiComputerLine/></span> Electronic</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl'><TbLamp/></span> Furniture</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><FaTshirt/></span> Germent</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><RiEyeCloseLine/></span> Health & Beauty</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><BsHandbag/></span> Handbag</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost   mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><FaBaby/></span> Mom & baby</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><BiBook/></span> Book & Office</a></Link></li>
            </ul>
        </div>
        
    );
};

export default TreindingNavbar;