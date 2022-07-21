
import React from 'react';
import Head from 'next/head'

import Footer from './Footer/Footer';
import Navbottom from './Navbar/Navbottom'
import Navtop from './Navbar/Navtop';
const Layout = ({title, children }) => {
    return (
        <>

            <Head>
                <title>{title? title + '- wow-mart' : 'wow-mart'}</title>
                <meta name="description" content="E-commerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=' min-h-screen  container mx-auto'>
                <header>
                    <nav>
                        <Navtop></Navtop>
                       <Navbottom></Navbottom>
                    </nav>
                </header>
                <main>{children} </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </>
    );
};

export default Layout;