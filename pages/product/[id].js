
import Link from 'next/link';

import { AiOutlineFire } from "react-icons/ai";
import { RiComputerLine,RiEyeCloseLine } from "react-icons/ri";
import { TbLamp } from "react-icons/tb";
import { FaTshirt,FaBaby } from "react-icons/fa";
import { BsHandbag , BsPlus } from "react-icons/bs";
import { BiBook } from "react-icons/bi";

import { useState } from "react";

import { HiMinusSm } from "react-icons/hi";
import Layout from "../../components/Layout";

const Productdetail = ({ data }) => {
    const [quantity, setQuantity] = useState(1)
    const incressquantity = () => {
        setQuantity(quantity + 1)
    }
    const dicressquantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            return
        }

    }

    const { title, picture, driscribtion, price } = data[0];




    return (
        <Layout title={title}>

            <div className="detailpage">
                <div>
                    <h2 className="text-3xl font-semibold text-center">Cetagories</h2>
                    <ul>

                <li><Link  href="/"><a className='  btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl'><span className='text-xl'><AiOutlineFire/></span> Top Treinding</a></Link></li>
                <li><Link  href="/"><a className='  btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl '><span className='text-xl mr-1'><RiComputerLine/></span> Electronic</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl'><TbLamp/></span> Furniture</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><FaTshirt/></span> Germent</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><RiEyeCloseLine/></span> Health & Beauty</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><BsHandbag/></span> Handbag</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost   mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><FaBaby/></span> Mom & baby</a></Link></li>
                <li> <Link href="/"><a  className=' btn btn-sm md:btn-md btn-ghost  mt-2  text-center  my-2 text-sm md:text-base rounded-3xl' ><span className='text-xl mr-1'><BiBook/></span> Book & Office</a></Link></li>
                    </ul>
                </div>
                <div className=' static md:flex justify-between mt-5'>
                    <div className='w-full md:w-6/12 m-4'>
                        <img className='w-10/12 mx-auto' src={picture} alt="" />
                    </div>
                    <div className='w-10/12 md:w-7/12 mx-auto md:mx-11 my-11'>
                        <h1 className='font-semibold text-xl md:text-2xl'>{title}</h1>
                        <div className='py-1 md:py-3 bg-success my-5 w-11/12'><p className='text-2xl font-semibold ml-5'>{price}</p></div>
                        <article>
                            {driscribtion}
                        </article>
                        <div className="flex  items-center mt-5">
                            <div className="flex items-center ">

                                <button onClick={dicressquantity} className="text-base md:text-3xl p-.5 bg-success"><BsPlus /></button>
                                <p className="px-4 text-base md:text-xl">{quantity}</p>
                                <button onClick={incressquantity} className="text-base md:text-3xl p-.5 bg-success"><HiMinusSm /></button>

                            </div>

                            <div>
                                <button className='bg-amber-400 px-5 md:px-11 py-1 md:py-2 text-gray-800 font-semibold text-base md:text-xl ml-5 md:ml-11'>Add to Card</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Layout>
    );
};


export async function getServerSideProps(context) {
    const { id } = await context.query;

    const res = await fetch(`https://obscure-stream-41015.herokuapp.com/product/${id}`);
    const data = await res.json();

    return { props: { data } };
}

export default Productdetail;