import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const SectionHead = ({children}) => {
    return (
        <div className="flex justify-between items-center py-2 mx-2 border-b">
            <h2 className="text-3xl">{children}</h2>
            <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward /></span></button></a></Link>
          </div>
    );
};

export default SectionHead;