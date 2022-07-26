
import React from 'react';
import Head from 'next/head'

import Footer from './Footer/Footer';
import Navbottom from './Navbar/Navbottom'
import Navtop from './Navbar/Navtop';
import Navlogo from './Navbar/Navlogo';
const Layout = ({title, children }) => {
    return (
        <>

            <Head>
                <title>{title? title + '- wow-mart' : 'wow-mart'}</title>
                <meta name="description" content="E-commerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=' min-h-screen  '>
                <header>
                    <nav>
                        <Navtop></Navtop>
                        <Navlogo/>
                       <Navbottom></Navbottom>
                    </nav>
                </header>
                <main className='container mx-auto'>{children} </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </>
    );
};

export default Layout;