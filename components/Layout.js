
import React from 'react';
import Head from 'next/head'
import Link from 'next/link';
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
                        <Link href="/"><a >wow-mart</a></Link>
                    </nav>
                </header>
                <main>{children} </main>
                <footer>
                    footer
                </footer>
            </div>
        </>
    );
};

export default Layout;