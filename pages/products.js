import React from 'react';
import Card from '../components/Card';
import Layout from "../components/Layout";
const Products = ({data}) => {
    console.log(data);
    return (
        <>
        <Layout>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {data.map(pd => <Card cardProduct={pd} key={pd._id}></Card>)}
                
            </div>
        </Layout>
    </>
    );
};

export default Products;

export async function getServerSideProps() {
    const res = await fetch(`https://obscure-stream-41015.herokuapp.com/products`)
    const data = await res.json()
    return {
      props: { data },
      
    }
  }
  