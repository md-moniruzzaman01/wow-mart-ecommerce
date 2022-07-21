import React from 'react';
import { BsTelephone } from "react-icons/bs";
const Navtop = () => {
    const liLinks =
    <>
        <li className="hover:text-primary"><a>My Account</a></li>
        <li className="hover:text-primary"><a>My Wishlist</a></li>
        <li className="hover:text-primary"><a>Checkout</a></li>
        {/* <div className="flex items-center">

            <input type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="toggle toggle-md" checked />
        </div> */}


    </>
    return (
        <div className="bg-secondary text-base-100">
        {/* top nav bar section  */}
        <div className="container flex justify-between  mx-auto border-b border-slate-300">
            <div className="flex items-center py-2 hover:text-primary ml-2">
                <p><BsTelephone /></p>
                <p className="pl-1">Call: +8801881965826</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 hidden md:flex ">
                    {liLinks}

                </ul>

                <div className="dropdown dropdown-end block md:hidden">
                    <label tabIndex="0" className="btn btn-ghost">
                        <p className="flex items-center hover:text-primary">
                            Links<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </p>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-white rounded-box w-32 text-neutral">
                        {liLinks}

                    </ul>
                </div>

            </div>


        </div>

    </div>
    );
};

export default Navtop;